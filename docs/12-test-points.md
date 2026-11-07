# 12 · 测试点总表（QA 测试点目录）

> 本文与 `qa/data/catalog.json` 同步维护、内容逐条一致；修改测试点请先改 catalog，再同步本文。
> 唯一契约见 [`../qa/CONTRACT.md`](../qa/CONTRACT.md)；可视化看板入口见 `qa/index.html`。
> 最后更新：2026-11-08 · 对应版本：v4.0.0 · 共 108 条测试点

## 1. 总览

- 总条数：**108**
- 自动化：**100** 条（92.6%） · 人工：**8** 条
- 优先级：**P0 22** 条（20.4%） · **P1 61** 条（56.5%） · **P2 25** 条（23.1%）

### 模块统计

| 模块 | 名称 | 总数 | 自动 | 人工 | P0 | P1 | P2 |
|---|---|---:|---:|---:|---:|---:|---:|
| boot | 启动与资源 | 10 | 10 | 0 | 3 | 4 | 3 |
| scene | 3D 场景与确定性 | 12 | 12 | 0 | 4 | 6 | 2 |
| story | 叙事与章节 | 10 | 9 | 1 | 3 | 4 | 3 |
| player | 播放器与音频 | 12 | 11 | 1 | 2 | 8 | 2 |
| classroom | 课堂模式 | 14 | 12 | 2 | 4 | 6 | 4 |
| explore | 探索与点认 | 9 | 8 | 1 | 1 | 5 | 3 |
| responsive | 响应式与视觉 | 10 | 9 | 1 | 1 | 8 | 1 |
| a11y | 无障碍 | 14 | 13 | 1 | 3 | 10 | 1 |
| perf | 性能与稳定性 | 9 | 8 | 1 | 0 | 6 | 3 |
| release | 发布与文档 | 8 | 8 | 0 | 1 | 4 | 3 |
| **合计** | — | **108** | **100** | **8** | **22** | **61** | **25** |

### 模块说明

- **boot · 启动与资源（BOOTSTRAP）**：打开页面到首屏可见的链路：HTML/JS/音频/字体资源、加载层、开场页、错误处理。
- **scene · 3D 场景与确定性（SCENE）**：画布与 WebGL、四季环境、雨雪、根系水层、鸟虫树荫，以及定帧像素确定性与静态重绘。
- **story · 叙事与章节（STORY）**：14 章章节数据、文案、章节切换、章节栏与弹层、季节轮盘和结尾回春。
- **player · 播放器与音频（PLAYER）**：播放/暂停、时间码、进度拖动、重播与再种、BGM 开关音量记忆、快捷键与定帧静音。
- **classroom · 课堂模式（CLASSROOM）**：?class 课堂入口、顶栏 8 工具、字幕、课堂进度、每章暂停、教师提示、退出保留、投影/锁定/朗读、四季合影与结束提示。
- **explore · 探索与点认（EXPLORE）**：画布拖动死区与惯性、双击复位、滚轮/双指缩放、键盘环顾、点认卡定位、找一找队列与错误提示、移动端抽屉。
- **responsive · 响应式与视觉（RESPONSIVE）**：1440/1280/1024/768/390 五档断点、无横向溢出、播放器与课堂顶栏布局、深色 token、对比度、无衬线无 emoji、SVG sprite。
- **a11y · 无障碍（ACCESSIBILITY）**：dialog 语义、inert、焦点陷阱与恢复、开场页模态、aria-pressed、slider 语义、live region、焦点可见、reduced-motion、44px 触控、viewport 缩放、canvas 标签。
- **perf · 性能与稳定性（PERFORMANCE）**：draw calls 450–500、triangles ≤650k、静态帧不重绘、连续再种无泄漏、长播无报错、加载耗时与 FPS 感知。
- **release · 发布与文档（RELEASE）**：GitHub Pages 200、md5 一致、docs 头哈希、标签回退点、README 入口、部署排除大文件、BGM 授权与 QA 入口可用。

## 2. 测试点清单

### boot · 启动与资源（10 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| BOOT-01 | 首页冷启动无报错 | P0 | 自动 | #loading 隐藏并 display:none；console.error=0；pageerror=0。 |
| BOOT-02 | 关键资源全部 200 | P1 | 自动 | 5 个关键资源响应 200 或 file:// 读取成功；无失败请求。 |
| BOOT-03 | 加载层可见并退场 | P2 | 自动 | #loading 初始可见且背景 #0C100E；完成后 .hidden 并在 620ms 后 display:none；role=status。 |
| BOOT-04 | 开场页可见两按钮 | P0 | 自动 | #startScreen 非 hidden；role=dialog aria-modal=true aria-labelledby=startTitle；两按钮可见可点。 |
| BOOT-05 | 开始上课进入课堂 | P0 | 自动 | classroomMode=true；body.classroom-mode；#classroomTop 可见；#startScreen.hidden。 |
| BOOT-06 | 自由观看开始播放 | P1 | 自动 | #startScreen.hidden；classroomMode=false；playing=true；storyTime 增长；#player 可见。 |
| BOOT-07 | 离线 file:// 可直接运行 | P1 | 自动 | file:// 下 canvas 有尺寸、无网络请求、无 console error、播放器时间码可见。 |
| BOOT-08 | 构建资源带缓存版本 | P2 | 自动 | 两个 script src 含 ?v= 参数且版本一致；升级时应递增。 |
| BOOT-09 | meta 与深色主题一致 | P2 | 自动 | title=一棵树的四季；viewport=width=device-width, initial-scale=1, viewport-fit=cover；theme-color #0C100E；color-scheme dark。 |
| BOOT-10 | 无外部网络依赖 | P1 | 自动 | 网络请求仅本地资源；无第三方域名；字体为系统栈。 |

