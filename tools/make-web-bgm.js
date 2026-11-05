#!/usr/bin/env node
/**
 * 《一圈年轮》v2 —— 网页版《一棵树的四季》专用背景音乐
 *
 * 运行： node tools/make-web-bgm.js
 * 输出： /tmp/tree-of-seasons-web-bgm.wav （44.1kHz / 16bit / 立体声 / 260.000 秒）
 * 压成网页用的 mp3：
 *   ffmpeg -y -loglevel error -i /tmp/tree-of-seasons-web-bgm.wav \
 *     -codec:a libmp3lame -q:a 3 -ar 44100 assets/tree-of-seasons-bgm-v2.mp3
 *
 * ── v2 改了什么（v1 被评价「死气沉沉」）──────────────────────────────
 *   1. 60 → 96 BPM：1 拍 0.625 秒、1 小节 2.5 秒，260 秒正好 104 小节；
 *      八分音符分解和弦跑起来，有了往前走的脉搏，不再是一滩长音。
 *   2. 发声密度 1.2 次/秒 → 约 4.5 次/秒；开头 20 秒不再近乎静音，
 *      第 8 秒就有主题，打开页面立刻听得到音乐。
 *   3. 音色提亮：拨弦加高次谐波 + 起音瞬态 + 轻微失谐双音，衰减更短更「叮」；
 *      绵长的弦乐铺底减半、混响减半（drier 才不闷）。
 *   4. 低音从「5 秒长音」改成每小节两下短促拨奏（pizzicato），
 *      再加极轻的沙锤点和高频闪，节奏有骨架但完全不吵。
 *   5. 和声明亮化：以 F / C / B♭ / G 大三和九和弦为主，小调只在秋天点缀；
 *      主旋律改写成上行、短音符、带跳跃的句子，全曲出现 16 次。
 *   6. 冬天不再「大幅留白」，改成清透晶莹（铃多、低频薄、旋律照常走）；
 *      整曲最轻的一段也从 -33.8 dBFS 提到约 -22 dBFS。
 *   7. 总线加温和压缩 + 情绪曲线：收住拨弦尖瞬态，让长成大树、第一年夏、
 *      结果三段真正抬起来，不再全曲一个响度平铺。
 *
 * 仍然保留：260 秒与 4:20 时间轴对齐、14 个乐章对应 14 个章节、
 * 纯代码加法合成（不用任何音频素材、可商用无需署名）、
 * 按背景乐响度定标（-20.0 dBFS RMS）不抢课堂旁白。
 *
 * 和 tools/make-bgm.js 的关系：那首 58 秒只给导出的视频短片用，网页不加载它。
 */
const fs = require('fs');
const path = require('path');

const SR = 44100;
const DUR = 260.0;                       // 与网页 STORY_END（≈259.9s）对齐
const N = Math.round(SR * DUR);
const WAV_OUT = process.argv[2] || path.join('/tmp', 'tree-of-seasons-web-bgm.wav');

const BPM = 96;
const BEAT = 60 / BPM;                   // 0.625 秒
const BAR = BEAT * 4;                    // 2.5 秒
const STEP = BEAT / 2;                   // 八分音符 0.3125 秒

const dryL = new Float32Array(N);
const dryR = new Float32Array(N);

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

