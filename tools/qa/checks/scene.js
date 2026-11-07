'use strict';
/** SCENE：canvas/WebGL、14 章关键帧、定帧像素确定性、resize、stage-only */
const { assert, sleep, canvasStats } = require('../harness');
const { CHAPTERS, MIDPOINTS } = require('../expected');

function determinismCheck(key, t, extraAliases = []) {
  return {
    key,
    aliases: ['scene.determinism' + t, 'scene.freeze' + t, 'scene.pixelDeterminism' + t, ...extraAliases],
    title: `定帧 ${t}s 双次加载像素一致`,
    run: async (ctx) => {
      const url = `?stage&t0=${t}&freeze`;
      const s1 = await ctx.open(url);
      await s1.page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      await sleep(100);
      const buf1 = await s1.page.screenshot({ type: 'png', fullPage: false, timeout: 120000 });
      await ctx.close(s1);
      const s2 = await ctx.open(url);
      await s2.page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      await sleep(100);
      const buf2 = await s2.page.screenshot({ type: 'png', fullPage: false, timeout: 120000 });
      await ctx.close(s2);
      assert(buf1.length === buf2.length, `两次截图字节数不同：${buf1.length} vs ${buf2.length}`);
      assert(buf1.equals(buf2), `?stage&t0=${t}&freeze 两次加载截图像素不一致`);
      return {
        message: `?stage&t0=${t}&freeze 两次独立加载逐字节一致`,
        actual: `Buffer.equals=true, bytes=${buf1.length}`,
      };
    },
  };
}

