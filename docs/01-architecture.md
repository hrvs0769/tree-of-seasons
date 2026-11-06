# 01 · 系统架构与运行流程

> 本文解决：页面如何加载、由哪些层组成、每帧按什么顺序更新，以及新增模块应该插在哪里。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 最后更新：2026-11-07 · 对应代码：`6e5f29f`（第三轮 UI 现代化 · 现代设计系统 · 交互与动效）

## 1. 加载链路

```text
浏览器打开 index.html
  ├─ 解析 HTML / CSS（课堂布局、旁白、播放器、季节转盘、背景音乐）
  ├─ <audio id="bgm"> 指向 assets/tree-of-seasons-bgm-v3.mp3
  ├─ <script src="./app.js">
  │     app.js = src/main.js + lib/three.module.min.js 打包后的 IIFE
  │     └─ 立即覆盖 Math.random → 固定种子 mulberry32
  │     └─ 立即创建 renderer / scene / camera / 所有程序化内容
  └─ <script src="./src/bgm.js">
        在 app.js 之后加载，独立读取 DOM，不参与打包
```

页面不使用任何网络请求（音频为本地文件）；因此必须保持所有资源相对路径，双击 `index.html` 可用。

## 2. 文件职责

| 文件 | 职责 | 是否直接编辑 |
|---|---|---|
| `index.html` | DOM、CSS、课堂布局、课堂模式 DOM（开始页/章节抽屉/大字幕/控制条）、旁白容器、播放器、季节转盘、`<audio>` | 是 |
| `src/main.js` | 3D 场景、生成器、时间轴、镜头、粒子、水层、鸟虫、UI 状态、课堂模式、找一找/点认、渲染循环 | 是（主入口，约 4.4k 行） |
| `src/bgm.js` | 背景音乐播放/暂停/跳转同步、音量、本地偏好、朗读时 ducking | 是 |
| `app.js` | esbuild 打包产物 | 否，编辑后重新生成 |
| `lib/three.module.min.js` | Three.js r170 核心包（无 addons、无 EffectComposer） | 否 |
| `assets/tree-of-seasons-bgm-v3.mp3` | 网页背景音乐 | 替换时同步授权文件 |
| `assets/MUSIC-LICENSE.md` | 音乐授权、来源、处理方式 | 换曲时编辑 |
| `tools/*` | 构建、截图、视觉审查、渲染、BGM 生成、探针 | 按需 |

## 3. `src/main.js` 内部层级

`src/main.js` 按从上到下的顺序执行：

1. **基础工具**：`clamp`、`smoothstep`、`pointOnPolyline`、`mulberry32`。
2. **确定性随机（第二轮新增）**：`APP_SEED = 0x5EED2024` → `__appRng = mulberry32(APP_SEED)` → `Math.random = () => __appRng()`。
3. **时间模型**：`SEASON_SECONDS`、`GROW_END`、`GROW_KEYS`、`growthAt()`、`storySeason()`、`storyYear()`。
4. **四季调色板**：`SEASONS` 四套天空/地面/阳光/曝光参数，`samplePalette()` 插值（`f = smoothstep(0.86, 1.0, frac)`）。
5. **渲染基础**：`renderer`、`scene`（`THREE.Fog(…, 34, 205)`）、`camera`、`appViewportSize()`。
6. **天空/太阳/光照**：程序化天空 shader（三层 fbm 云）、太阳 sprite、28 条锥形光芒、灯光。
7. **地面与土壤**：地面贴图、**6 层土壤剖面贴图**（2048×768，`flipY=true`、`repeat(1,1)`）、草皮 ribbon、断面石子/团粒/草根、微距补光。
8. **地下水层（第二轮新增，模块级）**：`waterGroup` + `waterGlow` / `waterEdge` / `waterSheenMat` / `waterRipples` Shader / `waterBubbles` / `tipGlow`。
9. **生物与氛围（第二轮新增，模块级）**：`creatureGroup` + `skyBirds` / `perchBirds` / `butterflies` / `bees` / `ladybugs`，`treeShade`、`cloudShadowMeshes`、`fluff`、`seedDrop`、`epilogueGroup`。
10. **远山/雾/浮尘**：`ridgeGroup`（3 层）、`mistGroup`、`dust`。
11. **草地/花/地面落叶**：`buildGrass()`、`buildFlowers()`、`buildGroundLeaves()`。
12. **树木生成**：`buildTree(seed)`，包括枝/根（`rootSub`）/花/果/雪/种子/子叶。
13. **粒子**：雪、雨、飘落花瓣/落叶。
14. **镜头与交互**：`cam` 状态（`THETA_MIN/MAX = π/2 ± 0.36`）、指针/滚轮/双指、`CAM_KEYS` 脚本。
15. **旁白/播放器状态**：`CHAPTERS`、`storyTime`、播放/暂停、进度条、`plant()`（定帧用固定种子 `20240601`）。
16. **课堂模式**：`#startScreen`、`#classroomTop`、`#subtitleBar`、`#classroomBar`、章节队列、找一找队列（含 bird/insect）、教师提示、四季合影、故事朗读、投影/锁定。
17. **主循环**：`growBranch()`、`animate()`。