/* 固定种子：每次生成完全一致，方便复现和版本对比 */
let _seed = 20261105;
function rnd() {
  _seed = (_seed + 0x6D2B79F5) | 0;
  let t = _seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
/* 噪声用独立随机源，免得瞬态噪声消耗掉音符的随机序列 */
let _nseed = 99173;
function nrnd() {
  _nseed = (_nseed + 0x6D2B79F5) | 0;
  let t = _nseed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/* ---------------- 音色 ---------------- */

// 清脆拨弦 / 钢片琴：高次谐波更足、起音带一小撮噪声、衰减更短
function pluck(t0, freq, amp, dur, pan) {
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0 || start < 0) return;
  const w = Math.PI * 2 * freq;
  const l = 0.5 - pan * 0.5, r = 0.5 + pan * 0.5;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const env = (1 - Math.exp(-t * 900)) * Math.exp(-t * 4.6);
    let s = Math.sin(w * t) * Math.exp(-t * 2.6);
    s += Math.sin(w * 2 * t) * 0.42 * Math.exp(-t * 4.2);
    s += Math.sin(w * 3 * t) * 0.20 * Math.exp(-t * 6.5);
    s += Math.sin(w * 4.02 * t) * 0.10 * Math.exp(-t * 9.0);
    s += Math.sin(w * 5.40 * t) * 0.05 * Math.exp(-t * 13.0);
    s += Math.sin(w * 1.003 * t) * 0.18 * Math.exp(-t * 3.0);   // 失谐双音，声音有实体
    if (t < 0.008) s += (nrnd() * 2 - 1) * (1 - t / 0.008) * 0.30; // 拨弦瞬态
    const v = s * env * amp;
    dryL[start + i] += v * l;
    dryR[start + i] += v * r;
  }
}

// 短促低音拨奏：每小节两下，给音乐脉搏，不再是一整块低频墙
function pizz(t0, freq, amp) {
  const dur = 0.46;
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0 || start < 0) return;
  const w = Math.PI * 2 * freq;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const env = (1 - Math.exp(-t * 700)) * Math.exp(-t * 9.0);
    const s = Math.sin(w * t) + Math.sin(w * 2 * t) * 0.30 + Math.sin(w * 3 * t) * 0.12 + Math.sin(w * 4 * t) * 0.05;
    const v = s * env * amp;
    dryL[start + i] += v; dryR[start + i] += v;
  }
}

// 弦乐铺底：份量减半、起落更快，只托住和声，不糊住画面
function pad(t0, dur, freq, amp) {
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0 || start < 0) return;
  const atk = Math.min(0.7, dur * 0.3);
  const rel = Math.min(1.3, dur * 0.4);
  const inc = Math.PI * 2 * freq / SR;
  let p = 0, pl = 0, pr = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const e = smooth(0, atk, t) * (1 - smooth(dur - rel, dur, t));
    if (e > 0) {
      const sway = 0.90 + 0.10 * Math.sin(2 * Math.PI * 0.35 * t);
      const a = (Math.sin(p) + Math.sin(2 * p) * 0.20 + Math.sin(3 * p) * 0.06) * e * amp * 0.55;
      const l = Math.sin(pl) * e * amp * sway * 0.45;
      const r = Math.sin(pr) * e * amp * sway * 0.45;
      dryL[start + i] += (a + l) * 0.7;
      dryR[start + i] += (a + r) * 0.7;
    }
    p += inc; pl += inc * 1.0012; pr += inc * 0.9988;
  }
}

// 高音铃：更清脆，秋天像落叶、冬天像雪
function bell(t0, freq, amp) {
  const dur = 1.7;
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0 || start < 0) return;
  const w = Math.PI * 2 * freq;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const env = (1 - Math.exp(-t * 700)) * Math.exp(-t * 3.2);
    const s = Math.sin(w * t) + Math.sin(w * 2.76 * t) * 0.28 + Math.sin(w * 5.4 * t) * 0.10;
    const v = s * env * amp;
    dryL[start + i] += v * 0.62; dryR[start + i] += v * 0.38;
  }
}

// 主旋律：短音符、明亮、带敲击颗粒，句子是上行再轻轻落回
function lead(t0, freq, amp, dur, pan) {
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round((dur + 0.55) * SR));
  if (n <= 0 || start < 0) return;
  const inc = Math.PI * 2 * freq / SR;
  let ph = 0;
  const l = 0.5 - pan * 0.5, r = 0.5 + pan * 0.5;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const env = (1 - Math.exp(-t * 260)) * (1 - smooth(dur * 0.6, dur + 0.55, t)) * Math.exp(-t * 0.9);
    ph += inc * (1 + 0.0012 * Math.sin(2 * Math.PI * 5.6 * t));
    let s = Math.sin(ph) + 0.50 * Math.sin(2 * ph) + 0.22 * Math.sin(3 * ph) + 0.08 * Math.sin(4.02 * ph);
    s += 0.12 * Math.sin(0.5 * ph);
    const v = s * env * amp;
    dryL[start + i] += v * l;
    dryR[start + i] += v * r;
  }
}

