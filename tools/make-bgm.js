#!/usr/bin/env node
/**
 * 电影短片配乐合成器（纯代码、无外部素材）。
 *
 * 输出：tree-of-seasons-bgm.wav —— 58.000 秒、44.1kHz、16bit 立体声。
 *
 * 为什么自己合成：任何曲库素材都要处理授权（CC-BY 要署名、CC-BY-NC 不能商用、
 * 平台曲库会因账号/地区失效）。用加法合成从零生成，版权归属明确、可商用、无需署名。
 *
 * 音乐设计：
 *   - 调性 F 大调，60 BPM（1 拍 1 秒、1 小节 4 秒，和 58 秒的片子天然对齐）
 *   - 和声：Fmaj9 → C/E → Dm7 → B♭maj7 → Fmaj7 → Am7 → B♭maj7 → Fadd9，每 8 秒换一次，
 *     全程无鼓点、无切分，靠「密度」而不是「换段」来表达情绪，所以不会有突兀的段落切换
 *   - 织体：竖琴/钢琴质感的琶音 + 弦乐式长音铺底 + 极低的根音 + 少量高音铃
 *   - 情绪曲线跟着画面走：种子稀薄 → 抽芽渐密 → 长成丰满 → 秋略稀疏 → 冬大幅留白
 *     → 次年春回升 → 结果时最暖最满 → 入冬收束
 */
const fs = require('fs');
const path = require('path');

const SR = 44100;
const DUR = 58.0;
const N = Math.round(SR * DUR);

const dryL = new Float32Array(N);
const dryR = new Float32Array(N);

const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

/* 固定种子的伪随机：保证每次生成的 BGM 完全一致（可复现） */
let _seed = 20261103;
function rnd() {
  _seed = (_seed + 0x6D2B79F5) | 0;
  let t = _seed;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/* ---------------- 音色 ---------------- */

// 拨弦 / 钢琴：几个谐波 + 各自独立的衰减，起音 5ms，尾音 1 秒多
function pluck(t0, freq, amp, dur, pan) {
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0) return;
  const w = Math.PI * 2 * freq;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const atk = 1 - Math.exp(-t * 300);
    const env = atk * Math.exp(-t * 3.4);
    let s = Math.sin(w * t) * Math.exp(-t * 2.2);
    s += Math.sin(w * 2 * t) * 0.30 * Math.exp(-t * 3.6);
    s += Math.sin(w * 3 * t) * 0.11 * Math.exp(-t * 5.4);
    s += Math.sin(w * 4.02 * t) * 0.05 * Math.exp(-t * 8.0);
    const v = s * env * amp;
    const k = start + i;
    dryL[k] += v * (0.5 - pan * 0.5);
    dryR[k] += v * (0.5 + pan * 0.5);
  }
}

// 长音铺底：缓起缓落的正弦叠加，左右轻微失谐做宽度
function pad(t0, dur, freq, amp) {
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0) return;
  const atk = Math.min(1.8, dur * 0.45);
  const rel = Math.min(2.6, dur * 0.55);
  const w = Math.PI * 2 * freq;
  const wl = Math.PI * 2 * freq * 1.0009;
  const wr = Math.PI * 2 * freq * 0.9991;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const e = smooth(0, atk, t) * (1 - smooth(dur - rel, dur, t));
    if (e <= 0) continue;
    const a = Math.sin(w * t) + Math.sin(w * 2 * t) * 0.22 + Math.sin(w * 3 * t) * 0.06;
    const breath = 0.88 + 0.12 * Math.sin(2 * Math.PI * 0.13 * t);
    const l = (Math.sin(wl * t) + Math.sin(wl * 2 * t) * 0.2) * e * amp * breath;
    const r = (Math.sin(wr * t) + Math.sin(wr * 2 * t) * 0.2) * e * amp * breath;
    const k = start + i;
    dryL[k] += (a * 0.55 + l * 0.45) * 0.7;
    dryR[k] += (a * 0.55 + r * 0.45) * 0.7;
  }
}

// 低音：几乎纯正弦，只负责托住和声
function bass(t0, dur, freq, amp) {
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0) return;
  const w = Math.PI * 2 * freq;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const e = smooth(0, 0.16, t) * (1 - smooth(dur - 0.9, dur, t)) * Math.exp(-t * 0.5);
    const v = (Math.sin(w * t) + Math.sin(w * 2 * t) * 0.12) * e * amp;
    const k = start + i;
    dryL[k] += v; dryR[k] += v;
  }
}

