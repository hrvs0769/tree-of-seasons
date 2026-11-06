#!/usr/bin/env node
/**
 * 独立 Playwright 截图器：不依赖共享浏览器实例，可指定视口、点击与等待。
 * 用法:
 *   node tools/ui-shot.js <url> <out.png> [width] [height] '[actions-json]' [waitMs]
 * actions 例:
 *   '[{"click":"#classChapterBtn","wait":300},{"eval":"window.__classroom.seekForTest(210)","wait":200}]'
 */
const path = require('path');
const os = require('os');
const { chromium } = require('/Users/liuhuirong/.dsh/profiles/web/node_modules/playwright-core');

const CANDIDATES = [
  process.env.CHROME_BIN,
  path.join(os.homedir(), 'Library/Caches/ms-playwright/chromium-1208/chrome-mac-x64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const [, , url, out, w = '1280', h = '800', actions = '[]', waitMs = '900'] = process.argv;
if (!url || !out) {
  console.error('usage: node tools/ui-shot.js <url> <out.png> [w] [h] [actions-json] [waitMs]');
  process.exit(1);
}

(async () => {
  let executablePath = null;
  for (const c of CANDIDATES) { if (require('fs').existsSync(c)) { executablePath = c; break; } }
  if (!executablePath) throw new Error('找不到 Chromium/Chrome，可设置 CHROME_BIN');
  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--hide-scrollbars', '--force-device-scale-factor=1'],
  });
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  page.setDefaultTimeout(90000);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(350);
  let acts = [];
  try { acts = JSON.parse(actions); } catch (e) { throw new Error('actions 不是合法 JSON: ' + actions); }
  for (const a of acts) {
    if (a.click) await page.click(a.click);
    if (a.hover) await page.hover(a.hover);
    if (a.eval) await page.evaluate(a.eval);
    if (a.wait) await page.waitForTimeout(a.wait);
  }
  await page.waitForTimeout(+waitMs);
  await page.screenshot({ path: out, fullPage: false, timeout: 120000 });
  const state = await page.evaluate(() => {
    const rr = (id) => { const e = document.getElementById(id); if (!e) return null; const b = e.getBoundingClientRect(); const cs = getComputedStyle(e); return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height), display: cs.display, color: cs.color }; };
    return {
      url: location.href,
      body: document.body.className,
      season: document.body.dataset.season,
      rects: { top: rr('classroomTop'), subtitle: rr('subtitleBar'), bar: rr('classroomBar'), app: rr('app'), toptext: rr('subtitleText') },
      vars: { classTop: getComputedStyle(document.documentElement).getPropertyValue('--class-top'), classBottom: getComputedStyle(document.documentElement).getPropertyValue('--class-bottom') },
    };
  }).catch(() => ({}));
  console.log(JSON.stringify({ ok: true, out, state, errors }, null, 2));
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
