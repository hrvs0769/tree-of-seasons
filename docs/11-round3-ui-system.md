# 11 · 第三轮 UI 设计系统与验收

> 本文解决：v3 界面用哪套设计 token、由哪些组件构成、动效时长与 easing 如何统一、pointer/keyboard/touch 如何映射、无障碍做到了什么程度，以及 `docs/10` 的 P0/P1/P2 清单逐条整改到什么状态。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)；组件与事件细节见 [`05-ui-and-audio.md`](05-ui-and-audio.md)；整改前的问题清单见 [`10-round3-ui-plan.md`](10-round3-ui-plan.md)。
> 最后更新：2026-11-07 · 对应代码：`17c3454`（第三轮 UI 现代化 · 现代设计系统 · 交互与动效）

## 1. 设计语言

一句话：**现代自然志 / 暖纸色 + 墨色 + 单一森林绿**。3D 树不是铺满屏幕的「网页背景」，而是嵌在纸面里的一件展品。

第三轮明确删除的东西（不要再带回来）：

| 删除项 | 旧版表现 | v3 替代 |
|---|---|---|
| 宋体 / 衬线 | 标题与季节用宋体 | 全站 `--font` 无衬线系统字体栈 |
| 金棕 / 深绿渐变 | 侧栏、按钮、开场页深绿 + 金色 | 纸色 + 墨色 + `--accent #246B4E` 单强调色 |
| 点状纹理 / 装饰光晕 | `.start-orb`、卡片底纹 | 纯色 + 1px 细线 + 轻投影 |
| 胶囊按钮 | pill 圆角、emoji 图标 | 9/14/20px 圆角 + 内联 SVG sprite |
| emoji / 字符图标 | `⏸ ▶ ↻ ♫ ▣ ☰ ▦ 🔒 ✓` | 15 个 `#i-*` symbol，状态用 `data-*` / `aria-pressed` |
| 深色课堂 UI | 深绿顶栏 + 深绿控制条 | 浅色顶栏 + 白色字幕带 + 白色控制条 |

不变的是：3D 场景（`src/main.js` 的场景层）、14 章文案与时序、`CHAPTERS/CHAPTER_PARTS/TEACHER_TIPS`、BGM 音频与授权、单页原生 JS + CSS（不引入框架/npm 依赖）、`?class / ?t0 / ?freeze / ?stage / ?dbg` 调试参数。

## 2. 设计 token

### 2.1 颜色

| Token | 值 | 用途 |
|---|---|---|
| `--paper` | `#F4F2ED` | 页面底色（暖纸色） |
| `--paper-2` | `#EEECE5` | 纸面次级 |
| `--surface` | `#FBFAF7` | 卡片 / 浮层 / 播放条 |
| `--surface-2` | `#F0EEE8` | 次级面 / 移动端按钮底 |
| `--surface-3` | `#E8E5DE` | 三级面 |
| `--ink` | `#14181A` | 主文字、主按钮底、toast 底 |
| `--ink-2` | `#5D635E` | 次级文字 |
| `--ink-3` | `#6A706A` | 辅助文字（**提到 AA 对比度**） |
| `--line` | `rgba(20,24,26,.09)` | 统一 1px 细线 |
| `--line-2` | `rgba(20,24,26,.16)` | 稍强分隔线 / 轨道底 |
| `--accent` | `#246B4E` | 唯一强调色：进度、当前章、焦点环 |
| `--accent-2` | `#1B5540` | 强调色深态（hover / 激活文字） |
| `--accent-soft` | `#E3EEE7` | 强调色浅底（`#findNext` 等） |
| `--danger` | `#A9513C` | 退出课堂确认按钮、退出 hover |
| `--sun` | `#C07A2B` | 暖色点缀 |
| `--spring / --summer / --autumn / --winter` | `#4E9E62 / #2F7D45 / #B4762C / #5B7C93` | 四季色，由 `body[data-season]` 写入 `--season` |
| `--season` | `var(--spring)` 默认 | 当前季色：`#hud::before` 小色条、`#season` 大字、转盘标签 |

`color-scheme: light` 与整体浅色主题一致；`theme-color #F4F2ED`；`::selection` 用 `rgba(36,107,78,.18)`。

### 2.2 字体

```
--font: -apple-system, BlinkMacSystemFont, "SF Pro SC", "SF Pro Text", "PingFang SC",
        "HarmonyOS Sans SC", "MiSans", "Noto Sans SC", "Microsoft YaHei", system-ui, sans-serif;
--mono: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;
```

