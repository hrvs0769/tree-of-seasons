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

/* 确定性随机：所有程序化贴图 / 粒子 / 树形共用一条固定种子的 PRNG。
   这样 ?t0=N&freeze 每次加载都是同一棵树、同一片雨，截图 A/B 对比才有效；
   「再种一棵」仍然会沿同一条流继续取到新的种子。 */
const APP_SEED = 0x5EED2024;
const __appRng = mulberry32(APP_SEED);
Math.random = () => __appRng();

/* ---------------- 时间参数 ---------------- */
const DEBUG = /debug/.test(location.search);
const SEASON_SECONDS = 20;        // 每个季节多少秒（一年 = 80 秒，给雪景和细节留出时间）
const GROW_END = 120;             // 从种子到长成大树的故事时长（秒）
const GROW_END_P = 0.25;          // 长成时刚好是初夏（p=0.25）
const STORY_END = GROW_END + (1 - GROW_END_P) * SEASON_SECONDS * 4 + SEASON_SECONDS * 4 - 0.1; // ≈ 259.9 秒（停在第 2 年冬末）

// 生长曲线：不是匀速。种子/发芽/扎根/幼苗占大部分时间，后面抽枝成树越来越快，
// 这样小朋友能看清“种子怎么变成小苗”，而不是几秒钟就过去了。
const GROW_KEYS = [
  [0, 0.000],
  [16, 0.004],   // 种子吸水
  [32, 0.020],   // 破壳
  [56, 0.060],   // 主根向下、主干开始
  [76, 0.140],   // 破土、子叶
  [94, 0.280],   // 幼苗
  [108, 0.500],  // 小树
  [116, 0.750],  // 树冠展开
  [120, 1.000],  // 大树
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
  const f = smoothstep(0.86, 1.0, idx - Math.floor(idx));  // 本季保持 17s，最后 3s 才过渡，季末配色与 HUD 对齐
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
function appViewportSize() {
  return {
    w: Math.max(1, canvasHost.clientWidth || window.innerWidth),
    h: Math.max(1, canvasHost.clientHeight || window.innerHeight),
  };
}
const vp0 = appViewportSize();
renderer.setSize(vp0.w, vp0.h);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
canvasHost.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcfe9f5, 34, 205);

const camera = new THREE.PerspectiveCamera(38, vp0.w / vp0.h, 0.1, 600);

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
          // 三层不同尺度的 fbm，流速足够在 260s 内漂过几格；阈值按 fbm 的实际分布设定
          float n1 = fbm(uv * 1.25 + vec2(time * 0.016, time * 0.005));
          float n2 = fbm(uv * 3.10 + vec2(time * 0.026, -time * 0.009));
          float n3 = fbm(uv * 1.90 + vec2(time * 0.020, -time * 0.006));
          float n = n1 * 0.56 + n2 * 0.24 + n3 * 0.20;
          float lo = 0.40 - cloudCover * 0.14;
          float cover = smoothstep(lo, lo + 0.16, n);
          cover *= smoothstep(0.07, 0.36, dir.y);
          // 云底：迎光面暖白、背光面灰蓝
          float lit = pow(max(dot(dir, sunDir), 0.0), 2.0);
          vec3 cloudCol = mix(vec3(0.60, 0.66, 0.74), vec3(1.08, 1.04, 0.97), lit * 0.9 + cloudWarm * 0.3);
          col = mix(col, cloudCol, cover * 0.42);
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
  g.addColorStop(0.38, outer);
  g.addColorStop(0.72, 'rgba(255,246,220,0.16)');
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
  transparent: true, opacity: 0.78,
}));
sunSprite.scale.setScalar(6.5);
scene.add(sunSprite);

/* 太阳光芒：程序化生成放射状光束贴图，叠在太阳后面，逆光时更有“神光” */
function sunRaysTexture() {
  const s = 512, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);
  const cx = s / 2, cy = s / 2;
  // 锥形渐变的短光束，长短/角度都抖动；不再是 46 条笔直硬边的「贴纸放射线」
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2 + (Math.random() - 0.5) * 0.22;
    const len = s * (0.18 + Math.random() * 0.42);
    const w = 0.006 + Math.random() * 0.020;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(a);
    const g = ctx.createLinearGradient(0, 0, len, 0);
    g.addColorStop(0, `rgba(255,241,205,${0.10 + Math.random() * 0.10})`);
    g.addColorStop(0.34, `rgba(255,238,196,${0.025 + Math.random() * 0.04})`);
    g.addColorStop(1, 'rgba(255,238,196,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(0, -s * w * 0.5);
    ctx.lineTo(len, -s * w * 2.1);
    ctx.lineTo(len, s * w * 2.1);
    ctx.lineTo(0, s * w * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
  const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, s * 0.5);
  g2.addColorStop(0, 'rgba(255,245,215,0.42)');
  g2.addColorStop(0.26, 'rgba(255,228,170,0.12)');
  g2.addColorStop(1, 'rgba(255,228,170,0)');
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const sunRays = new THREE.Sprite(new THREE.SpriteMaterial({
  map: sunRaysTexture(), blending: THREE.AdditiveBlending, depthWrite: false, depthTest: true,
  fog: false, transparent: true, opacity: 0.32,
}));
sunRays.scale.setScalar(52);
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
sun.shadow.camera.left = -20; sun.shadow.camera.right = 20;
sun.shadow.camera.top = 18; sun.shadow.camera.bottom = -16;
sun.shadow.camera.near = 1; sun.shadow.camera.far = 110;
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
const SOIL_DEPTH = 12.0;   // 剖面加深：根系要一路扎到 -9.6 的含水层
const FACE_H_EXTRA = 2.5;
const WATER_TOP = -9.6;    // 潜水面（与 boundary idx4 的 -9.57 对齐）
const ROOT_FLOOR = -10.0; // 根尖入水 0.4

function soilTexture() {
  // 画布加高到 768px：剖面加深到 14.5 单位后仍保持足够细节密度。
  // repeat 改成 1×1（不再平铺 2.5 次），消除层界噪声在画面中间出现的纵向接缝。
  const w = 2048, h = 768, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const rnd = mulberry32(20240117);

  ctx.fillStyle = 'rgb(86,64,42)';
  ctx.fillRect(0, 0, w, h);

  // ---- 六层土壤：表土 / 心土 / 底土 / 毛管湿润带 / 含水饱和带 / 母质 ----
  // 层界用四个八度噪声做起伏，且下层起伏更大，避免「几条平行色带」。
  const boundary = (x, idx) => {
    const baseY = [0, 0.10, 0.42, 0.54, 0.66, 0.84, 1][idx] * h;
    const amp = idx <= 1 ? 0.55 : idx === 2 ? 0.95 : 1.25;
    const n1 = (fbm(x * 0.00110 + idx * 23.7, idx * 5.3) - 0.5) * 95 * amp;
    const n2 = (fbm(x * 0.00420 + idx * 11.1, idx * 8.9) - 0.5) * 70 * amp;
    const n3 = (fbm(x * 0.01200 + idx * 37.1, idx * 2.7) - 0.5) * 26 * amp;
    const n4 = (fbm(x * 0.04200 + idx * 7.7, idx * 13.1) - 0.5) * 7 * amp;
    return baseY + n1 + n2 + n3 + n4;
  };
  const horizons = [
    { top: -4, bottom: 1, col: 'rgb(96,70,44)' },   // 表土（提亮，微距下不再是一块黑）
    { top: 1, bottom: 2, col: 'rgb(112,84,54)' },  // 心土
    { top: 2, bottom: 3, col: 'rgb(126,100,66)' }, // 底土
    { top: 3, bottom: 4, col: 'rgb(92,84,64)' },   // 毛管湿润带
    { top: 4, bottom: 5, col: 'rgb(48,64,68)' },   // 含水饱和带（冷灰蓝）
    { top: 5, bottom: 6, col: 'rgb(26,42,52)' },   // 母质 / 基岩
  ];
  for (const hz of horizons) {
    ctx.fillStyle = hz.col;
    ctx.beginPath();
    const ti = hz.top;
    ctx.moveTo(0, ti === -4 ? -4 : boundary(0, ti));
    for (let x = 0; x <= w; x += 12) ctx.lineTo(x, ti === -4 ? -4 : boundary(x, ti));
    for (let x = w; x >= 0; x -= 12) ctx.lineTo(x, hz.bottom >= 6 ? h : boundary(x, hz.bottom));
    ctx.closePath();
    ctx.fill();
  }

  // ---- 层内低频色斑：让每一层内部也有明暗与色相变化 ----
  for (let i = 0; i < 240; i++) {
    const x = rnd() * w, y = rnd() * h;
    const rr = 50 + rnd() * 190;
    const warm = fbm(x * 0.0016, y * 0.0016) > 0.48;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
    g.addColorStop(0, warm ? 'rgba(158,130,92,0.10)' : 'rgba(28,22,16,0.10)');
    g.addColorStop(1, 'rgba(40,28,16,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, rr, 0, 6.283); ctx.fill();
  }

  // ---- 透镜体 / 侵蚀袋：层与层之间不是一条干净的分割线 ----
  for (let i = 0; i < 64; i++) {
    const x = rnd() * w;
    const layer = 1 + Math.floor(rnd() * 5);
    const y = boundary(x, layer) + (rnd() - 0.5) * 34;
    const rx = 36 + rnd() * 150;
    const ry = 6 + rnd() * 24;
    ctx.fillStyle = rnd() > 0.5 ? 'rgba(150,116,72,0.20)' : 'rgba(36,26,16,0.22)';
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, (rnd() - 0.5) * 0.22, 0, 6.283);
    ctx.fill();
  }

  // ---- 层界：做旧、断续的深色线，并加局部塌落断层 ----
  for (const yb of [1, 2, 3, 4, 5]) {
    ctx.strokeStyle = yb >= 4 ? 'rgba(16,30,36,0.20)' : 'rgba(16,10,5,0.20)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 8) {
      const yy = boundary(x, yb);
      if (x === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
    }
    ctx.stroke();
    for (let k = 0; k < 8; k++) {
      const x0 = rnd() * w;
      const y0 = boundary(x0, yb) + (rnd() - 0.5) * 10;
      ctx.strokeStyle = `rgba(16,10,5,${0.10 + rnd() * 0.18})`;
      ctx.lineWidth = 2 + rnd() * 3;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x0 + 10 + rnd() * 30, y0 + (rnd() - 0.5) * 24, x0 + 34 + rnd() * 80, y0 + (rnd() - 0.5) * 28);
      ctx.stroke();
    }
  }

  // ---- 生物扰动 / 根孔通道：锥形暗痕跨层切断层界 ----
  for (let i = 0; i < 20; i++) {
    const x = rnd() * w;
    const y0 = h * (0.04 + rnd() * 0.72);
    const len = 50 + rnd() * 130;
    const wd = 1 + rnd() * 3;
    const g = ctx.createLinearGradient(x, y0, x + (rnd() - 0.5) * 30, y0 + len);
    g.addColorStop(0, 'rgba(20,14,8,0.13)');
    g.addColorStop(1, 'rgba(20,14,8,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(x - wd, y0); ctx.lineTo(x + wd, y0);
    ctx.lineTo(x + (rnd() - 0.5) * 18 + wd * 0.3, y0 + len);
    ctx.lineTo(x + (rnd() - 0.5) * 18 - wd * 0.3, y0 + len);
    ctx.closePath(); ctx.fill();
  }

  // ---- 土块团粒：不规则团粒，靠明暗两层叠出体积 ----
  for (let i = 0; i < 13000; i++) {
    const x = rnd() * w, y = rnd() * h;
    const rr = 1.2 + rnd() * 4.6;
    const light = rnd() > 0.5;
    ctx.fillStyle = light
      ? `rgba(178,150,110,${0.05 + rnd() * 0.11})`
      : `rgba(28,18,10,${0.05 + rnd() * 0.13})`;
    ctx.beginPath();
    ctx.ellipse(x, y, rr, rr * (0.55 + rnd() * 0.7), rnd() * 3.14, 0, 6.283);
    ctx.fill();
  }

  // ---- 近景土粒（第一章微距会放大到整屏，必须清晰可见） ----
  for (let i = 0; i < 420; i++) {
    const x = rnd() * w;
    const y = rnd() * h * 0.13;
    const rr = 1.4 + rnd() * 5.2;
    const tone = 0.55 + rnd() * 0.45;
    ctx.fillStyle = `rgba(${(168 * tone) | 0},${(136 * tone) | 0},${(96 * tone) | 0},${0.34 + rnd() * 0.32})`;
    ctx.beginPath();
    ctx.ellipse(x, y, rr, rr * (0.6 + rnd() * 0.5), rnd() * 3.14, 0, 6.283);
    ctx.fill();
    ctx.fillStyle = 'rgba(22,14,7,0.34)';
    ctx.beginPath();
    ctx.ellipse(x + rr * 0.16, y + rr * 0.44, rr * 0.78, rr * 0.26, 0, 0, 6.283);
    ctx.fill();
    ctx.fillStyle = 'rgba(236,212,168,0.26)';
    ctx.beginPath();
    ctx.ellipse(x - rr * 0.30, y - rr * 0.34, rr * 0.46, rr * 0.20, 0, 0, 6.283);
    ctx.fill();
  }
  // 孔隙：暗洞 + 一圈亮边，微距下能读出「土是松的」
  for (let i = 0; i < 180; i++) {
    const x = rnd() * w, y = rnd() * h * 0.20;
    const rr = 1.0 + rnd() * 2.6;
    ctx.fillStyle = 'rgba(14,9,5,0.55)';
    ctx.beginPath(); ctx.ellipse(x, y, rr, rr * 0.8, rnd() * 3.14, 0, 6.283); ctx.fill();
    ctx.strokeStyle = 'rgba(196,166,122,0.28)';
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.ellipse(x, y - 0.5, rr * 1.2, rr * 0.9, 0, 0, 6.283); ctx.stroke();
  }

  // ---- 竖向干裂缝 ----
  for (let i = 0; i < 58; i++) {
    const x = rnd() * w;
    const y0 = h * (0.12 + rnd() * 0.78);
    const len = h * (0.03 + rnd() * 0.16);
    ctx.strokeStyle = `rgba(22,15,8,${0.10 + rnd() * 0.14})`;
    ctx.lineWidth = 0.8 + rnd() * 1.6;
    ctx.beginPath();
    ctx.moveTo(x, y0);
    ctx.bezierCurveTo(x + (rnd() - 0.5) * 14, y0 + len * 0.4, x + (rnd() - 0.5) * 18, y0 + len * 0.7, x + (rnd() - 0.5) * 22, y0 + len);
    ctx.stroke();
  }

  // ---- 石子：本体 + 受光面 + 落影；深部偏青灰 ----
  for (let i = 0; i < 820; i++) {
    const x = rnd() * w, y = h * 0.08 + rnd() * h * 0.92;
    const rr = 1.0 + Math.pow(rnd(), 2.6) * 2.8;
    const tone = 0.55 + rnd() * 0.4;
    const wet = y > h * 0.66;
    ctx.fillStyle = wet
      ? `rgba(${(108 * tone) | 0},${(124 * tone) | 0},${(124 * tone) | 0},0.72)`
      : `rgba(${(136 * tone) | 0},${(122 * tone) | 0},${(102 * tone) | 0},0.72)`;
    ctx.beginPath();
    ctx.ellipse(x, y, rr, rr * (0.62 + rnd() * 0.4), rnd() * 3.14, 0, 6.283);
    ctx.fill();
    ctx.fillStyle = 'rgba(255,248,228,0.18)';
    ctx.beginPath(); ctx.ellipse(x - rr * 0.3, y - rr * 0.34, rr * 0.5, rr * 0.3, 0, 0, 6.283); ctx.fill();
    ctx.fillStyle = 'rgba(16,10,5,0.20)';
    ctx.beginPath(); ctx.ellipse(x + rr * 0.18, y + rr * 0.5, rr * 0.8, rr * 0.28, 0, 0, 6.283); ctx.fill();
  }

  // ---- 细砂 ----
  for (let i = 0; i < 30000; i++) {
    const x = rnd() * w, y = rnd() * h;
    ctx.fillStyle = rnd() > 0.5 ? `rgba(24,16,9,${0.06 + rnd() * 0.12})` : `rgba(196,168,126,${0.03 + rnd() * 0.07})`;
    ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
  }

  // ---- 含水带细节：潜育斑 + 竖向渗流纹（冷色，不靠灯光） ----
  for (let i = 0; i < 150; i++) {
    const x = rnd() * w, y = h * (0.66 + rnd() * 0.34);
    const rr = 24 + rnd() * 90;
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
    g.addColorStop(0, `rgba(112,164,176,${0.05 + rnd() * 0.09})`);
    g.addColorStop(1, 'rgba(112,164,176,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, rr, 0, 6.283); ctx.fill();
  }
  for (let i = 0; i < 54; i++) {
    const x = rnd() * w, y0 = h * (0.63 + rnd() * 0.12);
    const len = 40 + rnd() * 150;
    const g = ctx.createLinearGradient(x, y0, x, y0 + len);
    g.addColorStop(0, 'rgba(164,206,216,0.10)');
    g.addColorStop(1, 'rgba(164,206,216,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x, y0, 1 + rnd() * 3, len);
  }

  // ---- 表土：薄薄一层腐殖质（比旧版轻得多）+ 一条亮的地表结皮 ----
  const top = ctx.createLinearGradient(0, 0, 0, h * 0.055);
  top.addColorStop(0, 'rgba(36,25,15,0.30)');
  top.addColorStop(0.5, 'rgba(52,37,22,0.11)');
  top.addColorStop(1, 'rgba(52,37,22,0)');
  ctx.fillStyle = top;
  ctx.fillRect(0, 0, w, h * 0.055);
  ctx.strokeStyle = 'rgba(214,184,138,0.30)';
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  for (let x = 0; x <= w; x += 6) ctx.lineTo(x, 2 + (fbm(x * 0.012, 1.7) - 0.5) * 5);
  ctx.stroke();
  for (let i = 0; i < 220; i++) {
    const x = rnd() * w, y = rnd() * h * 0.06;
    ctx.fillStyle = `rgba(216,188,142,${0.04 + rnd() * 0.07})`;
    ctx.beginPath(); ctx.ellipse(x, y, 1 + rnd() * 4, 1 + rnd() * 2, rnd() * 3.14, 0, 6.283); ctx.fill();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.flipY = true;       // 画布第一行对应 UV 顶部，表土在最上面
  tex.repeat.set(1, 1);   // 整幅铺满断面，避免非周期噪声在画面中间出现接缝
  tex.anisotropy = 8;
  return tex;
}

const SOIL_TEX = soilTexture();
const soilFaceMat = new THREE.MeshStandardMaterial({
  map: SOIL_TEX, bumpMap: SOIL_TEX, bumpScale: 0.14, roughness: 1, metalness: 0,
  color: 0xffffff, emissive: 0x2b241a, emissiveIntensity: 0.22, fog: false,
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

// 树根的接触阴影：随树一起长大；种子期只是一小片柔影，不再是 7×7 的大黑斑
let contactAO = null;
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
  contactAO = ao;
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
const FACE_H = SOIL_DEPTH + FACE_H_EXTRA;
const soilFace = new THREE.Mesh(new THREE.PlaneGeometry(ISLAND_R * 2.8, FACE_H), soilFaceMat);
soilFace.position.set(0, -FACE_H / 2, 0);
soilFace.receiveShadow = false;   // 断面是垂直面，树冠投影落在上面会变成一块脏斑；用内置 AO 已足够
scene.add(soilFace);

// 断面里半埋的小石子：只露一小截，近景时有真实的高光和投影（合批成 1 个 draw call）
(() => {
  const rand = mulberry32(4242);
  const COUNT = 120;
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.88, metalness: 0, flatShading: true });
  const mesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), mat, COUNT);
  mesh.receiveShadow = false;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const r = 0.018 + Math.pow(rand(), 2) * 0.042;
    p.set(randRange(rand, -13, 13), randRange(rand, -12.5, -0.70), randRange(rand, -0.035, 0.01));
    q.setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3));
    s.set(r * (1.1 + rand() * 0.5), r * (0.8 + rand() * 0.4), r * 0.42);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    col.setHex(rand() > 0.45 ? 0x4d4234 : 0x342c22);
    mesh.setColorAt(i, col);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  scene.add(mesh);
})();

