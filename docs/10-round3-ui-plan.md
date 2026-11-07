# 第三轮 · UI 与交互现状审计 / 问题清单

> 最后更新：2026-11-08 · 对应代码：`6518080`（第四轮 · 可视化测试看板）
>
> **本清单为 v3 整改前的旧版基线审计**（基于 HEAD `1ec6cc5` 冻结副本）。v3 已按该清单整改，逐条状态（已修复 / 部分 / 不做）见 [`docs/11-round3-ui-system.md`](11-round3-ui-system.md) 第 7 节；本文的问题描述、行号与 `audit-*` 截图只作历史对照，不代表当前界面。
>
> 审计对象：`一棵树的四季` 旧版界面（Three.js 3D 树生命周期课堂演示）。
> 审计基线：`git show HEAD:index.html`（commit `1ec6cc5`）与同名 `src/main.js` / `src/bgm.js` / `docs/05-ui-and-audio.md`。
> 说明：审计期间工作区出现并行改动（`index.html` / `app.js` / `src/main.js` / `src/bgm.js` 均有未提交修改），本文所有行号均以 **HEAD 基线**为准，截图也来自 HEAD 冻结副本（本地 8778 端口），避免把并行改动当成现状。
> 实测环境：Chrome headless，1280×800（桌面）与 390×844（移动端）；覆盖默认开场页、自由观看、课堂模式、章节弹层、教师提示、四季合影、找一找、锁定、自动暂停等流程。
> 性质：只读审计；未修改 `index.html` / `src/main.js` / `src/bgm.js` / `app.js`。

---

## 1. 页面 / 控件 / 弹层清单

### 1.1 默认入口（开场页）

| 区域 | DOM / 控件 | 说明 |
|---|---|---|
| 开场层 | `#startScreen`（`index.html:677-689`） | 每次正常打开首先显示；含 `.start-orb` 光晕、`.start-card` 卡片 |
| 标题区 | `.start-kicker`「自然观察课 · 幼儿园课堂版」、`h1`「一棵树的四季」、`.start-sub` 引导句 | 全部为静态文案 |
| 动作区 | `#startClassBtn`「开始上课」、`#freeViewBtn`「自由观看」 | 开始上课会请求全屏并进入课堂模式；自由观看只隐藏开场层 |
| 备注 | `.start-note` | 「课堂模式：自动全屏 · 大字幕 · 每章自动暂停 · 支持翻页笔 / 建议使用 Chrome / Edge 浏览器；按 Esc 退出全屏」 |

### 1.2 默认 / 自由观看模式

| 区域 | DOM / 控件 | 说明 |
|---|---|---|
| 左侧讲解栏 | `#sidebar`（`index.html:640-659`） | 固定 `--side: clamp(320px,27vw,400px)`；桌面常驻 |
| 品牌 | `#brand` + 英文副标「THE FOUR SEASONS OF A TREE」 | 装饰性文字 |
| 季节 HUD | `#season` / `#sub` / `#year` | 季节大字、副标题、年份 |
| 章节旁白 | `#chapterIndex` / `#chapterTitle` / `#chapterText` / `#chapterHint` | 14 章标题与正文；提示键位 |
| 侧栏工具 | `#sidebarTools`：`#classEnterBtn`「▣ 课堂模式」、`#chapterBtnNormal`「☰ 章节」、`#quartetBtnNormal`「▦ 四季合影」 | 三个 pill 按钮 |
| 底部提示 | `#tips` | 鼠标/键盘操作提示；触摸设备由 JS 改写 |
| 播放器 | `#player`（`index.html:661-674`） | `#playBtn`、`#timecode`、`#timeline`、`#marks`、`#replayBtn`、`#musicBtn`、`#volume`、`#replant` |
| 点认卡片 | `#partCard`（`index.html:789-798`） | 点击画面中的树部位后出现，含 `#partGlyph` / `#partName` / `#partPinyin` / `#partDesc` / `#partClose` |
| 章节弹层 | `#chapterDrawer.modal`（`index.html:745-757`） | 14 个 `.chapter-item`，7 列桌面 / 4 列 ≤1100px / 2 列 ≤700px |
| 教师提示 | `#teacherPanel.modal`（`index.html:759-772`） | 「可以问 / 可以动」两块，按当前章节更新 |
| 四季合影 | `#quartetOverlay.modal`（`index.html:774-787`） | 2×2 图片 + 文案 |
| 轻提示 | `#classToast`（`index.html:811-812`） | 定位在页面顶部中间；默认隐藏 |
| 加载层 | `#loading`（`index.html:825`） | 「正在种树…」浅蓝渐变 |

### 1.3 课堂模式（`?class` 或开始上课）

| 区域 | DOM / 控件 | 说明 |
|---|---|---|
| 顶部栏 | `#classroomTop`（`index.html:691-708`） | 左：`#classChapterIndex` / `#classChapterTitle` / `#classSeason`；右：8 个工具按钮 |
| 顶栏工具 | `#classChapterBtn` 章节、`#classTeacherBtn` 教师提示、`#classFindBtn` 找一找、`#classQuartetBtn` 四季合影、`#classAutoBtn` 每章停、`#classProjectorBtn` 增亮、`#classLockBtn` 锁定、`#classExitBtn` 退出 | 桌面 34px 高、11px 字；移动 26px 高、9px 字 |
| 季节转盘 | `#seasonWheel`（`index.html:710-720`） | 96px（移动 72px）装饰转盘，`aria-hidden="true"`，`pointer-events:none` |
| 大字幕带 | `#subtitleBar`（`index.html:722-726`） | `#subtitleText`（关键词 `<em>` 高亮）+ `#subtitleMeta` |
| 底部控制条 | `#classroomBar`（`index.html:728-743`） | `#classTimecode`；`#classPrevBtn` / `#classPlayBtn` / `#classNextBtn`；`#classMusicBtn` / `#classVoiceBtn` / `#classReplayBtn` |
| 找一找 | `#findBanner`（`index.html:800-806`） | `#findText` / `#findProgress` / `#findNext` / `#findClose`；开场后浮在舞台顶部 |
| 自动暂停提示 | `#pausePrompt`（`index.html:808-809`） | 章节边界显示「第 X 章结束 · 下一章：…」 |
| 轻提示 | `#classToast` | 与普通模式共用；用于「找到啦」「已关闭自动暂停」等 |
| 锁定层 | `#lockOverlay`（`index.html:814-822`） | 全屏模糊层；🔒 +「屏幕已锁定」+「长按屏幕 2 秒解锁」+ 2s 进度条 |
| 点认卡 | `#partCard` | 课堂模式下定位到舞台左下安全区 |
| 弹层 | 同 `#chapterDrawer` / `#teacherPanel` / `#quartetOverlay` | 课堂内均可打开 |

### 1.4 移动端（≤700px）