### scene · 3D 场景与确定性（12 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| SCENE-01 | canvas 与 WebGL 正常 | P0 | 自动 | canvas 存在；WebGL 上下文非空；canvas 宽高与 #app clientWidth/clientHeight 一致。 |
| SCENE-02 | 14 章关键帧季节正确 | P0 | 自动 | 14 章 data-season 与章节表一致；标题正确；avgLum>8 且非黑像素>3%。 |
| SCENE-03 | 春雨与章节窗口一致 | P1 | 自动 | t=20 雨粒子可见；t=30 仍在下；t=120/210 无雨。 |
| SCENE-04 | 冬章雪与枝头积雪 | P1 | 自动 | t=164/170 雪与雪帽可见；t=190 两者不可见。 |
| SCENE-05 | 根系生长与深扎 | P0 | 自动 | t=44 主根与多条侧根可见；t=250 根系延伸至 y≈-10 水层附近。 |
| SCENE-06 | 地下水层显现 | P1 | 自动 | t=250 水面与根尖光点可见且透明度>0；t=120 水层不可见。 |
| SCENE-07 | 鸟虫与树荫可见 | P1 | 自动 | t=210 五类生物可见、树荫透明度>0；t=170 无鸟。 |
| SCENE-08 | 定帧 t0=128 像素确定 | P0 | 自动 | 两次截图逐像素差异为空（bbox=None）；树形/粒子/云位置一致。 |
| SCENE-09 | 定帧 t0=250 像素确定 | P1 | 自动 | ?t0=250&freeze 两次截图逐像素一致。 |
| SCENE-10 | 定帧静态重绘机制 | P1 | 自动 | freeze 后 renderer.info.render.frame 不增长；seekForTest 或相机变化后帧计数小幅增加。 |
| SCENE-11 | resize 与 DPR 适配 | P2 | 自动 | resize 后 canvas 尺寸等于 #app；camera.aspect 同步；pixelRatio 上限 1.75。 |
| SCENE-12 | 树种子固定与再种 | P2 | 自动 | ?t0=128&freeze 两次树形一致；点击 #replant 后新树生成、时间归零、无报错。 |

### story · 叙事与章节（10 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| STORY-01 | 14 章数据边界 | P0 | 自动 | length=14；首章 start=0；末章 end=260；每章 end=下一章 start。 |
| STORY-02 | 总时长 259.9 秒 | P0 | 自动 | STORY_END≈259.9；#timecode 显示 04:20；#timeline max=259.9。 |
| STORY-03 | 章节标题与文案齐全 | P1 | 人工 | 14 个 title 与 text 非空；标题顺序与文档一致；关键词可高亮。 |
| STORY-04 | 章节切换 UI 同步 | P1 | 自动 | #chapterIndex 第 12 章/共 14 章；#chapterTitle 第二年 · 夏；#subtitleText 同源；章节栏当前段高亮。 |
| STORY-05 | 章节栏 14 段刻线 | P2 | 自动 | span 数量=14；t=0 第 1 段 current；t=210 前 11 段 done、第 12 段 current。 |
| STORY-06 | 章节弹层 14 卡 | P1 | 自动 | .chapter-item 数量=14；.current 存在；当前卡完整处于可视区。 |
| STORY-07 | 时间轴章节刻度 | P2 | 自动 | mark 数量=13；left 百分比与 start/STORY_END 相符；title 为章名。 |
| STORY-08 | 季节轮盘与年份 | P1 | 自动 | 4 个 .wheel-label；#wheelNeedle 角度≈seasonProgress×360；#wheelYear 第 1/2 年正确。 |
| STORY-09 | 结尾回春与新芽 | P0 | 自动 | data-season=春；#sub 万物发芽；新芽可见；t=259.9 自动停止。 |
| STORY-10 | 旁白与字幕同源 | P2 | 自动 | #chapterText 与 #subtitleText 文本一致；字幕含 em 关键词；meta 显示第 N 章。 |

