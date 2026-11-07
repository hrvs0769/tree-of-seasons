'use strict';
/**
 * QA Runner 浏览器 harness：
 * - 从固定路径加载 playwright-core
 * - Chromium 候选（CHROME_BIN → ms-playwright chromium-1208 → /Applications/Google Chrome）
 * - 每条 case 使用独立 BrowserContext，避免 cookie/localStorage/页面状态互相污染
 * - 自动收集 console error / pageerror / requestfailed / response status
 * - 证据截图 qa/evidence/<ID>.jpg（JPEG quality 80，viewport 截图，宽 ≤1440）
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const http = require('http');
const https = require('https');

const PLAYWRIGHT_PATH = '/Users/liuhuirong/.dsh/profiles/web/node_modules/playwright-core';

function loadPlaywright() {
  try {
    return require(PLAYWRIGHT_PATH);
  } catch (e) {
    throw new Error(`无法加载 playwright-core（${PLAYWRIGHT_PATH}）：${e.message}`);
  }
}

function chromiumCandidates() {
  return [
    process.env.CHROME_BIN,
    path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium-1208/chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);
}

function findChromium() {
  for (const c of chromiumCandidates()) {
    try { if (fs.statSync(c).isFile()) return c; } catch (e) { /* next */ }
  }
  return null;
}

const LAUNCH_ARGS = [
  '--no-sandbox',
  '--use-gl=angle',
  '--use-angle=swiftshader',
  '--enable-unsafe-swiftshader',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--disable-dev-shm-usage',
];

class SkipError extends Error {
  constructor(message) { super(message); this.name = 'SkipError'; this.skip = true; }
}

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

class QaContext {
  constructor(opts) {
    this.browser = opts.browser;
    this.baseUrl = opts.baseUrl || '';
    this.root = opts.root;
    this.evidenceDir = opts.evidenceDir;
    this.viewport = opts.viewport || { width: 1440, height: 900 };
    this.evidence = opts.evidence !== false;
    this.caseId = null;
    this.caseEvidence = [];
    this.sessions = [];
    this.shared = new Map();
    this.browserInfo = opts.browserInfo || {};
  }

  beginCase(id) {
    this.caseId = id;
    this.caseEvidence = [];
  }

  url(u) {
    if (/^(https?:|file:|data:|about:)/.test(u)) return u;
    const base = this.baseUrl.replace(/\/$/, '');
    return base + (u.startsWith('/') ? u : '/' + u);
  }

