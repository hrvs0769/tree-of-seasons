# 05 · UI、旁白与背景音乐

> 本文解决：课堂布局怎么组成、旁白如何跟着章节走、播放器/键盘怎么工作，以及背景音乐（`src/bgm.js`）如何与画面时间同步。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 最后更新：2026-11-06 · 对应代码：`a99c037`（第二轮优化 · 确定性基线 · 深根水层 · 鸟虫树荫 · 文案对齐）

## 1. 桌面布局

`index.html` 的 DOM 分为三块：

```text
#sidebar（左侧 320–400px，固定）    #app（右侧 3D 舞台）    #player（右侧底部控制条）
├─ #brand                            └─ canvas              ├─ #playBtn
├─ #hud（季节/年份）                                        ├─ #timecode
├─ #narration（章节编号/标题/正文）                          ├─ #timeline + #marks
└─ #tips                                                    ├─ #replayBtn
                                                             ├─ #musicBtn / #volume
                                                             └─ #replant
```

CSS 变量：

- `--side: clamp(320px, 27vw, 400px)`：桌面讲解栏宽度；
- `--player-h: 76px`：底部控制条高度。

3D 画布尺寸由 `#app` 的实际 `clientWidth/clientHeight` 决定，左侧讲解栏和底部控制条不覆盖 canvas。

### 手机端（`max-width:700px`）

- `--side:0`，`--player-h:112px`；
- `#sidebar` 变成一个顶部半透明浮层（只保留 `#narration`，品牌/季节/提示隐藏）；
- `#player` 全宽固定在底部；
- `#app` 留给中间 3D 画面；
- 保留 `#chapterIndex/#chapterTitle/#chapterText` 的易读字号。

## 2. 旁白/章节

数据：`src/main.js` 的 `CHAPTERS` 数组（14 项）：

```js
{ start: 16, end: 32, title: '春雨滋润', text: '春雨落下来，种子喝饱了水……' }
```

UI 引用：

```text
#chapterIndex   "第 X 章 / 共 14 章"
#chapterTitle   章节标题
#chapterText    可直接朗读的正文
#chapterHint    操作提示
```

`updateChapterUI(t)` 按 `start` 查找最后匹配的章节，只在章节变化时更新 DOM；标题带 `seasonIn` 动画。

`SUBTITLE_KEYWORDS`（`src/main.js`）本轮补了 `蜜蜂 | 蝴蝶 | 瓢虫`，与「小鸟 / 昆虫」一起被 `subtitleHTML()` 包成 `<em>` 高亮：`(种子|泥土|水分|温暖|春雨|外壳|侧根|主根|根|嫩芽|种壳|子叶|真叶|阳光|养分|枝丫|树干|树冠|叶子|树荫|落叶|白雪|新芽|花朵|果实|小鸟|昆虫|蜜蜂|蝴蝶|瓢虫|轮回)`。开场页 `.start-sub` 引导语也改为「从一颗小小的种子，到一棵参天大树，还有小鸟、蜜蜂和蝴蝶来做客」。

规则：

- 章节时间必须与视觉事件对齐（雨窗、根/枝生长、雪/果实），详见 [`02-timeline-and-camera.md`](02-timeline-and-camera.md)。
- 旁白是**课堂朗读文本**，用短句、口语；不要塞技术术语。
- 改 `CHAPTERS` 后同步改 `README.md` 的章节表和本文件。

## 3. 播放器

### 3.1 控件与行为

| 控件 | 行为 |
|---|---|
| `#playBtn` | 播放/暂停；图标 `⏸` / `▶` |
| `#timecode` | `mm:ss / mm:ss`（总时长 04:20） |
| `#timeline` | 拖动到任意时间；暂停；`input` 事件即时更新 |
| `#marks` | 由 `CHAPTERS` 自动生成章节刻度，可悬停看标题 |
| `#replayBtn` | 从头重播 |
| `#replant` | 重新随机长一棵树，并回到 0 秒 |
| `#musicBtn` | 背景音乐开关 |
| `#volume` | 背景音乐音量（桌面显示，手机隐藏） |

### 3.2 键盘

| 键 | 作用 |
|---|---|
| `空格` | 播放/暂停 |
| `←` / `→` | 后退/前进 5 秒 |
| `Home` / `End` | 跳到开头/结尾 |
| `PageUp` / `PageDown` | 上一章 / 下一章（课堂模式重点支持翻页笔） |
| `F` | 全屏 / 退出全屏 |
| `C` | 打开章节选择 |
| `T` | 打开教师提示 |
| `Q` | 生成四季合影 |
| `P` | 投影增亮 |
| `L` | 锁定 / 解锁屏幕 |
| `R` | 再种一棵 |
| `M` | 音乐开关 |

