/* 一棵树的四季 — 纯代码生成的 3D 树木，从种子发芽到参天大树，走过春夏秋冬 */
import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
const randRange = (r, a, b) => a + (b - a) * r();

// 在折线骨架 pts 上按 0..1 取点（生长动画和叶片挂点共用）
function pointOnPolyline(pts, t, out) {
  const seg = Math.min(pts.length - 1, Math.max(0, t * (pts.length - 1)));
  const i0 = Math.min(pts.length - 2, Math.max(0, Math.floor(seg)));
  const f = seg - i0;
  const v = out || new THREE.Vector3();
  return v.copy(pts[i0]).lerp(pts[i0 + 1], f);
}

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------------- 时间参数 ---------------- */
const DEBUG = /debug/.test(location.search);
const SEASON_SECONDS = 16;        // 每个季节多少秒（一年 = 64 秒）
const GROW_END = 92;              // 从种子到长成大树的故事时长（秒）
const GROW_END_P = 0.25;          // 长成时刚好是初夏（p=0.25）
const STORY_END = GROW_END + (1 - GROW_END_P) * SEASON_SECONDS * 4 + SEASON_SECONDS * 4 - 0.1; // ≈ 203.9 秒（停在第 2 年冬末）

// 生长曲线：不是匀速。种子/发芽/扎根/幼苗占大部分时间，后面抽枝成树越来越快，
// 这样小朋友能看清“种子怎么变成小苗”，而不是几秒钟就过去了。
const GROW_KEYS = [
  [0, 0.000],
  [12, 0.004],   // 种子吸水
  [24, 0.020],   // 破壳
  [40, 0.060],   // 主根向下、主干开始
  [55, 0.140],   // 破土、子叶
  [68, 0.280],   // 幼苗
  [78, 0.500],   // 小树
  [86, 0.750],   // 树冠展开
  [92, 1.000],   // 大树
];
function growthAt(t) {
  if (t <= 0) return 0;
  if (t >= GROW_END) return 1;
  for (let i = 1; i < GROW_KEYS.length; i++) {
    const [t1, g1] = GROW_KEYS[i];
    if (t <= t1) {
      const [t0, g0] = GROW_KEYS[i - 1];
      const u = smoothstep(0, 1, (t - t0) / Math.max(0.001, t1 - t0));
      return g0 + (g1 - g0) * u;
    }
  }
  return 1;
}

// 故事季节：生长阶段停在“春末”，长成后从夏初开始正常四季循环
function storySeason(t) {
  if (t < GROW_END) {
    return 0.02 + (GROW_END_P - 0.02) * (t / GROW_END); // 春 0.02 → 夏初 0.25
  }
  return GROW_END_P + (t - GROW_END) / (SEASON_SECONDS * 4);
}
function storyYear(t) {
  if (t < GROW_END) return 1;
  return 1 + Math.floor((t - GROW_END) / (SEASON_SECONDS * 4) + GROW_END_P);
}

/* ---------------- 四季配色（春 / 夏 / 秋 / 冬） ---------------- */
const SEASONS = [
  { name: '春', sub: '万物发芽', skyTop: 0x4fa8e8, horizon: 0xffe7c4, fog: 0xd6eefb, ground: 0x86c96a, sun: 0xffc890, sunI: 2.6, hemi: 0.50, snow: 0, cloud: 0.58, cloudWarm: 0.16, exposure: 0.95, bloom: 0.22 },
  { name: '夏', sub: '枝繁叶茂', skyTop: 0x1878c8, horizon: 0xd8f1ff, fog: 0xcfe9f5, ground: 0x54a344, sun: 0xfff2d0, sunI: 2.8, hemi: 0.45, snow: 0, cloud: 0.32, cloudWarm: 0.10, exposure: 0.92, bloom: 0.20 },
  { name: '秋', sub: '叶子变红', skyTop: 0x6a8fd0, horizon: 0xffdda8, fog: 0xf6e3ca, ground: 0x9c8a4a, sun: 0xff9a52, sunI: 2.6, hemi: 0.42, snow: 0, cloud: 0.26, cloudWarm: 0.55, exposure: 1.00, bloom: 0.28 },
  { name: '冬', sub: '下雪了',   skyTop: 0x4f7fae, horizon: 0xcfe3f2, fog: 0xc7dcec, ground: 0xf2f8ff, sun: 0xbfd4ff, sunI: 1.8, hemi: 0.55, snow: 1, cloud: 0.82, cloudWarm: 0.02, exposure: 0.88, bloom: 0.16 },
];

const palette = {
  skyTop: new THREE.Color(), horizon: new THREE.Color(), fog: new THREE.Color(),
  ground: new THREE.Color(), sun: new THREE.Color(),
  sunI: 0, hemi: 0, snow: 0, cloud: 0, cloudWarm: 0, exposure: 1, bloom: 0.8,
};
const tmpA = new THREE.Color(), tmpB = new THREE.Color();
const palA = new THREE.Color(), palB = new THREE.Color();

function samplePalette(p, out) {
  const idx = ((p % 1) + 1) % 1 * SEASONS.length;
  const i0 = Math.floor(idx) % SEASONS.length;
  const i1 = (i0 + 1) % SEASONS.length;
  const f = smoothstep(0.55, 0.95, idx - Math.floor(idx));  // 季节内保持，季末快速过渡
  const a = SEASONS[i0], b = SEASONS[i1];
  out.skyTop.lerpColors(palA.setHex(a.skyTop), palB.setHex(b.skyTop), f);
  out.horizon.lerpColors(palA.setHex(a.horizon), palB.setHex(b.horizon), f);
  out.fog.lerpColors(palA.setHex(a.fog), palB.setHex(b.fog), f);
  out.ground.lerpColors(palA.setHex(a.ground), palB.setHex(b.ground), f);
  out.sun.lerpColors(palA.setHex(a.sun), palB.setHex(b.sun), f);
  out.sunI = a.sunI + (b.sunI - a.sunI) * f;
  out.hemi = a.hemi + (b.hemi - a.hemi) * f;
  out.snow = a.snow + (b.snow - a.snow) * f;
  out.cloud = a.cloud + (b.cloud - a.cloud) * f;
  out.cloudWarm = a.cloudWarm + (b.cloudWarm - a.cloudWarm) * f;
  out.exposure = a.exposure + (b.exposure - a.exposure) * f;
  out.bloom = a.bloom + (b.bloom - a.bloom) * f;
  return out;
}

/* ---------------- 基础三件套 ---------------- */
const canvasHost = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
canvasHost.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcfe9f5, 34, 165);

const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 600);

/* ---------------- 天空 ---------------- */
// 程序化大气天空：天顶渐变 + 太阳光晕 + 缓慢流动的云层（全部在 shader 里，无需贴图）
const skyUniforms = {
  topColor: { value: new THREE.Color(0x2f95d8) },
  horizonColor: { value: new THREE.Color(0xbfe7f8) },
  sunColor: { value: new THREE.Color(0xfff3dd) },
  sunDir: { value: new THREE.Vector3(0.4, 0.7, 0.5).normalize() },
  time: { value: 0 },
  cloudCover: { value: 0.45 },
  cloudWarm: { value: 0.2 },
};
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(320, 48, 30),
  new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      uniform float time;
      uniform float cloudCover;
      uniform float cloudWarm;
      varying vec3 vDir;

      float hash21(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }
      float vnoise(vec2 p) {
        vec2 i = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash21(i);
        float b = hash21(i + vec2(1.0, 0.0));
        float c = hash21(i + vec2(0.0, 1.0));
        float d = hash21(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * vnoise(p);
          p = p * 2.03 + vec2(17.1, 9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 dir = normalize(vDir);
        float h = clamp(dir.y, -0.08, 1.0);

        // 天顶 → 地平线：高光偏青，近地偏暖白
        vec3 col = mix(horizonColor, topColor, pow(smoothstep(-0.04, 0.62, h), 0.82));
        col = mix(col, horizonColor * 1.08, pow(1.0 - smoothstep(-0.02, 0.22, h), 3.0) * 0.42);

        // 太阳：核心 + 大范围暖晕
        float sd = max(dot(dir, sunDir), 0.0);
        col += sunColor * (pow(sd, 1200.0) * 2.2 + pow(sd, 28.0) * 0.18 + pow(sd, 5.0) * 0.05);

        // 云层：把方向投到高空平面上，叠两层不同速度的 fbm
        if (dir.y > 0.008) {
          vec2 uv = dir.xz / (dir.y + 0.16);
          float n1 = fbm(uv * 1.25 + vec2(time * 0.007, time * 0.0022));
          float n2 = fbm(uv * 3.10 + vec2(time * 0.012, -time * 0.004));
          float n = n1 * 0.68 + n2 * 0.32;
          float lo = 0.84 - cloudCover * 0.07;
          float cover = smoothstep(lo, lo + 0.07, n);
          cover *= smoothstep(0.30, 0.62, dir.y);
          // 云底：迎光面暖白、背光面灰蓝
          float lit = pow(max(dot(dir, sunDir), 0.0), 2.0);
          vec3 cloudCol = mix(vec3(0.52, 0.58, 0.66), vec3(1.06, 1.02, 0.95), lit * 0.9 + cloudWarm * 0.3);
          col = mix(col, cloudCol, cover * 0.20);
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
);
sky.frustumCulled = false;
scene.add(sky);

/* 太阳（一个柔光圆盘） */
function radialTexture(inner, outer) {
  const s = 128, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.45, outer);
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
  map: radialTexture('rgba(255,255,255,1)', 'rgba(255,236,180,0.55)'),
  blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true, fog: false,
  transparent: true, opacity: 0.9,
}));
sunSprite.scale.setScalar(9);
scene.add(sunSprite);

/* 太阳光芒：程序化生成放射状光束贴图，叠在太阳后面，逆光时更有“神光” */
function sunRaysTexture() {
  const s = 512, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);
  const cx = s / 2, cy = s / 2;
  for (let i = 0; i < 46; i++) {
    const a = Math.random() * Math.PI * 2;
    const w = 0.004 + Math.random() * 0.018;
    const len = s * (0.25 + Math.random() * 0.45);
    const g = ctx.createLinearGradient(cx, cy, cx + Math.cos(a) * len, cy + Math.sin(a) * len);
    g.addColorStop(0, `rgba(255,241,205,${0.05 + Math.random() * 0.09})`);
    g.addColorStop(1, 'rgba(255,241,205,0)');
    ctx.strokeStyle = g;
    ctx.lineWidth = s * w;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
    ctx.stroke();
  }
  const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 0.5);
  g2.addColorStop(0, 'rgba(255,245,215,0.55)');
  g2.addColorStop(0.18, 'rgba(255,228,170,0.16)');
  g2.addColorStop(1, 'rgba(255,228,170,0)');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const sunRays = new THREE.Sprite(new THREE.SpriteMaterial({
  map: sunRaysTexture(), blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true,
  fog: false, transparent: true, opacity: 0.55,
}));
sunRays.scale.setScalar(72);
scene.add(sunRays);

/* ---------------- 光照 ---------------- */
const hemi = new THREE.HemisphereLight(0xbfe7f8, 0x4a7a3a, 0.7);
scene.add(hemi);

// 极轻的环境光：把树冠暗部从死黑里提起来，保留逆光的层次
const ambient = new THREE.AmbientLight(0xbcd8e8, 0.38);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 2.4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -13; sun.shadow.camera.right = 13;
sun.shadow.camera.top = 15; sun.shadow.camera.bottom = -13;
sun.shadow.camera.near = 1; sun.shadow.camera.far = 90;
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.06;
scene.add(sun);
scene.add(sun.target);

const rim = new THREE.DirectionalLight(0xfff0dd, 0.85);
rim.position.set(-14, 9, -16);
scene.add(rim);

// 正面补光：逆光时把树从剪影里拉回来，保留暗部层次
const frontFill = new THREE.DirectionalLight(0xfff1dc, 2.35);
frontFill.position.set(8, 12, 20);
frontFill.target.position.set(0, 4, 0);
scene.add(frontFill);
scene.add(frontFill.target);

// 剖面的补光：从镜头这一侧正面打亮土壁，否则断面只吃掠射光，会糊成一块黑
const fillUnder = new THREE.DirectionalLight(0xffe1b8, 1.25);
fillUnder.position.set(2.5, -3, 18);
fillUnder.target.position.set(0, -2.2, 0);
scene.add(fillUnder);
scene.add(fillUnder.target);
sun.target.position.set(0, 3, 0);

/* ---------------- 地面 ---------------- */
function groundTexture() {
  const s = 1024, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, s, s);

  const blob = (x, y, r, color, a) => {
    ctx.fillStyle = `rgba(${color},${a})`;
    for (const ox of [0, -s, s]) for (const oy of [0, -s, s]) {
      ctx.beginPath(); ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2); ctx.fill();
    }
  };

  // 高频草叶：短小的方向性笔触，比圆点更像草
  for (let i = 0; i < 5200; i++) {
    const x = Math.random() * s, y = Math.random() * s;
    const len = 3 + Math.random() * 9;
    const ang = -Math.PI / 2 + (Math.random() - 0.5) * 1.1;
    const bright = Math.random() > 0.45;
    ctx.strokeStyle = bright
      ? `rgba(150,190,110,${0.05 + Math.random() * 0.11})`
      : `rgba(52,84,40,${0.05 + Math.random() * 0.13})`;
    ctx.lineWidth = 0.8 + Math.random() * 1.6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
    ctx.stroke();
  }
  // 再补一层极细的噪点，避免大面看起来像塑料
  for (let i = 0; i < 6000; i++) {
    ctx.fillStyle = `rgba(${Math.random() > 0.5 ? '96,132,70' : '40,64,32'},${0.04 + Math.random() * 0.08})`;
    ctx.fillRect(Math.random() * s, Math.random() * s, 1, 1);
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(14, 14);
  tex.anisotropy = 8;
  return tex;
}
const groundMat = new THREE.MeshStandardMaterial({
  color: 0x54a344, map: groundTexture(), roughness: 1, metalness: 0, vertexColors: true,
});

/* 低频噪声：给地面做大尺度的明暗起伏（不靠贴图，就不会平铺成地砖） */
function hash2(x, y) {
  const h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return h - Math.floor(h);
}
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}
function fbm(x, y) {
  return vnoise(x, y) * 0.55 + vnoise(x * 2.1, y * 2.1) * 0.28 + vnoise(x * 4.3, y * 4.3) * 0.17;
}