| 差异 | 表现 |
|---|---|
| 侧栏 | `#sidebar` 变为顶部浮动卡（`left:12px; right:12px; top:12px; height:auto`），只保留 `#narration`；`#brand`、`#hud`、`#tips`、`#chapterHint` 隐藏（`index.html:191-215`） |
| 3D 舞台 | `#app` 全宽，`bottom:112px`；顶部被旁白浮层覆盖约 164px |
| 播放器 | `--player-h:112px`，`#player .row` 换行，`#timelineWrap` 单独占一行；`#volume` 隐藏；`#playBtn` 36×36，`#replayBtn`/`#musicBtn`/`#replant` 约 28–30px 高 |
| 课堂顶栏 | 82px 两行：标题行 + 8 个按钮一行；按钮 43.9×26px、9px 字（`index.html:595-600`） |
| 课堂控制条 | 76px；`#classTimecode` 在 ≤860px 被隐藏；上一章/下一章 42px 高、播放 50px |
| 字幕带 | 82px；`#subtitleText` 16.77px，长文本可折成两行（实测 14 章均未溢出） |
| 弹层 | `.modal` padding 12px；章节网格 2 列；合影 1 列；`#partCard` 宽 84vw |
| 转盘 | 72×72px，位于舞台右上（`top: calc(82px + 8px)`） |

---

## 2. 「古老风格」逐条定位

> 视觉结论：旧 UI 是「深绿 + 金棕 + 宋体 + 点状纸纹 + 发光/描边」的古风课件语言，不是现代产品界面。以下均可在对应截图看到。

| # | 老气元素 | `index.html` 行号 / 选择器 | 出现位置与截图效果 |
|---|---|---|---|
| 2-1 | 宋体 / 衬线字体 | `54` `#brand`；`65` `#season`；`84` `#chapterTitle`；`271` `.start-card h1`；`306` `#classChapterTitle`；`336` `.wheel-face span`；`427-428` `.modal-head h2`；`463` `.chapter-name`；`481` `.quartet-item figcaption b`；`497` `#partGlyph`；`500` `#partName`；`557` `.lock-title` | 开场页「一棵树的四季」82px 细宋体、侧栏「春」58px 宋体、章节标题/弹层标题全部宋体；截图 `audit-start-desktop.png`、`audit-classroom-desktop.png`、`audit-chapter-modal-desktop.png` 中呈现明显「古风海报」字面 |
| 2-2 | 金棕配色 `--gold:#e8c47a` / 米白 `--ink:#f7f0e3` | `11-12`（变量）；`78` 金色分隔线；`81` 章节编号；`119-123` 金色播放键；`147/154/174` pill 按钮；`269` kicker；`281-283` 开始按钮；`320` 选中态；`396-399` 课堂播放键；`421` 弹层金边；`425` kicker；`462` 章节编号；`510` 找一找金边；`531` 暂停提示金边；`560` 锁定进度 | 全站唯一强调色是古铜金；开始页金色大胶囊、播放器金色圆形按钮、进度条金色已播放段、弹层金色描边，截图 `audit-start-desktop.png` / `audit-free-desktop.png` / `audit-chapter-modal-desktop.png` |
| 2-3 | 深绿渐变背景 | `41-44` 侧栏 `linear-gradient(160deg,#0e2117…,#102218)`；`108` 播放器；`242-247` 开场页；`265` 开始卡；`298` 课堂顶栏；`365` 字幕带；`381` 课堂底栏；`420` 弹层卡；`489` 点认卡 | 侧栏、播放器、课堂上下栏、三个弹层全部是同一套深绿渐变；截图 `audit-free-desktop.png` / `audit-classroom-desktop.png` / `audit-class-teacher-desktop.png` |
| 2-4 | 点状纹理（做旧纸纹） | `47-51` `#sidebar::after`：`radial-gradient(rgba(232,196,122,.08) .6px, transparent .7px)` + `background-size:5px 5px`；`249-253` `#startScreen::after` 7px 点阵 | 侧栏与开场页叠加细小金色颗粒，模拟「旧纸/古籍」；截图 `audit-start-desktop.png`、`audit-free-desktop.png` |
| 2-5 | 放射光晕 / 装饰光斑 | `244-245` 开场页双 radial-gradient；`254-259` `.start-orb` 620px 光球 + `blur(8px)`；`182` 舞台 vignette；`42` 侧栏左上 radial | 开场页卡片背后一圈金色柔光；截图 `audit-start-desktop.png` 中央明显发光；侧栏左上也有绿光，属于「舞台布景式」装饰 |
| 2-6 | 药丸按钮（`border-radius:999px`） | `147` 重播；`154` 音乐；`174` 再种一棵；`281` 开始上课；`287` 自由观看；`403` 课堂小按钮；`477` 合影标签；`509` 找一找横幅；`520` 找一找下一个；`530` 暂停提示；`542` classToast；`566` 侧栏工具 | 截图中所有按钮/提示几乎都是全圆角胶囊；`audit-start-desktop.png` 两个大胶囊、`audit-free-desktop.png` 三枚 sidebar pill、`audit-find-desktop.png` 胶囊任务条 |
| 2-7 | emoji / 字符图标混用 | HTML：`663` `⏸`、`669` `↻`、`670` `♫`、`653-655` `▣/☰/▦`、`734-736` `◀/▶`、`739` `♫`、`740` `♪`、`817` `🔒`；JS：`src/main.js:2936-2940` 动态写入 `⏸/▶`，`3101` 动态写入 `每章停 ✓` | 播放键是字符三角、锁定是彩色 emoji、章节/合影是几何字符，字体/基线/颜色各不相同；截图 `audit-classroom-desktop.png` 顶栏、`audit-lock-desktop.png` 的 🔒 |
| 2-8 | 装饰性边框 / 描边卡片 | `17` `--ui-stroke`；`264` 开始卡 1px 金边；`313` 课堂按钮 1px；`421` 弹层 1px 金边；`438` 章节卡；`467` 教师块；`474` 合影卡；`490` 点认卡 1px 金边；`510` 找一找；`531` 暂停提示；`543` classToast；`555` 锁定卡；`566` 侧栏工具 | 所有卡片都是「深底 + 1px 半透明金/白描边 + 大圆角」；截图 `audit-chapter-modal-desktop.png`、`audit-class-teacher-desktop.png` 中每层都有细描边 |
| 2-9 | 重投影 / 玻璃模糊 / 大圆角 | `263-267` 开始卡 `border-radius:26px` + `0 28px 90px`；`419-423` 弹层 `20px` + `0 30px 100px`；`488-490` 点认卡 `16px`；`108-111` 播放器 `blur(18px)`；`414` 弹层背景 `blur(7px)` | 开场卡、章节弹层、点认卡都有很重的悬浮阴影和玻璃感；截图 `audit-start-desktop.png`、`audit-part-card-desktop.png` |
| 2-10 | 超小字号 + 超宽字距 | `60` 8px/.32em；`73` 11px/.30em；`74` 10px/.24em；`81` 10px/.28em；`94` 9px/.10em；`99` 9px/.10em；`269` 11px/.38em；`291` 11px/.08em；`304` 10px/.24em；`375` 10px/.28em；`425` 10px/.30em；`462` 9px/.18em；`470/501/518` 10px；`580/587/600/604/607/619` 移动端 8-10px | 品牌英文、章节编号、提示、章节时间、课堂按钮、字幕 meta 都是「大字距的小字」；截图 `audit-free-desktop.png` 侧栏最底两行灰字、`audit-classroom-desktop.png` 底部 meta |
| 2-11 | 卡通 CSS 章节缩略图 | `444-461` `.chapter-thumb`：固定渐变天空 + 2px 树干 + 23×22 圆冠；仅按季节换底色/树冠颜色 | 14 张缩略图是同一个「棒棒糖树」模板，春夏秋冬只是换色；截图 `audit-chapter-modal-desktop.png` / `audit-chapter-modal-mobile.png` 非常明显 |
| 2-12 | 大字标题 + 文本阴影 | `270-274` 开始页 h1 82px + `text-shadow:0 6px 36px`；`82-87` 章节标题 + `text-shadow`；`369-374` 字幕 `text-shadow` | 标题像古装片名；截图 `audit-start-desktop.png` 的超大宋体标题、`audit-classroom-desktop.png` 的字幕 |
| 2-13 | 浅蓝色 loading 与全站不统一 | `184-188` `#loading` `linear-gradient(#bfe7f8,#e6f6ff)`，文字 `#4b7a5e` | 首次加载会闪过一块浅蓝渐变，与深绿/金色主题完全断裂；改动前 `#loading` 是唯一浅色块 |
| 2-14 | 装饰性英文 / 斜体感排版 | `57-61` `#brand span` 8px 全大写 .32em；`269` kicker .38em；`375` meta .28em | 侧栏顶部「THE FOUR SEASONS OF A TREE」像旧式画册书脊；截图 `audit-start-desktop.png` / `audit-free-desktop.png` |