// 极轻的沙锤点：只给每小节的第一个八分音符一个「点」，几乎听不见但节奏立得住
function tick(t0, amp) {
  const dur = 0.055;
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0 || start < 0) return;
  let hp = 0, prev = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const w = nrnd() * 2 - 1;
    hp = 0.82 * (hp + w - prev); prev = w;    // 高通，只留细碎的沙沙声
    const v = hp * Math.exp(-t * 90) * amp;
    dryL[start + i] += v * 0.8; dryR[start + i] += v;
  }
}

// 高频闪：春夏的阳光感，一小撮带通噪声，非常轻
function shimmer(t0, amp) {
  const dur = 0.34;
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0 || start < 0) return;
  let a1 = 0, a2 = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const w = nrnd() * 2 - 1;
    a1 += (w - a1) * 0.55; a2 += (w - a2) * 0.16;
    const v = (a1 - a2) * Math.exp(-t * 16) * (1 - Math.exp(-t * 500)) * amp;
    dryL[start + i] += v; dryR[start + i] += v * 0.7;
  }
}

/* ---------------- 音高与和声 ---------------- */

const HZ = {
  F2: 87.31, G2: 98.00, A2: 110.00, Bb2: 116.54, C3: 130.81, D3: 146.83, E3: 164.81,
  F3: 174.61, G3: 196.00, A3: 220.00, Bb3: 233.08, B3: 246.94, C4: 261.63, D4: 293.66, E4: 329.63,
  F4: 349.23, G4: 392.00, A4: 440.00, Bb4: 466.16, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25,
  F5: 698.46, G5: 783.99, A5: 880.00, Bb5: 932.33, B5: 987.77, C6: 1046.50, D6: 1174.66, E6: 1318.51,
  F6: 1396.91, G6: 1567.98,
};

// arp = 这个和弦上跑动用的高音区；root = 低音拨奏的根音
const CHORDS = {
  F9:  { notes: ['F3', 'A3', 'C4', 'E4', 'G4'], root: 'F2',  arp: ['C5', 'E5', 'F5', 'A5', 'C6'] },
  F:   { notes: ['F3', 'A3', 'C4', 'E4'],       root: 'F2',  arp: ['C5', 'E5', 'F5', 'A5', 'C6'] },
  C:   { notes: ['C3', 'E3', 'G3', 'C4'],       root: 'C3',  arp: ['G4', 'C5', 'E5', 'G5', 'C6'] },
  CE:  { notes: ['E3', 'G3', 'C4', 'E4'],       root: 'C3',  arp: ['G4', 'C5', 'E5', 'G5', 'C6'] },
  Bb:  { notes: ['Bb2', 'D3', 'F3', 'A3'],      root: 'Bb2', arp: ['F4', 'A4', 'D5', 'F5', 'A5'] },
  G:   { notes: ['G2', 'B3', 'D4', 'F4'],       root: 'G2',  arp: ['D5', 'G5', 'B5', 'D6', 'G5'] },
  Dm7: { notes: ['D3', 'F3', 'A3', 'C4'],       root: 'D3',  arp: ['A4', 'C5', 'D5', 'F5', 'A5'] },
  Am7: { notes: ['A2', 'C3', 'E3', 'G3'],       root: 'A2',  arp: ['E4', 'A4', 'C5', 'E5', 'A5'] },
  Gm7: { notes: ['G2', 'Bb2', 'D3', 'F3'],      root: 'G2',  arp: ['D5', 'F5', 'G5', 'Bb5', 'D6'] },
};

