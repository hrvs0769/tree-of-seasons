# 05 · UI、旁白与背景音乐

> 本文解决：新版界面（v3 现代设计系统）由哪些 DOM 与组件组成、每个交互背后是哪个事件与函数、快捷键/课堂流程怎么走，以及背景音乐 `src/bgm.js` 如何与画面时间同步。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 设计 token、组件清单、动效规范、交互映射与验收结果见 [`11-round3-ui-system.md`](11-round3-ui-system.md)；整改前的问题清单见 [`10-round3-ui-plan.md`](10-round3-ui-plan.md)。
> 最后更新：2026-11-07 · 对应代码：`17c3454`（第三轮 UI 现代化 · 现代设计系统 · 交互与动效）

> **本轮变更摘要**：第三轮彻底重做了界面语言与交互层。去掉宋体、金棕、深绿渐变、点状纹理、装饰光晕、胶囊按钮与 emoji 图标；改为暖纸色 + 墨色 + 单一森林绿 + 全站无衬线 + 1px 细线 + 统一圆角与轻投影。3D 舞台变成浮动圆角画框，课堂模式改为浅色顶栏 / 白色字幕带 / 白色控制条。播放器、镜头、弹层、点认卡、找一找、自动暂停、快捷键面板全部补齐状态语义与键盘可达性。**3D 场景、14 章文案、章节时序、BGM 音频文件均未改动。**

## 1. 设计语言速查

完整 token 表见 [`11-round3-ui-system.md`](11-round3-ui-system.md) §2，这里只列改 UI 时最常碰到的：

| 类别 | 变量 / 值 | 用途 |
|---|---|---|
| 背景 | `--paper #F4F2ED` / `--surface #FBFAF7` | 页面纸面 / 卡片与浮层 |
| 文字 | `--ink #14181A` / `--ink-2 #5D635E` / `--ink-3 #6A706A` | 主文 / 次文 / 辅助文（`--ink-3` 已提到 AA 对比度） |
| 强调 | `--accent #246B4E` / `--accent-2 #1B5540` / `--accent-soft #E3EEE7` | 单一森林绿：进度、当前章、按钮 |
| 危险 | `--danger #A9513C` | 退出课堂确认按钮 |
| 线 / 圆角 | `--line rgba(20,24,26,.09)`、`--line-2 .16`；`--radius-s 9` / `--radius 14` / `--radius-lg 20` / `--stage-radius 18` | 统一细线与圆角 |
| 阴影 | `--shadow-sm/md/lg` | 卡片、浮层、舞台画框 |
| 动效 | `--ease cubic-bezier(.22,.9,.28,1)`、`--ease-out cubic-bezier(.16,1,.3,1)` | 所有过渡共用 |
| 字体 | `--font`：`-apple-system / SF Pro SC / PingFang SC / HarmonyOS Sans SC / MiSans / Noto Sans SC / Microsoft YaHei / system-ui` | 全站无衬线，无宋体、无网络字体 |
| 布局 | `--side clamp(300px,24vw,356px)`、`--gutter 18px`、`--player-h 78px` | 讲解栏 / 画框留白 / 播放条 |
| 课堂 | `--class-top 64px`、`--class-bar-h 84px`、`--class-sub-h 88px`（移动端 `134 / 72 / 82`） | 顶栏 / 控制条 / 字幕带 |

`body[data-season]` 取 `春/夏/秋/冬`，切换 `--season`（春 `#4E9E62` / 夏 `#2F7D45` / 秋 `#B4762C` / 冬 `#5B7C93`），驱动 `#hud::before` 小色条、`#season` 大字与转盘四角标签颜色。

所有图标来自 `index.html` 顶部的内联 SVG sprite（`aria-hidden="true"`），共 15 个 symbol：`#i-logo / #i-play / #i-pause / #i-replay / #i-music / #i-volume / #i-chapters / #i-grid / #i-present / #i-close / #i-chevron-left / #i-chevron-right / #i-lock / #i-arrow-right / #i-keyboard`。按钮用 `<svg class="icon"><use href="#i-…"/></svg>`，**不要写回 emoji 或文字符号图标**。

## 2. 页面结构（DOM 骨架）