**风格判断**：这不是单一「颜色」问题，而是字体、色彩、纹理、光晕、描边、字符图标六套旧语言叠加。第三轮若只换色不换字体/图标/纹理，仍会保留「古早课件味」；建议在方案中把「无衬线字体栈 + 单一强调色 + 去纹理/去描边 + SVG 图标」作为硬约束。

---

## 3. 交互问题 P0 / P1 / P2

> 汇总：**P0 4 条 / P1 22 条 / P2 20 条，共 46 条**。每条均给出问题、复现、期望、验收标准。

### P0 · 阻断课堂核心流程 / 无法可靠操作

**P0-1 移动端课堂顶栏 8 个按钮的触控命中区过小**
- 问题：390×844 下 8 个顶栏按钮实测均为 **43.9×26px、9px 字**（`index.html:595-600`），高度只有 26px；「锁定」和「退出」相邻且样式相同，老师现场容易点错。
- 复现：390×844 打开 `?class&t0=210&freeze`，量取 `.class-top-actions button`，或连续点击「教师提示 / 找一找 / 锁定 / 退出」。
- 期望：所有可点击区域 ≥44×44px（课堂主操作 ≥54px）；8 个工具按「章节导航 / 教学工具 / 危险操作」分组，退出单独放右侧或收纳进菜单。
- 验收：以 `getBoundingClientRect()` 断言 390 宽下每个按钮 ≥44×44px；连续 20 次触控点击无相邻误触；退出与锁定之间至少 12px 间距或二次确认。

**P0-2 弹层没有焦点管理，Tab 会在背景控件循环，且全局快捷键会穿透**
- 问题：`openModal()`（`src/main.js:3046-3051`）只加 `.show`，不设置初始焦点、不做 focus trap、不恢复焦点；实测打开章节弹层后焦点仍停在 `chapterBtnNormal`，Tab 序列为 `quartetBtnNormal → playBtn → timeline → replayBtn → musicBtn → volume`，完全没进入弹层。弹层打开时按 Space 会直接让背景故事从暂停变播放（`src/main.js:3663-3690` 无 `hasOpenModal` 守卫）。按 `Q` 还能在章节弹层上再叠一个四季合影弹层。
- 复现：自由观看 → 点击「章节」→ 连按 Tab；再按 Space；再按 Q。实测 `playing` 由 false 变 true，弹层仍显示。
- 期望：弹层获得 `role="dialog"` / `aria-modal="true"`；打开时焦点进入弹层首个可操作元素（关闭或当前章节），Tab 在弹层内循环，Esc/关闭后焦点回到触发按钮；弹层打开时全局播放/章节/合影快捷键全部挂起，只允许一个 modal。
- 验收：只用键盘完成「打开章节 → 选章 → 关闭」；`document.activeElement` 始终在 `.modal` 内；Space/←→/C/T/Q 在弹层打开时 `playing`、`storyTime`、modal 列表均不变化。

**P0-3 自动暂停提示不可点击，点击会穿透到画布**
- 问题：`#pausePrompt`（`index.html:527-535`）明确 `pointer-events:none`；实测在「第 1 章结束 · 下一章：春雨滋润」提示上点击，状态仍为 `playing:false / storyTime:16`，点击落到下方画布。提示是课堂「每章停」流程里最显眼的反馈，却不具备任何操作能力。
- 复现：`?class&t0=15.5` 等自动暂停触发，点击提示文字中心；再播放到 16 秒确认仍暂停。
- 期望：提示内提供「继续播放」按钮（或整条提示可点击），并支持 Enter/Space；点击后从下一章继续，不触发画布 pointerdown。
- 验收：点击提示中心/「继续播放」→ `playing:true` 且时间继续；提示本身 `pointer-events:auto`；事件 `target` 不落到 canvas；键盘 Enter 同样生效。

**P0-4 移动端播放器核心控件小于 44px，进度条几乎无法拖**
- 问题：390×844 下实测 `#playBtn` 36×36、`#replayBtn` 51.6×30、`#musicBtn` 40×30、`#replant` 58×28（`index.html:209-213`）；`#timeline` 元素高度仅 **6px**，有效可拖拽带约 ±8px（约 22px），远小于 44px。`#volume` 在移动端直接隐藏。
- 复现：390×844 自由观看模式，量取上述元素；用拇指在进度条上方 10px/下方 10px 处尝试拖动，无法稳定命中。
- 期望：播放/重播/音乐/再种全部 ≥44×44px；进度条用 44px 高的透明命中层 + 6–8px 视觉轨道；音量在移动端保留可展开的扬声器/音量控件。
- 验收：390×844 下每个控件 rect ≥44×44；用 `elementFromPoint` 在轨道中心 ±20px 均命中 `#timeline`；连续拖动 10 次不丢失控制。

### P1 · 明显影响体验 / 可访问性 / 课堂效率

**P1-1 进度条和音量条的键盘焦点环不可见**
- 问题：`#timeline` / `#volume` 分别设置 `outline:none`（`index.html:133`、`163`），ID 选择器优先级高于全局 `input:focus-visible`（`index.html:21-23`）；实测聚焦后 `outline-style:none`。
- 复现：Tab 到 `#timeline` / `#volume`，观察浏览器无任何焦点指示。
- 期望：`:focus-visible` 显示 2px 高对比描边 + 2px offset，或给轨道加外发光；移除 ID 级 `outline:none`。
- 验收：键盘 Tab 聚焦进度/音量条时截图可见焦点环；`getComputedStyle(el).outlineStyle` 为 `solid`，不是 `none`。

**P1-2 聚焦在按钮上按 Space 会触发全局播放/暂停，而不是激活按钮**
- 问题：全局 keydown 在 `src/main.js:3668` 拦截 Space 调 `togglePlay()`；实测焦点在 `#chapterBtnNormal` 时按 Space，故事由 playing→暂停、弹层未打开。
- 复现：自由观看 → Tab 聚焦「章节」→ 按 Space。
- 期望：焦点位于按钮/链接/输入时，Space 交给控件原生行为；只有焦点在 body/canvas 时才是全局播放/暂停；或统一用自定义键位并明确提示。
- 验收：聚焦「章节」按 Space 打开章节弹层且 `playing` 不变；聚焦播放键按 Space 只切换一次播放。

