# 一棵树的四季 · 开发者主文档

> **给新会话的 AI / 新开发者：先读这份主文档。**
> 这里只放项目概况、架构、文件索引、关键约定和常见任务。需要改某个模块时，再按下方文档索引进入对应子文档，不要先通读整个 `src/main.js`。

---

## 1. 项目概况

| 项 | 内容 |
|---|---|
| 项目名 | 一棵树的四季（The Four Seasons of a Tree） |
| 类型 | 纯代码生成的 Three.js 3D 树木生命周期演示 / 课堂讲解应用 |
| 核心体验 | 种子入土 → 春雨 → 扎根 → 破土 → 幼苗 → 小树 → 大树 → 四季轮回（可暂停、拖进度条、重播、再种一棵） |
| 默认故事时长 | `STORY_END ≈ 259.9 秒`，播放器显示 **04:20**，结尾自动停止 |
| 本地入口 | 双击 `index.html`，无需本地服务器、无需联网 |
| 线上入口 | https://hrvs0769.github.io/tree-of-seasons/ |
| GitHub 仓库 | https://github.com/hrvs0769/tree-of-seasons |
| 技术栈 | Three.js r170（本地 `lib/three.module.min.js`）、原生 JavaScript、HTML/CSS、Canvas 程序化贴图、esbuild |
| 3D 资源 | 全部程序化生成；没有外部模型、图片或字体依赖 |
| 音乐 | Yoiyami《The Budding of Consciousness》，CC0，见 `assets/MUSIC-LICENSE.md` |

当前版本包含两种观看方式：默认是「左侧讲解栏 + 右侧 3D 舞台 + 底部播放条」的自由观看布局；点「开始上课」或访问 `?class` 后进入**幼儿园课堂模式**（全屏、大字幕、每章自动暂停、章节卡片、点认/找一找、四季转盘与四季合影、故事姐姐朗读、投影增亮、屏幕锁定）。

---

## 2. 快速启动

### 直接看网页
双击 `index.html`。

### 修改源码后重新打包
```bash
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons
"/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/.bin/esbuild" \
  src/main.js --bundle --format=iife --minify \
  --alias:three=./lib/three.module.min.js --outfile=app.js --log-level=warning
```
`app.js` 是打包产物，**不要手工编辑 `app.js`**；改 `src/main.js` 后重新打包。

### 回退点（Git）
- `pre-classroom-mode` 标签：课堂模式改造前的稳定回退点；
- `classroom-mode` 分支：课堂模式开发分支；
- `pre-find-game-fix` 标签：修复“找一找”前的回退点；
- `find-game-fix-v1` 标签：找一找修复完成点；
- `pre-visual-refresh` 标签：远山视觉与找一找队列改版前；
- `visual-refresh-v1` 标签：远山视觉与找一找队列改版完成点；
- 如果后续改坏了，可以 `git switch main` 回到稳定版本，或 `git checkout pre-classroom-mode` 查看改造前状态。

### 开发调试 URL
| 参数 | 作用 |
|---|---|
| `?t0=34` | 从第 34 秒开始播放 |
| `?t0=34&freeze` | 把时间钉在第 34 秒，画面静止（截图对比用） |
| `?debug` | 在浏览器控制台打印时间轴日志 |
| `?dbg` | 暴露 `window.__scene`、`window.__sky`、`window.__camera`、`window.__renderer`、`window.__probe` |
| `?video` | 外部逐帧喂时间，给离线渲染用；播放器/旁白隐藏 |
| `?class` | 直接进入课堂模式 |
| `?class&t0=128&freeze` | 课堂模式定帧截图 |
| `?stage` | 只保留 3D 舞台，给章节缩略图/素材截图用 |

---

## 3. 目录与文档索引

### 3.1 代码与资源