```text
<body data-season="春">                     ← 季节主题；classroom-mode / projector / idle / dragging
├─ <svg> 图标 sprite（15 个 symbol）
├─ #vignette                              舞台四角柔光（pointer-events:none）
├─ #sidebar                               左侧「编辑式」讲解栏
│   ├─ #brand（#i-logo + 中英文品牌）
│   ├─ #hud（#season 大字 + #year + #sub）
│   ├─ #chapterRail                       14 段进度刻线（aria-hidden，.done/.current）
│   ├─ #narration（#chapterIndex / #chapterTitle / #chapterText / #chapterHint）
│   ├─ #sidebarTools                      #classEnterBtn / #chapterBtnNormal / #quartetBtnNormal
│   └─ #tips                              两行快捷键提示
├─ #app                                   浮动圆角 3D 画框（--gutter + shadow）
│   └─ canvas（tabindex=0 / role=application / aria-label）
├─ #player                                底部浮动播放条
│   └─ .row：#playBtn / #timecode / #timelineWrap / #replayBtn / #musicBtn / #volumeWrap / #replant
├─ #startScreen                           开场页（左右分栏）
├─ #classroomTop / #seasonWheel / #subtitleBar / #classroomBar   课堂层
├─ .modal ×5: #chapterDrawer / #teacherPanel / #quartetOverlay / #shortcutPanel / #exitConfirm
├─ #partCard / #findBanner / #pausePrompt / #classToast / #lockOverlay
└─ #loading                               加载层（纸色 logo + 生长进度线）
<audio id="bgm"> + app.js + src/bgm.js
```

## 3. 桌面布局

- **左侧讲解栏 `#sidebar`**：固定宽 `--side`，纸色底、右侧 1px `--line`。结构是「品牌 → 季节 HUD（54–70px 大字）→ 14 段 `#chapterRail` → 章节标题/正文/提示 → 底部工具列表 → 两行 `#tips`」。`#chapterRail` 由 `buildChapterRail()` 生成 14 个 `<span>`，`updateChapterRail(idx)` 打 `done / current` 类，切章时只改 class 不重建 DOM。
- **右侧 3D 舞台 `#app`**：不再是贴边铺满的画布，而是 `left: var(--side) + var(--gutter)`、`top/bottom` 各留 `--gutter`、圆角 `--stage-radius`、柔和 `--shadow-md` 的浮动画框。`appViewportSize()` 仍读 `#app.clientWidth/clientHeight`，`refreshViewport()` 同步 `renderer.setSize()` 与 `camera.aspect`，**左侧栏/播放条不覆盖 canvas** 的原则不变。
- **底部播放条 `#player`**：浮在纸面上，圆角 `--radius-lg`、浅色底 + 细线 + 轻投影；`#app` 的 `bottom` 让出 `--player-h`。
- **文本可选中**：`#chapterText, .teacher-block p, .modal-card, .start-sub, .quartet-note` 显式 `user-select:text`；按钮与画布仍不可选，避免拖动选中文字。

## 4. 开场页 `#startScreen`

- 左右分栏 `.start-shell`：左侧 `.start-copy`（eyebrow「自然观察课 · 幼儿园课堂版」、两行大标题「一棵树的 / 四季」、引导语、`#startClassBtn` 主按钮 + `#freeViewBtn` 次按钮、`14 章 / 4 分 20 秒 / 自动全屏 · 每章暂停` 元信息），右侧 `.start-visual` 是纯 SVG「年轮四季」插画（`#canopySoft` 滤镜、`.art-orbit` 缓慢环绕的小圆点，`orbitSpin 46s linear infinite`）。
- `#startClassBtn` → `enterClassroomMode({reset:true, fullscreen:true, autoplay:true})`；`#freeViewBtn` → 隐藏开场页并 `playing=true`。若上次退出课堂时保留过进度，按钮文案会变成「继续观看」。
- 入场动效：`.start-copy > *` 用 `riseIn .7s var(--ease-out)` 依次上移淡入，`.start-visual` 用 `fadeIn .9s`；`#startScreen.hidden` 用 `opacity/visibility .55s` 淡出（不是 `display:none` 硬切）。
- `overflow:auto` + `overscroll-behavior:contain`，矮屏/横屏可滚动兜底。

## 5. 移动端（≤700px / ≤980px / ≤1180px 三档断点）

| 断点 | 关键规则 |
|---|---|
| ≤1180px | 收紧侧栏/课堂顶栏排版 |
| ≤980px | `#volumeWrap`、`#classVolumeWrap` 隐藏；课堂顶栏开始换行 |
| ≤700px | `:root` 覆盖 `--class-top:134px / --class-bar-h:72px / --class-sub-h:82px`；顶栏 8 个按钮 `flex: 0 0 calc(25% - 3px)`、`height:44px` 排成两行；`#sidebarTools button` 44px；`#playBtn / #replayBtn / #musicBtn / #timelineWrap / #timeline / #replant` 全部 ≥44px；`#timelineWrap` 换行独占一行 `height:44px`；`#marks` 下移到 30px；`#partCard` 固定底部；`.modal-close` 44px；章节弹层 2 列 |