### player · 播放器与音频（12 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| PLAY-01 | 播放与暂停 | P0 | 自动 | 点击后 data-playing 1→0→1；storyTime 播放时增长、暂停时不变；图标切换。 |
| PLAY-02 | 时间码显示与更新 | P1 | 自动 | 初始 00:00 / 04:20；跳到 100s 显示 01:40 / 04:20；aria-valuetext 同步。 |
| PLAY-03 | 进度条拖动跳转 | P0 | 自动 | 设 value=200 后 storyTime≈200；时间码 03:20；章节变为第二年 · 夏。 |
| PLAY-04 | 拖动恢复播放状态 | P1 | 自动 | 播放中拖动→松手后 playing=true；暂停中拖动→松手仍 false。 |
| PLAY-05 | 重播回到开头 | P1 | 自动 | storyTime=0；playing=true；#chapterTitle 种子入土。 |
| PLAY-06 | 再种一棵 | P1 | 自动 | 树对象重建；storyTime=0；playing=true；无 console error。 |
| PLAY-07 | 背景音乐开关 | P1 | 自动 | 点击后 aria-pressed true↔false；audio.paused 同步；按钮宽度不变。 |
| PLAY-08 | 音量与偏好记忆 | P1 | 自动 | 拖动 #volume 到 40 → audio.volume≈0.4、#classVolume=40；localStorage 存 {on,volume}；刷新后一致。 |
| PLAY-09 | freeze 静音与播放器隐藏 | P1 | 自动 | #player display:none；#narration display:none；audio.paused=true 或 muted。 |
| PLAY-10 | 播放快捷键 | P1 | 自动 | 空格切换 playing；←→ 改变 storyTime±5；Home=0；End=259.9；PageUp/PageDown 章节切换。 |
| PLAY-11 | 播放状态语义 | P2 | 自动 | data-playing=1 时 aria-label=暂停；=0 时 aria-label=播放；音频状态一致。 |
| PLAY-12 | 进度条时间气泡 | P2 | 人工 | 指针在 50% 处显示约 02:10 · 对应章名；离开后隐藏。 |

### classroom · 课堂模式（14 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| CLASS-01 | ?class 直接进入课堂 | P0 | 自动 | body.classroom-mode；#startScreen.hidden；#classroomTop/#subtitleBar/#classroomBar 可见；固定树种子。 |
| CLASS-02 | 顶栏 8 个工具按钮 | P1 | 自动 | 8 个按钮 id 齐全且可见；role=toolbar；aria-label=课堂工具。 |
| CLASS-03 | 课堂大字幕 | P1 | 自动 | #subtitleText 文本与章节一致；含 em 关键词；aria-live=polite aria-atomic=true；meta 第 N 章。 |
| CLASS-04 | 课堂进度条 | P0 | 自动 | role=slider；aria-valuemin=0 max=260 now 正确；点击 50% → storyTime≈130；←→ ±5s。 |
| CLASS-05 | 首尾章按钮禁用 | P2 | 自动 | t=0 时 #classPrevBtn.disabled=true；t=250 时 #classNextBtn.disabled=true。 |
| CLASS-06 | 每章结束自动暂停 | P0 | 自动 | storyTime 停在 16.0；#pausePrompt 显示第 1 章结束与下一章；点 #pauseContinue 后 playing=true。 |
| CLASS-07 | 教师提示弹层 | P1 | 人工 | #teacherTitle 第 N 章标题；#teacherBody 含两个内容块；关闭后回到原焦点。 |
| CLASS-08 | 退出确认与保留进度 | P0 | 自动 | #exitConfirm.show；取消仍在课堂；确认后 storyTime≈100、#freeViewBtn=继续观看。 |
| CLASS-09 | 投影增亮 | P1 | 自动 | body.classList 含 projector；canvas 亮度提升；#classProjectorBtn aria-pressed 同步。 |
| CLASS-10 | 屏幕锁定与长按解锁 | P2 | 自动 | #lockOverlay.show；长按 2s 后消失；aria-pressed true→false。 |
| CLASS-11 | 故事姐姐朗读 | P1 | 人工 | #classVoiceBtn aria-pressed 切换；speechSynthesis 触发；朗读期间 BGM 音量×0.18。 |
| CLASS-12 | 四季合影忙碌态 | P1 | 自动 | 点击后 #classQuartetBtn.disabled + aria-busy=true + .busy；完成后 4 个 img，object-fit:contain。 |
| CLASS-13 | 结束提示不弹合影 | P2 | 自动 | storyTime=259.9；playing=false；#classToast 文本含「四季合影」；无 .modal.show。 |
| CLASS-14 | 上一章与下一章 | P2 | 自动 | 点击下一章从第 1 章到第 2 章 start=16；上一章回到 0；按钮状态同步。 |