### 3.3 时间状态

- `storyTime` 是页面故事时间；播放时按真实时间增量推进，`storyTime >= STORY_END` 自动暂停。
- `?freeze`：`storyTime = FREEZE_T`，`playing=false`；`#player`、`#narration`、`#tips` 隐藏（截图用）；树种子固定为 `20240601`，`dt=0`，画面逐像素可复现。
- `?video`：外部通过 `window.__setVideoT(v)` 喂时间；`#player` 隐藏。
- `?t0=N`：初始时间 N，自动跳过开场页；默认继续播放。
- `?class` / `?stage`：同样使用固定树种子，保证课堂/舞台截图可复现。
- 定帧 / 暂停 / 四季合影时 `dt = 0`；`animate()` 用 `staticKey`（t + 相机三参数 + 找一找状态）判断是否需要重绘，静止画面不会每帧跑 400+ draw call。
- `syncPlayer()` 每帧同步滑块、进度色、时间码、播放图标。
- `window.__classroom.seekForTest(t)` 会设 `freezeOverride=t` 并把 `cam.theta/radius/phi` 复位为 `1.46/12.5/1.46`，是截图工具的正面视角入口。

### 3.4 进度条细节

- `timelineEl.max = STORY_END.toFixed(1)`；
- CSS 用 `--progress` 变量画已播放的金色段；
- 拖动时 `scrubbing=true`，避免每帧把用户手指位置覆盖；`change/pointerup` 后恢复。

## 4. 背景音乐

### 4.1 文件与授权

- 音频：`assets/tree-of-seasons-bgm-v3.mp3`，260 秒，约 3.7 MB。
- 授权：Yoiyami《The Budding of Consciousness》，**CC0 1.0**，详见 `assets/MUSIC-LICENSE.md`。
- 原曲 3:44，处理为 4:20：3 秒交叉淡化、2 秒淡入、4 秒淡出、整体 -4 dB。

### 4.2 `src/bgm.js`（独立脚本）

在 `index.html` 底部单独引入，**不参与 esbuild**：

```html
<audio id="bgm" src="./assets/tree-of-seasons-bgm-v3.mp3" preload="auto"></audio>
<script src="./src/bgm.js"></script>
```

同步规则：

- 播放/暂停：读取 `#playBtn` 的 `textContent`（`⏸`=播放中）；
- 跳转：拖进度条、←/→、Home/End、重播、再种一棵后，把 `audio.currentTime` 对齐 `#timeline.value`；
- 每 200ms 做漂移校正：小偏差改 `playbackRate`，大偏差直接 `seek`；
- `?freeze` / `?video` 时 `#player.style.display==='none'`，音频完全不出声；
- 浏览器自动播放限制：先尝试 `audio.play()`，失败则等待首次用户手势；`M` 或「♫」按钮是用户手势；
- 偏好：`localStorage['tree-of-seasons.bgm']` 保存开关与音量，`file://` 下可能被禁用；
- 音量默认 0.85，手机隐藏音量条但保留记忆。

### 4.3 换音乐

1. 把新音频放 `assets/`；
2. 改 `index.html` 的 `<audio src>`；
3. 更新 `assets/MUSIC-LICENSE.md`（来源、授权、SHA-256、处理方式）；
4. 用无头浏览器验证：加载时长、播放/暂停、拖动跳转、静音、刷新记忆、`?freeze` 静音。

## 5. 常见 UI 修改

| 需求 | 改哪里 |
|---|---|
| 改旁白文案/章节 | `src/main.js` 的 `CHAPTERS` + `README.md` |
| 改讲解栏宽度 | `index.html` `:root --side` |
| 改控制条高度 | `--player-h`，同步 `#app bottom` |
| 加按钮 | `index.html #player .row`，事件绑在 `src/main.js` 状态区 |
| 改 BGM 音量/默认开关 | `src/bgm.js` 的 `volume` / `saved` 默认值 |
| 移动端布局 | `@media (max-width:700px)` |


## 6. 课堂模式（幼儿园课堂版）

入口：

- 默认打开页面：先显示 `#startScreen` 开场页，点「开始上课」进入；
- 直接入口：`index.html?class`（可以配合 `?t0=N` 从某一秒开始）；
- 自由观看：开场页点「自由观看」，或者普通模式侧栏里的「▣ 课堂模式」随时切入。

### 6.1 布局

课堂模式通过 `body.classroom-mode` 切换布局，**所有课堂控件都在 3D 舞台之外**，不压住树和根：