  async open(relUrl, opts = {}) {
    // 复用一个已初始化的页面：软件 GL 下每次冷启动约 15–25s，只读/可复位检查共享页面。
    const SHAREABLE = new Set([
      '?ui=1&t0=0&freeze', '?ui=1&t0=100&freeze', '?ui=1&t0=128&freeze', '?ui=1&t0=210&freeze',
      '?class&t0=0&freeze', '?class&t0=100&freeze', '?class&t0=210&freeze', '?class&t0=210&freeze&dbg',
      '?dbg&ui=1&t0=210&freeze', '?ui=1&t0=210&freeze',
    ]);
    const shareKey = opts.sharedKey || (opts.fresh ? null : (SHAREABLE.has(relUrl) ? relUrl + '|' + JSON.stringify(opts.viewport || this.viewport) + '|' + (opts.reducedMotion || '') : null));
    if (shareKey && this.shared.has(shareKey)) {
      const s = this.shared.get(shareKey);
      await this.resetShared(s, relUrl);
      return s;
    }
    const context = await this.browser.newContext({
      viewport: opts.viewport || this.viewport,
      deviceScaleFactor: 1,
      reducedMotion: opts.reducedMotion || 'no-preference',
      locale: opts.locale || 'zh-CN',
      acceptDownloads: false,
      ignoreHTTPSErrors: true,
    });
    const page = await context.newPage();
    page.setDefaultTimeout(opts.defaultTimeout || 45000);
    const session = {
      context, page,
      consoleErrors: [], consoleWarnings: [], pageErrors: [], failedRequests: [], responses: [],
      url: this.url(relUrl),
      autoEvidence: opts.autoEvidence !== false,
      closed: false,
      baseViewport: opts.viewport || this.viewport,
    };
    page.on('console', (m) => {
      const txt = m.text();
      if (m.type() === 'error') session.consoleErrors.push(txt);
      else if (m.type() === 'warning') session.consoleWarnings.push(txt);
    });
    page.on('pageerror', (e) => session.pageErrors.push(String(e && e.stack || e)));
    page.on('requestfailed', (req) => {
      const failure = req.failure();
      session.failedRequests.push({ url: req.url(), error: failure ? failure.errorText : 'unknown', resourceType: req.resourceType() });
    });
    page.on('response', (res) => {
      session.responses.push({ url: res.url(), status: res.status(), type: res.request().resourceType() });
    });
    if (shareKey) { session.sharedKey = shareKey; this.shared.set(shareKey, session); }
    this.sessions.push(session);
    if (opts.goto !== false) {
      // 软件 GL 下整页 load 可能等待音频等资源很久；DOMContentLoaded 已足够，后续 waitForFunction 再等 #loading 消失
      await page.goto(session.url, { waitUntil: 'domcontentloaded', timeout: opts.gotoTimeout || 120000 });
    }
    if (opts.waitReady !== false) {
      await page.waitForFunction(() => {
        const loading = document.getElementById('loading');
        const loadingGone = !loading || getComputedStyle(loading).display === 'none';
        return !!window.__classroom && !!document.querySelector('#app canvas') && loadingGone;
      }, null, { timeout: opts.readyTimeout || 60000 }).catch((e) => {
        throw new Error(`页面未就绪：${e.message.split('\n')[0]}`);
      });
    }
    if (opts.waitMs) await sleep(opts.waitMs);
    return session;
  }

  async close(session) {
    if (!session || session.closed) return;
    if (this.evidence && this.caseEvidence.length === 0 && session.autoEvidence !== false) {
      try { await this.shot(session, this.caseId); } catch (e) { /* 失败时截图失败不掩盖原始错误 */ }
    }
    if (session.sharedKey) return; // 共享页留给后续 case
    session.closed = true;
    const idx = this.sessions.indexOf(session);
    if (idx >= 0) this.sessions.splice(idx, 1);
    try { await session.context.close(); } catch (e) { /* ignore */ }
  }

  async closeAll() {
    for (const s of this.sessions.slice()) {
      if (s.sharedKey) continue;
      try { await this.close(s); } catch (e) { /* ignore */ }
    }
  }

