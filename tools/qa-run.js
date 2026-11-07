#!/usr/bin/env node
'use strict';
/**
 * 「一棵树的四季」自动化测试 Runner
 * 用法:
 *   node tools/qa-run.js --version v4.0.0 --label "第四轮 · 可视化测试看板" \
 *     [--base-url http://127.0.0.1:8777] [--only BOOT,PLAY] [--headed] [--no-evidence]
 *
 * 契约见 qa/CONTRACT.md §4–§6。
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { loadPlaywright, findChromium, QaContext, LAUNCH_ARGS, SkipError, sleep } = require('./qa/harness');
const { createStaticServer, closeServer } = require('./qa/server');
const { build, syntheticCatalog } = require('./qa/registry');

const ROOT = path.resolve(__dirname, '..');
const QA_DIR = path.join(ROOT, 'qa');
const DATA_DIR = path.join(QA_DIR, 'data');
const EVIDENCE_DIR = path.join(QA_DIR, 'evidence');
const CATALOG_FILE = path.join(DATA_DIR, 'catalog.json');
const RESULTS_FILE = path.join(DATA_DIR, 'results.json');
const HISTORY_FILE = path.join(DATA_DIR, 'history.json');

const MODULE_ALIASES = {
  BOOT: 'boot', STARTUP: 'boot',
  SCENE: 'scene', SCENES: 'scene',
  STORY: 'story', CHAPTER: 'story', CHAPTERS: 'story',
  PLAY: 'player', PLAYER: 'player', AUDIO: 'player',
  CLASS: 'classroom', CLASSROOM: 'classroom',
  EXPLORE: 'explore', FIND: 'explore',
  RESP: 'responsive', RESPONSIVE: 'responsive', LAYOUT: 'responsive',
  A11Y: 'a11y', ACCESSIBILITY: 'a11y',
  PERF: 'perf', PERFORMANCE: 'perf',
  REL: 'release', RELEASE: 'release', DEPLOY: 'release',
};

function parseArgs(argv) {
  const args = { version: 'v4.0.0', label: '', baseUrl: '', only: '', headed: false, evidence: true, timeout: 45000, retryFailed: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const next = () => argv[++i];
    if (a === '--version') args.version = next();
    else if (a === '--label') args.label = next();
    else if (a === '--base-url') args.baseUrl = next();
    else if (a === '--only') args.only = next();
    else if (a === '--headed') args.headed = true;
    else if (a === '--no-evidence') args.evidence = false;
    else if (a === '--retry-failed') args.retryFailed = true;
    else if (a === '--timeout') args.timeout = parseInt(next(), 10) || 45000;
    else if (a === '--help' || a === '-h') { printUsage(); process.exit(0); }
    else if (a.startsWith('--')) { console.error(`未知参数: ${a}`); printUsage(); process.exit(3); }
  }
  return args;
}

function printUsage() {
  console.log(`用法: node tools/qa-run.js --version v4.0.0 --label "第四轮 · 可视化测试看板" [选项]

选项:
  --version <v>       版本号（默认 v4.0.0）
  --label <text>      本次运行标签
  --base-url <url>    使用已有静态服务器（默认自动启动随机端口）
  --only <list>       只跑指定模块/ID，逗号分隔，如 BOOT,PLAY 或 BOOT-01,SCENE-02
  --headed            有头模式（默认 headless）
  --no-evidence       不生成证据截图
  --timeout <ms>      单条用例超时（默认 45000）
`);
}

function fail(msg) {
  console.error('✖ ' + msg);
  process.exit(3);
}

function nowLocalIso() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? '+' : '-';
  const abs = Math.abs(off);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
}

function todayCompact() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
}

function readJson(file) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return null; }
}

function writeJsonAtomic(file, obj) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = file + '.tmp-' + process.pid;
  fs.writeFileSync(tmp, JSON.stringify(obj, null, 2) + '\n', 'utf8');
  fs.renameSync(tmp, file);
}

function nextRunId() {
  const prefix = todayCompact();
  const ids = [];
  const history = readJson(HISTORY_FILE);
  if (history && Array.isArray(history.runs)) for (const r of history.runs) ids.push(r.runId);
  const results = readJson(RESULTS_FILE);
  if (results && results.runId) ids.push(results.runId);
  let max = 0;
  for (const id of ids) {
    const m = new RegExp('^' + prefix + '-(\\d{3})$').exec(String(id || ''));
    if (m) max = Math.max(max, parseInt(m[1], 10));
  }
  return `${prefix}-${String(max + 1).padStart(3, '0')}`;
}

function gitCommit() {
  try { return execSync('git rev-parse --short HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); }
  catch (e) { return 'unknown'; }
}

function selectCases(cases, only) {
  const tokens = String(only || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!tokens.length) return cases;
  return cases.filter((c) => tokens.some((tok) => {
    const t = tok.toUpperCase();
    const id = String(c.id || '').toUpperCase();
    const module = String(c.module || '').toLowerCase();
    if (id === t || id.startsWith(t + '-')) return true;
    if (module === tok.toLowerCase()) return true;
    if (MODULE_ALIASES[t] && MODULE_ALIASES[t] === module) return true;
    if (String(c.automationKey || '').toUpperCase().startsWith(t + '.')) return true;
    return false;
  }));
}

function summaryOf(cases) {
  const auto = cases.filter((c) => c.type === 'auto');
  const manual = cases.filter((c) => c.type === 'manual');
  return { total: cases.length, auto: auto.length, manual: manual.length };
}

function compactError(err) {
  const msg = String((err && err.message) || err || '未知错误');
  return msg.length > 400 ? msg.slice(0, 400) + '…' : msg;
}

function caseStatusLine(status) {
  return status === 'pass' ? 'PASS' : status === 'fail' ? 'FAIL' : 'SKIP';
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  // 1) catalog
  let catalog = readJson(CATALOG_FILE);
  let synthetic = false;
  if (!catalog || !Array.isArray(catalog.cases) || !catalog.cases.length) {
    if (process.env.QA_ALLOW_SYNTHETIC === '1') {
      console.warn('⚠ 未找到 qa/data/catalog.json（或为空），QA_ALLOW_SYNTHETIC=1 使用内置注册表自检。');
      catalog = syntheticCatalog();
      synthetic = true;
    } else {
      fail('缺少或无法解析 qa/data/catalog.json（catalog 不存在时 runner 拒绝运行）');
    }
  }
  const allCases = catalog.cases;
  const autoCases = allCases.filter((c) => c.type === 'auto');
  const commit = gitCommit();
  const allSelected = selectCases(autoCases, args.only);
  const prevResults = args.retryFailed ? readJson(RESULTS_FILE) : null;
  const cachedPass = new Map();
  if (prevResults && Array.isArray(prevResults.cases)) {
    for (const c of prevResults.cases) if (c.status === 'pass') cachedPass.set(c.id, c);
  }
  const selected = allSelected.filter((c) => !cachedPass.has(c.id));
  if (!allSelected.length) fail(`--only "${args.only}" 没有匹配到任何 auto 用例`);
  if (!selected.length) {
    console.log('▶ --retry-failed：没有需要重跑的失败/跳过项');
  }

  const totals = summaryOf(allCases);
  const runId = nextRunId();
  const startedAt = nowLocalIso();
  const t0 = Date.now();

  // 2) 静态服务器
  let serverHandle = null;
  let baseUrl = (args.baseUrl || '').trim();
  if (!baseUrl) {
    serverHandle = await createStaticServer(ROOT);
    baseUrl = serverHandle.url;
    console.log(`▶ 静态服务器: ${baseUrl}（根=${ROOT}）`);
  } else {
    baseUrl = baseUrl.replace(/\/$/, '');
    console.log(`▶ 使用已有服务器: ${baseUrl}`);
  }

  // 3) 浏览器
  const { chromium } = loadPlaywright();
  const executablePath = findChromium();
  if (!executablePath) fail('找不到 Chromium/Chrome，可设置 CHROME_BIN');
  const launchBrowser = () => chromium.launch({
    executablePath,
    headless: !args.headed,
    args: LAUNCH_ARGS,
  });
  let browser = await launchBrowser();
  let browserLabel = 'Chromium';
  const m = /chromium-(\d+)/.exec(executablePath);
  if (m) browserLabel = 'Chromium ' + m[1];
  else if (/Chrome\.app|google chrome/i.test(executablePath)) browserLabel = 'Google Chrome ' + browser.version();
  browserLabel += ' (' + browser.version() + ')';

  const ctx = new QaContext({
    browser, baseUrl, root: ROOT, evidenceDir: EVIDENCE_DIR,
    viewport: { width: 1440, height: 900 },
    evidence: args.evidence,
    browserInfo: { label: browserLabel },
  });

  const registry = build();
  const results = {
    schemaVersion: 1,
    runId,
    version: args.version,
    label: args.label,
    commit,
    status: 'running',
    startedAt: prevResults && prevResults.startedAt ? prevResults.startedAt : startedAt,
    finishedAt: null,
    durationMs: prevResults && prevResults.durationMs ? prevResults.durationMs : 0,
    environment: {
      baseUrl,
      browser: browserLabel,
      platform: process.platform === 'darwin' ? 'macOS' : process.platform,
      viewport: '1440x900',
    },
    progress: { done: cachedPass.size, total: allSelected.length, currentId: null },
    summary: { total: totals.total, auto: totals.auto, manual: totals.manual, passed: cachedPass.size, failed: 0, skipped: 0, passRate: cachedPass.size ? 1 : 0 },
    cases: autoCases.filter((c) => cachedPass.has(c.id)).map((c) => cachedPass.get(c.id)),
  };
  writeJsonAtomic(RESULTS_FILE, results);

  console.log(`▶ Run ${runId} · ${args.version}${args.label ? ' · ' + args.label : ''} · auto ${selected.length}/${totals.auto} · commit ${results.commit}`);
  console.log(`▶ 浏览器: ${browserLabel}`);
  console.log('');

  const failedCases = [];
  const skippedCases = [];

  try {
    for (let i = 0; i < selected.length; i++) {
      const c = selected[i];
      const impl = registry.resolve(c.automationKey);
      results.progress.currentId = c.id;
      writeJsonAtomic(RESULTS_FILE, results);
      process.stdout.write(`[${i + 1}/${selected.length}] ${c.id} `);

      let entry;
      const started = Date.now();
      if (!impl) {
        entry = {
          id: c.id, status: 'skip', durationMs: 0,
          message: `未实现 automationKey: ${c.automationKey || '(空)'}`,
          actual: 'runner registry 无匹配检查',
          evidence: [],
        };
      } else {
        ctx.beginCase(c.id);
        const GROUP_TIMEOUTS = { boot: 120000, scene: 240000, story: 120000, player: 180000, classroom: 240000, explore: 240000, responsive: 240000, a11y: 180000, perf: 240000, release: 120000 };
        const caseTimeout = impl.timeout || GROUP_TIMEOUTS[impl.group] || args.timeout;
        const isTransient = (err) => /Target page, context or browser has been closed|Target closed|Browser closed|WebGL context|page\.goto: Timeout|页面未就绪/i.test(String(err && err.message || err));
        for (let attempt = 1; attempt <= 2 && !entry; attempt++) {
          try {
            const runPromise = Promise.resolve().then(() => impl.run(ctx, c));
            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error(`用例超时（>${caseTimeout}ms）`)), caseTimeout));
            const out = await Promise.race([runPromise, timeoutPromise]);
            const durationMs = Date.now() - started;
            entry = {
              id: c.id,
              status: 'pass',
              durationMs,
              message: out && out.message ? out.message : '通过',
              actual: out && out.actual ? String(out.actual) : '',
              evidence: (ctx.caseEvidence || []).slice(),
            };
          } catch (err) {
            const isSkip = err instanceof SkipError || (err && err.skip);
            if (isSkip) {
              entry = {
                id: c.id, status: 'skip', durationMs: Date.now() - started,
                message: compactError(err), actual: '无法在本环境自动执行',
                evidence: (ctx.caseEvidence || []).slice(),
              };
            } else if (attempt === 1 && isTransient(err)) {
              console.log(`\n    ↻ 浏览器异常，重建后重试一次：${String(err.message || err).split('\n')[0]}`);
              ctx.caseEvidence.length = 0;
              try { await ctx.disposeAll(); } catch (e) { /* ignore */ }
              try { await browser.close(); } catch (e) { /* ignore */ }
              browser = await launchBrowser();
              ctx.browser = browser;
              ctx.beginCase(c.id);
            } else {
              entry = {
                id: c.id, status: 'fail', durationMs: Date.now() - started,
                message: compactError(err), actual: '见 message',
                evidence: (ctx.caseEvidence || []).slice(),
              };
            }
          } finally {
            try { await ctx.closeAll(); } catch (e) { /* ignore */ }
          }
        }
      }

      results.cases.push(entry);
      const orderMap = new Map(autoCases.map((c, idx) => [c.id, idx]));
      results.cases.sort((a, b) => (orderMap.get(a.id) ?? 1e9) - (orderMap.get(b.id) ?? 1e9));
      results.progress.done = results.cases.length;
      results.progress.currentId = c.id;
      const s = results.summary;
      s.passed = results.cases.filter((x) => x.status === 'pass').length;
      s.failed = results.cases.filter((x) => x.status === 'fail').length;
      s.skipped = results.cases.filter((x) => x.status === 'skip').length;
      s.passRate = s.passed + s.failed === 0 ? 0 : +(s.passed / (s.passed + s.failed)).toFixed(3);
      writeJsonAtomic(RESULTS_FILE, results);

      if (entry.status === 'fail') {
        failedCases.push({ id: c.id, priority: c.priority, title: c.title, message: entry.message });
        console.log(`${caseStatusLine(entry.status)} ${entry.durationMs}ms`);
        console.log(`    ↳ ${entry.message}`);
      } else if (entry.status === 'skip') {
        skippedCases.push({ id: c.id, priority: c.priority, title: c.title, message: entry.message });
        console.log(`SKIP 0ms`);
        console.log(`    ↳ ${entry.message}`);
      } else {
        console.log(`PASS ${entry.durationMs}ms`);
      }

      // 软件 GL 长时间运行后 Chromium/WebGL 资源会累积；每 10 条重建浏览器，避免系统性崩溃
      if ((i + 1) % 10 === 0 && i + 1 < selected.length) {
        try { await ctx.closeAll(); await ctx.disposeAll(); } catch (e) { /* ignore */ }
        try { await browser.close(); } catch (e) { /* ignore */ }
        browser = await launchBrowser();
        ctx.browser = browser;
        console.log(`↻ 已重建浏览器（${i + 1}/${selected.length}）`);
      }
    }
  } finally {
    try { await ctx.closeAll(); } catch (e) { /* ignore */ }
    try { await ctx.disposeAll(); } catch (e) { /* ignore */ }
    try { await browser.close(); } catch (e) { /* ignore */ }
    if (serverHandle) await closeServer(serverHandle);
  }

  // 4) 汇总落盘
  const durationMs = Date.now() - t0;
  results.status = results.summary.failed > 0 ? 'failed' : 'passed';
  results.finishedAt = nowLocalIso();
  results.durationMs = (prevResults && prevResults.durationMs ? prevResults.durationMs : 0) + durationMs;
  results.progress.done = results.cases.length;
  results.progress.currentId = null;
  writeJsonAtomic(RESULTS_FILE, results);

  const history = readJson(HISTORY_FILE) || { schemaVersion: 1, runs: [] };
  if (!Array.isArray(history.runs)) history.runs = [];
  const historyEntry = {
    runId,
    version: args.version,
    label: args.label,
    commit: results.commit,
    finishedAt: results.finishedAt,
    durationMs: results.durationMs,
    summary: results.summary,
    failed: failedCases.map((f) => f.id),
    skipped: skippedCases.map((s) => s.id),
  };
  const sameIdx = (() => {
    for (let i = history.runs.length - 1; i >= 0; i--) {
      const r = history.runs[i];
      if (r.version === args.version && r.commit === results.commit) return i;
    }
    return -1;
  })();
  if (sameIdx >= 0) history.runs[sameIdx] = historyEntry;
  else history.runs.push(historyEntry);
  history.runs.sort((a, b) => String(a.finishedAt).localeCompare(String(b.finishedAt)));
  history.runs = history.runs.slice(-30);
  history.schemaVersion = 1;
  writeJsonAtomic(HISTORY_FILE, history);

  // 5) 控制台汇总
  const s = results.summary;
  const pct = (s.passRate * 100).toFixed(1);
  const secs = Math.round(durationMs / 1000);
  const durText = secs >= 60 ? `${Math.floor(secs / 60)}m${String(secs % 60).padStart(2, '0')}s` : `${secs}s`;
  console.log('');
  console.log('════════════════ QA RESULT ════════════════');
  console.log(`runId      ${runId}`);
  console.log(`version    ${args.version}${args.label ? ' · ' + args.label : ''}`);
  console.log(`commit     ${results.commit}`);
  console.log(`environment ${browserLabel} · ${results.environment.platform} · ${baseUrl}`);
  console.log(`catalog    total=${totals.total} auto=${totals.auto} manual=${totals.manual}`);
  console.log(`executed   pass=${s.passed} fail=${s.failed} skip=${s.skipped} · passRate=${pct}%`);
  console.log(`duration   ${durText}`);
  if (failedCases.length) {
    console.log('失败项:');
    for (const f of failedCases) console.log(`  ✖ ${f.id} [${f.priority}] ${f.title || ''} — ${f.message}`);
  } else {
    console.log('失败项: 无');
  }
  if (skippedCases.length) {
    console.log('跳过项:');
    for (const k of skippedCases) console.log(`  ○ ${k.id} [${k.priority}] — ${k.message}`);
  }
  console.log('═══════════════════════════════════════════');

  const p01Failures = failedCases.filter((f) => f.priority === 'P0' || f.priority === 'P1');
  if (p01Failures.length) process.exit(1);
  if (failedCases.length || skippedCases.length) process.exit(2);
  process.exit(0);
}

main().catch((e) => {
  console.error(e && e.stack || e);
  process.exit(3);
});
