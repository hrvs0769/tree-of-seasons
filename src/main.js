/* 一棵树的四季 — 纯代码生成的 3D 树木，从种子发芽到参天大树，走过春夏秋冬 */
import * as THREE from 'three';

const UP = new THREE.Vector3(0, 1, 0);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
const randRange = (r, a, b) => a + (b - a) * r();

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
const SEASON_SECONDS = 22;        // 每个季节多少秒
const GROW_SECONDS = 30;          // 从种子长成大树需要多少秒（要在一季半内长成，别等长完已经入秋）

/* ---------------- 四季配色（春 / 夏 / 秋 / 冬） ---------------- */
const SEASONS = [
  { name: '春', sub: '万物发芽', skyTop: 0x6fbdf0, horizon: 0xd9f2ff, fog: 0xd6eefb, ground: 0x86c96a, sun: 0xfff0d2, sunI: 2.0, hemi: 0.72, snow: 0 },
  { name: '夏', sub: '枝繁叶茂', skyTop: 0x2f95d8, horizon: 0xbfe7f8, fog: 0xcfe9f5, ground: 0x54a344, sun: 0xffffff, sunI: 2.6, hemi: 0.80, snow: 0 },
  { name: '秋', sub: '叶子变红', skyTop: 0x7ea6dd, horizon: 0xffe3b8, fog: 0xf6e3ca, ground: 0x9c8a4a, sun: 0xffd39a, sunI: 2.05, hemi: 0.74, snow: 0 },
  { name: '冬', sub: '下雪了',   skyTop: 0x6f9cc4, horizon: 0xdcecf8, fog: 0xdbe9f4, ground: 0xf6fbff, sun: 0xdcecff, sunI: 1.35, hemi: 0.7, snow: 1 },
];

const palette = {
  skyTop: new THREE.Color(), horizon: new THREE.Color(), fog: new THREE.Color(),
  ground: new THREE.Color(), sun: new THREE.Color(),
  sunI: 0, hemi: 0, snow: 0,
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
  return out;
}

/* ---------------- 基础三件套 ---------------- */
const canvasHost = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
canvasHost.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcfe9f5, 20, 74);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 600);