`#classToast` 在课堂模式固定在 `bottom: calc(var(--class-bottom) + 18px)`，不再与顶部任务条抢位置。

## 6. 播放器组件

| 控件 | DOM | 行为 |
|---|---|---|
| 播放 / 暂停 | `#playBtn`（含 `#i-play` + `#i-pause` 两个 SVG） | `setPlayUI(btn, isPlaying)` 写 `data-playing="1/0"` 与 `aria-label="暂停/播放"`；CSS 按 `data-playing` 切换显示哪个图标。**不再改 `textContent`**，`src/bgm.js` 也改读 `playBtn.dataset.playing` |
| 时间码 | `#timecode` | `mm:ss / 04:20`，由 `syncPlayer()` 按秒更新 |
| 进度条 | `#timelineWrap`（36px 命中区）内 `#timeline`（`type=range`，`min=0 max=259.9 step=0.1`）+ `#marks` + `#scrubTip` | 轨道视觉 6–8px，命中区 36px（移动端 44px）；hover/拖动显示 `#scrubTip`，内容 `mm:ss · 章名`（`updateScrubTip(clientX)` 用 `chapterIndexAt(tt)` 查标题） |
| 拖动状态 | `beginScrub()` / `endScrub()` | 记住 `scrubResume = playing`，`input` 时 `setStoryTime(v, !scrubResume)`，`change` / 全局 `pointerup` 时恢复原播放状态；不会像旧版那样一拖就永久暂停 |
| 重播 | `#replayBtn` | `storyTime=0`，`playing=true`，重置章节 UI |
| 音乐 | `#musicBtn`（`#i-music` + `.btn-label`「音乐」+ `.status-dot`） | 文案固定「音乐」不随状态变宽；状态靠 `.on/.off`、状态点、`aria-pressed`、`aria-label` 表达（见 §20） |
| 音量 | `#volumeWrap` + `#volume` | 桌面可见；`bgm.js` 双向同步 `#volume` 与 `#classVolume` |
| 再种一棵 | `#replant` | 取新种子 `plant()`，时间归零 |

`syncPlayer()` 用 `_syncCache`（`t/sec/playing/chapter/pct/cpct`）做**差异写入**：只有值变化才写 `timelineEl.value`、`--progress`、时间码、`setPlayUI()`、`classProgress` 宽度与 `aria-valuenow`；首尾章还会同步 `classPrevBtn.disabled / classNextBtn.disabled`。暂停时几乎零 DOM 写入。

## 7. 事件表（元素 → 事件 → 处理 → 效果）

| 元素 | 事件 | 处理函数 | 效果 |
|---|---|---|---|
| `canvas`（`dom`） | `pointerdown/move/up/cancel` | `pointers` Map + `endPointer()` | 9px 死区判定；超过才转镜头，未超过走 `handleCanvasTap()` 点认 |
| `canvas` | `wheel` | — | `cam.radius *= exp(deltaY*.0012)`，clamp 5.5–30 |
| `canvas` | `dblclick` | — | 复位 `cam.theta/phi/radius = 1.46/1.46/12.5`，清惯性，`hidePartCard()`，`showToast('视角已复位')` |
| `canvas` | `keydown` | — | 方向键旋转、`+/-` 缩放、`Enter` 用画面中心坐标 `pickPartAt()` + `showPartCard()` |
| `#playBtn` / `#classPlayBtn` | `click` | `togglePlay()` | `playing` 翻转；结尾时先归零重播 |
| `#timeline` | `pointerdown/input/change` | `beginScrub` / `setStoryTime` / `endScrub` | 拖动 seek，松手恢复原播放状态 |
| `#timelineWrap` | `pointermove/pointerdown/pointerleave` | `updateScrubTip()` | 时间气泡显示/隐藏 |
| `#classProgress` | `pointerdown/move/up` + `keydown ←→` | `seekClassProgress()` / `classScrubResume` | 课堂内任意秒跳转，同样保留播放状态 |
| `#pausePrompt` | `click`（委托 `#pauseContinue`） | — | `hidePausePrompt()` + `playing=true` + 朗读恢复；事件不穿透到 canvas |
| `.modal` | `pointerdown`（点在遮罩上） | `closeModal(m)` | 关闭 |
| `[data-close]` | `click` | `closeModal(document.getElementById(...))` | 关闭对应弹层 |
| `document` | `keydown Tab` | focus trap | 弹层打开时 Tab 在 `.modal.show` 内循环 |
| `window` | `keydown` | 全局快捷键 | 见 §9；弹层打开时只保留 Esc/Tab |
| `#classExitBtn` | `click` | `showExitConfirm()` | 打开 `#exitConfirm`，不直接退出 |
| `#exitCancelBtn / #exitConfirmBtn` | `click` | `closeModal` / `exitClassroomMode()` | 取消或确认退出（保留 `storyTime`） |
| `#partClose` / `#findClose` | `click` | `hidePartCard()` / `stopFindGame()` | 关闭浮层 |
| `#lockOverlay` | `pointerdown` + 2s 长按 | `unlockScreen()` | 长按解锁，配合 `.lock-progress i` 2s 进度 |
| `window` | `resize` | `refreshViewport()` | 同步 canvas 尺寸与相机 |