全站 `font-family: var(--font)`、`-webkit-font-smoothing: antialiased`；`font-variant-numeric: tabular-nums` 用于时间码/进度数字。层级靠字重（500 / 550 / 600 / 620 / 650）与颜色，不靠降低透明度；季节大字 `clamp(54px, 4.5vw, 70px)`、开场标题 `clamp(54px, 6.6vw, 92px)`、课堂大字幕 `clamp(21px, 2.3vw, 36px)`、正文约 14px、按钮 11.5–13px。残留的 8–11px 辅助字见 §7 P1-14 / P2-14（部分）。

### 2.3 间距 / 圆角 / 阴影

| Token | 值 | 说明 |
|---|---|---|
| `--gutter` | `18px` | 3D 画框与纸面之间的留白 |
| `--side` | `clamp(300px, 24vw, 356px)` | 讲解栏宽 |
| `--player-h` | `78px` | 播放条高度 |
| `--class-top / --class-bar-h / --class-sub-h` | `64 / 84 / 88px` | 桌面课堂顶栏 / 控制条 / 字幕带；移动端覆盖为 `134 / 72 / 82px` |
| `--class-bottom` | `calc(var(--class-bar-h) + var(--class-sub-h))` | 舞台底部让位 |
| `--radius-s / --radius / --radius-lg` | `9 / 14 / 20px` | 控件 / 卡片 / 大浮层 |
| `--stage-radius` | `18px` | 3D 画框圆角 |
| `--shadow-sm` | `0 1px 2px rgba(18,26,21,.05)` | 小控件 |
| `--shadow-md` | `0 2px 10px rgba(18,26,21,.06), 0 20px 48px -20px rgba(18,26,21,.18)` | 卡片 / 通知条 / 画框 |
| `--shadow-lg` | `0 32px 90px -28px rgba(18,26,21,.38)` | 弹层 / 锁定层 |

### 2.4 动效 token

| Token | 值 | 用途 |
|---|---|---|
| `--ease` | `cubic-bezier(.22, .9, .28, 1)` | 常规状态过渡（hover、颜色、进度） |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` | 入场 / 上移淡入 |

镜头缓动另用 `camEase = 1 - Math.exp(-realDt * 14)`（约 14Hz 指数缓动），定帧/视频/四季合影时 `snapCam=true` 直接吸附。

## 3. 组件清单

| 组件 | DOM id / class | 要点 |
|---|---|---|
| SVG 图标库 | `<svg>` sprite：`#i-logo / #i-play / #i-pause / #i-replay / #i-music / #i-volume / #i-chapters / #i-grid / #i-present / #i-close / #i-chevron-left / #i-chevron-right / #i-lock / #i-arrow-right / #i-keyboard` | 15 个 symbol，全部 `aria-hidden="true"`；按钮内 `<svg class="icon"><use href="#i-…"/></svg>` |
| 讲解栏 | `#sidebar` / `#brand` / `#hud` / `#chapterRail` / `#narration` / `#sidebarTools` / `#tips` | 编辑式排版；`#chapterRail` 14 段 `.done/.current` |
| 3D 画框 | `#app` + `canvas` | 浮动圆角 + 阴影；canvas `tabindex=0`、`role=application`、中文 `aria-label` |
| 柔光 / 暗角 | `#vignette` | `pointer-events:none` |
| 播放条 | `#player` → `#playBtn / #timecode / #timelineWrap / #replayBtn / #musicBtn / #volumeWrap / #replant` | `data-playing` 切图标；`#scrubTip` 时间气泡；`#marks` 刻度 |
| 开场页 | `#startScreen` → `.start-shell / .start-copy / .start-visual` | 左右分栏 + 「年轮四季」SVG（`.art-orbit` 46s 缓慢环绕） |
| 课堂顶栏 | `#classroomTop` → `#classChapterIndex / #classChapterTitle / #classSeason` + 8 按钮 | 桌面一行、移动两行 44px |
| 季节转盘 | `#seasonWheel` → `.wheel-ring / .wheel-label ×4 / #wheelNeedle / .wheel-center #wheelYear` | 细环 conic + 挖空 mask；纯图表 `aria-hidden` |
| 字幕带 | `#subtitleBar` → `#subtitleText`（`aria-live=polite aria-atomic=true`）/ `#subtitleMeta` | 白色，不压画面 |
| 课堂底栏 | `#classroomBar` → `#classProgressRow #classProgress` / 主控件 / `#classVolumeWrap #classVolume` | 细进度条 `role=slider`；音量滑杆 |
| 弹层 ×5 | `#chapterDrawer / #teacherPanel / #quartetOverlay / #shortcutPanel / #exitConfirm` | `role=dialog aria-modal=true aria-labelledby=…` |
| 点认卡 | `#partCard`（`role=dialog aria-modal=false`）→ `#partGlyph / #partName / #partPinyin / #partDesc / #partClose` | 锚定点击位置、自动翻转、移动底部 |
| 找一找 | `#findBanner`（`role=status aria-live=polite`）→ `#findText / #findProgress / #findNext / #findClose` | 顶部任务条 |
| 自动暂停 | `#pausePrompt`（`role=status`）→ `.pause-text` + `#pauseContinue` | `.show` 时 `pointer-events:auto` |
| 轻提示 | `#classToast`（`role=status aria-live=polite`） | 底部，课堂模式抬到 `--class-bottom + 18px` |
| 锁定层 | `#lockOverlay` → `.lock-inner / .lock-icon / .lock-progress` | 长按 2s 解锁进度 |
| 加载层 | `#loading`（`role=status aria-live=polite`）→ `.loading-mark / .loading-text / .loading-line` | 纸色 logo + 生长进度线，500ms 级淡出 |
| 快捷键面板 | `#shortcutPanel` → `.shortcut-grid`（12 行 `<kbd>`） | `?` 打开 |