/* ---------------- 种子 / 树皮等小贴图 ---------------- */
function seedTexture() {
  const s = 256, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  // 底色：带一点红棕的种子皮
  const base = ctx.createLinearGradient(0, 0, 0, s);
  base.addColorStop(0, '#9c7248');
  base.addColorStop(0.45, '#7d5731');
  base.addColorStop(1, '#5d3f22');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, s, s);

  // 种皮：斑驳的深浅色块 + 几条细裂纹，避免球体 UV 拉出放射状木纹
  for (let i = 0; i < 180; i++) {
    const x = Math.random() * s, y = Math.random() * s;
    const rx = 2 + Math.random() * 13, ry = 1.5 + Math.random() * 8;
    const light = Math.random() > 0.55;
    ctx.fillStyle = light
      ? `rgba(190,150,104,${0.03 + Math.random() * 0.07})`
      : `rgba(52,32,16,${0.03 + Math.random() * 0.08})`;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, Math.random() * 3.14, 0, 6.283);
    ctx.fill();
  }
  for (let i = 0; i < 9; i++) {
    const x = Math.random() * s, y = Math.random() * s;
    ctx.strokeStyle = `rgba(40,24,12,${0.12 + Math.random() * 0.12})`;
    ctx.lineWidth = 0.8 + Math.random() * 1.1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 8, y + 6, x + 3, y + 22, x + 10, y + 34);
    ctx.stroke();
  }

  // 麻点：种子表面的小坑
  for (let i = 0; i < 260; i++) {
    const x = Math.random() * s, y = Math.random() * s, r = 0.7 + Math.random() * 2.6;
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(52,32,16,0.35)' : 'rgba(206,172,124,0.28)';
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * 0.8, Math.random() * 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // 高光带：让它在浅色天空前也有体积
  const spec = ctx.createRadialGradient(s * 0.36, s * 0.3, 0, s * 0.36, s * 0.3, s * 0.55);
  spec.addColorStop(0, 'rgba(255,236,198,0.34)');
  spec.addColorStop(1, 'rgba(255,236,198,0)');
  ctx.fillStyle = spec;
  ctx.fillRect(0, 0, s, s);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/* ---------------- 土壤剖面（把草地切开一半，露出地下） ---------------- */
const ISLAND_R = 25;
const SOIL_DEPTH = 9.0;

function soilTexture() {
  const w = 1024, h = 512, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const rnd = mulberry32(20240117);

  // 先铺满底色，避免层与层的接缝处露出未绘制的像素
  ctx.fillStyle = 'rgb(58,42,30)';
  ctx.fillRect(0, 0, w, h);

  // ---- 四个土层：表土（深黑褐）→ 心土（黄褐）→ 底土（灰黄、多石） ----
  const horizons = [
    { y0: 0.00, y1: 0.11, col: [30, 21, 14], amp: 10 },
    { y0: 0.11, y1: 0.44, col: [92, 66, 42], amp: 16 },
    { y0: 0.44, y1: 0.72, col: [112, 88, 56], amp: 14 },
    { y0: 0.72, y1: 1.00, col: [104, 86, 62], amp: 12 },
  ];
  for (const hz of horizons) {
    ctx.fillStyle = `rgb(${hz.col[0]},${hz.col[1]},${hz.col[2]})`;
    ctx.beginPath();
    const top = hz.y0 * h, bot = hz.y1 * h;
    ctx.moveTo(0, top);
    for (let x = 0; x <= w; x += 32) {
      ctx.lineTo(x, top + Math.sin(x * 0.004 + rnd() * 0.2) * hz.amp * 0.5 + Math.sin(x * 0.013) * hz.amp * 0.3);
    }
    for (let x = w; x >= 0; x -= 32) {
      ctx.lineTo(x, bot + Math.sin(x * 0.0035 + 2.1) * hz.amp * 0.6 + Math.sin(x * 0.011 + 1.1) * hz.amp * 0.35);
    }
    ctx.closePath();
    ctx.fill();
  }

  // 层界压一道深色线，让"一层一层"读得出来
  for (const yb of [0.11, 0.44, 0.72]) {
    ctx.strokeStyle = 'rgba(12,7,4,0.6)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 24) {
      const yy = yb * h + Math.sin(x * 0.006 + yb * 9) * 7 + Math.sin(x * 0.017) * 3;
      if (x === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
    }
    ctx.stroke();
  }

  // ---- 土块结构：不规则的团粒，靠明暗两层叠加做出体积 ----
  for (let i = 0; i < 9600; i++) {
    const x = rnd() * w, y = rnd() * h;
    const rr = 1.1 + rnd() * 3.9;
    const light = rnd() > 0.5;
    ctx.fillStyle = light
      ? `rgba(150,124,90,${0.03 + rnd() * 0.075})`
      : `rgba(26,16,9,${0.04 + rnd() * 0.10})`;
    ctx.beginPath();
    ctx.ellipse(x, y, rr, rr * (0.55 + rnd() * 0.7), rnd() * 3.14, 0, 6.283);
    ctx.fill();
    // 每颗团粒的下缘压一道暗边，读起来才有厚度
    ctx.fillStyle = 'rgba(18,11,6,0.07)';
    ctx.beginPath();
    ctx.ellipse(x + rr * 0.15, y + rr * 0.45, rr * 0.72, rr * 0.28, 0, 0, 6.283);
    ctx.fill();
  }

  // ---- 竖向的干裂缝（下面的心土更明显） ----
  for (let i = 0; i < 46; i++) {
    const x = rnd() * w;
    const y0 = h * (0.14 + rnd() * 0.75);
    const len = h * (0.03 + rnd() * 0.16);
    ctx.strokeStyle = `rgba(20,13,7,${0.12 + rnd() * 0.2})`;
    ctx.lineWidth = 0.8 + rnd() * 1.8;
    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.bezierCurveTo(x + (rnd() - 0.5) * 14, y0 + len * 0.4, x + (rnd() - 0.5) * 18, y0 + len * 0.7, x + (rnd() - 0.5) * 22, y0 + len);
    ctx.stroke();
  }

  // ---- 有机质斑块 / 铁锈斑 ----
  for (let i = 0; i < 70; i++) {
    const x = rnd() * w, y = rnd() * h;
    const rr = 30 + rnd() * 110;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
    const warm = rnd() > 0.5;
    g.addColorStop(0, warm ? 'rgba(126,84,44,0.13)' : 'rgba(36,24,14,0.13)');
    g.addColorStop(1, 'rgba(40,28,16,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, rr, 0, 6.283); ctx.fill();
  }

  // ---- 石子：本体 + 受光面 + 落影 ----
  for (let i = 0; i < 620; i++) {
    const x = rnd() * w, y = h * 0.1 + rnd() * h * 0.9;
    const rr = 1.0 + Math.pow(rnd(), 2.6) * 2.3;
    const tone = 0.55 + rnd() * 0.4;
    ctx.fillStyle = `rgba(${(128 * tone) | 0},${(116 * tone) | 0},${(98 * tone) | 0},0.72)`;
    ctx.beginPath();
    ctx.ellipse(x, y, rr, rr * (0.62 + rnd() * 0.4), rnd() * 3.14, 0, 6.283);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,248,228,0.16)';
    ctx.beginPath();
    ctx.ellipse(x - rr * 0.3, y - rr * 0.34, rr * 0.5, rr * 0.3, 0, 0, 6.283);
    ctx.fill();
    ctx.fillStyle = 'rgba(16,10,5,0.20)';
    ctx.beginPath();
    ctx.ellipse(x + rr * 0.18, y + rr * 0.5, rr * 0.8, rr * 0.28, 0, 0, 6.283);
    ctx.fill();
  }

  // ---- 细砂颗粒 ----
  for (let i = 0; i < 26000; i++) {
    const x = rnd() * w, y = rnd() * h;
    ctx.fillStyle = rnd() > 0.5
      ? `rgba(20,13,7,${0.06 + rnd() * 0.12})`
      : `rgba(178,150,110,${0.03 + rnd() * 0.07})`;
    ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
  }

  // ---- 表土最上面一层：更黑更细的腐殖质 ----
  const top = ctx.createLinearGradient(0, 0, 0, h * 0.06);
  top.addColorStop(0, 'rgba(16,10,5,0.85)');
  top.addColorStop(1, 'rgba(26,17,9,0)');
  ctx.fillStyle = top;
  ctx.fillRect(0, 0, w, h * 0.06);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.flipY = false;      // 让画布的第一行对应断面的最上面（表土）
  tex.repeat.set(4.0, 1);
  tex.anisotropy = 8;
  return tex;
}

const SOIL_TEX = soilTexture();
const soilFaceMat = new THREE.MeshStandardMaterial({
  map: SOIL_TEX, bumpMap: SOIL_TEX, bumpScale: 0.12, roughness: 1, metalness: 0,
  color: 0xffffff, emissive: 0x2a1a0e, emissiveIntensity: 0.25,
});
const soilWallMat = new THREE.MeshStandardMaterial({ color: 0x3d2a1c, roughness: 1, metalness: 0, flatShading: true });

// 地表：半圆草皮（z <= 0）。半径远大于剖面岛，让地平线消失在雾里；
// 大尺度的深浅用顶点色做，不用贴图，远处不会有平铺网格。
const GROUND_R = 90;
function buildGroundGeometry(R, rings, seg) {
  const pos = [], uv = [], col = [], idx = [];
  const c = new THREE.Color();
  for (let i = 0; i <= rings; i++) {
    const rr = R * Math.pow(i / rings, 1.9);
    for (let j = 0; j <= seg; j++) {
      const a = (j / seg) * Math.PI;
      const x = Math.cos(a) * rr;
      const z = -Math.sin(a) * rr;
      pos.push(x, 0, z);
      uv.push(x / (2 * R) + 0.5, z / (2 * R) + 0.5);
      // 两层噪声：大片的晒斑/背阴 + 小片的草色不均
      const n1 = fbm(x * 0.036 + 11.3, z * 0.036 + 4.7);
      const n2 = fbm(x * 0.16, z * 0.16);
      const v = 0.80 + 0.34 * n1 + 0.10 * (n2 - 0.5);
      c.setRGB(v * 1.02, v, v * 0.90);
      col.push(c.r, c.g, c.b);
    }
  }
  const w = seg + 1;
  for (let i = 0; i < rings; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * w + j, b = a + 1, d = a + w, e = d + 1;
      idx.push(a, d, b, b, d, e);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
const ground = new THREE.Mesh(buildGroundGeometry(GROUND_R, 40, 72), groundMat);
ground.receiveShadow = true;
scene.add(ground);

// 树根的接触阴影：让树"踩"在地上，而不是浮在表面
(() => {
  const size = 256, c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(24,32,18,0.55)');
  g.addColorStop(0.45, 'rgba(24,32,18,0.28)');
  g.addColorStop(1, 'rgba(24,32,18,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const ao = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 7),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.9 })
  );
  ao.rotation.x = -Math.PI / 2;
  ao.position.y = 0.02;
  scene.add(ao);
})();

// 土壤外壁（半圆柱）
const soilWall = new THREE.Mesh(
  new THREE.CylinderGeometry(ISLAND_R, ISLAND_R, SOIL_DEPTH, 64, 1, true, Math.PI / 2, Math.PI),
  soilWallMat
);
soilWall.position.y = -SOIL_DEPTH / 2;
soilWall.receiveShadow = true;
scene.add(soilWall);

// 剖切面（正对镜头的土壤断面）：一整面到底，不再分成「表土 + 深土」两块拼
const FACE_H = SOIL_DEPTH + 2.5;
const soilFace = new THREE.Mesh(new THREE.PlaneGeometry(ISLAND_R * 2.8, FACE_H), soilFaceMat);
soilFace.position.set(0, -FACE_H / 2, 0);
soilFace.receiveShadow = false;   // 断面是垂直面，树冠投影落在上面会变成一块脏斑；用内置 AO 已足够
scene.add(soilFace);

// 断面里半埋的小石子：只露一小截，近景时有真实的高光和投影（合批成 1 个 draw call）
(() => {
  const rand = mulberry32(4242);
  const COUNT = 70;
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.88, metalness: 0, flatShading: true });
  const mesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), mat, COUNT);
  mesh.receiveShadow = false;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const r = 0.035 + Math.pow(rand(), 2) * 0.075;
    p.set(randRange(rand, -11, 11), randRange(rand, -6.5, -0.25), randRange(rand, -0.035, 0.01));
    q.setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3));
    s.set(r * (1.1 + rand() * 0.5), r * (0.8 + rand() * 0.4), r * 0.42);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    col.setHex(rand() > 0.45 ? 0x9c8f7c : 0x6d6153);
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  scene.add(mesh);
})();

/* 断面里的 3D 土团粒：近景有真正的颗粒起伏，而不是一张平贴图 */
(() => {
  const rand = mulberry32(9091);
  const COUNT = 420;
  const geo = new THREE.IcosahedronGeometry(1, 0);
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.95, metalness: 0, flatShading: true, vertexColors: false });
  const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    p.set(randRange(rand, -13, 13), randRange(rand, -7.4, -0.25), randRange(rand, 0.005, 0.055));
    q.setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3));
    const r = 0.025 + Math.pow(rand(), 2.2) * 0.10;
    s.set(r * randRange(rand, 0.9, 1.6), r * randRange(rand, 0.4, 0.8), r * 0.45);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    const v = 0.45 + rand() * 0.5;
    col.setRGB(0.42 * v, 0.32 * v, 0.21 * v);
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  scene.add(mesh);
})();

// 草皮层的剖面：一条不规则草土边缘，把草地和土层自然接起来（打破尺子画出来的直线）
const TURF_W = ISLAND_R * 2.8;
const turfGeo = (() => {
  const seg = 240;
  const pos = [], col = [], idx = [];
  const c1 = new THREE.Color(0x46602a), c2 = new THREE.Color(0x2a1c12);
  for (let i = 0; i <= seg; i++) {
    const x = -TURF_W / 2 + (i / seg) * TURF_W;
    const n = fbm(x * 0.33 + 7.1, 3.7) - 0.5;
    const top = -0.015 + n * 0.11;
    const bot = -0.10 + n * 0.03;
    pos.push(x, top, 0.05, x, bot, 0.05);
    col.push(c1.r, c1.g, c1.b, c2.r, c2.g, c2.b);
    if (i < seg) {
      const a = i * 2;
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
})();
const turfMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, metalness: 0 });
const turf = new THREE.Mesh(turfGeo, turfMat);
scene.add(turf);

/* 断面的手工 AO：草皮下方压出一圈暗影，左右两端压暗，制造"挖开的坑"的纵深 */
(() => {
  const w = 256, h = 256, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);

  // 左右两端压暗（越靠画面外侧越黑，像被土层挡住光）
  const side = ctx.createLinearGradient(0, 0, w, 0);
  side.addColorStop(0.0, 'rgba(8,5,3,0.38)');
  side.addColorStop(0.14, 'rgba(8,5,3,0.17)');
  side.addColorStop(0.34, 'rgba(8,5,3,0.03)');
  side.addColorStop(0.66, 'rgba(8,5,3,0.03)');
  side.addColorStop(0.86, 'rgba(8,5,3,0.17)');
  side.addColorStop(1.0, 'rgba(8,5,3,0.38)');
  ctx.fillStyle = side;
  ctx.fillRect(0, 0, w, h);

  // 顶部（紧贴草皮）一条深色遮挡带
  const topBand = ctx.createLinearGradient(0, 0, 0, h * 0.22);
  topBand.addColorStop(0, 'rgba(6,4,2,0.22)');
  topBand.addColorStop(1, 'rgba(6,4,2,0)');
  ctx.fillStyle = topBand;
  ctx.fillRect(0, 0, w, h * 0.22);

  // 越深越暗，强化"越往下越看不见"的深度感
  const deep = ctx.createLinearGradient(0, h * 0.35, 0, h);
  deep.addColorStop(0, 'rgba(6,4,2,0)');
  deep.addColorStop(1, 'rgba(4,3,2,0.12)');
  ctx.fillStyle = deep;
  ctx.fillRect(0, h * 0.35, w, h * 0.65);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const shade = new THREE.Mesh(
    new THREE.PlaneGeometry(ISLAND_R * 2.8, SOIL_DEPTH + 5),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false })
  );
  shade.position.set(0, -(SOIL_DEPTH + 5) / 2 - 0.02, 0.028);
  scene.add(shade);
})();