**P1-3 Esc 只关闭 `.modal`，不关闭点认卡、找一找、暂停提示，也不退出课堂**
- 问题：`src/main.js:3681-3683` 只处理 `hasOpenModal()`；实测 `#partCard` 显示时按 Esc 仍显示，`findActive:true` 时按 Esc 任务条仍显示。课堂模式（非全屏）按 Esc 没有任何返回行为。
- 复现：课堂模式点树出现 `#partCard` → Esc；再开找一找 → Esc。
- 期望：Esc 按「最上层浮层」依次关闭：点认卡 → 找一找 → 暂停提示 → 弹层 → 退出课堂（二次确认）；与浏览器全屏 Esc 不冲突。
- 验收：每层浮层按一次 Esc 关闭一层，并恢复焦点到触发控件；课堂模式 Esc 有明确确认/返回策略。

**P1-4 进度条高度 6px、音量 4px，章节刻度 hover 提示永远不可达**
- 问题：`#timeline` 高度 6px（`index.html:130-134`）、`#volume` 4px（`160-164`）；`#marks` 设 `pointer-events:none`（`143`），实测点刻度坐标命中的是 `timelineWrap` 而非刻度 `span`，`title` 提示不会弹出。
- 复现：鼠标悬停在章节刻度上；或量取 `#timeline` 高度。
- 期望：用 `#timelineWrap` 的 30px 高作为命中容器，轨道视觉 6–8px；章节刻度支持 hover/focus 显示「章号 + 标题 + 时间」；音量条同样扩大命中区。
- 验收：拖动条中心上下 15px 均可拖动；悬停/聚焦刻度出现可读 tooltip；截图记录。

**P1-5 音乐按钮文案抖动、状态语义含混**
- 问题：`bgm.js` 的 `label()`（`src/bgm.js:50-62`）根据 `on && unlocked` 改文案：初始 `♫ 开启音乐` 宽 **84.7px**，首次手势后 `♫ 音乐` 宽 **62.7px**，静音后 `♪ 已静音` 宽 **68.2px**；`#classMusicBtn` 在未解锁时显示「♫ 开启」，完全不知道开什么。按钮宽度变化会推动同一行的 `#volume` / `#replant`，移动端还可能改变换行。
- 复现：加载后量 `#musicBtn` 宽度 → 点击「自由观看」再量 → 点击音乐静音再量；课堂模式看右下角音乐按钮。
- 期望：固定宽度图标 + 固定短文案（「音乐」/「静音」），用 `aria-pressed` 表达开关；图标用 SVG，不随文案宽度变化；初始状态只显示一个确定文案。
- 验收：三种状态下 `#musicBtn` 宽度差 ≤1px；`aria-pressed` 与音频状态一致；截图无横向位移。

**P1-6 找一找的错误 toast 直接盖住任务条，遮住「找什么」**
- 问题：`#findBanner` 与 `#classToast` 都在 `top: calc(--class-top + 16~18px)` 居中；实测 banner 432.8×56@y78、toast 180.6×37@y86，重叠面积 **6682px²**；截图 `audit-find-wrong-desktop.png` 中「昆虫」被 toast 完全盖住。
- 复现：课堂模式 t=210 → 找一找 → 点击画面空白处/错误部位。
- 期望：反馈内联显示在任务条下方（或任务条内部状态区），toast 与任务条不共享同一位置；任务条始终完整可见。
- 验收：错误/正确反馈出现时 `findBanner` 与 `classToast` 的 bbox 重叠为 0；目标文字「昆虫」像素可见。

**P1-7 课堂退出无确认，直接丢失当前进度**
- 问题：`exitClassroomMode()`（`src/main.js:3259-3282`）把 `storyTime=0` 并显示开场页；实测从 t=210 退出后状态 `storyTime:0`，无确认、无恢复入口。
- 复现：课堂模式 t=210 → 点击顶栏「退出」。
- 期望：弹出「退出将回到开场页，当前进度会丢失」确认；或退出后保留进度/提供「继续上次」。
- 验收：退出路径有确认（可取消）；若选择退出，重新进入课堂能恢复原时间或给出明确提示；`storyTime` 不应静默归零。

**P1-8 课堂模式没有可见进度条/拖动 seek，只有上一章/下一章**
- 问题：`#classroomBar`（`index.html:728-743`）只有时间码、上一章/播放/下一章；课堂模式没有 `#timeline`；`#classTimecode` 在 ≤860px 被 CSS 隐藏（`index.html:585`）。老师无法拖到某一句话重讲。
- 复现：课堂模式拖拽/点击底部区域，除按钮外无时间轴；移动端无任何时间码。
- 期望：课堂底栏增加细进度条（章节刻度 + 可拖拽 + 当前时间），或至少显示「当前章进度」；移动端保留紧凑时间。
- 验收：课堂模式可拖动进度到任意秒；移动端显示 `mm:ss / mm:ss`；章节刻度可读。

**P1-9 移动端章节弹层打开时当前章节不在视口，关闭按钮过小**
- 问题：390×844、t=210 打开 `#chapterDrawer`，`scrollTop=0`；当前第 12 章卡片 rect `top:823.6 / bottom:949.6`，而卡片可视底约 742，完全不可见；`.modal-close` 实测 38×38px（`index.html:430-435`）。
- 复现：移动端课堂 t=210 → 点「章节」。
- 期望：打开时自动滚动到 `.chapter-item.current` 并居中；标题/关闭按钮 sticky；关闭按钮 ≥44×44px。
- 验收：当前章节卡片完整处于可视区；滚动后 close 仍可见可点；量取 close ≥44。

**P1-10 画布点击与拖拽冲突：4px 抖动会转动镜头但仍触发点选**
- 问题：`pointermove` 先按 dx/dy 修改 `cam.theta/phi`（`src/main.js:2684-2686`），再在 `pointerup` 用 >6px 才判定 moved（`2682`、`2699`）；实测 4px 移动后相机位置从 `[2.31,3.11,16.29]` 变为 `[2.70,3.27,16.23]`，同时 `#partCard` 仍被打开。
- 复现：`?class&t0=210&freeze&dbg`，在树干投影点按下，移动 4px 后松开。
- 期望：先累计位移，超过 8–10px 才进入「拖拽」并开始转镜头；未超过阈值则视为 tap，不改变相机；触摸端阈值可再放大。
- 验收：4px 抖动后相机位置不变且 partCard 出现；9px 拖动后相机改变且 partCard 不出现。

**P1-11 画布没有键盘/读屏替代，3D 内容不可达**
- 问题：`renderer.domElement` 仅绑定 pointerdown/move/up/cancel/wheel（`src/main.js:2672-2711`），没有 `tabindex`、role、键盘旋转/缩放/点选；画布无 `aria-label`。键盘用户无法环顾、缩放、点认。
- 复现：Tab 遍历页面，无法聚焦 `#app canvas`；无法用键盘触发点认。
- 期望：提供键盘操作：方向键旋转、+/- 缩放、Enter 打开当前选中部位；另提供可访问的「树部位列表」按钮；canvas 有名称/描述。
- 验收：仅用键盘可完成旋转、缩放、点认一个部位；读屏能读出画布用途与当前可点部位。