## 4. 动效时长与 easing 规范

| 场景 | 时长 | 动画 / 曲线 |
|---|---|---|
| 页面 / 舞台入场 | `stageIn .7s` | `opacity 0→1, scale .995→1`, `var(--ease-out)` |
| 讲解栏子元素 | `riseIn .6s`（逐项） | `translateY(14px)→0` + 淡入，`--ease-out` |
| 开场文案 | `riseIn .7s`（stagger） / `.start-visual fadeIn .9s .15s` | 上移淡入 |
| 开场页淡出 | `opacity/visibility .55s` | `#startScreen.hidden` |
| 课堂顶栏 / 字幕 / 底栏进入 | `chromeDown .42s` / `chromeUp .45s (.05s)` / `.45s (.1s)` | Y 轴 10px，`--ease-out` |
| 章节切换（标题 / 正文 / 字幕） | `.45s / .32s / .3s` | `seasonIn`（Y 6px）/ `textIn`（Y 4px），`--ease-out`，`retriggerAnim()` 重放 |
| 季节大字 | `seasonIn .7s` | — |
| 弹层遮罩 / 卡片进入 | `modalFade .24s` / `modalPop .34s` | `--ease` / `--ease-out`；卡片 `translateY(12px) scale(.985)` |
| 弹层关闭 | `modalFadeOut .18s` / `modalPopOut .18s` | `.closing` + `setTimeout(...,190)` 移除 `show`，共约 **180ms** |
| 按钮 hover / active | `.18s` / `.2s` | `background/color/box-shadow/transform`；`active scale(.97) !important` |
| 找一找任务条 / 错误抖动 | `findIn .3s` / `findShake .4s` | `--ease-out` / `--ease` |
| 自动暂停提示 | `opacity/transform .3s` | `--ease` |
| toast 进入 / 退出 | `.24s` | `--ease`；`showToast()` 队列化，最多同时 1 条 |
| 进度条 / 课堂进度 | `.12s linear` / `.16s` | thumb 与 `--cp` 宽度 |
| 季节色过渡 | `.4s ~ .6s` | `--season`、`background` |
| 锁定长按进度 | `2s linear` → v3 用 `.lock-progress i` | 淡入 `fadeIn .25s` |
| 加载进度线 | `loadSlide 1.1s infinite` | `loadSlide` + `--ease`；加载完 `.hidden` (`opacity .5s`) + 620ms 后 `display:none` |
| 镜头相机 | `camEase = 1 - exp(-realDt*14)` | 14Hz 指数缓动；惯性 `camVel` 指数衰减 |

**`prefers-reduced-motion: reduce`**：CSS 把 `*, *::before, *::after` 的 `animation-duration / transition-duration` 压到 `.001ms`、`animation-iteration-count:1`、`scroll-behavior:auto`；JS 侧 `REDUCED_MOTION` 关闭 6 秒后的自动环绕。状态切换仍以极短 opacity 完成，不会丢失可见性。

## 5. 交互映射（pointer / keyboard / touch）

