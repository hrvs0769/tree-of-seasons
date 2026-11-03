#!/usr/bin/env node
/**
 * 离线逐帧渲染成片。
 *
 *   node tools/render.js [--fps 30] [--out framesDir] [--width 1280 --height 720] [--limit N]
 *
 * 做法：用 puppeteer 打开 index.html?video，把页面时间一帧一帧喂进去（window.__setVideoT），
 * 每帧截一张 JPEG。时间轴不是匀速的 —— 发芽和结果两段放慢，四季过渡加速，
 * 这样 58 秒的片子能覆盖「种子 → 长成 → 一年四季 → 第二年结果 → 入冬」。
 * 帧序列再由 ffmpeg 编码成 MP4（见 tools/make-video.sh）。
 */
const path = require('path');
const fs = require('fs');
const puppeteer = require('/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/puppeteer-core');

const ROOT = path.resolve(__dirname, '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const args = process.argv.slice(2);
const getArg = (name, def) => {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : def;
};
const FPS = Number(getArg('fps', 30));
const W = Number(getArg('width', 1280));
const H = Number(getArg('height', 720));
const LIMIT = Number(getArg('limit', 0));
const GPU = args.includes('--gpu');   // 试硬件 GL（macOS 上是 ANGLE/Metal），失败再退回 swiftshader
const OUT = getArg('out', '/tmp/tree_frames');

// 视频时间 v（秒）→ 应用时间 t（秒）。非线性：慢的开头让孩子看清发芽长根。
const KEYS = [
  [0.0, 4.0],     // 种子已经落在土上，根刚冒头
  [6.0, 7.5],     // 破壳、主根往下钻
  [12.0, 17.0],   // 小苗、侧根铺开
  [20.0, 32.0],   // 长成，盛夏满树
  [27.0, 52.0],   // 秋叶
  [33.0, 74.0],   // 雪、光枝
  [37.0, 88.0],   // 第二年春
  [43.0, 118.0],  // 第二年夏
  [49.0, 136.0],  // 第二年秋：结果
  [54.0, 150.0],  // 果实满树，多停一会
  [58.0, 170.0],  // 入冬收尾
];
const DURATION = KEYS[KEYS.length - 1][0];

function appTimeAt(v) {
  for (let i = 1; i < KEYS.length; i++) {
    const [v0, t0] = KEYS[i - 1];
    const [v1, t1] = KEYS[i];
    if (v <= v1 || i === KEYS.length - 1) {
      const k = (v - v0) / (v1 - v0);
      return t0 + (t1 - t0) * Math.min(1, Math.max(0, k));
    }
  }
  return 0;
}

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: [
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--disable-lcd-text',
      ...(GPU
        ? ['--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-webgpu']
        : ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']),
      `--window-size=${W},${H}`,
    ],
    defaultViewport: { width: W, height: H, deviceScaleFactor: 1 },
  });

  const page = await browser.newPage();
  page.on('pageerror', (e) => console.error('[page error]', e.message));
  await page.goto('file://' + path.join(ROOT, 'index.html') + '?video', { waitUntil: 'load' });
  await page.waitForFunction('window.__videoReady === true', { timeout: 30000 });
  // 让贴图、阴影、第一帧都编译完
  await page.evaluate(() => new Promise((r) => setTimeout(r, 600)));

  const total = Math.round(DURATION * FPS);
  const n = LIMIT > 0 ? Math.min(LIMIT, total) : total;
  const t0 = Date.now();

  for (let i = 0; i < n; i++) {
    const v = i / FPS;
    const t = appTimeAt(v);
    await page.evaluate((tt) => { window.__setVideoT(tt); }, t);
    // 等两帧，确保这一帧真的被画出来
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(1)))));
    await page.screenshot({
      path: path.join(OUT, String(i).padStart(5, '0') + '.jpg'),
      type: 'jpeg',
      quality: 92,
    });
    if (i % 30 === 0) {
      const el = (Date.now() - t0) / 1000;
      const per = el / (i + 1);
      console.log(`frame ${i}/${n}  t=${t.toFixed(1)}s  ${per.toFixed(2)}s/帧  预计还需 ${((n - i) * per / 60).toFixed(1)} 分钟`);
    }
  }

  await browser.close();
  console.log(`done: ${n} 帧 -> ${OUT}`);
})();