module.exports = [
  {
    key: 'scene.canvasWebGL',
    aliases: ['scene.webgl', 'scene.canvas', 'scene.renderer'],
    title: 'canvas 存在且启用 WebGL',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=128&freeze&stage');
      const info = await s.page.evaluate(() => {
        const canvas = document.querySelector('#app canvas');
        if (!canvas) return { ok: false };
        const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
        const r = window.__renderer;
        return {
          ok: true,
          width: canvas.width,
          height: canvas.height,
          clientWidth: canvas.clientWidth,
          clientHeight: canvas.clientHeight,
          glType: gl ? (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext ? 'webgl2' : 'webgl') : null,
          vendor: gl ? gl.getParameter(gl.VENDOR) : null,
          renderer: gl ? gl.getParameter(gl.RENDERER) : null,
          calls: r ? r.info.render.calls : null,
        };
      });
      await ctx.close(s);
      assert(info.ok, '#app 内没有 canvas');
      assert(info.glType, 'canvas 未获取到 WebGL 上下文');
      assert(info.width > 0 && info.height > 0, `canvas 尺寸异常 ${info.width}x${info.height}`);
      assert(info.calls > 0, `renderer.info.render.calls=${info.calls}，未渲染`);
      return {
        message: 'canvas 存在且 WebGL 上下文有效',
        actual: `${info.glType} ${info.width}x${info.height}, calls=${info.calls}, renderer=${String(info.renderer).slice(0, 40)}`,
      };
    },
  },
  {
    key: 'scene.chapterKeyframes',
    aliases: ['scene.allChapters', 'scene.chapterSeasons', 'scene.14chaptersRender'],
    title: '14 章关键帧均可渲染',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=0&freeze&stage');
      const rows = [];
      for (let i = 0; i < MIDPOINTS.length; i++) {
        const t = MIDPOINTS[i];
        const info = await s.page.evaluate(async (tt) => {
          window.__classroom.seekForTest(tt);
          await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
          return { season: document.body.dataset.season, seasonText: document.getElementById('season').textContent, title: document.getElementById('chapterTitle').textContent };
        }, t);
        const stats = await canvasStats(s.page);
        rows.push({ i, t, ...info, avgLum: stats.avgLum, nonBlack: stats.nonBlackRatio });
        assert(info.season === CHAPTERS[i].season, `第 ${i + 1} 章 t=${t}s 季节=${info.season}，期望 ${CHAPTERS[i].season}`);
        assert(info.seasonText === CHAPTERS[i].season, `第 ${i + 1} 章 #season=${info.seasonText}`);
        assert(info.title === CHAPTERS[i].title, `第 ${i + 1} 章标题=${info.title}，期望 ${CHAPTERS[i].title}`);
        assert(stats.avgLum > 8, `第 ${i + 1} 章画面过暗 avgLum=${stats.avgLum}`);
        assert(stats.nonBlackRatio > 0.03, `第 ${i + 1} 章画面疑似黑屏 nonBlackRatio=${stats.nonBlackRatio}`);
      }
      await ctx.close(s);
      return {
        message: '14 章关键帧全部渲染，季节/标题/画面亮度正常',
        actual: `14/14, 最低 avgLum=${Math.min(...rows.map((r) => r.avgLum)).toFixed(1)}, 最低 nonBlack=${Math.min(...rows.map((r) => r.nonBlack)).toFixed(3)}`,
      };
    },
  },
  {
    key: 'scene.keyframeBrightness',
    aliases: ['scene.keyFrames', 'scene.renderKeyFrames', 'scene.visualKeyframes'],
    title: '核心关键帧画面非黑',
    run: async (ctx) => {
      const times = [6, 20, 44, 66, 100, 128, 170, 190, 210, 230, 250, 259.8];
      const s = await ctx.open('?dbg&t0=0&freeze&stage');
      const rows = [];
      for (const t of times) {
        await s.page.evaluate(async (tt) => {
          window.__classroom.seekForTest(tt);
          await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        }, t);
        const stats = await canvasStats(s.page);
        rows.push({ t, ...stats });
        assert(stats.avgLum > 8, `t=${t}s 画面过暗 avgLum=${stats.avgLum}`);
        assert(stats.nonBlackRatio > 0.03, `t=${t}s 画面疑似黑屏`);
      }
      await ctx.close(s);
      return { message: '12 个核心关键帧均正常渲染', actual: `avgLum ${Math.min(...rows.map((r) => r.avgLum)).toFixed(1)}–${Math.max(...rows.map((r) => r.avgLum)).toFixed(1)}` };
    },
  },
  determinismCheck('scene.determinism44', 44),
  determinismCheck('scene.determinism128', 128),
  determinismCheck('scene.determinism210', 210),
  determinismCheck('scene.determinism250', 250),
  {
    key: 'scene.freezeStatic',
    aliases: ['scene.freezeStill', 'scene.staticFrame'],
    title: '定帧静态重绘机制',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=128&freeze&stage');
      const read = () => s.page.evaluate(() => ({ frame: window.__renderer.info.render.frame, calls: window.__renderer.info.render.calls }));
      await sleep(400);
      const a = await read();
      await sleep(1500);
      const b = await read();
      await s.page.evaluate(async () => {
        window.__classroom.seekForTest(129);
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
      });
      const c = await read();
      await ctx.close(s);
      assert(a.frame === b.frame, `定帧 1.5s 内 frame 从 ${a.frame} 增长到 ${b.frame}`);
      assert(c.frame > b.frame, `seek 后 frame 未增加：${b.frame} → ${c.frame}`);
      return { message: '定帧 1.5s frame 不增长；seek 变化后恢复渲染', actual: `frame ${a.frame}→${b.frame}→${c.frame}` };
    },
  },
  {
    key: 'scene.resizeNoError',
    aliases: ['scene.resize', 'scene.viewportResize'],
    title: 'resize 无报错且画布同步',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=128&freeze&ui=1');
      const sizes = [[1024, 768], [768, 1024], [390, 844], [1440, 900]];
      const checks = [];
      for (const [w, h] of sizes) {
        await s.page.setViewportSize({ width: w, height: h });
        await s.page.waitForFunction(() => {
          const a = document.getElementById('app');
          const c = document.querySelector('#app canvas');
          return c && Math.abs(a.clientWidth - c.clientWidth) <= 2 && Math.abs(a.clientHeight - c.clientHeight) <= 2;
        }, null, { timeout: 15000 }).catch(() => {});
        await sleep(100);
        const info = await s.page.evaluate(() => {
          const app = document.getElementById('app');
          const c = document.querySelector('#app canvas');
          const cam = window.__camera, r = window.__renderer;
          return { appW: app.clientWidth, appH: app.clientHeight, cW: c.clientWidth, cH: c.clientHeight, cw: c.width, ch: c.height, aspect: cam ? cam.aspect : null, dpr: r ? r.getPixelRatio() : null };
        });
        checks.push({ w, h, ...info });
        assert(Math.abs(info.appW - info.cW) <= 2 && Math.abs(info.appH - info.cH) <= 2, `${w}x${h} canvas client 未同步 #app：${JSON.stringify(info)}`);
        if (info.aspect !== null) assert(Math.abs(info.aspect - info.cw / info.ch) < 0.02, `${w}x${h} camera.aspect=${info.aspect}, canvas=${info.cw}x${info.ch}`);
        if (info.dpr !== null) assert(info.dpr <= 1.75, `${w}x${h} pixelRatio=${info.dpr} > 1.75`);
      }
      await ctx.close(s);
      assert(s.pageErrors.length === 0, `resize 期间 pageerror=${s.pageErrors.length}`);
      return { message: '4 档 resize 后 canvas/#app/camera.aspect/DPR 全部同步', actual: checks.map((c) => `${c.w}x${c.h}:${c.cW}x${c.cH}@${c.aspect && c.aspect.toFixed(2)}`).join(', ') };
    },
  },
  {
    key: 'scene.stageOnly',
    aliases: ['scene.stage', 'scene.stageMode', 'scene.stageLayout'],
    title: 'stage-only 只保留 3D 舞台',
    run: async (ctx) => {
      const s = await ctx.open('?stage&t0=128&freeze', { viewport: { width: 1440, height: 900 } });
      const info = await s.page.evaluate(() => {
        const app = document.getElementById('app').getBoundingClientRect();
        const sidebar = getComputedStyle(document.getElementById('sidebar')).display;
        const player = getComputedStyle(document.getElementById('player')).display;
        const canvas = document.querySelector('#app canvas');
        return {
          stageClass: document.body.classList.contains('stage-only'),
          app: { x: Math.round(app.x), y: Math.round(app.y), w: Math.round(app.width), h: Math.round(app.height) },
          sidebar, player,
          canvasW: canvas.clientWidth, canvasH: canvas.clientHeight,
        };
      });
      await ctx.close(s);
      assert(info.stageClass, 'body 缺少 stage-only');
      assert(info.sidebar === 'none' && info.player === 'none', `侧栏/播放器未隐藏：${info.sidebar}/${info.player}`);
      assert(info.app.x === 0 && info.app.y === 0 && info.app.w === 1440 && info.app.h === 900, `#app 未铺满：${JSON.stringify(info.app)}`);
      assert(info.canvasW === 1440 && info.canvasH === 900, `canvas=${info.canvasW}x${info.canvasH}`);
      return { message: '?stage 下仅保留全屏 3D 舞台', actual: `app=${info.app.w}x${info.app.h}, sidebar=player=none` };
    },
  },
];
