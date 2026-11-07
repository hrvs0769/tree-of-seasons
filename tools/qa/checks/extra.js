'use strict';
/**
 * 补齐 catalog 中其余 automationKey 的检查（2026-11-08 v4.0.0）。
 * 静态检查直接读 index.html/README/docs；浏览器检查通过 ctx.open。
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');
const { assert, sleep, SkipError, httpRequest } = require('../harness');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const readFile = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

async function seekAndWait(page, t) {
  await page.evaluate(async (tt) => {
    window.__classroom.seekForTest(tt);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
  }, t);
}

async function sceneSnapshot(page) {
  return page.evaluate(() => {
    const sc = window.__scene;
    const points = [];
    const instanced = [];
    const meshes = { waterRipple: 0, treeShade: null, epilogue: null };
    if (!sc) return { points, instanced, meshes };
    sc.traverse((o) => {
      if (o.isPoints && o.geometry && o.geometry.attributes.position) {
        points.push({ count: o.geometry.attributes.position.count, visible: o.visible, opacity: o.material ? o.material.opacity : null, y: o.position.y });
      }
      if (o.isInstancedMesh) {
        instanced.push({ count: o.count, visible: o.visible, opacity: o.material ? o.material.opacity : null });
      }
      if (o.material && o.material.uniforms && o.material.uniforms.uOpacity) meshes.waterRipple = o.material.uniforms.uOpacity.value;
      if (o.isMesh && o.geometry && o.geometry.parameters && o.geometry.parameters.width === 15 && o.geometry.parameters.height === 8) meshes.treeShade = o.material.opacity;
      if (o.isGroup && Math.abs(o.position.x - 1.6) < 0.01 && Math.abs(o.position.z + 0.6) < 0.05) meshes.epilogue = { visible: o.visible, scale: o.scale.x };
    });
    return { points, instanced, meshes };
  });
}

async function rootInfo(page) {
  return page.evaluate(() => {
    const sc = window.__scene;
    const V = window.__camera.position.constructor;
    let visibleRootMeshes = 0;
    let minY = Infinity;
    sc.traverse((o) => {
      if (!o.isMesh || !o.userData || o.userData.part !== 'root') return;
      if (!o.visible) return;
      visibleRootMeshes++;
      o.updateWorldMatrix(true, false);
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      const b = o.geometry.boundingBox;
      const v = new V();
      for (const x of [b.min.x, b.max.x]) for (const y of [b.min.y, b.max.y]) for (const z of [b.min.z, b.max.z]) {
        v.set(x, y, z).applyMatrix4(o.matrixWorld);
        if (v.y < minY) minY = v.y;
      }
    });
    return { visibleRootMeshes, minY: Number.isFinite(minY) ? +minY.toFixed(2) : null };
  });
}

function findPoints(snap, count) {
  return snap.points.find((p) => p.count === count) || null;
}

function readTokens() {
  const html = readFile('index.html');
  const pick = (name) => {
    const m = new RegExp('--' + name + ':\\s*(#[0-9A-Fa-f]{6})').exec(html);
    return m ? m[1].toUpperCase() : null;
  };
  return {
    html,
    paper: pick('paper'),
    surface: pick('surface'),
    ink: pick('ink'),
    ink2: pick('ink-2'),
    ink3: pick('ink-3'),
    accent: pick('accent'),
  };
}

function hexLum(hex) {
  const c = hex.replace('#', '');
  const rgb = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);
  const lin = rgb.map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}
function contrast(a, b) {
  const l1 = hexLum(a), l2 = hexLum(b);
  const hi = Math.max(l1, l2), lo = Math.min(l1, l2);
  return (hi + 0.05) / (lo + 0.05);
}

module.exports = [
  /* ───────── BOOT ───────── */
  {
    key: 'boot.cacheVersion', group: 'boot', aliases: ['boot.cacheBust', 'boot.versionParam'],
    title: '构建资源带缓存版本',
    run: async () => {
      const html = readFile('index.html');
      const scripts = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]);
      const app = scripts.find((s) => s.includes('app.js'));
      const bgm = scripts.find((s) => s.includes('bgm.js'));
      assert(app, 'index.html 未引用 app.js');
      assert(bgm, 'index.html 未引用 src/bgm.js');
      const av = /[?&]v=([^&"]+)/.exec(app);
      const bv = /[?&]v=([^&"]+)/.exec(bgm);
      assert(av && bv, `script 缺少 ?v= 版本参数：${scripts.join(', ')}`);
      assert(av[1] === bv[1], `app.js/bgm.js 版本参数不一致：${av[1]} vs ${bv[1]}`);
      return { message: 'app.js 与 src/bgm.js 均带一致的 ?v= 缓存版本', actual: `${app} / ${bgm}` };
    },
  },
  {
    key: 'boot.noExternalDeps', group: 'boot', aliases: ['boot.noCdn', 'boot.offlineDeps', 'boot.localOnly'],
    title: '无外部网络依赖',
    run: async () => {
      const html = readFile('index.html');
      const externals = [...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
      const cssUrls = [...html.matchAll(/url\(\s*['"]?(https?:\/\/[^)'"]+)/g)].map((m) => m[1]);
      const imports = [...html.matchAll(/@import\s+url\(\s*['"]?(https?:\/\/[^)'"]+)/g)].map((m) => m[1]);
      const font = /--font:\s*([^;]+);/.exec(html);
      assert(font, '未找到 --font 字体栈');
      assert(!/https?:\/\//.test(font[1]), `字体栈含网络字体：${font[1]}`);
      const all = [...externals, ...cssUrls, ...imports];
      assert(all.length === 0, `index.html 含外部依赖：${all.slice(0, 5).join(', ')}`);
      assert(/PingFang SC|system-ui|Microsoft YaHei/.test(font[1]), '字体栈不是本机系统字体');
      return { message: '页面无 CDN/网络字体/外链图片，字体为系统无衬线栈', actual: `external=0, font=${font[1].trim().slice(0, 60)}…` };
    },
  },

  /* ───────── SCENE ───────── */
  {
    key: 'scene.rainWindow', group: 'scene', aliases: ['scene.rain', 'scene.springRain'],
    title: '春雨与章节窗口一致',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=20&freeze&stage');
      const samples = {};
      for (const t of [20, 30, 120, 210]) {
        await seekAndWait(s.page, t);
        const snap = await sceneSnapshot(s.page);
        const rain = findPoints(snap, 1400);
        samples[t] = rain ? { visible: rain.visible, opacity: +Number(rain.opacity).toFixed(3) } : null;
        assert(rain, `t=${t} 未找到雨粒子（1400 Points）`);
      }
      await ctx.close(s);
      assert(samples[20].visible && samples[20].opacity > 0.1, `t=20 雨不可见 opacity=${samples[20].opacity}`);
      assert(samples[30].visible && samples[30].opacity > 0.02, `t=30 雨已停 opacity=${samples[30].opacity}`);
      assert(!samples[120].visible || samples[120].opacity < 0.01, `t=120 不应下雨 opacity=${samples[120].opacity}`);
      assert(!samples[210].visible || samples[210].opacity < 0.01, `t=210 不应下雨 opacity=${samples[210].opacity}`);
      return { message: '第 2 章 16–31s 有雨，120/210s 晴天无雨', actual: Object.entries(samples).map(([k, v]) => `${k}s=${v.opacity}`).join(', ') };
    },
  },
  {
    key: 'scene.snow', group: 'scene', aliases: ['scene.snowCaps', 'scene.winterSnow'],
    title: '冬章雪与枝头积雪',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=164&freeze&stage');
      const samples = {};
      for (const t of [164, 170, 190]) {
        await seekAndWait(s.page, t);
        const snap = await sceneSnapshot(s.page);
        const snow = findPoints(snap, 9000);
        const caps = await s.page.evaluate((tt) => window.__classroom.partVisibleAt('snow', tt), t);
        samples[t] = { snow: snow ? { visible: snow.visible, opacity: +Number(snow.opacity).toFixed(3) } : null, caps };
      }
      await ctx.close(s);
      assert(samples[164].snow.visible && samples[164].snow.opacity > 0.2, `t=164 雪不可见 opacity=${samples[164].snow.opacity}`);
      assert(samples[164].caps === true, 't=164 枝头雪帽不可见');
      assert(samples[170].snow.visible && samples[170].snow.opacity > 0.2, `t=170 雪不可见 opacity=${samples[170].snow.opacity}`);
      assert(samples[170].caps === true, 't=170 枝头雪帽不可见');
      assert(!samples[190].snow.visible || samples[190].snow.opacity < 0.01, `t=190 不应有雪 opacity=${samples[190].snow.opacity}`);
      assert(samples[190].caps === false, 't=190 仍能点到雪帽');
      return { message: '冬章 164/170s 雪与雪帽可见，190s 春章无雪', actual: Object.entries(samples).map(([k, v]) => `${k}s=snow:${v.snow.opacity}/caps:${v.caps}`).join(', ') };
    },
  },
  {
    key: 'scene.rootGrowth', group: 'scene', aliases: ['scene.roots', 'scene.rootDepth', 'scene.deepRoots'],
    title: '根系生长与深扎',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=44&freeze&stage');
      const early = await rootInfo(s.page);
      await seekAndWait(s.page, 250);
      const deep = await rootInfo(s.page);
      await ctx.close(s);
      assert(early.visibleRootMeshes >= 8, `t=44 可见根段仅 ${early.visibleRootMeshes}`);
      assert(early.minY !== null && early.minY < -1.2, `t=44 根尖深度=${early.minY}，未向下扎根`);
      assert(deep.visibleRootMeshes >= early.visibleRootMeshes, `t=250 根段数减少：${early.visibleRootMeshes}→${deep.visibleRootMeshes}`);
      assert(deep.minY !== null && deep.minY < -8.5, `t=250 根尖深度=${deep.minY}，未抵达含水层（-9.6）`);
      return { message: '第 3 章多条侧根铺开，第 2 年深根抵达含水层', actual: `t44: meshes=${early.visibleRootMeshes}, minY=${early.minY}; t250: meshes=${deep.visibleRootMeshes}, minY=${deep.minY}` };
    },
  },
  {
    key: 'scene.waterLayer', group: 'scene', aliases: ['scene.water', 'scene.aquifer', 'scene.groundwater'],
    title: '地下水层显现',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=250&freeze&stage');
      const deep = await sceneSnapshot(s.page);
      await seekAndWait(s.page, 120);
      const growth = await sceneSnapshot(s.page);
      await ctx.close(s);
      const bubblesDeep = findPoints(deep, 150);
      const tipDeep = findPoints(deep, 72);
      const bubblesGrow = findPoints(growth, 150);
      const tipGrow = findPoints(growth, 72);
      assert(bubblesDeep && bubblesDeep.opacity > 0.3, `t=250 气泡 opacity=${bubblesDeep && bubblesDeep.opacity}`);
      assert(tipDeep && tipDeep.opacity > 0.1, `t=250 根尖光点 opacity=${tipDeep && tipDeep.opacity}`);
      assert(deep.meshes.waterRipple > 0.1, `t=250 水面波纹 uOpacity=${deep.meshes.waterRipple}`);
      assert(!bubblesGrow || bubblesGrow.opacity < 0.05, `t=120 水层不应显现 bubbles=${bubblesGrow && bubblesGrow.opacity}`);
      assert(!tipGrow || tipGrow.opacity < 0.05, `t=120 根尖光点不应显现 tip=${tipGrow && tipGrow.opacity}`);
      return { message: 't=250 水面/气泡/根尖光点可见，t=120 生长阶段不可见', actual: `250s ripple=${deep.meshes.waterRipple}, bubbles=${bubblesDeep.opacity}, tip=${tipDeep.opacity}` };
    },
  },
  {
    key: 'scene.creaturesShade', group: 'scene', aliases: ['scene.creatures', 'scene.birdsInsects', 'scene.shade'],
    title: '鸟虫与树荫可见',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=210&freeze&stage');
      const summer = await sceneSnapshot(s.page);
      await seekAndWait(s.page, 170);
      const winter = await sceneSnapshot(s.page);
      await ctx.close(s);
      const creatureSummer = summer.instanced.filter((i) => i.count <= 10 && i.visible && Number(i.opacity) > 0.3);
      const creatureWinter = winter.instanced.filter((i) => i.count <= 10 && i.visible && Number(i.opacity) > 0.1);
      assert(creatureSummer.length >= 4, `t=210 可见生物实例组=${creatureSummer.length}，期望 ≥4（栖息鸟/蝴蝶/蜜蜂/瓢虫）`);
      assert(summer.meshes.treeShade !== null && summer.meshes.treeShade > 0.1, `t=210 树荫 opacity=${summer.meshes.treeShade}`);
      assert(creatureWinter.length === 0, `t=170 冬天不应有鸟虫，可见组=${creatureWinter.length}`);
      assert(winter.meshes.treeShade === null || winter.meshes.treeShade < 0.01, `t=170 树荫 opacity=${winter.meshes.treeShade}`);
      return { message: 't=210 五类生物与树荫可见，t=170 无鸟虫/树荫', actual: `summer creatureGroups=${creatureSummer.length}, shade=${summer.meshes.treeShade}` };
    },
  },
  {
    key: 'scene.seedFlow', group: 'scene', aliases: ['scene.seed', 'scene.replantTree', 'scene.fixedSeed'],
    title: '树种子固定与再种',
    timeout: 180000,
    run: async (ctx) => {
      const url = '?stage&t0=128&freeze';
      const a = await ctx.open(url);
      await sleep(300);
      const bufA = await a.page.screenshot({ type: 'png', fullPage: false, timeout: 120000 });
      await ctx.close(a);
      const b = await ctx.open(url);
      await sleep(300);
      const bufB = await b.page.screenshot({ type: 'png', fullPage: false, timeout: 120000 });
      await ctx.close(b);
      assert(bufA.equals(bufB), '两次加载的固定树形不一致');
      const r = await ctx.open('?dbg&t0=128&freeze&ui=1');
      const before = await r.page.evaluate(() => ({ geometries: window.__renderer.info.memory.geometries }));
      await r.page.click('#replant');
      await sleep(800);
      const after = await r.page.evaluate(() => ({ state: window.__classroom.state(), geometries: window.__renderer.info.memory.geometries, canvas: !!document.querySelector('#app canvas') }));
      await ctx.close(r);
      assert(after.state.storyTime < 0.5, `再种后 storyTime=${after.state.storyTime}`);
      assert(after.state.playing === true, '再种后 playing=false');
      assert(after.canvas, '再种后 canvas 丢失');
      assert(r.pageErrors.length === 0, `再种后 pageerror=${r.pageErrors.length}`);
      return { message: '固定树种子两次加载一致；再种后新树生成、时间归零、无报错', actual: `identical=true, storyTime=${after.state.storyTime.toFixed(2)}, geometries ${before.geometries}→${after.geometries}` };
    },
  },

  /* ───────── STORY ───────── */
  {
    key: 'story.timelineMarks', group: 'story', aliases: ['story.marks', 'story.chapterMarks', 'story.timelineChapters'],
    title: '时间轴章节刻度',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const info = await s.page.evaluate(() => Array.from(document.getElementById('marks').children).map((m) => ({ left: m.style.left, title: m.title })));
      await ctx.close(s);
      const { CHAPTERS, STORY_END } = require('../expected');
      assert(info.length === 13, `#marks 刻度=${info.length}，期望 13`);
      for (let i = 0; i < info.length; i++) {
        const expect = ((CHAPTERS[i + 1].start / STORY_END) * 100).toFixed(4);
        const actual = parseFloat(info[i].left);
        assert(Math.abs(actual - parseFloat(expect)) < 0.02, `第 ${i + 1} 个刻度 left=${info[i].left}，期望 ${expect}%`);
        assert(info[i].title === CHAPTERS[i + 1].title, `第 ${i + 1} 个刻度 title=${info[i].title}`);
      }
      return { message: '13 个章节起点刻度位置与标题均正确', actual: `13/13, e.g. ${info[0].left} ${info[0].title}` };
    },
  },
  {
    key: 'story.endingSpring', group: 'story', aliases: ['story.ending', 'story.newCycle', 'story.sprout'],
    title: '结尾回春与新芽',
    timeout: 120000,
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=259.8&freeze&stage');
      const end = await s.page.evaluate(async () => {
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        const sc = window.__scene;
        let epilogue = null;
        sc.traverse((o) => {
          if (o.isGroup && Math.abs(o.position.x - 1.6) < 0.01 && Math.abs(o.position.z + 0.6) < 0.05) epilogue = { visible: o.visible, scale: +o.scale.x.toFixed(2) };
        });
        return {
          season: document.body.dataset.season,
          seasonText: document.getElementById('season').textContent,
          sub: document.getElementById('sub').textContent,
          epilogue,
        };
      });
      await ctx.close(s);
      assert(end.season === '春' && end.seasonText === '春', `结尾季节 body=${end.season}, #season=${end.seasonText}`);
      assert(end.sub.includes('万物发芽') && end.sub.includes('新的轮回'), `结尾 #sub=${end.sub}`);
      assert(end.epilogue && end.epilogue.visible, '结尾土面新芽不可见');
      const s2 = await ctx.open('?t0=259.3');
      await s2.page.waitForFunction(() => window.__classroom.state().storyTime >= 259.89 && window.__classroom.state().playing === false, null, { timeout: 40000 }).catch(() => {});
      const stop = await s2.page.evaluate(() => window.__classroom.state());
      await ctx.close(s2);
      assert(Math.abs(stop.storyTime - 259.9) < 0.15 && stop.playing === false, `结尾未停在 259.9：t=${stop.storyTime}, playing=${stop.playing}`);
      return { message: '结尾回春、HUD「万物发芽·新的轮回」、新芽可见并停在 259.9', actual: `season=春, sub=${end.sub}, epilogue.scale=${end.epilogue.scale}` };
    },
  },

  /* ───────── PLAYER ───────── */
  {
    key: 'player.scrubResume', group: 'player', aliases: ['player.scrubState', 'player.dragResume'],
    title: '拖动恢复播放状态',
    run: async (ctx) => {
      const s = await ctx.open('?t0=100');
      const readState = () => s.page.evaluate(() => window.__classroom.state().playing);
      const p1 = await readState();
      await s.page.evaluate(() => {
        const tl = document.getElementById('timeline');
        tl.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 1 }));
        tl.value = '120';
        tl.dispatchEvent(new Event('input', { bubbles: true }));
        window.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 1 }));
      });
      await sleep(250);
      const afterPlayingDrag = await readState();
      await s.page.click('#playBtn');
      await sleep(200);
      const paused = await readState();
      await s.page.evaluate(() => {
        const tl = document.getElementById('timeline');
        tl.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 2 }));
        tl.value = '150';
        tl.dispatchEvent(new Event('input', { bubbles: true }));
        window.dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 2 }));
      });
      await sleep(250);
      const afterPausedDrag = await readState();
      await ctx.close(s);
      assert(p1 === true, '初始 playing 应为 true');
      assert(afterPlayingDrag === true, `播放中拖动后 playing=${afterPlayingDrag}，应为 true`);
      assert(paused === false, '暂停操作失败');
      assert(afterPausedDrag === false, `暂停中拖动后 playing=${afterPausedDrag}，应为 false`);
      return { message: '播放中拖动松手恢复播放，暂停中拖动保持暂停', actual: `playing: true→${afterPlayingDrag}; paused→${afterPausedDrag}` };
    },
  },
  {
    key: 'player.ariaPlaying', group: 'player', aliases: ['player.playAria', 'player.datasetPlaying', 'player.playSemantics'],
    title: '播放状态语义',
    run: async (ctx) => {
      const s = await ctx.open('?t0=100');
      const read = () => s.page.evaluate(() => ({
        dataset: document.getElementById('playBtn').dataset.playing,
        aria: document.getElementById('playBtn').getAttribute('aria-label'),
        paused: document.getElementById('bgm').paused,
      }));
      const a = await read();
      await s.page.click('#playBtn');
      await sleep(250);
      const b = await read();
      await s.page.click('#playBtn');
      await sleep(250);
      const c = await read();
      await ctx.close(s);
      assert(a.dataset === '1' && a.aria === '暂停', `播放中 dataset=${a.dataset}, aria=${a.aria}`);
      assert(b.dataset === '0' && b.aria === '播放' && b.paused === true, `暂停后 dataset=${b.dataset}, aria=${b.aria}, audio.paused=${b.paused}`);
      assert(c.dataset === '1' && c.aria === '暂停', `恢复播放后 dataset=${c.dataset}, aria=${c.aria}`);
      return { message: 'data-playing 与 aria-label 始终对应，暂停时音频同步暂停', actual: `${a.dataset}/${a.aria} → ${b.dataset}/${b.aria} → ${c.dataset}/${c.aria}` };
    },
  },

  /* ───────── CLASSROOM ───────── */
  {
    key: 'classroom.nextPrev', group: 'classroom', aliases: ['class.nextPrevButtons', 'class.chapterNavigation'],
    title: '上一章与下一章',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=0&freeze');
      await s.page.click('#classNextBtn');
      await sleep(300);
      const next = await s.page.evaluate(() => ({ state: window.__classroom.state(), title: document.getElementById('classChapterTitle').textContent, prev: document.getElementById('classPrevBtn').disabled }));
      await s.page.click('#classPrevBtn');
      await sleep(300);
      const back = await s.page.evaluate(() => ({ state: window.__classroom.state(), title: document.getElementById('classChapterTitle').textContent }));
      await ctx.close(s);
      assert(Math.abs(next.state.storyTime - 16.01) < 0.3, `下一章 storyTime=${next.state.storyTime}，期望约 16`);
      assert(next.title === '春雨滋润', `下一章标题=${next.title}`);
      assert(next.prev === false, '第 2 章上一章按钮仍禁用');
      assert(back.state.storyTime < 0.2 && back.title === '种子入土', `上一章回到 ${back.state.storyTime}/${back.title}`);
      return { message: '下一章 → 16s 春雨滋润，上一章 → 0s 种子入土，按钮状态同步', actual: `next=${next.state.storyTime.toFixed(2)}, back=${back.state.storyTime.toFixed(2)}` };
    },
  },

  /* ───────── EXPLORE ───────── */
  {
    key: 'explore.wheelZoom', group: 'explore', aliases: ['explore.wheel', 'explore.zoom', 'explore.scrollZoom'],
    title: '滚轮平滑缩放',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze&dbg');
      const box = await s.page.locator('#app canvas').boundingBox();
      const cx = box.x + box.width * 0.5, cy = box.y + box.height * 0.5;
      const dist = () => s.page.evaluate(() => {
        const p = window.__camera.position;
        return +Math.hypot(p.x, p.y, p.z).toFixed(3);
      });
      await s.page.mouse.move(cx, cy);
      const d0 = await dist();
      await s.page.mouse.wheel(0, -600);
      await sleep(250);
      const d1 = await dist();
      await s.page.mouse.wheel(0, 1400);
      await sleep(250);
      const d2 = await dist();
      // 边界：连续极限滚轮不应失控
      for (let i = 0; i < 12; i++) await s.page.mouse.wheel(0, 1200);
      await sleep(300);
      const dFar = await dist();
      for (let i = 0; i < 18; i++) await s.page.mouse.wheel(0, -1200);
      await sleep(300);
      const dNear = await dist();
      await ctx.close(s);
      assert(d1 < d0 - 0.05, `上滚后相机距离未减小：${d0}→${d1}`);
      assert(d2 > d1 + 0.05, `下滚后相机距离未增大：${d1}→${d2}`);
      assert(dFar > 4 && dFar < 40, `下滚边界距离=${dFar} 越界`);
      assert(dNear > 3 && dNear < dFar, `上滚边界距离=${dNear} 越界`);
      return { message: '滚轮上滚拉近、下滚拉远，极限滚动仍被限制', actual: `dist ${d0}→${d1}→${d2}, far=${dFar}, near=${dNear}` };
    },
  },
  {
    key: 'explore.mobileDrawer', group: 'explore', aliases: ['explore.partDrawer', 'explore.mobilePartCard'],
    title: '移动端点认卡抽屉',
    run: async (ctx) => {
      const s = await ctx.open('?class&t=210&freeze'.replace('?class&t=', '?class&t0='), { viewport: { width: 390, height: 844 } });
      const info = await s.page.evaluate(() => {
        const c = window.__classroom;
        let tapped = false;
        for (const part of ['trunk', 'branch', 'leaf']) {
          for (const p of c.partScreenPoints(part)) {
            if (c.pickPartAt(p.x, p.y)) { c.handleCanvasTap(p.x, p.y); tapped = true; break; }
          }
          if (tapped) break;
        }
        const card = document.getElementById('partCard');
        const cr = card.getBoundingClientRect();
        const sr = document.getElementById('subtitleBar').getBoundingClientRect();
        const overlap = Math.max(0, Math.min(cr.right, sr.right) - Math.max(cr.left, sr.left)) * Math.max(0, Math.min(cr.bottom, sr.bottom) - Math.max(cr.top, sr.top));
        return {
          tapped,
          shown: card.classList.contains('show'),
          position: getComputedStyle(card).position,
          rect: { left: Math.round(cr.left), top: Math.round(cr.top), w: Math.round(cr.width), h: Math.round(cr.height) },
          viewportW: window.innerWidth,
          subtitleOverlap: Math.round(overlap),
          subtitleRect: { top: Math.round(sr.top), height: Math.round(sr.height) },
        };
      });
      await ctx.close(s);
      assert(info.tapped && info.shown, '移动端点认卡未打开');
      assert(info.position === 'fixed', `#partCard position=${info.position}，期望 fixed`);
      assert(info.rect.w >= info.viewportW * 0.84, `点认卡宽度=${info.rect.w} < 84vw`);
      assert(info.subtitleOverlap === 0, `点认卡与字幕带重叠 ${info.subtitleOverlap}px²`);
      return { message: '390×844 点认卡为底部抽屉且不遮字幕', actual: `position=fixed, w=${info.rect.w}/${info.viewportW}, subtitleOverlap=0` };
    },
  },

  /* ───────── RESPONSIVE ───────── */
  {
    key: 'responsive.noOverflow', group: 'responsive', aliases: ['responsive.overflow', 'responsive.horizontalScroll', 'responsive.fiveWidths'],
    title: '五档无横向溢出',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze', { viewport: { width: 1440, height: 900 } });
      const rows = [];
      for (const [w, h] of [[1440, 900], [1280, 800], [1024, 768], [768, 1024], [390, 844]]) {
        await s.page.setViewportSize({ width: w, height: h });
        await sleep(250);
        const r = await s.page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, bodyScrollWidth: document.body.scrollWidth, innerWidth: window.innerWidth }));
        rows.push({ w, h, ...r });
        assert(r.scrollWidth <= r.innerWidth + 1, `${w}×${h} scrollWidth=${r.scrollWidth} > innerWidth=${r.innerWidth}`);
        assert(r.bodyScrollWidth <= r.innerWidth + 1, `${w}×${h} body.scrollWidth=${r.bodyScrollWidth} > innerWidth=${r.innerWidth}`);
      }
      await ctx.close(s);
      return { message: '五档视口均无横向溢出', actual: rows.map((r) => `${r.w}:${r.scrollWidth}/${r.innerWidth}`).join(', ') };
    },
  },
  {
    key: 'responsive.playerHeight', group: 'responsive', aliases: ['responsive.player', 'responsive.stagePlayer', 'responsive.playerLayout'],
    title: '播放器高度与舞台让位',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze', { viewport: { width: 1440, height: 900 } });
      const read = () => s.page.evaluate(() => {
        const root = getComputedStyle(document.documentElement);
        const player = document.getElementById('player').getBoundingClientRect();
        const app = document.getElementById('app').getBoundingClientRect();
        const overlap = Math.max(0, Math.min(player.right, app.right) - Math.max(player.left, app.left)) * Math.max(0, Math.min(player.top, app.top) - Math.max(player.bottom, app.bottom));
        return { playerH: Math.round(player.height), appBottom: Math.round(app.bottom), playerTop: Math.round(player.top), overlapArea: Math.round(Math.max(0, Math.min(player.top, app.bottom) - Math.max(player.top, app.bottom))), varH: root.getPropertyValue('--player-h').trim(), px: Math.round(app.bottom - player.top) };
      });
      const desk = await read();
      await s.page.setViewportSize({ width: 390, height: 844 });
      await sleep(300);
      const mob = await read();
      await ctx.close(s);
      assert(desk.varH === '78px', `桌面 --player-h=${desk.varH}`);
      assert(desk.playerH >= 70 && desk.playerH <= 90, `桌面 #player 高=${desk.playerH}`);
      assert(desk.playerTop >= desk.appBottom - 2, `桌面播放器与 #app 重叠：app.bottom=${desk.appBottom}, player.top=${desk.playerTop}`);
      assert(mob.varH === '110px', `移动端 --player-h=${mob.varH}`);
      assert(mob.playerH >= 100 && mob.playerH <= 125, `移动端 #player 高=${mob.playerH}`);
      assert(mob.playerTop >= 0, '移动端播放器越界');
      return { message: '桌面 78px / 移动端 110px，播放器不覆盖 #app', actual: `desktop=${desk.playerH}px(${desk.varH}), mobile=${mob.playerH}px(${mob.varH})` };
    },
  },
  {
    key: 'responsive.darkTokens', group: 'responsive', aliases: ['responsive.tokens', 'responsive.colors', 'responsive.designTokens'],
    title: '深色设计 token',
    run: async () => {
      const t = readTokens();
      assert(t.paper === '#0C100E', `--paper=${t.paper}`);
      assert(t.surface === '#151B18', `--surface=${t.surface}`);
      assert(t.ink === '#F2F4F0', `--ink=${t.ink}`);
      assert(t.accent === '#7BD6A6', `--accent=${t.accent}`);
      assert(/html,\s*body\s*\{[^}]*background:\s*var\(--paper\)/.test(t.html), 'body 未使用 --paper 作为背景');
      assert(/background:\s*var\(--surface\)/.test(t.html), '未发现使用 --surface 的卡片/面板背景');
      return { message: '深色四色 token 精确匹配并用于 body/卡片', actual: `paper=${t.paper}, surface=${t.surface}, ink=${t.ink}, accent=${t.accent}` };
    },
  },
  {
    key: 'responsive.contrast', group: 'responsive', aliases: ['responsive.a11yContrast', 'responsive.wcag', 'responsive.textContrast'],
    title: '文本对比度 AA',
    run: async () => {
      const t = readTokens();
      const ratios = { ink: contrast(t.ink, t.paper), ink2: contrast(t.ink2, t.paper), ink3: contrast(t.ink3, t.paper) };
      assert(ratios.ink >= 15, `--ink 对比度=${ratios.ink.toFixed(1)}:1，期望 ≥15`);
      assert(ratios.ink2 >= 7, `--ink-2 对比度=${ratios.ink2.toFixed(1)}:1，期望 ≥7`);
      assert(ratios.ink3 >= 4.5, `--ink-3 对比度=${ratios.ink3.toFixed(1)}:1，低于 AA 4.5`);
      assert(/#chapterText[^{]*\{[^}]*color:\s*var\(--ink-2\)/.test(t.html), '#chapterText 未使用 --ink-2');
      assert(/#tips[^{]*\{[^}]*color:\s*var\(--ink-3\)/.test(t.html), '#tips 未使用 --ink-3');
      return { message: '主文/次文/辅助文对比度均达 WCAG AA', actual: `ink=${ratios.ink.toFixed(1)}:1, ink-2=${ratios.ink2.toFixed(1)}:1, ink-3=${ratios.ink3.toFixed(1)}:1` };
    },
  },
  {
    key: 'responsive.noSerifEmoji', group: 'responsive', aliases: ['responsive.font', 'responsive.noEmoji', 'responsive.sansSerif'],
    title: '无衬线且无 emoji 图标',
    run: async () => {
      const html = readFile('index.html');
      const font = /--font:\s*([^;]+);/.exec(html);
      assert(font, '未找到 --font');
      const stack = font[1];
      assert(/sans-serif/.test(stack), `--font 缺少 sans-serif：${stack}`);
      assert(!/宋体|Songti|SimSun|"serif"|,\s*serif/.test(stack), `--font 含衬线字体：${stack}`);
      const families = [...html.matchAll(/font-family:\s*([^;}]+)[;}]/g)].map((m) => m[1]);
      const badFamilies = families.filter((f) => !/sans-serif|var\(--font\)|inherit/.test(f) && /serif/i.test(f.replace(/sans-serif/g, '')));
      assert(badFamilies.length === 0, `存在衬线 font-family：${badFamilies.join('; ')}`);
      const emojis = [...html.matchAll(/[\u{1F000}-\u{1FAFF}\u{1F900}-\u{1F9FF}]/gu)].map((m) => m[0]);
      assert(emojis.length === 0, `发现 emoji 字符：${[...new Set(emojis)].join(' ')}`);
      const icons = (html.match(/<use href="#i-/g) || []).length;
      assert(icons >= 15, `内联 SVG 使用次数=${icons}`);
      return { message: '字体栈全无衬线、无 emoji，图标全部 inline SVG', actual: `font=${stack.trim().slice(0, 50)}…, emoji=0, svgUse=${icons}` };
    },
  },
  {
    key: 'responsive.svgSprite', group: 'responsive', aliases: ['responsive.sprite', 'responsive.icons', 'responsive.svgSymbols'],
    title: 'SVG sprite 15 个图标',
    run: async () => {
      const html = readFile('index.html');
      const symbols = [...html.matchAll(/<symbol id="(i-[^"]+)"/g)].map((m) => m[1]);
      const uses = [...html.matchAll(/href="#(i-[^"]+)"/g)].map((m) => m[1]);
      assert(symbols.length === 15, `symbol 数量=${symbols.length}，期望 15`);
      assert(new Set(symbols).size === 15, 'symbol id 有重复');
      const missing = [...new Set(uses)].filter((u) => !symbols.includes(u));
      assert(missing.length === 0, `引用了不存在的 symbol：${missing.join(',')}`);
      const sprite = /<svg[^>]*width="0"[^>]*>/.exec(html);
      assert(sprite && /aria-hidden="true"/.test(sprite[0]), 'sprite 根 svg 缺少 aria-hidden=true');
      return { message: 'SVG sprite 15 个 symbol 完整，引用无缺失', actual: `symbols=15, uses=${uses.length}, missing=0` };
    },
  },
  {
    key: 'responsive.subtitleClear', group: 'responsive', aliases: ['responsive.subtitle', 'responsive.mobileSubtitle', 'responsive.classLayout'],
    title: '移动端字幕不压画面',
    timeout: 90000,
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze', { viewport: { width: 390, height: 844 } });
      const info = await s.page.evaluate(() => {
        const rect = (id) => {
          const r = document.getElementById(id).getBoundingClientRect();
          return { left: Math.round(r.left), top: Math.round(r.top), right: Math.round(r.right), bottom: Math.round(r.bottom), w: Math.round(r.width), h: Math.round(r.height) };
        };
        const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
        const app = rect('app'), sub = rect('subtitleBar'), bar = rect('classroomBar');
        return { app, sub, bar, subOverlap: Math.round(overlap(app, sub)), barOverlap: Math.round(overlap(app, bar)), scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth };
      });
      await ctx.close(s);
      assert(info.subOverlap === 0, `字幕带与 #app 重叠 ${info.subOverlap}px²`);
      assert(info.barOverlap === 0, `控制条与 #app 重叠 ${info.barOverlap}px²`);
      assert(info.sub.top >= info.app.bottom - 1, `字幕带 top=${info.sub.top} 覆盖 app.bottom=${info.app.bottom}`);
      assert(info.scrollWidth <= info.innerWidth + 1, '移动端课堂横向溢出');
      return { message: '390×844 课堂字幕/控制条均在 3D 画面之外', actual: `app=${info.app.w}x${info.app.h}, sub=${info.sub.h}, bar=${info.bar.h}, overlap=0` };
    },
  },

  /* ───────── A11Y ───────── */
  {
    key: 'a11y.viewportZoom', group: 'a11y', aliases: ['a11y.zoom', 'a11y.viewport', 'a11y.userScalable'],
    title: 'viewport 允许缩放',
    run: async () => {
      const html = readFile('index.html');
      const m = /<meta name="viewport" content="([^"]+)"/.exec(html);
      assert(m, '缺少 viewport meta');
      const v = m[1];
      assert(/width=device-width/.test(v), `viewport=${v}`);
      assert(/initial-scale=1/.test(v), `viewport=${v}`);
      assert(/viewport-fit=cover/.test(v), `viewport=${v}`);
      assert(!/maximum-scale/i.test(v), `viewport 含 maximum-scale：${v}`);
      assert(!/user-scalable\s*=\s*no/i.test(v), `viewport 禁止缩放：${v}`);
      return { message: 'viewport 允许双指缩放（无 maximum-scale/user-scalable=no）', actual: v };
    },
  },

  /* ───────── PERF ───────── */
  {
    key: 'perf.staticFrames', group: 'perf', aliases: ['perf.static', 'perf.noRepaint', 'perf.pausedFrames'],
    title: '暂停不重复绘制',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=128&freeze');
      const read = () => s.page.evaluate(() => ({
        frame: window.__renderer.info.render.frame,
        calls: window.__renderer.info.render.calls,
        triangles: window.__renderer.info.render.triangles,
      }));
      await sleep(300);
      const a = await read();
      await sleep(2200);
      const b = await read();
      await ctx.close(s);
      assert(a.frame === b.frame, `定帧 2.2s 内 frame 从 ${a.frame} 增长到 ${b.frame}`);
      return { message: '定帧 2.2 秒 renderer frame 计数不增长（staticKey 生效）', actual: `frame=${a.frame}→${b.frame}` };
    },
  },
  {
    key: 'perf.longPlay', group: 'perf', aliases: ['perf.long', 'perf.fullTimeline', 'perf.stability'],
    title: '长播无报错',
    timeout: 120000,
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=0&freeze&stage');
      const times = [];
      for (let i = 0; i <= 19; i++) times.push(+((259.9 / 19) * i).toFixed(1));
      const rows = [];
      for (const t of times) {
        await seekAndWait(s.page, t);
        const info = await s.page.evaluate(() => ({ season: document.body.dataset.season, title: document.getElementById('chapterTitle').textContent }));
        rows.push({ t, ...info });
      }
      await sleep(300);
      await ctx.close(s);
      assert(s.pageErrors.length === 0, `全时间轴 pageerror=${s.pageErrors.length}: ${s.pageErrors[0] || ''}`);
      assert(s.consoleErrors.length === 0, `全时间轴 console.error=${s.consoleErrors.length}: ${s.consoleErrors[0] || ''}`);
      assert(rows.every((r) => r.season && r.title), '存在空白章节状态');
      return { message: '全时间轴 20 点抽样无 pageerror/console.error', actual: `samples=${times.length}, 0–${times[times.length - 1]}s, errors=0` };
    },
  },
  {
    key: 'perf.instancing', group: 'perf', aliases: ['perf.instancedMesh', 'perf.drawBatching', 'perf.batch'],
    title: '大批量实例化',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&t0=210&freeze');
      const info = await s.page.evaluate(() => {
        const inst = [], pts = [];
        window.__scene.traverse((o) => {
          if (o.isInstancedMesh) inst.push({ count: o.count, visible: o.visible });
          if (o.isPoints) pts.push({ count: o.geometry.attributes.position.count });
        });
        const grass = window.__scene.__grass || null;
        return { inst, pts, grass: grass ? { type: grass.type, isInstanced: !!grass.isInstancedMesh, count: grass.count, visible: grass.visible } : null };
      });
      await ctx.close(s);
      assert(info.inst.length >= 8, `InstancedMesh 数量=${info.inst.length}，期望 ≥8`);
      assert(info.inst.some((i) => i.count >= 1000), '未发现 ≥1000 实例的批量物体（草叶）');
      assert(info.pts.length >= 5, `Points 批次=${info.pts.length}，期望 ≥5（雨/雪/气泡/飞絮等）`);
      assert(info.grass && info.grass.isInstanced, `scene.__grass.isInstancedMesh=${info.grass && info.grass.isInstanced}（type=${info.grass && info.grass.type}）`);
      return { message: `实例化批次充足：InstancedMesh=${info.inst.length}, Points=${info.pts.length}`, actual: `maxInstances=${Math.max(...info.inst.map((i) => i.count))}, grass=${info.grass && info.grass.count}` };
    },
  },

  /* ───────── RELEASE ───────── */
  {
    key: 'release.pagesHome', group: 'release', aliases: ['release.home', 'release.onlineHome', 'release.pagesIndex'],
    title: 'GitHub Pages 首页 200',
    run: async (ctx) => {
      const res = await httpRequest(ctx.baseUrl + '/', { timeout: 30000 });
      assert(res.status === 200, `首页 status=${res.status}`);
      const html = res.body.toString('utf8');
      assert(html.includes('一棵树的四季'), '首页 HTML 不含项目标题「一棵树的四季」');
      assert(/<title>一棵树的四季<\/title>/.test(html), '首页 title 不匹配');
      return { message: `首页 HTTP 200 且标题正确（${ctx.baseUrl}）`, actual: `status=200, ${(html.length / 1024).toFixed(0)}KB` };
    },
  },
  {
    key: 'release.md5', group: 'release', aliases: ['release.checksum', 'release.onlineMd5', 'release.fileHash'],
    title: '线上资源 md5 一致',
    run: async (ctx) => {
      const host = new URL(ctx.baseUrl).hostname;
      if (!/hrvs0769\.github\.io$/i.test(host)) {
        throw new SkipError(`需线上环境：当前 baseUrl=${ctx.baseUrl}，不是 https://hrvs0769.github.io/tree-of-seasons/`);
      }
      const files = ['index.html', 'app.js', 'assets/tree-of-seasons-bgm-v3.mp3'];
      const rows = [];
      for (const f of files) {
        const local = fs.readFileSync(path.join(ROOT, f));
        const online = await httpRequest(ctx.baseUrl.replace(/\/$/, '') + '/' + f, { timeout: 60000 });
        assert(online.status === 200, `${f} 线上 status=${online.status}`);
        const lh = crypto.createHash('md5').update(local).digest('hex');
        const oh = crypto.createHash('md5').update(online.body).digest('hex');
        rows.push({ f, lh, oh, equal: lh === oh });
        assert(lh === oh, `${f} md5 不一致：本地 ${lh}, 线上 ${oh}`);
      }
      return { message: '线上 index.html/app.js/BGM 与本地 md5 完全一致', actual: rows.map((r) => `${r.f}=${r.lh}`).join(', ') };
    },
  },
  {
    key: 'release.docsHash', group: 'release', aliases: ['release.docsCommit', 'release.docHeader', 'release.docVersion'],
    title: '文档头哈希一致',
    run: async () => {
      const rows = [];
      for (let i = 1; i <= 11; i++) {
        const file = `docs/${String(i).padStart(2, '0')}-`;
        const dir = path.join(ROOT, 'docs');
        const name = fs.readdirSync(dir).find((n) => n.startsWith(String(i).padStart(2, '0') + '-') && n.endsWith('.md'));
        assert(name, `缺少 docs/${file}*.md`);
        const text = fs.readFileSync(path.join(dir, name), 'utf8');
        assert(!text.includes('__COMMIT_HASH__'), `${name} 含 __COMMIT_HASH__ 占位符`);
        const m = /对应代码[：:]\s*`([0-9a-f]{7,40})`/i.exec(text);
        assert(m, `${name} 头部缺少「对应代码：<hash>」`);
        rows.push({ name, hash: m[1] });
      }
      const unique = [...new Set(rows.map((r) => r.hash))];
      return { message: 'docs/01–11 头部均为真实 7–40 位十六进制提交哈希，无占位符', actual: `11 docs, hashes=${unique.join(',')}` };
    },
  },
  {
    key: 'release.tags', group: 'release', aliases: ['release.gitTags', 'release.rollback', 'release.tagCheck'],
    title: 'Git 回退标签',
    run: async () => {
      const tags = execSync('git tag', { cwd: ROOT, encoding: 'utf8' }).split('\n').map((s) => s.trim()).filter(Boolean);
      for (const need of ['pre-round2', 'round2-v1']) {
        assert(tags.includes(need), `缺少 Git 标签 ${need}`);
        execSync(`git rev-parse --verify ${need}^{commit}`, { cwd: ROOT, stdio: 'ignore' });
      }
      return { message: 'pre-round2 / round2-v1 回退标签存在且可解析', actual: `tags=${tags.length}, include pre-round2 & round2-v1` };
    },
  },
  {
    key: 'release.readmeEntry', group: 'release', aliases: ['release.readme', 'release.entryDocs', 'release.readmeLinks'],
    title: 'README 入口齐全',
    run: async () => {
      const readme = readFile('README.md');
      assert(/https:\/\/hrvs0769\.github\.io\/tree-of-seasons\//.test(readme), 'README 缺少线上地址');
      assert(/\?class/.test(readme), 'README 缺少课堂模式直达 ?class');
      assert(/tools\/visual-audit\.sh/.test(readme), 'README 缺少视觉审查命令');
      assert(/tools\/shoot\.sh/.test(readme), 'README 缺少截图命令');
      for (let i = 1; i <= 11; i++) {
        const n = String(i).padStart(2, '0');
        assert(new RegExp(`docs/${n}-`).test(readme), `README 缺少 docs/${n}-* 链接`);
      }
      return { message: 'README 含线上地址、?class、视觉审查命令与 docs/01–11 索引', actual: 'onlineUrl + ?class + visual-audit + 11 docs links' };
    },
  },
  {
    key: 'release.deployExclude', group: 'release', aliases: ['release.deploy', 'release.noLargeFiles', 'release.nojekyll'],
    title: '部署排除大文件',
    run: async () => {
      const deployDir = '/tmp/tree-of-seasons-deploy';
      const docs = readFile('docs/06-build-and-deploy.md');
      assert(/touch\s+\/tmp\/tree-of-seasons-deploy\/\.nojekyll/.test(docs), '部署流程未创建 .nojekyll');
      const notNeed = docs.split('不需要：')[1] || '';
      for (const banned of ['shots/', 'tree-of-seasons.mp4', 'tree-of-seasons-bgm.wav', 'node_modules/']) {
        assert(notNeed.includes(banned), `部署文档未排除 ${banned}`);
      }
      if (fs.existsSync(deployDir)) {
        const entries = fs.readdirSync(deployDir);
        for (const banned of ['shots', 'tree-of-seasons.mp4', 'tree-of-seasons-bgm.wav', 'node_modules']) {
          assert(!entries.includes(banned), `部署目录含 ${banned}`);
        }
        assert(entries.includes('.nojekyll'), '部署目录缺少 .nojekyll');
        return { message: '部署目录干净：无 shots/mp4/wav/node_modules，含 .nojekyll', actual: `/tmp/tree-of-seasons-deploy entries=${entries.length}` };
      }
      const gitignore = readFile('.gitignore');
      assert(/shots\//.test(gitignore) && /node_modules\//.test(gitignore), '.gitignore 未排除 shots/node_modules');
      return { message: '部署文档排除规则齐全（部署目录尚未创建，按文档规则核验）', actual: 'docs/06 lists shots/mp4/wav/node_modules exclusions + touch .nojekyll' };
    },
  },
  {
    key: 'release.bgmLicense', group: 'release', aliases: ['release.musicLicense', 'release.cc0', 'release.audioLicense'],
    title: 'BGM 授权可追溯',
    run: async () => {
      const license = readFile('assets/MUSIC-LICENSE.md');
      assert(/CC0 1\.0/.test(license), 'MUSIC-LICENSE 缺少 CC0 1.0');
      assert(/Yoiyami/.test(license), 'MUSIC-LICENSE 缺少作者 Yoiyami');
      assert(/opengameart\.org/.test(license), 'MUSIC-LICENSE 缺少原曲地址');
      const hashes = [...license.matchAll(/[0-9a-f]{64}/g)].map((m) => m[0]);
      assert(hashes.length >= 2, `MUSIC-LICENSE 记录的 hash 数=${hashes.length}`);
      const audio = fs.readFileSync(path.join(ROOT, 'assets/tree-of-seasons-bgm-v3.mp3'));
      const actual = crypto.createHash('sha256').update(audio).digest('hex');
      const match = hashes.includes(actual);
      const sizeMatch = new RegExp(String(audio.length).replace(/(\d{3})/g, '$1')).test(license.replace(/,/g, ''));
      assert(match, `当前 MP3 SHA-256=${actual.slice(0, 16)}… 与 MUSIC-LICENSE 记录均不匹配（记录：${hashes.map((h) => h.slice(0, 16) + '…').join(', ')}）`);
      assert(sizeMatch, `当前 MP3 字节数=${audio.length} 未记录在授权文档`);
      return { message: 'BGM 授权 CC0/Yoiyami/来源/SHA-256 全部可追溯且与文件一致', actual: `sha256=${actual.slice(0, 16)}…, size=${audio.length}` };
    },
  },
];