## 8. 镜头交互

渲染用的相机状态是 `camSmooth`（`theta/phi/radius`），目标值是 `cam`；每帧 `camEase = snapCam ? 1 : 1 - Math.exp(-realDt * 14)`（约 **14Hz 指数缓动**）。定帧 / 视频 / 四季合影时 `snapCam=true` 直接吸附，保证 `?t0=N&freeze` 逐像素可复现。

- **9px 拖拽死区**：`pointermove` 先累计与起点的距离，`total <= 9` 时只更新 `prev.x/y` 直接 return；超过 9px 才置 `moved=true` 并允许后续位移改变 `cam.theta/phi`。`endPointer()` 里 `!moved` 才触发 `handleCanvasTap()`，因此 4px 抖动不再误转镜头、也不会误开点认卡。
- **松手惯性**：拖拽时记录 `camVel.theta/phi`（0.55/0.45 平滑的速度估计），松手后按 `realDt` 继续滑行并按 `decay` 衰减。
- **双指缩放**：两个 pointer 时用 `pinchRadius * (pinchStart/dist)` 改 `cam.radius`。
- **双击复位**与滚轮平滑缩放见上表。
- **键盘可达**：`dom.tabIndex = 0`、`role="application"`、`aria-label="3D 树木画面：拖动或用方向键环顾，滚轮或加减号缩放，回车点认画面中央的部位"`；方向键步长 0.06，`+/-` 缩放系数 0.9/1.1，`Enter` 点认画面中心。`#app canvas:focus-visible` 有 2px accent 描边。
- **`prefers-reduced-motion`**：`REDUCED_MOTION` 为真时不执行自动环绕（`animate()` 里 `!REDUCED_MOTION && playing && now-lastInteract>6000`）；CSS 层把所有 `animation/transition-duration` 压到 `.001ms`，惯性也随定帧逻辑收敛。
- `THETA_MIN/MAX = π/2 ± 0.36` 不变；`cam.target.x`、深潜 `deepReveal` 等 3D 侧逻辑见 `docs/02`。

## 9. 快捷键

### 9.1 全局（`window keydown`）

| 键 | 行为 | 备注 |
|---|---|---|
| `空格` | 播放 / 暂停 | 焦点在 `button/a/input/textarea/select/[contenteditable]` 上时交给控件原生行为，不触发全局播放 |
| `← / →` | 后退 / 前进 5 秒 | `setStoryTime(storyTime ± 5, !playing)` 保留播放状态 |
| `Home / End` | 跳到开头 / 结尾 | 同上 |
| `PageUp / PageDown` | 上一章 / 下一章 | 首尾章按钮有 `disabled` 态 |
| `F` | 全屏 / 退出 | `toggleFullscreen()` |
| `C` | 章节弹层 | `openModal(chapterDrawerEl)` |
| `T` | 教师提示 | `openModal(teacherPanelEl)` |
| `Q` | 四季合影 | `captureQuartet()`，按钮进入 `busy` + `aria-busy` |
| `P` | 投影增亮 | `toggleProjector()` |
| `L` | 锁定 / 解锁 | `toggleLock()` |
| `M` | 背景音乐开关 | **在 `src/bgm.js` 里处理**（`toggleMusic()`），不在 `main.js` 的 keydown 中 |
| `?`（或 `Shift+/`） | 快捷键面板 | `openModal(shortcutPanelEl)` |
| `R` | 再种一棵 | 新种子 + 时间归零 |
| `Esc` | 分层关闭 | 弹层 → 点认卡 → 找一找 → 暂停提示 → 课堂退出确认；锁定态下 Esc 只解锁 |