| 意图 | Pointer / 鼠标 | 键盘 | 触控 |
|---|---|---|---|
| 播放 / 暂停 | 点 `#playBtn` / `#classPlayBtn` | `空格`（焦点不在交互控件上） | 点按钮（≥44px） |
| 前后 5 秒 | 拖 `#timeline` / `#classProgress` | `← →`（全局）；`#classProgress` 聚焦时也是 `← →` | 拖动（`#timelineWrap` 36px / 移动 44px 命中区） |
| 跳到任意时刻 | 点击 / 拖动进度条，hover 显示 `#scrubTip`「mm:ss · 章名」 | `Home / End`；`Tab` 到进度条后方向键 | 单指拖动 |
| 换章 | 「章节」卡片 / 「上一章 / 下一章」 | `C` / `PageUp` / `PageDown` | 卡片点击 |
| 环顾 3D | 画布拖动（**9px 死区**后生效，松手有惯性） | 画布聚焦后 `← → ↑ ↓`（step 0.06） | 单指拖动 |
| 缩放 3D | 滚轮（平滑 `cam.radius *= exp(deltaY*.0012)`） | 画布聚焦后 `+ / =` / `- / _`（0.9 / 1.1） | 双指捏合 |
| 复位视角 | 双击画布 | — | 双击画布 |
| 点认部位 | 点击画布（未超死区才算 tap） | 画布聚焦后 `Enter`（画面中心 `pickPartAt`） | 轻点画布 |
| 弹层开合 | 按钮 / 点遮罩 / `.modal-close` | `C/T/Q/?` 打开、`Esc` 关闭、`Tab` 循环、`Enter` 激活 | 44px 关闭按钮 |
| 退出课堂 | 「退出」→ `#exitConfirm` 确认 | `Esc`（课堂模式打开确认层） | 确认弹层两个按钮 |
| 自动暂停后继续 | `#pauseContinue`「继续播放」 | `Enter / Space` 聚焦按钮或全局空格 | 点按钮 |
| 关闭浮层 | `#partClose` / `#findClose` | `Esc` 分层关闭 | 点关闭 |
| 音乐 / 音量 | `#musicBtn` / `#volume` / `#classVolume` | `M` | 44px 按钮 |
| 快捷键面板 | — | `?` 或 `Shift+/` | — |
| 页面缩放 | — | — | 允许双指缩放页面（viewport 不再锁 `maximum-scale`） |

**守卫与优先级**：弹层打开 → 全局快捷键挂起（只留 Esc/Tab）；焦点在 `button/a/input/textarea/select/[contenteditable]` → Space 走原生行为；画布方向键 `stopPropagation()` 不触发全局 5 秒跳转；`touchLocked` → 只响应 Esc 解锁；拖拽期间 `body.dragging` 抑制误触。

## 6. 无障碍（a11y）

| 项 | 状态 |
|---|---|
| 弹层语义 | 5 个 `.modal` 均 `role="dialog" aria-modal="true" aria-labelledby=…`；`#partCard` 非模态 `aria-modal="false"` |
| 背景 inert | `setBackgroundInert()` 对 `#app / #sidebar / #player / #classroomTop / #classroomBar / #subtitleBar / #seasonWheel / #vignette` 加 `inert` |
| 焦点管理 | 打开聚焦 `.modal-close`、Tab 在弹层内循环、关闭恢复 `lastFocusedBeforeModal` |
| 状态播报 | `#findBanner` / `#pausePrompt` / `#classToast` 为 `role=status`（部分带 `aria-live=polite`）；`#subtitleText` `aria-live=polite aria-atomic=true` |
| 状态语义 | 播放 `data-playing` + `aria-label`；音乐与 4 个课堂开关 `aria-pressed`；四季合影 `aria-busy` + `disabled`；`#classProgress` `role=slider` + `aria-valuemin/max/now` |
| 画布可达 | `tabindex=0`、`role=application`、中文 `aria-label`、`:focus-visible` 2px accent 描边；方向键 / 加减 / Enter 全闭环 |
| 语义图标 | 全部 SVG `aria-hidden="true"`，按钮靠 `aria-label` / 固定文案表达 |
| 对比度 / 字号 | `--ink-3 #6A706A` 达 AA；仍有 8–11.5px 辅助字（见 §7） |
| 选择文本 | `#chapterText, .teacher-block p, .modal-card, .start-sub, .quartet-note` 可 `user-select:text` |
| 减少动态 | CSS + JS 双分支，见 §4 |
| 触控命中 | 移动端播放器与课堂顶栏控件 ≥44px；`#partClose` / `#findClose` 均为 44×44px |
| viewport | `width=device-width, initial-scale=1, viewport-fit=cover`，无 `maximum-scale` / `user-scalable=no` |

## 7. 验收清单（对照 `docs/10` 的 P0 / P1 / P2 逐条状态）

> 状态：**已修复** / **部分** / **不做**。基线共 46 条（P0 4 / P1 22 / P2 20），另有 `docs/10 §5` 的 10 条范围约定单列在 §7.4（9 条不做 / 1 条部分）。
> 46 条基线统计：**已修复 36 条 / 部分 10 条 / 不做 0 条**。

### 7.1 P0（4 条）