### explore · 探索与点认（9 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| EXPLORE-01 | 拖拽死区与惯性 | P1 | 自动 | 4px 移动相机不变且可点认；20px 拖动相机变化、partCard 不出现；松手后速度衰减。 |
| EXPLORE-02 | 双击复位视角 | P1 | 自动 | 相机三参数复位；#partCard 隐藏；toast「视角已复位」。 |
| EXPLORE-03 | 滚轮平滑缩放 | P1 | 自动 | 滚轮上滚 radius 减小、下滚增大；边界不越界。 |
| EXPLORE-04 | 双指缩放 | P2 | 人工 | 双指距离拉大 radius 减小；手势结束后视角保持。 |
| EXPLORE-05 | 键盘环顾与点认 | P1 | 自动 | 方向键改变 theta/phi；+/- 改变 radius；Enter 打开 #partCard；事件不冒泡到全局快进。 |
| EXPLORE-06 | 点认卡定位与内容 | P1 | 自动 | 桌面卡片在点击点右下 gap=14 且不出界；移动端固定底部；glyph 为专用字。 |
| EXPLORE-07 | 找一找队列与命中 | P0 | 自动 | findState.findBag 均来自当前章节且可见；点中目标 → toast 找到啦 + stopFindGame。 |
| EXPLORE-08 | 找一找错误提示 | P2 | 自动 | findBanner 与 classToast bbox 重叠为 0；banner 有 shake；toast 文本提示再试。 |
| EXPLORE-09 | 移动端点认卡抽屉 | P2 | 自动 | #partCard position fixed 底部；宽度≥84vw；不遮挡 #subtitleBar。 |

### responsive · 响应式与视觉（10 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| RESP-01 | 五档断点布局可用 | P1 | 人工 | 五档下 #app/#player 或课堂三层布局可见；关键按钮不消失；无遮挡。 |
| RESP-02 | 五档无横向溢出 | P0 | 自动 | 五档 scrollWidth 均 ≤ innerWidth+1；body 不产生横向滚动条。 |
| RESP-03 | 播放器高度与舞台让位 | P1 | 自动 | 桌面 --player-h=78px；≤700px=110px；#app 与 #player 不重叠。 |
| RESP-04 | 课堂顶栏移动端两行 | P1 | 自动 | 按钮两行分布；每个高≥44；#classroomTop 桌面 64px、移动 134px。 |
| RESP-05 | 深色设计 token | P1 | 自动 | :root 四个 token 精确匹配；body 背景为 --paper；卡片背景为 --surface。 |
| RESP-06 | 文本对比度 AA | P1 | 自动 | --ink 17.3:1、--ink-2 9.2:1、--ink-3 ≥4.5:1。 |
| RESP-07 | 无衬线且无 emoji 图标 | P1 | 自动 | font-family 不含 serif；控件文本无 emoji；图标均 svg use。 |
| RESP-08 | SVG sprite 15 个图标 | P2 | 自动 | symbol 数量=15；每个 id 匹配 #i-*；使用处 aria-hidden=true。 |
| RESP-09 | 移动端字幕不压画面 | P1 | 自动 | #subtitleBar 与 #app 的 bbox 不重叠；#classroomBar 同理；树冠区域可见。 |
| RESP-10 | 移动端播放器控件 44px | P1 | 自动 | #playBtn/#replayBtn/#musicBtn/#replant/#timelineWrap 尺寸≥44；无控件被裁切。 |

### a11y · 无障碍（14 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| A11Y-01 | 五个弹层 dialog 语义 | P0 | 自动 | 5 个 .modal 属性齐全且 aria-labelledby 指向真实标题 id；#partCard aria-modal=false。 |
| A11Y-02 | 弹层打开背景 inert | P1 | 自动 | 8 个背景 id 全部有 inert；关闭后无 inert。 |
| A11Y-03 | 弹层焦点陷阱 | P0 | 自动 | activeElement 始终在 .modal.show 内；Shift+Tab 从首项到末项；Tab 从末项到首项。 |
| A11Y-04 | 关闭弹层焦点恢复 | P1 | 自动 | 从 #chapterBtnNormal 打开再关闭，activeElement===#chapterBtnNormal。 |
| A11Y-05 | 开场页模态 | P0 | 自动 | role=dialog；背景 4 个容器 inert；activeElement=#startClassBtn；Tab 不离开开场页。 |
| A11Y-06 | 开关按钮 aria-pressed | P1 | 自动 | 5 类按钮属性存在；切换后 true↔false；文案固定。 |
| A11Y-07 | 滑杆 aria 语义 | P1 | 自动 | classProgress role=slider aria-valuemin=0 max=260 now=秒；timeline aria-label=播放进度。 |
| A11Y-08 | 状态播报 live region | P1 | 自动 | #findBanner/#pausePrompt/#classToast role=status；#subtitleText aria-live=polite aria-atomic=true。 |
| A11Y-09 | 焦点可见 | P1 | 人工 | getComputedStyle 的 outline 宽度≈2px、颜色 accent；画布 focus-visible 有描边。 |
| A11Y-10 | 减少动态效果 | P1 | 自动 | CSS animation-duration≈0.001ms；6 秒后相机不自动环绕；无 shake。 |
| A11Y-11 | 44px 触控命中 | P1 | 自动 | 每个 rect 宽高≥44；#timelineWrap 高度≥44；#classProgress 命中区≥44。 |
| A11Y-12 | viewport 允许缩放 | P2 | 自动 | viewport content 只含 width=device-width, initial-scale=1, viewport-fit=cover。 |
| A11Y-13 | canvas 名称与键盘 | P1 | 自动 | aria-label 说明拖动/方向键/滚轮/回车；tabIndex=0；role=application。 |
| A11Y-14 | SVG 图标可访问性 | P1 | 自动 | svg symbol 均 aria-hidden=true；按钮有 aria-label 或可读文本；图标 use 引用有效。 |