/* 14 个乐章，与网页 CHAPTERS 逐条对应。
   d0→d1 = 八分音符的发声概率；bass = 低音拨奏份量；bell = 铃的密度；
   bright = 高八度与高频闪的份量；minor = 秋天/冬天稍微收一点暖度。
   注意：整曲最低密度也有 0.42，不再出现「几乎没声音」的段落。 */
const MOVEMENTS = [
  { t0: 0,   t1: 16,  title: '种子入土',    chords: ['F9', 'C', 'F9', 'Bb'],       d0: 0.58, d1: 0.70, bass: 0.62, bell: 0.16, bright: 0.22 },
  { t0: 16,  t1: 32,  title: '春雨滋润',    chords: ['F9', 'CE', 'C', 'F9'],       d0: 0.70, d1: 0.80, bass: 0.70, bell: 0.22, bright: 0.32 },
  { t0: 32,  t1: 56,  title: '向下扎根',    chords: ['Dm7', 'Bb', 'F9', 'C'],      d0: 0.74, d1: 0.86, bass: 0.82, bell: 0.20, bright: 0.30 },
  { t0: 56,  t1: 76,  title: '破土发芽',    chords: ['F9', 'CE', 'G', 'C'],        d0: 0.84, d1: 0.93, bass: 0.88, bell: 0.28, bright: 0.46 },
  { t0: 76,  t1: 94,  title: '幼苗初长',    chords: ['F', 'Am7', 'Bb', 'C'],       d0: 0.89, d1: 0.95, bass: 0.92, bell: 0.30, bright: 0.52 },
  { t0: 94,  t1: 108, title: '小树成形',    chords: ['Bb', 'C', 'F9', 'G'],        d0: 0.93, d1: 0.97, bass: 0.95, bell: 0.32, bright: 0.58 },
  { t0: 108, t1: 120, title: '长成大树',    chords: ['F9', 'CE', 'Bb', 'C'],       d0: 0.96, d1: 1.00, bass: 1.00, bell: 0.38, bright: 0.64 },
  { t0: 120, t1: 140, title: '第一年 · 夏', chords: ['F', 'C', 'Dm7', 'Bb', 'G'],  d0: 0.95, d1: 0.99, bass: 0.98, bell: 0.36, bright: 0.68 },
  { t0: 140, t1: 160, title: '第一年 · 秋', chords: ['Dm7', 'Gm7', 'Bb', 'C'],     d0: 0.82, d1: 0.74, bass: 0.72, bell: 0.42, bright: 0.38 },
  { t0: 160, t1: 180, title: '第一年 · 冬', chords: ['Gm7', 'F9', 'C', 'F9'],      d0: 0.64, d1: 0.70, bass: 0.42, bell: 0.62, bright: 0.56 },
  { t0: 180, t1: 200, title: '第二年 · 春', chords: ['F9', 'Am7', 'Bb', 'C'],      d0: 0.84, d1: 0.95, bass: 0.86, bell: 0.34, bright: 0.60 },
  { t0: 200, t1: 220, title: '第二年 · 夏', chords: ['F', 'Dm7', 'G', 'Bb'],       d0: 0.94, d1: 0.99, bass: 0.96, bell: 0.36, bright: 0.68 },
  { t0: 220, t1: 240, title: '第二年 · 秋', chords: ['Bb', 'F9', 'CE', 'F'],       d0: 0.98, d1: 1.00, bass: 1.00, bell: 0.52, bright: 0.74 },
  { t0: 240, t1: 260, title: '第二年 · 冬', chords: ['Gm7', 'F9', 'C', 'F9'],      d0: 0.74, d1: 0.44, bass: 0.55, bell: 0.48, bright: 0.40 },
];