| 编号 | 状态 | v3 实现 / 剩余 |
|---|---|---|
| P0-1 移动端课堂顶栏命中区 | **已修复** | `.class-top-actions button` 移动端 `flex: 0 0 calc(25% - 3px)` + `height:44px`，8 个按钮两行；退出用 danger 色区分 + 二次确认 |
| P0-2 弹层焦点与快捷键穿透 | **已修复** | `role=dialog aria-modal aria-labelledby` + `inert` + 首焦点 + Tab 循环 + 焦点恢复；`hasOpenModal()` 时全局键只留 Esc/Tab；`openModal` 先关其它弹层 |
| P0-3 自动暂停提示不可点 | **已修复** | `#pausePrompt.show` `pointer-events:auto`；`#pauseContinue`「继续播放」委托点击，恢复 `playing` 且不穿透 canvas |
| P0-4 移动端播放器控件 <44px | **部分** | `#playBtn / #replayBtn / #musicBtn / #replant / #timelineWrap / #timeline` 均 ≥44px；但 `#volumeWrap` 在 ≤980px 仍 `display:none`，自由观看移动端音量不可调（课堂有 `#classVolume`，同样 ≤980px 隐藏） |

### 7.2 P1（22 条）

| 编号 | 状态 | v3 实现 / 剩余 |
|---|---|---|
| P1-1 进度/音量焦点环不可见 | **已修复** | 全局 `button:focus-visible, input:focus-visible, [tabindex]:focus-visible` 2px accent + offset；移除 ID 级 `outline:none` |
| P1-2 按钮上 Space 触发全局播放 | **已修复** | `e.target.closest('button, a, input, textarea, select, [contenteditable=true]')` 时 return |
| P1-3 Esc 只关 `.modal` | **已修复** | Esc 链：弹层 → 点认卡 → 找一找 → 暂停提示 → 课堂退出确认；锁定态只解锁 |
| P1-4 6px 进度条 / 刻度不可达 | **部分** | `#timelineWrap / #timeline` 36px（移动 44px）命中区 + `#scrubTip`「mm:ss · 章名」；但 `#marks` 仍 `pointer-events:none`，刻度自身 hover 提示由统一气泡承担 |
| P1-5 音乐按钮文案抖动 | **已修复** | `label()` 固定「音乐」+ `.status-dot` + `aria-pressed` + `aria-label`，按钮宽度不变 |
| P1-6 错误 toast 盖住任务条 | **已修复** | `#classToast` 移到底部（课堂 `bottom: calc(--class-bottom + 18px)`），任务条在顶部 |
| P1-7 退出无确认且丢进度 | **已修复** | `#exitConfirm` 二次确认；`exitClassroomMode()` 不再归零 `storyTime`，`#freeViewBtn` 变「继续观看」 |
| P1-8 课堂无可见进度条 | **已修复** | `#classProgress`（`role=slider aria-valuemin=0 max=260 now`）+ 点击/拖动/键盘 ←→；`#classTimecode` 移动端保留 |
| P1-9 章节弹层当前章不在视口 | **已修复** | `openModal` 中 `current.scrollIntoView({block:'center'})`；移动端 `.modal-close` 44px |
| P1-10 4px 抖动转镜头仍点选 | **已修复** | 9px 死区：累计位移 ≤9px 只更新坐标不改变相机；`endPointer` 仅 `!moved` 才 tap |
| P1-11 画布无键盘/读屏替代 | **已修复** | `tabindex=0` + `role=application` + 中文 `aria-label`；方向键 / 加减 / Enter 点认中心；未做「树部位列表按钮」（期望中的可选项，键盘路径已闭环） |
| P1-12 三个弹层缺 dialog 语义 | **已修复** | 5 个 `.modal`（含新增 `#shortcutPanel` / `#exitConfirm`）全部补齐 `role/aria-modal/aria-labelledby` |
| P1-13 反馈无 aria-live | **已修复** | `#findBanner` `role=status aria-live=polite`、`#pausePrompt` `role=status`、`#classToast` `role=status aria-live=polite`、`#subtitleText` `aria-live=polite aria-atomic=true` |
| P1-14 9–10px 元数据对比度不足 | **部分** | `--ink-3` 由低透明度改为 `#6A706A`（AA）；但 `wheel-label 8–9px`、`class-top-actions 10.5–11.5px`、`#findProgress 10px` 等小字仍在 |
| P1-15 无 `prefers-reduced-motion` | **已修复** | CSS 全局压 `.001ms` + `REDUCED_MOTION` 关自动环绕 |
| P1-16 viewport 禁止缩放 | **已修复** | `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` |
| P1-17 emoji / 状态与 textContent 耦合 | **已修复** | 15 个内联 SVG symbol；`playBtn.dataset.playing` 驱动图标，`bgm.js` 主路径读 `dataset.playing`（保留一行 legacy `textContent` 兜底，正常不走） |
| P1-18 hover/active 不完整 | **已修复** | 统一 `.18s/.2s` 过渡、`button:active { transform: scale(.97) !important }`、`focus-visible`、`disabled`、`busy` |
| P1-19 顶栏 8 按钮同权重 | **部分** | 退出按钮单独 danger 视觉 + 确认弹层，移动端两行；桌面仍 8 个同尺寸一行，未做分组/「更多」菜单 |
| P1-20 状态按钮无 aria-pressed | **已修复** | `updateClassroomButtons()` 为每章停 / 朗读 / 增亮 / 锁定写 `aria-pressed` 且文案固定 |
| P1-21 课堂无音量、移动音量隐藏 | **部分** | 新增 `#classVolume`（与 `#volume` 双向同步）；但 ≤980px `#classVolumeWrap` 与 `#volumeWrap` 均隐藏 |
| P1-22 四季合影无忙碌反馈 | **已修复** | `setQuartetBusy()` 给 `#classQuartetBtn / #quartetBtnNormal` 设 `disabled` + `aria-busy` + `.busy` 旋转点 |