新增功能时，优先找到对应阶段插入；不要在 `animate()` 末尾堆一个独立的 `setInterval`，所有随时间变化的内容应统一走 `t` 和 `dt`。

## 4. 场景对象结构

```text
scene
├─ sky (SphereGeometry + 自定义 ShaderMaterial，三层 fbm 云)
├─ sunSprite / sunRays (Sprite，28 条锥形光芒贴图)
├─ hemi / ambient / sun / rim / frontFill / fillUnder (灯光；frontFill/fillUnder 有 closeBoost)
├─ ground (半圆地势，MeshStandardMaterial)
├─ soilWall / soilFace / turf / shade(手工 AO) / 断面石子·团粒·草根 / contactAO
├─ waterGroup (模块级，不随换树重建)
│   ├─ waterGlow / waterEdge / waterSheen(湿润渐变)
│   ├─ waterRipples (ShaderMaterial，uTime=t)
│   ├─ waterBubbles (Points，150，t 闭式)
│   └─ tipGlow (Points，72，根尖吸水光点)
├─ creatureGroup (模块级)
│   ├─ skyBirds(14) / perchBirds(5) / butterflies(7) / bees(5) / ladybugs(5)  ← InstancedMesh
├─ treeShade (带光斑的树荫) / cloudShadowMeshes(3) / fluff / seedDrop / epilogueGroup
├─ ridgeGroup (三层渐变远山 + 雪线)
├─ mistGroup (3 层雾片)
├─ dust / rain / snow / fallLeaves
├─ treeRoot (Group，地上部分可被风吹动)
│   └─ group (buildTree 返回)
│       ├─ 树枝 Mesh（每段一根）
│       ├─ rootSub (Group，根系独立层；每帧抵销 treeRoot 摇摆)
│       │   ├─ roots Mesh（含 7 条深扎续根 + 8 条吸水须根）
│       │   ├─ flare（根盘）
│       │   └─ rootHairs (LineSegments，setDrawRange 逐段显现)
│       ├─ leaves (InstancedMesh)
│       ├─ fruits / stems (InstancedMesh)
│       ├─ blossoms (InstancedMesh，MeshBasicMaterial)
│       ├─ snowCaps (InstancedMesh)
│       ├─ seedMesh (Group：上下种皮 + 裂缝环)
│       └─ cotyledons (2 个 Mesh)
└─ scene.__grass / __flowers / __groundLeaves (替换树时重建)
```

### 4.1 模块级静态对象 vs `tree.group`（重要）

第二轮把「与具体这棵树无关」的对象全部提到模块级，只建一次、换树不重建：