**P1-12 三个弹层都缺少 dialog 语义**
- 问题：`#chapterDrawer` / `#teacherPanel` / `#quartetOverlay`（`index.html:746/760/775`）均无 `role="dialog"`、`aria-modal`、`aria-labelledby`；实测 `role:null / ariaModal:null / ariaLabel:null`。读屏不会把弹层当对话框，背景仍可读。
- 复现：打开任一弹层，`getAttribute` 检查。
- 期望：补齐 `role="dialog"`、`aria-modal="true"`、`aria-labelledby` 指向标题；打开时给背景 `inert` 或 `aria-hidden`；关闭后恢复。
- 验收：三个弹层的无障碍属性齐全；axe/手动读屏不再读背景内容。

**P1-13 异步反馈没有 aria-live / status**
- 问题：`#classToast`、`#pausePrompt`、`#findBanner`、`#partCard` 都是普通 div，无 `role="status"`/`aria-live`/`aria-atomic`；视觉出现但读屏静默。
- 复现：找一找错误/正确、自动暂停、点认时用读屏观察。
- 期望：toast/暂停提示用 `role="status" aria-live="polite"`；找一找任务与结果用 `aria-live`；partCard 打开时把焦点移入或播报名称。
- 验收：三种反馈均可被读屏播报一次，且不打断当前朗读。

**P1-14 9–10px 元数据对比度不足**
- 问题：`#chapterHint` / `#tips` `rgba(...,.36/.38)`（`index.html:93-101`）、`.start-note` `.38`（`291`）、`.chapter-time` `.38`（`464`）、`#partPinyin` `.38`（`501`）、`#subtitleMeta` `.42`（`375`）；按 #102218 背景估算对比度约 **3.04 / 3.24 / 3.28 / 3.26 / 3.25 / 3.75:1**，且字号 9–10px。
- 复现：截图取 `#tips`、章节时间、点认拼音颜色；用对比度工具验证。
- 期望：正文/元数据 ≥12px、对比度 ≥4.5:1；弱化可用字重/层级而非降低透明度。
- 验收：WCAG AA（小字 4.5:1）通过；9px 字号在最终稿中不再出现。

**P1-15 没有 `prefers-reduced-motion` 分支**
- 问题：全文件无 `@media (prefers-reduced-motion)`；`seasonIn`（`index.html:69-72`）、`findShake`（`516-517`）、相机自动旋转（`src/main.js:4320-4324`）、粒子/落叶/雪持续运动。
- 复现：系统开启「减少动态效果」后打开页面，动画照旧。
- 期望：尊重系统设置：关闭入场位移/抖动/镜头漂移，保留必要的状态切换（用淡入替代位移）；提供暂停/减少粒子选项。
- 验收：模拟 `prefers-reduced-motion: reduce`，无自动镜头移动、无 shake、无长时循环动画；核心信息仍可见。

**P1-16 viewport 禁止用户缩放**
- 问题：`<meta name="viewport" content="... maximum-scale=1, user-scalable=no ...">`（`index.html:5`），违反 Web Interface Guidelines 的 anti-pattern。
- 复现：移动端双指缩放无效。
- 期望：移除 `maximum-scale=1` / `user-scalable=no`，允许 200% 缩放；用 `touch-action` 控画布手势而非禁用页面缩放。
- 验收：移动端双指缩放可用；页面布局在 200% 缩放下不横向溢出。

**P1-17 emoji/字符图标不可控，且和状态文本耦合**
- 问题：播放/重播/音乐/章节/合影/锁定分别用 `⏸ ▶ ↻ ♫ ▣ ☰ ▦ 🔒 ✓`（`index.html:663/669/670/653-655/734-736/739-740/817`；`src/main.js:2936-2940/3101`），平台字体差异大；`bgm.js:150` 还通过读取 `playBtn.textContent === '⏸'` 判断播放状态，未来换 SVG 图标会直接坏掉。
- 复现：不同系统打开，观察图标形状/颜色不一致；把播放键换成 SVG 后音乐同步失效。
- 期望：统一 SVG icon set（线性、同 stroke、`aria-hidden="true"`），状态通过 `data-playing` / `aria-pressed` / class 控制，不再依赖 textContent。
- 验收：跨平台截图一致；`bgm.js` 不读按钮文字也能正确跟随播放/暂停；没有 emoji 图标出现在主界面。

**P1-18 hover/active 状态不完整，全局 active 还被高优先级覆盖**
- 问题：`button:active { transform: translateY(1px) }`（`index.html:24`）但 `#playBtn:hover`（`124`）、`.class-top-actions button:hover`（`319`）、`#classPlayBtn:hover`（`401`）等 ID/复合选择器优先级更高，按下时仍保持 hover 的 `scale/translateY`，没有按压反馈；`#replayBtn`/`#musicBtn` 只有 hover 无 active；`#partClose`/`#findClose` 无 hover。
- 复现：鼠标按住播放键/课堂工具按钮，观察形态无变化。
- 期望：每个可点击控件都有明确的 hover / active / focus-visible / disabled 状态；active 用 `scale(.97)` 或 `translateY(0)` 并显式覆盖 hover。
- 验收：状态矩阵截图（默认/悬停/按下/焦点/禁用）全部可区分；视觉回归通过。

**P1-19 课堂顶栏 8 个按钮同权重，危险操作紧邻常用操作**
- 问题：`#classroomTop` 的 8 个按钮全部同一尺寸/底色/边框（`index.html:698-707`、`312-320`）：章节/教师提示/找一找/四季合影/每章停/增亮/锁定/退出并列；「退出」与「锁定」只隔 6px，误触代价大。
- 复现：课堂模式连续点击最右侧两枚按钮。
- 期望：按使用频率/风险分级：章节导航、教学工具（教师提示/找一找/合影）、演示设置（每章停/增亮）、危险操作（锁定/退出）分区；危险按钮用 secondary/danger 样式或放入「更多」菜单。
- 验收：视觉层级评审通过；「退出」与「锁定」间隔 ≥12px 或不在同一排；误触测试 0 次。

**P1-20 状态型按钮只有颜色变化，无 `aria-pressed`，文案变化还会撑宽按钮**
- 问题：`updateClassroomButtons()`（`src/main.js:3098-3106`）只切换 `.on` class 与部分 textContent；`#classAutoBtn` 从「每章停」变「每章停 ✓」改变宽度，`#classVoiceBtn`/`#classProjectorBtn`/`#classLockBtn` 只变金色底；没有 `aria-pressed`。
- 复现：点击每章停/朗读/增亮/锁定，观察按钮宽度和读屏状态。
- 期望：固定图标 + 状态点/开关形态；`aria-pressed` 同步；文案不随状态改宽。
- 验收：切换前后按钮宽度差 ≤1px；读屏能读出「已开启/已关闭」。

**P1-21 课堂模式没有音量控制，移动端音量条永久隐藏**
- 问题：`#volume` 只在普通 `#player` 出现，`≤700px` `display:none`（`index.html:213`）；课堂模式 `#player` 整条隐藏（`233`），只剩 `#classMusicBtn` 开关，无法调小背景音乐。
- 复现：移动端/课堂模式找音量控制。
- 期望：课堂音乐按钮改为「静音 + 音量弹出滑杆」，或至少在课堂底栏提供音量；移动端保留可展开音量。
- 验收：课堂模式可把音量从 100% 调到 10%；移动端可操作且不遮挡字幕。