```text
index.html                 页面结构、课堂布局、课堂模式 DOM、旁白/播放器 DOM、BGM <audio>
app.js                     esbuild 打包后的运行时（生成物）
src/main.js                全部 3D 场景/时间轴/UI 播放逻辑（主源码）
src/bgm.js                 背景音乐播放同步（独立普通脚本，不进 app.js bundle）
lib/three.module.min.js    Three.js r170
assets/
  tree-of-seasons-bgm-v3.mp3   网页背景音乐（CC0）
  MUSIC-LICENSE.md            音乐授权与换曲说明
README.md                  面向使用者的简要说明
DEVELOPMENT.md             本文件：开发者主文档 / 索引
ITERATIONS.md              长期视觉与功能迭代记录（按轮次）
docs/                      开发者子文档（本文件下方索引）
tools/                     截图、渲染、探测、BGM 生成等工具
```

### 3.2 子文档索引（改哪里读哪里）

| 子文档 | 负责内容 | 什么时候读 |
|---|---|---|
| [`docs/01-architecture.md`](docs/01-architecture.md) | 页面加载、运行时结构、场景构建与每帧执行顺序 | 第一次接手项目、需要理解整体数据流 |
| [`docs/02-timeline-and-camera.md`](docs/02-timeline-and-camera.md) | `t/g/p` 时间模型、14 章章节表、生长曲线、镜头关键帧、播放器状态 | 改时长、章节、旁白、镜头、进度条 |
| [`docs/03-tree-and-roots.md`](docs/03-tree-and-roots.md) | 种子、枝条递归生成、根系、叶片挂点、花/果/积雪、树体参数 | 改树的形态、生长动画、根系、叶片、果实 |
| [`docs/04-environment.md`](docs/04-environment.md) | 天空、太阳、光照、地面、草、花、土壤剖面、远山、雾、雨、雪、粒子 | 改环境、光照、天气、季节材质 |
| [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md) | 左侧讲解栏、旁白章节、播放器控件、键盘、BGM 同步与授权 | 改 UI、交互、旁白、背景音乐 |
| [`docs/06-build-and-deploy.md`](docs/06-build-and-deploy.md) | 构建命令、离线模式、GitHub Pages 部署、缓存、资源清单 | 打包、发布、换部署地址 |
| [`docs/07-testing-and-debugging.md`](docs/07-testing-and-debugging.md) | URL 调试参数、截图流水线、章节/画面核对清单、性能检查 | 验证改动、找视觉回归、定位怪东西 |

`ITERATIONS.md` 是历史记录，不是运行文档；当需要知道“为什么上一版这样做”时再查。

---

## 4. 运行架构（一分钟版）

```text
index.html
  ├─ <audio id="bgm"> assets/tree-of-seasons-bgm-v3.mp3
  ├─ app.js  ← 由 src/main.js + lib/three.module.min.js 打包
  │    └─ 创建 renderer / scene / camera，程序化生成全部 3D 内容
  │    └─ animate() 每帧：时间轴 → 季节 → 环境 → 树/根 → 粒子 → 相机 → UI → render
  └─ src/bgm.js ← 只读 DOM，跟随播放器时间/播放状态同步音频
```

关键点：

- `src/main.js` 是**唯一的主场景源码**；`app.js` 是它的压缩 bundle。
- `src/bgm.js` 故意不参与打包，只通过 `#timeline`、`#playBtn` 等 DOM 同步音乐，因此改 3D 不会回归音频。
- 页面在 `file://` 下必须能直接运行：不要引入网络字体、CDN、外部模型或未打包的图片。
- 3D 舞台的尺寸来自 `#app` 的实际 `clientWidth/clientHeight`（不是整页窗口），所以左侧讲解栏不会压住画面，也不会拉伸场景。

---

## 5. 关键概念