```text
#classroomTop     顶部 68px：章节标题 + 课堂工具
#app              中间 3D 舞台（top:68px; bottom:calc(底栏+字幕栏)）
#seasonWheel      舞台右上角季节转盘
#subtitleBar      舞台下方独立大字幕带
#classroomBar     最底部大控制条（上一章 / 暂停 / 下一章）
```

CSS 变量：

- `--class-top: 68px`（手机 82px，顶部工具分两行）
- `--class-bar-h: 86px`
- `--class-sub-h: 80px`
- `--class-bottom: calc(var(--class-bar-h) + var(--class-sub-h))`

进入/退出课堂模式时调用 `refreshViewport()`，因为 `#app` 尺寸变化不会自动触发 `window.resize`。

### 6.2 课堂控件

| 控件 | 行为 |
|---|---|
| `#classChapterBtn` | 打开章节抽屉（14 张卡片） |
| `#classTeacherBtn` | 打开当前章节的「可以问 / 可以动」教师提示，不投影给小朋友 |
| `#classFindBtn` | 开始「找一找」小游戏，随机选当前章节可见部位 |
| `#classQuartetBtn` | 运行时截取同一棵树的夏/秋/冬/春四张画面，生成「四季合影」 |
| `#classAutoBtn` | 每章结束自动暂停开关，默认开启 |
| `#classProjectorBtn` | 投影增亮（canvas 提亮/增强对比） |
| `#classLockBtn` | 锁定屏幕，长按 2 秒解锁，防小朋友误触 |
| `#classExitBtn` | 退出课堂模式，回到开场页 |
| `#classVoiceBtn` | 故事姐姐朗读开关（Web Speech API） |
| `#classMusicBtn` | 背景音乐开关（与普通播放器同步） |

### 6.3 章节自动暂停

`animate()` 的推进逻辑：

```js
const currentIdx = chapterIndexAt(storyTime);
const nextIdx = chapterIndexAt(storyTime + realDt);
if (classroomMode && autoPauseAtChapter && nextIdx !== currentIdx) {
  storyTime = CHAPTERS[currentIdx].end; // 正好停在下一章开始
  playing = false;
  showPausePrompt('第 X 章结束 · 下一章：……');
}
```

停在边界后 `chapterIndexAt` 会自然返回下一章，因此点「播放」或空格会从下一章继续，不会卡在同一章末尾。

### 6.4 大字幕

- `updateChapterUI()` 同时更新左侧旁白和课堂大字幕；
- `subtitleHTML()` 用 `<em>` 高亮关键词（种子、根、芽、叶、花、果、**小鸟、昆虫、蜜蜂、蝴蝶、瓢虫**、轮回等）；
- 字幕位于 `#subtitleBar` 独立区域，不覆盖 3D 舞台；
- 字号 `clamp(21px, 2.35vw, 38px)`，手机 `clamp(16px, 4.3vw, 20px)`。

### 6.4.1 结尾 HUD 与季节转盘（第二轮）

- **季节转盘 90° 校正**：`index.html` 的 `.wheel-face` 由 `conic-gradient(from -90deg, …)` 改为 **`conic-gradient(from 0deg, #9bd47d 0 25%, #4fa94d 25% 50%, #e5a23d 50% 75%, #c6dcee 75% 100%)`**。四个 `.ws-*` 标签（春右上 / 夏右下 / 秋左下 / 冬左上）与色象限对齐；`animate()` 里指针仍是 `rotate(p*360)`（`wheelNeedleEl.style.transform`），无需改动即可与新色环同步。`wheelYearEl` 显示「第 N 年」，`classSeasonEl` 显示「季节 · 第 N 年」。
- **结尾「新的轮回」**：`t >= STORY_END - 2.2`（约 257.7–259.9s）时，`animate()` 把 `currentSeasonLabel` 拨回「春」、`#sub` 改为「万物发芽 · 新的轮回」、`classSeasonEl` 改为「春 · 新的一年」、指针 `rotate(0deg)`；同时 `epilogueGroup`（`smoothstep(250,259,t)`）在土面冒出一株小新芽。这样片尾字幕「冬天又来了，一年结束，新的轮回又要开始」有画面落点，也不会出现「标着冬却是春绿」的错位。
- 秋天的 `subEl` 副标题在 `fruitMature > 0.45` 时显示「果实熟了」。

### 6.5 点认与找一找