### 7.3 P2（20 条）

| 编号 | 状态 | v3 实现 / 剩余 |
|---|---|---|
| P2-1 模式/弹层 display 硬切 | **已修复** | 开场 `.55s` 淡出；遮罩 `modalFade .24s` / 卡片 `modalPop .34s` / 关闭 `.18s`；课堂 chrome 进场 |
| P2-2 正文与字幕瞬切 | **已修复** | `retriggerAnim()`：标题 `seasonIn .45s`、正文 `textIn .32s`、字幕 `textIn .3s`，共用 `--ease-out` |
| P2-3 章节弹层每次重建 DOM | **部分** | `buildChapterGrid()` 仍用 `innerHTML` 重建；但打开时 `scrollIntoView` 当前章 + 焦点管理，滚动/焦点问题已解决 |
| P2-4 首/尾章无禁用态 | **已修复** | `syncPlayer()` 的 `_syncCache.chapter` 设置 `#classPrevBtn.disabled / #classNextBtn.disabled` |
| P2-5 转盘看似可点 | **部分** | 重做为细环纯图表（conic + 挖空 + 四角标签 + 细指针），仍 `aria-hidden` + `pointer-events:none`；未实现点击跳季 |
| P2-6 点认卡不跟随点击、close 过小 | **已修复** | `showPartCard(part, x, y)` 锚定点击点、自动翻转、clamp 防出界、移动固定底部、`--ox/--oy` 尖角；`#partClose` 44×44px |
| P2-7 glyph 取末字语义错 | **已修复** | `PART_INFO[part].glyph`：种 / 根 / 干 / 枝 / 叶 / 花 / 果 / 雪 / 鸟 / 虫 |
| P2-8 合影 16:9 裁切 | **已修复** | `.quartet-item img { width:100%; height:auto; object-fit:contain }` |
| P2-9 结束自动弹合影 | **已修复** | 到 `STORY_END` 只 `showToast('本课播放结束 · 可点「四季合影」回顾四季')`，不自动开 modal |
| P2-10 章节缩略图伪截图 | **部分** | `.chapter-thumb` 改为抽象季节色块 + `data-num` 编号（不再像「棒棒糖树」伪截图），但仍非真实画面截图 |
| P2-11 加载层浅蓝闪屏 | **已修复** | 纸色 `#loading` + 墨色 `#i-logo` + `.loading-line` 生长进度线，`.hidden opacity .5s` 淡出 |
| P2-12 `color-scheme` 与主题矛盾 | **已修复** | 全站浅色主题，`color-scheme: light` 一致；无白底滚动条冲突 |
| P2-13 全局 `user-select:none` | **已修复** | 正文/弹层/开场副标/合影说明显式 `user-select:text`，按钮画布仍禁选 |
| P2-14 8–11px 小字 | **部分** | 主信息字号提升（季节 54–70px、字幕 21–36px、正文 14px）；转盘标签 8–9px、顶栏按钮 10.5–11.5px 等辅助字仍 <12px |
| P2-15 `#tips` 单字孤行 | **已修复** | 显式 `<br>` 两行：「拖动环顾 · 滚轮缩放 · 双击复位」/「空格暂停 · ← → 快进 · F 全屏 · M 音乐 · ? 快捷键」 |
| P2-16 `syncPlayer()` 每帧写 DOM | **已修复** | `_syncCache` 差异写入；时间码按秒、进度按 pct 字符串变化、播放键只在 `playing` 变化时更新 |
| P2-17 多层 backdrop-filter 开销 | **已修复** | 保留 1–2 层核心模糊（弹层 8px、锁定层 16px）；新增 `@supports not (backdrop-filter…)` 不透明底色回退；中低端设备未做 30fps 实测（非阻断） |
| P2-18 开场页矮屏裁切 | **已修复** | `#startScreen { overflow:auto; overscroll-behavior:contain }`，移动端单列 + `order:-1` 插画 |
| P2-19 顶栏标题与季节重复 | **已修复** | `#classSeason` 隐藏；`#classChapterTitle` 保留章节名「第二年 · 夏」，顶栏不再重复年份/季节 |
| P2-20 三个提示层共用顶部位置 | **部分** | toast 已移到底部（主要遮挡解决）；但移动端 `#findBanner` 与 `#pausePrompt` 同为 `top: calc(--class-top + 10px)`，二者同时出现仍可能重叠 |

