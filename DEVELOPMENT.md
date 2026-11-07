# 一棵树的四季 · 开发者主文档

> **给新会话的 AI / 新开发者：先读这份主文档。**
> 这里只放项目概况、架构、文件索引、关键约定和常见任务。需要改某个模块时，再按下方文档索引进入对应子文档，不要先通读整个 `src/main.js`。
> 最后更新：2026-11-08 · 对应代码：`e065665`（第四轮 · 可视化测试看板）

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
| 线上课堂入口 | https://hrvs0769.github.io/tree-of-seasons/?class |
| 质量看板（独立入口） | https://hrvs0769.github.io/tree-of-seasons/qa/（测试点目录 / 自动化运行结果 / 历史趋势） |
| GitHub 仓库 | https://github.com/hrvs0769/tree-of-seasons |
| 技术栈 | Three.js r170（本地 `lib/three.module.min.js`）、原生 JavaScript、HTML/CSS、Canvas 程序化贴图、esbuild |
| 3D 资源 | 全部程序化生成；没有外部模型、图片或字体依赖 |
| 随机基线 | `APP_SEED = 0x5EED2024` 的固定 `mulberry32` 覆盖 `Math.random`；定帧/课堂/舞台/视频用固定树种子 `20240601` |
| 界面系统（第三轮） | 深炭黑 `--paper #0C100E` + 雾白 `--ink #F2F4F0` + 单一薄荷绿 `--accent #7BD6A6`；全站无衬线、内联 SVG 图标、1px 细线、圆角 9/14/20；设计 token 与验收见 `docs/11` |
| 音乐 | Yoiyami《The Budding of Consciousness》，CC0，见 `assets/MUSIC-LICENSE.md` |

当前版本包含两种观看方式：默认是「左侧编辑式讲解栏 + 右侧浮动圆角 3D 画框 + 底部播放条」的自由观看布局；点「开始上课」或访问 `?class` 后进入**幼儿园课堂模式**（深色顶栏、深色大字幕带、深色控制条、每章自动暂停、章节卡片、点认/找一找、细环季节转盘与四季合影、故事姐姐朗读、投影增亮、屏幕锁定）。

第二轮优化后，画面新增：6 层土壤剖面与地下水层、扎到含水层的深根、真正可见的云、远处偶尔飞过的鸟群、栖息的小鸟与蝴蝶/蜜蜂/瓢虫、树荫光斑、云影、飞絮、结尾新芽；所有章节文案提到的元素都能在画面里找到。

**第三轮（本轮）重做界面与交互，不改 3D 场景**：全站改为深炭黑 `#0C100E` + 雾白 `#F2F4F0` + 单一薄荷绿 `#7BD6A6`，无衬线系统字体、1px 细线、9/14/20px 圆角与轻投影，emoji 换成 15 个内联 SVG symbol。播放器加 36px 进度命中区与 hover 时间气泡，镜头加 14Hz 缓动 / 9px 拖拽死区 / 松手惯性 / 双击复位 / 键盘可达；课堂模式补细进度条 `#classProgress`、课堂音量、退出确认（保留 `storyTime`）与 `aria-pressed` 状态；5 个弹层补齐 dialog 语义、`inert`、焦点循环与 180ms 退场；点认卡锚定点击位置、找一找错误 toast 移到底部、章节与字幕 300–450ms 淡入、新增 `?` 快捷键面板与深色加载页。设计 token、组件清单、动效规范与逐条验收见 [`docs/11-round3-ui-system.md`](docs/11-round3-ui-system.md)。

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
`app.js` 是打包产物，**不要手工编辑 `app.js`**；改 `src/main.js` 后必须重新打包，否则本地和线上看到的还是旧 build。

### 跑自动化测试 / 发布前检查
```bash
# 全量自动化：100 条 auto，逐条写 qa/data/results.json
node tools/qa-run.js --version v4.0.0 --label "第四轮 · 可视化测试看板"

# 构建 + 全量 + P0/P1 失败即非 0（推荐发布前用）
./tools/qa-release.sh v4.1.0 "第五轮 · 本轮主题"

# 打开看板（本地 8777）
open http://127.0.0.1:8777/qa/
```
测试点总表：`qa/data/catalog.json`（108 条，10 模块）；使用手册：[`docs/13-test-dashboard.md`](docs/13-test-dashboard.md)。