/* 断面里的 3D 土团粒：近景有真正的颗粒起伏，而不是一张平贴图 */
(() => {
  const rand = mulberry32(9091);
  const COUNT = 680;
  const geo = new THREE.IcosahedronGeometry(1, 0);
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.95, metalness: 0, flatShading: true, vertexColors: false });
  const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    p.set(randRange(rand, -13, 13), randRange(rand, -13.5, -0.25), randRange(rand, 0.005, 0.055));
    q.setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3));
    const r = 0.018 + Math.pow(rand(), 2.2) * 0.070;
    s.set(r * randRange(rand, 0.9, 1.6), r * randRange(rand, 0.4, 0.8), r * 0.45);
    m.compose(p, q, s);
    mesh.setMatrixAt(i, m);
    const v = 0.34 + rand() * 0.42;
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
    const top = -0.015 + n * 0.34;
    const bot = -0.10 + n * 0.12;
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
  side.addColorStop(0.0, 'rgba(8,5,3,0.30)');
  side.addColorStop(0.14, 'rgba(8,5,3,0.13)');
  side.addColorStop(0.34, 'rgba(8,5,3,0.02)');
  side.addColorStop(0.66, 'rgba(8,5,3,0.02)');
  side.addColorStop(0.86, 'rgba(8,5,3,0.13)');
  side.addColorStop(1.0, 'rgba(8,5,3,0.30)');
  ctx.fillStyle = side;
  ctx.fillRect(0, 0, w, h);

  // 顶部只留很轻的一层遮挡（旧版 0.22×3 单位是第一章「黑带」的元凶之一）
  const topBand = ctx.createLinearGradient(0, 0, 0, h * 0.10);
  topBand.addColorStop(0, 'rgba(6,4,2,0.10)');
  topBand.addColorStop(1, 'rgba(6,4,2,0)');
  ctx.fillStyle = topBand;
  ctx.fillRect(0, 0, w, h * 0.10);

  // 只在剖面最底部收暗，吃掉硬边；含水层(-9.6)以上保持明亮
  const deep = ctx.createLinearGradient(0, h * 0.80, 0, h);
  deep.addColorStop(0, 'rgba(4,3,2,0)');
  deep.addColorStop(1, 'rgba(4,3,2,0.55)');
  ctx.fillStyle = deep;
  ctx.fillRect(0, h * 0.80, w, h * 0.20);
  const edge = ctx.createLinearGradient(0, h * 0.94, 0, h);
  edge.addColorStop(0, 'rgba(4,3,2,0)');
  edge.addColorStop(1, 'rgba(4,3,2,0.92)');
  ctx.fillStyle = edge;
  ctx.fillRect(0, h * 0.94, w, h * 0.06);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const shade = new THREE.Mesh(
    new THREE.PlaneGeometry(ISLAND_R * 2.8, SOIL_DEPTH + 5),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false })
  );
  shade.position.set(0, -(SOIL_DEPTH + 5) / 2 - 0.02, 0.028);
  scene.add(shade);
})();

/* ---------------- 地下水层：水面反光 / 渗流波纹 / 气泡 / 根尖吸水光点 ----------------
   全部模块级建一次（换树不重建），z 位于 AO 贴片(0.028)之前、根系(0.05~0.62)之后。
   一律用不受灯光影响的加色材质，冷灰蓝的含水层才不会被暖色补光洗掉。 */
let waterSheenMat = null;
const waterGroup = new THREE.Group();
scene.add(waterGroup);

const waterGlowMat = new THREE.MeshBasicMaterial({
  color: 0xa8d8e8, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
  depthWrite: false, fog: false, side: THREE.DoubleSide,
});
const waterGlow = new THREE.Mesh(new THREE.PlaneGeometry(ISLAND_R * 2.8, 0.22), waterGlowMat);
waterGlow.position.set(0, WATER_TOP, 0.030);
waterGroup.add(waterGlow);

const waterEdgeMat = new THREE.MeshBasicMaterial({
  color: 0xdff4ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
  depthWrite: false, fog: false,
});
const waterEdge = new THREE.Mesh(new THREE.PlaneGeometry(ISLAND_R * 2.8, 0.024), waterEdgeMat);
waterEdge.position.set(0, WATER_TOP + 0.11, 0.031);
waterGroup.add(waterEdge);

(() => {
  const c = document.createElement('canvas');
  c.width = 4; c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 128);
  g.addColorStop(0, 'rgba(150,206,222,0.55)');
  g.addColorStop(0.35, 'rgba(96,158,180,0.22)');
  g.addColorStop(1, 'rgba(60,110,140,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  waterSheenMat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending,
    depthWrite: false, fog: false,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(ISLAND_R * 2.8, 2.6), waterSheenMat);
  m.position.set(0, WATER_TOP - 1.15, 0.0305);
  waterGroup.add(m);
})();

const waterRippleUniforms = { uTime: { value: 0 }, uOpacity: { value: 0 } };
const waterRippleMat = new THREE.ShaderMaterial({
  uniforms: waterRippleUniforms, transparent: true, depthWrite: false, fog: false,
  blending: THREE.AdditiveBlending,
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: `
    uniform float uTime; uniform float uOpacity; varying vec2 vUv;
    void main() {
      float y = vUv.y;
      float w1 = sin(y * 46.0 - uTime * 1.4 + sin(vUv.x * 22.0 + uTime * 0.35) * 1.6);
      float w2 = sin(y * 87.0 - uTime * 2.1 + vUv.x * 13.0);
      float band = smoothstep(0.55, 0.98, w1) * 0.55 + smoothstep(0.75, 1.0, w2) * 0.25;
      float fade = smoothstep(0.0, 0.15, y) * (1.0 - smoothstep(0.55, 1.0, y));
      gl_FragColor = vec4(0.62, 0.86, 0.96, band * fade * uOpacity);
    }`,
});
const waterRipples = new THREE.Mesh(new THREE.PlaneGeometry(ISLAND_R * 2.8, 2.4), waterRippleMat);
waterRipples.position.set(0, WATER_TOP - 1.15, 0.032);
waterGroup.add(waterRipples);

const WATER_BUBBLES = 150;
const bubbleBase = new Float32Array(WATER_BUBBLES * 4);
{
  const rnd = mulberry32(0x5ea1);
  for (let i = 0; i < WATER_BUBBLES; i++) {
    bubbleBase[i * 4] = (rnd() - 0.5) * 26;
    bubbleBase[i * 4 + 1] = rnd();
    bubbleBase[i * 4 + 2] = 0.10 + rnd() * 0.28;
    bubbleBase[i * 4 + 3] = rnd() * 6.283;
  }
}
const bubbleGeo = new THREE.BufferGeometry();
const bubblePos = new Float32Array(WATER_BUBBLES * 3);
bubbleGeo.setAttribute('position', new THREE.BufferAttribute(bubblePos, 3));
const bubbleMat = new THREE.PointsMaterial({
  size: 0.055, map: circleTexture(), color: 0xc6ecfa, transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending, fog: false,
});
const waterBubbles = new THREE.Points(bubbleGeo, bubbleMat);
waterBubbles.frustumCulled = false;
waterGroup.add(waterBubbles);

const TIP_GLOW = 72;
const tipGeo = new THREE.BufferGeometry();
{
  const rnd = mulberry32(0x71f0);
  const pos = new Float32Array(TIP_GLOW * 3);
  for (let i = 0; i < TIP_GLOW; i++) {
    pos[i * 3] = (rnd() - 0.5) * 17;
    pos[i * 3 + 1] = WATER_TOP + 0.18 + rnd() * 0.75;
    pos[i * 3 + 2] = 0.30 + rnd() * 0.28;
  }
  tipGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
}
const tipMat = new THREE.PointsMaterial({
  size: 0.075, map: circleTexture(), color: 0xd8f2ff, transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, blending: THREE.AdditiveBlending, fog: false,
});
const tipGlow = new THREE.Points(tipGeo, tipMat);
tipGlow.frustumCulled = false;
waterGroup.add(tipGlow);
for (const o of waterGroup.children) o.raycast = () => {};

/* ---------------- 天空与树上的生机：飞鸟群 / 栖息鸟 / 蝴蝶 / 蜜蜂 / 瓢虫 ----------------
   全部是 t 的闭式函数（不用 dt 积分、不用每帧 Math.random 定位），
   所以 ?t0=N&freeze、拖动进度条、四季合影都能得到完全一致的画面。 */
function birdTexture() {
  const w = 128, h = 64, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.strokeStyle = '#3b4854';
  ctx.lineWidth = 6; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(9, 30);
  ctx.quadraticCurveTo(36, 8, 64, 34);
  ctx.quadraticCurveTo(92, 8, 119, 30);
  ctx.stroke();
  ctx.fillStyle = '#33404b';
  ctx.beginPath(); ctx.ellipse(64, 35, 7, 4, 0, 0, 6.283); ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function perchBirdTexture() {
  const w = 128, h = 96, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#40566a';
  ctx.beginPath(); ctx.ellipse(60, 58, 30, 19, -0.16, 0, 6.283); ctx.fill();       // 身体
  ctx.beginPath(); ctx.arc(88, 40, 12, 0, 6.283); ctx.fill();                      // 头
  ctx.fillStyle = '#e0a445';
  ctx.beginPath(); ctx.moveTo(99, 38); ctx.lineTo(118, 42); ctx.lineTo(99, 47); ctx.closePath(); ctx.fill(); // 喙
  ctx.fillStyle = '#6e8599';
  ctx.beginPath(); ctx.ellipse(54, 55, 22, 10, -0.20, 0, 6.283); ctx.fill();       // 翅
  ctx.fillStyle = '#33485c';
  ctx.beginPath(); ctx.moveTo(36, 52); ctx.lineTo(8, 42); ctx.lineTo(12, 70); ctx.closePath(); ctx.fill(); // 尾
  ctx.fillStyle = '#f7fbff';
  ctx.beginPath(); ctx.arc(91, 37, 2.6, 0, 6.283); ctx.fill();
  ctx.fillStyle = '#101820';
  ctx.beginPath(); ctx.arc(92, 37, 1.3, 0, 6.283); ctx.fill();
  ctx.strokeStyle = '#3a3026'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(54, 75); ctx.lineTo(52, 88); ctx.moveTo(68, 75); ctx.lineTo(70, 88); ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function butterflyTexture() {
  const w = 128, h = 96, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const wing = (cx, cy, rx, ry, col) => {
    ctx.fillStyle = col;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, 6.283); ctx.fill();
    ctx.fillStyle = 'rgba(255,250,225,0.85)';
    ctx.beginPath(); ctx.arc(cx + rx * 0.35, cy - ry * 0.25, rx * 0.16, 0, 6.283); ctx.fill();
    ctx.strokeStyle = 'rgba(74,42,20,0.65)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, 6.283); ctx.stroke();
  };
  wing(40, 34, 26, 21, '#ef9a3c'); wing(88, 34, 26, 21, '#ef9a3c');
  wing(45, 66, 20, 16, '#f4c05a'); wing(83, 66, 20, 16, '#f4c05a');
  ctx.fillStyle = '#4b3524';
  ctx.beginPath(); ctx.ellipse(64, 48, 4, 26, 0, 0, 6.283); ctx.fill();
  ctx.strokeStyle = '#4b3524'; ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.moveTo(62, 24); ctx.quadraticCurveTo(54, 10, 48, 12);
  ctx.moveTo(66, 24); ctx.quadraticCurveTo(74, 10, 80, 12); ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function beeTexture() {
  const w = 96, h = 64, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(226,244,255,0.75)';
  ctx.beginPath(); ctx.ellipse(40, 22, 18, 9, -0.5, 0, 6.283); ctx.fill();
  ctx.beginPath(); ctx.ellipse(58, 22, 18, 9, 0.5, 0, 6.283); ctx.fill();
  ctx.fillStyle = '#e8b62c';
  ctx.beginPath(); ctx.ellipse(48, 38, 24, 13, 0, 0, 6.283); ctx.fill();
  ctx.fillStyle = '#38291a';
  for (const x of [36, 46, 56]) { ctx.beginPath(); ctx.ellipse(x, 38, 3.4, 12, 0, 0, 6.283); ctx.fill(); }
  ctx.beginPath(); ctx.arc(70, 34, 7, 0, 6.283); ctx.fill();
  ctx.strokeStyle = '#38291a'; ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.moveTo(72, 28); ctx.quadraticCurveTo(80, 18, 84, 20); ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function ladybugTexture() {
  const w = 64, h = 64, c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#20201e';
  ctx.beginPath(); ctx.arc(32, 30, 10, 0, 6.283); ctx.fill();
  ctx.fillStyle = '#d8382e';
  ctx.beginPath(); ctx.ellipse(32, 38, 20, 18, 0, 0, 6.283); ctx.fill();
  ctx.fillStyle = '#20201e';
  ctx.beginPath(); ctx.moveTo(32, 21); ctx.lineTo(32, 56); ctx.lineWidth = 2.5; ctx.stroke();
  for (const [x, y] of [[20, 32], [44, 32], [22, 45], [42, 45], [32, 49]]) {
    ctx.beginPath(); ctx.arc(x, y, 3.2, 0, 6.283); ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const creatureGroup = new THREE.Group();
scene.add(creatureGroup);
function makeCreature(tex, count, size, opacity = 1) {
  const mat = new THREE.MeshBasicMaterial({
    map: tex, transparent: true, opacity, depthWrite: false, fog: false,
    side: THREE.DoubleSide, alphaTest: 0.02,
  });
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(size, size * 0.62), mat, count);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.raycast = () => {};
  for (let i = 0; i < count; i++) mesh.setMatrixAt(i, new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001));
  creatureGroup.add(mesh);
  return mesh;
}
const BIRD_TEX = birdTexture();
const PERCH_TEX = perchBirdTexture();
const skyBirds = makeCreature(BIRD_TEX, 14, 1.0);
const perchBirds = makeCreature(PERCH_TEX, 5, 0.88);
const butterflies = makeCreature(butterflyTexture(), 7, 0.70);
const bees = makeCreature(beeTexture(), 5, 0.46);
const ladybugs = makeCreature(ladybugTexture(), 5, 0.45);
const creatureRng = mulberry32(0xB17D);
const creatureJitter = [];
for (let i = 0; i < 40; i++) creatureJitter.push(creatureRng() * 2 - 1);
const creaturePhase = [];
for (let i = 0; i < 40; i++) creaturePhase.push(creatureRng() * Math.PI * 2);

// 「偶尔飞过」：三个窗口各飞一群；雨天与隆冬不出鸟
const BIRD_WINDOWS = [[46, 84], [128, 158], [196, 232]];
function birdFlightAt(t) {
  let best = { u: 0, env: 0, idx: -1 };
  for (let i = 0; i < BIRD_WINDOWS.length; i++) {
    const [s0, e0] = BIRD_WINDOWS[i];
    if (t < s0 || t > e0) continue;
    const u = (t - s0) / (e0 - s0);
    const env = smoothstep(0, 0.12, u) * (1 - smoothstep(0.88, 1, u));
    if (env > best.env) best = { u, env, idx: i };
  }
  return best;
}

/* 树荫 + 光斑：夏天树冠在地面投下的软暗斑，直接兑现「树荫下凉快极了」 */
function dappleTexture() {
  const s = 256, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, s * 0.05, s / 2, s / 2, s * 0.5);
  g.addColorStop(0, 'rgba(18,30,14,0.62)');
  g.addColorStop(0.55, 'rgba(20,32,16,0.34)');
  g.addColorStop(1, 'rgba(20,32,16,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
  const rnd = mulberry32(0xd4bb1e);
  for (let i = 0; i < 90; i++) {
    const x = rnd() * s, y = rnd() * s;
    const r = 2 + rnd() * 9;
    const d = Math.hypot(x - s / 2, y - s / 2) / (s * 0.5);
    if (d > 0.95) continue;
    const gl = ctx.createRadialGradient(x, y, 0, x, y, r);
    gl.addColorStop(0, `rgba(255,244,198,${0.05 + rnd() * 0.13})`);
    gl.addColorStop(1, 'rgba(255,244,198,0)');
    ctx.fillStyle = gl;
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const treeShadeMat = new THREE.MeshBasicMaterial({
  map: dappleTexture(), transparent: true, opacity: 0, depthWrite: false, fog: false,
});
const treeShade = new THREE.Mesh(new THREE.PlaneGeometry(15, 8), treeShadeMat);
treeShade.rotation.x = -Math.PI / 2;
treeShade.position.set(0, 0.028, -4.0);
treeShade.raycast = () => {};
scene.add(treeShade);

/* 云影：和天空的云同一个方向缓慢飘过地面，天地不再脱节 */
function cloudShadowTex() {
  const s = 128, c = document.createElement('canvas');
  c.width = c.height = s;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(20,28,34,0.55)');
  g.addColorStop(1, 'rgba(20,28,34,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const cloudShadowMats = [];
const cloudShadowMeshes = [];
for (let i = 0; i < 3; i++) {
  const mat = new THREE.MeshBasicMaterial({
    map: cloudShadowTex(), transparent: true, opacity: 0, depthWrite: false, fog: false,
  });
  cloudShadowMats.push(mat);
  const m = new THREE.Mesh(new THREE.PlaneGeometry([16, 22, 28][i], [9, 12, 15][i]), mat);
  m.rotation.x = -Math.PI / 2;
  m.position.set(0, 0.035 + i * 0.001, -12 - i * 5);
  m.raycast = () => {};
  scene.add(m);
  cloudShadowMeshes.push(m);
}

/* 飞絮：春末飘起来的蒲公英种子，比粉色花瓣更贴合物候 */
const FLUFF_COUNT = 36;
const fluffGeo = new THREE.BufferGeometry();
const fluffBase = new Float32Array(FLUFF_COUNT * 4);
{
  const rnd = mulberry32(0xf1ff);
  for (let i = 0; i < FLUFF_COUNT; i++) {
    fluffBase[i * 4] = (rnd() - 0.5) * 22;
    fluffBase[i * 4 + 1] = rnd();
    fluffBase[i * 4 + 2] = -2 - rnd() * 12;
    fluffBase[i * 4 + 3] = rnd() * 6.283;
  }
}
const fluffPos = new Float32Array(FLUFF_COUNT * 3);
fluffGeo.setAttribute('position', new THREE.BufferAttribute(fluffPos, 3));
const fluffMat = new THREE.PointsMaterial({
  size: 0.075, map: circleTexture(), color: 0xfffaf0, transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, fog: false,
});
const fluff = new THREE.Points(fluffGeo, fluffMat);
fluff.frustumCulled = false;
fluff.raycast = () => {};
scene.add(fluff);

/* 结尾「新的轮回」：土面冒出一株小新芽 + 一圈柔光 */
const epilogueGroup = new THREE.Group();
{
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x6fa83c, roughness: 0.9 });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.026, 0.62, 6), stemMat);
  stem.position.y = 0.31;
  epilogueGroup.add(stem);
  const leafMat2 = new THREE.MeshStandardMaterial({ color: 0x9ed45a, roughness: 0.85, side: THREE.DoubleSide });
  for (const sgn of [-1, 1]) {
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), leafMat2);
    l.scale.set(1.5, 0.32, 0.85);
    l.position.set(sgn * 0.15, 0.60, 0);
    l.rotation.z = sgn * 0.55;
    epilogueGroup.add(l);
  }
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: radialTexture('rgba(210,255,180,0.55)', 'rgba(180,240,150,0.18)'),
    blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0.7, fog: false,
  }));
  halo.scale.setScalar(1.5);
  halo.position.y = 0.45;
  epilogueGroup.add(halo);
}
epilogueGroup.position.set(1.6, 0.01, -0.6);
epilogueGroup.visible = false;
scene.add(epilogueGroup);