/* 远景山脊：三层剪影叠出空气透视，比一排圆球更像真实地貌 */
const ridgeGroup = new THREE.Group();
const ridgeMats = [];
function makeRidge(radius, baseY, height, seed, color, opacity) {
  const seg = 192;
  const rand = mulberry32(seed);
  const off = rand() * 100;
  const pos = [], idx = [];
  for (let j = 0; j <= seg; j++) {
    const a = (j / seg) * Math.PI * 2;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    const n1 = fbm(Math.cos(a) * 2.4 + off, Math.sin(a) * 2.4 + off * 0.7);
    const n2 = fbm(Math.cos(a) * 6.8 + off * 2.0, Math.sin(a) * 6.8);
    const h = baseY + height * (0.22 + 0.78 * Math.pow(n1 * 0.72 + n2 * 0.28, 1.6));
    pos.push(x, -9, z, x, h, z);
  }
  for (let j = 0; j < seg; j++) {
    const a = j * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  const mat = new THREE.MeshBasicMaterial({
    color, fog: false, transparent: opacity < 1, opacity, depthWrite: true, side: THREE.DoubleSide,
  });
  ridgeMats.push(mat);
  const m = new THREE.Mesh(g, mat);
  m.frustumCulled = false;
  ridgeGroup.add(m);
}
makeRidge(138, 0.2, 17, 1919, 0xcfe0e8, 1.0);   // 远山：几乎融进雾里
makeRidge(96, 0.1, 8.5, 2027, 0xaac7ba, 1.0);   // 中景丘陵
makeRidge(61, -0.2, 3.4, 3121, 0x7fa06d, 1.0);  // 近处草坡
scene.add(ridgeGroup);

/* 晨雾：三层贴地雾带，给地平线和树根之间留出空气 */
function mistTexture() {
  const w = 512, h = 128, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * w, y = h * (0.35 + Math.random() * 0.45);
    const r = 20 + Math.random() * 70;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(255,248,235,${0.035 + Math.random() * 0.05})`);
    g.addColorStop(1, 'rgba(255,248,235,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const MIST_TEX = mistTexture();
const mistGroup = new THREE.Group();
const mistMats = [];
for (let i = 0; i < 3; i++) {
  const mat = new THREE.MeshBasicMaterial({
    map: MIST_TEX, transparent: true, opacity: [0.16, 0.10, 0.06][i],
    depthWrite: false, fog: false, blending: THREE.NormalBlending, side: THREE.DoubleSide,
  });
  mistMats.push(mat);
  const m = new THREE.Mesh(new THREE.PlaneGeometry([110, 130, 150][i], [5.5, 7, 9][i]), mat);
  m.position.set(0, [0.8, 1.8, 3.2][i], [-18, -30, -46][i]);
  m.renderOrder = 1;
  mistGroup.add(m);
}
scene.add(mistGroup);

/* 逆光里的浮尘：让空气有体积感 */
const DUST_COUNT = 280;
const dustGeo = new THREE.BufferGeometry();
const dustPos = new Float32Array(DUST_COUNT * 3);
const dustPhase = new Float32Array(DUST_COUNT);
for (let i = 0; i < DUST_COUNT; i++) {
  dustPos[i * 3] = (Math.random() - 0.5) * 22;
  dustPos[i * 3 + 1] = 0.3 + Math.random() * 6.5;
  dustPos[i * 3 + 2] = -10 + Math.random() * 12;
  dustPhase[i] = Math.random() * Math.PI * 2;
}
dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
const dustMat = new THREE.PointsMaterial({
  size: 0.042, map: circleTexture(), transparent: true, opacity: 0.0,
  depthWrite: false, sizeAttenuation: true, color: 0xffe6b0, blending: THREE.AdditiveBlending, fog: false,
});
const dust = new THREE.Points(dustGeo, dustMat);
dust.frustumCulled = false;
scene.add(dust);

// 断面里半埋的石头：只露出薄薄一层，才不像「贴」在断面上
(() => {
  const rockMat = new THREE.MeshStandardMaterial({ color: 0x8a8073, roughness: 0.9, flatShading: true });
  const rand = mulberry32(77);
  for (let i = 0; i < 8; i++) {
    const r = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09 + rand() * 0.12, 0), rockMat);
    r.position.set(randRange(rand, -9, 9), randRange(rand, -2.9, -0.7), -0.02);
    r.rotation.set(rand() * 3, rand() * 3, rand() * 3);
    r.scale.set(1.1, 0.55 + rand() * 0.25, 0.24);
    scene.add(r);
  }
})();


/* 草丛：一张画好的草叶贴图 + 交叉面片，比三角片自然得多 */
function grassTuftTexture() {
  const s = 256, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);
  ctx.lineCap = 'round';
  // 先铺一层贴地的矮草：把轮廓从"圆球"压成"一片"
  for (let i = 0; i < 20; i++) {
    const baseX = s * (0.03 + Math.random() * 0.94);
    const h = s * (0.08 + Math.random() * 0.16);
    const lean = (Math.random() - 0.5) * s * 0.28;
    const tone = 0.72 + Math.random() * 0.22;
    ctx.strokeStyle = `rgba(${76 * tone | 0},${118 * tone | 0},${48 * tone | 0},0.95)`;
    ctx.lineWidth = 1.4 + Math.random() * 1.8;
    ctx.beginPath();
    ctx.moveTo(baseX, s);
    ctx.quadraticCurveTo(baseX + lean * 0.4, s - h * 0.6, baseX + lean, s - h);
    ctx.stroke();
  }
  // 长叶：从深绿根部过渡到带阳光的黄绿尖端，横向铺满整张画布
  for (let i = 0; i < 34; i++) {
    const baseX = s * (0.04 + Math.random() * 0.92);
    const h = s * (0.26 + Math.random() * 0.52);
    const lean = (Math.random() - 0.5) * s * 0.55;
    const w = 1.2 + Math.random() * 2.0;
    const g = ctx.createLinearGradient(0, s, 0, s - h);
    const tone = 0.82 + Math.random() * 0.26;
    g.addColorStop(0, `rgba(${58 * tone | 0},${92 * tone | 0},${36 * tone | 0},1)`);
    g.addColorStop(0.5, `rgba(${98 * tone | 0},${148 * tone | 0},${64 * tone | 0},1)`);
    g.addColorStop(0.86, `rgba(${146 * tone | 0},${190 * tone | 0},${98 * tone | 0},1)`);
    g.addColorStop(1, `rgba(${180 * tone | 0},${212 * tone | 0},${128 * tone | 0},0.9)`);
    ctx.strokeStyle = g;
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(baseX, s);
    ctx.quadraticCurveTo(baseX + lean * 0.35, s - h * 0.6, baseX + lean, s - h);
    ctx.stroke();
  }
  // 少量抽穗的草：给近景一点品种变化
  for (let i = 0; i < 7; i++) {
    const baseX = s * (0.08 + Math.random() * 0.84);
    const h = s * (0.5 + Math.random() * 0.34);
    const lean = (Math.random() - 0.5) * s * 0.3;
    ctx.strokeStyle = 'rgba(126,160,84,0.9)';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(baseX, s);
    ctx.quadraticCurveTo(baseX + lean * 0.3, s - h * 0.68, baseX + lean, s - h);
    ctx.stroke();
    ctx.fillStyle = 'rgba(168,190,108,0.9)';
    for (let k = 0; k < 5; k++) {
      ctx.beginPath();
      ctx.ellipse(baseX + lean + (k - 2) * 2.4, s - h + 3 + Math.abs(k - 2) * 1.3, 1.3, 3.1, 0.5, 0, 6.283);
      ctx.fill();
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

function crossQuadGeometry() {
  const geo = new THREE.BufferGeometry();
  const pos = [], uv = [], idx = [];
  const quads = [[-0.5, 0, 0.5, 0], [0, -0.5, 0, 0.5]];
  let v = 0;
  for (const [x1, z1, x2, z2] of quads) {
    pos.push(x1, 0, z1, x2, 0, z2, x2, 1, z2, x1, 1, z1);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1);
    idx.push(v, v + 1, v + 2, v, v + 2, v + 3);
    v += 4;
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

const GRASS_TEX = grassTuftTexture();
const CROSS_GEO = crossQuadGeometry();
const grassTime = { value: 0 };

function windMaterial(mat, strength = 1) {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uGrassTime = grassTime;
    shader.vertexShader = 'uniform float uGrassTime;\n' + shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       float wx = instanceMatrix[3][0];
       float wz = instanceMatrix[3][2];
       float gust = sin(uGrassTime * 1.35 + wx * 0.28 + wz * 0.22) * 0.5 + sin(uGrassTime * 2.7 + wx * 0.6) * 0.22;
       transformed.x += gust * ${strength.toFixed(2)} * smoothstep(0.0, 1.0, position.y);
       transformed.z += gust * ${(strength * 0.45).toFixed(2)} * smoothstep(0.0, 1.0, position.y);`
    );
  };
  return mat;
}

function buildGrass(seed) {
  const rand = mulberry32(seed);
  const COUNT = 16000;
  const mat = windMaterial(new THREE.MeshStandardMaterial({
    map: GRASS_TEX, alphaTest: 0.28, side: THREE.DoubleSide, roughness: 1, metalness: 0,
    transparent: true, opacity: 1,
  }), 0.085);
  const mesh = new THREE.InstancedMesh(CROSS_GEO, mat, COUNT);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const ang = rand() * Math.PI;             // 0..π → 只铺 z<=0 的半圆
    const r = 0.3 + Math.pow(rand(), 0.92) * 34;
    // 越远越稀：用拒绝采样做出长距离渐隐，避免出现一圈"草皮圆边"
    if (rand() < smoothstep(7.0, 34, r) * 0.78) { i--; continue; }
    p.set(Math.cos(ang) * r, 0, -Math.sin(ang) * r);
    q.setFromAxisAngle(UP, rand() * Math.PI * 2);
    const far = Math.min(1, Math.max(0, (r - 2) / 34));
    const shrink = 1 - 0.20 * far;
    const nearBoost = 1 + 0.38 * (1 - smoothstep(2.5, 9, r));   // 近景草稍高，形成前景层次
    // 单丛压矮压窄、x/z 不成比例：同样的贴图不再拼出整齐的"点阵"
    const k = (0.16 + rand() * 0.22) * shrink * nearBoost;   // 高度 16–38cm（近景最高 ~70cm）
    const w = (0.11 + rand() * 0.11) * shrink;    // 宽度 11–22cm
    s.set(w * (0.8 + rand() * 0.5), k, w * (0.8 + rand() * 0.5));
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    const tint = (0.84 + rand() * 0.30) * (1 - 0.04 * far);
    col.setRGB(tint * (0.96 + rand() * 0.06), tint, tint * (0.86 + rand() * 0.10));
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}

/* 野花：春天开满草地的白/黄色小野花 */
function flowerTexture() {
  const s = 128, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);
  const cx = s / 2, cy = s * 0.42;
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    ctx.fillStyle = 'rgba(255,252,244,0.98)';
    ctx.beginPath();
    ctx.ellipse(cx + Math.cos(a) * s * 0.14, cy + Math.sin(a) * s * 0.14, s * 0.11, s * 0.075, a, 0, 6.283);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(243,190,74,1)';
  ctx.beginPath();
  ctx.arc(cx, cy, s * 0.052, 0, 6.283);
  ctx.fill();
  ctx.strokeStyle = 'rgba(84,120,52,0.95)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy + s * 0.06);
  ctx.quadraticCurveTo(cx + 4, s * 0.75, cx - 3, s * 0.98);
  ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
const FLOWER_TEX = flowerTexture();

function buildFlowers(seed) {
  const rand = mulberry32(seed);
  const COUNT = 1400;
  const mat = new THREE.MeshStandardMaterial({
    map: FLOWER_TEX, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 0.9, metalness: 0,
    transparent: true,
  });
  const mesh = new THREE.InstancedMesh(CROSS_GEO, mat, COUNT);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const ang = rand() * Math.PI;
    const r = 0.8 + Math.pow(rand(), 0.85) * 12;
    p.set(Math.cos(ang) * r, 0.01, -Math.sin(ang) * r);
    q.setFromAxisAngle(UP, rand() * Math.PI * 2);
    const k = 0.075 + rand() * 0.11;
    s.set(k, k, k);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    const pick = rand();
    if (pick < 0.55) col.setHex(0xfffdf5);
    else if (pick < 0.82) col.setHex(0xffe9a8);
    else if (pick < 0.95) col.setHex(0xffd6e4);
    else col.setHex(0xd6e8ff);
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}

/* 秋天铺在草地上的落叶毯 */
function buildGroundLeaves(seed) {
  const rand = mulberry32(seed);
  const COUNT = 1600;
  const mat = new THREE.MeshStandardMaterial({
    map: LEAF_TEX, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.95, metalness: 0,
    transparent: true, opacity: 0,
  });
  const mesh = new THREE.InstancedMesh(LEAF_GEO, mat, COUNT);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const e = new THREE.Euler();
  const col = new THREE.Color();
  const palette = [0xd9542c, 0xe89a2a, 0xc9302c, 0xb47a24, 0x9e6b2c];
  const info = [];
  for (let i = 0; i < COUNT; i++) {
    const ang = rand() * Math.PI;
    const r = 0.4 + Math.pow(rand(), 0.75) * 10.5;
    p.set(Math.cos(ang) * r, 0.025 + rand() * 0.025, -Math.sin(ang) * r);
    q.setFromEuler(e.set(-Math.PI / 2 + (rand() - 0.5) * 0.35, rand() * Math.PI * 2, (rand() - 0.5) * 0.25));
    const k = 0.16 + rand() * 0.16;
    s.set(k, k, k);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    col.setHex(palette[Math.floor(rand() * palette.length)]);
    mesh.setColorAt(i, col);
    info.push({ pos: p.clone(), quat: q.clone(), size: k, color: col.clone() });
  }
  mesh.userData.leafInfo = info;
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}
function leafTexture() {
  const s = 256, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);

  const g = ctx.createLinearGradient(0, s * 0.06, 0, s * 0.94);
  g.addColorStop(0, '#e8f3dd');
  g.addColorStop(0.45, '#ffffff');
  g.addColorStop(1, '#dfe9d2');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.moveTo(s / 2, s * 0.04);
  ctx.bezierCurveTo(s * 0.95, s * 0.3, s * 0.9, s * 0.8, s / 2, s * 0.96);
  ctx.bezierCurveTo(s * 0.1, s * 0.8, s * 0.05, s * 0.3, s / 2, s * 0.04);
  ctx.closePath();
  ctx.fill();

  // 中脉与侧脉
  ctx.strokeStyle = 'rgba(112,140,96,0.45)';
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.moveTo(s / 2, s * 0.09);
  ctx.lineTo(s / 2, s * 0.92);
  ctx.stroke();
  ctx.lineWidth = 1.1;
  ctx.strokeStyle = 'rgba(112,140,96,0.3)';
  for (let i = 1; i <= 6; i++) {
    const y = s * (0.1 + 0.8 * (i / 7));
    const spread = 0.34 * Math.sin(Math.PI * (i / 7)) * s;
    ctx.beginPath();
    ctx.moveTo(s / 2, y);
    ctx.quadraticCurveTo(s / 2 + spread * 0.6, y + s * 0.03, s / 2 + spread, y + s * 0.09);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(s / 2, y);
    ctx.quadraticCurveTo(s / 2 - spread * 0.6, y + s * 0.03, s / 2 - spread, y + s * 0.09);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// 微微打卷的叶子，比纯平面有立体感（2×4 段足够，省一半三角形）
function leafGeometry() {
  const geo = new THREE.PlaneGeometry(1, 1.35, 2, 4);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i);
    const v = (y + 0.675) / 1.35;              // 0 基部 → 1 叶尖
    const cup = 0.13 * (x * x * 4 - 0.4);      // 横向微凹
    const droop = -0.10 * v * v;               // 叶尖下垂
    pos.setZ(i, cup + droop);
  }
  geo.computeVertexNormals();
  return geo;
}