### 回退点（Git）
- `pre-classroom-mode` 标签：课堂模式改造前的稳定回退点；
- `classroom-mode` 分支：课堂模式开发分支；
- `pre-find-game-fix` 标签：修复“找一找”前的回退点；
- `find-game-fix-v1` 标签：找一找修复完成点；
- `pre-visual-refresh` 标签：远山视觉与找一找队列改版前；
- `visual-refresh-v1` 标签：远山视觉与找一找队列改版完成点；
- **`pre-round2` 标签：第二轮优化改动前的干净版本（回滚本轮全部改动用这个）**；
- **`round2-v1` 标签：第二轮优化完成点（确定性基线 / 深根水层 / 鸟虫树荫 / 文案对齐）**；
- **`round3-v1` 标签：第三轮 UI 现代化完成点（深色设计系统 / 交互与动效）**；
- **`pre-round4` 标签：第四轮测试看板改动前（回滚本轮全部改动用这个）**；
- **`round4-v1` 标签：第四轮完成点（可视化测试看板 / 自动化回归 / 108 测试点）**；
- 如果后续改坏了，可以 `git switch main` 回到稳定版本，或 `git checkout pre-round2` 查看本轮之前的状态。

### 开发调试 URL
| 参数 | 作用 |
|---|---|
| `?t0=34` | 从第 34 秒开始播放 |
| `?t0=34&freeze` | 把时间钉在第 34 秒，画面静止且逐像素可复现（截图对比用） |
| `?debug` | 在浏览器控制台打印时间轴日志 |
| `?dbg` | 暴露 `window.__scene`、`window.__sky`、`window.__camera`、`window.__renderer`、`window.__probe` |
| `?video` | 外部逐帧喂时间，给离线渲染用；播放器/旁白隐藏 |
| `?class` | 直接进入课堂模式 |
| `?class&t0=210&freeze` | 课堂模式定帧截图（第 12 章鸟虫） |
| `?stage` | 只保留 3D 舞台，给章节缩略图/视觉审查截图用 |

---

## 3. 目录与文档索引

### 3.1 代码与资源

```text
index.html                 页面结构、CSS 设计 token、SVG 图标 sprite、课堂布局与全部 DOM（约 1.2k 行）
app.js                     esbuild 打包后的运行时（生成物）
src/main.js                全部 3D 场景/时间轴/UI 交互逻辑（主源码，约 4.8k 行）
src/bgm.js                 背景音乐播放同步（独立普通脚本，不进 app.js bundle）
lib/three.module.min.js    Three.js r170
assets/
  tree-of-seasons-bgm-v3.mp3   网页背景音乐（CC0）
  MUSIC-LICENSE.md            音乐授权与换曲说明
README.md                  面向使用者的简要说明
DEVELOPMENT.md             本文件：开发者主文档 / 索引
ITERATIONS.md              长期视觉与功能迭代记录（按轮次）
docs/                      开发者子文档（本文件下方索引）
qa/                          可视化测试看板（独立入口 /qa/：catalog.json、results.json、history.json、evidence/）
tools/
  shoot.sh / visual-audit.sh   固定时间点截图与视觉审查
  ui-shot.js                  独立 Playwright UI 定点截图器（第三轮新增）
  qa-run.js / qa-release.sh   自动化测试 Runner 与大版本发布前检查（第四轮新增）
  qa/                          Runner 的 harness、静态服务器与 10 个模块检查
  render.js / make-video.sh    旧成片流水线（勿当现行时间轴）
  probe.js / make-*.js         调试探针与 BGM 生成存档
```

### 3.2 子文档索引（改哪里读哪里）

