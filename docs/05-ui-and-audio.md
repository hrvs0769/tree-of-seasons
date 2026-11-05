# 05 · UI、旁白与背景音乐

> 本文解决：课堂布局怎么组成、旁白如何跟着章节走、播放器/键盘怎么工作，以及背景音乐（`src/bgm.js`）如何与画面时间同步。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。

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
| `R` | 再种一棵 |
| `M` | 音乐开关 |

### 3.3 时间状态

- `storyTime` 是页面故事时间；播放时按真实时间增量推进，`storyTime >= STORY_END` 自动暂停。
- `?freeze`：`storyTime = FREEZE_T`，`playing=false`；`#player`、`#narration`、`#tips` 隐藏（截图用）。
- `?video`：外部通过 `window.__setVideoT(v)` 喂时间；`#player` 隐藏。
- `?t0=N`：初始时间 N；默认继续播放。
- `syncPlayer()` 每帧同步滑块、进度色、时间码、播放图标。

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
