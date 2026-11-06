# 04 · 环境、光照与天气

> 本文解决：天空/太阳/光照、地面、草花、土壤剖面与地下水层、远山、雾、云影、飞鸟虫、雨雪浮尘这些环境元素在哪里生成、参数是什么，以及怎么改四季氛围。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 最后更新：2026-11-07 · 对应代码：`6e5f29f`（第三轮 UI 现代化 · 现代设计系统 · 交互与动效）

## 1. 天空与太阳

### 1.1 天空 shader（本轮修复「云被关掉」）

源码：`src/main.js` 顶部 `skyUniforms` + `sky`（SphereGeometry 320，BackSide 自定义 ShaderMaterial）。

| Uniform | 含义 | 每帧来源 |
|---|---|---|
| `topColor` | 天顶色 | `pal.skyTop` |
| `horizonColor` | 地平线色 | `pal.horizon` |
| `sunColor` | 太阳/光晕颜色 | `pal.sun` |
| `sunDir` | 世界空间太阳方向 | `sunDir`（与太阳 sprite 同步） |
| `time` | 云层动画时间 | `t` |
| `cloudCover` | 云量 0..1 | `Math.min(1, pal.cloud + rainA*0.55)` |
| `cloudWarm` | 云底暖色程度 | `pal.cloudWarm` |

Fragment shader 内包含：天顶→地平线渐变、太阳盘 + 多级暖晕、**三层 fbm 云**、地平线附近暖霾。

```glsl
float n1 = fbm(uv * 1.25 + vec2(time * 0.016,  time * 0.005));
float n2 = fbm(uv * 3.10 + vec2(time * 0.026, -time * 0.009));
float n3 = fbm(uv * 1.90 + vec2(time * 0.020, -time * 0.006));
float n = n1 * 0.56 + n2 * 0.24 + n3 * 0.20;
float lo = 0.40 - cloudCover * 0.14;          // 旧版 0.84 - cloudCover*0.07
float cover = smoothstep(lo, lo + 0.16, n);
cover *= smoothstep(0.07, 0.36, dir.y);
col = mix(col, cloudCol, cover * 0.42);        // 旧版 0.20
```

旧版阈值 `≈0.81–0.84` 远高于 5 层 fbm 的典型值 ≈0.48，`cover` 恒为 0，云实际上从未出现。本轮改为 `0.40 - cloudCover*0.14`、流速约 ×2、不透明度 ×2，云才真的可见，且 `cloudCover` 从秋 0.26 到冬 0.82（雨天再 +rainA*0.55）能明显改变云量。

`sky` 使用自定义 ShaderMaterial，不参与 `renderer.toneMapping` 的 ACES 后处理，所以天空与场景其他材质略有不同的响应；这是刻意保留的，改曝光时注意。

### 1.2 太阳安全区（保持不变）

不要用固定的 `sunAz = -2.02...`：桌面端 3D 舞台左侧有讲解栏，固定世界方位会让太阳跑到画布外/被遮。

```js
const sunElev = 0.16 + 0.10 * (0.5 + 0.5 * Math.cos((p - 0.25) * Math.PI * 2));
const sunAz = cam.theta - Math.PI - 0.28 + Math.sin(t * 0.03) * 0.04;
```

太阳仍跟随相机方位角、偏左约 0.28 弧度，始终位于右侧舞台安全区（本轮保留该约束）。`sun.shadow` 视锥本轮扩大到 `left/right -20/20`、`top/bottom 18/-16`、`near/far 1/110`，长影不再被硬裁。改相机或改太阳时用 `?t0=92`、`?t0=142` 截图检查太阳完整可见。

### 1.3 太阳 sprite 与光芒（本轮柔化）