| 类别 | 对象 | 生命周期 | 释放方式 |
|---|---|---|---|
| 随树重建 | `buildTree()` 返回的 `group` 内全部对象、`__grass/__flowers/__groundLeaves` | `plant(seed)` 时 | `disposeTree()` / `disposeEnvironment()`（含 `InstancedMesh.dispose()` 与 `seedMat.map.dispose()`） |
| 模块级静态 | `waterGroup`、`creatureGroup`、`treeShade`、`cloudShadowMeshes`、`fluff`、`seedDrop`、`epilogueGroup`、`sky`、`sunSprite/sunRays`、`ridgeGroup`、`mistGroup`、`dust/rain/snow/fallLeaves` | 页面加载一次 | 不释放；只改 uniform / opacity / matrix |

静态对象全部设了 `raycast = () => {}`（水层、鸟虫、云影、飞絮、种子、草根、根毛等），避免「找一找」拾取到不可点或半透明的辅助物。`waterGroup` 的子对象一律 `fog:false` + 加色材质，避免冷灰蓝的含水层被暖色补光洗掉。

### 4.2 确定性基线

```js
const APP_SEED = 0x5EED2024;
const __appRng = mulberry32(APP_SEED);
Math.random = () => __appRng();     // 覆盖全局，所有贴图/粒子/树形共用一条流
```

- 贴图生成函数（`groundTexture` / `seedTexture` / `barkTexture` / `grassTuftTexture` / `mistTexture` / `sunRaysTexture` 等）继续用 `Math.random()` 写法，但已被覆盖为确定性流；部分模块另用带盐的 `mulberry32(0x…)`（`soilTexture` 用 `20240117`，鸟虫抖动用 `0xB17D`，气泡用 `0x5ea1` 等）。
- `seedCounter`：`FREEZE_T !== null || VIDEO || STAGE_PARAM || CLASSROOM_PARAM || T0_QUERY !== null` 时固定为 `20240601`，否则由固定流取数；「再种一棵」沿同一条流继续取新种子。
- 新建对象（鸟虫轨迹、气泡、飞絮、落果种子、落叶生成）不用逐帧积分，全部是 `t` 的闭式函数或「`spawnPhase = spawnRate * t` 的相位跨越」判断。
- `dt = VIDEO ? 1/60 : ((playing && FREEZE_T === null && freezeOverride === null) ? ... : 0)`：定帧 / 暂停 / 四季合影时 `dt = 0`，粒子彻底静止。

## 5. 每帧执行顺序

`animate()` 的严格顺序如下，顺序本身会影响画面：