| 符号 | 定义 | 说明 |
|---|---|---|
| `t` | 故事时间（秒） | `?t0` 可偏移；播放器进度条代表它 |
| `g` | 生长进度 0..1 | 由 `growthAt(t)` 分段平滑得到；不是线性时间 |
| `p` | 一年进度 0..1 | `storySeason(t)` 得到；一年 = `SEASON_SECONDS * 4 = 80s` |
| `yearIndex` | 第几年 | 从 `storyYear(t)` 得到；生长阶段恒为第 1 年，120s 后进入第 2 年 |
| `CHAPTERS` | 14 个讲解章节 | 章节文案、起止时间都在 `src/main.js` 的 `CHAPTERS` 数组 |
| `STORY_END` | 259.9s | 播放到结尾自动停，不循环 |

当前关键常量：

```js
SEASON_SECONDS = 20;
GROW_END = 120;
GROW_END_P = 0.25;
STORY_END = 259.9;
```

生长阶段：0–16 种子入土；16–32 春雨滋润；32–56 向下扎根；56–76 破土发芽；76–94 幼苗；94–108 小树；108–120 大树。

---

## 6. 常见任务入口

| 想做什么 | 去哪个文档 / 改哪里 |
|---|---|
| 改故事总时长、章节文案 | [`docs/02-timeline-and-camera.md`](docs/02-timeline-and-camera.md)；`CHAPTERS`、`GROW_KEYS`、`SEASON_SECONDS` |
| 改树形、枝干、根、叶 | [`docs/03-tree-and-roots.md`](docs/03-tree-and-roots.md)；`buildTree()` / `spawn()` / `rootChain()` |
| 改天气、雪、雨、雾、土壤 | [`docs/04-environment.md`](docs/04-environment.md)；`RAIN_WINDOWS`、`SNOW_COUNT`、`soilTexture()` |
| 改旁白、播放器、键盘 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md)；`src/main.js` 状态区 + `index.html` |
| 改课堂模式、章节卡片、点认、四季合影 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md)；`src/main.js` 的「课堂模式」段 + `index.html` 的 `#startScreen` / `#classroomTop` / `#classroomBar` |
| 改背景音乐 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md)；`assets/`、`src/bgm.js`、`index.html` 的 `<audio>` |
| 重新打包 / 发布 GitHub Pages | [`docs/06-build-and-deploy.md`](docs/06-build-and-deploy.md) |
| 截图 / 定位视觉回归 | [`docs/07-testing-and-debugging.md`](docs/07-testing-and-debugging.md) |

---

## 7. 当前已知限制与注意

1. **`app.js` 是生成物**：源码改完必须重新打包，否则线上/本地看到的还是旧 build。
2. **`tools/render.js` 是旧的 58 秒成片流水线**：内部 `KEYS` 仍是旧版时间映射，不要把它当成当前网页时间轴依据；网页以 `src/main.js` 的 `GROW_KEYS/CHAPTERS` 为准。
3. **音频自动播放**：浏览器通常禁止无手势自动出声；`src/bgm.js` 会先尝试，失败后等待首次点击，或点底部「♫ 开启音乐」。
4. **GitHub Pages 是静态快照**：本地仓库没有把 GitHub 配置成 upstream；部署需要按 `docs/06-build-and-deploy.md` 把运行文件同步到 GitHub 仓库。
5. **叶片仍是带纹理的小卡片**：远处层次已经足够，极端近景（<0.5m）还能看出平面；要再升级见 `docs/03` 的“后续方向”。
6. **性能基线**：桌面约 450–500 draw calls、约 0.6M triangles（随随机种子/季节浮动）；手机通过相机拉远和降低像素比保持可看。改树/根/粒子后一定要用 `renderer.info` 复测。
7. **章节时间必须和视觉事件同源**：改 `CHAPTERS` 时，雨窗、种子阶段、根/枝生长、镜头关键帧、季节换色都会受影响；核对清单见 `docs/07`。
8. **故事姐姐朗读依赖系统语音**：`speechSynthesis` 的可用声音因操作系统/浏览器而异；没有中文声音时会退回默认语音。朗读期间 BGM 通过 `tree:voice` 事件自动 duck 到 18%。