- `sunSprite`：径向渐变 Sprite，`scale 6.5`（旧 9）、`opacity 0.78`，渐变增加 0.38 / 0.72 两段过渡，核心不再硬白。
- `sunRays`：**28 条锥形渐变短光束**（旧 46 条笔直硬边线），长短/角度/透明度都抖动，`scale 52`（旧 72）、`opacity 0.32`。
- 每帧光芒透明度：`0.30 * (0.55 + 0.45*(1 - smoothstep(0.6,0.9,p))) * (1 - 0.6*rainA) * (0.75 + 0.9*pal.bloom)`。
- **四季曝光/泛光参数不再是死参数**：`renderer.toneMappingExposure = 1.12 + (pal.exposure - 0.94) * 0.32` 每帧更新；`pal.bloom` 参与光芒强度。注意没有引入 `EffectComposer`，`bloom` 仍是「光芒 sprite 强度」而非真正后处理泛光。

## 2. 光照

| 灯光 | 参数 | 作用 |
|---|---|---|
| `hemi` | 颜色/强度随季节：`.50/.45/.42/.55` | 天空/地面半球光 |
| `ambient` | `0xbcd8e8`，强度 `0.38` | 提亮树冠暗部，避免逆光死黑 |
| `sun` | 季节颜色/强度（春 2.6、夏 2.8、秋 2.6、冬 1.8），`*(1-0.38*rainA)` | 主光，投影 |
| `sun.shadow` | 2048²、PCFSoft、`bias -0.0006`、`normalBias 0.06`、视锥 `-20..20 / 18..-16 / 1..110` | 树影/叶影 |
| `rim` | `0xfff0dd`，0.85，位置 (-14,9,-16) | 左后方轮廓 |
| `frontFill` | `0xfff1dc`，`2.35 + 0.55*closeBoost`，位置 (8,12,20) | 正面补光，树脸不黑 |
| `fillUnder` | `0xffe1b8`，`1.25 + 0.85*closeBoost`，位置 (2.5,-3,18) | 只照剖面的土壁 |

**微距补光 `closeBoost`（本轮新增）**：`closeFrame = cameraFrameAt(t)`，`closeBoost = closeFrame ? 1 - smoothstep(1.0, 4.2, closeFrame.viewH) : 0`。第 1 章微距 `viewH=0.9` 时补光最强，土壁层理才读得出来；随镜头拉远平滑退出。

> 用户曾反馈「逆光时树偏暗」，解决方式是**侧逆光 + frontFill + ambient**。不要把 frontFill 调回 1 以下。

## 3. 地面与土壤剖面（本轮重写）

### 3.1 地面

- `GROUND_R = 90`，半圆岛（z ≤ 0）。
- `buildGroundGeometry(R, rings=40, seg=72)`：顶点色用 `fbm` 做低频明暗，不靠贴图平铺。
- `groundTexture()`：1024 Canvas，5200 草叶笔触 + 6000 噪点，`repeat(14,14)`。
- `groundMat`：`MeshStandardMaterial`，`vertexColors`，颜色按季节 `pal.ground * (1 - 0.16*rainA)`。
- `scene.fog`：`THREE.Fog(0xcfe9f5, 34, 205)`（far 由 165 放宽到 205，深潜镜头下远景仍有空气透视；远山 shader 仍 `fog:false` 并手动混 `pal.fog`）。

### 3.2 土壤贴图：6 层 + 4 八度层界

常量：`ISLAND_R = 25`，**`SOIL_DEPTH = 12.0`**（旧 9），`FACE_H_EXTRA = 2.5`，**`FACE_H = 14.5`**，`WATER_TOP = -9.6`，`ROOT_FLOOR = -10.0`。

`soilTexture()` 全部重写：