### perf · 性能与稳定性（9 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| PERF-01 | draw calls 预算 | P1 | 自动 | calls ≥450 且 ≤500（基线 466）。 |
| PERF-02 | 三角面预算 | P1 | 自动 | triangles ≤650000（基线约 628574）。 |
| PERF-03 | 暂停不重复绘制 | P1 | 自动 | frame 计数前后一致；staticKey 不变。 |
| PERF-04 | 连续再种无泄漏 | P1 | 自动 | 10 次后 geometry/texture 增量 ≤5；无 console error。 |
| PERF-05 | 长播无报错 | P1 | 自动 | 全时间轴抽样 20 个点均无 pageerror；console.error=0。 |
| PERF-06 | 首屏加载耗时 | P1 | 自动 | #loading 隐藏且舞台可见的总耗时 ≤3000ms。 |
| PERF-07 | 动画流畅度感知 | P2 | 人工 | 人工在目标电脑播放 60 秒，无明显卡顿/掉帧/撕裂。 |
| PERF-08 | 长播内存稳定 | P2 | 自动 | 60 秒后几何/纹理数量与开始时差≤2。 |
| PERF-09 | 大批量实例化 | P2 | 自动 | scene 中存在 grass/leaves/flowers/snow 的 InstancedMesh；每类 1 次绘制。 |

### release · 发布与文档（8 条）

| ID | 测试点 | 优先级 | 类型 | 预期 |
|---|---|---|---|---|
| REL-01 | GitHub Pages 首页 200 | P0 | 自动 | HTTP 200；HTML 含「一棵树的四季」；无重定向到 404。 |
| REL-02 | 线上资源 md5 一致 | P1 | 自动 | 3 个文件 md5 相同；app.js 修改时间晚于 src/main.js。 |
| REL-03 | 文档头哈希一致 | P2 | 自动 | 头部哈希格式 7–40 位十六进制；无 __COMMIT_HASH__。 |
| REL-04 | Git 回退标签 | P2 | 自动 | git tag 含 pre-round2、round2-v1；rev-parse 成功。 |
| REL-05 | README 入口齐全 | P1 | 自动 | 含线上首页与 ?class 入口；含 tools/visual-audit.sh；链接 docs/01–11。 |
| REL-06 | 部署排除大文件 | P1 | 自动 | 部署目录无 tree-of-seasons.mp4/wav/shots；存在 .nojekyll。 |
| REL-07 | BGM 授权可追溯 | P2 | 自动 | 文档含 CC0 1.0、Yoiyami、原曲地址与 sha256；音频文件与记录一致。 |
| REL-08 | QA 看板入口可用 | P1 | 自动 | /qa/ 200；fetch data/catalog.json 成功；页面无 error。 |

## 3. 自动化 key 索引

> 按模块列出全部自动化 key；runner 按 key 在 `tools/qa/` 注册检查，未实现的 key 会标为 skip。

### boot · 启动与资源（10 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `boot.noErrors` | BOOT-01 首页冷启动无报错 | 冷启动后 console.error 与 pageerror 均为 0，加载层正常退场。 |
| `boot.resources` | BOOT-02 关键资源全部 200 | index.html、app.js、bgm.js、Three.js 与 BGM 音频均成功加载。 |
| `boot.loadingHidden` | BOOT-03 加载层可见并退场 | 加载层以深色主题展示「正在生长…」，加载完成后 620ms 内消失。 |
| `boot.startScreen` | BOOT-04 开场页可见两按钮 | 开场页可见且开始上课/自由观看按钮均可点击。 |
| `boot.startClassEnter` | BOOT-05 开始上课进入课堂 | 点击开始上课进入课堂模式，顶栏出现且开场页隐藏。 |
| `boot.freeView` | BOOT-06 自由观看开始播放 | 点击自由观看隐藏开场页并开始播放，时间持续前进。 |
| `boot.fileProtocol` | BOOT-07 离线 file:// 可直接运行 | 双击 index.html 以 file:// 打开时 3D 场景与播放器正常工作。 |
| `boot.cacheVersion` | BOOT-08 构建资源带缓存版本 | app.js 与 src/bgm.js 引用均带 ?v=round3 版本参数。 |
| `boot.themeMeta` | BOOT-09 meta 与深色主题一致 | charset、viewport、theme-color 与 color-scheme 齐全。 |
| `boot.noExternalDeps` | BOOT-10 无外部网络依赖 | 页面不加载 CDN、网络字体、外部图片，所有资源均为本地相对路径。 |