**弹层打开时全局快捷键全部挂起**（`hasOpenModal()` 分支只处理 Esc/Tab），Space/←→/C/T/Q 不会再改动 `playing`、`storyTime` 或叠出第二层弹层。

### 9.2 画布聚焦后（不冒泡到全局）

`← →` 旋转 theta，`↑ ↓` 旋转 phi，`+ / =` 拉近，`- / _` 拉远，`Enter` 点认画面中央。事件 `stopPropagation()`，不与全局 5 秒跳转冲突。

### 9.3 `#shortcutPanel`

按 `?` 打开，12 行 `<kbd>` 表（播放/暂停、快退快进、上下章、首尾、全屏、章节、教师提示、四季合影、增亮、锁定、音乐、快捷键面板），底部有触控说明（单指拖动 / 双指缩放 / 双击复位 / 拖拽不误触点认）。移动端 `.shortcut-grid` 变单列。

## 10. 课堂模式

入口：默认开场页点「开始上课」、侧栏 `#classEnterBtn`、或 `index.html?class`（可配合 `?t0=N`）。`body.classroom-mode` 切换布局，所有控件都在 3D 舞台之外。

```
#classroomTop     浅色顶栏 64px：#classChapterIndex / #classChapterTitle / #classSeason + 8 个工具按钮
#app              中间浮动 3D 画框（top: --class-top；bottom: --class-bottom）
#seasonWheel      右上细环季节转盘
#subtitleBar      白色大字幕带（88px）：#subtitleText（aria-live=polite aria-atomic）+ #subtitleMeta
#classroomBar     白色底部控制条（84px）：#classProgressRow + 主控件 + 右侧小按钮
```

- **顶栏 8 个按钮**：`#classChapterBtn / #classTeacherBtn / #classFindBtn / #classQuartetBtn / #classAutoBtn / #classProjectorBtn / #classLockBtn / #classExitBtn`。桌面一行；移动端两行、每个 `44px` 高。「退出」用 `[title*="退出"]` 单独给 `color: var(--ink-3)`，hover 变 `--danger`；真正退出前有确认弹层，避免紧邻误触。
- **`#classProgress`**：`role="slider"`、`aria-label="课堂播放进度"`、`aria-valuemin=0 / aria-valuemax=260 / aria-valuenow`、`tabindex=0`，细轨道 + `<i>` 进度 + 圆形 thumb。支持点击 / 拖动（`setPointerCapture`）/ 键盘 `← →` 各 5 秒；`syncPlayer()` 按 `--cp` 与 `aria-valuenow` 增量更新。
- **`#classVolume`**：课堂底栏右侧 `#classVolumeWrap` 内的音量滑杆，与 `#volume` 双向同步（≤980px 隐藏）。
- **`#classTimecode`**：`mm:ss / mm:ss`，移动端仍保留（9px 紧凑排版）。
- **状态型按钮**：`#classAutoBtn / #classVoiceBtn / #classProjectorBtn / #classLockBtn` 由 `updateClassroomButtons()` 切 `.on` 并写 **`aria-pressed="true/false"`**；文案固定（不再出现「每章停 ✓」这种撑宽文字）。
- **主控件**：`#classPrevBtn / #classPlayBtn / #classNextBtn`（播放键同样用 `data-playing` 切 SVG），首尾章自动 `disabled`；右侧 `#classMusicBtn / #classVoiceBtn / #classReplayBtn`。
- **退出确认 `#exitConfirm`**：点「退出」→ `showExitConfirm()` 打开弹层（"当前进度会保留，下次进入课堂模式可以继续"）→ `#exitCancelBtn` 取消 / `#exitConfirmBtn` 调 `exitClassroomMode()`。`exitClassroomMode()` **不再把 `storyTime` 归零**；`freeViewBtn` 文案改为「继续观看」，重新进入课堂（或自由观看）可接着看。Esc 在课堂模式也会打开这个确认层。
- **章节自动暂停**：`animate()` 在 `classroomMode && autoPauseAtChapter` 且跨章时停在 `CHAPTERS[i].end`，`showPausePrompt()` 给出「第 X 章结束 · 下一章：…」+「继续播放」按钮；`chapterIndexAt` 此时已指向下一章，点继续或空格从下一章接着播。
- **结束行为**：到 `STORY_END` 不再自动弹出四季合影，只 `showToast('本课播放结束 · 可点「四季合影」回顾四季')`，由老师决定。
- 进入/退出都调用 `refreshViewport()`；`requestWakeLock()` / `releaseWakeLock()` 保持常亮；`resetIdle()` 控制 `body.idle` 隐藏光标。