| 项 | 最终值 |
|---|---|
| 画布 | **2048×768**（旧 1024×512） |
| `flipY` | **`true`**（画布第一行对应 UV 顶部，表土在最上面） |
| `repeat` | **`set(1, 1)`**（旧 2.5，非周期噪声重复会在画面中间出现纵向接缝） |
| `wrapS / wrapT` | `RepeatWrapping / ClampToEdgeWrapping` |
| `anisotropy` | 8 |
| 底色 | `rgb(86,64,42)`（旧 `58,42,30`，整体提亮） |
| 6 层 | 表土 `rgb(96,70,44)` / 心土 `rgb(112,84,54)` / 底土 `rgb(126,100,66)` / **毛管湿润带** `rgb(92,84,64)` / **含水饱和带** `rgb(48,64,68)` / **母质** `rgb(26,42,52)` |
| 层界 | `boundary(x, idx)` = 基准 `[0,.10,.42,.54,.66,.84,1]*h` + 4 八度 fbm（幅度 95/70/26/7，下层 `amp` 更大 0.55/0.95/1.25） |
| 层内色斑 | 240 个径向斑 |
| 透镜体 | 64 个（旧 34） |
| 层界断层 | 5 条层界 × 8 段 |
| 根孔通道 | 20 个锥形暗痕 |
| 团粒 | 13000（旧 9600） |
| 近景土粒 / 孔隙 | **420 + 180**（微距可见「土是松的」） |
| 干裂缝 | 58 |
| 石子 | 820，`y > h*0.66` 的深部偏青灰 |
| 细砂 | 30000 |
| 含水带细节 | 150 个冷色潜育斑 + 54 条竖向渗流纹 |
| 表土腐殖质 | `rgba(36,25,15,0.30)` 覆盖 `h*0.055`（旧 `0.58` 覆盖 `h*0.10`），并加一条亮的地表结皮 |

`soilFaceMat`：`map/bumpMap = SOIL_TEX`，**`bumpScale 0.14`**（旧 0.18），`emissive 0x2b241a @ 0.22`，**`fog:false`**（深潜时含水层不被雾洗白）。`soilFace` 是 `PlaneGeometry(ISLAND_R*2.8, FACE_H)`，`receiveShadow=false`。

### 3.3 断面 3D 细节、草土边缘与 AO

- 断面里 **120 个半埋石子** InstancedMesh + **680 个 3D 土团粒** InstancedMesh（都随 `SOIL_DEPTH` 加深下移）。
- `turfGeo`：240 段不规则草皮 ribbon，`top = -0.015 + n*0.34`、`bot = -0.10 + n*0.12`（噪声幅度 ×3，不再是尺子直线）。
- **近景草根 + 土粒（本轮新增）**：130 段 `LineSegments` 草根细丝（近中心 70 段集中在 ±1.5 单位内）+ 105 个 `InstancedMesh` 土粒，都 `raycast = () => {}`。
- **手工 AO 重做**：左右压暗 0.30/0.13/0.02；顶部遮光带 **`0.10` 覆盖 `h*0.10`**（旧 0.22 覆盖 22%，是第 1 章黑带元凶之一）；深部只在 **`h*0.80–1` 收暗 0.55**、最底 `h*0.94–1` 再收 0.92，含水层以上保持明亮。贴片 `PlaneGeometry(ISLAND_R*2.8, SOIL_DEPTH+5)`，`fog:false`。
- **接触 AO 随树长大**：`contactAO.scale = 0.30 + 1.85*smoothstep(0.02,0.95,g)`、`opacity = 0.40 + 0.48*fat`；种子期只是一小片柔影，不再是恒定 7×7 大黑斑。

实测：`?t0=6&freeze` 下半屏亮度 **16.9 → 85.7/255**，土粒、层理、草根可读。

### 3.4 地下水层（本轮新增，模块级 `waterGroup`）

全部在模块级建一次，换树不重建；z 位于 AO 贴片 (0.028) 之前、根系 (0.05–0.62) 之后；一律加色材质 + `fog:false` + `raycast = () => {}`。

| 对象 | 内容 | 显现 |
|---|---|---|
| `waterGlow` | `PlaneGeometry(70, 0.22)` at `y=WATER_TOP, z=0.030`，`0xa8d8e8` | `opacity = 0.22*waterReveal` |
| `waterEdge` | `PlaneGeometry(70, 0.024)` at `WATER_TOP+0.11`，`0xdff4ff` | `0.28*waterReveal` |
| `waterSheenMat` | 4×128 冷色竖向渐变贴图，`PlaneGeometry(70, 2.6)` at `WATER_TOP-1.15` | `0.30*waterReveal` |
| `waterRipples` | ShaderMaterial，`w1/w2` 双正弦 + `uTime = t` + `uOpacity` | `uOpacity = 0.18*waterReveal` |
| `waterBubbles` | **150** 个 Points，`bubbleBase` 由 `mulberry32(0x5ea1)` 固定，位置为 `t` 的闭式取模 | `0.50*waterReveal` |
| `tipGlow` | **72** 个根尖吸水光点 Points，`mulberry32(0x71f0)` | `(0.42+0.30*sin(t*2.1))*waterReveal` |