### scene · 3D 场景与确定性（12 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `scene.canvasWebGL` | SCENE-01 canvas 与 WebGL 正常 | #app 内创建 canvas，WebGL 上下文可用且尺寸等于舞台客户区。 |
| `scene.chapterKeyframes` | SCENE-02 14 章关键帧季节正确 | 14 章中点均正常渲染，季节标签、标题与画面亮度一致。 |
| `scene.rainWindow` | SCENE-03 春雨与章节窗口一致 | 第 2 章 16–31s 有可见雨丝，第 8/12 章晴天无雨。 |
| `scene.snow` | SCENE-04 冬章雪与枝头积雪 | t=164 冬章已有雪与放大的枝头雪帽，t=190 春章无雪。 |
| `scene.rootGrowth` | SCENE-05 根系生长与深扎 | 第 3 章侧根铺开，第 2 年深根继续下扎并抵达含水层。 |
| `scene.waterLayer` | SCENE-06 地下水层显现 | t=250 水面反光、波纹与根尖光点可见，生长阶段不可见。 |
| `scene.creaturesShade` | SCENE-07 鸟虫与树荫可见 | 第 12 章飞鸟、栖息鸟、蝴蝶、蜜蜂、瓢虫与树荫光斑都在画面中。 |
| `scene.determinism128` | SCENE-08 定帧 t0=128 像素确定 | 两个独立浏览器上下文加载 ?t0=128&freeze，截图像素完全一致。 |
| `scene.determinism250` | SCENE-09 定帧 t0=250 像素确定 | 深根水层场景在两次独立加载下逐像素一致。 |
| `scene.freezeStatic` | SCENE-10 定帧静态重绘机制 | 静态画面只在时间、相机或找一找状态变化时重绘一次。 |
| `scene.resizeNoError` | SCENE-11 resize 与 DPR 适配 | 窗口尺寸变化时 canvas 跟随 #app 尺寸，像素比不超过 1.75。 |
| `scene.seedFlow` | SCENE-12 树种子固定与再种 | 定帧/课堂固定树种子 20240601，再种一棵沿固定随机流生成新树。 |

### story · 叙事与章节（9 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `story.chapterCount` | STORY-01 14 章数据边界 | CHAPTERS 共 14 章，start/end 连续覆盖 0–260s，无缝隙无重叠。 |
| `story.timelineMax` | STORY-02 总时长 259.9 秒 | STORY_END=259.9，播放器显示 04:20，进度条最大值一致。 |
| `story.chapterSwitchSync` | STORY-04 章节切换 UI 同步 | 跳转 t=210 后章节编号、标题、正文、字幕与章节栏同步为第 12 章。 |
| `story.chapterRail14` | STORY-05 章节栏 14 段刻线 | #chapterRail 由 14 个 span 组成，done/current 类随播放位置更新。 |
| `story.chapterDrawer14` | STORY-06 章节弹层 14 卡 | 章节弹层打开后显示 14 张卡片，当前章高亮并滚动到视口中央。 |
| `story.timelineMarks` | STORY-07 时间轴章节刻度 | #marks 生成 13 个章节起点刻度，位置与 CHAPTERS.start 百分比一致。 |
| `classroom.wheel` | STORY-08 季节轮盘与年份 | 细环轮盘四角标春夏秋冬，指针角度随季节进度旋转，中心显示第 N 年。 |
| `story.endingSpring` | STORY-09 结尾回春与新芽 | t=259.8 画面为春色、土面新芽出现，HUD 显示「春 · 万物发芽 · 新的轮回」。 |
| `story.subtitleHighlight` | STORY-10 旁白与字幕同源 | 侧栏旁白与课堂大字幕使用同一章节文案，关键词以 em 高亮。 |

### player · 播放器与音频（11 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `player.playPause` | PLAY-01 播放与暂停 | 点击 #playBtn 在播放/暂停间切换，data-playing 与 aria-label 同步。 |
| `player.timeAdvances` | PLAY-02 时间码显示与更新 | 时间码按 mm:ss / 04:20 显示，并随时间每秒更新。 |
| `player.timelineSeek` | PLAY-03 进度条拖动跳转 | 拖动或点击 #timeline 可跳到任意秒，章节 UI 同步更新。 |
| `player.scrubResume` | PLAY-04 拖动恢复播放状态 | 拖动进度条期间保持原播放状态，松手后自动恢复。 |
| `player.replay` | PLAY-05 重播回到开头 | 点击 #replayBtn 后 storyTime=0、playing=true、回到第 1 章。 |
| `player.replant` | PLAY-06 再种一棵 | 点击 #replant 用新种子重建树，时间归零并继续播放。 |
| `player.musicToggle` | PLAY-07 背景音乐开关 | #musicBtn 切换音乐开关，aria-pressed 与 audio.paused 保持一致。 |
| `player.volumePersist` | PLAY-08 音量与偏好记忆 | 音量滑块与课堂滑块双向同步，开关/音量刷新后保持。 |
| `player.freezeHidden` | PLAY-09 freeze 静音与播放器隐藏 | ?t0=N&freeze 下播放器与旁白隐藏，音频完全不出声。 |
| `player.keyboardSeek` | PLAY-10 播放快捷键 | 空格播放/暂停、←/→±5s、Home/End 首尾、PageUp/PageDown 换章。 |
| `player.ariaPlaying` | PLAY-11 播放状态语义 | 播放键用 data-playing 驱动 SVG 与 aria-label，bgm.js 也读同一状态。 |

