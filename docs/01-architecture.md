# 01 · 系统架构与运行流程

> 本文解决：页面如何加载、由哪些层组成、每帧按什么顺序更新，以及新增模块应该插在哪里。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。

## 1. 加载链路

```text
浏览器打开 index.html
  ├─ 解析 HTML / CSS（课堂布局、旁白、播放器、背景音乐）
  ├─ <audio id="bgm"> 指向 assets/tree-of-seasons-bgm-v3.mp3
  ├─ <script src="./app.js">
  │     app.js = src/main.js + lib/three.module.min.js 打包后的 IIFE
  │     └─ 立即创建 renderer / scene / camera / 所有程序化内容
  └─ <script src="./src/bgm.js">
        在 app.js 之后加载，独立读取 DOM，不参与打包
```

页面不使用任何网络请求（音频为本地文件）；因此必须保持所有资源相对路径，双击 `index.html` 可用。

## 2. 文件职责

| 文件 | 职责 | 是否直接编辑 |
|---|---|---|
| `index.html` | DOM、CSS、课堂布局、旁白容器、播放器、`<audio>` | 是 |
| `src/main.js` | 3D 场景、生成器、时间轴、镜头、粒子、UI 状态、渲染循环 | 是（主入口） |
| `src/bgm.js` | 背景音乐播放/暂停/跳转同步、音量、本地偏好 | 是 |
| `app.js` | esbuild 打包产物 | 否，编辑后重新生成 |
| `lib/three.module.min.js` | Three.js r170 核心包（无 addons、无 EffectComposer） | 否 |
| `assets/tree-of-seasons-bgm-v3.mp3` | 网页背景音乐 | 替换时同步授权文件 |
| `assets/MUSIC-LICENSE.md` | 音乐授权、来源、处理方式 | 换曲时编辑 |
| `tools/*` | 构建、截图、渲染、BGM 生成、探针 | 按需 |

## 3. `src/main.js` 内部层级

`src/main.js` 按从上到下的顺序执行：

1. **基础工具**：`clamp`、`smoothstep`、`pointOnPolyline`、`mulberry32` 随机数。
2. **时间模型**：`SEASON_SECONDS`、`GROW_END`、`GROW_KEYS`、`growthAt()`、`storySeason()`、`storyYear()`。
3. **四季调色板**：`SEASONS` 四套天空/地面/阳光参数，`samplePalette()` 插值。
4. **渲染基础**：`renderer`、`scene`、`camera`、`appViewportSize()`。
5. **天空/太阳/光照**：程序化天空 shader、太阳 sprite、太阳光芒、灯光。
6. **地面与土壤**：地面贴图、土壤剖面贴图、草皮 ribbon、断面石子/团粒、远山、雾、浮尘。
7. **草地/花/地面落叶**：`buildGrass()`、`buildFlowers()`、`buildGroundLeaves()`。
8. **树木生成**：`buildTree(seed)`，包括枝/根/花/果/雪/种子/子叶。
9. **粒子**：雪、雨、飘落花瓣/落叶。
10. **镜头与交互**：`cam` 状态、指针/滚轮/双指、`CAM_KEYS` 脚本。
11. **旁白/播放器状态**：`CHAPTERS`、`storyTime`、播放/暂停、进度条、`plant()`。
12. **主循环**：`growBranch()`、`animate()`。

新增功能时，优先找到对应阶段插入；不要在 `animate()` 末尾堆一个独立的 `setInterval`，所有随时间变化的内容应统一走 `t` 和 `dt`。

## 4. 场景对象结构

```text
scene
├─ sky (SphereGeometry + 自定义 ShaderMaterial)
├─ sunSprite / sunRays (Sprite)
├─ hemi / ambient / sun / rim / frontFill / fillUnder (灯光)
├─ ground (半圆地势，MeshStandardMaterial)
├─ soilWall / soilFace / turf / 断面石子/团粒
├─ ridgeGroup (三层远山剪影)
├─ mistGroup (3 层雾片)
├─ dust / rain / snow (Points)
├─ treeRoot (Group，整棵树/根可被风吹动)
│   └─ group (buildTree 返回)
│       ├─ 树枝 Mesh（每段一根）
│       ├─ roots Mesh（每段一根）
│       ├─ flare（根盘）
│       ├─ leaves (InstancedMesh)
│       ├─ fruits / stems (InstancedMesh)
│       ├─ blossoms (InstancedMesh)
│       ├─ snowCaps (InstancedMesh)
│       ├─ seedMesh (Group：上下种皮 + 裂缝环)
│       └─ cotyledons (2 个 Mesh)
├─ fallLeaves (InstancedMesh)
└─ scene.__grass / __flowers / __groundLeaves (替换树时重建)
```

## 5. 每帧执行顺序

`animate()` 的严格顺序如下，顺序本身会影响画面：

1. **计算故事时间**：如果 `playing` 且不是 `freeze/video`，`storyTime += realDt`；超过 `STORY_END` 自动暂停。
2. **计算 `t / dt`**：`t` 为当前帧故事时间；`dt` 用于粒子/风等增量运动。
3. **章节/UI 更新**：`updateChapterUI(t)`、`syncPlayer()`。
4. **时间派生量**：`pRaw = storySeason(t)`、`p = wrap(pRaw)`、`yearIndex = storyYear(t)`、`g = growthAt(t)`。
5. **四季调色板**：`samplePalette(p, palette)`。
6. **天空与光照**：更新 sky uniforms、太阳位置、灯光颜色/强度、远山颜色。
7. **环境**：草地颜色/风、野花、地面落叶、晨雾、浮尘、雨。
8. **树体**：按 `g` 更新每根枝条的 `growBranch()`、根系、根盘。
9. **种子/子叶**：按 `t`（不是 `g`）控制落土、吸水、裂壳、消失。
10. **叶片**：更新每片叶的矩阵、位置、颜色、秋落。
11. **花/枝头积雪**：透明度/可见性。
12. **果实**：生长、变色、掉落。
13. **飘落花瓣/落叶**：生成与物理更新。
14. **雪/雨粒子**：更新位置。
15. **整树轻摇**：`treeRoot.rotation`（当前包含根，见 `docs/03` 的注意）。
16. **相机**：`CAM_KEYS` 或长成后的自动取景、用户交互、自动旋转。
17. **HUD**：季节/年份/副标题。
18. **`renderer.render(scene, camera)`**。

## 6. 尺寸与响应式

- `#app` 是 3D 舞台，不是整页窗口：
  - 桌面：`left: var(--side)`（320–400px 左侧讲解栏），`bottom: var(--player-h)`（76px 底部播放条）
  - 手机：`left:0; bottom:112px`
- `renderer.setSize()` 和相机 `aspect` 使用 `appViewportSize()`（`#app.clientWidth/clientHeight`），不是 `window.innerWidth/innerHeight`。
- 左栏/播放条是独立 fixed 元素，不会覆盖 canvas；修改布局时必须保持这一点。

## 7. 扩展原则

1. **时间统一**：所有随故事变化的东西都应从 `t`、`g`、`p` 派生，不要依赖 `Date.now()`。
2. **可重建**：`plant(seed)` 必须在换树时重建所有和树有关的对象，并释放旧材质/几何（见 `docs/03`）。
3. **程序化**：不能新增需要网络的纹理/字体/模型；贴图优先用 Canvas。
4. **可截图**：新增动画要能在 `?t0=N&freeze` 下复现；不要依赖随机时间。
5. **性能可控**：大批量重复物体优先 `InstancedMesh`；新增每帧 CPU 更新时先看 `renderer.info`。