`waterReveal = smoothstep(0.98, 1.16, rootAge)`；`rootAge` 在 t≈180 达到 1.16，但画面要等 `deepReveal`（205–255s）把相机下沿压到 `≈-10.57` 才真正进入视野。详见 [`02-timeline-and-camera.md`](02-timeline-and-camera.md)。

### 3.5 远山（未改动）

`ridgeGroup` 三层 `makeRidge()`：半径 172/124/82，高度 24/12.5/5.2；ridged fbm 生成起伏山脊线，每层 7 段竖向渐变网格 + `ShaderMaterial`（底部接近雾色、顶部山体色，远山雪线 `uSnowLine/uSnowStrength`）；`fog:false`，颜色在 `animate()` 中随 `pal.fog/pal.skyTop/pal.ground` 更新。

## 4. 天空与树上的生机（本轮新增）

### 4.1 程序化贴图与 `makeCreature()`

5 张 Canvas 贴图：`birdTexture()` 128×64（V 字剪影 + 身体）、`perchBirdTexture()` 128×96（身体/头/喙/翅/尾/眼/爪）、`butterflyTexture()` 128×96（四翅 + 触角）、`beeTexture()` 96×64（双翅 + 条纹身体）、`ladybugTexture()` 64×64（红鞘翅 + 黑点）。

```js
makeCreature(tex, count, size, opacity) → InstancedMesh(PlaneGeometry(size, size*0.62), mat, count)
mat = MeshBasicMaterial({ map, transparent, opacity, depthWrite:false, fog:false, DoubleSide, alphaTest:0.02 })
mesh.raycast = () => {};  // 不参与射线拾取
```

| 实例 | 数量 | size | 位置 |
|---|---:|---:|---|
| `skyBirds` | 14 | 1.0 | 远处天空，z≈-62，billboard 用 `camera.quaternion` |
| `perchBirds` | 5 | 0.88 | 树冠前 z≈0.55–1.25，3 只栖息 + 2 只飞动 |
| `butterflies` | 7 | 0.70 | 树冠前 z≈0.7–1.4 |
| `bees` | 5 | 0.46 | 树冠前 z≈0.6–1.1 |
| `ladybugs` | 5 | 0.45 | 树冠前 z≈0.42 |

- `creatureRng = mulberry32(0xB17D)` 生成 40 个 `creatureJitter` 与 40 个 `creaturePhase`，所有轨迹是 `t` 的闭式函数（不用 dt 积分、不用每帧随机定位），`?t0=N&freeze` 完全可复现。
- `BIRD_WINDOWS = [[46,84],[128,158],[196,232]]`，`birdFlightAt(t)` 取窗口内 `u` 与淡入淡出 `env`；`birdRainFade = 1 - smoothstep(0.12,0.42,rainA)`、`birdWinterFade = 1 - 0.78*smoothstep(0.76,0.84,p)` 保证**雨天与隆冬不出鸟**。
- 鸟群编队：9 只领队 + 5 只跟随，V 字/斜列，`sc` 1.30/0.70，拍翼 `0.55+0.45*sin(t*7+phase)`；栖息鸟 `perchVis`、昆虫 `insectVis`、蜜蜂 `beeVis` 的窗口见 `docs/02` 第 3 节。
- `birdWorldPoints` / `insectWorldPoints` 每帧由实例世界位置填充，供「找一找」的 bird/insect 部位投影拾取。

### 4.2 树荫 / 云影 / 飞絮 / 落果种子 / 结尾新芽