function movementAt(t) {
  for (let i = MOVEMENTS.length - 1; i >= 0; i--) if (t >= MOVEMENTS[i].t0) return MOVEMENTS[i];
  return MOVEMENTS[0];
}
function densityAt(t) {
  const m = movementAt(t);
  const u = clamp01((t - m.t0) / (m.t1 - m.t0));
  return clamp01(m.d0 + (m.d1 - m.d0) * u + 0.03 * Math.sin(t * 0.9));
}

/* 和声单元：每 5 秒（= 2 小节）换一次；末尾不足 3 秒的尾巴并进前一个 */
const UNITS = [];
for (const m of MOVEMENTS) {
  let t = m.t0, i = 0;
  while (t < m.t1 - 0.01) {
    let t1 = Math.min(t + BAR * 2, m.t1);
    if (m.t1 - t1 < 3) t1 = m.t1;
    UNITS.push({ t0: t, t1, chord: CHORDS[m.chords[i % m.chords.length]], mv: m });
    i++; t = t1;
  }
}

/* ---------------- 树的主题 ----------------
   A / B 是上行的问答，C 是结果时高八度的顶点。
   短音符 + 跳进，句子一开口就有精神；F 大调五声，任何和弦上都不撞音。 */
const MOTIF = {
  A: [[0, 'C5', 0.55], [0.625, 'E5', 0.55], [1.25, 'F5', 0.55], [1.875, 'A5', 1.05], [3.125, 'G5', 0.55], [3.75, 'F5', 0.55], [4.375, 'C5', 0.90]],
  B: [[0, 'A4', 0.55], [0.625, 'C5', 0.55], [1.25, 'D5', 0.55], [1.875, 'F5', 1.05], [3.125, 'E5', 0.55], [3.75, 'C5', 0.55], [4.375, 'A4', 0.90]],
  C: [[0, 'F5', 0.55], [0.625, 'A5', 0.55], [1.25, 'C6', 0.55], [1.875, 'F6', 1.05], [3.125, 'E6', 0.55], [3.75, 'C6', 0.55], [4.375, 'A5', 0.90]],
};
const LEAD_EVENTS = [
  [8, 'A', 0.52], [24, 'B', 0.58],
  [40, 'A', 0.66], [56, 'B', 0.72],
  [76, 'A', 0.80], [92, 'B', 0.84],
  [108, 'A', 0.90], [124, 'B', 0.94],
  [140, 'A', 0.78], [156, 'B', 0.74],
  [164, 'A', 0.62],                 // 冬天旋律照常走，只是更轻、更清透
  [180, 'A', 0.84], [196, 'B', 0.88],
  [212, 'A', 0.94], [228, 'C', 1.00],
  [244, 'A', 0.42],                 // 末冬一句轻轻的回望
];

/* ---------------- 铺排 ---------------- */

const BELL_NOTES = ['C6', 'D6', 'E6', 'F6', 'G6', 'A5'];
let arpIdx = 0;
let noteCount = 0;