## 11. 弹层系统

5 个 `.modal` 全部是 `role="dialog" aria-modal="true" aria-labelledby="…"`：`#chapterDrawer`（`chapterDrawerTitle`）、`#teacherPanel`（`teacherTitle`）、`#quartetOverlay`（`quartetTitle`）、`#shortcutPanel`（`shortcutTitle`）、`#exitConfirm`（`exitConfirmTitle`）。`#partCard` 是 `role="dialog" aria-modal="false" aria-labelledby="partName"`（非模态，允许继续看画面）。

| 行为 | 实现 |
|---|---|
| 只开一个 | `openModal(el)` 先把其它 `.modal.show` 移除 `.show` |
| 背景 inert | `setBackgroundInert(true)` 给 `MODAL_BACKGROUND_IDS = ['app','sidebar','player','classroomTop','classroomBar','subtitleBar','seasonWheel','vignette']` 加 `inert` |
| 初始焦点 | `requestAnimationFrame` 后聚焦 `.modal-close`（或第一个可聚焦元素），`preventScroll:true` |
| 焦点循环 | `document keydown` 的 Tab 分支：首/尾元素互相 wrap |
| 恢复焦点 | `lastFocusedBeforeModal` 保存触发元素，`closeModal()` / `closeAllModals()` 关闭时 `.focus()` |
| 关闭动效 | `.closing` 类 + `modalFadeOut .18s var(--ease)`，`setTimeout(..., 190)` 后移除 `show/closing`；遮罩 `modalFade .24s`、卡片 `modalPop .34s var(--ease-out)` |
| 章节弹层 | 打开时 `buildChapterGrid()` 渲染 14 卡，然后 `current.scrollIntoView({block:'center', behavior:'smooth'})`；移动端 `.modal-close` 44px |
| Esc | 弹层打开时 `closeAllModals()`；其余浮层按 §9.1 分层处理 |
| 点击遮罩 | `.modal` 的 `pointerdown` 且 `e.target === m` 时关闭 |

**通知栈**：`#findBanner`（`role=status aria-live=polite`，顶部任务条）、`#pausePrompt`（`role=status`，顶部独立条带，`.show` 时 `pointer-events:auto`）、`#classToast`（`role=status aria-live=polite`，**底部**，课堂模式再抬到 `calc(var(--class-bottom) + 18px)`），三者不再共享同一位置；`#subtitleText` 也是 `aria-live="polite" aria-atomic="true"`。

## 12. 自动暂停提示

`showPausePrompt(text)` 渲染 `.pause-text` + `<button id="pauseContinue" class="pause-btn">继续播放</button>`；`pausePromptEl` 上的委托点击只在 `e.target.closest('#pauseContinue')` 时生效：隐藏提示、`autoPausePending=false`、`playing=true`、课堂模式且开着朗读时补一次 `speakCurrentChapter()`。提示 `pointer-events:auto`，点击不会穿透到画布；键盘 Enter/Space 由按钮原生触发。

## 13. 点认卡 `#partCard`

- `partFromObject()` 沿父链读 `userData.part`；`pickPartAt()` 射线拾取后经 `partVisibleAt()` + `partHasVisibleState()` 过滤。
- `showPartCard(part, clientX, clientY)` 现在**使用坐标**：桌面（`innerWidth > 700`）把卡片放在点击点右下 `gap=14`，超出视口时向左/上翻转，`clamp` 到 `pad=12` 内，并写 `--ox/--oy` 供小尖角定位；移动端 CSS 固定为底部抽屉（不遮画面中心）。
- glyph 改用 `PART_INFO[part].glyph` 专用字：种 / 根 / 干 / 枝 / 叶 / 花 / 果 / 雪 / 鸟 / 虫（子叶用「叶」），不再取名称末字。
- 卡片 `role=dialog aria-modal=false aria-labelledby=partName`；`#partClose` 点击或 Esc 关闭。
- 找一找命中时同样传点击坐标，卡片出现在手指旁边；`showToast('找到啦！这是' + PART_INFO[found].name)`。

## 14. 找一找

- `#findBanner` 为 `role="status" aria-live="polite"`，显示「找一找：<b>部位</b>在哪里？」+ `#findProgress`（第 N 轮 · 第几个/共几个）+ `#findNext` + `#findClose`。
- `findablePartsAt(t)` 从 `CHAPTER_PARTS` 取候选，用真实可见状态 + `partScreenPoints()` 屏幕投影过滤；`prepareFindBag()` 的 order 含 `bird / insect`。
- 错误反馈：任务条 `.shake` + 底部 `#classToast`（不再盖住任务条）；正确：点认卡 + toast + `stopFindGame()`。
- Esc 关闭（`stopFindGame()`）；`#findClose` / `#findNext` 分别关闭 / 推进。