- **`treeShade`**：`dappleTexture()`（256²，径向暗斑 + 90 个暖色光斑），`PlaneGeometry(15,8)` 铺在 `y=0.028, z=-4`；`opacity = 0.88*smoothstep(0.30,0.90,g)*leafPresence*summerShade*(1-0.7*rainA)`，兑现「树荫下凉快极了」。
- **`cloudShadowMeshes`**：3 张 `cloudShadowTex()` 软椭圆，`PlaneGeometry([16,22,28],[9,12,15])`，`x = ((t*(0.55+i*0.18)+i*17) % 70) - 35` 与天空云同方向缓慢飘过，`opacity = (0.05+0.09*pal.cloud)*(0.6+0.4*sin(t*0.05+i))`。
- **`fluff`**：`FLUFF_COUNT=36` 个飞絮 Points，`fluffSeason = smoothstep(0.10,0.18,p)*(1-smoothstep(0.34,0.42,p))`（春末），位置 `t` 闭式。
- **`seedDrop`**：`SEED_DROP=26` 个落果种子 Points，`seedDropVis = smoothstep(0.68,0.72,p)*(1-smoothstep(0.78,0.84,p))`（第 13 章末），`y = 0.06 + (1-fall)*2.6`。
- **`epilogueGroup`**：土面小新芽（茎 + 2 叶 + 柔光 halo），位置 (1.6, 0.01, -0.6)，`epilogue = smoothstep(250,259,t)`，配合结尾 HUD「新的轮回」。

以上辅助对象全部 `raycast = () => {}`，不干扰「找一找」。

## 5. 草、花、地面落叶

### 5.1 草

- `buildGrass(seed)`：`COUNT=16000`，半径 0.3–34，远距离拒绝采样，近景 `nearBoost` 加高。
- `GRASS_TEX`：256 Canvas，矮草 + 长叶 + 抽穗。
- `windMaterial()` 通过 `onBeforeCompile` 注入 `uGrassTime`（= `t`）：每丛草按世界 x/z 相位摆动。
- 冬季用 `material.opacity = grassK` 淡出（`grassK = max(0.0001, max(1-winterF, grassSpring))`，`winterF = smoothstep(0.72,0.80,p)`、`grassSpring = smoothstep(0.90,1.0,p)`）；不再整体缩放收回。
- 草地是单个 `InstancedMesh`，不要拆成大量 mesh。

### 5.2 野花

- `buildFlowers(seed)`：`COUNT=1400`，半径 0.8–12，`FLOWER_TEX` 五瓣小花。
- `flowerF = smoothstep(0.01,0.07,p)*(1-smoothstep(0.40,0.48,p))`；`material.opacity = flowerF`，不缩放。

### 5.3 地面落叶（本轮改为连续淡入淡出）

- `buildGroundLeaves(seed)`：1600 片，位置围绕树 0.4–10.5，大小 0.16–0.32，`userData.leafInfo` 保存原始 pos/quat/size/color。
- `groundLeafShow = smoothstep(0.58, 0.70, p)`（旧 0.52–0.68，延后到与树冠落叶同源）；
- `carpetFade = smoothstep(0.58,0.66,p)*(1-smoothstep(0.92,0.99,p))`，`visible = carpetFade > 0.002`；
- `grow = 0.001 + 0.999*groundLeafShow`：**从 0 连续长大**，不再一帧 pop 1600 片，也不再 p=0.96 一帧整批消失；
- `groundLeafDecay = smoothstep(0.66,0.92,p)` 变暗、下沉、缩小、腐烂入土。

## 6. 粒子与天气

### 6.1 雨

- `RAIN_COUNT=1400`，`rainTexture()` 竖向雨丝，`size 0.46`。
- `RAIN_WINDOWS`（本轮重排）：
  ```js
  [[16, 31, 0.62], [40, 54, 0.55], [62, 72, 0.45], [96, 106, 0.42]]
  ```
  - 16–31：第 2 章春雨；40–54：第 3 章扎根；62–72：第 4 章破土；**96–106：第 6 章「雨落下」新增**；
  - 旧 `[128,138]` / `[206,216]` 两个夏雨窗**已删除**（与「阳光穿过树冠」「小鸟昆虫来休息」文案冲突）。
- `weatherAt(t)` 在窗口首尾各用 `smoothstep(0,0.18,u)` / `(1-smoothstep(0.82,1,u))` 平滑起止。
- 雨时 `sun.intensity` 降低、云量增加、`groundMat` 变暗、树摇幅度加大。

### 6.2 雪