// 高音铃：快衰减的金属泛音，只在后半段点缀
function bell(t0, freq, amp) {
  const dur = 1.9;
  const start = Math.round(t0 * SR);
  const n = Math.min(N - start, Math.round(dur * SR));
  if (n <= 0) return;
  const w = Math.PI * 2 * freq;
  for (let i = 0; i < n; i++) {
    const t = i / SR;
    const env = (1 - Math.exp(-t * 500)) * Math.exp(-t * 2.6);
    const s = Math.sin(w * t) + Math.sin(w * 2.76 * t) * 0.22 + Math.sin(w * 5.4 * t) * 0.07;
    const v = s * env * amp;
    const k = start + i;
    dryL[k] += v * 0.62; dryR[k] += v * 0.38;
  }
}

/* ---------------- 和声 ---------------- */

const HZ = {
  A2: 110.00, Bb2: 116.54, C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00,
  A3: 220.00, Bb3: 233.08, C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00,
  A4: 440.00, C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00,
  C6: 1046.50, D6: 1174.66, E6: 1318.51, F6: 1396.91,
};

// [起始秒, 和弦音（低→高）, 琶音用的高音区, 低音根音]
const CHORDS = [
  [0,  ['F3', 'A3', 'C4', 'E4', 'G4'], ['C5', 'E5', 'F5', 'A5'], 'F3'],
  [8,  ['E3', 'G3', 'C4', 'E4'],       ['C5', 'E5', 'G5'],        'C3'],
  [16, ['D3', 'F3', 'A3', 'C4'],       ['D5', 'F5', 'A5'],        'D3'],
  [24, ['Bb2', 'D3', 'F3', 'A3'],      ['D5', 'F5', 'A5'],        'Bb2'],
  [32, ['F3', 'A3', 'C4', 'E4'],       ['C5', 'E5', 'F5', 'A5'],  'F3'],
  [40, ['A2', 'C3', 'E3', 'G3'],       ['C5', 'E5', 'G5'],        'A2'],
  [48, ['Bb2', 'D3', 'F3', 'A3'],      ['D5', 'F5', 'A5'],        'Bb2'],
  [56, ['F3', 'A3', 'C4', 'G4'],       ['C5', 'F5', 'A5'],        'F3'],
];

/* 情绪密度：0 = 几乎只有空气，1 = 最丰满。分段线性，天然没有台阶 */
const DENSITY = [
  [0, 0.16], [5, 0.22], [9, 0.38], [13, 0.58], [20, 0.84], [31, 0.86],
  [35, 0.62], [38, 0.34], [43, 0.45], [47, 0.74], [50, 0.90], [55, 0.78], [58, 0.30],
];
function densityAt(t) {
  for (let i = 1; i < DENSITY.length; i++) {
    const [t0, v0] = DENSITY[i - 1], [t1, v1] = DENSITY[i];
    if (t <= t1) return v0 + (v1 - v0) * clamp01((t - t0) / (t1 - t0));
  }
  return DENSITY[DENSITY.length - 1][1];
}

/* ---------------- 铺排 ---------------- */