## 15. 章节切换与季节

`updateChapterUI(t)` 在章节变化时：`resetFindBag()` → `updateChapterRail(idx)` → 写章节编号/标题/正文/课堂标题/大字幕/meta → `retriggerAnim()` 重放动画（标题 `seasonIn .45s`、正文 `textIn .32s`、字幕 `textIn .3s`，用 `--ease-out`，300–450ms 淡入上移）→ `updateTeacherCard()` → `hidePartCard()`。`chapterIndexAt` 未变时直接 return，不重绘。

季节标签 `currentSeasonLabel` 变化时写 `document.body.dataset.season`（驱动 `--season` 变色）、`#season` 的 `seasonIn .7s`；结尾 2.2s 拨回「春」并归零转盘指针（3D 侧逻辑见 `docs/02`）。`syncPlayer()` 里的 `_syncCache.chapter` 同步首/尾章按钮的 `disabled`。

## 16. 季节转盘 `#seasonWheel`

重做为**细环**：`.wheel-ring` 用四色 conic 渐变 + `mask: radial-gradient(...)` 挖空中心，四角 `.wheel-label`（春/夏/秋/冬，带圆点，`body[data-season]` 高亮当前季），细 `#wheelNeedle` 指针，中心 `.wheel-center` 显示 `#wheelYear`「第 N 年」。仍是 `aria-hidden="true"` + `pointer-events:none` 的纯图表（不可点击、不作为导航），桌面 118px / 移动 88px；指针仍由 `seasonProgress * 360` 度旋转。

## 17. 加载层 `#loading`

`role="status" aria-live="polite" aria-label="正在加载"`，纸色底 + `.loading-mark`（墨色圆角方块 + `#i-logo`）+「正在生长…」+ `.loading-line`（120×2px，内部 `loadSlide 1.1s` 往返的生长进度线）。加载完成后 `requestAnimationFrame` 加 `.hidden`（`opacity .5s` 淡出），`setTimeout(..., 620)` 后 `display:none`；与最终纸色主题一致，不再有浅蓝闪屏。

## 18. 状态、可访问性与对比度

- **开场页也是模态层**：`#startScreen` 有 `role="dialog" aria-modal="true" aria-labelledby="startTitle"`；启动时对 `#app/#sidebar/#player/#vignette` 设 `inert`，焦点进入 `#startClassBtn`，Tab 只在开场页内循环；开始上课 / 自由观看 / 退出课堂后解除 `inert`，焦点回到 `body`。开场页可见期间全局快捷键全部挂起。
- `button:focus-visible, input:focus-visible, [tabindex]:focus-visible` 统一 2px accent 描边 + offset；`button:active { transform: scale(.97) !important }` 显式覆盖 hover；`button:disabled { opacity:.38; cursor:not-allowed }`；`button.busy` 带旋转圆点 + `aria-busy`。
- `meta viewport` 只有 `width=device-width, initial-scale=1, viewport-fit=cover`，**去掉了 `maximum-scale=1 / user-scalable=no`**，移动端允许双指缩放页面；画布手势靠 `touch-action:none` 控制。
- `--ink-3` 提到 `#6A706A`（WCAG AA 小字对比度）；`:root color-scheme: light` 与浅色主题一致。
- `@media (prefers-reduced-motion: reduce)` 把所有 animation / transition 时长压到 `.001ms`；JS 侧 `REDUCED_MOTION` 关闭自动环绕。
- 文本选择、dialog 语义、`aria-pressed`、`aria-live`、`aria-busy`、canvas 的 `role/aria-label/tabindex` 见上文各节。

## 19. 课堂流程（一次完整授课）

