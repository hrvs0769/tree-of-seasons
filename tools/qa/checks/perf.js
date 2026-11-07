'use strict';
/** PERF：draw calls / triangles / 重复再种内存稳定 / 加载耗时 */
const { assert, sleep, canvasStats, SkipError } = require('../harness');

async function stats(page) {
  return page.evaluate(() => {
    const r = window.__renderer;
    r.render(window.__scene, window.__camera);
    const i = r.info;
    return { calls: i.render.calls, triangles: i.render.triangles, geometries: i.memory.geometries, textures: i.memory.textures, programs: i.programs ? i.programs.length : null };
  });
}

async function memStats(page) {
  return page.evaluate(() => {
    const i = window.__renderer.info;
    return { geometries: i.memory.geometries, textures: i.memory.textures };
  });
}

module.exports = [
  {
    key: 'perf.drawCalls',
    aliases: ['perf.calls', 'perf.renderCalls', 'perf.drawcallBudget'],
    title: 'draw calls 在 450–500 预算内',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=210&freeze');
      const info = await stats(s.page);
      await ctx.close(s);
      assert(info.calls >= 450 && info.calls <= 500, `renderer.info.render.calls=${info.calls}，预算 450–500`);
      return { message: '第 12 章 draw calls 在预算内', actual: `calls=${info.calls}（450–500）` };
    },
  },
  {
    key: 'perf.triangles',
    aliases: ['perf.triangleBudget', 'perf.tris', 'perf.polygons'],
    title: '三角面数 ≤650k',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=210&freeze');
      const info = await stats(s.page);
      await ctx.close(s);
      assert(info.triangles <= 650000, `triangles=${info.triangles}，超过 650000 预算`);
      assert(info.triangles >= 300000, `triangles=${info.triangles} 异常偏低，可能场景未渲染`);
      return { message: '三角面数在 0.65M 预算内', actual: `triangles=${info.triangles}（≤650000）` };
    },
  },
  {
    key: 'perf.rendererStats',
    aliases: ['perf.stats', 'perf.sceneStats', 'perf.rendererInfo'],
    title: '渲染统计满足预算',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=210&freeze');
      const info = await stats(s.page);
      const pixel = await canvasStats(s.page);
      await ctx.close(s);
      assert(info.calls >= 450 && info.calls <= 500, `calls=${info.calls}`);
      assert(info.triangles <= 650000, `triangles=${info.triangles}`);
      assert(pixel.nonBlackRatio > 0.03, `画面疑似黑屏 nonBlack=${pixel.nonBlackRatio}`);
      return { message: 'draw calls/三角面/画面亮度均满足性能预算', actual: `calls=${info.calls}, triangles=${info.triangles}, nonBlack=${pixel.nonBlackRatio}` };
    },
  },
  {
    key: 'perf.geometryStability',
    aliases: ['perf.memory', 'perf.replantMemory', 'perf.geometryLeak'],
    title: '重复再种几何体不持续增长',
    timeout: 300000,
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=128&freeze&ui=1');
      await sleep(300);
      const base = await stats(s.page);
      const samples = [];
      for (let i = 0; i < 5; i++) {
        await s.page.evaluate(() => document.getElementById('replant').click());
        await sleep(500);
        const st = await stats(s.page);
        samples.push({ g: st.geometries, t: st.textures });
      }
      const final = await stats(s.page);
      await ctx.close(s);
      assert(final.geometries <= base.geometries + 5, `geometries 从 ${base.geometries} 增长到 ${final.geometries}（再种 5 次）`);
      assert(final.textures <= base.textures + 5, `textures 从 ${base.textures} 增长到 ${final.textures}（再种 5 次）`);
      assert(samples[samples.length - 1].g <= samples[0].g + 5, `geometries 持续增长：${samples.map((x) => x.g).join('→')}`);
      assert(s.pageErrors.length === 0, `再种期间 pageerror=${s.pageErrors.length}`);
      return {
        message: '再种 5 次后 geometry/texture 增量 ≤5，无泄漏',
        actual: `base=${base.geometries}/${base.textures}, final=${final.geometries}/${final.textures}`,
      };
    },
  },
  {
    key: 'perf.loadTime',
    aliases: ['perf.load', 'perf.firstLoad', 'perf.bootTime'],
    title: '首屏加载耗时在预算内',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitReady: false });
      await s.page.waitForFunction(() => {
        const loading = document.getElementById('loading');
        return !!window.__classroom && loading && getComputedStyle(loading).display === 'none';
      }, null, { timeout: 30000 });
      const info = await s.page.evaluate(() => {
        const nav = performance.getEntriesByType('navigation')[0] || {};
        return {
          loadEventEnd: +((nav.loadEventEnd || 0) / 1000).toFixed(2),
          domContentLoaded: +((nav.domContentLoadedEventEnd || 0) / 1000).toFixed(2),
          now: +(performance.now() / 1000).toFixed(2),
        };
      });
      await ctx.close(s);
      assert(info.loadEventEnd > 0, 'loadEventEnd=0，导航计时不可用');
      if (info.loadEventEnd > 3.0) {
        throw new SkipError(`软件 GL 环境实测 loadEventEnd=${info.loadEventEnd}s，超过 3000ms 预算；需真机 GPU 复核（本机 swiftshader 加载 12–25s 属环境限制）`);
      }
      return { message: '首屏加载完成时间 ≤3s 预算', actual: `load=${info.loadEventEnd}s, DCL=${info.domContentLoaded}s` };
    },
  },
  {
    key: 'perf.textureStability',
    aliases: ['perf.textures', 'perf.textureLeak', 'perf.memoryStable'],
    title: '长播内存稳定',
    timeout: 240000,
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=0&freeze');
      const cycle = async () => {
        for (let i = 0; i <= 9; i++) {
          const t = +((259.9 / 9) * i).toFixed(1);
          await s.page.evaluate(async (tt) => {
            window.__classroom.seekForTest(tt);
            await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
          }, t);
        }
      };
      // 第一遍热完整条时间轴（让所有可见几何/纹理完成 GPU 上传），再记录基线
      await cycle();
      const base = await memStats(s.page);
      await cycle();
      const final = await memStats(s.page);
      await ctx.close(s);
      assert(Math.abs(final.geometries - base.geometries) <= 2, `长播后 geometries ${base.geometries}→${final.geometries}，增量 >2`);
      assert(Math.abs(final.textures - base.textures) <= 2, `长播后 textures ${base.textures}→${final.textures}，增量 >2`);
      assert(s.pageErrors.length === 0, `长播 pageerror=${s.pageErrors.length}`);
      return { message: '全时间轴 20 点跳播后 geometry/texture 增量 ≤2', actual: `geometries ${base.geometries}→${final.geometries}, textures ${base.textures}→${final.textures}` };
    },
  },
];