/* ---------------- 天空 ---------------- */
function srgb(hex) { return new THREE.Color(hex).convertLinearToSRGB(); }
const skyUniforms = {
  topColor: { value: srgb(0x2f95d8) },
  horizonColor: { value: srgb(0xbfe7f8) },
};
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(320, 32, 20),
  new THREE.ShaderMaterial({
    uniforms: skyUniforms,
    side: THREE.BackSide, depthWrite: false, fog: false,
    vertexShader: /* glsl */`
      varying vec3 vPos;
      void main() { vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 topColor; uniform vec3 horizonColor;
      varying vec3 vPos;
      void main() {
        float h = normalize(vPos).y;
        float t = pow(clamp(smoothstep(-0.08, 0.55, h), 0.0, 1.0), 0.9);
        gl_FragColor = vec4(mix(horizonColor, topColor, t), 1.0);
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
  transparent: true,
}));
sunSprite.scale.setScalar(46);
scene.add(sunSprite);

/* ---------------- 光照 ---------------- */
const hemi = new THREE.HemisphereLight(0xbfe7f8, 0x4a7a3a, 0.7);
scene.add(hemi);

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

const rim = new THREE.DirectionalLight(0xfff0dd, 0.55);
rim.position.set(-14, 9, -16);
scene.add(rim);

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

  // 纵向的木质感纹理
  for (let i = 0; i < 90; i++) {
    ctx.strokeStyle = `rgba(${Math.random() > 0.5 ? '48,30,14' : '176,140,98'},${0.05 + Math.random() * 0.12})`;
    ctx.lineWidth = 0.7 + Math.random() * 2.4;
    const x = Math.random() * s;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.bezierCurveTo(x + 6, s * 0.33, x - 6, s * 0.66, x + 2, s);
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
  for (let i = 0; i < 4200; i++) {
    const x = rnd() * w, y = rnd() * h;
    const rr = 1.5 + rnd() * 7;
    const light = rnd() > 0.5;
    ctx.fillStyle = light
      ? `rgba(168,142,104,${0.05 + rnd() * 0.13})`
      : `rgba(28,18,10,${0.05 + rnd() * 0.16})`;
    ctx.beginPath();
    ctx.ellipse(x, y, rr, rr * (0.55 + rnd() * 0.7), rnd() * 3.14, 0, 6.283);
    ctx.fill();
    // 每颗团粒的下缘压一道暗边，读起来才有厚度
    ctx.fillStyle = 'rgba(18,11,6,0.10)';
    ctx.beginPath();
    ctx.ellipse(x + rr * 0.15, y + rr * 0.45, rr * 0.75, rr * 0.3, 0, 0, 6.283);
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
  for (let i = 0; i < 380; i++) {
    const x = rnd() * w, y = h * 0.1 + rnd() * h * 0.9;
    const rr = 1.4 + Math.pow(rnd(), 2.4) * 3.6;
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
  for (let i = 0; i < 14000; i++) {
    const x = rnd() * w, y = rnd() * h;
    ctx.fillStyle = rnd() > 0.5
      ? `rgba(22,14,8,${0.05 + rnd() * 0.12})`
      : `rgba(196,168,126,${0.04 + rnd() * 0.1})`;
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
  tex.repeat.set(3.0, 1);
  tex.anisotropy = 8;
  return tex;
}

const soilFaceMat = new THREE.MeshStandardMaterial({
  map: soilTexture(), roughness: 1, metalness: 0,
  color: 0xffffff, emissive: 0x53381f, emissiveIntensity: 0.62,
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
soilFace.receiveShadow = true;
scene.add(soilFace);

// 断面里半埋的小石子：只露一小截，近景时有真实的高光和投影
(() => {
  const rand = mulberry32(4242);
  const mat = new THREE.MeshStandardMaterial({ color: 0x9c8f7c, roughness: 0.85, metalness: 0, flatShading: true });
  const matDark = new THREE.MeshStandardMaterial({ color: 0x6d6153, roughness: 0.9, metalness: 0, flatShading: true });
  for (let i = 0; i < 70; i++) {
    const r = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.035 + Math.pow(rand(), 2) * 0.075, 0),
      rand() > 0.45 ? mat : matDark
    );
    r.position.set(randRange(rand, -11, 11), randRange(rand, -6.5, -0.25), randRange(rand, -0.035, 0.01));
    r.rotation.set(rand() * 3, rand() * 3, rand() * 3);
    r.scale.set(1.1 + rand() * 0.5, 0.8 + rand() * 0.4, 0.42);
    scene.add(r);
  }
})();

// 草皮层的剖面：一条深色草根带，把草地和土层自然接起来
const turfMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 1, metalness: 0 });
const turf = new THREE.Mesh(new THREE.BoxGeometry(ISLAND_R * 2.8, 0.055, 0.05), turfMat);
turf.position.set(0, -0.028, 0.035);
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

/* 远景山丘：打破地平线的死直线，同时被雾吃掉大半，只留一层柔和的剪影 */
const hillMat = new THREE.MeshStandardMaterial({ color: 0x8fb47a, roughness: 1, metalness: 0, flatShading: true });
const hills = new THREE.Group();
(() => {
  const rand = mulberry32(1919);
  for (let i = 0; i < 9; i++) {
    const z = -randRange(rand, 55, 96);
    const x = randRange(rand, -78, 78);
    const rx = randRange(rand, 16, 36);
    const ry = randRange(rand, 1.3, 3.2);
    const m = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 9), hillMat);
    m.position.set(x, -ry * 0.52, z);
    m.scale.set(rx, ry, rx * randRange(rand, 0.5, 0.8));
    m.rotation.y = rand() * 3;
    hills.add(m);
  }
  scene.add(hills);
})();

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
  const s = 128, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);
  const blades = 14;
  for (let i = 0; i < blades; i++) {
    const baseX = s * 0.5 + (Math.random() - 0.5) * s * 0.62;
    const h = s * (0.22 + Math.random() * 0.34);
    const lean = (Math.random() - 0.5) * s * 0.62;
    const w = 2.6 + Math.random() * 3.4;
    const g = ctx.createLinearGradient(0, s, 0, s - h);
    const tone = 0.7 + Math.random() * 0.3;
    g.addColorStop(0, `rgba(${52 * tone | 0},${86 * tone | 0},${38 * tone | 0},1)`);
    g.addColorStop(0.55, `rgba(${86 * tone | 0},${132 * tone | 0},${60 * tone | 0},1)`);
    g.addColorStop(1, `rgba(${128 * tone | 0},${172 * tone | 0},${92 * tone | 0},1)`);
    ctx.strokeStyle = g;
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(baseX, s);
    ctx.quadraticCurveTo(baseX + lean * 0.35, s - h * 0.6, baseX + lean, s - h);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
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

function buildGrass(seed) {
  const rand = mulberry32(seed);
  const COUNT = 5200;
  const mat = new THREE.MeshStandardMaterial({
    map: GRASS_TEX, alphaTest: 0.22, side: THREE.DoubleSide, roughness: 1, metalness: 0,
  });
  const mesh = new THREE.InstancedMesh(crossQuadGeometry(), mat, COUNT);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const ang = rand() * Math.PI;             // 0..π → 只铺 z<=0 的半圆
    const r = 1.05 + Math.pow(rand(), 1.0) * 17;
    // 越远越稀：用拒绝采样做出长距离渐隐，避免出现一圈"草皮圆边"
    if (rand() < smoothstep(5, 17, r) * 0.9) { i--; continue; }
    p.set(Math.cos(ang) * r, 0, -Math.sin(ang) * r);
    q.setFromAxisAngle(UP, rand() * Math.PI * 2);
    const far = Math.min(1, Math.max(0, (r - 2) / 14));
    const shrink = 1 - 0.3 * far;
    const k = (0.13 + rand() * 0.13) * shrink;   // 高度 13–26cm
    const w = (0.2 + rand() * 0.17) * shrink;    // 宽度 20–37cm
    s.set(w, k, w);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    const tint = 0.74 + rand() * 0.28;
    col.setRGB(tint * 0.92, tint, tint * 0.8);
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  return mesh;
}

/* ---------------- 叶子贴图与几何 ---------------- */
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

// 微微打卷的叶子，比纯平面有立体感
function leafGeometry() {
  const geo = new THREE.PlaneGeometry(1, 1.35, 3, 6);
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
  map: LEAF_TEX, alphaTest: 0.45, side: THREE.DoubleSide,
  roughness: 0.78, metalness: 0,
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
  color: 0x8f6a46, map: BARK_TEX, roughness: 0.95, metalness: 0,
});

let tree = null;   // 当前这棵树的所有数据

function buildTree(seed) {
  const rand = mulberry32(seed);
  const group = new THREE.Group();
  const branches = [];
  const leafSites = [];
  const geos = [];

  const MAX_DEPTH = 4;
  const DUR = [0.22, 0.22, 0.20, 0.18, 0.14];

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
    const radial = depth === 0 ? 12 : depth === 1 ? 9 : 6;
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
      // 锥度：一路缓慢变细，最后两环再猛烈收尖，避免枝梢像被切断的棍子
      const k = i / (rings - 1);
      radii.push(r0 * (1 - 0.46 * k) * (1 - 0.74 * Math.pow(k, 5)));
    }

    // 末端再补一个收成针尖的环：即便长到头，枝梢也是个尖，而不是敞口的管口
    pts.push(pts[rings - 1].clone().addScaledVector(d, step * 0.8));
    radii.push(Math.max(0.0016, r0 * 0.02));
    const ringCount = pts.length;

    const geo = sweepGeometry(pts, radii, radial);
    geos.push(geo);
    const mesh = new THREE.Mesh(geo, barkMat);
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
    return { end: pts[ringCount - 1].clone(), endDir: d.clone(), pts, radii };
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
    const { end, endDir, pts, radii } = makeBranch(start, dir, len, radius, depth, gStart, g1);

    // 叶子：沿枝条一圈圈长，朝向大致朝外
    if (depth >= 1) {
      const n = depth === 1 ? 11 : depth === 2 ? 18 : depth === 3 ? 34 : 46;
      for (let i = 0; i < n; i++) {
        const t = randRange(rand, depth === MAX_DEPTH ? 0.08 : depth === 1 ? 0.55 : 0.28, 1);
        const { p, tangent } = pointAt(pts, t);
        const perp = new THREE.Vector3().crossVectors(tangent, UP);
        if (perp.lengthSq() < 0.02) perp.set(1, 0, 0);
        perp.normalize().applyAxisAngle(tangent, rand() * Math.PI * 2);
        p.addScaledVector(perp, 0.03 + rand() * 0.2);
        const bladeDir = perp.clone()
          .multiplyScalar(randRange(rand, 0.65, 1.0))
          .addScaledVector(tangent, randRange(rand, -0.4, 0.6))
          .normalize();
        leafSites.push({ pos: p, dir: bladeDir, g: Math.min(0.82, gStart + 0.06), stag: rand() });
      }
    }

    // 枝梢的一小簇叶子：每根枝的顶端都不秃
    if (depth >= 1) {
      for (let i = 0; i < 5; i++) {
        const { p, tangent } = pointAt(pts, randRange(rand, 0.86, 1));
        const perp = new THREE.Vector3().crossVectors(tangent, UP);
        if (perp.lengthSq() < 0.02) perp.set(1, 0, 0);
        perp.normalize().applyAxisAngle(tangent, rand() * Math.PI * 2);
        p.addScaledVector(perp, 0.02 + rand() * 0.1);
        leafSites.push({
          pos: p, dir: perp.clone().addScaledVector(tangent, randRange(rand, -0.3, 0.5)).normalize(),
          g: Math.min(0.9, gStart + 0.08), stag: rand(),
        });
      }
    }

    if (depth >= MAX_DEPTH) return;

    const nextLen = len * randRange(rand, 0.58, 0.7);
    const nextR = radius * randRange(rand, 0.58, 0.7);

    // 主枝：比侧枝短、且略微偏斜，让树冠张开而不是一根杆顶个球
    if (depth <= 1) {
      const leadDir = childDir(endDir, randRange(rand, 0.14, 0.32), rand() * Math.PI * 2);
      leadDir.y -= 0.04 + 0.05 * depth;
      spawn(end, leadDir.normalize(), nextLen * 0.82, nextR * 1.0, depth + 1, g1);
    }

    // 侧枝：方位完全打乱（对生/轮生一眼就假），越往末梢越外张并轻微下垂
    const sides = depth === 0 ? 4 : depth === 1 ? 3 : 2;
    for (let i = 0; i < sides; i++) {
      const azim = rand() * Math.PI * 2;
      const tilt = randRange(rand, 0.68, 1.05);
      const at = depth === 0 ? randRange(rand, 0.3, 0.85) : randRange(rand, 0.22, 0.94);
      const { p, tangent } = pointAt(pts, at);
      const ri = Math.min(radii.length - 1, Math.max(0, Math.round(at * (radii.length - 1))));
      const localR = radii[ri];
      const d2 = childDir(tangent, tilt, azim);
      d2.y -= 0.02 + 0.02 * depth;
      spawn(
        p.clone().addScaledVector(tangent, -0.07),
        d2.normalize(),
        nextLen * randRange(rand, 0.92, 1.18),
        Math.max(0.024, localR * randRange(rand, 0.68, 0.86)),
        depth + 1, g1
      );
    }
  }

  // 树干
  const trunkLen = randRange(rand, 2.25, 2.55);
  spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(randRange(rand, -0.06, 0.06), 1, randRange(rand, -0.06, 0.06)).normalize(),
    trunkLen, randRange(rand, 0.21, 0.26), 0, 0.06);

  /* ---------------- 根系：折线扫掠 + 分级，能弯曲、能收细 ---------------- */
  const roots = [];
  // 老根颜色深、新根浅，和真实根系一样有深浅差
  const rootMatA = new THREE.MeshStandardMaterial({
    color: 0x8d6844, roughness: 0.95, metalness: 0, flatShading: true,
  });
  const rootMatB = new THREE.MeshStandardMaterial({
    color: 0xc0a279, roughness: 0.9, metalness: 0, flatShading: true,
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
      p.z = Math.min(0.3, Math.max(-0.02, p.z));
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
    const dur = [0.17, 0.10, 0.075, 0.05][Math.min(3, depth)];
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
    randRange(rand, 2.0, 2.4), 0.058, 0, 0.012
  );
  // 根颈四周的板根：贴着地面向外铺，让树"抓"住土
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + randRange(rand, -0.5, 0.5);
    rootChain(
      new THREE.Vector3(Math.cos(a) * 0.07, -0.06, 0.02 + Math.sin(a) * 0.05),
      new THREE.Vector3(Math.cos(a) * 1.1, -0.55, Math.sin(a) * 0.5).normalize(),
      randRange(rand, 0.7, 1.15), 0.041, 1, 0.13
    );
  }

  // 树干入土处的“根盘”，随树干一起变粗，把树干和细根接起来
  const flareGeo = new THREE.CylinderGeometry(0.36, 0.16, 0.62, 10, 1, false);
  flareGeo.translate(0, -0.31, 0);
  geos.push(flareGeo);
  const flare = new THREE.Mesh(flareGeo, barkMat);
  flare.position.set(0, 0.02, 0);
  flare.scale.setScalar(0.001);
  flare.castShadow = true;
  flare.receiveShadow = true;
  group.add(flare);

  /* 叶子实例化网格 */
  const count = Math.min(leafSites.length, 24000);
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
    leafData.push({
      pos: site.pos, quat, size: randRange(rand, 0.14, 0.24),
      grow: site.g, stag: site.stag, autumn, tone: randRange(rand, 0.82, 1.14),
      phase: rand() * Math.PI * 2, spin: randRange(rand, 0.4, 1.2),
    });
    leaves.setColorAt(i, c.setHex(0xffffff));
  }
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;

  /* ---------------- 果实（第二年秋天） ---------------- */
  const FRUIT_COUNT = 64;
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
  const outer = leafData.filter((d) => d.pos.y > 0.9 && Math.hypot(d.pos.x, d.pos.z) > 0.4);
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
      pos, size: randRange(rand, 0.058, 0.09),
      quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3)),
      phase: rand() * Math.PI * 2,
    });
    fruits.setColorAt(i, cc);
    stems.setColorAt(i, c.setHex(0xffffff));
  }
  if (fruits.instanceColor) fruits.instanceColor.needsUpdate = true;
  if (stems.instanceColor) stems.instanceColor.needsUpdate = true;

  /* 种子 & 子叶 */
  const seedMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.145, 20, 16),
    new THREE.MeshStandardMaterial({ map: seedTexture(), roughness: 0.45, metalness: 0.06 })
  );
  seedMesh.scale.set(1.0, 0.78, 1.3);
  seedMesh.position.set(0, 0.055, 0.07);
  seedMesh.rotation.set(0.42, 0.6, 0.15);
  seedMesh.castShadow = true;
  group.add(seedMesh);

  const cotyledonMat = leafMat.clone();
  const cotyledons = [];
  for (let i = 0; i < 2; i++) {
    const m = new THREE.Mesh(LEAF_GEO, cotyledonMat);
    m.scale.setScalar(0.001);
    m.position.set(i === 0 ? -0.26 : 0.26, 0.12, 0.04);
    m.rotation.set(i === 0 ? 0.35 : -0.35, i === 0 ? -1.15 : 1.15, i === 0 ? 0.85 : -0.85);
    group.add(m);
    cotyledons.push(m);
  }

  const result = {
    group, branches, leaves, leafData, roots, flare, rootMats: [rootMatA, rootMatB], seedMesh, cotyledons, cotyledonMat, geos,
    fruits, stems, fruitData, fruitGeo, fruitMat, stemGeo, stemMat,
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
  t.seedMesh.geometry.dispose();
  t.seedMesh.material.dispose();
  t.cotyledonMat.dispose();
  for (const m of t.rootMats) m.dispose();
  t.fruitGeo.dispose(); t.fruitMat.dispose();
  t.stemGeo.dispose(); t.stemMat.dispose();
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
const cam = { theta: 1.46, phi: 1.26, radius: 12.5, dir: 1, target: new THREE.Vector3(0, 3.3, 0) };
const THETA_MIN = Math.PI / 2 - 0.95, THETA_MAX = Math.PI / 2 + 0.95;
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
    cam.phi = clamp(cam.phi - dy * 0.005, 0.42, 1.40);
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

/* ---------------- 状态 ---------------- */
const seasonEl = document.getElementById('season');
const subEl = document.getElementById('sub');
const yearEl = document.getElementById('year');
let currentSeasonLabel = '';

function plant(seed) {
  disposeTree(tree);
  const rand = mulberry32(seed ^ 0x9e3779b9);
  scene.__grass && scene.remove(scene.__grass);
  scene.__grass = buildGrass(seed ^ 0x5f3759df);
  scene.add(scene.__grass);
  tree = buildTree(seed);
  for (const d of fallData) d.life = 0;
  for (let i = 0; i < FALL_COUNT; i++) fallLeaves.setMatrixAt(i, hideM);
  fallLeaves.instanceMatrix.needsUpdate = true;
}

let seedCounter = Math.floor(Math.random() * 100000);
plant(seedCounter);

document.getElementById('replant').addEventListener('click', () => {
  seedCounter = Math.floor(Math.random() * 100000);
  startTime = performance.now();
  plant(seedCounter);
});

/* ---------------- 主循环 ---------------- */
let startTime = performance.now();
const T0 = (() => { const v = parseFloat(new URLSearchParams(location.search).get('t0')); return isNaN(v) ? 0 : v; })();
// 截图用：带 &freeze 时时间钉死在 t0，画面不再随时间漂移
const FREEZE_T = /(^|[?&])freeze(=|&|$)/.test(location.search) ? T0 : null;
let prevT = 0;
const clock = { t: 0 };

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const _e = new THREE.Euler();
const _color = new THREE.Color();
const _green = new THREE.Color();
const _tip = new THREE.Vector3();

// 枝条的生长：前 i0 环照常显示，i0 之后的环全部塌到「前端点」，形成一根越伸越长的锥尖
function growBranch(b, k) {
  if (Math.abs(k - b.lastK) < 0.003) return;
  b.lastK = k;
  const attr = b.mesh.geometry.attributes.position;
  const arr = attr.array;
  const base = b.basePos;
  const n = b.rings, rad = b.radial;
  const f = Math.min(n - 1, Math.max(0, k * (n - 1)));
  const i0 = Math.min(n - 2, Math.floor(f));
  _tip.copy(b.pts[i0]).lerp(b.pts[i0 + 1], f - i0);
  // 锥尖再往前拉一截，生长中的枝头是尖的，不是平口
  if (i0 + 1 < n) {
    const tipLen = Math.min(0.16, (b.radii ? b.radii[i0] : 0.05) * 2.2);
    _tip.addScaledVector(b.pts[i0 + 1].clone().sub(b.pts[i0]).normalize(), tipLen);
  }
  const rs = 0.45 + 0.55 * Math.min(1, k * 1.7);   // 幼枝细、老枝粗
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
  // 定帧模式（?t0=N&freeze）：时间钉死在 N 秒，每帧完全一致 —— 截图才是可复现的
  const t = FREEZE_T !== null ? FREEZE_T : (now - startTime) / 1000 + T0;
  const dt = Math.min(0.05, Math.max(0.0001, t - prevT));
  prevT = t;

  /* —— 时间推进 —— */
  const p = (t / SEASON_SECONDS) % 4 / 4;           // 0..1 一年
  const yearIndex = Math.floor(t / (SEASON_SECONDS * 4)) + 1;
  const g = smoothstep(0, 1, clamp(t / GROW_SECONDS, 0, 1));  // 生长进度

  const pal = samplePalette(p, palette);

  /* —— 天空 / 光 —— */
  skyUniforms.topColor.value.copy(pal.skyTop).convertLinearToSRGB();
  skyUniforms.horizonColor.value.copy(pal.horizon).convertLinearToSRGB();
  scene.fog.color.copy(pal.fog);
  hemi.color.copy(pal.horizon);
  hemi.groundColor.copy(pal.ground).multiplyScalar(0.6);
  hemi.intensity = pal.hemi;
  sun.color.copy(pal.sun);
  sun.intensity = pal.sunI;

  // 太阳位置：夏天高、冬天低
  const sunElev = 0.42 + 0.52 * (0.5 + 0.5 * Math.cos((p - 0.25) * Math.PI * 2));
  const sunAz = 0.9 + Math.sin(t * 0.03) * 0.6;
  const sunDir = new THREE.Vector3(Math.cos(sunAz) * Math.cos(sunElev), Math.sin(sunElev), Math.sin(sunAz) * Math.cos(sunElev)).normalize();
  sun.position.copy(sunDir).multiplyScalar(34);
  sunSprite.position.copy(sunDir).multiplyScalar(150);
  sunSprite.material.color.copy(pal.sun);

  groundMat.color.copy(pal.ground);
  // 远山：取地表色的暗版，再往雾色里拉，形成柔和的空气透视
  hillMat.color.copy(pal.ground).multiplyScalar(0.84).lerp(pal.fog, 0.62);
  // 秋天草也枯黄一点
  const grassAutumn = smoothstep(0.44, 0.56, p) * (1 - smoothstep(0.76, 0.84, p));
  scene.__grass.material.color.setRGB(1 + 0.9 * grassAutumn, 1 + 0.12 * grassAutumn, 1 - 0.7 * grassAutumn);

  /* —— 树的生长（管状枝条按长度逐段显现） —— */
  let crownTop = 0;
  for (const b of tree.branches) {
    const k = smoothstep(b.g0, b.g1, g);
    b.mesh.visible = k > 0.001;
    if (!b.mesh.visible) continue;
    growBranch(b, k);
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
    const rk = 0.22 + 0.62 * fk;
    tree.flare.scale.set(rk, Math.max(0.0005, fk), rk);
    tree.flare.visible = fk > 0.02;
  }

  // 种子与子叶
  const seedFade = 1 - smoothstep(0.30, 0.58, g);   // 根和芽长出来后才慢慢蜷缩
  tree.seedMesh.scale.set(1.15 * seedFade, 0.8 * seedFade, 1.5 * seedFade);
  tree.seedMesh.visible = seedFade > 0.01;
  const coty = smoothstep(0.12, 0.2, g) * (1 - smoothstep(0.38, 0.55, g));
  const trunkTop = tree.branches[0] ? tree.branches[0].len * tree.branches[0].mesh.scale.y : 0.2;
  for (const m of tree.cotyledons) {
    m.scale.setScalar(Math.max(0.001, 0.3 * coty));
    m.position.y = Math.max(0.08, trunkTop * 0.94);
    m.visible = coty > 0.01;
  }
  tree.cotyledonMat.color.setHex(0x9fd35e);

  /* —— 叶子的数量与颜色 —— */
  // 春天发芽 → 夏天满树 → 秋天飘落 → 冬天光秃
  const leafAmount = p < 0.05 ? smoothstep(0.0, 0.05, p) : 1;
  const greenToDeep = smoothstep(0.10, 0.34, p);
  const blossomF = 1 - smoothstep(0.03, 0.10, p);

  const leaves = tree.leaves;
  for (let i = 0; i < tree.leafData.length; i++) {
    const d = tree.leafData[i];
    const growK = smoothstep(d.grow, d.grow + 0.14, g);
    const dropT = smoothstep(0.50 + d.stag * 0.12, 0.66 + d.stag * 0.12, p); // 秋天一片片落下
    const sc = d.size * growK * leafAmount * (1 - dropT);
    if (sc < 0.002) {
      _m.makeScale(0.0001, 0.0001, 0.0001);
      leaves.setMatrixAt(i, _m);
      continue;
    }
    const sway = Math.sin(t * 1.6 + d.phase) * 0.06 * growK;
    _p.copy(d.pos);
    _p.x += sway; _p.z += Math.cos(t * 1.3 + d.phase) * 0.05 * growK;
    _q.copy(d.quat);
    _e.set(sway * 0.8, sway * 0.5, sway * 0.6);
    _q.multiply(_q2.setFromEuler(_e));
    _s.setScalar(sc);
    _m.compose(_p, _q, _s);
    leaves.setMatrixAt(i, _m);

    // 颜色：嫩绿 → 深绿 → 秋色 → 花白
    const autumnK = smoothstep(0.46 + d.stag * 0.1, 0.62 + d.stag * 0.1, p);
    _color.setRGB(0.33, 0.62, 0.22).lerp(tmpA.setRGB(0.09, 0.34, 0.11), greenToDeep);
    _color.lerp(d.autumn, autumnK);
    if (blossomF > 0.01) _color.lerp(tmpB.setHex(0xffd9e6), blossomF * 0.75);
    _color.multiplyScalar(d.tone);
    leaves.setColorAt(i, _color);
  }
  leaves.instanceMatrix.needsUpdate = true;
  if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;

  /* —— 果实：第二年秋天结果，入冬前落光 —— */
  const fruitMature = yearIndex >= 2
    ? smoothstep(0.42, 0.55, p) * (1 - smoothstep(0.84, 0.94, p))
    : 0;
  {
    const fd = tree.fruitData;
    const fruits = tree.fruits, stems = tree.stems;
    const q0 = _q.set(0, 0, 0, 1);
    for (let i = 0; i < fd.length; i++) {
      const d = fd[i];
      const sc = d.size * fruitMature;
      if (sc < 0.002) {
        fruits.setMatrixAt(i, hideM);
        stems.setMatrixAt(i, hideM);
        continue;
      }
      const sway = Math.sin(t * 1.5 + d.phase) * 0.02 * fruitMature;
      _p.copy(d.pos);
      _p.x += sway;
      _m.compose(_p, d.quat, _s.setScalar(sc));
      fruits.setMatrixAt(i, _m);
      _p.y += sc * 0.92;
      _m.compose(_p, q0, _s.set(1, 1, 1));
      stems.setMatrixAt(i, _m);
    }
    fruits.instanceMatrix.needsUpdate = true;
    stems.instanceMatrix.needsUpdate = true;
  }

  /* —— 落叶 / 花瓣 生成 —— */
  const autumnSpawnRate = p > 0.52 && p < 0.88 ? (6 + 26 * smoothstep(0.52, 0.68, p) * (1 - smoothstep(0.74, 0.88, p))) : 0;
  const petalRate = p > 0.88 || p < 0.12 ? 10 : 0;   // 早春/冬末的花瓣（用粉色）
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
  const grassK = Math.max(0.0001, 1 - winterF);   // 冬天草整株缩到地里，不会留下绿色碎片
  scene.__grass.scale.set(grassK, grassK, grassK);
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
  treeRoot.rotation.z = Math.sin(t * 0.62) * 0.012 * wind;
  treeRoot.rotation.x = Math.cos(t * 0.48) * 0.010 * wind;

  /* —— 镜头 —— */
  // 剖面视角：镜头只在切面前方弧形范围内移动
  if (now - lastInteract > 6000) {
    cam.theta += cam.dir * 0.035 * dt;
    if (cam.theta > THETA_MAX) { cam.theta = THETA_MAX; cam.dir = -1; }
    if (cam.theta < THETA_MIN) { cam.theta = THETA_MIN; cam.dir = 1; }
  }
  // 竖屏（手机）时视野变窄，需要把镜头拉远，否则树会被裁掉
  const aspectNow = window.innerWidth / window.innerHeight;
  const aspectFix = aspectNow < 1.15 ? Math.min(1.7, Math.pow(1.15 / aspectNow, 0.62)) : 1;
  // 自动取景：从“贴着种子”开始，随着树长大一点点后拉
  const topY = Math.max(0.9, crownTop + 0.52);
  const BOTTOM_Y = -0.62 - 1.95 * smoothstep(0, 0.34, g);
  cam.target.y = (topY + BOTTOM_Y) / 2;
  const fitR = ((topY - BOTTOM_Y) * 1.0) / (2 * Math.tan((camera.fov * Math.PI) / 360));
  const effR = Math.max(2.6, fitR) * (cam.radius / 12.5) * aspectFix;
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

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    seedCounter = Math.floor(Math.random() * 100000);
    startTime = performance.now();
    plant(seedCounter);
  }
});

document.getElementById('loading').style.display = 'none';
if (window.matchMedia('(pointer: coarse)').matches) {
  document.getElementById('tips').textContent = '单指拖动可以环顾四周 · 双指可以靠近';
}
animate();