| 子文档 | 负责内容 | 什么时候读 |
|---|---|---|
| [`docs/01-architecture.md`](docs/01-architecture.md) | 页面加载、确定性随机、模块级静态对象、运行时结构、每帧执行顺序 | 第一次接手项目、需要理解整体数据流 |
| [`docs/02-timeline-and-camera.md`](docs/02-timeline-and-camera.md) | `t/g/p/rootAge` 时间模型、14 章章节表、生长曲线、雨窗/花果雪窗口、镜头关键帧、播放器状态 | 改时长、章节、旁白、镜头、进度条 |
| [`docs/03-tree-and-roots.md`](docs/03-tree-and-roots.md) | 种子、枝条递归生成、根系（rootSub / 深扎续根 / 含水层须根）、叶片挂点、花/果/积雪、树体参数 | 改树的形态、生长动画、根系、叶片、果实 |
| [`docs/04-environment.md`](docs/04-environment.md) | 天空、太阳、光照、地面、6 层土壤、地下水层、草花、远山、雾、云影、飞鸟虫、雨雪粒子 | 改环境、光照、天气、季节材质 |
| [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md) | v3 界面布局、组件与事件表、快捷键、镜头交互、弹层焦点、课堂流程、BGM 同步 | 改 UI、交互、旁白、背景音乐 |
| [`docs/06-build-and-deploy.md`](docs/06-build-and-deploy.md) | 构建命令、离线模式、GitHub Pages 部署、缓存、资源清单、回退点 | 打包、发布、换部署地址 |
| [`docs/07-testing-and-debugging.md`](docs/07-testing-and-debugging.md) | URL 调试参数、确定性验证、截图流水线、章节/画面核对清单、性能 | 验证改动、找视觉回归、定位怪东西 |
| [`docs/08-visual-standard.md`](docs/08-visual-standard.md) | 视觉标准、十维评分、第二轮审查结论、自动截图与视觉审查流程 | 做视觉升级、评审截图、判断是否达到标准 |
| [`docs/09-round2-plan.md`](docs/09-round2-plan.md) | 第二轮优化的问题清单、实施范围与验收标准（已完成，保留原始清单） | 追溯「为什么这样改」、查 P0/P1/P2 问题编号 |
| [`docs/10-round3-ui-plan.md`](docs/10-round3-ui-plan.md) | 第三轮 UI 整改前的基线审计问题清单（P0 4 / P1 22 / P2 20，共 46 条） | 查整改前问题、复现步骤与旧版截图 |
| [`docs/11-round3-ui-system.md`](docs/11-round3-ui-system.md) | 第三轮设计系统：token、组件清单、动效时长与 easing、交互映射、a11y、逐条验收状态、截图索引 | 改界面/组件、做 UI 回归、判断整改是否完成 |
| [`docs/12-test-points.md`](docs/12-test-points.md) | 全项目 108 个测试点总表：10 模块、P0/P1/P2、自动/人工、预期与 automationKey 索引 | 评估项目覆盖、查某个功能验什么、新增大版本测试 |
| [`docs/13-test-dashboard.md`](docs/13-test-dashboard.md) | 可视化测试看板：入口、看板结构、大版本运行流程、结果解读、如何新增测试点、常见问题 | 每次大版本发布前、维护 QA 数据、排查看板问题 |

`ITERATIONS.md` 是历史记录，不是运行文档；当需要知道“为什么上一版这样做”时再查。`docs/10` 是旧版基线审计，`docs/11` 是 v3 的整改结果与现行规范，两篇要一起看。

### 3.3 文档更新时间

