#!/usr/bin/env node
/**
 * 画面探针：把页面定在某个视频时间，再对若干屏幕点做射线拾取，
 * 用来确认「画面上那个奇怪的东西」到底是哪一个 mesh。
 *
 *   node tools/probe.js --t 12.25 --pts "610,60" "610,120"
 */
const path = require('path');
const puppeteer = require('/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/puppeteer-core');

const ROOT = path.resolve(__dirname, '..');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const args = process.argv.slice(2);
const getArg = (name, def) => {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : def;
};
const W = 1280, H = 720;
const T = Number(getArg('t', 12.25));
const pts = args.filter((a) => /^\d+,\d+$/.test(a)).map((a) => a.split(',').map(Number));

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: [
      '--no-sandbox', '--hide-scrollbars', '--force-device-scale-factor=1',
      '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist',
      `--window-size=${W},${H}`,
    ],
    defaultViewport: { width: W, height: H, deviceScaleFactor: 1 },
  });
  const page = await browser.newPage();
  page.on('pageerror', (e) => console.error('[page error]', e.message));
  await page.goto('file://' + path.join(ROOT, 'index.html') + '?video&dbg', { waitUntil: 'load' });
  await page.waitForFunction('window.__videoReady === true && typeof window.__probe === "function"', { timeout: 30000 });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 600)));
  await page.evaluate((tt) => { window.__setVideoT(tt); }, T);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(1)))));

  for (const [x, y] of pts) {
    const nx = (x / W) * 2 - 1;
    const ny = -((y / H) * 2 - 1);
    const hits = await page.evaluate((a, b) => window.__probe(a, b), nx, ny);
    console.log(`--- (${x},${y})`);
    for (const h of hits) console.log('   ', JSON.stringify(h));
  }
  await browser.close();
})();