**P1-22 四季合影生成期间没有任何忙碌反馈，重复点击被静默忽略**
- 问题：`captureQuartet()`（`src/main.js:3544-3546`）用 `quartetBusy` 直接 return；按钮无 loading/disabled/aria-busy；生成 4 帧期间用户不知道是否生效。
- 复现：课堂模式点「四季合影」，立即再点几次；界面无变化直到弹层出现。
- 期望：按钮进入 loading（文案「生成中…」+ spinner/aria-busy），禁用重复点击，完成/失败有反馈；若耗时 >1s 显示进度。
- 验收：点击后 100ms 内出现忙碌态；重复点击不触发第二次；完成/失败状态可区分。

### P2 · 一致性 / 打磨项

**P2-1 模式切换与弹层开合都是 display 硬切，没有过渡**
- 问题：`#startScreen.hidden{display:none}`（`index.html:248`）、`.modal{display:none}` / `.modal.show{display:flex}`（`412-416`）；开始→自由观看、弹层开/关都是瞬间跳变。
- 复现：点击自由观看/打开章节弹层，录屏观察无过渡。
- 期望：180–260ms 的 opacity/transform 过渡（遮罩淡入、卡片 0.98→1），关闭反向；尊重 reduced-motion。
- 验收：录屏可见连续过渡；关闭后无残留可点区域。

**P2-2 章节正文与字幕瞬切，只有标题有动画**
- 问题：`updateChapterUI()`（`src/main.js:2911-2927`）给 `#chapterTitle` 重置 `seasonIn .5s`，但 `#chapterText.textContent`（2919）与 `#subtitleText.innerHTML`（2925）直接替换，`#subtitleMeta` 也瞬切。
- 复现：拖进度条跨章，观察正文/字幕闪变。
- 期望：正文与字幕 150–220ms 淡入/上移 4px；关键词高亮随新文本出现，不同步错位。
- 验收：切章录屏无闪白/跳行；标题、正文、字幕、meta 时间差 <80ms。

**P2-3 章节弹层每次打开都重建 DOM，滚动位置/焦点丢失**
- 问题：`buildChapterGrid()` 用 `innerHTML = CHAPTERS.map(...)`（`src/main.js:3063-3071`）每次打开重建；移动端当前章在第 12 章时 `scrollTop` 从 0 开始（见 P1-9）。
- 复现：滚动到第 14 章 → 关闭 → 再打开，回到顶部。
- 期望：只渲染一次，打开时只更新 `.current` 并滚动到当前章；保持上次滚动位置。
- 验收：二次打开仍在当前章；DOM 节点复用（可观察 scrollTop/activeElement）。

**P2-4 上一章/下一章在首尾没有禁用态**
- 问题：`prevChapter()` 在第一章仍调用 `goToChapter(0)`；`nextChapter()` 在最后一章直接 `setStoryTime(STORY_END)`（`src/main.js:3088-3097`），按钮仍可点、无禁用样式/提示。
- 复现：第一章点「上一章」、第十四章点「下一章」。
- 期望：首/尾章按钮 `disabled` 或显示「已到开头/结尾」；不要静默跳到 260s。
- 验收：首尾按钮状态正确；点击无副作用；`aria-disabled` 同步。

**P2-5 季节转盘看起来可点，实际不可交互**
- 问题：`#seasonWheel` 有 96px 大、四季色块和指针，但 `pointer-events:none`（`index.html:325`），`aria-hidden="true"`；用户会尝试点击季节换章。
- 复现：课堂模式点击转盘任一季。
- 期望：要么做成可点击「跳转到该季章节」的导航（hover/focus），要么弱化为纯图表并去掉指针/按钮感。
- 验收：点击转盘无「以为可点」的误解；若实现跳转则每个季区有 ≥44px 命中。

**P2-6 点认卡固定在左下角，不跟随点击位置，关闭按钮只有 22×23px**
- 问题：`showPartCard(part, clientX, clientY)`（`src/main.js:3435-3443`）完全不使用坐标；CSS 固定 `left: calc(var(--side)+18px); bottom: calc(var(--player-h)+14px)`（`index.html:485-492`）；`#partClose` 实测 22.5×23px。
- 复现：点击树冠最上方 vs 根部，卡片总出现在同一位置。
- 期望：卡片锚定点击点（自动翻转避免出界），或明确做成固定信息栏并给出连接线；关闭按钮 ≥44px，支持 Esc/点外关闭。
- 验收：点击不同部位卡片出现在对应侧；卡片不遮住被点部位；close ≥44×44。

**P2-7 点认卡的单字图标取名称最后一个字，语义错误**
- 问题：`partGlyphEl.textContent = info.name.slice(-1)`（`src/main.js:3438`）；实测「树干」显示「干」、「种子」显示「子」、「小鸟」显示「鸟」。
- 复现：点击树干/种子。
- 期望：显示完整名称或按部位使用图标（根/干/枝/叶/花/果/鸟/虫）。
- 验收：每个部位 glyph 与名称一致，读屏可读完整名称。

**P2-8 四季合影图片按 16:9 裁切，原始 2.26:1 画面左右各裁约 10.7%**
- 问题：`snapshotCanvas()` 按画布比例生成 720×318（`src/main.js:3534-3543`），`.quartet-item img` 用 `aspect-ratio:16/9; object-fit:cover`（`index.html:475`）；实测显示框 525×295、原图 720×318，裁掉左右约 10.7%。
- 复现：生成合影，对比原始 canvas 与 `img` 的可见范围（树冠两侧枝条是否被裁）。
- 期望：按图片自身比例展示（`object-fit:contain`/动态 ratio），或拍摄时按 16:9 重新构图；不裁掉树冠。
- 验收：合影四张完整包含整棵树与字幕安全边；图片比例与展示框一致。

**P2-9 课堂结束自动弹出四季合影，打断老师收尾**
- 问题：`animate()` 在 `storyTime >= STORY_END` 且课堂模式时 `setTimeout(captureQuartet, 900)`（`src/main.js:3766-3772`），自动打开 modal，用户没有请求。
- 复现：课堂模式播放到 04:20 结束。
- 期望：结束时给非阻塞提示「可查看四季合影」，由老师点击再打开；自动生成可后台进行。
- 验收：结束时不自动弹 modal；提示可关闭；点击才打开。

**P2-10 章节缩略图是模板化 CSS 树，不是真实画面**
- 问题：`#chapterGrid` 的缩略图由 `.chapter-thumb` 固定 CSS 绘制（`index.html:444-461`），与 3D 实际画面无关；14 张只有底色/树冠色差。
- 复现：打开章节弹层对比第 1 章与第 7 章缩略图。
- 期望：用真实 `?t0=章节中点` 截图（或至少树形/季节有差异）；若保留示意，需设计成抽象图形而非伪截图。
- 验收：缩略图与对应章节画面一致；无重复「棒棒糖树」。

**P2-11 加载层浅蓝渐变与主题断裂**
- 问题：`#loading`（`index.html:184-188`）`linear-gradient(#bfe7f8,#e6f6ff)`，文字 `#4b7a5e`；与深绿/金色或任何统一主题都不一致。
- 复现：清缓存打开，观察首屏闪蓝。
- 期望：加载与最终背景同色系；可加品牌 logo/进度暗示；加载结束淡出。
- 验收：首屏无浅色闪屏；loading 与 startScreen 色差 ΔE 可忽略。

**P2-12 `color-scheme: light` 与深色 UI 矛盾**
- 问题：`:root { color-scheme: light; }`（`index.html:10`）；弹层 `overflow:auto` 会出现浅色滚动条、表单控件走浅色默认。
- 复现：Windows/Chrome 打开章节弹层滚动，观察滚动条颜色。
- 期望：深色主题用 `color-scheme: dark`（或按最终主题明确）；统一滚动条样式。
- 验收：滚动条/输入控件与主题一致；无白底滚动条。

