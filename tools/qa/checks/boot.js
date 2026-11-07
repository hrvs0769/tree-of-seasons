'use strict';
/** BOOT：启动、资源、加载层、开场页、主题与 meta */
const path = require('path');
const { assert, sleep } = require('../harness');
const { CHAPTERS } = require('../expected');

const ROOT = path.resolve(__dirname, '..', '..', '..');

function visibleInPage(sel) {
  return (sel) => {
    const el = document.querySelector(sel);
    if (!el) return { exists: false };
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return {
      exists: true,
      width: Math.round(r.width), height: Math.round(r.height),
      display: cs.display, visibility: cs.visibility, opacity: +cs.opacity,
      disabled: !!el.disabled,
    };
  };
}

module.exports = [
  {
    key: 'boot.noErrors',
    aliases: ['boot.consoleClean', 'boot.coldStart', 'boot.noConsoleError', 'boot.firstScreenNoError'],
    title: '首页冷启动无报错',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitReady: false });
      await sleep(2000);
      const loading = await s.page.evaluate(() => {
        const el = document.getElementById('loading');
        return { exists: !!el, display: el ? getComputedStyle(el).display : 'none', hiddenClass: el ? el.classList.contains('hidden') : true };
      });
      await ctx.close(s);
      assert(s.pageErrors.length === 0, `pageerror=${s.pageErrors.length}: ${s.pageErrors[0] || ''}`);
      assert(s.consoleErrors.length === 0, `console.error=${s.consoleErrors.length}: ${s.consoleErrors[0] || ''}`);
      assert(loading.display === 'none' || loading.hiddenClass, `#loading 未隐藏（display=${loading.display}）`);
      return {
        message: '冷启动完成，加载层正常退场，无 console error / pageerror',
        actual: `console.error=0, pageerror=0, #loading display=${loading.display}`,
      };
    },
  },
  {
    key: 'boot.loadingHidden',
    aliases: ['boot.loading', 'boot.loadingGone'],
    title: '加载层正常隐藏',
    run: async (ctx) => {
      const s = await ctx.open('/');
      const info = await s.page.evaluate(() => {
        const el = document.getElementById('loading');
        return { display: getComputedStyle(el).display, hidden: el.classList.contains('hidden'), role: el.getAttribute('role'), label: el.getAttribute('aria-label') };
      });
      await ctx.close(s);
      assert(info.display === 'none', `#loading display=${info.display}，应为 none`);
      assert(info.hidden, '#loading 缺少 .hidden');
      assert(info.role === 'status', `#loading role=${info.role}`);
      return { message: '加载层已淡出并 display:none', actual: `display=${info.display}, hidden=${info.hidden}, role=${info.role}` };
    },
  },
  {
    key: 'boot.startScreen',
    aliases: ['boot.startPage', 'boot.opening', 'boot.startScreenVisible'],
    title: '开场页可见且按钮可点',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitMs: 900 });
      const info = await s.page.evaluate(() => {
        const ss = document.getElementById('startScreen');
        const btn = document.getElementById('startClassBtn');
        const free = document.getElementById('freeViewBtn');
        const r = btn.getBoundingClientRect();
        const rf = free.getBoundingClientRect();
        return {
          ssHidden: ss.classList.contains('hidden'),
          ssRole: ss.getAttribute('role'),
          ssModal: ss.getAttribute('aria-modal'),
          labelledby: ss.getAttribute('aria-labelledby'),
          labelExists: !!document.getElementById('startTitle'),
          btnVisible: r.width > 0 && r.height > 0 && getComputedStyle(btn).visibility !== 'hidden',
          btnDisabled: !!btn.disabled,
          freeVisible: rf.width > 0 && rf.height > 0,
          title: document.getElementById('startTitle') ? document.getElementById('startTitle').textContent.replace(/\s+/g, '') : '',
        };
      });
      await ctx.close(s);
      assert(!info.ssHidden, '#startScreen 处于 hidden');
      assert(info.ssRole === 'dialog' && info.ssModal === 'true', `开场页 dialog 语义异常 role=${info.ssRole} aria-modal=${info.ssModal}`);
      assert(info.labelExists && info.labelledby === 'startTitle', '开场页 aria-labelledby 未指向 startTitle');
      assert(info.btnVisible && info.freeVisible, '开始上课/自由观看按钮不可见');
      assert(!info.btnDisabled, '#startClassBtn 被禁用');
      assert(info.title.includes('一棵树的') && info.title.includes('四季'), `开场标题异常：${info.title}`);
      return { message: '开场页可见，开始上课/自由观看按钮均可点', actual: `title=${info.title}, dialog=ok` };
    },
  },
  {
    key: 'boot.startClassEnter',
    aliases: ['boot.startClass', 'boot.classEnterFromStart', 'boot.startClassroom'],
    title: '开始上课进入课堂模式',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitMs: 900 });
      await s.page.click('#startClassBtn');
      await sleep(600);
      const state = await s.page.evaluate(() => ({
        bodyClass: document.body.className,
        cls: window.__classroom.state().classroomMode,
        topVisible: getComputedStyle(document.getElementById('classroomTop')).display !== 'none',
        startHidden: document.getElementById('startScreen').classList.contains('hidden'),
      }));
      await ctx.close(s);
      assert(state.cls === true, 'window.__classroom.state().classroomMode 仍为 false');
      assert(/\bclassroom-mode\b/.test(state.bodyClass), 'body 缺少 classroom-mode');
      assert(state.topVisible, '课堂顶栏不可见');
      assert(state.startHidden, '开场页未隐藏');
      return { message: '点击「开始上课」进入课堂模式', actual: 'classroomMode=true, body.classroom-mode, 顶栏可见' };
    },
  },
  {
    key: 'boot.freeView',
    aliases: ['boot.freeWatch', 'boot.freeViewEnter'],
    title: '自由观看进入播放',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitMs: 900 });
      await s.page.click('#freeViewBtn');
      await sleep(700);
      const info = await s.page.evaluate(() => {
        const st = window.__classroom.state();
        return {
          startHidden: document.getElementById('startScreen').classList.contains('hidden'),
          classroomMode: st.classroomMode,
          playing: st.playing,
          storyTime: st.storyTime,
          playerVisible: getComputedStyle(document.getElementById('player')).display !== 'none',
        };
      });
      const t1 = info.storyTime;
      let advanced = false;
      try {
        await s.page.waitForFunction((start) => window.__classroom.state().storyTime > start + 0.01, t1, { timeout: 10000 });
        advanced = true;
      } catch (e) { /* 软件 GL 帧极慢时下面单独报错 */ }
      const t2 = await s.page.evaluate(() => window.__classroom.state().storyTime);
      await ctx.close(s);
      assert(info.startHidden, '开场页未隐藏');
      assert(!info.classroomMode, '自由观看不应进入课堂模式');
      assert(info.playerVisible, '#player 不可见');
      assert(info.playing === true, 'playing 未变成 true');
      assert(advanced, `10s 内剧情时间未前进：${t1.toFixed(2)} → ${t2.toFixed(2)}`);
      return { message: '自由观看隐藏开场页并开始播放', actual: `playing=true, storyTime ${t1.toFixed(2)}→${t2.toFixed(2)}` };
    },
  },
  {
    key: 'boot.resources',
    aliases: ['boot.resourceStatus', 'boot.assets', 'boot.resourceLoad'],
    title: '首屏资源全部 200',
    run: async (ctx) => {
      const s = await ctx.open('/');
      await s.page.waitForFunction(() => {
        const a = document.getElementById('bgm');
        return a && (a.readyState >= 1 || a.error);
      }, null, { timeout: 20000 }).catch(() => {});
      await sleep(800);
      const resources = await s.page.evaluate(() => performance.getEntriesByType('resource').map((e) => e.name));
      const bad = s.responses.filter((r) => r.status >= 400);
      const failed = s.failedRequests.filter((r) => r.resourceType !== 'other' && !(r.resourceType === 'media' && /ERR_ABORTED/i.test(r.error)));
      await ctx.close(s);
      const required = ['app.js', 'src/bgm.js', 'tree-of-seasons-bgm-v3.mp3'];
      for (const need of required) {
        const byPerf = resources.some((u) => u.includes(need));
        const byResponse = s.responses.some((r) => r.url.includes(need));
        assert(byPerf || byResponse, `首屏未加载 ${need}`);
      }
      assert(bad.length === 0, `存在 ${bad.length} 个 >=400 响应：${bad.map((b) => b.url + ' ' + b.status).slice(0, 3).join('; ')}`);
      assert(failed.length === 0, `存在失败请求：${failed.map((f) => f.url + ' ' + f.error).slice(0, 3).join('; ')}`);
      return { message: 'HTML/JS/BGM 等首屏资源全部加载成功', actual: `resource entries=${resources.length}, 4xx+=0, requestfailed=0` };
    },
  },
  {
    key: 'boot.fileProtocol',
    aliases: ['boot.file', 'boot.localFile', 'boot.fileUrl'],
    title: 'file:// 直接打开可用',
    run: async (ctx) => {
      const fileUrl = 'file://' + path.join(ROOT, 'index.html') + '?t0=128&freeze';
      const s = await ctx.open(fileUrl);
      await sleep(500);
      const info = await s.page.evaluate(() => ({
        canvas: !!document.querySelector('#app canvas'),
        season: document.body.dataset.season,
        loadingDisplay: getComputedStyle(document.getElementById('loading')).display,
      }));
      await ctx.close(s);
      assert(s.pageErrors.length === 0, `file:// 下 pageerror=${s.pageErrors.length}: ${s.pageErrors[0] || ''}`);
      assert(info.canvas, 'file:// 下 canvas 不存在');
      assert(info.season === '夏', `file:// 下季节=${info.season}，期望 夏`);
      assert(info.loadingDisplay === 'none', '#loading 未隐藏');
      return { message: 'file:// 直接打开 index.html 可正常渲染', actual: `canvas=true, season=${info.season}, pageerror=0` };
    },
  },
  {
    key: 'boot.themeMeta',
    aliases: ['boot.meta', 'boot.theme', 'boot.viewportMeta'],
    title: '主题色与 viewport meta 正确',
    run: async (ctx) => {
      const s = await ctx.open('/');
      const info = await s.page.evaluate(() => {
        const theme = document.querySelector('meta[name="theme-color"]');
        const vp = document.querySelector('meta[name="viewport"]');
        return {
          theme: theme ? theme.getAttribute('content') : null,
          viewport: vp ? vp.getAttribute('content') : null,
          colorScheme: getComputedStyle(document.documentElement).colorScheme,
          title: document.title,
          lang: document.documentElement.lang,
        };
      });
      await ctx.close(s);
      assert((info.theme || '').toLowerCase() === '#0c100e', `theme-color=${info.theme}`);
      assert(/width=device-width/.test(info.viewport || ''), `viewport=${info.viewport}`);
      assert(/initial-scale=1/.test(info.viewport || ''), `viewport=${info.viewport}`);
      assert(!/maximum-scale|user-scalable\s*=\s*no/.test(info.viewport || ''), `viewport 禁止缩放：${info.viewport}`);
      assert(/dark/.test(info.colorScheme || ''), `color-scheme=${info.colorScheme}`);
      assert(info.title === '一棵树的四季', `title=${info.title}`);
      assert(info.lang === 'zh-CN', `lang=${info.lang}`);
      return { message: '深色主题 meta 与 viewport 配置正确', actual: `theme=${info.theme}, viewport=${info.viewport}, color-scheme=${info.colorScheme}` };
    },
  },
  {
    key: 'boot.audioElement',
    aliases: ['boot.bgmLoad', 'boot.bgmMetadata', 'player.bgmMetadata'],
    title: 'BGM 音频加载与元数据',
    run: async (ctx) => {
      const s = await ctx.open('/');
      await s.page.waitForFunction(() => {
        const a = document.getElementById('bgm');
        return a && (a.readyState >= 1 || a.error);
      }, null, { timeout: 20000 });
      const info = await s.page.evaluate(() => {
        const a = document.getElementById('bgm');
        return { duration: a.duration, readyState: a.readyState, err: a.error ? a.error.code : null, src: a.currentSrc || a.src, paused: a.paused };
      });
      await ctx.close(s);
      assert(info.err === null, `audio.error=${info.err}`);
      assert(info.duration >= 255 && info.duration <= 265, `audio.duration=${info.duration}，期望约 260s`);
      assert(/tree-of-seasons-bgm-v3\.mp3/.test(info.src), `audio.src=${info.src}`);
      return { message: 'BGM 元数据正常（约 260 秒）', actual: `duration=${info.duration.toFixed(2)}s, readyState=${info.readyState}` };
    },
  },
  {
    key: 'boot.domStructure',
    aliases: ['boot.dom', 'boot.layoutDom', 'boot.coreDom'],
    title: '核心 DOM 结构齐全',
    run: async (ctx) => {
      const s = await ctx.open('/');
      const info = await s.page.evaluate(() => {
        const ids = ['app', 'sidebar', 'player', 'startScreen', 'classroomTop', 'subtitleBar', 'classroomBar', 'loading', 'timeline', 'playBtn', 'chapterRail', 'bgm'];
        const missing = ids.filter((id) => !document.getElementById(id));
        return {
          missing,
          canvas: !!document.querySelector('#app canvas'),
          chapterRailChildren: document.getElementById('chapterRail').children.length,
          svgSymbols: document.querySelectorAll('svg symbol').length,
        };
      });
      await ctx.close(s);
      assert(info.missing.length === 0, `缺少 DOM：${info.missing.join(', ')}`);
      assert(info.canvas, '#app 内无 canvas');
      assert(info.chapterRailChildren === 14, `#chapterRail 子元素=${info.chapterRailChildren}，期望 14`);
      assert(info.svgSymbols >= 15, `SVG symbol=${info.svgSymbols}，期望 ≥15`);
      return { message: '核心 DOM 与章节刻线齐全', actual: `missing=0, chapterRail=14, symbols=${info.svgSymbols}` };
    },
  },
];