- `SNOW_COUNT=9000`，`snowVel = 0.30 + rand*0.55`，下落 `*dt*0.9`，`size 0.22`（旧 0.30）。
- 初值 z 改为 `-24 + rand*28`，**深景镜头拉远后雪不会跑到相机前面变成大白斑**。
- `snowA = smoothstep(0.75,0.85,p)*(1-smoothstep(0.92,0.99,p))`，与 `snowCapK` 同窗口，提前到冬章开头（t=160）；冬季 `p .75–1` 共 20 秒。

### 6.3 飘落花瓣/落叶

- `FALL_COUNT=220` 的 `InstancedMesh(LEAF_GEO)`。
- `autumnWindow = smoothstep(0.52,0.58,p)*(1-smoothstep(0.70,0.74,p))`，`autumnSpawnRate = (8+30*smoothstep(0.52,0.68,p))*autumnWindow`；**冬季不再生成落叶**。
- `petalRate = (p > 0.18 && p < 0.34 && yearIndex >= 2) ? 10*treeMatureEnough : 0`：粉色花瓣**只在第二年花期**（旧版 `p>0.88` 是深冬，会「雪中飘桃花」）。
- **生成改为 `t` 的闭式相位判断**（本轮确定性关键）：
  ```js
  const spawnPhase = spawnRate * t;
  if (spawnRate > 0 && dt > 0 && Math.floor(spawnPhase) > Math.floor(spawnPhase - spawnRate*dt)) { … }
  ```
  不用每帧 `Math.random() < spawnRate*dt`，定帧时完全不生成。
- 生成时从 `tree.leafData` 取源位置，模拟下落/风摆/旋转，`y<=0.03` 隐藏。

### 6.4 浮尘

- `DUST_COUNT=280`，`dustMat.opacity` 与 `g`、季节相关；粒子缓慢上升，越界回到底部（只在 `dt>0` 时推进）。

## 7. 四季环境参数

`SEASONS` 数组（`src/main.js` 顶部）包含：

```js
{ skyTop, horizon, fog, ground, sun, sunI, hemi, snow, cloud, cloudWarm, exposure, bloom }
```

- 春天：暖白地平线、云多、地面嫩绿；夏天：高蓝天空、云少、地面深绿；
- 秋天：暖橙地平线、云暖、地面金褐；冬天：冷蓝天空、云多、地面雪白。

`samplePalette(p)` 的过渡窗口本轮由 `smoothstep(0.55, 0.95, frac)` 改为 **`smoothstep(0.86, 1.0, frac)`**：每季前 17.2s 保持本季纯色，最后 2.8s 才过渡，季末配色与 HUD 季节标签严格对齐（旧版会让 t=139 已是秋色却写「夏」、t=179 起纯春绿却仍下雪）。`pal.exposure` 与 `pal.bloom` 本轮已生效，不再是死参数。

## 8. 修改环境的检查清单

- 改太阳/光照 → `?t0=92`、`?t0=142`、`?t0=6`（微距补光），确认太阳完整、树不黑、第一章土壁可读；
- 改云 → `?t0=24 / 128 / 170` 对比云量，确认不再「天空只有太阳」；
- 改雪 → `?t0=160 / 170` 检查雪密度、速度、枝头积雪是否从冬章开头就有；
- 改雨 → `?t0=20 / 100` 检查第 2、6 章雨；
- 改土壤/水层 → `?t0=6 / 44 / 100 / 250` 检查 6 层层次、纵向接缝、含水层反光与根尖光点；
- 改鸟虫/树荫 → `?t0=190 / 210` 检查花簇蜜蜂、飞鸟/蝴蝶/瓢虫/树荫光斑；`?t0=170` 确认寒冬无鸟；
- 改草/花/落叶 → `?t0=80 / 140 / 150` 检查近景质感与落叶毯连续淡入。

> 环境物体大多使用 InstancedMesh 或 Points；新增粒子/实例前先核对 `renderer.info` 的 draw calls 与 triangles（本轮基线 `calls=466`、`triangles≈628574`），别把移动端拖垮。新增对象必须设 `raycast = () => {}` 或用固定种子，且 `dt=0` 时状态不变。