for (const u of UNITS) {
  const len = u.t1 - u.t0;
  const d = densityAt(u.t0 + len * 0.5);
  const arp = u.chord.arp;

  // 铺底：份量减半，只托和声
  const padAmp = 0.0080 * (0.55 + 0.45 * d);
  u.chord.notes.forEach((name, i) => {
    pad(u.t0 - 0.15, len + 0.7, HZ[name], padAmp * (i === 0 ? 1.10 : 0.82));
  });

  // 八分音符分解和弦：顺序游走，偶尔跳一格，形成连续的流动感
  for (let t = u.t0; t < u.t1 - 0.05; t += STEP) {
    const dd = densityAt(t);
    if (rnd() > dd) continue;
    arpIdx = (arpIdx + (rnd() < 0.78 ? 1 : (rnd() < 0.5 ? -1 : 2)) + arp.length) % arp.length;
    const oct = rnd() < u.mv.bright * 0.22 ? 2 : 1;
    const amp = 0.034 * (0.62 + 0.38 * rnd()) * (0.55 + 0.45 * dd);
    pluck(t + (rnd() - 0.5) * 0.014, HZ[arp[arpIdx]] * oct, amp, 0.72, (rnd() - 0.5) * 1.1);
    if (rnd() < 0.20) {   // 偶尔补一个低八度，让跑动有根
      pluck(t + 0.010, HZ[u.chord.notes[0]] * 2, amp * 0.46, 0.62, (rnd() - 0.5) * 0.7);
    }
    noteCount++;
  }

  // 每小节：两下短促低音 + 一个几乎听不见的沙锤点（脉搏）
  for (let t = u.t0; t < u.t1 - 0.05; t += BAR) {
    pizz(t, HZ[u.chord.root], 0.070 * u.mv.bass);
    pizz(t + BEAT * 2, HZ[u.chord.root] * 1.5, 0.042 * u.mv.bass);
    tick(t, 0.0035);
    noteCount += 3;
  }

  // 铃：秋冬更多，清透而不是留白
  if (u.mv.bell > 0) {
    for (let t = u.t0 + 0.4; t < u.t1 - 0.3; t += 1.25) {
      if (rnd() >= u.mv.bell) continue;
      const name = BELL_NOTES[Math.floor(rnd() * BELL_NOTES.length)];
      bell(t, HZ[name], 0.008 + rnd() * 0.007);
      noteCount++;
    }
  }

  // 高频闪：春夏的阳光
  if (u.mv.bright > 0.3) {
    for (let t = u.t0 + 0.9; t < u.t1 - 0.4; t += BAR) {
      if (rnd() < u.mv.bright * 0.6) { shimmer(t, 0.0030); noteCount++; }
    }
  }
}

// 主旋律：全曲 16 次，句法是上行再落回，听一遍就能记住
for (const [t0, key, g] of LEAD_EVENTS) {
  for (const [dt, name, dur] of MOTIF[key]) {
    const amp = 0.058 * g * (0.86 + 0.14 * densityAt(t0 + dt));
    lead(t0 + dt + (rnd() - 0.5) * 0.018, HZ[name], amp, dur, 0.08 * Math.sin(t0));
    noteCount++;
  }
}

/* ---------------- 混响：短一点、干一点，v1 的长尾是「闷」的主因之一 ---------------- */
const TAPS = [
  [0.0197, 0.30], [0.0293, 0.24], [0.0371, 0.19],
  [0.0487, 0.14], [0.0613, 0.10], [0.0887, 0.06],
];
const wetL = new Float32Array(N);
const wetR = new Float32Array(N);
const scratch = new Float32Array(N);
function diffuse(src, out) {
  for (let i = 0; i < N; i++) out[i] = src[i];
  for (const [d, g] of TAPS) {
    const k = Math.round(d * SR);
    for (let i = k; i < N; i++) out[i] += src[i - k] * g;
  }
  scratch.set(out);
  const k2 = Math.round(0.113 * SR);
  for (let i = k2; i < N; i++) out[i] += scratch[i - k2] * 0.16;
  const k3 = Math.round(0.213 * SR);
  scratch.set(out);
  for (let i = k3; i < N; i++) out[i] += scratch[i - k3] * 0.08;
}
diffuse(dryL, wetL);
diffuse(dryR, wetR);

/* ---------------- 情绪曲线 ----------------
   光靠「密度」不足以让高潮立起来：整曲都同样响，听着还是会平。
   这里给每个段落一个相对音量（dB），春天往上走、长成大树和第一年夏第一次抬头、
   秋天略收、第一年冬清透一点、结果时最满、末冬收回来。 */