/* 落果里的新种子：第 13 章熟果落地后，几粒种子滚到土面 */
const SEED_DROP = 26;
const seedDropGeo = new THREE.BufferGeometry();
const seedDropBase = new Float32Array(SEED_DROP * 4);
{
  const rnd = mulberry32(0x5eed);
  for (let i = 0; i < SEED_DROP; i++) {
    seedDropBase[i * 4] = (rnd() - 0.5) * 6;
    seedDropBase[i * 4 + 1] = rnd();
    seedDropBase[i * 4 + 2] = -0.4 - rnd() * 2.4;
    seedDropBase[i * 4 + 3] = rnd() * 6.283;
  }
}
const seedDropPos = new Float32Array(SEED_DROP * 3);
seedDropGeo.setAttribute('position', new THREE.BufferAttribute(seedDropPos, 3));
const seedDropMat = new THREE.PointsMaterial({
  size: 0.075, map: circleTexture(), color: 0xc79a5c, transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, fog: false,
});
const seedDrop = new THREE.Points(seedDropGeo, seedDropMat);
seedDrop.frustumCulled = false;
seedDrop.raycast = () => {};
scene.add(seedDrop);

let birdWorldPoints = [];
let insectWorldPoints = [];

/* 表土近景细节：草根细丝 + 半埋土粒，第一章微距镜头里能看清「种子落在松土里」 */
(() => {
  const rnd = mulberry32(0x5eed01);
  const seg = [];
  for (let i = 0; i < 130; i++) {
    const nearCenter = i < 70;
    const x = nearCenter ? (rnd() - 0.5) * 3.0 : (rnd() - 0.5) * 26;
    const z = 0.055 + rnd() * 0.05;
    const len = 0.10 + rnd() * 0.34;
    const bend = (rnd() - 0.5) * 0.10;
    seg.push(x, -0.02, z, x + bend, -0.02 - len, z + (rnd() - 0.5) * 0.02);
    if (rnd() > 0.55) {
      const mid = len * (0.4 + rnd() * 0.3);
      seg.push(x + bend * 0.5, -0.02 - mid, z, x + bend * 0.5 + (rnd() - 0.5) * 0.10, -0.02 - mid - 0.06, z);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  const roots = new THREE.LineSegments(g, new THREE.LineBasicMaterial({
    color: 0x8a7450, transparent: true, opacity: 0.34, depthWrite: false, fog: false,
  }));
  roots.raycast = () => {};
  scene.add(roots);

  const COUNT = 105;
  const crumbMat = new THREE.MeshStandardMaterial({ color: 0x6d5438, roughness: 1, flatShading: true });
  const crumbs = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), crumbMat, COUNT);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pv = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const nearCenter = i < 85;
    pv.set(nearCenter ? (rnd() - 0.5) * 2.4 : (rnd() - 0.5) * 24, -0.02 - rnd() * 0.30, 0.055 + rnd() * 0.045);
    const r = 0.005 + Math.pow(rnd(), 2) * 0.020;
    q.setFromEuler(new THREE.Euler(rnd() * 3, rnd() * 3, rnd() * 3));
    sc.set(r * 1.4, r * 0.8, r * 0.5);
    m.compose(pv, q, sc);
    crumbs.setMatrixAt(i, m);
    col.setHex(rnd() > 0.5 ? 0x8a6c47 : 0x5a422c);
    crumbs.setColorAt(i, col);
  }
  crumbs.instanceMatrix.needsUpdate = true;
  if (crumbs.instanceColor) crumbs.instanceColor.needsUpdate = true;
  crumbs.raycast = () => {};
  scene.add(crumbs);
})();

/* 远景山脊：多层渐变山体 + 雪线 + 空气透视
   不是一排剪影，而是用「底部雾色 → 山体色」的竖向渐变做出体积感；
   远山有雪线，中景是柔和丘陵，近景是偏暗的草坡，三层拉开空间。 */