CHORDS.forEach(([t0, chord, high, root], ci) => {
  const t1 = ci + 1 < CHORDS.length ? CHORDS[ci + 1][0] : DUR;
  const len = t1 - t0;

  // 铺底：整块和弦一起进来，前一小节略有交叠，换和弦时不会有缝
  const padAmp = 0.015 * (0.34 + 0.66 * densityAt(t0 + len * 0.5));
  for (let i = 0; i < chord.length; i++) {
    pad(t0 - 0.35, len + 0.9, HZ[chord[i]], padAmp * (i === 0 ? 1.15 : 0.85));
  }

  // 低音：前半段很克制，从第二个和弦才正式进来
  if (t0 >= 8) bass(t0, Math.min(len + 0.2, 4.4), HZ[root] / 2, 0.050);

  // 琶音：把 8 分音符按密度筛一遍，个别音留白；时间上做 ±12ms 的微移，避免机械感
  const step = 0.5;
  for (let t = t0; t < t1 - 0.05; t += step) {
    const d = densityAt(t);
    if (rnd() > d) continue;
    const note = high[Math.floor(rnd() * high.length)];
    const oct = rnd() < 0.22 ? 2 : 1;                 // 偶尔高八度，像竖琴的顺手一滑
    const amp = 0.045 * (0.55 + 0.45 * rnd()) * (0.45 + 0.55 * d);
    pluck(t + (rnd() - 0.5) * 0.024, HZ[note] * oct, amp, 1.1, (rnd() - 0.5) * 1.2);
    // 低八度补一个弱音，让琶音有"根"
    if (rnd() < 0.34) {
      pluck(t + 0.012, HZ[chord[0]] * 2, amp * 0.55, 1.0, (rnd() - 0.5) * 0.8);
    }
  }

  // 高音铃：只在 30 秒之后点缀，稀疏、很轻
  if (t0 >= 30) {
    for (let t = t0 + 0.8; t < t1 - 0.4; t += 2.0) {
      if (rnd() < 0.45) bell(t, HZ[high[high.length - 1]] * (rnd() < 0.4 ? 2 : 1), 0.010 + rnd() * 0.008);
    }
  }
});

/* ---------------- 混响：多 tap 前向延迟，串两级做出尾音，不做反馈回路 ---------------- */
function diffuse(src) {
  const out = new Float32Array(N);
  const taps = [[0.0297, 0.34], [0.0371, 0.28], [0.0411, 0.24], [0.0533, 0.19], [0.0671, 0.14], [0.0893, 0.10]];
  for (let i = 0; i < N; i++) out[i] = src[i];
  for (const [d, g] of taps) {
    const k = Math.round(d * SR);
    for (let i = k; i < N; i++) out[i] += src[i - k] * g;
  }
  // 二级：给尾音一点厚度
  const tmp = Float32Array.from(out);
  const k2 = Math.round(0.113 * SR);
  for (let i = k2; i < N; i++) out[i] += tmp[i - k2] * 0.22;
  return out;
}

const wetL = diffuse(dryL);
const wetR = diffuse(dryR);

/* ---------------- 总线：混合、去直流、软限幅、淡入淡出、归一 ---------------- */
const outL = new Float32Array(N);
const outR = new Float32Array(N);
let sum = 0;
for (let i = 0; i < N; i++) {
  const t = i / SR;
  const dry = 0.84, wet = 0.24;
  let l = dryL[i] * dry + wetL[i] * wet;
  let r = dryR[i] * dry + wetR[i] * wet;
  // 片头 1.6 秒淡入（和画面的 0.8 秒淡入对齐但更慢，不会有"咔"的感觉），片尾 4.6 秒淡出
  const fade = smooth(0, 1.6, t) * (1 - smooth(DUR - 4.6, DUR, t));
  // 软限幅：tanh 近似，只在峰值附近起作用，不影响整体动态
  l = Math.tanh(l * 0.85) * fade;
  r = Math.tanh(r * 0.85) * fade;
  outL[i] = l; outR[i] = r;
  sum += l * l + r * r;
}

// 按「响度」而不是「峰值」定音量：背景乐要能听见但不抢画面。
// 有效值定到 -23 dBFS（约 -19 LUFS），再用峰值兜底，保证 true peak ≤ -1.5 dBFS。
const rms = Math.sqrt(sum / (2 * N));
let gain = Math.pow(10, -21.5 / 20) / (rms || 1);
let peak = 0;
for (let i = 0; i < N; i++) {
  const a = Math.abs(outL[i]) * gain, b = Math.abs(outR[i]) * gain;
  if (a > peak) peak = a;
  if (b > peak) peak = b;
}
const pkLimit = Math.pow(10, -1.5 / 20);
if (peak > pkLimit) gain *= pkLimit / peak;
peak *= peak > pkLimit ? pkLimit / peak : 1;

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

const out = path.join(__dirname, '..', 'tree-of-seasons-bgm.wav');
fs.writeFileSync(out, wav);
console.log(`bgm: ${out}  ${DUR.toFixed(3)}s  RMS ${(20 * Math.log10(rms * gain)).toFixed(1)} dBFS  峰值 ${(20 * Math.log10(peak)).toFixed(1)} dBFS`);