| 文档 | 最后更新 | 对应代码 / 说明 |
|---|---|---|
| [`README.md`](README.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 界面与交互段落、本轮新增 |
| `DEVELOPMENT.md` | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 主索引、文件表与文档表 |
| [`docs/01-architecture.md`](docs/01-architecture.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 架构（确定性 / rootAge / 水层 / 静态对象） |
| [`docs/02-timeline-and-camera.md`](docs/02-timeline-and-camera.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 时间表与镜头（第二轮结论保留） |
| [`docs/03-tree-and-roots.md`](docs/03-tree-and-roots.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 树体与根系（第二轮结论保留） |
| [`docs/04-environment.md`](docs/04-environment.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 环境（第二轮结论保留） |
| [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · **整篇重写**：布局 / 组件 / 事件表 / 快捷键 / 课堂流程 / BGM |
| [`docs/06-build-and-deploy.md`](docs/06-build-and-deploy.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 构建与部署（结论保留） |
| [`docs/07-testing-and-debugging.md`](docs/07-testing-and-debugging.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 测试与调试（结论保留） |
| [`docs/08-visual-standard.md`](docs/08-visual-standard.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 追加「第三轮 UI 评分见 docs/11」，audit-r2 结论不改 |
| [`docs/09-round2-plan.md`](docs/09-round2-plan.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 第二轮问题清单（历史） |
| [`docs/10-round3-ui-plan.md`](docs/10-round3-ui-plan.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · 顶部加「v3 整改状态见 docs/11」说明，清单原样保留 |
| [`docs/11-round3-ui-system.md`](docs/11-round3-ui-system.md) | 2026-11-08 | `e065665` · 第四轮 · 可视化测试看板 · **新建**：设计 token / 组件 / 动效 / 交互映射 / a11y / 逐条验收 |
| [`docs/12-test-points.md`](docs/12-test-points.md) | 2026-11-08 | v4.0.0 · 第四轮 · **新建**：108 条测试点总表 |
| [`docs/13-test-dashboard.md`](docs/13-test-dashboard.md) | 2026-11-08 | v4.0.0 · 第四轮 · **新建**：测试看板使用手册与发布流程 |
| [`ITERATIONS.md`](ITERATIONS.md) | 2026-11-08 | 历史记录追加 r33（第四轮测试看板）；功能说明以本文件为准 |

维护规则：每次改代码或文档，先更新对应文档的 `最后更新`，再把新代码提交哈希写进本表；这样新会话能判断文档是否落后于代码。本轮所有文档头部与表中统一写 `e065665` 占位符，提交后由维护者全局替换为真实哈希。

---

## 4. 运行架构（一分钟版）

```text
index.html
  ├─ <audio id="bgm"> assets/tree-of-seasons-bgm-v3.mp3
  ├─ app.js  ← 由 src/main.js + lib/three.module.min.js 打包
  │    └─ 创建 renderer / scene / camera，程序化生成全部 3D 内容
  │    └─ animate() 每帧：时间轴 → 季节 → 环境 → 树/根 → 水层 → 鸟虫 → 粒子 → 相机 → UI → render
  └─ src/bgm.js ← 只读 DOM，跟随播放器时间/播放状态同步音频
```

关键点：

- `src/main.js` 是**唯一的主场景源码**；`app.js` 是它的压缩 bundle。
- `src/bgm.js` 故意不参与打包，只通过 `#timeline`、`#playBtn` 等 DOM 同步音乐，因此改 3D 不会回归音频。
- 页面在 `file://` 下必须能直接运行：不要引入网络字体、CDN、外部模型或未打包的图片。
- 3D 舞台的尺寸来自 `#app` 的实际 `clientWidth/clientHeight`（不是整页窗口），所以左侧讲解栏不会压住画面，也不会拉伸场景。
- 全局 `Math.random` 被固定种子的 `mulberry32` 覆盖：贴图、粒子、树形全部可复现；「再种一棵」沿同一条流继续取新种子。
- 定帧 / 暂停 / 四季合影时 `dt = 0`，且静态状态只在「时间、镜头、季节状态」变化时重绘一次（`staticKey`），无头截图不会每帧跑 400+ draw call。

---

## 5. 关键概念

| 符号 | 定义 | 说明 |
|---|---|---|
| `t` | 故事时间（秒） | `?t0` 可偏移；播放器进度条代表它 |
| `g` | 生长进度 0..1 | 由 `growthAt(t)` 分段平滑得到；120s 后饱和为 1 |
| `p` | 一年进度 0..1 | `storySeason(t)` 取小数部分；一年 = `SEASON_SECONDS * 4 = 80s` |
| `yearIndex` | 第几年 | 从 `storyYear(t)` 得到；生长阶段恒为第 1 年，180s 起为第 2 年 |
| `rootAge` | 根系年龄 | `g + 0.30 * smoothstep(120, 235, t)`；解开「g 在 120s 饱和、根停止生长」的死锁 |
| `deepReveal` | 深潜镜头权重 | `smoothstep(205,255,t) * smoothstep(0.90,1.45,aspect)`，四季合影期间为 0 |
| `waterReveal` | 水层显现进度 | `smoothstep(0.98, 1.16, rootAge)`，驱动水面/波纹/气泡/根尖光点 |
| `APP_SEED` | 全局随机种子 | `0x5EED2024`，覆盖 `Math.random`；定帧树种子 `20240601` |
| `CHAPTERS` | 14 个讲解章节 | 章节文案、起止时间都在 `src/main.js` 的 `CHAPTERS` 数组 |
| `STORY_END` | 259.9s | 播放到结尾自动停，不循环 |

当前关键常量：

```js
SEASON_SECONDS = 20;
GROW_END = 120;
GROW_END_P = 0.25;
STORY_END = 259.9;
SOIL_DEPTH = 12.0;
WATER_TOP = -9.6;
ROOT_FLOOR = -10.0;
FACE_H = SOIL_DEPTH + 2.5; // 14.5
```

生长阶段：0–16 种子入土；16–32 春雨滋润；32–56 向下扎根；56–76 破土发芽；76–94 幼苗；94–108 小树；108–120 大树。

---

## 6. 常见任务入口

| 想做什么 | 去哪个文档 / 改哪里 |
|---|---|
| 改故事总时长、章节文案 | [`docs/02-timeline-and-camera.md`](docs/02-timeline-and-camera.md)；`CHAPTERS`、`GROW_KEYS`、`SEASON_SECONDS` |
| 改树形、枝干、根、叶 | [`docs/03-tree-and-roots.md`](docs/03-tree-and-roots.md)；`buildTree()` / `spawn()` / `rootChain()` / `rootAge` |
| 改天气、雪、雨、雾、土壤、水层 | [`docs/04-environment.md`](docs/04-environment.md)；`RAIN_WINDOWS`、`SNOW_COUNT`、`soilTexture()`、`waterGroup` |
| 改旁白、播放器、键盘、季节转盘 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md)；`src/main.js` 状态区 + `index.html` |
| 改课堂模式、章节卡片、点认、四季合影、找一找 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md)；`src/main.js` 的「课堂模式」段 + `index.html` 的 `#startScreen` / `#classroomTop` / `#classroomBar` |
| 改飞鸟/昆虫/树荫/云影/飞絮 | [`docs/04-environment.md`](docs/04-environment.md)；`BIRD_WINDOWS`、`birdFlightAt()`、`makeCreature()`、`creatureGroup` |
| 改界面、组件、动效、无障碍 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md) 与 [`docs/11-round3-ui-system.md`](docs/11-round3-ui-system.md)；`index.html` 的 `:root` token、`src/main.js` 交互层 |
| 做视觉审查、对齐画面标准 | [`docs/08-visual-standard.md`](docs/08-visual-standard.md)；运行 `./tools/visual-audit.sh audit-rN`；UI 定点截图用 `node tools/ui-shot.js` |
| 查第三轮 UI 整改前问题 / 逐条状态 | [`docs/10-round3-ui-plan.md`](docs/10-round3-ui-plan.md)（基线清单） / [`docs/11-round3-ui-system.md`](docs/11-round3-ui-system.md) §7（验收状态） |
| 跑自动化测试 / 看测试点 / 大版本发布前检查 | `node tools/qa-run.js --version <v> --label "<标签>"`；看板 `/qa/`；测试点 [`docs/12-test-points.md`](docs/12-test-points.md)；手册 [`docs/13-test-dashboard.md`](docs/13-test-dashboard.md) |
| 改背景音乐 | [`docs/05-ui-and-audio.md`](docs/05-ui-and-audio.md)；`assets/`、`src/bgm.js`、`index.html` 的 `<audio>` |
| 重新打包 / 发布 GitHub Pages | [`docs/06-build-and-deploy.md`](docs/06-build-and-deploy.md) |
| 截图 / 定位视觉回归 / 确定性验证 | [`docs/07-testing-and-debugging.md`](docs/07-testing-and-debugging.md) |

---

## 7. 当前已知限制与注意

1. **`app.js` 是生成物**：源码改完必须重新打包，否则线上/本地看到的还是旧 build。
2. **`tools/render.js` 是旧的 58 秒成片流水线**：内部 `KEYS` 仍是旧版时间映射，不要把它当成当前网页时间轴依据；网页以 `src/main.js` 的 `GROW_KEYS/CHAPTERS` 为准。
3. **音频自动播放**：浏览器通常禁止无手势自动出声；`src/bgm.js` 会先尝试，失败后等待首次点击，或点底部固定文案的「音乐」按钮（SVG 图标 + 状态点）。
4. **GitHub Pages 是静态快照**：本地仓库没有把 GitHub 配置成 upstream；部署需要按 `docs/06-build-and-deploy.md` 把运行文件同步到 GitHub 仓库。
5. **叶片仍是带纹理的小卡片**：远处层次已经足够，极端近景（<0.5m）还能看出平面；要再升级见 `docs/03` 的“后续方向”。
6. **性能基线（第二轮实测）**：`?dbg` 下 `renderer.info.render.calls = 466`、`triangles ≈ 628574`，仍在 450–500 / ≤0.65M 预算内。改树/根/粒子后一定要用 `renderer.info` 复测。
7. **章节时间必须和视觉事件同源**：改 `CHAPTERS` 时，雨窗、种子阶段、根/枝生长、镜头关键帧、季节换色、鸟虫窗口都会受影响；核对清单见 `docs/07`。
8. **故事姐姐朗读依赖系统语音**：`speechSynthesis` 的可用声音因操作系统/浏览器而异；没有中文声音时会退回默认语音。朗读期间 BGM 通过 `tree:voice` 事件自动 duck 到 18%。
9. **定帧一致性是硬约束**：新增任何随机或逐帧积分的对象，必须接入固定种子的 `mulberry32` 或改成 `t` 的闭式函数，并在 `dt=0` 时保持不变；用 `docs/07` 的两次独立 profile 逐像素比对验证。
10. **剩余打磨项**：末级枝条的节疤/树瘤层次、极近景（44s）主根的表面细节、草丛与远山的重复感；见 `docs/08` 的 audit-r2 remaining items。
