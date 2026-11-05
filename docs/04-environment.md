# 04 · 环境、光照与天气

> 本文解决：天空/太阳/光照、地面、草花、土壤剖面、远山、雾、雨、雪、浮尘这些环境元素在哪里生成、参数是什么，以及怎么改四季氛围。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。

## 1. 天空与太阳

### 1.1 天空 shader

源码：`src/main.js` 顶部 `skyUniforms` + `sky`（SphereGeometry 320，BackSide 自定义 ShaderMaterial）。

Uniform：

| Uniform | 含义 |
|---|---|
| `topColor` | 天顶色 |
| `horizonColor` | 地平线色 |
| `sunColor` | 太阳/光晕颜色 |
| `sunDir` | 世界空间太阳方向 |
| `time` | 云层动画时间 |
| `cloudCover` | 云量 0..1 |
| `cloudWarm` | 云底暖色程度 |

Fragment shader 内包含：
- 天顶→地平线渐变；
- 太阳盘 + 多级暖晕；
- 两层 fbm 云（不同速度）；
- 地平线附近暖霾。

`sky` 使用自定义 ShaderMaterial，不参与 `renderer.toneMapping` 的 ACES 后处理，所以天空与场景其他材质略有不同的响应；这是刻意保留的，改曝光时注意。

### 1.2 太阳安全区（重要）

不要用固定的 `sunAz = -2.02...`：桌面端 3D 舞台右侧有左侧讲解栏，固定世界方位会让太阳跑到画布左边界外/被遮。

当前 `animate()` 中：

```js
const sunAz = cam.theta - Math.PI - 0.28 + Math.sin(t * 0.03) * 0.04;
```

即太阳跟随相机方位角，偏左约 0.28 弧度，始终位于右侧舞台的安全区。改相机或改太阳时，必须用 `?t0=92`（第一年秋）和 `?t0=142`（第二年春）截图检查太阳完整可见。

### 1.3 太阳 sprite 与光芒

- `sunSprite`：径向渐变 Sprite，`scale 9`，Additive。
- `sunRays`：程序化放射线 Canvas，`scale 72`，Additive，透明度随 `p` 和雨量衰减。

## 2. 光照

| 灯光 | 参数 | 作用 |
|---|---|---|
| `hemi` | 颜色/强度随季节：`.50/.45/.42/.55` | 天空/地面半球光 |
| `ambient` | `0xbcd8e8`，强度 `0.38` | 提亮树冠暗部，避免逆光死黑 |
| `sun` | 季节颜色/强度（春 2.6、夏 2.8、秋 2.6、冬 1.8） | 主光，投影 |
| `rim` | `0xfff0dd`，0.85 | 左后方轮廓 |
| `frontFill` | `0xfff1dc`，2.35，位置 (8,12,20) | 正面补光，树脸不黑 |
| `fillUnder` | `0xffe1b8`，1.25，位置 (2.5,-3,18) | 只照剖面的土壁 |
| `sun.shadow` | 2048²，PCFSoft | 树影/叶影 |

`renderer.toneMapping = ACESFilmicToneMapping`，`exposure = 1.12`。

> 用户曾反馈“逆光时树偏暗”，解决方式就是**侧逆光 + frontFill + ambient**。不要为了戏剧性把 frontFill 调回 1 以下。

## 3. 地面与土壤

### 3.1 地面

- `GROUND_R = 90`，半圆岛（z ≤ 0）。
- `buildGroundGeometry(R, rings=40, seg=72)`：顶点色用 `fbm` 做低频明暗，不靠贴图平铺。
- `groundTexture()`：1024 Canvas，5200 草叶笔触 + 6000 噪点，repeat 14。
- `groundMat`：`MeshStandardMaterial`，`vertexColors`，颜色按季节 `pal.ground`。

### 3.2 土壤剖面

- `ISLAND_R = 25`，`SOIL_DEPTH = 9`，`FACE_H = 11.5`。
- `soilTexture()`：1024×512，四层土层（表土/心土/底土/深土），9600 团粒、620 石子、26000 砂粒、裂缝、有机质斑块；`flipY=false` 让表土在上。
- `SOIL_TEX` 同时作为 `bumpMap`，`bumpScale 0.12`。
- 断面里 420 个 3D 土团粒 InstancedMesh + 70 个石子 InstancedMesh；`soilFace.receiveShadow=false`（避免树冠投影变成脏斑）。
- `turfGeo`：240 段不规则草皮 ribbon，替代原来的直 Box。
- `soilWall`：半圆柱外壁。

### 3.3 远山

`ridgeGroup` 三层 `makeRidge()`：半径 138/96/61，高度 17/8.5/3.4；用 fbm 产生轮廓，颜色按 `pal.fog/pal.skyTop/pal.ground` 混合；`fog:false`（自行做空气透视）。