### classroom · 课堂模式（12 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `classroom.enter` | CLASS-01 ?class 直接进入课堂 | 访问 ?class 直接进入课堂模式：顶栏/字幕/底栏显示，开场页隐藏。 |
| `classroom.topbar` | CLASS-02 顶栏 8 个工具按钮 | 顶栏含章节、教师提示、找一找、四季合影、每章停、增亮、锁定、退出 8 个按钮。 |
| `classroom.subtitle` | CLASS-03 课堂大字幕 | 字幕显示当前章节全文，关键词高亮，aria-live 播报。 |
| `classroom.progress` | CLASS-04 课堂进度条 | #classProgress 为 slider，可点击/拖动/键盘跳转并保留播放状态。 |
| `classroom.prevNext` | CLASS-05 首尾章按钮禁用 | 第 1 章「上一章」禁用，第 14 章「下一章」禁用。 |
| `classroom.autoPause` | CLASS-06 每章结束自动暂停 | 从 15.5s 播放到 16s 自动停在章节边界，提示下一章并可继续。 |
| `classroom.exit` | CLASS-08 退出确认与保留进度 | 退出先确认，取消可返回，确认后保留 storyTime 并显示继续观看。 |
| `classroom.projector` | CLASS-09 投影增亮 | 增亮按钮切换 body.projector，画面明显变亮且 aria-pressed 同步。 |
| `classroom.lock` | CLASS-10 屏幕锁定与长按解锁 | 锁定后全屏遮罩出现，长按 2 秒解锁，锁定按钮 aria-pressed 同步。 |
| `classroom.quartet` | CLASS-12 四季合影忙碌态 | 生成合影时按钮进入 busy/aria-busy，完成后 4 张图按原比例完整显示。 |
| `classroom.end` | CLASS-13 结束提示不弹合影 | 到 259.9s 自动停止，仅 toast 提示可点四季合影，不自动打开弹层。 |
| `classroom.nextPrev` | CLASS-14 上一章与下一章 | 上一章/下一章按钮跳到相邻章节起点，边界章按钮禁用。 |

### explore · 探索与点认（8 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `explore.dragDeadzone` | EXPLORE-01 拖拽死区与惯性 | 位移≤9px 视为点按，>9px 才转镜头，松手后有惯性衰减。 |
| `explore.doubleClickReset` | EXPLORE-02 双击复位视角 | 双击画布后相机回到 theta/phi/radius=1.46/1.46/12.5，点认卡隐藏。 |
| `explore.wheelZoom` | EXPLORE-03 滚轮平滑缩放 | 滚轮按指数系数改变 cam.radius，并夹在 5.5–30 之间。 |
| `explore.canvasKeyboard` | EXPLORE-05 键盘环顾与点认 | 画布聚焦后方向键旋转、+/- 缩放、Enter 点认画面中心。 |
| `explore.tapPartCard` | EXPLORE-06 点认卡定位与内容 | 点击树上部位后卡片锚定点击位置并自动翻转，glyph/名称/拼音/描述正确。 |
| `explore.findGameStart` | EXPLORE-07 找一找队列与命中 | 找一找按当前章节真实可见部位出题，点中目标显示「找到啦」并结束。 |
| `explore.findGameWrong` | EXPLORE-08 找一找错误提示 | 点错时任务条抖动并在底部 toast 提示，不遮挡任务条。 |
| `explore.mobileDrawer` | EXPLORE-09 移动端点认卡抽屉 | 390 宽下点认卡固定为底部抽屉，不遮挡画面中心与字幕。 |

### responsive · 响应式与视觉（9 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `responsive.noOverflow` | RESP-02 五档无横向溢出 | 1440/1280/1024/768/390 五档无横向溢出、无滚动条。 |
| `responsive.playerHeight` | RESP-03 播放器高度与舞台让位 | 桌面播放器高 78px、移动端 110px，#app 底部正确让位不重叠。 |
| `responsive.classTopbarMobile` | RESP-04 课堂顶栏移动端两行 | 390 宽下课堂 8 个按钮排成 4+4 两行，每个高度≥44px。 |
| `responsive.darkTokens` | RESP-05 深色设计 token | 页面背景 #0C100E、卡片 #151B18、文字 #F2F4F0、强调 #7BD6A6。 |
| `responsive.contrast` | RESP-06 文本对比度 AA | 主文/次文/辅助文在深色底上对比度均达到 WCAG AA。 |
| `responsive.noSerifEmoji` | RESP-07 无衬线且无 emoji 图标 | 全站字体栈无衬线，按钮与状态不使用 emoji，图标全部内联 SVG。 |
| `responsive.svgSprite` | RESP-08 SVG sprite 15 个图标 | sprite 含 15 个 #i-* symbol，全部 aria-hidden。 |
| `responsive.subtitleClear` | RESP-09 移动端字幕不压画面 | 390 宽课堂下字幕带、控制条都在舞台之外，不覆盖 3D 画面。 |
| `responsive.mobilePlayer44` | RESP-10 移动端播放器控件 44px | 390 宽下播放器 5 个核心控件与进度命中区均≥44px。 |