const EMOTION = [
  [0, 0.0], [16, 0.9], [32, 0.5], [56, 0.9], [76, 1.3],
  [94, 2.0], [108, 2.7], [120, 3.2], [140, 1.3],
  [160, 0.0], [180, 1.8], [200, 2.6], [220, 4.0],
  [240, 0.8], [252, -1.0], [260, -3.0],
];
function emotionAt(t) {
  for (let i = 1; i < EMOTION.length; i++) {
    const [t0, v0] = EMOTION[i - 1], [t1, v1] = EMOTION[i];
    if (t <= t1) return Math.pow(10, (v0 + (v1 - v0) * clamp01((t - t0) / (t1 - t0))) / 20);
  }
  return 1;
}

/* ---------------- 总线：温和压缩、情绪曲线、淡入淡出、按响度定标 ---------------- */
const outL = new Float32Array(N);
const outR = new Float32Array(N);
let sum = 0;
for (let i = 0; i < N; i++) {
  const t = i / SR;
  let l = dryL[i] * 0.90 + wetL[i] * 0.17;
  let r = dryR[i] * 0.90 + wetR[i] * 0.17;
  // tanh(k·x)/k：小信号基本不动，只把拨弦的尖瞬态收住。
  // 不这么做的话峰值会顶到限幅、整曲 RMS 被压回去，听着「噼啪」却又偏轻。
  l = (Math.tanh(l * 2.0) / 2.0);
  r = (Math.tanh(r * 2.0) / 2.0);
  const env = emotionAt(t) * smooth(0, 1.0, t) * (1 - smooth(DUR - 5.0, DUR, t));
  l *= env; r *= env;
  outL[i] = l; outR[i] = r;
  sum += l * l + r * r;
}

// 背景乐按「响度」定标：比 v1 略响（-20.0 dBFS RMS），仍不抢课堂旁白；峰值兜底 -1.5 dBFS
const rms = Math.sqrt(sum / (2 * N));
let gain = Math.pow(10, -20.0 / 20) / (rms || 1);
let peak = 0;
for (let i = 0; i < N; i++) {
  const a = Math.abs(outL[i]) * gain, b = Math.abs(outR[i]) * gain;
  if (a > peak) peak = a;
  if (b > peak) peak = b;
}
const pkLimit = Math.pow(10, -1.5 / 20);
if (peak > pkLimit) gain *= pkLimit / peak;
peak = Math.min(peak, pkLimit);

/* ---------------- 写 16bit 立体声 WAV ---------------- */
const wav = Buffer.alloc(44 + N * 4);
wav.write('RIFF', 0);
wav.writeUInt32LE(36 + N * 4, 4);
wav.write('WAVE', 8);
wav.write('fmt ', 12);
wav.writeUInt32LE(16, 16);
wav.writeUInt16LE(1, 20);
wav.writeUInt16LE(2, 22);
wav.writeUInt32LE(SR, 24);
wav.writeUInt32LE(SR * 4, 28);
wav.writeUInt16LE(4, 32);
wav.writeUInt16LE(16, 34);
wav.write('data', 36);
wav.writeUInt32LE(N * 4, 40);
for (let i = 0; i < N; i++) {
  const l = Math.max(-1, Math.min(1, outL[i] * gain));
  const r = Math.max(-1, Math.min(1, outR[i] * gain));
  wav.writeInt16LE(Math.round(l * 32767), 44 + i * 4);
  wav.writeInt16LE(Math.round(r * 32767), 46 + i * 4);
}
fs.writeFileSync(WAV_OUT, wav);

console.log([
  `《一圈年轮》v2  ${DUR.toFixed(3)}s / ${SR}Hz / 立体声 / ${BPM} BPM`,
  `乐章 ${MOVEMENTS.length} 段 · 和声单元 ${UNITS.length} 个 · 发声 ${noteCount} 次（${(noteCount / DUR).toFixed(1)} 次/秒）· 主题 ${LEAD_EVENTS.length} 次`,
  `RMS ${(20 * Math.log10(rms * gain)).toFixed(1)} dBFS · 峰值 ${(20 * Math.log10(peak)).toFixed(1)} dBFS`,
  `输出 ${WAV_OUT}  ${(wav.length / 1048576).toFixed(1)} MB`,
].join('\n'));