const ridgeGroup = new THREE.Group();
const ridgeMats = [];
function makeRidge(radius, baseY, height, seed, colors, opacity, snowStrength) {
  const seg = 256;
  const rows = 7;
  const rand = mulberry32(seed);
  const off = rand() * 100;
  const pos = [], idx = [];
  for (let j = 0; j <= seg; j++) {
    const a = (j / seg) * Math.PI * 2;
    const x = Math.cos(a) * radius;
    const z = Math.sin(a) * radius;
    const n1 = fbm(Math.cos(a) * 3.3 + off, Math.sin(a) * 3.3 + off * 0.7);
    const n2 = fbm(Math.cos(a) * 8.6 + off * 2.0, Math.sin(a) * 8.6);
    const ridge = 1 - Math.abs(2 * n1 - 1);      // 1 - |2n-1| 产生尖一点的脊线
    const h = baseY + height * (0.10 + 0.90 * Math.pow(ridge * 0.72 + n2 * 0.28, 1.55));
    for (let r = 0; r <= rows; r++) {
      const f = r / rows;
      const y = -9 + (h + 9) * f;
      pos.push(x, y, z);
    }
  }
  for (let j = 0; j < seg; j++) {
    const a = j * (rows + 1);
    const b = (j + 1) * (rows + 1);
    for (let r = 0; r < rows; r++) {
      idx.push(a + r, a + r + 1, b + r, a + r + 1, b + r + 1, b + r);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uBottomColor: { value: new THREE.Color(colors.bottom) },
      uTopColor: { value: new THREE.Color(colors.top) },
      uSnowColor: { value: new THREE.Color(colors.snow || 0xf4fbff) },
      uBaseY: { value: baseY },
      uHeight: { value: height },
      uSnowLine: { value: baseY + height * (colors.snowLine ?? 0.55) },
      uSnowStrength: { value: snowStrength || 0 },
      uOpacity: { value: opacity },
    },
    vertexShader: /* glsl */`
      varying float vT;
      varying float vY;
      uniform float uBaseY;
      uniform float uHeight;
      void main() {
        vY = position.y;
        vT = clamp((position.y - uBaseY) / max(0.001, uHeight), 0.0, 1.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */`
      uniform vec3 uBottomColor;
      uniform vec3 uTopColor;
      uniform vec3 uSnowColor;
      uniform float uSnowLine;
      uniform float uSnowStrength;
      uniform float uOpacity;
      varying float vT;
      varying float vY;
      void main() {
        vec3 col = mix(uBottomColor, uTopColor, smoothstep(0.0, 1.0, vT));
        float snow = smoothstep(uSnowLine - 1.0, uSnowLine + 2.5, vY) * uSnowStrength;
        col = mix(col, uSnowColor, snow);
        gl_FragColor = vec4(col, uOpacity);
      }
    `,
    transparent: opacity < 0.99,
    depthWrite: opacity >= 0.99,
    side: THREE.DoubleSide,
    fog: false,
  });
  ridgeMats.push(mat);
  const m = new THREE.Mesh(g, mat);
  m.frustumCulled = false;
  ridgeGroup.add(m);
}
// 远山：高一点、蓝灰一点，顶部混雪；中景丘陵：低饱和青绿；近景草坡：偏暗的草色
makeRidge(172, -1.4, 24, 1919, { bottom: 0xc5d9e6, top: 0x7e9fb8, snow: 0xf4fbff, snowLine: 0.54 }, 0.90, 0.62);
makeRidge(124, -1.1, 12.5, 2027, { bottom: 0xbdd6c6, top: 0x789b83 }, 1.0, 0);
makeRidge(82, -0.9, 5.2, 3121, { bottom: 0x9fbd8b, top: 0x6f9470 }, 1.0, 0);
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
  // 根系单独放一层：树冠随风摆时，深根不能跟着转到 soilFace 后面被遮住
  const rootSub = new THREE.Group();
  group.add(rootSub);
  const branches = [];
  const leafSites = [];
  const geos = [];

  const MAX_DEPTH = 4;
  const DUR = [0.24, 0.16, 0.12, 0.08, 0.05];

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
        // 极轻的径向起伏：让树皮/根皮有手工木质的不规则感，而不是光滑塑料管
        const surface = 1 + 0.018 * Math.sin(j * 3.2 + i * 0.9) + 0.009 * Math.sin(j * 7.1 + i * 1.7);
        const rr = radii[i] * surface;
        pos.push(points[i].x + nx * rr, points[i].y + ny * rr, points[i].z + nz * rr);
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
    const rings = depth === 0 ? 16 : depth === 1 ? 11 : 7;
    const radial = depth === 0 ? 16 : depth === 1 ? 10 : 7;
    const pts = [start.clone()];
    const radii = [r0];
    const d = dir.clone();

    // 每根枝都朝一个固定轴轻微弯曲，比笔直的棍子自然
    const bendAxis = new THREE.Vector3().crossVectors(dir, UP);
    if (bendAxis.lengthSq() < 1e-6) bendAxis.set(1, 0, 0);
    bendAxis.normalize().applyAxisAngle(dir, rand() * Math.PI * 2);
    const bend = depth === 0 ? randRange(rand, 0.24, 0.52) : randRange(rand, 0.22, 0.62);
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
    mesh.userData.part = depth === 0 ? 'trunk' : 'branch';
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
      const tilt = randRange(rand, 0.60, 1.14);
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
  spawn(new THREE.Vector3(0, 0, 0), new THREE.Vector3(randRange(rand, -0.10, 0.10), 1, randRange(rand, -0.10, 0.10)).normalize(),
    trunkLen, randRange(rand, 0.17, 0.21), 0, 0.06);

  /* ---------------- 根系：折线扫掠 + 分级，能弯曲、能收细 ---------------- */
  const roots = [];
  // 老根颜色深、新根浅，和真实根系一样有深浅差
  const rootMatA = new THREE.MeshStandardMaterial({
    color: 0x6f5138, map: BARK_TEX, bumpMap: BARK_TEX, bumpScale: 0.035,
    roughness: 0.94, metalness: 0, flatShading: false,
  });
  const rootMatB = new THREE.MeshStandardMaterial({
    color: 0x8d6c4d, map: BARK_TEX, bumpMap: BARK_TEX, bumpScale: 0.03,
    roughness: 0.90, metalness: 0, flatShading: false,
  });

  // 一条根的骨架：从 start 出发，越走越细、越走越向下垂，并被夹在剖面里
  function rootPath(start, dir, len, r0, segs, wander, isTap = false) {
    const pts = [start.clone()];
    const radii = [r0];
    const d = dir.clone().normalize();
    const step = len / segs;
    const waveA = rand() * Math.PI * 2;
    const waveB = rand() * Math.PI * 2;
    for (let i = 1; i <= segs; i++) {
      const t = i / segs;
      // 低频正弦 + 随机游走：根不是折线，也不是一根直线
      d.x += randRange(rand, -wander, wander) + Math.sin(i * 0.72 + waveA) * wander * 0.62;
      d.z += randRange(rand, -wander * 0.55, wander * 0.55) + Math.cos(i * 0.55 + waveB) * wander * 0.38;
      d.y -= isTap ? (0.006 + 0.020 * t) : (0.015 + 0.075 * t);  // 主根保持陡直向下，侧根才明显下垂
      d.normalize();
      const p = pts[i - 1].clone().addScaledVector(d, step);
      p.y = Math.max(ROOT_FLOOR, p.y);       // 根尖最远抵达含水层
      if (p.x > 11.0) p.x = 11.0; else if (p.x < -11.0) p.x = -11.0;
      // 放宽 z：根系有前后层次，不再是一张 0.2 厚的纸片
      p.z = Math.min(0.62, Math.max(0.05, p.z));
      pts.push(p);
      radii.push(Math.max(0.0028, r0 * (1 - (isTap ? 0.72 : 0.88) * Math.pow(t, 0.8))));
    }
    return { pts, radii };
  }

  function addRoot(pts, radii, radial, g0, g1, depth) {
    const geo = sweepGeometry(pts, radii, radial);
    geos.push(geo);
    const mesh = new THREE.Mesh(geo, depth <= 1 ? rootMatA : rootMatB);
    mesh.userData.part = 'root';
    mesh.receiveShadow = false;
    mesh.castShadow = false;
    mesh.frustumCulled = false;
    rootSub.add(mesh);
    const b = {
      mesh, pts, radii, rings: pts.length, radial,
      basePos: Float32Array.from(geo.attributes.position.array), lastK: -1,
    };
    roots.push({ ...b, g0, g1, depth });
    return b;
  }

  function rootChain(start, dir, len, r0, depth, gStart) {
    const segs = depth === 0 ? 24 : depth === 1 ? 12 : depth === 2 ? 7 : 5;
    const radial = depth === 0 ? 12 : depth === 1 ? 8 : depth === 2 ? 6 : 4;
    const { pts, radii } = rootPath(start, dir, len, r0, segs, depth === 0 ? 0.20 : 0.28, depth === 0);
    const dur = [0.025, 0.020, 0.015, 0.010][Math.min(3, depth)];
    const g1 = Math.min(0.86, gStart + dur);
    addRoot(pts, radii, radial, gStart, g1, depth);

    if (depth >= 3) return;
    // 侧根：沿主根不同高度发出，方向、粗细、长度都不一样
    const n = depth === 0 ? 14 : depth === 1 ? 3 : 1;
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
        len * randRange(rand, 0.42, 0.62),
        Math.max(0.010, localR * randRange(rand, 0.56, 0.80)),
        depth + 1, Math.max(0.006, g1 - 0.015 + 0.010 * k)
      );
    }
  }

  // 主根从种子正下方钻下去
  rootChain(
    new THREE.Vector3(0, -0.05, 0.06),
    new THREE.Vector3(randRange(rand, -0.10, 0.10), -1, randRange(rand, -0.06, 0.14)),
    randRange(rand, 4.7, 5.5), 0.165, 0, 0.022
  );
  // 根颈四周的板根：贴着地面向外铺，让树"抓"住土
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + randRange(rand, -0.5, 0.5);
    rootChain(
      new THREE.Vector3(Math.cos(a) * 0.07, -0.06, 0.02 + Math.sin(a) * 0.05),
      new THREE.Vector3(Math.cos(a) * 1.1, -0.55, Math.sin(a) * 0.5).normalize(),
      randRange(rand, 1.9, 2.6), 0.10, 1, 0.030
    );
  }

  /* 第 2 年深扎续根：g0 落在 rootAge>1 的区间，只在长成大树后才继续往含水层钻。
     这样「随时间推移根系越来越深、最后达到水层」才真正成立，而不是 t=120 就静止。 */
  {
    const dr = mulberry32(Math.floor(rand() * 1e9) ^ 0x5eed2024);
    for (let i = 0; i < 7; i++) {
      const start = new THREE.Vector3(randRange(dr, -1.7, 1.7), -3.1 - dr() * 1.5, 0.10 + dr() * 0.26);
      const dir = new THREE.Vector3(randRange(dr, -0.24, 0.24), -1, randRange(dr, -0.10, 0.16)).normalize();
      const { pts, radii } = rootPath(start, dir, randRange(dr, 4.4, 6.2), randRange(dr, 0.055, 0.095), 18, 0.16, true);
      addRoot(pts, radii, 8, 1.00 + i * 0.012, 1.20 + i * 0.012, 1);
    }
    // 贴近潜水面的吸水须根：横向铺开成扇，根尖正好扎进含水层
    for (let i = 0; i < 8; i++) {
      const start = new THREE.Vector3(randRange(dr, -2.8, 2.8), -7.4 - dr() * 1.1, 0.12 + dr() * 0.30);
      const dir = new THREE.Vector3(randRange(dr, -0.85, 0.85), -1, randRange(dr, -0.10, 0.16)).normalize();
      const { pts, radii } = rootPath(start, dir, randRange(dr, 2.0, 3.0), randRange(dr, 0.020, 0.038), 10, 0.24, false);
      addRoot(pts, radii, 5, 1.08 + i * 0.012, 1.26 + i * 0.012, 2);
    }
  }

  // 树干入土处的“根盘”：用一条凹曲线旋成，比直筒更像个活物
  const flareProfile = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8;                                  // 0 = 土面，1 = 更深处
    flareProfile.push(new THREE.Vector2(0.13 + 0.20 * Math.pow(1 - t, 1.15), -1.05 * t));
  }
  const flareGeo = new THREE.LatheGeometry(flareProfile, 16);
  geos.push(flareGeo);
  // 根颈比露出地面的树皮更暗（常年被土和湿气染），不然会在幼苗期变成一个白亮的蘑菇头
  const flareMat = new THREE.MeshStandardMaterial({
    color: 0x6a4a30, map: BARK_TEX, bumpMap: BARK_TEX, bumpScale: 0.07,
    roughness: 0.98, metalness: 0,
  });
  const flare = new THREE.Mesh(flareGeo, flareMat);
  flare.userData.part = 'root';
  flare.position.set(0, -0.015, 0);
  flare.scale.setScalar(0.001);
  flare.castShadow = true;
  flare.receiveShadow = true;
  rootSub.add(flare);

  /* 细根毛：沿根系采样密集的细丝，近景让根部不再像光滑管子。
     线段按「所属根的成熟时刻」排序，animate 里用 setDrawRange 逐段显现（1 个 draw call）。 */
  const rootHairPos = [];
  const rootHairReveal = [];
  const rootHairRand = mulberry32(Math.floor(rand() * 1e9) ^ 0x51ed270b);
  for (const r of roots) {
    for (let i = 2; i < r.pts.length - 1; i += 2) {
      const p0 = r.pts[i];
      const tangent = new THREE.Vector3().subVectors(r.pts[i + 1], r.pts[i - 1]).normalize();
      const side = new THREE.Vector3().crossVectors(tangent, UP);
      if (side.lengthSq() < 1e-5) side.set(1, 0, 0);
      side.normalize();
      const hairs = r.g0 >= 1 ? 5 : 3;
      for (let k = 0; k < hairs; k++) {
        const dir = side.clone().applyAxisAngle(tangent, rootHairRand() * Math.PI * 2);
        const len = 0.018 + rootHairRand() * 0.048;
        const q = p0.clone().addScaledVector(dir, len);
        rootHairPos.push(p0.x, p0.y, p0.z, q.x, q.y, q.z);
        rootHairReveal.push(r.g1);
      }
    }
  }
  const hairOrder = rootHairReveal.map((_, i) => i).sort((a, b) => rootHairReveal[a] - rootHairReveal[b]);
  const hairSorted = new Float32Array(rootHairPos.length);
  for (let i = 0; i < hairOrder.length; i++) {
    const o = hairOrder[i];
    for (let k = 0; k < 6; k++) hairSorted[i * 6 + k] = rootHairPos[o * 6 + k];
  }
  const hairThresholds = hairOrder.map((i) => rootHairReveal[i]);
  const rootHairGeo = new THREE.BufferGeometry();
  rootHairGeo.setAttribute('position', new THREE.BufferAttribute(hairSorted, 3));
  rootHairGeo.setDrawRange(0, 0);
  const rootHairMat = new THREE.LineBasicMaterial({
    color: 0x9b7f5c, transparent: true, opacity: 0.42, depthWrite: false, fog: false,
  });
  const rootHairs = new THREE.LineSegments(rootHairGeo, rootHairMat);
  rootHairs.userData.part = 'root';
  // 默认 Line.threshold=1 会让几千段细丝形成覆盖半个剖面的隐形拾取圈
  rootHairs.raycast = () => {};
  rootSub.add(rootHairs);
  geos.push(rootHairGeo);

  /* 叶子实例化网格 */
  const count = Math.min(leafSites.length, 40000);
  const leaves = new THREE.InstancedMesh(LEAF_GEO, leafMat, count);
  leaves.userData.part = 'leaf';
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
  fruits.userData.part = 'fruit';
  fruits.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  fruits.castShadow = true;
  fruits.frustumCulled = false;
  group.add(fruits);

  const stemGeo = new THREE.CylinderGeometry(0.008, 0.011, 0.075, 5, 1);
  stemGeo.translate(0, 0.037, 0);
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x5b4227, roughness: 1, metalness: 0 });
  const stems = new THREE.InstancedMesh(stemGeo, stemMat, FRUIT_COUNT);
  stems.userData.part = 'fruit';
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
    pos.z += 0.30 + rand() * 0.20;   // 挂在树冠朝镜头这一侧
    const cc = new THREE.Color();
    const pick = rand();
    if (pick < 0.62) cc.setHex(0xc0322a);          // 红苹果
    else if (pick < 0.86) cc.setHex(0xd8552c);     // 偏橙
    else cc.setHex(0xe0b23a);                      // 黄果
    fruitData.push({
      pos, size: randRange(rand, 0.13, 0.20), ripe: cc.clone(),
      quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3)),
      phase: rand() * Math.PI * 2, stag: rand(),
    });
    fruits.setColorAt(i, cc);
    stems.setColorAt(i, c.setHex(0xffffff));
  }
  if (fruits.instanceColor) fruits.instanceColor.needsUpdate = true;
  if (stems.instanceColor) stems.instanceColor.needsUpdate = true;

  /* ---------------- 春花 ---------------- */
  const BLOSSOM_COUNT = Math.min(1800, Math.floor(leafData.length * 0.085));
  const blossomGeo = new THREE.PlaneGeometry(1, 1);
  const blossomMat = new THREE.MeshBasicMaterial({
    map: FLOWER_TEX, alphaTest: 0.30, side: THREE.DoubleSide,
    transparent: true, opacity: 0, depthWrite: false,
  });
  const blossoms = new THREE.InstancedMesh(blossomGeo, blossomMat, BLOSSOM_COUNT);
  blossoms.userData.part = 'flower';
  blossoms.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  blossoms.frustumCulled = false;
  group.add(blossoms);
  const blossomData = [];
  const blossomCol = new THREE.Color();
  for (let i = 0; i < BLOSSOM_COUNT; i++) {
    const src = leafData[Math.floor(rand() * leafData.length)];
    const pos = src.pos.clone();
    pos.z += 0.34 + rand() * 0.22;   // 推到叶片前面，否则整树花都被叶冠挡住
    pos.y += rand() * 0.06;
    const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 3, rand() * 3, rand() * 3));
    const size = randRange(rand, 0.20, 0.31);
    blossomData.push({ pos, quat, size });
    if (rand() < 0.45) blossomCol.setHex(0xffe7f0); else blossomCol.setHex(0xff9ec6);
    blossoms.setColorAt(i, blossomCol);
    blossoms.setMatrixAt(i, new THREE.Matrix4().compose(pos, quat, new THREE.Vector3(size, size, size)));
  }
  if (blossoms.instanceColor) blossoms.instanceColor.needsUpdate = true;
  blossoms.instanceMatrix.needsUpdate = true;

  /* ---------------- 冬雪：枝上的积雪 ---------------- */
  const snowPts = [];
  for (const b of branches) {
    if (b.depth < 1) continue;
    const n = b.depth >= 3 ? 3 : 2;
    for (let k = 0; k < n; k++) {
      const idx = Math.floor(randRange(rand, 0.25, 0.96) * (b.pts.length - 1));
      const p = b.pts[idx].clone();
      const r = b.radii ? b.radii[idx] : 0.02;
      p.y += r * 1.05 + 0.008;
      snowPts.push({ pos: p, s: 0.085 + r * 2.6 });
    }
  }
  const snowCapGeo = new THREE.SphereGeometry(1, 6, 4);
  const snowCapMat = new THREE.MeshStandardMaterial({ color: 0xf7fcff, roughness: 0.82, metalness: 0, transparent: true, opacity: 0 });
  const snowCaps = new THREE.InstancedMesh(snowCapGeo, snowCapMat, snowPts.length);
  snowCaps.userData.part = 'snow';
  snowCaps.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  snowCaps.frustumCulled = false;
  group.add(snowCaps);
  const snowCapData = snowPts.map((d) => ({
    pos: d.pos, quat: new THREE.Quaternion().setFromEuler(new THREE.Euler(rand() * 0.4, rand() * 3, rand() * 0.4)),
    sx: d.s * randRange(rand, 0.75, 1.15), sy: d.s * 0.62, sz: d.s * randRange(rand, 0.75, 1.15),
  }));
  for (let i = 0; i < snowCapData.length; i++) {
    const d = snowCapData[i];
    snowCaps.setMatrixAt(i, new THREE.Matrix4().compose(d.pos, d.quat, new THREE.Vector3(d.sx, d.sy, d.sz)));
  }
  snowCaps.instanceMatrix.needsUpdate = true;

  /* 种子 & 子叶：种皮做成上下两半，吸水后从中间裂开，比一颗实心球真实 */
  const seedMat = new THREE.MeshStandardMaterial({ map: seedTexture(), roughness: 0.52, metalness: 0.02 });
  const seedMesh = new THREE.Group();
  seedMesh.userData.part = 'seed';
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
    m.userData.part = 'cotyledon';
    m.scale.setScalar(0.001);
    m.position.set(i === 0 ? -0.035 : 0.035, 0.10, 0.03);
    m.rotation.set(i === 0 ? 0.35 : -0.35, i === 0 ? -1.15 : 1.15, i === 0 ? 0.85 : -0.85);
    group.add(m);
    cotyledons.push(m);
  }

  const result = {
    group, rootSub, branches, leaves, leafData, roots, flare, flareMat, rootMats: [rootMatA, rootMatB], rootHairMat, rootHairs, hairThresholds, seedMesh, seedTop, seedBottom, seedCrack, seedMat, cotyledons, cotyledonMat, geos,
    fruits, stems, fruitData, fruitGeo, fruitMat, stemGeo, stemMat,
    blossoms, blossomMat, blossomGeo, blossomData, snowCaps, snowCapGeo, snowCapMat, snowCapData,
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
  if (t.fruits) t.fruits.dispose();
  if (t.stems) t.stems.dispose();
  t.seedMesh.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); }
  });
  t.cotyledonMat.dispose();
  for (const m of t.rootMats) m.dispose();
  if (t.rootHairMat) t.rootHairMat.dispose();
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

const SNOW_COUNT = 9000;
const snowGeo = new THREE.BufferGeometry();
const snowPos = new Float32Array(SNOW_COUNT * 3);
const snowVel = new Float32Array(SNOW_COUNT);
const snowPhase = new Float32Array(SNOW_COUNT);
for (let i = 0; i < SNOW_COUNT; i++) {
  snowPos[i * 3] = (Math.random() - 0.5) * 56;
  snowPos[i * 3 + 1] = Math.random() * 26;
  snowPos[i * 3 + 2] = -24 + Math.random() * 28;   // 深景镜头拉远后，雪不能跑到相机前面变成大白斑
  snowVel[i] = 0.30 + Math.random() * 0.55;
  snowPhase[i] = Math.random() * Math.PI * 2;
}
snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
const snowMat = new THREE.PointsMaterial({
  size: 0.22, map: circleTexture(), transparent: true, opacity: 0,
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
const RAIN_COUNT = 1400;
const rainGeo = new THREE.BufferGeometry();
const rainPos = new Float32Array(RAIN_COUNT * 3);
const rainVel = new Float32Array(RAIN_COUNT);
for (let i = 0; i < RAIN_COUNT; i++) {
  rainPos[i * 3] = (Math.random() - 0.5) * 24;
  rainPos[i * 3 + 1] = Math.random() * 8;
  rainPos[i * 3 + 2] = -9 + Math.random() * 9;
  rainVel[i] = 10 + Math.random() * 8;
}
rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rainMat = new THREE.PointsMaterial({
  size: 0.46, map: rainTexture(), transparent: true, opacity: 0,
  depthWrite: false, sizeAttenuation: true, color: 0xd6e8f6, fog: false,
});
const rain = new THREE.Points(rainGeo, rainMat);
rain.frustumCulled = false;
scene.add(rain);
// 雨的时间窗：春雨滋润(16-31)、向下扎根(40-54)、破土(62-72)、小树成形(96-106)。
// 两个夏雨窗已移除：第 8/12 章讲「阳光穿过树冠 / 小鸟昆虫来休息」，下雨会与文案冲突。
const RAIN_WINDOWS = [[16, 31, 0.62], [40, 54, 0.55], [62, 72, 0.45], [96, 106, 0.42]];
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
const THETA_MIN = Math.PI / 2 - 0.36, THETA_MAX = Math.PI / 2 + 0.36;

// 生长阶段的镜头脚本：种子微距 → 根系剖面 → 破土 → 幼苗 → 后拉看全树
const CAM_KEYS = [
  [0, 0.10, 0.9],
  [18, 0.08, 1.1],
  [32, 0.00, 1.3],
  [42, -0.55, 2.7],
  [56, -0.70, 3.1],
  [70, 0.00, 1.8],
  [76, 0.35, 2.2],
  [94, 1.20, 3.8],
  [108, 2.20, 5.2],
  [120, 3.00, 10.8],
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
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false });
  lastInteract = performance.now();
  dom.setPointerCapture(e.pointerId);
});
dom.addEventListener('pointermove', (e) => {
  const prev = pointers.get(e.pointerId);
  if (!prev) return;
  const dx = e.clientX - prev.x, dy = e.clientY - prev.y;
  prev.x = e.clientX; prev.y = e.clientY;
  if (Math.hypot(e.clientX - prev.sx, e.clientY - prev.sy) > 6) prev.moved = true;
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
  const p = pointers.get(e.pointerId);
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinchStart = 0;
  if (p && !p.moved && pointers.size === 0) handleCanvasTap(e.clientX, e.clientY);
}
function cancelPointer(e) {
  pointers.delete(e.pointerId);
  if (pointers.size < 2) pinchStart = 0;
}
dom.addEventListener('pointerup', endPointer);
dom.addEventListener('pointercancel', cancelPointer);
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

const startScreenEl = document.getElementById('startScreen');
const startClassBtn = document.getElementById('startClassBtn');
const freeViewBtn = document.getElementById('freeViewBtn');
const classroomTopEl = document.getElementById('classroomTop');
const classChapterIndexEl = document.getElementById('classChapterIndex');
const classChapterTitleEl = document.getElementById('classChapterTitle');
const classSeasonEl = document.getElementById('classSeason');
const classChapterBtn = document.getElementById('classChapterBtn');
const classTeacherBtn = document.getElementById('classTeacherBtn');
const classFindBtn = document.getElementById('classFindBtn');
const classQuartetBtn = document.getElementById('classQuartetBtn');
const classAutoBtn = document.getElementById('classAutoBtn');
const classProjectorBtn = document.getElementById('classProjectorBtn');
const classLockBtn = document.getElementById('classLockBtn');
const classExitBtn = document.getElementById('classExitBtn');
const seasonWheelEl = document.getElementById('seasonWheel');
const wheelNeedleEl = document.getElementById('wheelNeedle');
const wheelYearEl = document.getElementById('wheelYear');
const subtitleTextEl = document.getElementById('subtitleText');
const subtitleMetaEl = document.getElementById('subtitleMeta');
const classTimecodeEl = document.getElementById('classTimecode');
const classPrevBtn = document.getElementById('classPrevBtn');
const classPlayBtn = document.getElementById('classPlayBtn');
const classNextBtn = document.getElementById('classNextBtn');
const classVoiceBtn = document.getElementById('classVoiceBtn');
const classReplayBtn = document.getElementById('classReplayBtn');
const chapterDrawerEl = document.getElementById('chapterDrawer');
const chapterGridEl = document.getElementById('chapterGrid');
const teacherPanelEl = document.getElementById('teacherPanel');
const teacherTitleEl = document.getElementById('teacherTitle');
const teacherBodyEl = document.getElementById('teacherBody');
const quartetOverlayEl = document.getElementById('quartetOverlay');
const quartetGridEl = document.getElementById('quartetGrid');
const partCardEl = document.getElementById('partCard');
const partGlyphEl = document.getElementById('partGlyph');
const partNameEl = document.getElementById('partName');
const partPinyinEl = document.getElementById('partPinyin');
const partDescEl = document.getElementById('partDesc');
const partCloseEl = document.getElementById('partClose');
const findBannerEl = document.getElementById('findBanner');
const findTextEl = document.getElementById('findText');
const findProgressEl = document.getElementById('findProgress');
const findNextEl = document.getElementById('findNext');
const findCloseEl = document.getElementById('findClose');
const pausePromptEl = document.getElementById('pausePrompt');
const classToastEl = document.getElementById('classToast');
const lockOverlayEl = document.getElementById('lockOverlay');
const chapterBtnNormal = document.getElementById('chapterBtnNormal');
const quartetBtnNormal = document.getElementById('quartetBtnNormal');
const classEnterBtn = document.getElementById('classEnterBtn');

let currentSeasonLabel = '';
let currentChapter = -1;
let classroomMode = false;
let autoPauseAtChapter = true;
let speechSupported = 'speechSynthesis' in window;
let voiceOn = speechSupported;
let projectorBright = false;
let touchLocked = false;
let startScreenVisible = false;
let autoPausePending = false;
let findTarget = null;
let findActive = false;
let findBag = [];
let findBagIndex = 0;
let findBagKey = '';
let findRound = 1;
let lastSpokenChapter = -1;
let speechVoice = null;
let wakeLock = null;
let idleTimer = 0;
let lockPressTimer = 0;
let quartetBusy = false;
let quartetAutoDone = false;
let quartetShooting = false;   // 四季合影期间关掉深根取景，保证四张照片构图一致


const CHAPTERS = [
  { start: 0, end: 16, title: '种子入土', text: '一颗小小的种子落进松软的泥土里。它安静地躺着，等待水分和温暖把它唤醒。' },
  { start: 16, end: 32, title: '春雨滋润', text: '春雨落下来，种子喝饱了水，身体慢慢胀大，坚硬的外壳从中间裂开一条缝。' },
  { start: 32, end: 56, title: '向下扎根', text: '最先钻出来的不是叶子，而是根。主根向下探索，侧根向四周铺开，把泥土牢牢抓住。' },
  { start: 56, end: 76, title: '破土发芽', text: '嫩芽顶着种壳钻出地面，两片子叶慢慢展开，第一次见到阳光。' },
  { start: 76, end: 94, title: '幼苗初长', text: '小苗把根扎得更深，茎秆变粗，第一片真叶舒展开来，它开始自己制造养分。' },
  { start: 94, end: 108, title: '小树成形', text: '风吹过，雨落下，小树在一次次摇晃中变得更结实，枝丫一层层向外伸展。' },
  { start: 108, end: 120, title: '长成大树', text: '一年又一年，树干粗壮，树冠如伞，它终于长成了一棵大树。' },
  { start: 120, end: 140, title: '第一年 · 夏', text: '夏天到了，叶子浓绿，阳光穿过树冠，树荫下凉快极了。' },
  { start: 140, end: 160, title: '第一年 · 秋', text: '秋天，叶子变成红和金，一片片飘落，慢慢腐烂，变成泥土里的养分。' },
  { start: 160, end: 180, title: '第一年 · 冬', text: '冬天，枝头落满白雪，树安静地睡着，根还在土里呼吸。' },
  { start: 180, end: 200, title: '第二年 · 春', text: '第二年春天，树又醒来，新芽和花朵一起冒出来。' },
  { start: 200, end: 220, title: '第二年 · 夏', text: '夏天，树荫像一把大伞，小鸟和昆虫都来这里休息。' },
  { start: 220, end: 240, title: '第二年 · 秋', text: '第二年秋天，枝头结出果实，果实里有新的种子，生命就这样传下去。' },
  { start: 240, end: 260, title: '第二年 · 冬', text: '冬天又来了，一年结束，新的轮回又要开始。' },
];

// 教师提示卡：只在老师点开时显示，不投影到小朋友的画面
const TEACHER_TIPS = [
  { q: '种子住在哪里？它要喝什么才能醒来？', a: '抱膝蹲下，假装自己是一颗小种子。' },
  { q: '种子喝饱水以后，外面的壳会怎么样？', a: '手指轻轻点膝盖，模仿春雨一滴一滴落下来。' },
  { q: '先钻出来的是叶子，还是根？', a: '双手向下伸，学根往泥土深处钻。' },
  { q: '嫩芽顶开泥土的时候，用了多大的力气？', a: '慢慢站起来，双手向上举，学嫩芽顶开泥土。' },
  { q: '第一片真叶是什么颜色？它为什么需要阳光？', a: '手掌摊开，当一片小叶子晒晒太阳。' },
  { q: '小树被风吹得摇来摇去，为什么没有倒？', a: '左右轻轻摇摆，像一棵小树在风里。' },
  { q: '大树有多大？我们一起来抱一抱。', a: '张开双臂，围成一个大圆圈。' },
  { q: '夏天站在树下，为什么觉得凉快？', a: '双手搭在头顶，做一个小凉棚。' },
  { q: '落叶飘下来以后，去了哪里？', a: '手指转圈，慢慢落到地上，再变成泥土的养分。' },
  { q: '冬天大树睡着了吗？雪落在哪里？', a: '抱起手臂轻轻摇晃，学大树在雪里休息。' },
  { q: '第二年春天，树上先开出什么？', a: '双手从下巴向外打开，学一朵花慢慢开放。' },
  { q: '夏天谁会在树荫下休息？', a: '学小鸟飞一飞，再找个树荫停下来。' },
  { q: '果实里面藏着什么？', a: '双手捧成一个小果子，里面藏着新的种子。' },
  { q: '一年结束了，明年还会发生什么？', a: '用手画一个大圆圈：春夏秋冬，又回来了。' },
];

// 每个章节里适合“找一找”的部位
const CHAPTER_PARTS = [
  ['seed'],
  ['seed'],
  ['root', 'seed'],
  ['root', 'trunk', 'cotyledon'],
  ['leaf', 'trunk', 'root'],
  ['leaf', 'branch', 'trunk', 'root'],
  ['leaf', 'branch', 'trunk', 'root'],
  ['leaf', 'branch', 'trunk', 'root'],
  ['leaf', 'branch', 'trunk', 'root'],
  ['branch', 'trunk', 'snow'],
  ['flower', 'leaf', 'branch', 'trunk'],
  ['leaf', 'branch', 'trunk', 'root', 'bird', 'insect'],
  ['fruit', 'leaf', 'branch', 'trunk'],
  ['snow', 'branch', 'trunk'],
];

const PART_INFO = {
  seed: { name: '种子', pinyin: 'zhǒng zi', desc: '种子睡在泥土里，喝饱雨水就会慢慢醒来。' },
  root: { name: '根', pinyin: 'gēn', desc: '根把树牢牢抓住，还帮大树喝水。' },
  trunk: { name: '树干', pinyin: 'shù gàn', desc: '树干又粗又结实，把水和养分送到树枝上。' },
  branch: { name: '树枝', pinyin: 'shù zhī', desc: '树枝向四周伸开，给叶子安家。' },
  leaf: { name: '叶', pinyin: 'yè', desc: '叶子晒着太阳，为大树制造养分。' },
  cotyledon: { name: '子叶', pinyin: 'zǐ yè', desc: '子叶是种子先长出的两片小叶子，帮嫩芽见阳光。' },
  flower: { name: '花', pinyin: 'huā', desc: '花开的时候，蜜蜂和小鸟都来了。' },
  fruit: { name: '果', pinyin: 'guǒ', desc: '果实里有新的种子，生命就这样传下去。' },
  snow: { name: '雪', pinyin: 'xuě', desc: '雪花落在树枝上，大树在冬天安静地休息。' },
  bird: { name: '小鸟', pinyin: 'xiǎo niǎo', desc: '夏天，小鸟飞到树荫里歇一歇，有的停在枝头唱歌。' },
  insect: { name: '昆虫', pinyin: 'kūn chóng', desc: '蝴蝶、蜜蜂和瓢虫也喜欢这棵大树，围着花朵飞来飞去。' },
};

const SUBTITLE_KEYWORDS = /(种子|泥土|水分|温暖|春雨|外壳|侧根|主根|根|嫩芽|种壳|子叶|真叶|阳光|养分|枝丫|树干|树冠|叶子|树荫|落叶|白雪|新芽|花朵|果实|小鸟|昆虫|蜜蜂|蝴蝶|瓢虫|轮回)/g;

function subtitleHTML(text) {
  return text.replace(SUBTITLE_KEYWORDS, '<em>$1</em>');
}


const T0_QUERY = new URLSearchParams(location.search).get('t0');
const T0 = (() => { const v = parseFloat(T0_QUERY); return isNaN(v) ? 0 : v; })();
const FREEZE_T = /(^|[?&])freeze(=|&|$)/.test(location.search) ? T0 : null;
const VIDEO = /(^|[?&])video(=|&|$)/.test(location.search);
const CLASSROOM_PARAM = /(^|[?&])class(=|&|$)/.test(location.search);
const STAGE_PARAM = /(^|[?&])stage(=|&|$)/.test(location.search);
const START_SCREEN = !VIDEO && FREEZE_T === null && !CLASSROOM_PARAM && !STAGE_PARAM && T0_QUERY === null;
let videoT = 0;
if (VIDEO) {
  window.__setVideoT = (v) => { videoT = v; };
  window.__videoReady = true;
}
if (STAGE_PARAM) {
  document.body.classList.add('stage-only');
  refreshViewport();
}
let storyTime = clamp(T0, 0, STORY_END);
let freezeOverride = null;
let playing = !VIDEO && FREEZE_T === null && !START_SCREEN;
let scrubbing = false;
let prevT = storyTime;
let lastReal = performance.now();

function fmtTime(s) {
  s = Math.max(0, Math.round(s));
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
  resetFindBag();
  const c = CHAPTERS[idx];
  chapterIndexEl.textContent = '第 ' + (idx + 1) + ' 章 / 共 ' + CHAPTERS.length + ' 章';
  chapterTitleEl.textContent = c.title;
  chapterTextEl.textContent = c.text;
  chapterTitleEl.style.animation = 'none';
  void chapterTitleEl.offsetWidth;
  chapterTitleEl.style.animation = 'seasonIn .5s ease both';
  if (classChapterIndexEl) classChapterIndexEl.textContent = '第 ' + (idx + 1) + ' 章 / 共 ' + CHAPTERS.length + ' 章';
  if (classChapterTitleEl) classChapterTitleEl.textContent = c.title;
  if (subtitleTextEl) subtitleTextEl.innerHTML = subtitleHTML(c.text);
  if (subtitleMetaEl) subtitleMetaEl.textContent = '第 ' + (idx + 1) + ' 章 · ' + c.title;
  updateTeacherCard(idx);
  hidePartCard();
  if (classroomMode && playing && voiceOn) speakCurrentChapter();
}
function syncPlayer() {
  if (!timelineEl) return;
  if (!scrubbing) timelineEl.value = String(storyTime);
  timelineEl.style.setProperty('--progress', (storyTime / STORY_END * 100).toFixed(2) + '%');
  timecodeEl.textContent = fmtTime(storyTime) + ' / ' + fmtTime(STORY_END);
  playBtn.textContent = playing ? '⏸' : '▶';
  playBtn.setAttribute('aria-label', playing ? '暂停' : '播放');
  if (classPlayBtn) {
    classPlayBtn.textContent = playing ? '⏸' : '▶';
    classPlayBtn.setAttribute('aria-label', playing ? '暂停' : '播放');
  }
  if (classTimecodeEl) classTimecodeEl.textContent = fmtTime(storyTime) + ' / ' + fmtTime(STORY_END);
}
function setStoryTime(t, pause = true) {
  storyTime = clamp(t, 0, STORY_END);
  if (pause) playing = false;
  prevT = storyTime;
  autoPausePending = false;
  hidePausePrompt();
  cancelSpeech();
  if (findActive) stopFindGame();
  resetFindBag();
  updateChapterUI(storyTime);
  syncPlayer();
}
function togglePlay() {
  if (storyTime >= STORY_END - 0.01) { storyTime = 0; prevT = 0; autoPausePending = false; quartetAutoDone = false; updateChapterUI(0); }
  if (findActive) { stopFindGame(); resetFindBag(); }
  playing = !playing;
  autoPausePending = false;
  hidePausePrompt();
  if (playing && classroomMode && voiceOn) speakCurrentChapter();
  if (!playing) cancelSpeech();
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
if (START_SCREEN) {
  startScreenVisible = true;
} else {
  startScreenEl.classList.add('hidden');
}
if (STAGE_PARAM) {
  startScreenEl.classList.add('hidden');
  startScreenVisible = false;
}

function disposeEnvironment() {
  for (const key of ['__grass', '__flowers', '__groundLeaves']) {
    const mesh = scene[key];
    if (!mesh) continue;
    scene.remove(mesh);
    if (mesh.material) mesh.material.dispose();
    if (mesh.dispose) mesh.dispose();
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

let seedCounter = (FREEZE_T !== null || VIDEO || STAGE_PARAM || CLASSROOM_PARAM || T0_QUERY !== null)
  ? 20240601 : Math.floor(Math.random() * 100000);
plant(seedCounter);

/* ---------------- 课堂模式：UI、章节、朗读、互动 ---------------- */
const QUARTET_TIMES = [
  [130, '夏', '第 1 年'],
  [150, '秋', '第 1 年'],
  [170, '冬', '第 1 年'],
  [190, '春', '第 2 年'],
];
const raycaster = new THREE.Raycaster();
const pointerNdc = new THREE.Vector2();

function showToast(message, ms = 1800) {
  if (!classToastEl) return;
  classToastEl.textContent = message;
  classToastEl.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => classToastEl.classList.remove('show'), ms);
}
function openModal(el) {
  if (!el) return;
  if (el === chapterDrawerEl) buildChapterGrid();
  if (el === teacherPanelEl) updateTeacherCard(chapterIndexAt(storyTime));
  el.classList.add('show');
}
function closeModal(el) { if (el) el.classList.remove('show'); }
function closeAllModals() { document.querySelectorAll('.modal.show').forEach((m) => m.classList.remove('show')); }
function hasOpenModal() { return !!document.querySelector('.modal.show'); }

function seasonForTime(t) {
  const p = ((storySeason(t) % 1) + 1) % 1;
  return SEASONS[Math.floor(p * 4) % 4].name;
}
function buildChapterGrid() {
  if (!chapterGridEl) return;
  const current = chapterIndexAt(storyTime);
  chapterGridEl.innerHTML = CHAPTERS.map((c, i) => {
    const season = seasonForTime((c.start + Math.min(c.end, STORY_END)) / 2);
    return '<button class="chapter-item' + (i === current ? ' current' : '') + '" data-index="' + i + '">' +
      '<div class="chapter-thumb" data-season="' + season + '"></div>' +
      '<div class="chapter-num">第 ' + (i + 1) + ' 章</div>' +
      '<div class="chapter-name">' + c.title + '</div>' +
      '<div class="chapter-time">' + fmtTime(c.start) + '–' + fmtTime(Math.min(c.end, STORY_END)) + '</div>' +
      '</button>';
  }).join('');
}
function updateTeacherCard(idx) {
  if (!teacherBodyEl) return;
  const tip = TEACHER_TIPS[clamp(idx, 0, TEACHER_TIPS.length - 1)];
  if (!tip) return;
  teacherTitleEl.textContent = '第 ' + (idx + 1) + ' 章 · ' + CHAPTERS[idx].title;
  teacherBodyEl.innerHTML =
    '<div class="teacher-block"><b>可以问</b><p>' + tip.q + '</p></div>' +
    '<div class="teacher-block"><b>可以动</b><p>' + tip.a + '</p></div>';
}
function goToChapter(idx, pause = true) {
  idx = clamp(idx, 0, CHAPTERS.length - 1);
  const t = Math.max(0.01, CHAPTERS[idx].start + 0.01);
  setStoryTime(t, pause);
  if (!pause) { playing = true; syncPlayer(); }
}
function nextChapter() {
  const idx = chapterIndexAt(storyTime);
  if (idx >= CHAPTERS.length - 1) { setStoryTime(STORY_END, true); return; }
  goToChapter(idx + 1, true);
}
function prevChapter() {
  const idx = chapterIndexAt(storyTime);
  const atStart = storyTime <= CHAPTERS[idx].start + 1.4;
  goToChapter(atStart ? Math.max(0, idx - 1) : idx, true);
}
function updateClassroomButtons() {
  if (classAutoBtn) {
    classAutoBtn.classList.toggle('on', autoPauseAtChapter);
    classAutoBtn.textContent = autoPauseAtChapter ? '每章停 ✓' : '每章停';
  }
  if (classVoiceBtn) classVoiceBtn.classList.toggle('on', voiceOn);
  if (classProjectorBtn) classProjectorBtn.classList.toggle('on', projectorBright);
  if (classLockBtn) classLockBtn.classList.toggle('on', touchLocked);
}
function setAutoPause(v) {
  autoPauseAtChapter = !!v;
  updateClassroomButtons();
}
function toggleAutoPause() {
  setAutoPause(!autoPauseAtChapter);
  if (!autoPauseAtChapter) hidePausePrompt();
  showToast(autoPauseAtChapter ? '每章结束会自动暂停' : '已关闭自动暂停');
}
function setProjector(v) {
  projectorBright = !!v;
  document.body.classList.toggle('projector', projectorBright);
  updateClassroomButtons();
}
function toggleProjector() {
  setProjector(!projectorBright);
  showToast(projectorBright ? '投影增亮已开启' : '投影增亮已关闭');
}

/* ---- 故事姐姐朗读（Web Speech API；有中文声音时优先用中文） ---- */
function pickSpeechVoice() {
  if (!speechSupported) return;
  const voices = speechSynthesis.getVoices ? speechSynthesis.getVoices() : [];
  speechVoice = voices.find((v) => /zh[-_]?CN|cmn|Chinese|Tingting|Xiaoxiao|Meijia|Huihui/i.test((v.lang || '') + ' ' + (v.name || ''))) || null;
}
if (speechSupported) {
  pickSpeechVoice();
  if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', pickSpeechVoice);
}
function cancelSpeech() {
  if (!speechSupported) return;
  try { speechSynthesis.cancel(); } catch (e) {}
  lastSpokenChapter = -1;
  window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: false } }));
}
function speakCurrentChapter() {
  if (!voiceOn || !speechSupported || FREEZE_T !== null || VIDEO) return;
  const idx = chapterIndexAt(storyTime);
  if (lastSpokenChapter === idx && speechSynthesis.speaking) return;
  try { speechSynthesis.cancel(); } catch (e) {}
  if (!speechVoice) pickSpeechVoice();
  const u = new SpeechSynthesisUtterance(CHAPTERS[idx].text);
  if (speechVoice) u.voice = speechVoice;
  u.lang = 'zh-CN';
  u.rate = 0.92;
  u.pitch = 1.04;
  u.volume = 1;
  u.onstart = () => window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: true } }));
  u.onend = () => window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: false } }));
  u.onerror = () => window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: false } }));
  lastSpokenChapter = idx;
  window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: true } }));
  try { speechSynthesis.speak(u); } catch (e) {
    window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: false } }));
  }
}
function toggleVoice() {
  voiceOn = !voiceOn;
  updateClassroomButtons();
  if (!voiceOn) cancelSpeech();
  else if (classroomMode && playing) speakCurrentChapter();
  showToast(voiceOn ? '故事姐姐朗读已开启' : '朗读已关闭');
}

/* ---- 屏幕锁定 / 光标隐藏 / 屏幕常亮 ---- */
function lockScreen() {
  touchLocked = true;
  hidePartCard();
  stopFindGame();
  lockOverlayEl.classList.add('show');
  updateClassroomButtons();
}
function unlockScreen() {
  touchLocked = false;
  lockOverlayEl.classList.remove('show', 'holding');
  clearTimeout(lockPressTimer);
  updateClassroomButtons();
  showToast('屏幕已解锁');
}
function toggleLock() {
  if (touchLocked) unlockScreen(); else lockScreen();
}
function resetIdle() {
  document.body.classList.remove('idle');
  clearTimeout(idleTimer);
  if (!classroomMode) return;
  idleTimer = setTimeout(() => {
    if (!hasOpenModal() && !startScreenVisible && !touchLocked) document.body.classList.add('idle');
  }, 2600);
}
async function requestWakeLock() {
  if (!classroomMode || !('wakeLock' in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request('screen'); } catch (e) { wakeLock = null; }
}
function releaseWakeLock() {
  try { if (wakeLock) wakeLock.release(); } catch (e) {}
  wakeLock = null;
}

/* ---- 进入 / 退出课堂模式 ---- */
function refreshViewport() {
  const vp = appViewportSize();
  camera.aspect = vp.w / vp.h;
  camera.updateProjectionMatrix();
  renderer.setSize(vp.w, vp.h);
}
function requestFullscreenSafe() {
  if (document.fullscreenElement) return;
  const el = document.documentElement;
  if (!el.requestFullscreen) { showToast('当前浏览器不支持全屏，按 F11 也可以'); return; }
  const p = el.requestFullscreen();
  if (p && p.catch) p.catch(() => showToast('全屏请求被浏览器拦住了，按 F11 也可以'));
}
function toggleFullscreen() {
  if (document.fullscreenElement) {
    const p = document.exitFullscreen();
    if (p && p.catch) p.catch(() => {});
  } else {
    requestFullscreenSafe();
  }
}
function enterClassroomMode(opts = {}) {
  const reset = opts.reset !== false;
  classroomMode = true;
  startScreenVisible = false;
  startScreenEl.classList.add('hidden');
  document.body.classList.add('classroom-mode');
  document.body.classList.remove('idle');
  refreshViewport();
  closeAllModals();
  stopFindGame();
  resetFindBag();
  hidePartCard();
  if (reset) {
    storyTime = 0; prevT = 0; currentChapter = -1; quartetAutoDone = false;
  }
  playing = false;
  setAutoPause(true);
  setProjector(false);
  updateClassroomButtons();
  updateChapterUI(storyTime);
  syncPlayer();
  const canPlay = !VIDEO && FREEZE_T === null;
  if (canPlay && opts.autoplay !== false) {
    playing = true;
    syncPlayer();
    if (voiceOn) speakCurrentChapter();
  }
  if (opts.fullscreen) requestFullscreenSafe();
  requestWakeLock();
  resetIdle();
}
function exitClassroomMode() {
  playing = false;
  cancelSpeech();
  stopFindGame();
  resetFindBag();
  hidePartCard();
  hidePausePrompt();
  touchLocked = false;
  lockOverlayEl.classList.remove('show', 'holding');
  releaseWakeLock();
  classroomMode = false;
  document.body.classList.remove('classroom-mode', 'idle', 'projector');
  setProjector(false);
  refreshViewport();
  if (document.fullscreenElement) {
    const p = document.exitFullscreen();
    if (p && p.catch) p.catch(() => {});
  }
  startScreenVisible = true;
  startScreenEl.classList.remove('hidden');
  storyTime = 0; prevT = 0; currentChapter = -1;
  updateChapterUI(0);
  syncPlayer();
}

/* ---- 点一点，认一认 ---- */
function partFromObject(obj) {
  let o = obj;
  while (o) {
    if (o.userData && o.userData.part) return o.userData.part;
    o = o.parent;
  }
  return null;
}
function partVisibleAt(part, t) {
  // 透明但仍在场景里的实例（春花、果实、积雪）不能参与拾取，否则夏天会点到“雪”。
  // 先问真实显隐，再叠加章节时间白名单，避免「老师说有、孩子点不中」。
  if (!tree || !partHasVisibleState(part)) return false;
  const p = ((storySeason(t) % 1) + 1) % 1;
  if (part === 'seed') return t < 80;
  if (part === 'cotyledon') return t >= 60 && t <= 100;
  if (part === 'root') return t >= 30;
  if (part === 'trunk') return t >= 56;
  if (part === 'branch') return t >= 90;
  if (part === 'leaf') return t >= 74 && p < 0.70;   // 秋末/冬季叶已落光
  if (part === 'flower') return t >= 180 && t <= 206;
  if (part === 'fruit') return t >= 220 && t <= 242;
  if (part === 'snow') return (t >= 160 && t <= 180) || (t >= 240 && t <= 260);
  if (part === 'bird') return t >= 198 && t <= 220;
  if (part === 'insect') return t >= 198 && t <= 220;
  return true;
}
function partHasVisibleState(part) {
  if (!tree) return false;
  const g = growthAt(storyTime);
  if (part === 'seed') return !!(tree.seedMesh && tree.seedMesh.visible && tree.seedMesh.scale.x > 0.008);
  if (part === 'root') return tree.roots.some((r) => r.mesh.visible);
  if (part === 'trunk') return !!(tree.branches[0] && tree.branches[0].mesh.visible && g > 0.11);
  if (part === 'branch') return tree.branches.some((b, i) => i > 0 && b.mesh.visible) && g > 0.24;
  if (part === 'leaf') {
    const p = ((storySeason(storyTime) % 1) + 1) % 1;
    return g > 0.13 && (p < 0.05 || p < 0.70);
  }
  if (part === 'cotyledon') return tree.cotyledons.some((m) => m.visible && m.scale.x > 0.04);
  if (part === 'flower') return !!(tree.blossoms && tree.blossoms.visible && tree.blossomMat.opacity > 0.05);
  if (part === 'fruit') {
    const p = ((storySeason(storyTime) % 1) + 1) % 1;
    const grow = storyYear(storyTime) >= 2 ? smoothstep(0.50, 0.58, p) : 0;
    return grow > 0.02 && p < 0.80;
  }
  if (part === 'snow') return !!(tree.snowCaps && tree.snowCaps.visible && tree.snowCapMat.opacity > 0.05);
  if (part === 'bird') return perchBirds.visible && birdWorldPoints.length >= 2;
  if (part === 'insect') return butterflies.visible && insectWorldPoints.length >= 2;
  return false;
}
function partWorldPoints(part) {
  if (!tree || !tree.group) return [];
  const pts = [];
  const addLocal = (v) => {
    if (!v) return;
    const p = v.clone();
    tree.group.localToWorld(p);
    pts.push(p);
  };
  const addWorld = (v) => { if (v) pts.push(v.clone()); };
  if (part === 'seed') {
    if (tree.seedMesh) addWorld(tree.seedMesh.getWorldPosition(new THREE.Vector3()));
  } else if (part === 'root') {
    const rootParent = tree.rootSub || tree.group;
    for (const r of tree.roots) {
      if (!r.mesh.visible) continue;
      for (let i = 0; i < r.pts.length; i += 3) {
        const p = r.pts[i].clone();
        rootParent.localToWorld(p);
        pts.push(p);
      }
    }
  } else if (part === 'trunk') {
    const b = tree.branches[0];
    if (b && b.mesh.visible) for (let i = 0; i < b.pts.length; i += 2) addLocal(b.pts[i]);
  } else if (part === 'branch') {
    for (let bi = 0; bi < tree.branches.length; bi++) {
      const b = tree.branches[bi];
      if (bi === 0 || !b.mesh.visible) continue;
      for (let i = 0; i < b.pts.length; i += 2) addLocal(b.pts[i]);
    }
  } else if (part === 'leaf') {
    const g = growthAt(storyTime);
    for (let i = 0; i < tree.leafData.length; i += 25) {
      const d = tree.leafData[i];
      if (d.grow != null && d.grow > g + 0.02) continue;
      addLocal(d.pos);
    }
  } else if (part === 'cotyledon') {
    for (const m of tree.cotyledons) if (m.visible && m.scale.x > 0.04) addWorld(m.getWorldPosition(new THREE.Vector3()));
  } else if (part === 'flower') {
    if (tree.blossomData) for (let i = 0; i < tree.blossomData.length; i += 8) addLocal(tree.blossomData[i].pos);
  } else if (part === 'fruit') {
    if (tree.fruitData) for (let i = 0; i < tree.fruitData.length; i += 2) addLocal(tree.fruitData[i].pos);
  } else if (part === 'snow') {
    if (tree.snowCapData) for (const d of tree.snowCapData) addLocal(d.pos);
  } else if (part === 'bird') {
    for (const v of birdWorldPoints) addWorld(v);
  } else if (part === 'insect') {
    for (const v of insectWorldPoints) addWorld(v);
  }
  return pts;
}
function partScreenPoints(part) {
  if (!tree || !tree.group) return [];
  const rect = renderer.domElement.getBoundingClientRect();
  const out = [];
  const v = new THREE.Vector3();
  for (const p of partWorldPoints(part)) {
    v.copy(p).project(camera);
    if (v.z < -1 || v.z > 1) continue;
    const x = rect.left + (v.x * 0.5 + 0.5) * rect.width;
    const y = rect.top + (-v.y * 0.5 + 0.5) * rect.height;
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) continue;
    out.push({ x, y });
  }
  return out;
}
function findablePartsAt(t) {
  const preferred = CHAPTER_PARTS[chapterIndexAt(t)] || [];
  return preferred.filter((p) => {
    if (!partVisibleAt(p, t) || !partHasVisibleState(p)) return false;
    const count = partScreenPoints(p).length;
    // 种子很小但它是核心观察对象，允许 1 个投影点；其他部位至少 2 个点，避免选到几乎看不见的目标
    return count >= (p === 'seed' ? 1 : 2);
  });
}
function isNearFindTarget(clientX, clientY) {
  if (!findTarget) return false;
  const rect = renderer.domElement.getBoundingClientRect();
  const radius = Math.max(40, Math.min(80, rect.width * 0.055));
  const rr = radius * radius;
  for (const p of partScreenPoints(findTarget)) {
    const dx = p.x - clientX, dy = p.y - clientY;
    if (dx * dx + dy * dy <= rr) return true;
  }
  return false;
}
function pickPartAt(clientX, clientY) {
  if (!tree || !tree.group) return null;
  const rect = renderer.domElement.getBoundingClientRect();
  pointerNdc.x = ((clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
  pointerNdc.y = -((clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1;
  raycaster.setFromCamera(pointerNdc, camera);
  const hits = raycaster.intersectObject(tree.group, true);
  for (const h of hits) {
    const part = partFromObject(h.object);
    if (part && partVisibleAt(part, storyTime) && partHasVisibleState(part)) return part;
  }
  return null;
}
function showPartCard(part, clientX, clientY) {
  const info = PART_INFO[part];
  if (!info || !partCardEl) return;
  partGlyphEl.textContent = info.name.slice(-1);
  partNameEl.textContent = info.name;
  partPinyinEl.textContent = info.pinyin;
  partDescEl.textContent = info.desc;
  partCardEl.classList.add('show');
}
function hidePartCard() { if (partCardEl) partCardEl.classList.remove('show'); }
function partMatches(target, actual) {
  if (target === actual) return true;
  if (target === 'leaf' && actual === 'cotyledon') return true;
  return false;
}
function resetFindBag() {
  findBag = [];
  findBagIndex = 0;
  findBagKey = '';
  findRound = 1;
}
function prepareFindBag() {
  const available = findablePartsAt(storyTime);
  if (!available.length) return false;
  const chapter = chapterIndexAt(storyTime);
  const order = ['seed', 'root', 'trunk', 'branch', 'leaf', 'cotyledon', 'flower', 'fruit', 'snow', 'bird', 'insect'];
  const key = chapter + '|' + available.join(',');
  if (key !== findBagKey) {
    const bag = order.filter((p) => available.includes(p));
    // 每个章节从不同部位开始，避免连续几章都先问“根在哪里”
    const shift = bag.length ? (chapter * 2 + 1) % bag.length : 0;
    findBag = bag.slice(shift).concat(bag.slice(0, shift));
    findBagIndex = 0;
    findRound = 1;
    findBagKey = key;
  }
  return findBag.length > 0;
}
function nextFindQuestion() {
  if (!prepareFindBag()) {
    showToast('这一章暂时没有可找的部位，换个章节试试');
    stopFindGame();
    return;
  }
  if (findBagIndex >= findBag.length) {
    findBagIndex = 0;
    findRound++;
  }
  const no = findBagIndex + 1;
  const total = findBag.length;
  findTarget = findBag[findBagIndex];
  findBagIndex++;
  findActive = true;
  findTextEl.innerHTML = '找一找：<b>' + PART_INFO[findTarget].name + '</b>在哪里？';
  if (findProgressEl) findProgressEl.textContent = '第 ' + findRound + ' 轮 · ' + no + '/' + total;
  if (findNextEl) findNextEl.style.display = total > 1 ? '' : 'none';
  findBannerEl.classList.add('show');
  findBannerEl.classList.remove('shake');
  hidePausePrompt();
  hidePartCard();
  if (playing) { playing = false; cancelSpeech(); syncPlayer(); }
}
function startFindGame() {
  if (!classroomMode) { showToast('请先进入课堂模式'); return; }
  // 已经打开时，再点“找一找”就是下一个问题，不再突然关掉
  nextFindQuestion();
}
function stopFindGame() {
  findActive = false;
  findTarget = null;
  if (findBannerEl) findBannerEl.classList.remove('show', 'shake');
}
function handleCanvasTap(clientX, clientY) {
  if (startScreenVisible || touchLocked) return;
  const part = pickPartAt(clientX, clientY);
  if (findActive) {
    const nearTarget = isNearFindTarget(clientX, clientY);
    if (nearTarget || (part && partMatches(findTarget, part))) {
      const found = findTarget;
      showPartCard(found, clientX, clientY);
      stopFindGame();
      showToast('找到啦！这是' + PART_INFO[found].name);
    } else if (!part) {
      showToast('再仔细看看，找找画面里的' + PART_INFO[findTarget].name);
    } else {
      findBannerEl.classList.remove('shake');
      void findBannerEl.offsetWidth;
      findBannerEl.classList.add('shake');
      showToast('这里不是' + PART_INFO[findTarget].name + '，再找找看');
    }
    return;
  }
  if (part) {
    if (classroomMode && playing) { playing = false; cancelSpeech(); syncPlayer(); }
    showPartCard(part, clientX, clientY);
  } else hidePartCard();
}

/* ---- 四季合影 ---- */
function snapshotCanvas() {
  const src = renderer.domElement;
  const c = document.createElement('canvas');
  const w = Math.min(720, src.width);
  const h = Math.max(1, Math.round(w * src.height / Math.max(1, src.width)));
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.drawImage(src, 0, 0, w, h);
  return c.toDataURL('image/jpeg', 0.86);
}
async function captureQuartet() {
  if (quartetBusy) return;
  quartetBusy = true;
  quartetShooting = true;
  const old = { t: storyTime, prevT, playing, theta: cam.theta, radius: cam.radius, phi: cam.phi };
  const frames = [];
  try {
    for (const [tt, label, year] of QUARTET_TIMES) {
      storyTime = tt; prevT = tt; freezeOverride = tt; playing = false;
      cam.theta = 1.46; cam.radius = 12.5; cam.phi = 1.46;
      syncPlayer(); updateChapterUI(tt);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      renderer.render(scene, camera);
      frames.push({ label, year, url: snapshotCanvas() });
    }
    if (quartetGridEl) {
      quartetGridEl.innerHTML = frames.map((f) =>
        '<figure class="quartet-item"><img src="' + f.url + '" alt="' + f.label + '"><figcaption><b>' + f.label + '</b><span>' + f.year + '</span></figcaption></figure>'
      ).join('');
    }
    openModal(quartetOverlayEl);
  } finally {
    freezeOverride = null;
    quartetShooting = false;
    storyTime = old.t; prevT = old.prevT; playing = old.playing;
    cam.theta = old.theta; cam.radius = old.radius; cam.phi = old.phi;
    syncPlayer(); updateChapterUI(storyTime);
    quartetBusy = false;
  }
}

/* ---- 自动暂停提示 ---- */
function showPausePrompt(text) {
  if (!pausePromptEl) return;
  pausePromptEl.innerHTML = text;
  pausePromptEl.classList.add('show');
}
function hidePausePrompt() {
  if (pausePromptEl) pausePromptEl.classList.remove('show');
}

/* ---- 事件绑定 ---- */
playBtn.addEventListener('click', togglePlay);
replayBtn.addEventListener('click', () => {
  storyTime = 0; prevT = 0; playing = true; autoPausePending = false; quartetAutoDone = false;
  currentChapter = -1; updateChapterUI(0); syncPlayer();
});
timelineEl.addEventListener('pointerdown', () => { scrubbing = true; });
timelineEl.addEventListener('input', (e) => { setStoryTime(parseFloat(e.target.value), true); });
timelineEl.addEventListener('change', () => { scrubbing = false; syncPlayer(); });
window.addEventListener('pointerup', () => { if (scrubbing) { scrubbing = false; syncPlayer(); } });
document.getElementById('replant').addEventListener('click', () => {
  seedCounter = Math.floor(Math.random() * 100000);
  plant(seedCounter);
  storyTime = 0; prevT = 0; playing = true; autoPausePending = false; quartetAutoDone = false;
  currentChapter = -1; updateChapterUI(0); syncPlayer();
});

startClassBtn.addEventListener('click', () => enterClassroomMode({ reset: true, fullscreen: true, autoplay: true }));
freeViewBtn.addEventListener('click', () => {
  startScreenVisible = false;
  startScreenEl.classList.add('hidden');
  hidePausePrompt();
  playing = true;
  syncPlayer();
});
classPlayBtn.addEventListener('click', togglePlay);
classPrevBtn.addEventListener('click', prevChapter);
classNextBtn.addEventListener('click', nextChapter);
classReplayBtn.addEventListener('click', () => {
  storyTime = 0; prevT = 0; playing = true; autoPausePending = false; quartetAutoDone = false;
  currentChapter = -1; updateChapterUI(0); syncPlayer();
  if (voiceOn) speakCurrentChapter();
});
classChapterBtn.addEventListener('click', () => openModal(chapterDrawerEl));
classTeacherBtn.addEventListener('click', () => openModal(teacherPanelEl));
classFindBtn.addEventListener('click', startFindGame);
classQuartetBtn.addEventListener('click', captureQuartet);
classAutoBtn.addEventListener('click', toggleAutoPause);
classProjectorBtn.addEventListener('click', toggleProjector);
classLockBtn.addEventListener('click', toggleLock);
classExitBtn.addEventListener('click', exitClassroomMode);
classVoiceBtn.addEventListener('click', toggleVoice);
chapterBtnNormal.addEventListener('click', () => openModal(chapterDrawerEl));
quartetBtnNormal.addEventListener('click', captureQuartet);
classEnterBtn.addEventListener('click', () => enterClassroomMode({ reset: false, fullscreen: true, autoplay: true }));
partCloseEl.addEventListener('click', hidePartCard);
findNextEl.addEventListener('click', nextFindQuestion);
findCloseEl.addEventListener('click', stopFindGame);
chapterGridEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.chapter-item');
  if (!btn) return;
  goToChapter(parseInt(btn.dataset.index, 10), true);
  closeModal(chapterDrawerEl);
});
document.querySelectorAll('.modal').forEach((m) => {
  m.addEventListener('pointerdown', (e) => { if (e.target === m) m.classList.remove('show'); });
});
document.querySelectorAll('[data-close]').forEach((b) => {
  b.addEventListener('click', () => closeModal(document.getElementById(b.dataset.close)));
});
lockOverlayEl.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  lockOverlayEl.classList.add('holding');
  clearTimeout(lockPressTimer);
  lockPressTimer = setTimeout(unlockScreen, 2000);
});
['pointerup', 'pointercancel', 'pointerleave'].forEach((ev) => {
  lockOverlayEl.addEventListener(ev, () => {
    lockOverlayEl.classList.remove('holding');
    clearTimeout(lockPressTimer);
  });
});
window.addEventListener('pointermove', resetIdle, { passive: true });
window.addEventListener('pointerdown', resetIdle, { passive: true });
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && classroomMode) requestWakeLock();
});

window.addEventListener('keydown', (e) => {
  if (touchLocked) {
    if (e.key === 'Escape') { e.preventDefault(); unlockScreen(); }
    return;
  }
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); setStoryTime(storyTime - 5, true); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); setStoryTime(storyTime + 5, true); }
  else if (e.key === 'Home') { e.preventDefault(); setStoryTime(0, true); }
  else if (e.key === 'End') { e.preventDefault(); setStoryTime(STORY_END, true); }
  else if (e.key === 'PageUp') { e.preventDefault(); prevChapter(); }
  else if (e.key === 'PageDown') { e.preventDefault(); nextChapter(); }
  else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleFullscreen(); }
  else if (e.key === 'c' || e.key === 'C') { e.preventDefault(); openModal(chapterDrawerEl); }
  else if (e.key === 't' || e.key === 'T') { e.preventDefault(); openModal(teacherPanelEl); }
  else if (e.key === 'q' || e.key === 'Q') { e.preventDefault(); captureQuartet(); }
  else if (e.key === 'p' || e.key === 'P') { e.preventDefault(); toggleProjector(); }
  else if (e.key === 'l' || e.key === 'L') { e.preventDefault(); toggleLock(); }
  else if (e.key === 'Escape') {
    if (hasOpenModal()) { e.preventDefault(); closeAllModals(); }
  }
  else if (e.key === 'r' || e.key === 'R') {
    seedCounter = Math.floor(Math.random() * 100000);
    plant(seedCounter);
    storyTime = 0; prevT = 0; playing = true; autoPausePending = false; quartetAutoDone = false;
    currentChapter = -1; updateChapterUI(0); syncPlayer();
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
let lastStaticRenderKey = '';
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
    const nextT = Math.min(STORY_END, storyTime + realDt);
    const currentIdx = chapterIndexAt(storyTime);
    const nextIdx = chapterIndexAt(nextT);
    if (classroomMode && autoPauseAtChapter && nextT < STORY_END - 0.001 && nextIdx !== currentIdx) {
      // 停在章节边界：storyTime 正好等于下一章开始，画面/字幕先切到下一章，但保持暂停
      storyTime = Math.min(CHAPTERS[currentIdx].end, STORY_END);
      playing = false;
      autoPausePending = true;
      const nextTitle = CHAPTERS[Math.min(CHAPTERS.length - 1, currentIdx + 1)].title;
      showPausePrompt('第 ' + (currentIdx + 1) + ' 章结束 · 下一章：<b>' + nextTitle + '</b>');
      cancelSpeech();
    } else {
      storyTime = nextT;
      if (storyTime >= STORY_END - 0.001) {
        storyTime = STORY_END;
        playing = false;
        if (classroomMode && !quartetAutoDone) {
          quartetAutoDone = true;
          setTimeout(() => { if (classroomMode) captureQuartet(); }, 900);
        }
      }
    }
  }
  // 定帧模式（?t0=N&freeze）：时间钉死在 N 秒；视频模式由外部喂时间
  const t = VIDEO ? videoT : (freezeOverride !== null ? freezeOverride : (FREEZE_T !== null ? FREEZE_T : storyTime));
  // 定帧 / 暂停 / 四季合影时 dt=0：粒子彻底静止，画面可逐像素复现
  const dt = VIDEO ? 1 / 60 : ((playing && FREEZE_T === null && freezeOverride === null) ? Math.min(0.05, Math.max(0.0001, t - prevT)) : 0);
  prevT = t;
  updateChapterUI(t);
  syncPlayer();

  /* —— 时间推进 —— */
  const pRaw = storySeason(t);
  const p = ((pRaw % 1) + 1) % 1;                    // 0..1 一年
  const yearIndex = storyYear(t);
  const g = growthAt(t);                             // 种子→大树的非线性生长进度
  // 根不受 g 在 120s 饱和的限制：第 2 年继续向含水层深扎
  const rootAge = g + 0.30 * smoothstep(120, 235, t);

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
  // 太阳跟随相机方位角偏左 0.28 弧度：始终留在右侧 3D 舞台的安全区内，
  // 不会被左侧讲解栏裁掉，也不会因为镜头自动摆动而跑出画面。
  const sunAz = cam.theta - Math.PI - 0.28 + Math.sin(t * 0.03) * 0.04;
  const sunDir = _sunDir.set(Math.cos(sunAz) * Math.cos(sunElev), Math.sin(sunElev), Math.sin(sunAz) * Math.cos(sunElev)).normalize();
  sun.position.copy(sunDir).multiplyScalar(34);
  sunSprite.position.copy(sunDir).multiplyScalar(150);
  sunRays.position.copy(sunDir).multiplyScalar(148);
  sunSprite.material.color.copy(pal.sun);
  sunRays.material.color.copy(pal.sun);
  sunRays.material.opacity = 0.30 * (0.55 + 0.45 * (1 - smoothstep(0.6, 0.9, p))) * (1 - 0.6 * rainA) * (0.75 + 0.9 * pal.bloom);
  // 四季曝光差异（原为死参数）：幅度压得很小，避免破坏逆光层次
  renderer.toneMappingExposure = 1.12 + (pal.exposure - 0.94) * 0.32;
  skyUniforms.sunDir.value.copy(sunDir);

  groundMat.color.copy(pal.ground).multiplyScalar(1 - 0.16 * rainA);
  // 远山：底部接近雾色，顶部保留山体色；远山雪线随季节保持冷白
  if (ridgeMats.length === 3) {
    const far = ridgeMats[0].uniforms;
    far.uBottomColor.value.copy(pal.fog).lerp(pal.skyTop, 0.05);
    far.uTopColor.value.copy(pal.fog).lerp(pal.skyTop, 0.38).multiplyScalar(0.90);
    far.uSnowColor.value.setHex(0xf1f8ff);
    const mid = ridgeMats[1].uniforms;
    mid.uBottomColor.value.copy(pal.fog).lerp(pal.ground, 0.12);
    mid.uTopColor.value.copy(pal.ground).lerp(pal.fog, 0.52).multiplyScalar(0.92);
    const near = ridgeMats[2].uniforms;
    near.uBottomColor.value.copy(pal.ground).lerp(pal.fog, 0.36);
    near.uTopColor.value.copy(pal.ground).lerp(pal.fog, 0.24).multiplyScalar(0.88);
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
  const groundLeafShow = smoothstep(0.58, 0.70, p);
  const groundLeafDecay = smoothstep(0.66, 0.92, p);
  const carpetFade = smoothstep(0.58, 0.66, p) * (1 - smoothstep(0.92, 0.99, p));
  scene.__groundLeaves.visible = carpetFade > 0.002;
  if (scene.__groundLeaves.visible) {
    scene.__groundLeaves.material.opacity = carpetFade * (1.0 - 0.62 * groundLeafDecay);
    const info = scene.__groundLeaves.userData.leafInfo;
    for (let i = 0; i < info.length; i++) {
      const d = info[i];
      const grow = 0.001 + 0.999 * groundLeafShow;   // 从 0 连续长大，不再一帧 pop 1600 片
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
  // 微距镜头里土壤占满画面：补光随取景高度平滑增强，近景土壁才有可辨的层理
  const closeFrame = cameraFrameAt(t);
  const closeBoost = closeFrame ? (1 - smoothstep(1.0, 4.2, closeFrame.viewH)) : 0;
  frontFill.intensity = 2.35 + 0.55 * closeBoost;
  fillUnder.intensity = 1.25 + 0.85 * closeBoost;
  if (contactAO) {
    contactAO.scale.setScalar(0.30 + 1.85 * smoothstep(0.02, 0.95, g));
    contactAO.material.opacity = 0.40 + 0.48 * fat;
  }
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
  const rootFat = 0.22 + 0.78 * smoothstep(0.03, 1.05, rootAge);
  const rootOld = smoothstep(0.06, 0.85, rootAge);
  tree.rootMats[0].color.setHex(0xb59a72).lerp(tmpB.setHex(0x6f5138), rootOld);
  tree.rootMats[1].color.setHex(0xc6b08a).lerp(tmpB.setHex(0x8d6c4d), rootOld);
  for (const r of tree.roots) {
    const k = smoothstep(r.g0, r.g1, rootAge);
    r.mesh.visible = k > 0.001;
    if (r.mesh.visible) growBranch(r, k, rootFat);
  }
  // 根毛按成熟时刻逐段显现：早期不是「满屏悬浮细线」
  if (tree.hairThresholds && tree.rootHairs) {
    let lo = 0, hi = tree.hairThresholds.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tree.hairThresholds[mid] <= rootAge) lo = mid + 1; else hi = mid;
    }
    tree.rootHairs.geometry.setDrawRange(0, lo * 2);
    tree.rootHairs.visible = lo > 0;
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
  const seedPlant = smoothstep(0.0, 3.0, t);      // 种子从上方落下、半埋进松软的表土
  const seedSwell = 1 + 0.14 * smoothstep(16, 32, t);
  const seedSplit = smoothstep(18, 30, t);        // 第 2 章「外壳裂开一条缝」当章就能看到
  const seedFade = 1 - smoothstep(66, 80, t);
  const seedLift = smoothstep(56, 68, t) * (1 - smoothstep(70, 80, t));  // 嫩芽顶着种壳钻出地面
  tree.seedMesh.visible = t < 80 && seedFade > 0.01;
  tree.seedMesh.position.y = -0.035 + 0.10 * (1 - seedPlant) + 0.24 * seedLift;
  tree.seedMesh.scale.set(0.35 * seedSwell * seedFade, 0.28 * seedSwell * seedFade, 0.46 * seedSwell * seedFade);
  tree.seedTop.position.set(0.018 * seedSplit, 0.055 * seedSplit, 0.006 * seedSplit);
  tree.seedTop.rotation.z = -0.62 * seedSplit;
  tree.seedTop.rotation.x = 0.22 * seedSplit;
  tree.seedBottom.position.y = -0.008 * seedSplit;
  tree.seedCrack.visible = seedSplit > 0.01 && seedFade > 0.02;
  tree.seedCrack.material.transparent = true;
  tree.seedCrack.material.opacity = Math.min(1, seedSplit * 2.2) * seedFade * 0.92;
  tree.seedCrack.scale.setScalar(1 + 0.12 * seedSplit);

  // 子叶挂点必须用“当前主干顶端”，不能用成年主干长度
  const trunkB = tree.branches[0];
  const trunkK = trunkB ? smoothstep(trunkB.g0, trunkB.g1, g) : 0;
  const trunkTop = trunkB ? trunkB.start.y + trunkB.len * trunkK : 0.2;
  const coty = smoothstep(0.09, 0.145, g) * (1 - smoothstep(0.28, 0.42, g));
  for (let i = 0; i < tree.cotyledons.length; i++) {
    const m = tree.cotyledons[i];
    m.scale.setScalar(Math.max(0.001, 0.12 * coty));
    // 子叶长在近地面的胚轴节点，不随主干被抬到 3 米高的树梢
    m.position.y = 0.12 + 0.25 * smoothstep(0.06, 0.16, g);
    m.rotation.z = (i === 0 ? 1 : -1) * (0.95 - 0.45 * coty);   // 慢慢展开
    m.visible = coty > 0.01;
  }
  void trunkTop;
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
  // 花只在第 2 年春天开（旧版 g 门槛让第一年 114–123s 提前开过一次）
  const blossomK = yearIndex >= 2 ? smoothstep(0.02, 0.07, p) * (1 - smoothstep(0.22, 0.30, p)) : 0;
  tree.blossoms.visible = blossomK > 0.02;
  tree.blossomMat.opacity = blossomK * 0.95;
  const snowCapK = smoothstep(0.75, 0.85, p) * (1 - smoothstep(0.92, 0.99, p));
  tree.snowCaps.visible = snowCapK > 0.02;
  tree.snowCapMat.opacity = snowCapK;

  /* —— 果实：第二年秋天结果，入冬前落光 —— */
  const fruitGrow = yearIndex >= 2 ? smoothstep(0.50, 0.58, p) : 0;   // 220s 第 13 章才开始挂果
  const fruitRipe = yearIndex >= 2 ? smoothstep(0.54, 0.62, p) : 0;   // 青果慢慢转红
  const fruitFall = smoothstep(0.68, 0.76, p);
  const fruitMature = fruitGrow * (1 - smoothstep(0.68, 0.76, p));
  {
    const fd = tree.fruitData;
    const fruits = tree.fruits, stems = tree.stems;
    const q0 = _q.set(0, 0, 0, 1);
    for (let i = 0; i < fd.length; i++) {
      const d = fd[i];
      const sc = d.size * fruitGrow * (1 - smoothstep(0.74, 0.80, p));   // 240s 前落光，不跨到第 14 章
      if (sc < 0.002) {
        fruits.setMatrixAt(i, hideM);
        stems.setMatrixAt(i, hideM);
        continue;
      }
      const sway = Math.sin(t * 1.5 + d.phase) * 0.02 * fruitGrow;
      _p.copy(d.pos);
      _p.x += sway;
      _p.y = Math.max(0.14, d.pos.y - fruitFall * (1.2 + d.stag * 0.9));  // 落地不穿进土里
      _m.compose(_p, d.quat, _s.setScalar(sc));
      fruits.setMatrixAt(i, _m);
      fruits.setColorAt(i, _color.setHex(0x7fa83a).lerp(d.ripe, fruitRipe));
      _p.y += sc * 0.92;
      _m.compose(_p, q0, _s.set(1, 1, 1));
      if (fruitFall < 0.35) stems.setMatrixAt(i, _m); else stems.setMatrixAt(i, hideM);
    }
    fruits.instanceMatrix.needsUpdate = true;
    if (fruits.instanceColor) fruits.instanceColor.needsUpdate = true;
    stems.instanceMatrix.needsUpdate = true;
  }

  /* —— 落叶 / 花瓣 生成 —— */
  // 小苗阶段树冠还没成形，先不要从“隐形的树冠”往下掉花瓣
  const treeMatureEnough = smoothstep(0.18, 0.34, g);
  const autumnWindow = smoothstep(0.52, 0.58, p) * (1 - smoothstep(0.70, 0.74, p));
  const autumnSpawnRate = g > 0.5 && autumnWindow > 0.01 ? (8 + 30 * smoothstep(0.52, 0.68, p)) * autumnWindow : 0;
  // 粉色花瓣只在花期末出现；旧版 p>0.88 是深冬，会「雪中飘桃花」
  const petalRate = (p > 0.18 && p < 0.34 && yearIndex >= 2) ? 10 * treeMatureEnough : 0;
  const spawnRate = autumnSpawnRate + petalRate;
  const spawnPhase = spawnRate * t;
  if (spawnRate > 0 && dt > 0 && Math.floor(spawnPhase) > Math.floor(spawnPhase - spawnRate * dt)) {
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

  /* —— 地下水层：根系抵达后水面、渗流、气泡与根尖光点才亮起来 —— */
  const waterReveal = smoothstep(0.98, 1.16, rootAge);
  waterGlowMat.opacity = 0.22 * waterReveal;
  waterEdgeMat.opacity = 0.28 * waterReveal;
  if (waterSheenMat) waterSheenMat.opacity = 0.30 * waterReveal;
  waterRippleUniforms.uTime.value = t;
  waterRippleUniforms.uOpacity.value = 0.18 * waterReveal;
  bubbleMat.opacity = 0.50 * waterReveal;
  {
    const bp = bubbleGeo.attributes.position.array;
    for (let i = 0; i < WATER_BUBBLES; i++) {
      const b = i * 4;
      bp[i * 3] = bubbleBase[b] + Math.sin(t * 0.7 + bubbleBase[b + 3]) * 0.12;
      bp[i * 3 + 1] = WATER_TOP - 0.15 - ((bubbleBase[b + 1] + t * 0.28 + bubbleBase[b + 3] * 0.03) % 1) * 2.0;
      bp[i * 3 + 2] = bubbleBase[b + 2];
    }
    bubbleGeo.attributes.position.needsUpdate = true;
  }
  tipMat.opacity = (0.42 + 0.30 * Math.sin(t * 2.1)) * waterReveal;

  /* —— 雪 —— */
  const snowA = smoothstep(0.75, 0.85, p) * (1 - smoothstep(0.92, 0.99, p));
  snowMat.opacity = snowA * 0.95;
  snow.visible = snowA > 0.01;
  const winterF = smoothstep(0.72, 0.80, p);
  // 草不是“瞬间弹回来”：深冬最后一点时间从土里慢慢返青，避免跨年一帧跳变
  const grassSpring = smoothstep(0.90, 1.0, p);
  const grassK = Math.max(0.0001, Math.max(1 - winterF, grassSpring));
  scene.__grass.material.opacity = grassK;
  scene.__grass.scale.set(1, 1, 1);
  // 雨：只在下雨窗口可见，落在树/土上时画面变暗
  rainMat.opacity = rainA * 0.82;
  rain.visible = rainA > 0.01;
  if (rain.visible) {
    const rp = rainGeo.attributes.position.array;
    for (let i = 0; i < RAIN_COUNT; i++) {
      const i3 = i * 3;
      rp[i3 + 1] -= rainVel[i] * dt;
      rp[i3] += 1.2 * dt;
      if (rp[i3 + 1] < 0) {
        rp[i3 + 1] = 8 + Math.random() * 3;
        rp[i3] = (Math.random() - 0.5) * 24;
        rp[i3 + 2] = -9 + Math.random() * 9;
      }
    }
    rainGeo.attributes.position.needsUpdate = true;
  }
  if (snow.visible) {
    const pos = snowGeo.attributes.position.array;
    for (let i = 0; i < SNOW_COUNT; i++) {
      const i3 = i * 3;
      pos[i3 + 1] -= snowVel[i] * dt * 0.9;
      pos[i3] += Math.sin(t * 0.9 + snowPhase[i]) * dt * 0.5;
      pos[i3 + 2] += Math.cos(t * 0.7 + snowPhase[i]) * dt * 0.4;
      if (pos[i3 + 1] < 0) {
        pos[i3 + 1] = 24 + Math.random() * 4;
        pos[i3] = (Math.random() - 0.5) * 56;
        pos[i3 + 2] = -24 + Math.random() * 28;
      }
    }
    snowGeo.attributes.position.needsUpdate = true;
  }

  /* —— 天空飞鸟群：三个窗口各飞一群，雨天与隆冬不出鸟 —— */
  const flight = birdFlightAt(t);
  const birdRainFade = 1 - smoothstep(0.12, 0.42, rainA);
  const birdWinterFade = 1 - 0.78 * smoothstep(0.76, 0.84, p);
  const birdVis = flight.env * birdRainFade * birdWinterFade;
  skyBirds.visible = birdVis > 0.01;
  skyBirds.material.opacity = Math.min(1, birdVis * 1.25);
  if (skyBirds.visible) {
    const bq = camera.quaternion;
    for (let i = 0; i < 14; i++) {
      const lead = i < 9;
      const k = lead ? i : i - 9;
      const row = k === 0 ? 0 : Math.ceil(k / 2);
      const side = k === 0 ? 0 : (k % 2 ? 1 : -1);
      const jx = creatureJitter[i] * 0.35;
      const jy = creatureJitter[(i + 11) % 40] * 0.30;
      const x = -46 + 92 * flight.u + side * (0.7 + row * 0.55) + jx;
      const y = 9.5 + 5 * Math.sin(Math.PI * flight.u) - row * 0.38 + jy + 0.9 * Math.sin(t * 0.35 + creaturePhase[i]);
      const z = -62 + 10 * Math.sin(Math.PI * flight.u) - row * 0.6;
      const sc = lead ? 1.30 : 0.70;
      const flap = 0.55 + 0.45 * Math.sin(t * 7.0 + creaturePhase[i]);
      _p.set(x, y, z);
      _q.copy(bq);
      _s.set(sc, sc * flap, sc);
      _m.compose(_p, _q, _s);
      skyBirds.setMatrixAt(i, _m);
    }
    skyBirds.instanceMatrix.needsUpdate = true;
  }

  /* —— 栖息的小鸟 / 蝴蝶 / 蜜蜂 / 瓢虫：对齐第 11、12 章文案 —— */
  const perchVis = Math.min(1,
    smoothstep(196, 199, t) * (1 - smoothstep(218, 222, t)) * 1.0 +
    smoothstep(120, 123, t) * (1 - smoothstep(136, 140, t)) * 0.55);
  const insectVis = smoothstep(196, 199, t) * (1 - smoothstep(218, 222, t));
  const beeVis = Math.min(1,
    smoothstep(181, 184, t) * (1 - smoothstep(202, 206, t)) +
    insectVis * 0.7);
  birdWorldPoints = [];
  insectWorldPoints = [];
  perchBirds.visible = perchVis > 0.01;
  perchBirds.material.opacity = perchVis;
  if (perchBirds.visible) {
    for (let i = 0; i < 5; i++) {
      const flying = i >= 3;
      const x = flying ? 2.6 * Math.sin(t * 0.55 + creaturePhase[i]) : -2.4 + i * 1.9 + creatureJitter[i] * 0.25;
      const y = flying ? 4.6 + 0.8 * Math.sin(t * 0.9 + creaturePhase[i]) : 3.5 + (i % 2) * 1.15 + Math.sin(t * 1.6 + creaturePhase[i]) * 0.025;
      const z = flying ? 0.85 + 0.4 * Math.cos(t * 0.5 + creaturePhase[i]) : 0.55 + creatureJitter[(i + 7) % 40] * 0.25;
      _p.set(x, y, z); _q.copy(camera.quaternion);
      const sc = 0.78 + 0.06 * Math.sin(t * 2 + creaturePhase[i]);
      _s.set(sc, sc * (0.92 + 0.08 * Math.sin(t * 6 + creaturePhase[i])), sc);
      _m.compose(_p, _q, _s);
      perchBirds.setMatrixAt(i, _m);
      birdWorldPoints.push(_p.clone());
    }
    perchBirds.instanceMatrix.needsUpdate = true;
  }
  butterflies.visible = insectVis > 0.01;
  butterflies.material.opacity = insectVis;
  if (butterflies.visible) {
    for (let i = 0; i < 7; i++) {
      const ph = creaturePhase[i];
      _p.set(2.7 * Math.sin(t * 0.85 + ph), 4.0 + 1.25 * Math.sin(t * 1.55 + ph), 0.7 + 0.7 * Math.cos(t * 0.7 + ph));
      _q.copy(camera.quaternion);
      const flap = 0.35 + 0.65 * Math.abs(Math.sin(t * 9 + ph));
      const sc = 0.68 + 0.08 * creatureJitter[(i + 3) % 40];
      _s.set(sc * flap, sc, sc);
      _m.compose(_p, _q, _s);
      butterflies.setMatrixAt(i, _m);
      insectWorldPoints.push(_p.clone());
    }
    butterflies.instanceMatrix.needsUpdate = true;
  }
  bees.visible = beeVis > 0.01;
  bees.material.opacity = beeVis;
  if (bees.visible) {
    for (let i = 0; i < 5; i++) {
      const ph = creaturePhase[(i + 9) % 40];
      _p.set(2.0 * Math.sin(t * 1.15 + ph), 4.3 + 0.7 * Math.sin(t * 2.3 + ph), 0.6 + 0.5 * Math.cos(t * 1.7 + ph));
      _q.copy(camera.quaternion);
      const sc = 0.52;
      _s.set(sc, sc * (0.85 + 0.15 * Math.sin(t * 14 + ph)), sc);
      _m.compose(_p, _q, _s);
      bees.setMatrixAt(i, _m);
      if (insectVis > 0.1) insectWorldPoints.push(_p.clone());
    }
    bees.instanceMatrix.needsUpdate = true;
  }
  ladybugs.visible = insectVis > 0.01;
  ladybugs.material.opacity = insectVis;
  if (ladybugs.visible) {
    for (let i = 0; i < 5; i++) {
      _p.set(-1.9 + i * 0.95 + 0.12 * Math.sin(t * 0.4 + creaturePhase[i]), 2.7 + (i % 3) * 0.55, 0.42);
      _q.copy(camera.quaternion);
      const sc = 0.36;
      _s.set(sc, sc, sc);
      _m.compose(_p, _q, _s);
      ladybugs.setMatrixAt(i, _m);
      insectWorldPoints.push(_p.clone());
    }
    ladybugs.instanceMatrix.needsUpdate = true;
  }

  /* —— 树荫 / 光斑 / 云影 / 飞絮 —— */
  const leafPresence = p < 0.05 ? smoothstep(0, 0.05, p) : (1 - smoothstep(0.56, 0.72, p));
  const summerShade = smoothstep(0.16, 0.32, p) * (1 - smoothstep(0.62, 0.78, p));
  treeShadeMat.opacity = 0.88 * smoothstep(0.30, 0.90, g) * leafPresence * summerShade * (1 - 0.7 * rainA);
  treeShade.visible = treeShadeMat.opacity > 0.01;
  for (let i = 0; i < cloudShadowMats.length; i++) {
    cloudShadowMats[i].opacity = (0.05 + 0.09 * pal.cloud) * (0.6 + 0.4 * Math.sin(t * 0.05 + i));
    cloudShadowMeshes[i].position.x = ((t * (0.55 + i * 0.18) + i * 17) % 70) - 35;
  }
  const fluffSeason = smoothstep(0.10, 0.18, p) * (1 - smoothstep(0.34, 0.42, p));
  fluffMat.opacity = 0.55 * fluffSeason * smoothstep(0.3, 0.9, g) * (1 - rainA);
  fluff.visible = fluffMat.opacity > 0.01;
  if (fluff.visible) {
    const fp = fluffGeo.attributes.position.array;
    for (let i = 0; i < FLUFF_COUNT; i++) {
      const b = i * 4;
      fp[i * 3] = fluffBase[b] + Math.sin(t * 0.45 + fluffBase[b + 3]) * 0.55;
      fp[i * 3 + 1] = 0.3 + ((fluffBase[b + 1] * 7 + t * 0.22) % 7);
      fp[i * 3 + 2] = fluffBase[b + 2] + Math.cos(t * 0.3 + fluffBase[b + 3]) * 0.4;
    }
    fluffGeo.attributes.position.needsUpdate = true;
  }

  /* —— 第 13 章落果里的新种子 / 第 14 章「新的轮回」 —— */
  const seedDropVis = (yearIndex >= 2) ? smoothstep(0.68, 0.72, p) * (1 - smoothstep(0.78, 0.84, p)) : 0;
  seedDropMat.opacity = 0.85 * seedDropVis;
  seedDrop.visible = seedDropVis > 0.01;
  if (seedDrop.visible) {
    const sp = seedDropGeo.attributes.position.array;
    for (let i = 0; i < SEED_DROP; i++) {
      const b = i * 4;
      const fall = (seedDropBase[b + 1] + t * 0.32) % 1;
      sp[i * 3] = seedDropBase[b] + Math.sin(t * 0.9 + seedDropBase[b + 3]) * 0.12;
      sp[i * 3 + 1] = 0.06 + (1 - fall) * 2.6;
      sp[i * 3 + 2] = seedDropBase[b + 2];
    }
    seedDropGeo.attributes.position.needsUpdate = true;
  }
  const epilogue = smoothstep(250, 259.0, t);
  epilogueGroup.visible = epilogue > 0.01;
  epilogueGroup.scale.setScalar(0.45 + 1.05 * epilogue);

  /* —— 风：整棵树轻轻摇 —— */
  const wind = smoothstep(0, 1, g);
  treeRoot.rotation.z = Math.sin(t * 0.62) * (0.012 + 0.018 * rainA) * wind;
  treeRoot.rotation.x = Math.cos(t * 0.48) * (0.010 + 0.012 * rainA) * wind;
  // 根系抵销整树摇摆：埋在土里的根不该跟着树冠晃，深根也不会被剖面遮住
  if (tree.rootSub) tree.rootSub.quaternion.copy(treeRoot.quaternion).invert();

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
  const aspectNow = Math.max(0.01, camera.aspect);
  const aspectFix = aspectNow < 1.45 ? Math.min(2.8, Math.pow(1.45 / aspectNow, 0.82)) : 1;
  // 生长阶段走镜头脚本（种子微距、根系剖面、破土、幼苗、后拉），长成后自动框住全树
  const camFrame = cameraFrameAt(t);
  const topY = Math.max(0.9, crownTop + 0.52);
  // 第 2 年缓慢把取景下沿压到含水层，让「根越扎越深」一直看得见；
  // 竖屏靠 aspectFix 本来就能看到很深的剖面，不再额外拉远。四季合影期间关掉。
  const deepReveal = quartetShooting ? 0 : smoothstep(205, 255, t) * smoothstep(0.90, 1.45, aspectNow);
  const BOTTOM_AUTO = -0.62 - 3.6 * smoothstep(0, 0.34, g) - 6.35 * deepReveal;
  const autoTargetY = (topY + BOTTOM_AUTO) / 2;
  const autoViewH = topY - BOTTOM_AUTO;
  let fitR;
  if (camFrame) {
    cam.target.y = camFrame.targetY;
    fitR = camFrame.viewH / (2 * Math.tan((camera.fov * Math.PI) / 360));
  } else {
    // t=120 不再一帧硬切：用 10s 从脚本末帧平滑过渡到自动取景
    const last = cameraFrameAt(119.999);
    const b = smoothstep(120, 130, t);
    cam.target.y = last.targetY + (autoTargetY - last.targetY) * b;
    fitR = (last.viewH + (autoViewH - last.viewH) * b) / (2 * Math.tan((camera.fov * Math.PI) / 360));
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
  if (t < STORY_END - 2.2 && SEASONS[sIdx].name !== currentSeasonLabel) {
    currentSeasonLabel = SEASONS[sIdx].name;
    seasonEl.textContent = currentSeasonLabel;
    subEl.textContent = SEASONS[sIdx].sub;
    seasonEl.style.animation = 'none';
    void seasonEl.offsetWidth;
    seasonEl.style.animation = 'seasonIn .7s ease both';
  }
  yearEl.textContent = '第 ' + yearIndex + ' 年';
  const subText = (sIdx === 2 && fruitMature > 0.45) ? '果实熟了' : SEASONS[sIdx].sub;
  if (t < STORY_END - 2.2 && subEl.textContent !== subText) subEl.textContent = subText;
  const seasonProgress = ((p % 1) + 1) % 1;
  if (wheelNeedleEl) wheelNeedleEl.style.transform = 'translate(-50%, -100%) rotate(' + (seasonProgress * 360).toFixed(2) + 'deg)';
  if (wheelYearEl) wheelYearEl.textContent = '第 ' + yearIndex + ' 年';
  if (classSeasonEl) {
    const seasonLine = SEASONS[sIdx].name + ' · 第 ' + yearIndex + ' 年';
    if (classSeasonEl.textContent !== seasonLine) classSeasonEl.textContent = seasonLine;
  }
  // 结尾「新的轮回又要开始」：最后 2 秒把季节标签与指针拨回春，配合土面新芽
  if (t >= STORY_END - 2.2) {
    currentSeasonLabel = '春';
    seasonEl.textContent = '春';
    subEl.textContent = '万物发芽 · 新的轮回';
    if (classSeasonEl) classSeasonEl.textContent = '春 · 新的一年';
    if (wheelNeedleEl) wheelNeedleEl.style.transform = 'translate(-50%, -100%) rotate(0deg)';
  }

  if (DEBUG && Math.floor(t * 2) !== Math.floor((t - dt) * 2)) {
    console.log('[debug]', 't=' + t.toFixed(1), 'p=' + p.toFixed(3), 'g=' + g.toFixed(3),
      'ground=#' + pal.ground.getHexString(), 'snowA=' + snowA.toFixed(2),
      'grassY=' + scene.__grass.scale.y.toFixed(2));
  }

  /* —— 直出：ACES 色调映射 + 天空 shader 自带的大气与光晕 ——
     定帧 / 暂停时画面是静态的，只在「时间、镜头、季节状态」变化时重绘一次。
     否则软件渲染的无头截图会对每帧都做 400+ draw call，审查脚本会卡死。 */
  const staticKey = (dt === 0 && !playing && !scrubbing)
    ? [t.toFixed(3), cam.theta.toFixed(3), cam.phi.toFixed(3), cam.radius.toFixed(3), (findActive ? 1 : 0)].join('|')
    : '';
  if (staticKey === '' || staticKey !== lastStaticRenderKey) {
    lastStaticRenderKey = staticKey;
    renderer.render(scene, camera);
  }
}

window.addEventListener('resize', () => {
  const vp = appViewportSize();
  camera.aspect = vp.w / vp.h;
  camera.updateProjectionMatrix();
  renderer.setSize(vp.w, vp.h);
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

if (CLASSROOM_PARAM) {
  enterClassroomMode({ reset: false, fullscreen: false, autoplay: FREEZE_T === null });
}
window.__classroom = {
  enter: enterClassroomMode,
  exit: exitClassroomMode,
  state: () => ({ classroomMode, autoPauseAtChapter, voiceOn, projectorBright, touchLocked, storyTime, playing, currentChapter }),
  pickPartAt,
  partVisibleAt,
  findState: () => ({ findActive, findTarget, findBag: findBag.slice(), findBagIndex, findRound }),
  findablePartsAt,
  partScreenPoints,
  handleCanvasTap,
  startFindGame,
  stopFindGame,
  seekForTest: (t) => {
    freezeOverride = t; storyTime = t; prevT = t; playing = false;
    cam.theta = 1.46; cam.radius = 12.5; cam.phi = 1.46;   // 固定正面视角，保证截图可复现
    updateChapterUI(t); syncPlayer();
  },
};
animate();