const LEAF_TEX = leafTexture();
const LEAF_GEO = leafGeometry();

/* ---------------- 树 ---------------- */
const treeRoot = new THREE.Group();
scene.add(treeRoot);

const leafMat = new THREE.MeshStandardMaterial({
  map: LEAF_TEX, alphaTest: 0.38, side: THREE.DoubleSide,
  roughness: 0.86, metalness: 0,
});

// 树皮：竖向纹理，避免圆柱看起来像塑料
function barkTexture() {
  const w = 256, h = 256, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 220; i++) {
    const x = Math.random() * w;
    const len = 30 + Math.random() * 160;
    const y = Math.random() * h;
    const dark = Math.random() > 0.45;
    ctx.strokeStyle = dark
      ? `rgba(64,44,28,${0.05 + Math.random() * 0.11})`
      : `rgba(255,250,240,${0.08 + Math.random() * 0.16})`;
    ctx.lineWidth = 0.8 + Math.random() * 2.6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.quadraticCurveTo(x + (Math.random() - 0.5) * 8, y + len * 0.5, x + (Math.random() - 0.5) * 12, y + len);
    ctx.stroke();
  }
  for (let i = 0; i < 500; i++) {
    ctx.fillStyle = `rgba(40,26,14,${0.05 + Math.random() * 0.14})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 3);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1, 3);
  tex.anisotropy = 4;
  return tex;
}
const BARK_TEX = barkTexture();

const barkMat = new THREE.MeshStandardMaterial({
  color: 0x5a4632, map: BARK_TEX, bumpMap: BARK_TEX, bumpScale: 0.09,
  roughness: 0.93, metalness: 0,
});

let tree = null;   // 当前这棵树的所有数据

function buildTree(seed) {
  const rand = mulberry32(seed);
  const group = new THREE.Group();
  const branches = [];
  const leafSites = [];
  const geos = [];

  const MAX_DEPTH = 4;
  const DUR = [0.40, 0.18, 0.14, 0.10, 0.06];

  // 沿折线扫出一个带锥度的圆管（可弯曲），索引按长度顺序排列，方便做生长动画
  function sweepGeometry(points, radii, radial) {
    const n = points.length;
    const pos = [], nrm = [], uv = [], idx = [];
    const tangent = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const binormal = new THREE.Vector3();
    const t0 = new THREE.Vector3().subVectors(points[1], points[0]).normalize();
    normal.set(0, 1, 0);
    if (Math.abs(normal.dot(t0)) > 0.9) normal.set(1, 0, 0);
    normal.addScaledVector(t0, -normal.dot(t0)).normalize();

    for (let i = 0; i < n; i++) {
      const pPrev = points[Math.max(0, i - 1)];
      const pNext = points[Math.min(n - 1, i + 1)];
      tangent.subVectors(pNext, pPrev).normalize();
      normal.addScaledVector(tangent, -normal.dot(tangent)).normalize();
      binormal.crossVectors(tangent, normal).normalize();
      for (let j = 0; j < radial; j++) {
        const a = (j / radial) * Math.PI * 2;
        const ca = Math.cos(a), sa = Math.sin(a);
        const nx = normal.x * ca + binormal.x * sa;
        const ny = normal.y * ca + binormal.y * sa;
        const nz = normal.z * ca + binormal.z * sa;
        pos.push(points[i].x + nx * radii[i], points[i].y + ny * radii[i], points[i].z + nz * radii[i]);
        nrm.push(nx, ny, nz);
        uv.push(j / radial, (i / (n - 1)) * 2);
      }
    }
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < radial; j++) {
        const a = i * radial + j;
        const b = i * radial + ((j + 1) % radial);
        const c = (i + 1) * radial + j;
        const d = (i + 1) * radial + ((j + 1) % radial);
        idx.push(a, b, c, b, d, c);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeBoundingSphere();
    return g;
  }

  function makeBranch(start, dir, len, r0, depth, g0, g1) {
    const rings = depth === 0 ? 13 : depth === 1 ? 10 : 6;
    const radial = depth === 0 ? 16 : depth === 1 ? 10 : 7;
    const pts = [start.clone()];
    const radii = [r0];
    const d = dir.clone();

    // 每根枝都朝一个固定轴轻微弯曲，比笔直的棍子自然
    const bendAxis = new THREE.Vector3().crossVectors(dir, UP);
    if (bendAxis.lengthSq() < 1e-6) bendAxis.set(1, 0, 0);
    bendAxis.normalize().applyAxisAngle(dir, rand() * Math.PI * 2);
    const bend = randRange(rand, 0.12, 0.4) * (depth === 0 ? 0.55 : 1);
    const step = len / (rings - 1);

    for (let i = 1; i < rings; i++) {
      d.applyAxisAngle(bendAxis, bend / (rings - 1) + randRange(rand, -0.025, 0.025)).normalize();
      pts.push(pts[i - 1].clone().addScaledVector(d, step));
      // 锥度：缓慢变细，末梢微收；真正的收尖交给末端针尖环
      const k = i / (rings - 1);
      radii.push(r0 * (1 - 0.30 * k) * (1 - 0.30 * Math.pow(k, 4)));
    }

    // 末端再补一个收成针尖的环：即便长到头，枝梢也是个尖，而不是敞口的管口。
    // 半径只收到 85%，好让「顶芽」（下一段同轴的延伸枝）能用这个半径接上，不留台阶
    pts.push(pts[rings - 1].clone().addScaledVector(d, step * 0.35));
    radii.push(radii[rings - 1] * 0.85);
    const ringCount = pts.length;

    const geo = sweepGeometry(pts, radii, radial);
    geos.push(geo);
    const mesh = new THREE.Mesh(geo, barkMat);
    mesh.name = 'branch-d' + depth + '#' + branches.length;
    mesh.castShadow = true;
    mesh.receiveShadow = false;   // 细长管子接收阴影容易出现自阴影噪点，只投不接
    mesh.frustumCulled = false;
    group.add(mesh);

    branches.push({
      mesh, start: start.clone(), len, depth, g0, g1,
      rings: ringCount, radial, pts, radii,
      basePos: Float32Array.from(geo.attributes.position.array),
      lastK: -1,
    });
    return { end: pts[ringCount - 1].clone(), endDir: d.clone(), pts, radii, endR: radii[ringCount - 1] };
  }

  function childDir(baseDir, tilt, azim) {
    const axis = new THREE.Vector3().crossVectors(baseDir, UP);
    if (axis.lengthSq() < 1e-5) axis.set(1, 0, 0);
    axis.normalize();
    const perp = new THREE.Vector3().crossVectors(baseDir, axis).normalize();
    const d = baseDir.clone().multiplyScalar(Math.cos(tilt));
    d.addScaledVector(axis, Math.cos(azim) * Math.sin(tilt));
    d.addScaledVector(perp, Math.sin(azim) * Math.sin(tilt));
    return d.normalize();
  }

  // 在折线上取一点（t: 0 基部 → 1 枝头）
  function pointAt(pts, t) {
    const seg = t * (pts.length - 1);
    const i0 = Math.min(pts.length - 2, Math.max(0, Math.floor(seg)));
    const f = seg - i0;
    const p = pts[i0].clone().lerp(pts[i0 + 1], f);
    const tangent = new THREE.Vector3().subVectors(pts[i0 + 1], pts[i0]).normalize();
    return { p, tangent };
  }

  function spawn(start, dir, len, radius, depth, gStart) {
    const g1 = Math.min(1, gStart + DUR[depth]);
    const { end, endDir, pts, radii, endR } = makeBranch(start, dir, len, radius, depth, gStart, g1);
    const owner = branches[branches.length - 1];

    // 主干的梢也带几片叶子：幼苗期是"一株小苗"，不是一根削尖的木桩
    if (depth === 0 && gStart < 0.12) {
      for (let i = 0; i < 15; i++) {
        const siteT = randRange(rand, 0.5, 1);
        const { p, tangent } = pointAt(pts, siteT);
        const perp = new THREE.Vector3().crossVectors(tangent, UP);
        if (perp.lengthSq() < 0.02) perp.set(1, 0, 0);
        perp.normalize().applyAxisAngle(tangent, rand() * Math.PI * 2);
        p.addScaledVector(perp, 0.02 + rand() * 0.07);
        leafSites.push({
          pos: p, dir: perp.clone().addScaledVector(tangent, randRange(rand, 0.1, 0.7)).normalize(),
          g: 0.15 + i * 0.012, stag: rand(), sizeScale: 0.45,
          branch: owner, siteT,
        });
      }
    }

    // 叶子：沿枝条一圈圈长，朝向大致朝外
    if (depth >= 1) {
      const n = depth === 1 ? 34 : depth === 2 ? 48 : depth === 3 ? 84 : 140;
      for (let i = 0; i < n; i++) {
        const siteT = randRange(rand, depth === MAX_DEPTH ? 0.08 : 0.24, 1);
        const { p, tangent } = pointAt(pts, siteT);
        const perp = new THREE.Vector3().crossVectors(tangent, UP);
        if (perp.lengthSq() < 0.02) perp.set(1, 0, 0);
        perp.normalize().applyAxisAngle(tangent, rand() * Math.PI * 2);
        p.addScaledVector(perp, 0.03 + rand() * 0.2);
        const bladeDir = perp.clone()
          .multiplyScalar(randRange(rand, 0.65, 1.0))
          .addScaledVector(tangent, randRange(rand, -0.4, 0.6))
          .normalize();
        leafSites.push({ pos: p, dir: bladeDir, g: Math.min(0.82, gStart + 0.02), stag: rand(), branch: owner, siteT });
      }
    }

    // 枝梢的一小簇叶子：每根枝的顶端都不秃
    if (depth >= 1) {
      for (let i = 0; i < 8; i++) {
        const siteT = randRange(rand, 0.86, 1);
        const { p, tangent } = pointAt(pts, siteT);
        const perp = new THREE.Vector3().crossVectors(tangent, UP);
        if (perp.lengthSq() < 0.02) perp.set(1, 0, 0);
        perp.normalize().applyAxisAngle(tangent, rand() * Math.PI * 2);
        p.addScaledVector(perp, 0.02 + rand() * 0.1);
        leafSites.push({
          pos: p, dir: perp.clone().addScaledVector(tangent, randRange(rand, -0.3, 0.5)).normalize(),
          g: Math.min(0.9, gStart + 0.03), stag: rand(), branch: owner, siteT,
        });
      }
    }

    if (depth >= MAX_DEPTH) return;

    const nextLen = len * randRange(rand, 0.58, 0.7);
    const nextR = radius * randRange(rand, 0.58, 0.7);

    // 主枝：顶芽是「同一根轴的延续」，半径必须接上父枝的枝梢，否则顶端会顶着一块脱开的木头
    if (depth <= 1) {
      const leadDir = childDir(endDir, randRange(rand, 0.14, 0.32), rand() * Math.PI * 2);
      leadDir.y -= 0.04 + 0.05 * depth;
      if (leadDir.z > -0.02) leadDir.z = -0.02 - rand() * 0.12;
      spawn(end, leadDir.normalize(), nextLen * 0.82, Math.max(0.009, endR * randRange(rand, 0.96, 1.04)), depth + 1, g1);
    }

    // 侧枝：方位完全打乱（对生/轮生一眼就假），越往末梢越外张并轻微下垂
    const sides = depth === 0 ? 5 : depth === 1 ? 4 : depth === 2 ? 2 : 1;
    for (let i = 0; i < sides; i++) {
      const azim = depth <= 1
        ? (i / sides) * Math.PI * 2 + randRange(rand, -0.42, 0.42)
        : rand() * Math.PI * 2;
      const tilt = randRange(rand, 0.68, 1.05);
      const at = depth === 0 ? randRange(rand, 0.3, 0.85) : randRange(rand, 0.22, 0.94);
      const { p, tangent } = pointAt(pts, at);
      const ri = Math.min(radii.length - 1, Math.max(0, Math.round(at * (radii.length - 1))));
      const localR = radii[ri];
      const d2 = childDir(tangent, tilt, azim);
      d2.y -= 0.02 + 0.02 * depth;
      // 这是剖面：树的前半被“切掉”了，所有枝条都往后半空间长，别越过切面
      if (d2.z > -0.02) d2.z = -0.02 - rand() * 0.15;
      spawn(
        p.clone().addScaledVector(tangent, -0.07),
        d2.normalize(),
        nextLen * randRange(rand, 0.92, 1.18),
        Math.max(0.010, localR * randRange(rand, 0.68, 0.86)),
        depth + 1, g1
      );
    }

    // 树干下部的低垂大枝：让树冠有“裙摆”，不再是一根光杆顶着蘑菇
    if (depth === 0) {
      for (let i = 0; i < 3; i++) {
        const at = randRange(rand, 0.16, 0.42);
        const { p, tangent } = pointAt(pts, at);
        const ri = Math.min(radii.length - 1, Math.max(0, Math.round(at * (radii.length - 1))));
        const localR = radii[ri];
        const azim = (i / 3) * Math.PI * 2 + randRange(rand, -0.5, 0.5);
        const d2 = childDir(tangent, randRange(rand, 0.95, 1.20), azim);
        d2.y -= randRange(rand, 0.02, 0.07);
        if (d2.z > -0.02) d2.z = -0.02 - rand() * 0.12;
        spawn(
          p.clone().addScaledVector(tangent, -0.06),
          d2.normalize(),
          nextLen * randRange(rand, 0.78, 1.02),
          Math.max(0.018, localR * randRange(rand, 0.45, 0.62)),
          1, g1 + 0.012 * i
        );
      }
    }
  }

  // 树干
  const trunkLen = randRange(rand, 3.15, 3.60);
  spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(randRange(rand, -0.06, 0.06), 1, randRange(rand, -0.06, 0.06)).normalize(),
    trunkLen, randRange(rand, 0.17, 0.21), 0, 0.06);

  /* ---------------- 根系：折线扫掠 + 分级，能弯曲、能收细 ---------------- */
  const roots = [];
  // 老根颜色深、新根浅，和真实根系一样有深浅差
  const rootMatA = new THREE.MeshStandardMaterial({
    color: 0x7b5a3e, roughness: 0.95, metalness: 0, flatShading: true,
  });
  const rootMatB = new THREE.MeshStandardMaterial({
    color: 0x9c7d59, roughness: 0.9, metalness: 0, flatShading: true,
  });

  // 一条根的骨架：从 start 出发，越走越细、越走越向下垂，并被夹在剖面里
  function rootPath(start, dir, len, r0, segs, wander) {
    const pts = [start.clone()];
    const radii = [r0];
    const d = dir.clone().normalize();
    const step = len / segs;
    for (let i = 1; i <= segs; i++) {
      const t = i / segs;
      d.x += randRange(rand, -wander, wander);
      d.z += randRange(rand, -wander * 0.55, wander * 0.55);
      d.y -= 0.015 + 0.075 * t;            // 末梢明显往下垂
      d.normalize();
      const p = pts[i - 1].clone().addScaledVector(d, step);
      // 夹在土壤剖面可见的薄层里
      p.y = Math.max(-2.9, p.y);
      if (p.x > 5.1) p.x = 5.1; else if (p.x < -5.1) p.x = -5.1;
      p.z = Math.min(0.24, Math.max(0.035, p.z));   // 根系保持在切面前薄层里，始终可见
      pts.push(p);
      radii.push(Math.max(0.0035, r0 * (1 - 0.88 * Math.pow(t, 0.8))));
    }
    return { pts, radii };
  }

  function addRoot(pts, radii, radial, g0, g1, depth) {
    const geo = sweepGeometry(pts, radii, radial);
    geos.push(geo);
    const mesh = new THREE.Mesh(geo, depth <= 1 ? rootMatA : rootMatB);
    mesh.receiveShadow = false;
    mesh.castShadow = false;
    mesh.frustumCulled = false;
    group.add(mesh);
    const b = {
      mesh, pts, radii, rings: pts.length, radial,
      basePos: Float32Array.from(geo.attributes.position.array), lastK: -1,
    };
    roots.push({ ...b, g0, g1, depth });
    return b;
  }

  function rootChain(start, dir, len, r0, depth, gStart) {
    const segs = depth === 0 ? 12 : depth === 1 ? 7 : depth === 2 ? 5 : 4;
    const radial = depth === 0 ? 9 : depth === 1 ? 6 : 4;
    const { pts, radii } = rootPath(start, dir, len, r0, segs, depth === 0 ? 0.13 : 0.24);
    const dur = [0.080, 0.055, 0.040, 0.030][Math.min(3, depth)];
    const g1 = Math.min(0.86, gStart + dur);
    addRoot(pts, radii, radial, gStart, g1, depth);

    if (depth >= 3) return;
    // 侧根：沿主根不同高度发出，方向、粗细、长度都不一样
    const n = depth === 0 ? 9 : depth === 1 ? 3 : 2;
    for (let k = 0; k < n; k++) {
      const t = depth === 0 ? randRange(rand, 0.06, 0.94) : randRange(rand, 0.18, 0.92);
      const i0 = Math.min(segs, Math.max(1, Math.round(t * segs)));
      const p = pts[i0].clone();
      const localR = radii[i0];
      const sign = rand() < 0.5 ? -1 : 1;
      const spread = randRange(rand, 0.6, 1.35);           // 与竖直方向的夹角
      const nd = new THREE.Vector3(
        sign * Math.sin(spread) + randRange(rand, -0.3, 0.3),
        -Math.cos(spread) * randRange(rand, 0.3, 0.75),
        randRange(rand, -0.25, 0.5)
      ).normalize();
      rootChain(
        p, nd,
        len * randRange(rand, 0.3, 0.55),
        Math.max(0.007, localR * randRange(rand, 0.5, 0.74)),
        depth + 1, g1 + 0.012 * k
      );
    }
  }

  // 主根从种子正下方钻下去
  rootChain(
    new THREE.Vector3(0, -0.05, 0.06),
    new THREE.Vector3(randRange(rand, -0.12, 0.12), -1, randRange(rand, -0.06, 0.14)),
    randRange(rand, 2.0, 2.4), 0.075, 0, 0.012
  );
  // 根颈四周的板根：贴着地面向外铺，让树"抓"住土
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + randRange(rand, -0.5, 0.5);
    rootChain(
      new THREE.Vector3(Math.cos(a) * 0.07, -0.06, 0.02 + Math.sin(a) * 0.05),
      new THREE.Vector3(Math.cos(a) * 1.1, -0.55, Math.sin(a) * 0.5).normalize(),
      randRange(rand, 0.7, 1.15), 0.055, 1, 0.13
    );
  }

  // 树干入土处的“根盘”：用一条凹曲线旋成，比直筒更像个活物
  const flareProfile = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;                                  // 0 = 土面，1 = 更深处
    flareProfile.push(new THREE.Vector2(0.10 + 0.125 * Math.pow(1 - t, 1.15), -0.75 * t));
  }
  const flareGeo = new THREE.LatheGeometry(flareProfile, 16);
  geos.push(flareGeo);
  // 根颈比露出地面的树皮更暗（常年被土和湿气染），不然会在幼苗期变成一个白亮的蘑菇头
  const flareMat = new THREE.MeshStandardMaterial({
    color: 0x6a4a30, map: BARK_TEX, bumpMap: BARK_TEX, bumpScale: 0.07,
    roughness: 0.98, metalness: 0,
  });
  const flare = new THREE.Mesh(flareGeo, flareMat);
  flare.position.set(0, -0.015, 0);
  flare.scale.setScalar(0.001);
  flare.castShadow = true;
  flare.receiveShadow = true;
  group.add(flare);

  /* 叶子实例化网格 */
  const count = Math.min(leafSites.length, 40000);
  const leaves = new THREE.InstancedMesh(LEAF_GEO, leafMat, count);
  leaves.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  leaves.castShadow = true;
  leaves.frustumCulled = false;
  group.add(leaves);

  const leafData = [];
  const c = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const site = leafSites[i];
    // 叶面朝向：沿枝条方向展开，再随机绕自身轴滚一点
    const quat = new THREE.Quaternion().setFromUnitVectors(UP, site.dir);
    quat.multiply(new THREE.Quaternion().setFromAxisAngle(UP, rand() * Math.PI * 2));
    const autumn = new THREE.Color();
    const pick = rand();
    if (pick < 0.45) autumn.setHex(0xe2622a);
    else if (pick < 0.75) autumn.setHex(0xefb024);
    else if (pick < 0.92) autumn.setHex(0xc9302c);
    else autumn.setHex(0x9d7b2a);
    const leafPos = site.pos.clone();
    leafPos.z = Math.min(leafPos.z, -0.03 - rand() * 0.12);   // 树冠也限制在切面后方
    leafPos.y = Math.max(0.18, leafPos.y);
    const branchPoint = site.branch ? pointOnPolyline(site.branch.pts, site.siteT) : leafPos.clone();
    const offset = leafPos.clone().sub(branchPoint);
    leafData.push({
      pos: leafPos, quat, size: randRange(rand, 0.20, 0.34) * (site.sizeScale || 1),
      grow: site.g, stag: site.stag, autumn, tone: randRange(rand, 0.82, 1.14),
      phase: rand() * Math.PI * 2, spin: randRange(rand, 0.4, 1.2),
      branch: site.branch, siteT: site.siteT, offset,
    });
    leaves.setColorAt(i, c.setHex(0xffffff));
  }
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;

  /* ---------------- 果实（第二年秋天） ---------------- */
  const FRUIT_COUNT = 56;
  const fruitGeo = new THREE.SphereGeometry(1, 14, 11);
  const fruitMat = new THREE.MeshStandardMaterial({ roughness: 0.38, metalness: 0.0 });
  const fruits = new THREE.InstancedMesh(fruitGeo, fruitMat, FRUIT_COUNT);
  fruits.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  fruits.castShadow = true;
  fruits.frustumCulled = false;
  group.add(fruits);

  const stemGeo = new THREE.CylinderGeometry(0.008, 0.011, 0.075, 5, 1);
  stemGeo.translate(0, 0.037, 0);
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x5b4227, roughness: 1, metalness: 0 });
  const stems = new THREE.InstancedMesh(stemGeo, stemMat, FRUIT_COUNT);
  stems.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  stems.frustumCulled = false;
  group.add(stems);

  // 挑挂果的位置：树冠外缘、靠上的枝梢
  const fruitData = [];
  const outer = leafData.filter((d) => d.pos.y > 1.2 && Math.hypot(d.pos.x, d.pos.z) > 1.6);
  const pool = outer.length > 20 ? outer : leafData;
  for (let i = 0; i < FRUIT_COUNT; i++) {
    const src = pool[Math.floor(rand() * pool.length)];
    const pos = src.pos.clone();
    pos.y -= 0.05 + rand() * 0.07;
    pos.x += randRange(rand, -0.05, 0.05);
    pos.z += randRange(rand, -0.05, 0.05);
    const cc = new THREE.Color();
    const pick = rand();
    if (pick < 0.62) cc.setHex(0xc0322a);          // 红苹果
    else if (pick < 0.86) cc.setHex(0xd8552c);     // 偏橙
    else cc.setHex(0xe0b23a);                      // 黄果
    fruitData.push({
      pos, size: randRange(rand, 0.085, 0.135),
      quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3)),
      phase: rand() * Math.PI * 2, stag: rand(),
    });
    fruits.setColorAt(i, cc);
    stems.setColorAt(i, c.setHex(0xffffff));
  }
  if (fruits.instanceColor) fruits.instanceColor.needsUpdate = true;
  if (stems.instanceColor) stems.instanceColor.needsUpdate = true;

  /* ---------------- 春花 ---------------- */
  const BLOSSOM_COUNT = Math.min(2400, Math.floor(leafData.length * 0.11));
  const blossomGeo = new THREE.PlaneGeometry(1, 1);
  const blossomMat = new THREE.MeshStandardMaterial({
    map: FLOWER_TEX, alphaTest: 0.30, side: THREE.DoubleSide, roughness: 0.9, metalness: 0,
    transparent: true, opacity: 0,
  });
  const blossoms = new THREE.InstancedMesh(blossomGeo, blossomMat, BLOSSOM_COUNT);
  blossoms.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  blossoms.frustumCulled = false;
  group.add(blossoms);
  const blossomData = [];
  const blossomCol = new THREE.Color();
  for (let i = 0; i < BLOSSOM_COUNT; i++) {
    const src = leafData[Math.floor(rand() * leafData.length)];
    const pos = src.pos.clone();
    const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3));
    const size = randRange(rand, 0.045, 0.09);
    blossomData.push({ pos, quat, size });
    if (rand() < 0.7) blossomCol.setHex(0xfff6f8); else blossomCol.setHex(0xffd9e6);
    blossoms.setColorAt(i, blossomCol);
    blossoms.setMatrixAt(i, new THREE.Matrix4().compose(pos, quat, new THREE.Vector3(size, size, size)));
  }
  if (blossoms.instanceColor) blossoms.instanceColor.needsUpdate = true;
  blossoms.instanceMatrix.needsUpdate = true;

  /* ---------------- 冬雪：枝上的积雪 ---------------- */
  const snowPts = [];
  for (const b of branches) {
    if (b.depth < 1) continue;
    const n = b.depth >= 3 ? 2 : 1;
    for (let k = 0; k < n; k++) {
      const idx = Math.floor(randRange(rand, 0.25, 0.96) * (b.pts.length - 1));
      const p = b.pts[idx].clone();
      const r = b.radii ? b.radii[idx] : 0.02;
      p.y += r * 1.05 + 0.008;
      snowPts.push({ pos: p, s: 0.024 + r * 1.2 });
    }
  }
  const snowCapGeo = new THREE.SphereGeometry(1, 6, 4);
  const snowCapMat = new THREE.MeshStandardMaterial({ color: 0xf7fcff, roughness: 0.82, metalness: 0, transparent: true, opacity: 0 });
  const snowCaps = new THREE.InstancedMesh(snowCapGeo, snowCapMat, snowPts.length);
  snowCaps.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  snowCaps.frustumCulled = false;
  group.add(snowCaps);
  const snowCapData = snowPts.map((d) => ({
    pos: d.pos, quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 0.4, rand() * 3, rand() * 0.4)),
    sx: d.s * randRange(rand, 0.55, 0.85), sy: d.s * 0.42, sz: d.s * randRange(rand, 0.55, 0.85),
  }));
  for (let i = 0; i < snowCapData.length; i++) {
    const d = snowCapData[i];
    snowCaps.setMatrixAt(i, new THREE.Matrix4().compose(d.pos, d.quat, new THREE.Vector3(d.sx, d.sy, d.sz)));
  }
  snowCaps.instanceMatrix.needsUpdate = true;

  /* 种子 & 子叶：种皮做成上下两半，吸水后从中间裂开，比一颗实心球真实 */
  const seedMat = new THREE.MeshStandardMaterial({ map: seedTexture(), roughness: 0.52, metalness: 0.02 });
  const seedMesh = new THREE.Group();
  seedMesh.position.set(0, 0.055, 0.07);
  seedMesh.rotation.set(0.42, 0.6, 0.15);
  const seedTop = new THREE.Mesh(
    new THREE.SphereGeometry(0.145, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.5),
    seedMat
  );
  const seedBottom = new THREE.Mesh(
    new THREE.SphereGeometry(0.145, 24, 16, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5),
    seedMat
  );
  seedTop.scale.set(1.0, 0.78, 1.3);
  seedBottom.scale.set(1.0, 0.78, 1.3);
  seedTop.castShadow = true;
  seedBottom.castShadow = true;
  seedMesh.add(seedTop, seedBottom);
  const seedCrack = new THREE.Mesh(
    new THREE.TorusGeometry(0.128, 0.006, 6, 32),
    new THREE.MeshStandardMaterial({ color: 0x2a190c, roughness: 1, metalness: 0 })
  );
  seedCrack.rotation.x = Math.PI / 2;
  seedMesh.add(seedCrack);
  group.add(seedMesh);

  const cotyledonMat = leafMat.clone();
  const cotyledons = [];
  for (let i = 0; i < 2; i++) {
    const m = new THREE.Mesh(LEAF_GEO, cotyledonMat);
    m.scale.setScalar(0.001);
    m.position.set(i === 0 ? -0.035 : 0.035, 0.10, 0.03);
    m.rotation.set(i === 0 ? 0.35 : -0.35, i === 0 ? -1.15 : 1.15, i === 0 ? 0.85 : -0.85);
    group.add(m);
    cotyledons.push(m);
  }

  const result = {
    group, branches, leaves, leafData, roots, flare, flareMat, rootMats: [rootMatA, rootMatB], seedMesh, seedTop, seedBottom, seedCrack, seedMat, cotyledons, cotyledonMat, geos,
    fruits, stems, fruitData, fruitGeo, fruitMat, stemGeo, stemMat,
    blossoms, blossomMat, blossomGeo, snowCaps, snowCapGeo, snowCapMat,
    radius: 0,
  };
  treeRoot.add(group);

  // 计算包围球，用于镜头自动高度
  let maxY = 0;
  for (const b of branches) maxY = Math.max(maxY, b.start.y + b.len);
  result.height = maxY;
  return result;
}

function disposeTree(t) {
  if (!t) return;
  treeRoot.remove(t.group);
  for (const g of t.geos) g.dispose();
  t.leaves.dispose();
  t.seedMesh.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) o.material.dispose();
  });
  t.cotyledonMat.dispose();
  for (const m of t.rootMats) m.dispose();
  if (t.flareMat) t.flareMat.dispose();
  t.fruitGeo.dispose(); t.fruitMat.dispose();
  t.stemGeo.dispose(); t.stemMat.dispose();
  if (t.blossoms) { t.blossoms.dispose(); t.blossomMat.dispose(); t.blossomGeo.dispose(); }
  if (t.snowCaps) { t.snowCaps.dispose(); t.snowCapMat.dispose(); t.snowCapGeo.dispose(); }
}

/* ---------------- 粒子：雪花 / 花瓣 / 落叶 ---------------- */
function circleTexture() {
  const s = 64, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.5, 'rgba(255,255,255,0.75)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const SNOW_COUNT = 2200;
const snowGeo = new THREE.BufferGeometry();
const snowPos = new Float32Array(SNOW_COUNT * 3);
const snowVel = new Float32Array(SNOW_COUNT);
const snowPhase = new Float32Array(SNOW_COUNT);
for (let i = 0; i < SNOW_COUNT; i++) {
  snowPos[i * 3] = (Math.random() - 0.5) * 56;
  snowPos[i * 3 + 1] = Math.random() * 26;
  snowPos[i * 3 + 2] = (Math.random() - 0.5) * 56;
  snowVel[i] = 1.1 + Math.random() * 2.0;
  snowPhase[i] = Math.random() * Math.PI * 2;
}
snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
const snowMat = new THREE.PointsMaterial({
  size: 0.16, map: circleTexture(), transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, color: 0xffffff, fog: false,
});
const snow = new THREE.Points(snowGeo, snowMat);
snow.frustumCulled = false;
scene.add(snow);

/* 雨：生长阶段的“风吹雨露”。用竖直雨丝贴图 + Points，照顾性能 */
function rainTexture() {
  const w = 32, h = 128, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(210,230,245,0)');
  g.addColorStop(0.25, 'rgba(220,238,250,0.55)');
  g.addColorStop(0.75, 'rgba(235,246,255,0.75)');
  g.addColorStop(1, 'rgba(235,246,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(w * 0.4, 0, w * 0.2, h);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const RAIN_COUNT = 900;
const rainGeo = new THREE.BufferGeometry();
const rainPos = new Float32Array(RAIN_COUNT * 3);
const rainVel = new Float32Array(RAIN_COUNT);
for (let i = 0; i < RAIN_COUNT; i++) {
  rainPos[i * 3] = (Math.random() - 0.5) * 30;
  rainPos[i * 3 + 1] = Math.random() * 18;
  rainPos[i * 3 + 2] = -14 + Math.random() * 24;
  rainVel[i] = 10 + Math.random() * 8;
}
rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rainMat = new THREE.PointsMaterial({
  size: 0.22, map: rainTexture(), transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, color: 0xd6e8f6, fog: false,
});
const rain = new THREE.Points(rainGeo, rainMat);
rain.frustumCulled = false;
scene.add(rain);
// 雨的时间窗：扎根、破土、幼苗、夏天各来一阵
const RAIN_WINDOWS = [[27, 37, 0.7], [49, 57, 0.5], [70, 76, 0.45], [96, 103, 0.55], [154, 161, 0.4]];
function weatherAt(t) {
  let a = 0;
  for (const [s, e, amt] of RAIN_WINDOWS) {
    if (t > s && t < e) {
      const u = (t - s) / (e - s);
      a = Math.max(a, amt * smoothstep(0, 0.18, u) * (1 - smoothstep(0.82, 1, u)));
    }
  }
  return a;
}

/* 飘落的花瓣 / 落叶 */
const FALL_COUNT = 220;
const fallMat = new THREE.MeshStandardMaterial({
  map: LEAF_TEX, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.9,
  transparent: false,
});
const fallLeaves = new THREE.InstancedMesh(LEAF_GEO, fallMat, FALL_COUNT);
fallLeaves.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
fallLeaves.frustumCulled = false;
const fallData = [];
const hideM = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
for (let i = 0; i < FALL_COUNT; i++) {
  fallData.push({ life: 0, pos: new THREE.Vector3(), vel: new THREE.Vector3(), rot: new THREE.Vector3(), spin: new THREE.Vector3(), size: 0.2, color: new THREE.Color(0xffffff) });
  fallLeaves.setMatrixAt(i, hideM);
  fallLeaves.setColorAt(i, tmpA.setHex(0xffffff));
}
scene.add(fallLeaves);

let fallCursor = 0;
function spawnFallingLeaf(color) {
  const d = fallData[fallCursor];
  fallCursor = (fallCursor + 1) % FALL_COUNT;
  d.life = 1;
  d.pos.set((Math.random() - 0.5) * 7, 1 + Math.random() * 5.5, (Math.random() - 0.5) * 7);
  d.vel.set((Math.random() - 0.5) * 0.5, -(0.5 + Math.random() * 0.5), (Math.random() - 0.5) * 0.5);
  d.rot.set(Math.random() * 6.28, Math.random() * 6.28, Math.random() * 6.28);
  d.spin.set((Math.random() - 0.5) * 2.4, (Math.random() - 0.5) * 2.4, (Math.random() - 0.5) * 2.4);
  d.size = 0.16 + Math.random() * 0.1;
  d.color.copy(color);
  fallLeaves.setColorAt((fallCursor + FALL_COUNT - 1) % FALL_COUNT, color);
  if (fallLeaves.instanceColor) fallLeaves.instanceColor.needsUpdate = true;
}

/* ---------------- 镜头控制 ---------------- */
const cam = { theta: 1.46, phi: 1.46, radius: 12.5, dir: 1, target: new THREE.Vector3(0, 3.3, 0) };
const THETA_MIN = Math.PI / 2 - 0.62, THETA_MAX = Math.PI / 2 + 0.62;

// 生长阶段的镜头脚本：种子微距 → 根系剖面 → 破土 → 幼苗 → 后拉看全树
const CAM_KEYS = [
  [0, 0.10, 0.9],
  [10, 0.08, 1.1],
  [20, 0.00, 1.3],
  [28, -0.55, 2.6],
  [40, -0.65, 2.9],
  [48, 0.00, 1.7],
  [55, 0.25, 2.0],
  [68, 0.90, 3.4],
  [78, 1.80, 4.8],
  [92, 3.00, 10.8],
];
function cameraFrameAt(t) {
  if (t >= CAM_KEYS[CAM_KEYS.length - 1][0]) return null;
  for (let i = 1; i < CAM_KEYS.length; i++) {
    const [t1, y1, h1] = CAM_KEYS[i];
    if (t <= t1) {
      const [t0, y0, h0] = CAM_KEYS[i - 1];
      const u = smoothstep(0, 1, (t - t0) / Math.max(0.001, t1 - t0));
      return { targetY: y0 + (y1 - y0) * u, viewH: h0 + (h1 - h0) * u };
    }
  }
  return null;
}
let autoRotate = 1, lastInteract = -999;
const pointers = new Map();
let pinchStart = 0, pinchRadius = 0;

const dom = renderer.domElement;
dom.style.touchAction = 'none';

dom.addEventListener('pointerdown', (e) => {
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  lastInteract = performance.now();
  dom.setPointerCapture(e.pointerId);
});
dom.addEventListener('pointermove', (e) => {
  const prev = pointers.get(e.pointerId);
  if (!prev) return;
  const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
  prev.x = e.clientX; prev.y = e.clientY;
  lastInteract = performance.now();
  if (pointers.size === 1) {
    cam.theta = clamp(cam.theta - dx * 0.006, THETA_MIN, THETA_MAX);
    cam.phi = clamp(cam.phi - dy * 0.005, 0.42, 1.52);
  } else if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const dist = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchStart > 0) {
      cam.radius = clamp(pinchRadius * (pinchStart / dist), 5.5, 30);
    } else { pinchStart = dist; pinchRadius = cam.radius; }
  }
});
function endPointer(e) {
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinchStart = 0;
}
dom.addEventListener('pointerup', endPointer);
dom.addEventListener('pointercancel', endPointer);
dom.addEventListener('wheel', (e) => {
  e.preventDefault();
  cam.radius = clamp(cam.radius * Math.exp(e.deltaY * 0.0012), 5.5, 30);
  lastInteract = performance.now();
}, { passive: false });

/* ---------------- 状态、旁白与播放器 ---------------- */
const seasonEl = document.getElementById('season');
const subEl = document.getElementById('sub');
const yearEl = document.getElementById('year');
const chapterIndexEl = document.getElementById('chapterIndex');
const chapterTitleEl = document.getElementById('chapterTitle');
const chapterTextEl = document.getElementById('chapterText');
const playerEl = document.getElementById('player');
const playBtn = document.getElementById('playBtn');
const replayBtn = document.getElementById('replayBtn');
const timelineEl = document.getElementById('timeline');
const timecodeEl = document.getElementById('timecode');
const marksEl = document.getElementById('marks');
const narrationEl = document.getElementById('narration');
let currentSeasonLabel = '';
let currentChapter = -1;

const CHAPTERS = [
  { start: 0, end: 12, title: '种子入土', text: '一颗小小的种子落进松软的泥土里。它安静地躺着，等待水分和温暖把它唤醒。' },
  { start: 12, end: 24, title: '吸水膨胀', text: '下雨了，种子喝饱了水，身体慢慢胀大，坚硬的外壳从中间裂开一条缝。' },
  { start: 24, end: 40, title: '向下扎根', text: '最先钻出来的不是叶子，而是根。主根向下探索，侧根向四周铺开，把泥土牢牢抓住。' },
  { start: 40, end: 55, title: '破土发芽', text: '嫩芽顶着种壳钻出地面，两片子叶慢慢展开，第一次见到阳光。' },
  { start: 55, end: 68, title: '幼苗初长', text: '小苗把根扎得更深，茎秆变粗，第一片真叶舒展开来，它开始自己制造养分。' },
  { start: 68, end: 78, title: '小树成形', text: '风吹过，雨落下，小树在一次次摇晃中变得更结实，枝丫一层层向外伸展。' },
  { start: 78, end: 92, title: '长成大树', text: '一年又一年，树干粗壮，树冠如伞，它终于长成了一棵大树。' },
  { start: 92, end: 108, title: '第一年 · 夏', text: '夏天到了，叶子浓绿，阳光穿过树冠，树荫下凉快极了。' },
  { start: 108, end: 124, title: '第一年 · 秋', text: '秋天，叶子变成红和金，一片片飘落，慢慢腐烂，变成泥土里的养分。' },
  { start: 124, end: 140, title: '第一年 · 冬', text: '冬天，枝头落满白雪，树安静地睡着，根还在土里呼吸。' },
  { start: 140, end: 156, title: '第二年 · 春', text: '第二年春天，树又醒来，新芽和花朵一起冒出来。' },
  { start: 156, end: 172, title: '第二年 · 夏', text: '夏天，树荫像一把大伞，小鸟和昆虫都来这里休息。' },
  { start: 172, end: 188, title: '第二年 · 秋', text: '第二年秋天，枝头结出果实，果实里有新的种子，生命就这样传下去。' },
  { start: 188, end: 204, title: '第二年 · 冬', text: '冬天又来了，一年结束，新的轮回又要开始。' },
];

const T0 = (() => { const v = parseFloat(new URLSearchParams(location.search).get('t0')); return isNaN(v) ? 0 : v; })();
const FREEZE_T = /(^|[?&])freeze(=|&|$)/.test(location.search) ? T0 : null;
const VIDEO = /(^|[?&])video(=|&|$)/.test(location.search);
let videoT = 0;
if (VIDEO) {
  window.__setVideoT = (v) => { videoT = v; };
  window.__videoReady = true;
}
let storyTime = clamp(T0, 0, STORY_END);
let playing = !VIDEO && FREEZE_T === null;
let scrubbing = false;
let prevT = storyTime;
let lastReal = performance.now();

function fmtTime(s) {
  s = Math.max(0, Math.floor(s));
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}
function chapterIndexAt(t) {
  let idx = 0;
  for (let i = 0; i < CHAPTERS.length; i++) if (t >= CHAPTERS[i].start) idx = i;
  return idx;
}
function updateChapterUI(t) {
  const idx = chapterIndexAt(t);
  if (idx === currentChapter) return;
  currentChapter = idx;
  const c = CHAPTERS[idx];
  chapterIndexEl.textContent = '第 ' + (idx + 1) + ' 章 / 共 ' + CHAPTERS.length + ' 章';
  chapterTitleEl.textContent = c.title;
  chapterTextEl.textContent = c.text;
  chapterTitleEl.style.animation = 'none';
  void chapterTitleEl.offsetWidth;
  chapterTitleEl.style.animation = 'seasonIn .5s ease both';
}
function syncPlayer() {
  if (!timelineEl) return;
  if (!scrubbing) timelineEl.value = String(storyTime);
  timelineEl.style.setProperty('--progress', (storyTime / STORY_END * 100).toFixed(2) + '%');
  timecodeEl.textContent = fmtTime(storyTime) + ' / ' + fmtTime(STORY_END);
  playBtn.textContent = playing ? '⏸' : '▶';
  playBtn.setAttribute('aria-label', playing ? '暂停' : '播放');
}
function setStoryTime(t, pause = true) {
  storyTime = clamp(t, 0, STORY_END);
  if (pause) playing = false;
  prevT = storyTime;
  updateChapterUI(storyTime);
  syncPlayer();
}
function togglePlay() {
  if (storyTime >= STORY_END - 0.01) { storyTime = 0; prevT = 0; updateChapterUI(0); }
  playing = !playing;
  syncPlayer();
}

// 给进度条加章节刻度和 tooltip
for (const c of CHAPTERS) {
  if (c.start <= 0) continue;
  const mark = document.createElement('span');
  mark.style.left = (c.start / STORY_END * 100) + '%';
  mark.title = c.title;
  if (c.start >= 92) mark.className = 'chapter-major';
  marksEl.appendChild(mark);
}
timelineEl.max = STORY_END.toFixed(1);
timelineEl.value = String(storyTime);
updateChapterUI(storyTime);
syncPlayer();

if (FREEZE_T !== null || VIDEO) {
  playerEl.style.display = 'none';
  narrationEl.style.display = 'none';
  document.getElementById('tips').style.display = 'none';
  document.getElementById('replant').style.display = 'none';
}

function disposeEnvironment() {
  for (const key of ['__grass', '__flowers', '__groundLeaves']) {
    const mesh = scene[key];
    if (!mesh) continue;
    scene.remove(mesh);
    if (mesh.material) mesh.material.dispose();
    // CROSS_GEO / LEAF_GEO 是共享几何，不能在这里 dispose
  }
  scene.__grass = null; scene.__flowers = null; scene.__groundLeaves = null;
}

function plant(seed) {
  disposeTree(tree);
  disposeEnvironment();
  const rand = mulberry32(seed ^ 0x9e3779b9);
  scene.__grass = buildGrass(seed ^ 0x5f3759df);
  scene.add(scene.__grass);
  scene.__flowers = buildFlowers(seed ^ 0x27d4eb2f);
  scene.add(scene.__flowers);
  scene.__groundLeaves = buildGroundLeaves(seed ^ 0x165667b1);
  scene.add(scene.__groundLeaves);
  tree = buildTree(seed);
  for (const d of fallData) d.life = 0;
  for (let i = 0; i < FALL_COUNT; i++) fallLeaves.setMatrixAt(i, hideM);
  fallLeaves.instanceMatrix.needsUpdate = true;
}

let seedCounter = Math.floor(Math.random() * 100000);
plant(seedCounter);

playBtn.addEventListener('click', togglePlay);
replayBtn.addEventListener('click', () => {
  storyTime = 0; prevT = 0; playing = true;
  updateChapterUI(0); syncPlayer();
});
timelineEl.addEventListener('pointerdown', () => { scrubbing = true; });
timelineEl.addEventListener('input', (e) => { setStoryTime(parseFloat(e.target.value), true); });
timelineEl.addEventListener('change', () => { scrubbing = false; syncPlayer(); });
window.addEventListener('pointerup', () => { if (scrubbing) { scrubbing = false; syncPlayer(); } });
document.getElementById('replant').addEventListener('click', () => {
  seedCounter = Math.floor(Math.random() * 100000);
  plant(seedCounter);
  storyTime = 0; prevT = 0; playing = true;
  updateChapterUI(0); syncPlayer();
});
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); setStoryTime(storyTime - 5, true); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); setStoryTime(storyTime + 5, true); }
  else if (e.key === 'Home') { e.preventDefault(); setStoryTime(0, true); }
  else if (e.key === 'End') { e.preventDefault(); setStoryTime(STORY_END, true); }
  else if (e.key === 'r' || e.key === 'R') {
    seedCounter = Math.floor(Math.random() * 100000);
    plant(seedCounter);
    storyTime = 0; prevT = 0; playing = true;
    updateChapterUI(0); syncPlayer();
  }
});

/* ---------------- 主循环 ---------------- */
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const _e = new THREE.Euler();
const _color = new THREE.Color();
const _green = new THREE.Color();
const _tip = new THREE.Vector3();
const _leafP = new THREE.Vector3();
const _sunDir = new THREE.Vector3();
const _sunNdc = new THREE.Vector3();
const _sunUv = new THREE.Vector2(0.5, 0.8);
const _camDir = new THREE.Vector3();

// 枝条的生长：前 i0 环照常显示，i0 之后的环全部塌到「前端点」，形成一根越伸越长的锥尖
function growBranch(b, k, fat = 1) {
  if (Math.abs(k - b.lastK) < 0.003 && Math.abs(fat - (b.lastFat === undefined ? -1 : b.lastFat)) < 0.004) return;
  b.lastK = k;
  b.lastFat = fat;
  const attr = b.mesh.geometry.attributes.position;
  const arr = attr.array;
  const base = b.basePos;
  const n = b.rings, rad = b.radial;
  const f = Math.min(n - 1, Math.max(0, k * (n - 1)));
  const i0 = Math.min(n - 2, Math.floor(f));
  _tip.copy(b.pts[i0]).lerp(b.pts[i0 + 1], f - i0);
  // 锥尖再往前拉一截，生长中的枝头是尖的，不是平口
  if (i0 + 1 < n) {
    const tipLen = Math.min(0.10, (b.radii ? b.radii[i0] : 0.05) * 1.4);
    _tip.addScaledVector(b.pts[i0 + 1].clone().sub(b.pts[i0]).normalize(), tipLen);
  }
  const rs = (0.45 + 0.55 * Math.min(1, k * 1.7)) * fat;   // 幼枝细、老枝粗
  for (let i = 0; i < n; i++) {
    const c = b.pts[i];
    const o = i * rad * 3;
    if (i > i0) {
      for (let j = 0; j < rad; j++) {
        const p = o + j * 3;
        arr[p] = _tip.x; arr[p + 1] = _tip.y; arr[p + 2] = _tip.z;
      }
    } else {
      for (let j = 0; j < rad; j++) {
        const p = o + j * 3;
        arr[p] = c.x + (base[p] - c.x) * rs;
        arr[p + 1] = c.y + (base[p + 1] - c.y) * rs;
        arr[p + 2] = c.z + (base[p + 2] - c.z) * rs;
      }
    }
  }
  attr.needsUpdate = true;
}

function animate() {
  requestAnimationFrame(animate);
  const now = performance.now();
  const realDt = Math.min(0.10, Math.max(0.001, (now - lastReal) / 1000));
  lastReal = now;
  if (!VIDEO && FREEZE_T === null && playing) {
    storyTime = Math.min(STORY_END, storyTime + realDt);
    if (storyTime >= STORY_END - 0.001) {
      storyTime = STORY_END;
      playing = false;
    }
  }
  // 定帧模式（?t0=N&freeze）：时间钉死在 N 秒；视频模式由外部喂时间
  const t = VIDEO ? videoT : (FREEZE_T !== null ? FREEZE_T : storyTime);
  const dt = VIDEO ? 1 / 60 : Math.min(0.05, Math.max(0.0001, t - prevT));
  prevT = t;
  updateChapterUI(t);
  syncPlayer();

  /* —— 时间推进 —— */
  const pRaw = storySeason(t);
  const p = ((pRaw % 1) + 1) % 1;                    // 0..1 一年
  const yearIndex = storyYear(t);
  const g = growthAt(t);                             // 种子→大树的非线性生长进度

  const pal = samplePalette(p, palette);
  const rainA = weatherAt(t);

  /* —— 天空 / 光 —— */
  skyUniforms.topColor.value.copy(pal.skyTop);
  skyUniforms.horizonColor.value.copy(pal.horizon);
  skyUniforms.sunColor.value.copy(pal.sun);
  skyUniforms.cloudCover.value = Math.min(1, pal.cloud + rainA * 0.55);
  skyUniforms.cloudWarm.value = pal.cloudWarm;
  skyUniforms.time.value = t;
  scene.fog.color.copy(pal.fog);
  hemi.color.copy(pal.horizon);
  hemi.groundColor.copy(pal.ground).multiplyScalar(0.6);
  hemi.intensity = pal.hemi;
  sun.color.copy(pal.sun);
  sun.intensity = pal.sunI * (1 - 0.38 * rainA);

  // 太阳位置：黄金时刻的低角度逆光，太阳落在画面内、树后偏右
  // 侧逆光：太阳放在左后方，既保留轮廓光，又不会把树的正脸压成黑块
  const sunElev = 0.16 + 0.10 * (0.5 + 0.5 * Math.cos((p - 0.25) * Math.PI * 2));
  const sunAz = -2.02 + Math.sin(t * 0.03) * 0.12;
  const sunDir = _sunDir.set(Math.cos(sunAz) * Math.cos(sunElev), Math.sin(sunElev), Math.sin(sunAz) * Math.cos(sunElev)).normalize();
  sun.position.copy(sunDir).multiplyScalar(34);
  sunSprite.position.copy(sunDir).multiplyScalar(150);
  sunRays.position.copy(sunDir).multiplyScalar(148);
  sunSprite.material.color.copy(pal.sun);
  sunRays.material.color.copy(pal.sun);
  sunRays.material.opacity = 0.42 * (0.65 + 0.35 * (1 - smoothstep(0.6, 0.9, p))) * (1 - 0.6 * rainA);
  skyUniforms.sunDir.value.copy(sunDir);

  groundMat.color.copy(pal.ground).multiplyScalar(1 - 0.16 * rainA);
  // 远山：取地表色的暗版，再往雾色里拉，形成柔和的空气透视
  if (ridgeMats.length === 3) {
    ridgeMats[0].color.copy(pal.fog).lerp(pal.skyTop, 0.10).multiplyScalar(0.98);
    ridgeMats[1].color.copy(pal.ground).lerp(pal.fog, 0.58).multiplyScalar(0.92);
    ridgeMats[2].color.copy(pal.ground).lerp(pal.fog, 0.30).multiplyScalar(0.80);
  }
  // 秋天草也枯黄一点
  const grassAutumn = smoothstep(0.44, 0.56, p) * (1 - smoothstep(0.76, 0.84, p));
  scene.__grass.material.color.setRGB(1 + 0.95 * grassAutumn, 1 - 0.08 * grassAutumn, 1 - 0.85 * grassAutumn);
  grassTime.value = t;
  // 野花：春天冒出，初夏最盛，秋天退场
  const flowerF = smoothstep(0.01, 0.07, p) * (1 - smoothstep(0.40, 0.48, p));
  scene.__flowers.visible = flowerF > 0.02;
  scene.__flowers.material.opacity = flowerF;
  // 秋叶毯：铺开后在秋末—冬天慢慢变暗、下沉、腐烂进土里（不是收回去）
  const groundLeafShow = smoothstep(0.52, 0.68, p);
  const groundLeafDecay = smoothstep(0.70, 0.94, p);
  scene.__groundLeaves.visible = p > 0.50 && p < 0.96;
  if (scene.__groundLeaves.visible) {
    scene.__groundLeaves.material.opacity = 1.0 - 0.62 * groundLeafDecay;
    const info = scene.__groundLeaves.userData.leafInfo;
    for (let i = 0; i < info.length; i++) {
      const d = info[i];
      const grow = 0.18 + 0.82 * groundLeafShow;
      const size = d.size * grow * (1 - 0.85 * groundLeafDecay);
      _p.set(d.pos.x, d.pos.y - groundLeafDecay * (0.015 + d.size * 0.35), d.pos.z);
      _s.set(size, size, size);
      _m.compose(_p, d.quat, _s);
      scene.__groundLeaves.setMatrixAt(i, _m);
      _color.copy(d.color).lerp(tmpA.setHex(0x241b12), Math.min(1, groundLeafDecay * 1.25));
      scene.__groundLeaves.setColorAt(i, _color);
    }
    scene.__groundLeaves.instanceMatrix.needsUpdate = true;
    if (scene.__groundLeaves.instanceColor) scene.__groundLeaves.instanceColor.needsUpdate = true;
  }
  // 晨雾：春浓、夏淡、秋薄、冬再来一层雪雾
  const mistSeason = 0.45 + 0.35 * Math.cos((p - 0.03) * Math.PI * 2);
  for (let i = 0; i < mistMats.length; i++) {
    mistMats[i].opacity = [0.16, 0.10, 0.06][i] * mistSeason * (0.88 + 0.12 * Math.sin(t * 0.05 + i));
  }
  mistGroup.position.x = Math.sin(t * 0.018) * 4;
  // 浮尘：黄昏逆光里缓缓上升
  dustMat.opacity = 0.18 * (1 - smoothstep(0.72, 0.82, p)) * (0.7 + 0.3 * Math.sin(t * 0.7)) * smoothstep(0.35, 0.65, g);
  if (dustMat.opacity > 0.01) {
    const dp = dustGeo.attributes.position.array;
    for (let i = 0; i < DUST_COUNT; i++) {
      const i3 = i * 3;
      dp[i3 + 1] += dt * (0.05 + (i % 7) * 0.008);
      dp[i3] += Math.sin(t * 0.5 + dustPhase[i]) * dt * 0.04;
      if (dp[i3 + 1] > 7.2) {
        dp[i3 + 1] = 0.2;
        dp[i3] = (Math.random() - 0.5) * 22;
        dp[i3 + 2] = -10 + Math.random() * 12;
      }
    }
    dustGeo.attributes.position.needsUpdate = true;
  }

  /* —— 树的生长（管状枝条按长度逐段显现） —— */
  // 树干/枝条的粗细不只跟"自己长到哪"有关，还跟整棵树的年龄有关：
  // 否则小苗一冒头就是一根成年粗腿，像根胡萝卜。树长成（g→1）时才到最终粗细。
  const fat = 0.18 + 0.82 * smoothstep(0.20, 0.92, g);
  let crownTop = 0;
  for (const b of tree.branches) {
    const k = smoothstep(b.g0, b.g1, g);
    b.mesh.visible = k > 0.001;
    if (!b.mesh.visible) continue;
    growBranch(b, k, fat);
    const top = b.start.y + b.len * k;
    if (top > crownTop) crownTop = top;
  }

  /* —— 根系生长（先长根，后长苗）：和枝条同一套「抽条」逻辑 —— */
  for (const r of tree.roots) {
    const k = smoothstep(r.g0, r.g1, g);
    r.mesh.visible = k > 0.001;
    if (r.mesh.visible) growBranch(r, k);
  }
  // 根盘跟着树干一起长粗
  {
    const fk = smoothstep(0.04, 0.34, g);
    const rk = Math.max(0.03, fat * 1.06);   // 横向跟着树干粗细，永不带出"洋葱头"
    tree.flare.scale.set(rk, Math.max(0.0005, fk), rk);
    tree.flare.visible = fk > 0.02;
  }

  // 种子与子叶：种子按“吸水膨胀 → 裂壳 → 种皮脱落”的真实过程单独控制，
  // 不再只跟着 g 缩小，这样 0–56 秒能完整看到种子变化。
  const seedPlant = smoothstep(0.0, 2.5, t);      // 种子从上方落下、落进土里
  const seedSwell = 1 + 0.14 * smoothstep(12, 26, t);
  const seedSplit = smoothstep(26, 38, t);
  const seedFade = 1 - smoothstep(46, 56, t);
  tree.seedMesh.visible = t < 56 && seedFade > 0.01;
  tree.seedMesh.position.y = 0.055 + 0.32 * (1 - seedPlant);
  tree.seedMesh.scale.set(0.52 * seedSwell * seedFade, 0.42 * seedSwell * seedFade, 0.68 * seedSwell * seedFade);
  tree.seedTop.position.set(0.018 * seedSplit, 0.055 * seedSplit, 0.006 * seedSplit);
  tree.seedTop.rotation.z = -0.62 * seedSplit;
  tree.seedTop.rotation.x = 0.22 * seedSplit;
  tree.seedBottom.position.y = -0.008 * seedSplit;
  tree.seedCrack.visible = seedSplit > 0.01 && seedFade > 0.02;
  tree.seedCrack.material.transparent = true;
  tree.seedCrack.material.opacity = (1 - seedFade) * Math.min(1, seedSplit * 2.2);
  tree.seedCrack.scale.setScalar(1 + 0.12 * seedSplit);

  // 子叶挂点必须用“当前主干顶端”，不能用成年主干长度
  const trunkB = tree.branches[0];
  const trunkK = trunkB ? smoothstep(trunkB.g0, trunkB.g1, g) : 0;
  const trunkTop = trunkB ? trunkB.start.y + trunkB.len * trunkK : 0.2;
  const coty = smoothstep(0.09, 0.145, g) * (1 - smoothstep(0.34, 0.50, g));
  for (const m of tree.cotyledons) {
    m.scale.setScalar(Math.max(0.001, 0.12 * coty));
    m.position.y = Math.max(0.08, trunkTop * 0.94);
    m.visible = coty > 0.01;
  }
  tree.cotyledonMat.color.setHex(0x9fd35e);

  /* —— 叶子的数量与颜色 —— */
  // 春天发芽 → 夏天满树 → 秋天飘落 → 冬天光秃
  const leafAmount = p < 0.05 ? smoothstep(0.0, 0.05, p) : 1;
  const greenToDeep = smoothstep(0.10, 0.34, p);
  const blossomF = 0;   // 春天用独立的小花实例，不再给整树叶子染白

  const leaves = tree.leaves;
  for (let i = 0; i < tree.leafData.length; i++) {
    const d = tree.leafData[i];
    const branchK = d.branch ? smoothstep(d.branch.g0, d.branch.g1, g) : 1;
    // 叶片只在枝条真正长到它那一段之后才出现，并跟着当前枝梢走
    const reach = d.branch ? smoothstep(Math.max(0.02, d.siteT - 0.06), d.siteT + 0.06, branchK) : 1;
    const growK = smoothstep(d.grow, Math.min(1.0, d.grow + 0.10), g) * reach;
    const dropT = smoothstep(0.58 + d.stag * 0.08, 0.72 + d.stag * 0.05, p); // 秋天中后段一片片落下，冬天前落完
    const sc = d.size * growK * leafAmount * (1 - dropT);
    if (sc < 0.002) {
      _m.makeScale(0.0001, 0.0001, 0.0001);
      leaves.setMatrixAt(i, _m);
      continue;
    }
    const sway = Math.sin(t * 1.6 + d.phase) * 0.06 * growK;
    if (d.branch) {
      pointOnPolyline(d.branch.pts, Math.min(d.siteT, branchK), _leafP);
      _p.copy(_leafP).add(d.offset);
    } else {
      _p.copy(d.pos);
    }
    _p.x += sway; _p.z += Math.cos(t * 1.3 + d.phase) * 0.05 * growK;
    _q.copy(d.quat);
    _e.set(sway * 0.8, sway * 0.5, sway * 0.6);
    _q.multiply(_q2.setFromEuler(_e));
    _s.setScalar(sc);
    _m.compose(_p, _q, _s);
    leaves.setMatrixAt(i, _m);

    // 颜色：嫩绿 → 深绿 → 秋色 → 花白
    const autumnK = smoothstep(0.46 + d.stag * 0.1, 0.62 + d.stag * 0.1, p);
    _color.setHex(0x4f8a2d).lerp(tmpA.setHex(0x2b5c1e), greenToDeep);
    _color.lerp(d.autumn, autumnK);
    if (blossomF > 0.01) _color.lerp(tmpB.setHex(0xffd9e6), blossomF * 0.75);
    _color.multiplyScalar(d.tone);
    leaves.setColorAt(i, _color);
  }
  leaves.instanceMatrix.needsUpdate = true;
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;

  /* —— 春花与枝头积雪 —— */
  const blossomK = smoothstep(0.02, 0.07, p) * (1 - smoothstep(0.22, 0.30, p)) * smoothstep(0.70, 0.90, g);
  tree.blossoms.visible = blossomK > 0.02;
  tree.blossomMat.opacity = blossomK * 0.95;
  const snowCapK = smoothstep(0.78, 0.88, p) * (1 - smoothstep(0.96, 1.0, p));
  tree.snowCaps.visible = snowCapK > 0.02;
  tree.snowCapMat.opacity = snowCapK;

  /* —— 果实：第二年秋天结果，入冬前落光 —— */
  const fruitGrow = yearIndex >= 2 ? smoothstep(0.40, 0.52, p) : 0;
  const fruitFall = smoothstep(0.70, 0.80, p);
  const fruitMature = fruitGrow * (1 - smoothstep(0.70, 0.80, p));
  {
    const fd = tree.fruitData;
    const fruits = tree.fruits, stems = tree.stems;
    const q0 = _q.set(0, 0, 0, 1);
    for (let i = 0; i < fd.length; i++) {
      const d = fd[i];
      const sc = d.size * fruitGrow * (1 - smoothstep(0.80, 0.86, p));
      if (sc < 0.002) {
        fruits.setMatrixAt(i, hideM);
        stems.setMatrixAt(i, hideM);
        continue;
      }
      const sway = Math.sin(t * 1.5 + d.phase) * 0.02 * fruitGrow;
      _p.copy(d.pos);
      _p.x += sway;
      _p.y -= fruitFall * (1.2 + d.stag * 0.9);   // 熟透后自然落下，而不是原地缩小
      _m.compose(_p, d.quat, _s.setScalar(sc));
      fruits.setMatrixAt(i, _m);
      _p.y += sc * 0.92;
      _m.compose(_p, q0, _s.set(1, 1, 1));
      if (fruitFall < 0.35) stems.setMatrixAt(i, _m); else stems.setMatrixAt(i, hideM);
    }
    fruits.instanceMatrix.needsUpdate = true;
    stems.instanceMatrix.needsUpdate = true;
  }

  /* —— 落叶 / 花瓣 生成 —— */
  // 小苗阶段树冠还没成形，先不要从“隐形的树冠”往下掉花瓣
  const treeMatureEnough = smoothstep(0.18, 0.34, g);
  const autumnSpawnRate = g > 0.5 && p > 0.52 && p < 0.88 ? (6 + 26 * smoothstep(0.52, 0.68, p) * (1 - smoothstep(0.74, 0.88, p))) : 0;
  const petalRate = (p > 0.88 || p < 0.12) ? 10 * treeMatureEnough : 0;   // 早春/冬末的花瓣（用粉色）
  const spawnRate = autumnSpawnRate + petalRate;
  if (spawnRate > 0 && Math.random() < spawnRate * dt) {
    const isPetal = Math.random() > autumnSpawnRate / Math.max(0.001, spawnRate);
    const src = tree.leafData[Math.floor(Math.random() * tree.leafData.length)];
    const c = isPetal ? tmpA.setHex(0xffc9dc) : src.autumn;
    spawnFallingLeaf(c);
    const d = fallData[(fallCursor + FALL_COUNT - 1) % FALL_COUNT];
    d.pos.copy(src.pos);
    d.size = isPetal ? 0.12 : 0.2;
  }

  for (let i = 0; i < FALL_COUNT; i++) {
    const d = fallData[i];
    if (d.life <= 0) continue;
    d.pos.addScaledVector(d.vel, dt);
    d.pos.x += Math.sin(t * 2 + i) * 0.35 * dt;
    d.pos.z += Math.cos(t * 1.7 + i) * 0.3 * dt;
    d.rot.addScaledVector(d.spin, dt);
    if (d.pos.y <= 0.03) { d.life = 0; fallLeaves.setMatrixAt(i, hideM); continue; }
    _q.setFromEuler(_e.set(d.rot.x, d.rot.y, d.rot.z));
    _m.compose(d.pos, _q, _s.setScalar(d.size));
    fallLeaves.setMatrixAt(i, _m);
  }
  fallLeaves.instanceMatrix.needsUpdate = true;
  fallMat.opacity = 1;

  /* —— 雪 —— */
  const snowA = smoothstep(0.76, 0.88, p) * (1 - smoothstep(0.98, 1.0, p));
  snowMat.opacity = snowA * 0.95;
  snow.visible = snowA > 0.01;
  const winterF = smoothstep(0.72, 0.80, p);
  // 草不是“瞬间弹回来”：深冬最后一点时间从土里慢慢返青，避免跨年一帧跳变
  const grassSpring = p > 0.985 ? smoothstep(0.985, 1.0, p) : (p < 0.02 ? 1 : 0);
  const grassK = Math.max(0.0001, Math.max(1 - winterF, grassSpring));
  scene.__grass.material.opacity = grassK;
  scene.__grass.scale.set(1, 1, 1);
  // 雨：只在下雨窗口可见，落在树/土上时画面变暗
  rainMat.opacity = rainA * 0.62;
  rain.visible = rainA > 0.01;
  if (rain.visible) {
    const rp = rainGeo.attributes.position.array;
    for (let i = 0; i < RAIN_COUNT; i++) {
      const i3 = i * 3;
      rp[i3 + 1] -= rainVel[i] * dt;
      rp[i3] += 1.2 * dt;
      if (rp[i3 + 1] < 0) {
        rp[i3 + 1] = 16 + Math.random() * 6;
        rp[i3] = (Math.random() - 0.5) * 30;
        rp[i3 + 2] = -14 + Math.random() * 24;
      }
    }
    rainGeo.attributes.position.needsUpdate = true;
  }
  if (snow.visible) {
    const pos = snowGeo.attributes.position.array;
    for (let i = 0; i < SNOW_COUNT; i++) {
      const i3 = i * 3;
      pos[i3 + 1] -= snowVel[i] * dt * 1.6;
      pos[i3] += Math.sin(t * 0.9 + snowPhase[i]) * dt * 0.5;
      pos[i3 + 2] += Math.cos(t * 0.7 + snowPhase[i]) * dt * 0.4;
      if (pos[i3 + 1] < 0) {
        pos[i3 + 1] = 24 + Math.random() * 4;
        pos[i3] = (Math.random() - 0.5) * 56;
        pos[i3 + 2] = (Math.random() - 0.5) * 56;
      }
    }
    snowGeo.attributes.position.needsUpdate = true;
  }

  /* —— 风：整棵树轻轻摇 —— */
  const wind = smoothstep(0, 1, g);
  treeRoot.rotation.z = Math.sin(t * 0.62) * (0.012 + 0.018 * rainA) * wind;
  treeRoot.rotation.x = Math.cos(t * 0.48) * (0.010 + 0.012 * rainA) * wind;

  /* —— 镜头 —— */
  // 剖面视角：镜头只在切面前方弧形范围内移动
  if (VIDEO) {
    cam.theta = 1.43 + Math.sin(t * 0.05) * 0.085;
  } else if (playing && now - lastInteract > 6000) {
    cam.theta += cam.dir * 0.035 * dt;
    if (cam.theta > THETA_MAX) { cam.theta = THETA_MAX; cam.dir = -1; }
    if (cam.theta < THETA_MIN) { cam.theta = THETA_MIN; cam.dir = 1; }
  }
  // 竖屏（手机）时视野变窄，需要把镜头拉远，否则树会被裁掉
  const aspectNow = window.innerWidth / window.innerHeight;
  const aspectFix = aspectNow < 1.15 ? Math.min(2.8, Math.pow(1.15 / aspectNow, 0.9)) : 1;
  // 生长阶段走镜头脚本（种子微距、根系剖面、破土、幼苗、后拉），长成后自动框住全树
  const camFrame = cameraFrameAt(t);
  let fitR;
  if (camFrame) {
    cam.target.y = camFrame.targetY;
    fitR = camFrame.viewH / (2 * Math.tan((camera.fov * Math.PI) / 360));
  } else {
    const topY = Math.max(0.9, crownTop + 0.52);
    const BOTTOM_Y = -0.62 - 1.95 * smoothstep(0, 0.34, g);
    cam.target.y = (topY + BOTTOM_Y) / 2;
    fitR = ((topY - BOTTOM_Y) * 1.0) / (2 * Math.tan((camera.fov * Math.PI) / 360));
  }
  cam.target.x = 0.5 * smoothstep(0.15, 0.70, g);
  const effR = Math.max(1.35, fitR) * (cam.radius / 12.5) * aspectFix;
  const sp = Math.sin(cam.phi), cp = Math.cos(cam.phi);
  camera.position.set(
    cam.target.x + effR * sp * Math.cos(cam.theta),
    cam.target.y + effR * cp,
    cam.target.z + effR * sp * Math.sin(cam.theta)
  );
  camera.lookAt(cam.target);

  /* —— UI —— */
  const sIdx = Math.floor(p * 4) % 4;
  if (SEASONS[sIdx].name !== currentSeasonLabel) {
    currentSeasonLabel = SEASONS[sIdx].name;
    seasonEl.textContent = currentSeasonLabel;
    subEl.textContent = SEASONS[sIdx].sub;
    seasonEl.style.animation = 'none';
    void seasonEl.offsetWidth;
    seasonEl.style.animation = 'seasonIn .7s ease both';
  }
  yearEl.textContent = '第 ' + yearIndex + ' 年';
  const subText = (sIdx === 2 && fruitMature > 0.45) ? '果实熟了' : SEASONS[sIdx].sub;
  if (subEl.textContent !== subText) subEl.textContent = subText;

  if (DEBUG && Math.floor(t * 2) !== Math.floor((t - dt) * 2)) {
    console.log('[debug]', 't=' + t.toFixed(1), 'p=' + p.toFixed(3), 'g=' + g.toFixed(3),
      'ground=#' + pal.ground.getHexString(), 'snowA=' + snowA.toFixed(2),
      'grassY=' + scene.__grass.scale.y.toFixed(2));
  }

  /* —— 后处理：泛光 + ACES + 调色 + 暗角 + 颗粒 —— */
  _sunNdc.copy(sunSprite.position).project(camera);
  _sunUv.set(_sunNdc.x * 0.5 + 0.5, _sunNdc.y * 0.5 + 0.5);
  camera.getWorldDirection(_camDir);
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.getElementById('loading').style.display = 'none';
if (window.matchMedia('(pointer: coarse)').matches) {
  document.getElementById('tips').textContent = '单指拖动环顾 · 双指缩放 · 用底部进度条控制播放';
}

// 调试探针：?dbg 打开后可用 window.__probe(nx, ny) 射线拾取，定位画面上某个怪东西到底是谁
if (/(^|[?&])dbg(=|&|$)/.test(location.search)) {
  window.__scene = scene;
  window.__sky = skyUniforms;
  window.__camera = camera;
  window.__renderer = renderer;
  window.__probe = (nx, ny) => {
    const rc = new THREE.Raycaster();
    rc.setFromCamera(new THREE.Vector2(nx, ny), camera);
    return rc.intersectObjects(scene.children, true).slice(0, 5).map((h) => ({
      name: h.object.name || h.object.type,
      geo: h.object.geometry && h.object.geometry.type,
      verts: h.object.geometry && h.object.geometry.attributes.position ? h.object.geometry.attributes.position.count : 0,
      dist: +h.distance.toFixed(2),
      pt: [+h.point.x.toFixed(2), +h.point.y.toFixed(2), +h.point.z.toFixed(2)],
    }));
  };
}
animate();