1. 打开页面 → `#loading` 淡出 → `#startScreen`；点「开始上课」请求全屏并 `enterClassroomMode({reset:true, fullscreen:true, autoplay:true})`。
2. 顶栏 / 字幕带 / 底栏依次 `chromeDown .42s`、`chromeUp .45s` 进入；`setAutoPause(true)`、`setProjector(false)`、`requestWakeLock()`。
3. 每章结束自动停 → `#pausePrompt` 出现 → 老师提问（可点「教师提示」看「可以问 / 可以动」）→ 点「继续播放」或空格继续。
4. 想重讲某句：拖 `#classProgress` 或按 `←/→`；想换章：顶栏「章节」或 `C` / `PageUp` / `PageDown`。
5. 「找一找」按当前章节可见部位出题（含 bird / insect），点中出点认卡；「四季合影」`Q` 生成四张（按钮期间 `busy`）。
6. 需要时「增亮」（投影）、「锁定」（长按 2s 解锁）、「朗读」（Web Speech，BGM 自动 duck 到 18%）。
7. 结束：到 04:20 自动停并 toast 提示可回顾合影（不强制弹层）；点「退出」→ `#exitConfirm` 确认 → 保留 `storyTime` 回到开场页，按钮变「继续观看」。
8. 任意时刻 `?` 打开快捷键面板；`Esc` 按「弹层 → 点认卡 → 找一找 → 暂停提示 → 退出确认」逐层关闭。

## 20. 背景音乐 `src/bgm.js`

独立普通脚本，在 `index.html` 底部以 `<script src="./src/bgm.js?v=round3">` 引入，**不参与 esbuild 打包**；只读播放器 DOM，3D 代码不用改。

| 项 | 内容 |
|---|---|
| 音频 | `assets/tree-of-seasons-bgm-v3.mp3`（260 秒），Yoiyami《The Budding of Consciousness》CC0，详见 `assets/MUSIC-LICENSE.md` |
| 播放状态 | **`playBtn.dataset.playing === '1'`**（第三轮改为读 `data-playing`，不再读 `textContent === '⏸'`）；仍保留一行极老的 `textContent` 兜底分支，正常路径不会走到 |
| 音乐按钮 | `label()` 把 `#musicBtn .btn-label` 与 `#classMusicBtn` 固定写成「音乐」；用 `aria-label`（"开启/关闭背景音乐"）、`aria-pressed`、`title`、`.on/.off` 类与 `.status-dot` 表达状态，**宽度不随状态变化** |
| 音量 | `#volume` 与 `#classVolume` 共用 `onVolumeInput()`，`localStorage['tree-of-seasons.bgm']` 保存 `{on, volume}`（默认 0.85）；`M` 键在 `bgm.js` 内 `toggleMusic()` |
| 同步 | `syncPlayState()` 读 `dataset.playing` 对齐音频；拖进度条 / ←→ / Home / End / 重播 / 再种一棵后 `seekToStory()` 把 `audio.currentTime` 对齐 `#timeline.value`；每 200ms 漂移校正（小偏差改 `playbackRate`，大偏差直接 seek） |
| 自动播放限制 | 先尝试 `audio.play()`，失败则等待首次用户手势；`unlocked` 状态只影响状态点与 aria，不改文案 |
| 朗读 ducking | `tree:voice` 事件把 `applyVolume()` 的系数改为 0.18，结束恢复 |
| 截图 / 导出 | `?freeze` / `?video` 时 `#player` 隐藏，音频完全不出声 |

换音乐：替换 `assets/` 文件 → 改 `index.html` 的 `<audio src>` → 更新 `assets/MUSIC-LICENSE.md` → 用无头浏览器验证加载时长、播放/暂停、跳转、静音、偏好记忆、定帧静音。

## 21. 改 UI 时最容易踩的坑

1. **别再用 `playBtn.textContent` 判断播放状态**：SVG 图标由 `data-playing` 控制，`bgm.js` 也读它；写文字会冲掉图标。
2. **别给按钮换回 emoji / 文字符号**：图标一律走 `#i-*` sprite，状态用 `data-*` / `aria-pressed` / class。
3. **改弹层要走 `openModal/closeModal`**：直接切 `.show` 会丢 `inert`、焦点循环与恢复焦点，也会让全局快捷键穿透。
4. **通知别放回顶部同一行**：toast 固定在底部，任务条与暂停提示在顶部；改位置前先看 §11 的 z-index/位置约定。
5. **改 `#app` 尺寸必须调 `refreshViewport()`**：舞台是浮动画框，`--gutter` / `--player-h` / `--class-bottom` 都会影响实际视口。
6. **定帧可复现是硬约束**：`?t0=N&freeze` 下 `snapCam=true`，任何镜头缓动/惯性都不得影响截图；新增动画优先用 `t` 的闭式函数或走 `REDUCED_MOTION` 分支。
7. **改键盘前看 §9 的守卫**：弹层挂起、按钮 Space 原生行为、画布方向键 `stopPropagation()`，三者互相依赖。
8. 视觉 token、组件清单、动效时长、a11y 与逐条验收状态统一维护在 [`11-round3-ui-system.md`](11-round3-ui-system.md)，不要在多份文档里各写一份。