### a11y · 无障碍（13 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `a11y.modalSemantics` | A11Y-01 五个弹层 dialog 语义 | 5 个弹层均为 role=dialog aria-modal=true 且标题关联。 |
| `a11y.modalInert` | A11Y-02 弹层打开背景 inert | 弹层打开时 8 个背景容器加 inert，关闭后移除。 |
| `a11y.focusTrap` | A11Y-03 弹层焦点陷阱 | Tab 在打开弹层内循环，首尾互相 wrap，不会跑到背景。 |
| `a11y.escRestoreFocus` | A11Y-04 关闭弹层焦点恢复 | 关闭弹层后焦点回到触发按钮。 |
| `a11y.startDialog` | A11Y-05 开场页模态 | 开场页为 dialog aria-modal，背景 inert，焦点在开始按钮。 |
| `a11y.ariaPressed` | A11Y-06 开关按钮 aria-pressed | 音乐与课堂每章停/朗读/增亮/锁定按钮均写 aria-pressed 且与状态一致。 |
| `a11y.progressAria` | A11Y-07 滑杆 aria 语义 | #classProgress 与 #timeline 的 slider/aria 属性完整。 |
| `a11y.liveRegions` | A11Y-08 状态播报 live region | 找一找、暂停提示、toast、字幕均为 role=status/aria-live，变化可被播报。 |
| `a11y.reducedMotion` | A11Y-10 减少动态效果 | reduce 时动画时长压到 .001ms，并关闭自动环绕。 |
| `a11y.touchTargets44` | A11Y-11 44px 触控命中 | 390 宽下课堂 8 按钮、播放器 6 控件与进度条命中区均≥44px。 |
| `a11y.viewportZoom` | A11Y-12 viewport 允许缩放 | viewport 不含 maximum-scale 与 user-scalable=no。 |
| `a11y.canvasRole` | A11Y-13 canvas 名称与键盘 | canvas 有 tabindex/role/中文 aria-label 与键盘操作。 |
| `a11y.icons` | A11Y-14 SVG 图标可访问性 | 全部图标 aria-hidden，按钮均有可访问名称。 |

### perf · 性能与稳定性（8 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `perf.drawCalls` | PERF-01 draw calls 预算 | ?dbg 下 renderer.info.render.calls 在 450–500 之间。 |
| `perf.triangles` | PERF-02 三角面预算 | renderer.info.render.triangles ≤650000。 |
| `perf.staticFrames` | PERF-03 暂停不重复绘制 | 暂停/定帧 2 秒内 renderer.info.render.frame 不增长。 |
| `perf.geometryStability` | PERF-04 连续再种无泄漏 | 连续点击再种 10 次后 geometries/textures 不持续增长。 |
| `perf.longPlay` | PERF-05 长播无报错 | 从 0 播到结尾或分段跳播全时间轴无 console error/pageerror。 |
| `perf.loadTime` | PERF-06 首屏加载耗时 | 本地静态服务器下首屏可读时间≤3 秒。 |
| `perf.memoryStable` | PERF-08 长播内存稳定 | 播放 60 秒后 geometries/textures 数量不持续增长。 |
| `perf.instancing` | PERF-09 大批量实例化 | 草叶花雪等批量物体使用 InstancedMesh/Points。 |

### release · 发布与文档（8 个）

| automationKey | 用例 | 检查内容 |
|---|---|---|
| `release.pagesHome` | REL-01 GitHub Pages 首页 200 | 线上首页返回 200 且包含项目标题。 |
| `release.md5` | REL-02 线上资源 md5 一致 | 线上 index.html/app.js/bgm mp3 与本地 md5 完全一致。 |
| `release.docsHash` | REL-03 文档头哈希一致 | docs/ 各文档头部「对应代码」为真实提交哈希，不使用占位符。 |
| `release.tags` | REL-04 Git 回退标签 | pre-round2 / round2-v1 等回退标签存在且可 checkout。 |
| `release.readmeEntry` | REL-05 README 入口齐全 | README 含线上地址、课堂入口、本地预览、视觉审查命令与文档索引。 |
| `release.deployExclude` | REL-06 部署排除大文件 | 部署快照不含 shots/、mp4、wav、node_modules，含 .nojekyll。 |
| `release.bgmLicense` | REL-07 BGM 授权可追溯 | assets/MUSIC-LICENSE.md 记录 CC0 来源、作者、SHA-256 与处理方式。 |
| `release.qaEntry` | REL-08 QA 看板入口可用 | /qa/ 返回 200，catalog.json 可加载，看板无 console error。 |

## 4. 维护说明

1. 测试点以 `qa/data/catalog.json` 为唯一数据源；新增/调整后运行契约校验命令并同步本文。
2. ID 按模块连续编号，不得跳号或复用；`automationKey` 全局唯一，语义为「模块.检查对象」。
3. 人工用例的判定记录由测试负责人补充在看板「待人工复核」视图；无法自动化的 P0 必须写明原因。
4. `since` 表示该测试点首次引入的版本，用于大版本回归时判断影响面。