**P2-13 全局 `user-select:none` 让老师无法选中/复制旁白**
- 问题：`html,body{-webkit-user-select:none;user-select:none}`（`index.html:29`）禁用全页选择；旁白文本无法复制。
- 复现：尝试拖选 `#chapterText`。
- 期望：仅对 3D 画布/按钮禁用选择；文本区域允许选择/复制。
- 验收：`#chapterText`、`.teacher-block p` 可选择复制；拖动按钮不会选中文字。

**P2-14 8–11px 小字在桌面/移动端大量使用**
- 问题：`#brand span` 8px、`#chapterHint/#tips` 9px、`#year/#chapterIndex/#classSeason/#chapter-num/.chapter-time` 10px、多个按钮 10–11px（`index.html:60/73/74/81/94/99/127/147/154/174/203/210/212/304/310/375/462/464/501/518/568`）。
- 复现：1280 屏幕/投影后排阅读。
- 期望：正文 ≥14px、辅助信息 ≥12px、按钮 ≥13px；可用字重/颜色区分层级。
- 验收：关键信息在 3 米投影距离可读；8–10px 仅保留给极其次要的装饰。

**P2-15 `#tips` 在 1280px 桌面换行成两行，末行只剩「乐」**
- 问题：`#tips` 文本「拖动环顾 · 滚轮缩放 · 空格暂停 · ←→ 5 秒 · F 全屏 · M 音乐」+ `9px/.10em`（`index.html:97-101`、`658`），侧栏 345px 下换成两行，截图 `audit-free-desktop.png` 底部「乐」单独一行。
- 复现：1280×800 自由观看模式看侧栏底部。
- 期望：拆成两行明确的快捷键表，或移动端/窄屏隐藏次要提示。
- 验收：无单字孤行；提示行数 ≤2 且对齐。

**P2-16 `syncPlayer()` 每帧写 DOM，暂停时也持续写**
- 问题：`animate()` 每帧调用 `syncPlayer()`（`src/main.js:3782`）；`syncPlayer()` 每帧设置 `timelineEl.value`、`--progress`、`timecodeEl.textContent`、`playBtn.textContent`、`aria-label`、class 文本等（`2931-2943`），即使数值没变。移动端/低配课堂电脑会造成无谓的样式计算与重排。
- 复现：Performance 面板录制暂停状态 5s，观察 DOM 变更/Recalc Style。
- 期望：先比较值再写 DOM；时间码按秒更新，进度按帧只改 CSS 变量；播放键只在状态变化时更新。
- 验收：暂停 5s 内 DOM 写入接近 0；播放时样式重算 <2ms/帧。

**P2-17 多层 `backdrop-filter` + 半透明深绿叠在 WebGL 上，移动端开销大**
- 问题：`#player`（`index.html:111`）、`#classroomTop`（`300`）、`#classroomBar`（`383`）、`.modal`（`414`）均 `backdrop-filter: blur(7–18px)`，移动端还会与 canvas 每帧渲染叠加。
- 复现：中低端 Android/旧 iPad 上滚动章节/开弹层，观察掉帧。
- 期望：保留 1 层核心模糊，其余用不透明底色/降低 blur 半径；提供无 blur 回退。
- 验收：移动端 30fps 下限；GPU 时间不高于基线；视觉层次仍成立。

**P2-18 开场卡在矮屏/横屏没有滚动兜底**
- 问题：`#startScreen{overflow:hidden}`（`index.html:241`），`.start-card` 固定 padding + 760/94vw 宽度、h1 `clamp(44px,6.2vw,82px)`（`260-274`）；在 844×390 横屏或 320×480 可能裁切内容。
- 复现：390×700/横屏 844×390 打开开场页。
- 期望：`overflow:auto`、`max-height:calc(100vh - 48px)`、内部滚动；按钮不因高度不足被裁。
- 验收：320×480 / 844×390 下开场页所有按钮可见可点，无横向滚动。

**P2-19 课堂标题与右侧季节重复表达**
- 问题：`#classChapterTitle` 含「第二年 · 夏」时，`#classSeason` 又显示「夏 · 第 2 年」（`index.html:694-704`），同一信息重复；移动端 `#classSeason` 隐藏但标题保留。
- 复现：课堂模式 t=210 看顶栏。
- 期望：标题只放章节名，季节/年份统一放 `#classSeason`；或合并为一个 meta 行。
- 验收：顶栏无重复文本；信息层级单一。

**P2-20 顶部中央三个提示层共用同一位置，存在互相遮挡风险**
- 问题：`#findBanner`（`top: calc(--class-top + 16px)`，`z:10`）、`#pausePrompt`（`top: calc(--class-top + 18px)`，`z:10`）、`#classToast`（`top: calc(--class-top + 18px)`，`z:30`）都居中同一行（`index.html:506-546`）；实测 `#classToast` 会盖住 `#findBanner`（P1-6），同理暂停提示/找一找同时出现时也会重叠。
- 复现：找一找时触发自动暂停/错误反馈。
- 期望：统一通知栈：任务条固定一行、toast 在任务条下方或右侧、暂停提示进入独立条带；z-index 有明确顺序且不遮挡任务。
- 验收：任意两个提示同时出现时 bbox 重叠为 0；玩家仍可读目标文字。

---

## 4. 动效缺口

> 目标：现代、简洁、优雅不等于「无动效」；本项目的动效应服务于「看懂生长/季节/章节关系」，而不是装饰。以下缺口按体验路径列出。

