'use strict';
/** RELEASE：根资源 200、BGM HEAD/Range、qa 入口、文档、无 404 */
const fs = require('fs');
const path = require('path');
const { assert, sleep, httpRequest } = require('../harness');

const ROOT = path.resolve(__dirname, '..', '..', '..');

const RESOURCES = [
  '/', '/index.html', '/app.js', '/src/main.js', '/src/bgm.js', '/lib/three.module.min.js',
  '/assets/tree-of-seasons-bgm-v3.mp3', '/assets/MUSIC-LICENSE.md', '/docs/11-round3-ui-system.md', '/qa/',
];

module.exports = [
  {
    key: 'release.rootResources',
    aliases: ['release.resources', 'release.http200', 'release.assets200'],
    title: '发布资源全部 HTTP 200',
    run: async (ctx) => {
      const results = [];
      for (const p of RESOURCES) {
        const res = await httpRequest(ctx.baseUrl + p, { timeout: 30000 });
        results.push({ path: p, status: res.status, len: res.body.length, type: res.headers['content-type'] || '' });
      }
      const bad = results.filter((r) => r.status !== 200 || r.len === 0);
      assert(bad.length === 0, `资源异常：${bad.map((b) => `${b.path} ${b.status} ${b.len}B`).join('; ')}`);
      const app = results.find((r) => r.path === '/app.js');
      assert(app.len > 500000, `/app.js 只有 ${app.len}B`);
      assert(/javascript/.test(app.type), `/app.js content-type=${app.type}`);
      const audio = results.find((r) => r.path.includes('.mp3'));
      assert(/audio\/mpeg/.test(audio.type), `BGM content-type=${audio.type}`);
      return { message: `${RESOURCES.length} 个发布资源全部 200 且非空`, actual: results.map((r) => `${r.path}:${r.status}/${(r.len / 1024).toFixed(0)}KB`).join(', ') };
    },
  },
  {
    key: 'release.bgmRange',
    aliases: ['release.audioRange', 'release.bgmHead', 'release.mediaRange'],
    title: 'BGM 支持 HEAD 与 Range',
    run: async (ctx) => {
      const url = ctx.baseUrl + '/assets/tree-of-seasons-bgm-v3.mp3';
      const head = await httpRequest(url, { method: 'HEAD', timeout: 30000 });
      const range = await httpRequest(url, { method: 'GET', headers: { Range: 'bytes=0-1023' }, timeout: 30000 });
      assert(head.status === 200, `HEAD status=${head.status}`);
      assert(/bytes/i.test(head.headers['accept-ranges'] || ''), `Accept-Ranges=${head.headers['accept-ranges']}`);
      assert(Number(head.headers['content-length']) > 1000000, `HEAD content-length=${head.headers['content-length']}`);
      assert(range.status === 206, `Range status=${range.status}，期望 206`);
      assert(/bytes 0-1023\//.test(range.headers['content-range'] || ''), `Content-Range=${range.headers['content-range']}`);
      assert(range.body.length === 1024, `Range body=${range.body.length}B，期望 1024B`);
      return { message: 'BGM HEAD 200，Range 请求 206 且返回 1024B', actual: `size=${head.headers['content-length']}B, range=${range.headers['content-range']}` };
    },
  },
  {
    key: 'release.no404',
    aliases: ['release.noMissing', 'release.noBrokenRequests', 'release.requests'],
    title: '核心页面无 404/失败请求',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitReady: false });
      await sleep(2500);
      const rootResponses = s.responses.slice();
      const rootFailed = s.failedRequests.filter((f) => !(f.resourceType === 'media' && /ERR_ABORTED/i.test(f.error)));
      await ctx.close(s);
      const s2 = await ctx.open('?class&t0=210&freeze', { waitReady: false });
      await sleep(1800);
      const classResponses = s2.responses.slice();
      const classFailed = s2.failedRequests.filter((f) => !(f.resourceType === 'media' && /ERR_ABORTED/i.test(f.error)));
      await ctx.close(s2);
      const bad = [...rootResponses, ...classResponses].filter((r) => r.status >= 400);
      const failed = [...rootFailed, ...classFailed].filter((f) => !/favicon/.test(f.url));
      assert(bad.length === 0, `存在 4xx/5xx：${bad.slice(0, 5).map((b) => b.url + ' ' + b.status).join('; ')}`);
      assert(failed.length === 0, `存在失败请求：${failed.slice(0, 5).map((f) => f.url + ' ' + f.error).join('; ')}`);
      const total = rootResponses.length + classResponses.length;
      return { message: '自由观看与课堂两个入口均无 404/失败请求', actual: `responses=${total}, 4xx+=0, failed=0` };
    },
  },
  {
    key: 'release.qaEntry',
    aliases: ['release.qa', 'release.dashboard', 'release.qaPage'],
    title: 'qa/ 看板入口自身 200',
    run: async (ctx) => {
      const res = await httpRequest(ctx.baseUrl + '/qa/', { timeout: 30000 });
      assert(res.status === 200, `/qa/ status=${res.status}`);
      const html = res.body.toString('utf8');
      assert(html.length > 1000, `/qa/ 内容只有 ${html.length}B`);
      assert(/(QA|质量看板|测试看板)/.test(html), '/qa/ 未包含看板标识');
      assert(/catalog\.json/.test(html), '/qa/ 未引用 catalog.json');
      return { message: 'qa/ 看板入口 200 且引用 catalog.json', actual: `status=200, size=${(html.length / 1024).toFixed(1)}KB` };
    },
  },
  {
    key: 'release.docsAccessible',
    aliases: ['release.docs', 'release.docs11', 'release.documentation'],
    title: 'docs/11 UI 系统文档可访问',
    run: async (ctx) => {
      const res = await httpRequest(ctx.baseUrl + '/docs/11-round3-ui-system.md', { timeout: 30000 });
      assert(res.status === 200, `docs/11 status=${res.status}`);
      const text = res.body.toString('utf8');
      assert(text.includes('第三轮 UI 设计系统与验收'), 'docs/11 标题不匹配');
      assert(text.includes('无障碍'), 'docs/11 缺少无障碍章节');
      return { message: 'docs/11-round3-ui-system.md 可访问且内容完整', actual: `status=200, ${(text.length / 1024).toFixed(1)}KB` };
    },
  },
  {
    key: 'release.appJsFresh',
    aliases: ['release.build', 'release.appJs', 'release.bundle'],
    title: 'app.js 构建产物非空且不旧于源码',
    run: async (ctx) => {
      const app = path.join(ROOT, 'app.js');
      const src = path.join(ROOT, 'src', 'main.js');
      const as = fs.statSync(app);
      const ss = fs.statSync(src);
      assert(as.size > 500000, `app.js 只有 ${as.size}B`);
      assert(as.mtimeMs + 1000 >= ss.mtimeMs, `app.js mtime 早于 src/main.js（${new Date(as.mtimeMs).toISOString()} < ${new Date(ss.mtimeMs).toISOString()}），需重新构建`);
      const js = fs.readFileSync(app, 'utf8');
      assert(!/__COMMIT_HASH__/.test(js), 'app.js 含未替换占位符');
      return { message: 'app.js 为最新构建产物（体积/时间戳正常）', actual: `size=${(as.size / 1024).toFixed(0)}KB, mtime=${new Date(as.mtimeMs).toISOString()}` };
    },
  },
  {
    key: 'release.noConsoleErrors',
    aliases: ['release.console', 'release.smoke', 'release.cleanConsole'],
    title: '发布页面控制台无错误',
    run: async (ctx) => {
      const s = await ctx.open('/?t0=128');
      await sleep(1200);
      await ctx.close(s);
      assert(s.pageErrors.length === 0, `pageerror=${s.pageErrors.length}: ${s.pageErrors[0] || ''}`);
      assert(s.consoleErrors.length === 0, `console.error=${s.consoleErrors.length}: ${s.consoleErrors[0] || ''}`);
      return { message: '发布页面加载/播放 1.2s 内无控制台错误', actual: 'pageerror=0, console.error=0' };
    },
  },
];