  async resetShared(session, relUrl) {
    if (!session || !session.page || (session.page.isClosed && session.page.isClosed())) return;
    // 共享页可能被 responsive 检查改过视口，先恢复该 URL 对应的基准视口
    try {
      const vp = session.baseViewport;
      const cur = session.page.viewportSize();
      if (!cur || cur.width !== vp.width || cur.height !== vp.height) await session.page.setViewportSize(vp);
    } catch (e) { /* ignore */ }
    // 弹层先用 Esc 走 closeAllModals，恢复 inert 与焦点
    const hasModal = await session.page.evaluate(() => !!document.querySelector('.modal.show')).catch(() => false);
    if (hasModal) { try { await session.page.keyboard.press('Escape'); } catch (e) {} }
    const baseT = (() => { const m = /[?&]t0=([\d.]+)/.exec(relUrl); return m ? parseFloat(m[1]) : 0; })();
    const isClass = /[?&]class(=|&|$)/.test(relUrl);
    await session.page.evaluate(({ baseT, isClass }) => {
      const c = window.__classroom;
      try { c.stopFindGame(); } catch (e) {}
      try { if (c.speech && c.speech.resetForTest) c.speech.resetForTest(); } catch (e) {}
      document.querySelectorAll('.modal.show, .modal.closing').forEach((m) => m.classList.remove('show', 'closing'));
      const part = document.getElementById('partCard');
      if (part) part.classList.remove('show');
      document.body.classList.remove('projector', 'idle', 'dragging');
      const st = c.state();
      if (isClass && !st.classroomMode) c.enter({ reset: false, fullscreen: false, autoplay: false });
      if (!isClass && st.classroomMode) c.exit();
      const frozen = /[?&]freeze(=|&|$)/.test(location.search);
      if (frozen) {
        c.seekForTest(baseT);
      } else {
        const tl = document.getElementById('timeline');
        tl.value = String(baseT);
        tl.dispatchEvent(new Event('input', { bubbles: true }));
        tl.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, { baseT, isClass });
    session.consoleErrors.length = 0;
    session.pageErrors.length = 0;
    session.failedRequests.length = 0;
    session.responses.length = 0;
    session.autoEvidence = true;
  }

  async disposeAll() {
    for (const s of this.sessions.slice()) {
      try { await this.close(s); } catch (e) { /* ignore */ }
    }
    this.sessions = [];
    this.shared.clear();
  }

  async shot(session, name, opts = {}) {
    if (!this.evidence) return null;
    if (!session || !session.page || session.page.isClosed && session.page.isClosed()) return null;
    const safe = String(name || this.caseId || 'case').replace(/[^A-Za-z0-9._-]+/g, '-');
    const file = path.join(this.evidenceDir, safe + '.jpg');
    fs.mkdirSync(this.evidenceDir, { recursive: true });
    await session.page.screenshot({
      path: file,
      type: 'jpeg',
      quality: 80,
      fullPage: false,
      timeout: 120000,
    });
    const rel = 'evidence/' + path.basename(file);
    if (this.caseId && !this.caseEvidence.includes(rel)) this.caseEvidence.push(rel);
    return rel;
  }
}

/** 读取画布像素统计（需 ?dbg 暴露 __renderer/__scene/__camera；调用内立即 render + readPixels） */
async function canvasStats(page) {
  return page.evaluate(() => {
    const r = window.__renderer, s = window.__scene, c = window.__camera;
    if (!r || !s || !c) return null;
    r.render(s, c);
    const gl = r.getContext();
    const w = gl.drawingBufferWidth;
    const h = gl.drawingBufferHeight;
    const px = new Uint8Array(w * h * 4);
    gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, px);
    let sum = 0, nonBlack = 0, samples = 0;
    for (let i = 0; i < px.length; i += 64) {
      const l = 0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2];
      sum += l;
      if (l > 8) nonBlack++;
      samples++;
    }
    const info = r.info;
    return {
      width: w, height: h,
      avgLum: +(sum / Math.max(1, samples)).toFixed(2),
      nonBlackRatio: +(nonBlack / Math.max(1, samples)).toFixed(4),
      calls: info.render.calls,
      triangles: info.render.triangles,
      geometries: info.memory.geometries,
      textures: info.memory.textures,
    };
  });
}

/** 简易 HTTP 请求（release 检查用，走 Node 而不是浏览器） */
function httpRequest(url, opts = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const mod = u.protocol === 'https:' ? https : http;
    const req = mod.request({
      protocol: u.protocol,
      hostname: u.hostname,
      port: u.port,
      path: u.pathname + u.search,
      method: opts.method || 'GET',
      headers: opts.headers || {},
      timeout: opts.timeout || 20000,
    }, (res) => {
      const chunks = [];
      res.on('data', (d) => chunks.push(d));
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks),
        });
      });
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
    req.end();
  });
}

module.exports = {
  loadPlaywright, findChromium, chromiumCandidates, LAUNCH_ARGS,
  QaContext, SkipError, assert, sleep, canvasStats, httpRequest,
};