## 4. 草、花、地面落叶

### 4.1 草

- `buildGrass(seed)`：`COUNT=16000`，半径 0.3–34，远距离拒绝采样，近景 `nearBoost` 加高。
- `GRASS_TEX`：256 Canvas，矮草 + 长叶 + 抽穗。
- `windMaterial()` 通过 `onBeforeCompile` 注入 `uGrassTime`：每丛草按世界 x/z 相位摆动。
- 冬季用 `material.opacity = grassK` 淡出（不再整体缩放收回）；`transparent:true`。
- 草地是单个 `InstancedMesh`，不要拆成大量 mesh。

### 4.2 野花

- `buildFlowers(seed)`：`COUNT=1400`，半径 0.8–12，`FLOWER_TEX` 五瓣小花。
- `flowerF = smoothstep(.01,.07,p)*(1-smoothstep(.40,.48,p))`；`material.opacity=flowerF`，不缩放。
- `M` 键/音乐不相关；花是 3D 实例。

### 4.3 地面落叶

- `buildGroundLeaves(seed)`：1600 片，位置围绕树 0.4–10.5m，大小 .16–.32。
- `userData.leafInfo` 保存原始 pos/quat/size/color；`animate()` 中按：
  - `groundLeafShow = smoothstep(.52,.68,p)` 铺开；
  - `groundLeafDecay = smoothstep(.70,.94,p)` 变暗、下沉、缩小、腐烂；
  - 不允许整体 opacity 收回或把所有叶子一起缩放；要保留“叶子落在地上、逐渐消失在土里”的逻辑。

## 5. 粒子与天气

### 5.1 雨

- `RAIN_COUNT=1400`，`rainTexture()` 是竖向雨丝。
- `RAIN_WINDOWS` 当前：
  ```js
  [[16,31,.62], [40,54,.55], [62,72,.45], [128,138,.5], [206,216,.4]]
  ```
  - 16–31：第 2 章春雨；
  - 40–54：第 3 章扎根时的雨；
  - 62–72：第 4 章破土的雨；
  - 128–138 / 206–216：夏雨。
- `weatherAt(t)` 返回强度 0..1；`rainMat.opacity = rainA*0.82`。
- 雨时 `sun.intensity` 降低、云量增加、`groundMat` 变暗（`*(1-0.16*rainA)`）、树摇幅度加大。

### 5.2 雪

- `SNOW_COUNT=9000`，`snowVel=0.30+rand*0.55`，下落 `*dt*0.9`。
- `snowMat.size=0.30`，`snowA = smoothstep(.76,.88,p)*(1-smoothstep(.98,1,p))`。
- 枝头 `snowCaps`：按枝条点采样，冬天 `snowCapK` 淡入淡出；早春淡出。
- 冬季在 `p=.75–1`，一年 20 秒，给雪足够展示时间。

### 5.3 飘落花瓣/落叶

- `FALL_COUNT=220` 的 `InstancedMesh(LEAF_GEO)`。
- 秋天 `autumnSpawnRate` 按 `p .52–.88`，花瓣 `p<.12` / `p>.88`。
- 生成时从 `tree.leafData` 随机取源位置；`d.pos.copy(src.pos)` 后模拟下落、风摆、旋转，落地隐藏。

### 5.4 浮尘

- `DUST_COUNT=280`，`dustMat.opacity` 与 `g`、季节相关；粒子缓慢上升，越界回到底部。

## 6. 四季环境参数

`SEASONS` 数组（`src/main.js` 顶部）包含：

```js
{ skyTop, horizon, fog, ground, sun, sunI, hemi, snow, cloud, cloudWarm, exposure, bloom }
```

- 春天：暖白地平线、云多、地面嫩绿；
- 夏天：高蓝天空、云少、地面深绿；
- 秋天：暖橙地平线、云暖、地面金褐；
- 冬天：冷蓝天空、云多、地面雪白。

`samplePalette(p)` 在每季 `55%–95%` 区间内做平滑过渡，注意：这会让色彩比章节标签提前约 1 秒进入下一季；如需严格同步，改 `samplePalette` 的 `f` 窗口。

## 7. 修改环境的检查清单

- 改太阳/光照 → 截图 `?t0=92`、`?t0=142`、`?t0=20`，确认太阳完整、树不黑；
- 改雪 → `?t0=170` 检查雪密度、速度、枝头积雪；
- 改雨 → `?t0=20` 检查第 2 章雨；
- 改土壤 → `?t0=40/100/170` 检查断面层次和根系；
- 改草/花 → `?t0=80` 检查近景质感，`?t0=140` 检查秋草。

> 环境物体大多使用 InstancedMesh；新增粒子/实例前先核对 `renderer.info` 的 draw calls 与 triangles，别把移动端拖垮。