**统计**：P0 3 已修复 / 1 部分；P1 18 已修复 / 4 部分；P2 15 已修复 / 5 部分 → 合计 **36 已修复 / 10 部分 / 0 不做**。

### 7.4 范围约定（`docs/10 §5`，9 条不做 / 1 条部分）

| # | 约定 | v3 状态 |
|---|---|---|
| 1 | 不改 3D 场景本身 | **不做**（保持） |
| 2 | 不改 14 章文案 / 时序 / 旁白 / BGM 音频 | **不做**（保持） |
| 3 | 不重写播放内核，只解耦 UI 对 `textContent` 的依赖 | **不做**（仅按 P1-17 解耦） |
| 4 | 不引入框架 / 构建链 / npm 依赖 | **不做**（保持） |
| 5 | 不做账号 / 后端 / 多语言 / 深浅色主题切换 | **不做**（保持单套浅色） |
| 6 | 不重做「找一找」玩法与「四季合影」内容 | **不做**（只改呈现、反馈、a11y） |
| 7 | 不新增复杂手势 | **部分**：未加三指/路径手势，但按 P0/P1 需求补了双击复位（属于点按级复位，非缩放手势） |
| 8 | 不重做课堂业务流程 | **不做**（自动暂停、每章停、锁定、增亮、朗读逻辑保留；只补确认与焦点） |
| 9 | 不重做 3D 贴图 | **不做**（保持） |
| 10 | 不新增页面 / 路由 | **不做**（保持 `?class / ?t0 / ?freeze`） |

### 7.5 验收方式

- **命中区**：`getBoundingClientRect()` 在 390×844 断言课堂 8 按钮与播放器 6 控件均 ≥44×44；`elementFromPoint` 在进度轨道中心 ±20px 均命中 `#timeline`。
- **焦点 / 快捷键**：只用键盘完成「打开章节 → 选章 → 关闭」；`document.activeElement` 始终在 `.modal` 内；弹层打开时 Space/←→/C/T/Q 不改变 `playing` / `storyTime` / modal 列表。
- **提示栈**：找一找错误时 `#findBanner` 与 `#classToast` bbox 重叠为 0；自动暂停时点「继续播放」后 `playing:true` 且事件 target 不是 canvas。
- **镜头**：4px 抖动后相机位置不变且点认卡出现；9px 拖动后相机改变且点认卡不出现；`prefers-reduced-motion: reduce` 下无自动环绕、无 shake。
- **状态语义**：`aria-pressed` 与开关一致；`playBtn.dataset.playing` 与音频播放一致；音乐按钮三种状态宽度差 ≤1px。
- **截图**：见 §8；桌面 1280×800 / 1440×900，移动 390×844 / 768×1024，`shots/round3/` 下另有 `a11y-*` 系列（含 `a11y-reduced-motion-1280x800.png`）与 `audit-*` 基线系列。

### 7.6 第三轮 a11y 复审（v3 最终版，`shots/round3/a11y-baseline.md`）

在 46 条基线之外，a11y 专项复审又发现 1 个 P0、2 个 P1、7 个 P2，已在本轮一并修复：