1. **计算故事时间**：如果 `playing` 且不是 `freeze/video`，`storyTime += realDt`；超过 `STORY_END` 自动暂停。
2. **计算 `t / dt`**：`t` 为当前帧故事时间（VIDEO 用 `videoT`，`freezeOverride` 或 `FREEZE_T` 优先）；定帧/暂停/合影 `dt = 0`。
3. **章节/UI 更新**：`updateChapterUI(t)`、`syncPlayer()`。
4. **时间派生量**：`pRaw = storySeason(t)`、`p = wrap(pRaw)`、`yearIndex = storyYear(t)`、`g = growthAt(t)`、**`rootAge = g + 0.30*smoothstep(120,235,t)`**、`pal = samplePalette(p, palette)`、`rainA = weatherAt(t)`。
5. **四季调色板 / 天空与光照**：sky uniforms（含 `cloudCover = pal.cloud + rainA*0.55`）、`toneMappingExposure`、太阳位置、灯光颜色/强度、远山颜色。
6. **环境**：草地颜色/风、野花、地面落叶（连续淡入淡出）、晨雾、浮尘。
7. **树体**：`closeBoost` 微距补光、接触 AO 随 `g` 缩放、按 `g` 更新每根枝条的 `growBranch()`。
8. **根系（用 `rootAge`，不是 `g`）**：`rootFat`、根材颜色渐变、根毛 `setDrawRange`、根盘。
9. **种子/子叶**：按 `t`（不是 `g`）控制半埋落土、吸水、18–30s 裂壳、56–80s 顶起、子叶展开与枯萎。
10. **叶片**：更新每片叶的矩阵、位置、颜色、秋落。
11. **花/枝头积雪**：只在 `yearIndex>=2` 开花；雪帽淡入淡出。
12. **果实**：`fruitGrow/fruitRipe/fruitFall`、青→熟变色、落地 `Math.max(0.14, …)` 不穿土。
13. **地下水层**：`waterReveal = smoothstep(0.98,1.16,rootAge)` 驱动水面/边缘/湿润渐变/波纹 `uTime`/气泡/根尖光点。
14. **飘落花瓣/落叶**：闭式相位生成与物理更新。
15. **雪/雨粒子**：更新位置（受 `dt` 控制，定帧不动）。
16. **飞鸟 / 栖息鸟 / 蝴蝶 / 蜜蜂 / 瓢虫**：`birdFlightAt(t)`、`perchVis/insectVis/beeVis`，`birdWorldPoints/insectWorldPoints` 供找一找用。
17. **树荫 / 云影 / 飞絮 / 落果种子 / 结尾新芽**。
18. **整树轻摇**：`treeRoot.rotation`，随后 `tree.rootSub.quaternion.copy(treeRoot.quaternion).invert()` 抵销，深根不摇也不被 `soilFace` 遮住。
19. **相机**：`CAM_KEYS` 或长成后的自动取景（`BOTTOM_AUTO` 含 `deepReveal`）、t=120–130 平滑交接、用户交互、自动旋转。
20. **HUD**：季节/年份/副标题；最后 2.2s 拨回「春 · 万物发芽 · 新的轮回」。
21. **`renderer.render(scene, camera)`**：`dt=0` 且未播放时按 `staticKey`（时间/镜头/找一找状态）只在变化时重绘。

## 6. 尺寸与响应式

- `#app` 是 3D 舞台，不是整页窗口：
  - 桌面：`left: var(--side)`（320–400px 左侧讲解栏），`bottom: var(--player-h)`（76px 底部播放条）
  - 手机：`left:0; bottom:112px`
- `renderer.setSize()` 和相机 `aspect` 使用 `appViewportSize()`（`#app.clientWidth/clientHeight`），不是 `window.innerWidth/innerHeight`。
- 左栏/播放条是独立 fixed 元素，不会覆盖 canvas；修改布局时必须保持这一点。
- 课堂模式通过 `body.classroom-mode` 切换：`#sidebar` 隐藏，`#app` 顶部让出 `--class-top`、底部让出 `--class-bar-h + --class-sub-h`；所有字幕/按钮都在舞台之外，不压树。
- 进入/退出课堂模式必须调用 `refreshViewport()`；`#app` 尺寸变化不会自动触发 `window.resize`。
- 竖屏的 `aspectFix` 会把镜头拉远；`deepReveal` 额外乘 `smoothstep(0.90, 1.45, aspect)`，只有宽屏才在最后两章渐进露出含水层，竖屏靠原有拉远已能看到深剖面，不再额外下沉。

## 7. 扩展原则

1. **时间统一**：所有随故事变化的东西都应从 `t`、`g`、`p`、`rootAge` 派生，不要依赖 `Date.now()` 或逐帧 `Math.random()` 定位。
2. **可复现**：新增动画必须能在 `?t0=N&freeze` 下逐像素复现；优先写 `t` 的闭式函数，其次使用固定种子的 `mulberry32`；`dt=0` 时状态不得变化。
3. **可重建**：`plant(seed)` 重建所有和树有关的对象并释放旧材质/几何；模块级静态对象不要塞进 `tree.group`。
4. **程序化**：不能新增需要网络的纹理/字体/模型；贴图优先用 Canvas。
5. **不挡拾取**：辅助/加色/半透明对象设 `raycast = () => {}`；需要参与「找一找」的对象才写投影点数组。
6. **性能可控**：大批量重复物体优先 `InstancedMesh`（当前 `calls=466`、`triangles≈628574`）；新增每帧 CPU 更新前先看 `renderer.info`。