- `buildTree()` 给每个 mesh 写 `userData.part`：`seed / root / trunk / branch / leaf / cotyledon / flower / fruit / snow`；**第二轮新增 `bird` / `insect` 两个部位**，来自模块级 `creatureGroup`（不是树上的 mesh），`PART_INFO` 增加「小鸟 / 昆虫」的名称、拼音与描述，`CHAPTER_PARTS[11]`（第 12 章）加入 `bird`、`insect`；
- `pickPartAt()` 用 `THREE.Raycaster` 从 canvas 坐标拾取；`partVisibleAt()` **先调用 `partHasVisibleState(part)` 问真实显隐，再叠加章节时间白名单**（旧版硬编码时间窗与实际显隐偏差大），`partHasVisibleState()` 过滤透明但仍在场景里的春花、果实、积雪、尚未长出的细芽，以及 `bird`（`perchBirds.visible && birdWorldPoints.length>=2`）/ `insect`（`butterflies.visible && insectWorldPoints.length>=2`）；
- `partVisibleAt('leaf')` 增加 `p < 0.70`，秋末/冬季叶已落光时不再被误判可见；
- `findablePartsAt(t)` 从 `CHAPTER_PARTS` 里再按当前时刻的**实际可见状态 + 屏幕投影点**过滤候选，避免把还没长出来/在画面外的部位选成目标；
- `partWorldPoints('root')` 改用 `tree.rootSub.localToWorld(p)`（根系已拆到独立 group）；`bird` / `insect` 直接读 `birdWorldPoints` / `insectWorldPoints`（由 `animate()` 每帧从栖息鸟与昆虫的世界位置填充）；
- `partScreenPoints()` 把目标部位的世界坐标投影到当前 canvas；`isNearFindTarget()` 允许点击目标附近（桌面约 40–80px 的宽容半径），解决小花、果实、种子、昆虫太小、精确射线打不中的问题；
- `prepareFindBag()` 的 `order` 本轮加入 `bird`、`insect`：`['seed','root','trunk','branch','leaf','cotyledon','flower','fruit','snow','bird','insect']`；找一找按章节生成**不重复的部位队列**（顺序随章节偏移，不会连续几章都先问「根」），`#findProgress` 显示「第几轮 · 第几个/共几个」；
- 点击显示 `#partCard`，内容来自 `PART_INFO`；正确提示 `「找到啦！这是<部位名>」`（点昆虫即「找到啦！这是昆虫」）；卡片固定在舞台左下角安全区，不压树；
- 课堂模式下点树会自动暂停，方便老师讲解；
- `#findBanner` 显示目标部位，正确后提示「找到啦」，错误时抖动并提示再找。

### 6.6 四季合影

`captureQuartet()` 按 `QUARTET_TIMES` 依次设置 `storyTime`（130/150/170/190 秒），等待两帧后用 `renderer.domElement` 画到临时 canvas，生成 4 张 JPEG 放入 `#quartetGrid`。截图期间暂停播放、临时覆盖 `freezeOverride`、把 `cam.theta/radius/phi` 复位为 `1.46/12.5/1.46`，并置 **`quartetShooting = true` 关掉 `deepReveal`**（否则第 2 年深潜镜头会让四张照片构图不一致）；结束后恢复原时间、相机角度和播放状态。课堂模式播到结尾会自动生成一次。

`index.html` 的 `.quartet-note` 本轮去掉「结果」（秋照取 t=150 是第一年秋，本来没有果实），改为：「春天新叶，夏天枝繁叶茂，秋天叶落，冬天安静休息。你最喜欢哪个季节？」

### 6.7 朗读与 BGM ducking

- 使用浏览器 `speechSynthesis`，优先选择 `zh-CN` 中文声音（macOS 上是「婷婷」）；
- 朗读开关 `#classVoiceBtn`，默认开启（浏览器不支持时自然降级）；
- 每章切换时朗读该章正文；暂停/拖动/退出时取消；
- 朗读通过 `window.dispatchEvent(new CustomEvent('tree:voice', { detail: { speaking: true } }))` 通知 `src/bgm.js`；
- `bgm.js` 在朗读期间把 BGM 音量压到 18%，结束后恢复。

### 6.8 课堂模式调试参数

| 参数 | 作用 |
|---|---|
| `?class` | 直接进入课堂模式（不显示开场页） |
| `?class&t0=128` | 从第 128 秒开始进入课堂模式 |
| `?class&t0=128&freeze` | 课堂模式 + 定帧截图 |
| `?class&t0=210&freeze` | 课堂模式第 12 章定帧（鸟虫 / 树荫 / 大字幕 / 季节转盘） |
| `?stage` | 只保留 3D 舞台（给章节缩略图/素材截图用） |