| 编号 | 等级 | 问题 | 状态 |
|---|---|---|---|
| A-P0-1 | P0 | 开场页无 dialog 语义 / 背景未 inert，Tab 前 11 个焦点落在覆盖层之下 | **已修复**：`#startScreen role=dialog aria-modal aria-labelledby`；启动时 `#app/#sidebar/#player/#vignette/#classroom*` inert；焦点进 `#startClassBtn`；Tab 只在开场页循环；关闭后解除 inert |
| A-P1-1 | P1 | `#classProgress` 方向键被全局处理器重复执行（100→110s）；音量 range 方向键误改剧情 | **已修复**：`#classProgress` keydown `stopPropagation`；全局 keydown 对 `input[type=range]`（除 `#timeline`）直接 return |
| A-P1-2 | P1 | 桌面/平板多个按钮 30–42px，低于 44×44 | **已修复**：课堂顶栏/底栏、桌面播放器全部 44px；`#classProgress` 44px 命中区；`#findNext` / `.pause-btn` / 弹层关闭 / 退出确认按钮 44px |
| A-P2-1 | P2 | `#classExitBtn` 11.5px 文字对比度 4.39:1 | **已修复**：改用 `--ink-2`（5.3:1） |
| A-P2-2 | P2 | 季节转盘活动标签 9px 低对比度 | **已修复**：标签文字改 `--ink`、季节色移到圆点 |
| A-P2-3 | P2 | 滑块未填充轨道 1.39:1 | **已修复**：新增 `--track #8C8A83`（paper 3.09:1 / surface 3.31:1） |
| A-P2-4 | P2 | 当前章节无 `aria-current` | **已修复**：`aria-current="step"` |
| A-P2-5 | P2 | 点认卡不聚焦、锁屏无 role | **已修复**：`#partCard tabindex=-1` + focus；`#lockOverlay role=dialog aria-label` |
| A-P2-6 | P2 | 弹层打开时 `M` 仍切换音乐 | **已修复**：`bgm.js` 检测 `.modal.show` 后忽略 M |
| A-P2-7 | P2 | 768/390 播放器 `.row` 108px > `--player-h:104px`（底部溢 2px） | **已修复**：移动端 `--player-h:110px` |

复审后的最终结论见 `shots/round3/a11y-baseline.md`（本机审计产物，不入库）；v3 无未处理的 P0/P1。

## 8. 截图索引（`shots/round3/`）

> 全部为本机视觉迭代产物，`shots/` 被 `.gitignore` 忽略，不进仓库、不部署；需要时用 `node tools/ui-shot.js <url> <out.png> [w] [h] '[actions-json]' [waitMs]` 复现（独立 Playwright 截图器，见 `tools/ui-shot.js`）。

| 文件 | 看什么 |
|---|---|
| `shots/round3/v24-start.png` | 开场页：左右分栏、大标题、右下「年轮四季」SVG 插画、纸色/墨色/森林绿 |
| `shots/round3/v26-normal.png` | 自由观看：编辑式讲解栏 + 浮动圆角 3D 画框 + 底部播放条 |
| `shots/round3/v26-class.png` | 桌面课堂：浅色顶栏 8 按钮（分组分隔）、细环季节转盘、白色字幕带与底栏细进度条 |
| `shots/round3/v25-mobile-class.png` | 390×844 课堂：顶栏两行 4+4 的 44px 按钮、字幕与控制条、音量/进度可达 |
| `shots/round3/v14-quartet.png` | 四季合影弹层：`object-fit:contain` 完整四图、dialog 语义 |
| `shots/round3/v8-chapters.png` | 章节弹层：14 卡、当前章高亮并滚到视口中央、抽象编号缩略图 |
| `shots/round3/v8-teacher.png` | 教师提示弹层：「可以问 / 可以动」、文本可选中 |
| `shots/round3/v4-partcard.png` | 点认卡：锚定点击位置、专用 glyph 字、翻转不出界 |
| `shots/round3/v4-find.png` | 找一找任务条：`role=status`、进度「第几轮 · 第几个」、底部 toast 不遮挡 |
| `shots/round3/v4-pause.png` | 自动暂停提示：「继续播放」按钮可点、不吃画布事件 |
| `shots/round3/v12-exit.png` | 退出课堂确认弹层：保留进度说明、取消 / 退出两个动作 |

同目录下还有 `a11y-*-{start,free,class,chapter}.png`（1024×768 / 1280×800 / 1440×900 / 390×844 / 768×1024 五种尺寸的无障碍回归）、`a11y-reduced-motion-1280x800.png`，以及 `audit-*.png`（`docs/10` 的旧版基线截图，仅作对照）。

## 9. 维护约定

1. 设计 token 只在 `index.html` 的 `:root` 定义；组件清单、动效时长、交互映射、a11y 与验收状态只在本文维护，`docs/05` 引用本文，不重复抄表。
2. 新增控件必须先过 §6 的 a11y 清单（语义、焦点、状态、命中区、reduced-motion），再补到 §3 组件表。
3. 动效一律用 `--ease` / `--ease-out`；不要写 `linear` 长循环（进度与锁定条除外），不要引入 >500ms 的入场。
4. 任何交互状态优先用 `data-*` / `aria-*` / class 表达，不写进 `textContent`；播放状态唯一来源是 `playBtn.dataset.playing`。
5. UI 改动后必须重建 `app.js`（`docs/06`），并用 `tools/ui-shot.js` 复现 §8 的截图做视觉回归；`?t0=N&freeze` 的逐像素可复现仍是硬约束。
6. §7 的「部分」项是下一轮候选：移动端/窄屏音量、辅助字号统一到 ≥12px、顶栏分组、顶部双提示层避让、章节缩略图真实化、章节弹层 DOM 复用。