| 场景 | 现状（代码/实测） | 缺口与建议 |
|---|---|---|
| 开场入场 | `#startScreen` 直接 `display:flex`；`.start-orb` 静态光晕；标题无入场序列（`index.html:238-291`） | 建议 240–320ms 整体淡入 + 卡片 12px 上移；标题/副标题/按钮 40ms stagger；光晕只做极缓慢呼吸，不做炫技 |
| 开场 → 自由观看 / 课堂 | 点击后 `#startScreen` `display:none` 硬切；3D 舞台与侧栏同时出现（`index.html:248`、`src/main.js:3603-3609`） | 建议开场遮罩 220ms 淡出、舞台 300ms 淡入；课堂模式顶栏/字幕/底栏依次 40ms 进入 |
| 章节切换 | `#chapterTitle` 有 `seasonIn .5s`；`#chapterText` / `#subtitleText` 瞬切（`src/main.js:2920-2926`） | 统一为标题/正文/字幕 200ms 同步 crossfade（Y 轴 4px）；避免标题先动、字幕后跳 |
| 字幕高亮 | `#subtitleText em` 只有静态金色（`index.html:374`） | 关键词可做 120ms 颜色/字重过渡；不要逐字打字机（投影阅读负担） |
| 弹层开合 | `display:none` ↔ `flex` 硬切（`index.html:412-416`） | 遮罩 180ms fade；卡片 180–220ms scale .98→1 + opacity；关闭反向；点击外部/ESC 同一动效 |
| 按钮 hover / active | 大多数按钮 0.15–0.18s background/transform；但 `button:active` 被 hover 优先级覆盖（P1-18）；`#partClose/#findClose` 无 hover | 明确 120ms `background/transform/opacity` 过渡；按下 `scale(.97)`；禁用态 0.6 透明度 |
| 进度条拖拽 | 无惯性；`pointerdown` 直接 seek；拖动时 thumb 无 grabbing 状态；`setStoryTime` 立即暂停 | 时间轴本身不应有惯性；轨道 hover 可加 thumb 放大 1.2×；拖动时显示时间气泡；松手不自动恢复播放需给明确状态提示 |
| 镜头拖拽 | `cam.theta -= dx*.006` 直接跟手，无阻尼/惯性；4px 即转（P1-10） | 可加 60–100ms 阻尼回弹/惯性，但先修 deadzone；减少「轻轻一点就晃」 |
| 季节转盘 | 指针每帧按 `seasonProgress` 线性旋转（`src/main.js:4371-4373`），无章节切换弹性；转盘本身 `pointer-events:none` | 换季时 300ms spring/overshoot 到目标角；新增季节时给中心标签 150ms 淡入；若做可点击，季区 hover 放大 |
| 提示 toast | 仅 `opacity/transform .22s`（`index.html:539-546`），无退出动画；位置固定易遮挡 | 进入 180ms / 停留 2.4s / 退出 150ms；队列化，最多同时 1 条；不覆盖任务条（P1-6/P2-20） |
| 找一找反馈 | 错误 `findShake .35s`（`index.html:516-517`），正确仅 toast + partCard，无成功节奏 | 错误保留 shake；正确加 300ms 目标点 pulse/对勾；反馈完成后 600ms 自动收起任务条（或等用户点下一个） |
| 锁定/解锁 | `#lockOverlay` display 硬切；进度条 `transition: width 2s linear`（`index.html:549-561`） | 叠加层 200ms 淡入/模糊；长按进度用 ease-out（2s）；解锁成功 200ms 淡出 + 轻微 scale |
| 课堂进入/退出 | `enterClassroomMode` 直接切布局、`refreshViewport()`；退出回开场页（`src/main.js:3228-3282`） | 布局切换 240ms 交叉淡入；退出前确认（P1-7）；不要一帧跳回开场 |
| 加载层 | `#loading` 直接 `display:none`（`src/main.js:4412`） | 建议 loading 淡出 200ms；与最终主题同色（P2-11） |
| 减少动态效果 | 无 `prefers-reduced-motion`（P1-15） | 所有 transform/位移/镜头漂移/粒子在 reduce 下关闭或降级为 opacity 变化 |

---

## 5. 本轮不做什么（避免范围爆炸）

1. **不改 3D 场景本身**：树/根/土壤/天空/季节配色/镜头曲线/粒子全部保持现状，除非为了 UI 遮挡或构图做最小参数调整。
2. **不改 14 章文案、章节时序、旁白与 BGM 音频文件**（`CHAPTERS` / `CHAPTER_PARTS` / `TEACHER_TIPS` / mp3 与授权）。
3. **不重写播放内核**：`storyTime`、自动暂停、朗读、BGM 同步逻辑保留；只解耦 UI 对 textContent 的依赖（P1-17）。
4. **不引入框架/构建链**：保持单页原生 JS + CSS；不迁移 React/Vue，不新增 npm 依赖。
5. **不做账号、后端、云端存储、多语言、深浅色主题切换**；只做一套现代视觉与必要响应式。
6. **不重做「找一找」玩法与「四季合影」内容**：保留题目队列、部位识别、截图生成；只改呈现、反馈与无障碍。
7. **不做复杂手势**：不新增双击缩放、三指手势、路径手势；先保证单指拖动/双指缩放和按钮操作可靠。
8. **不重做课堂模式业务流程**：自动暂停、每章停、锁定、投影增亮、朗读逻辑保留；只补状态呈现、确认与焦点。
9. **不做 3D 资源替换/重制贴图**：视觉现代化在 UI 层完成，不改 canvas 内部渲染语言。
10. **不新增页面/路由**：仍为 `index.html` 单页，`?class` / `?t0` / `?freeze` 调试参数保持。

---

## 6. 附：截图清单

> 全部位于 `shots/round3/`；桌面 1280×800，移动 390×844。`audit-*` 为本次审计截图，均基于 HEAD 冻结副本。

| 文件 | 尺寸 | 页面 / 状态 |
|---|---|---|
| `audit-start-desktop.png` | 1280×800 | 开场页（深绿金棕旧版） |
| `audit-free-desktop.png` | 1280×800 | 自由观看：侧栏 + 3D + 播放器 |
| `audit-chapter-modal-desktop.png` | 1280×800 | 章节弹层（7 列 14 卡） |
| `audit-teacher-desktop.png` | 1280×800 | 教师提示弹层（T） |
| `audit-classroom-desktop.png` | 1280×800 | 课堂模式 t=210：顶栏 + 转盘 + 字幕 + 底栏 |
| `audit-class-teacher-desktop.png` | 1280×800 | 课堂模式教师提示 |
| `audit-find-desktop.png` | 1280×800 | 找一找任务条（昆虫） |
| `audit-find-wrong-desktop.png` | 1280×800 | 找一找错误反馈：toast 覆盖任务条 |
| `audit-part-card-desktop.png` | 1280×800 | 点认卡（树干） |
| `audit-quartet-desktop.png` | 1280×800 | 四季合影弹层 |
| `audit-lock-desktop.png` | 1280×800 | 屏幕锁定层 |
| `audit-pause-prompt-desktop.png` | 1280×800 | 自动暂停提示（第 1 章结束） |
| `audit-start-mobile.png` | 390×844 | 移动端开场页 |
| `audit-free-mobile.png` | 390×844 | 移动端自由观看（顶部旁白卡 + 底部播放器） |
| `audit-chapter-modal-mobile.png` | 390×844 | 移动端章节弹层（2 列，当前章不在视口） |
| `audit-classroom-mobile.png` | 390×844 | 移动端课堂模式（8 个 26px 高按钮） |
| `audit-class-teacher-mobile.png` | 390×844 | 移动端教师提示 |
| `audit-find-mobile.png` | 390×844 | 移动端找一找（任务条两行） |
| `audit-quartet-mobile.png` | 390×844 | 移动端四季合影（1 列 4 图，长滚动） |
| `audit-lock-mobile.png` | 390×844 | 移动端锁定层 |
| `audit-pause-prompt-mobile.png` | 390×844 | 移动端自动暂停提示 |
| `audit-subtitle-overflow-mobile.png` | 390×844 | 移动端长字幕章节（第 3 章）检查 |

---

## 7. 建议第一批修复（给 Lead 的 5 个抓手）

1. **先定 UI 基础件**：字体（无衬线统一）、色彩（纸色/墨色/单 accent）、图标（SVG 集）、间距/圆角/阴影 token；否则逐控件修会反复返工。
2. **先修 P0-2 弹层焦点/快捷键与 P0-3 自动暂停提示**：课堂交互闭环最关键，且改 `openModal` / `showPausePrompt` 两处即可覆盖大部分。
3. **重做移动端课堂顶栏与播放器命中区**（P0-1/P0-4）：390×844 是老师最可能的现场设备。
4. **音乐/播放状态与文字解耦**（P1-5/P1-17）：先把 `bgm.js` 的 `textContent` 判断改为 data 状态，再换任何图标才安全。
5. **最后统一动效与状态**：切章/字幕/弹层/按钮共用一套时长与 easing，一次性把「老式硬切」消掉。
