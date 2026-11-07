# 07 · 测试、截图与调试

> 本文解决：改动后怎么快速验证、怎么用 URL 参数定帧、怎么定位画面上的“怪东西”，以及章节/画面错位的核对方法。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 最后更新：2026-11-08 · 对应代码：`32225e7`（第五轮 · Web Speech 朗诵）

## 0. 一键自动化测试（第四轮新增）

日常回归、每次大版本更新先跑自动化，再用本文件的人工清单补位：

```bash
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons
node tools/qa-run.js --version v4.1.0 --label "第五轮 · Web Speech 朗诵"
# 或：./tools/qa-release.sh <版本> "<标签>"（先构建再跑，P0/P1 失败非 0）
```

看板入口 `http://127.0.0.1:8777/qa/`（线上 `/qa/`），109 个测试点分 10 模块；运行中每 2 秒刷新进度。测试点总表见 [`12-test-points.md`](12-test-points.md)，使用说明见 [`13-test-dashboard.md`](13-test-dashboard.md)。本文件下面的定帧截图、逐章画面核对、性能与课堂回归清单，仍是自动化覆盖不到的人工验收部分。

## 1. URL 调试参数

| 参数 | 作用 |
|---|---|
| `?t0=N` | 从第 N 秒开始（自动跳过开场页）；不带 `freeze` 时会继续播放 |
| `?t0=N&freeze` | 时间钉死在 N 秒，画面静止且**逐像素可复现**（固定树种子 `20240601` + `dt=0`）；播放器/旁白隐藏，适合截图 |
| `?debug` | 控制台每 0.5 秒输出 `t/p/g/ground/snowA/grassY` |
| `?dbg` | 暴露调试对象（见下） |
| `?video` | 外部逐帧喂时间，`window.__videoReady = true`，播放器/旁白隐藏 |
| `?class` | 直接进入课堂模式（不显示开始页），同样用固定树种子 |
| `?class&t0=210&freeze` | 课堂模式定帧截图（第 12 章鸟虫 / 树荫 / 大字幕 / 季节转盘） |
| `?stage` | 只保留 3D 舞台（章节缩略图/视觉审查截图用） |

`window.__classroom` 始终可用；其中 `seekForTest(t)` 会设 `freezeOverride = t`、暂停播放，并把 **`cam.theta / cam.radius / cam.phi` 复位为 `1.46 / 12.5 / 1.46`**，保证任何时刻的截图都是同一正面视角。`?dbg` 额外暴露 `window.__scene / __sky / __camera / __renderer / __probe`。

### 1.1 确定性验证（第二轮硬约束，必做）

`?t0=N&freeze` 现在必须「每次加载、每次截图、间隔多久」都完全一样。原理：

- `APP_SEED = 0x5EED2024` 的固定 `mulberry32` 覆盖全局 `Math.random`，所有贴图/粒子/树形共用一条流；
- 定帧 / 课堂 / 舞台 / 视频模式用固定树种子 `20240601`；
- 定帧 / 暂停 / 四季合影时 `dt = 0`，粒子不推进；
- 落叶生成改为 `spawnPhase = spawnRate * t` 的闭式相位判断；鸟虫、气泡、飞絮、落果种子、水层波纹全部是 `t` 的闭式函数；
- `animate()` 用 `staticKey` 判断是否需要重绘，静止画面不会每帧重画。

验证方法（两个独立浏览器 profile）：

```bash
ROOT="/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for P in a b; do
  "$CHROME" --headless=new --no-sandbox --use-gl=angle --use-angle=swiftshader \
    --enable-unsafe-swiftshader --hide-scrollbars --window-size=1280,800 \
    --virtual-time-budget=350 --user-data-dir="/tmp/determinism-$P" \
    --screenshot="/tmp/determinism-$P.png" \
    "file://$ROOT/index.html?t0=128&freeze" >/dev/null 2>&1
done
python3 - <<'PY'
from PIL import Image, ImageChops
a = Image.open('/tmp/determinism-a.png').convert('RGB')
b = Image.open('/tmp/determinism-b.png').convert('RGB')
print('bbox =', ImageChops.difference(a, b).getbbox())   # 必须是 None
PY
```

**实测结果：`ImageChops.difference` 的 `bbox = None`（逐像素一致）**；间隔数秒再截仍一致。任何新增对象如果让 `bbox` 非空，说明它用了未接固定种子的随机或逐帧积分，必须改成 `t` 的闭式函数。除 `?t0=128` 外，建议再对 `?t0=44 / 210 / 250` 各做一次双 profile 比对。

## 2. 快速截图

常规章节截图：

```bash
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons
./tools/shoot.sh rN
```

完整视觉审查（固定时间点 + 课堂 UI + 拼图 + 评分报告骨架）：

```bash
./tools/visual-audit.sh audit-rN                     # 快速模式：1280×800，8 张
AUDIT_FULL=1 ./tools/visual-audit.sh audit-rN        # 全量模式：1440×900，24 张
```

视觉标准与评分细则见 [`08-visual-standard.md`](08-visual-standard.md)。

`tools/visual-audit.sh` 本轮已扩展：快速模式 **8 张**（必留 `t=6 / 44 / 210 / 250` 等），全量模式 `AUDIT_FULL=1` 共 **24 张**（20 张 1440×900 桌面关键帧 + 2 张课堂 UI + 2 张 390×844 手机 UI），覆盖春雨 / 根系深扎 / 含水层 / 第二年鸟虫与果实等新帧；两份 `ITEMS` 的条目数必须与这两个数字一致。脚本会自己用 esbuild 重新打包 `app.js`，再生成 `sheet.png`、`metrics.json` 与 `report.md` 评分骨架。

`tools/shoot.sh` 当前流程（第二轮已扩展）：

1. 用 esbuild 重新打包 `app.js`；
2. 桌面 1280×800 截 **11 个时间点**：
   `6 / 20 / 44 / 66 / 100 / 128 / 170 / 190 / 210 / 230 / 250` 秒（种子 / 春雨 / 根系 / 破土 / 幼苗 / 四季 / 鸟虫 / 果实 / 深根水层）；
3. 手机 390×844 截 `190` 秒；
4. 生成 `shots/rN/sheet.png` 拼图（11 张桌面 + 1 张手机）。

单张截图也可用系统 Chrome 直接跑：

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --no-sandbox --use-gl=angle --use-angle=swiftshader \
  --enable-unsafe-swiftshader --hide-scrollbars --window-size=1280,800 \
  --virtual-time-budget=350 --user-data-dir=/tmp/sh_test \
  --screenshot=/tmp/test.png \
  "file:///Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons/index.html?t0=20&freeze"
```

> 截图必须用 `?freeze`，否则 Chrome 从页面加载到截图之间会继续播放，时间点不可复现。

## 3. 章节/画面核对清单

这是本项目最重要的回归检查。按章节表（见 [`02-timeline-and-camera.md`](02-timeline-and-camera.md)）逐段看：

| 时间 | 必须看到 | 容易错的地方 |
|---|---|---|
| `?t0=0&freeze` | 小种子**半埋**在松软表土、微距下草根/土粒/孔隙可读 | 种子不能大；不能悬空；下半屏不能是一块黑板 |
| `?t0=20&freeze` | **春雨**、种子吸水、**当章就能看到中间裂开一条缝** | 雨窗必须覆盖第 2 章 16–31s；裂缝不能在 32s 后才出现 |
| `?t0=28&freeze` | 裂壳清晰、根尚未抢在壳前 | 旧 bug：`seedCrack.opacity` 在 t<66 恒为 0 |
| `?t0=40&freeze` | 主根向下、14 条侧根开始铺开、根有 z 体积 | 根不能只有一根直锥、不能是一张纸片 |
| `?t0=56&freeze` | 破土、主干开始、子叶在近地面 | 子叶不能像大扇子、不能被抬到树梢 |
| `?t0=76–94&freeze` | 幼苗、干长高、早期叶片，子叶章末枯萎 | 不要把大树误当幼苗 |
| `?t0=100&freeze` | 侧枝开始、**96–106s 一阵雨**、树干+根系强壮 | 第 6 章「雨落下」必须有雨 |
| `?t0=120&freeze` | 完整大树；`?t0=119.8/120/120.2` 构图连续 | 树冠要完整；t=120 不能一帧硬切 |
| `?t0=128&freeze` | 夏、树荫与光斑、云真的出现 | 天空不能只有太阳；不能与旧版一样无云 |
| `?t0=140&freeze` | 第一年秋叶；**落叶毯尚未突然铺满** | 落叶毯从 p≥0.58（t≈146.4）才连续淡入 |
| `?t0=150&freeze` | 秋叶、落叶毯、空中落叶连续 | 不能一帧 pop 1600 片；不能冬雪中飘粉花瓣 |
| `?t0=160&freeze` | 冬章开头就有雪与放大的雪帽 | 雪不能晚 1.4–3.1s；雪帽不能只有几像素 |
| `?t0=170&freeze` | 冬季大雪、枝头积雪、**无飞鸟** | 地面不能还是绿草；寒冬不出鸟 |
| `?t0=179&freeze` | 仍是冬景，配色不提前返春 | 旧 bug：t=179 起纯春绿却仍下雪 |
| `?t0=190&freeze` | 第二年春，**成簇春花 + 绕花蜜蜂 + 飞絮** | 不能整树雪白；花不能小到看不见；第一年不能提前开花 |
| `?t0=205 / 210&freeze` | **飞鸟群 / 栖息小鸟 / 蝴蝶 / 蜜蜂 / 瓢虫 / 树荫光斑** | 第 12 章文案「小鸟和昆虫来休息」必须有画面证据 |
| `?t0=230&freeze` | 红果（青→熟已转色）、推到树冠前 | 果实不能太小/被叶遮住/一出现就是亮红大球 |
| `?t0=242&freeze` | 熟果落地**不穿土**、滚出种子 | 果子不能平移进土里消失 |
| `?t0=250&freeze` | **深根抵达含水层**、水面反光/波纹/气泡/根尖光点 | 相机须已渐进拉远；树仍应占画面约 60%（第 12 章） |
| `?t0=259.8&freeze` | 土面新芽、HUD「春 · 万物发芽 · 新的轮回」 | 结尾不能标着「冬」却是春绿 |

检查完后，再看一遍 `?t0=20` 和 `?t0=170` 的动态（不加 freeze），确认雨/雪是在运动而不是静态点；定帧下它们应完全静止。

远山改版后额外检查：`?t0=130&freeze`（夏）、`?t0=150&freeze`（秋）、`?t0=170&freeze`（冬）、`?t0=190&freeze`（春）四张图；确认三层山脊从雾色渐变到山体色、远山雪线可见、近景草坡不过暗，且山脊在镜头左右移动时不会穿帮。

### 3.1 第二轮验收实测（本轮已通过，回归时复测）

| 检查 | 结果 |
|---|---|
| 确定性 | 两个独立 `--user-data-dir` 加载 `?t0=128&freeze`，`ImageChops.difference` 的 `bbox = None`；间隔数秒再截仍一致 |
| 第一章亮度 | `?t0=6` 下半屏亮度 **16.9 → 85.7/255**，土粒 / 层理 / 草根可读 |
| 逐章抽查 | `?t0=6 / 20 / 44 / 128 / 170 / 190 / 210 / 230 / 250 / 259.8` 全部通过（见上表） |
| 性能 | `?dbg` 下 `renderer.info.render.calls = 466`、`triangles ≈ 628574`（预算 450–500 / ≤0.65M） |
| 课堂 | `?class&t0=210&freeze` 大字幕 / 季节转盘正常；找一找队列含 bird/insect，点昆虫返回「找到啦！这是昆虫」 |
| 工具 | `./tools/visual-audit.sh` 快速 8 张 / `AUDIT_FULL=1` 全量 24 张均可用 |

## 4. `?dbg` 调试对象

```js
window.__scene          // THREE.Scene
window.__sky            // skyUniforms
window.__camera
window.__renderer
window.__probe(nx, ny)  // NDC 坐标射线拾取，返回命中的 mesh 信息
```

例：定位画面上的漂浮物：

```js
window.__probe(0.2, 0.6)
```

返回 `name / geo / verts / dist / pt`。项目早期用这个方法定位过“顶芽与主干脱节”的 bug，见 `ITERATIONS.md` 的 r17。

## 5. 性能检查

在 `?dbg` 页面控制台：

```js
const i = window.__renderer.info;
({ calls: i.render.calls, triangles: i.render.triangles, geometries: i.memory.geometries });
```

当前量级（第二轮实测，桌面 `?dbg`）：

- **`renderer.info.render.calls = 466`**（预算 450–500）
- **`renderer.info.render.triangles ≈ 628574`**（预算 ≤0.65M）
- 新增的 5 类生物 InstancedMesh、水层 Points/Shader、云影/树荫/飞絮/种子都是各 1 个 draw call；根毛仍只有 1 个（`setDrawRange` 逐段显现）。

定帧 / 暂停时 `dt=0` 且 `staticKey` 不变则不重绘，无头截图不会每帧跑 400+ draw call。如果改树/根/粒子后数值明显升高：

1. 优先合并静态根系/枝干，或降粒子数量；
2. 检查是否误把实例化物体拆成多个 Mesh；
3. 检查 `buildTree()` 每次换树是否泄漏（`disposeTree()` 本轮已补 `fruits/stems.dispose()` 与 `seedMat.map.dispose()`，见 `docs/03`）；
4. 用 `?t0=128&freeze` 连续点 10 次「再种一棵」，确认 `renderer.info.memory.geometries / textures` 不持续增长。

## 6. 背景音乐检查

1. 打开普通页面，点击「♫ 开启音乐」（或按 `M`）；
2. 播放/暂停、拖动进度条、←/→、重播、再种一棵，确认音乐跟着时间；
3. 打开 `?freeze` 或 `?video`，确认音频不出声；
4. 刷新页面，确认音量和开关记忆；
5. 无头 Chrome 检查 `audio.duration` 是否为 260 秒左右、无 console error。

## 7. 旧工具与已知假象

- `tools/render.js` 的 `KEYS` 仍映射旧 58s 视频时间轴，不要拿它验证当前 260s 网页；
- `tools/probe.js` 依赖页面暴露的 `?dbg` 探针；
- `shots/` 被 `.gitignore` 忽略，属视觉迭代产物，不应提交；
- `?freeze` 模式下相机自动旋转被禁用（`playing=false`），但手动拖动仍可用。


## 8. 课堂模式回归清单

1. `?class&t0=128&freeze` 与 **`?class&t0=210&freeze`**：检查 1440×900、1024×768、390×844 三种尺寸；顶部工具不能挤出屏幕，字幕不能压住树，季节转盘在右上角安全区且指针与色象限对齐（本轮把 `conic-gradient` 从 `-90deg` 改成 `0deg`）；第 12 章大字幕应显示「夏天，树荫像一把大伞，小鸟和昆虫都来这里休息」。
2. 点「章节」：14 张卡片完整，当前章节高亮；点任意卡片后进度条跳到对应 `CHAPTERS.start`。
3. 点「教师提示」：出现当前章节的「可以问 / 可以动」，不遮挡投影画面（弹窗只在老师操作时出现）。
4. 点「找一找」：随机出现部位名称；点对（或点到目标附近宽容范围）显示「找到啦」，点错只提示、不报错；夏天不能点到「雪」、冬天不能点到「花」；**第 12 章 `?class&t0=210&freeze` 的队列必须含 `bird` / `insect`，点昆虫返回「找到啦！这是昆虫」**；秋末/冬季不能把已落光的叶子误判为可找目标；`startFindGame()` 选出的目标必须能在当前画面中看到并可点击。
5. 点树上的部位：下方左侧出现认读卡（含小鸟 / 昆虫），不遮住树；课堂模式下点击会暂停。
6. 点「四季合影」：四张图分别为夏/秋/冬/春，颜色和树形明显不同；**四张构图一致（截图期间 `quartetShooting` 关掉 `deepReveal`）**；说明文案已去掉「结果」；关闭后播放状态恢复。
7. 开启「每章停」：从 15 秒播放到 16 秒必须自动停，提示「第 1 章结束 · 下一章：春雨滋润」；按空格从第 2 章继续，不能卡在 16 秒。
8. 「投影增亮」：`body.projector` 出现，canvas 明显变亮；关闭后恢复。
9. 「锁定」：全屏遮罩出现，2 秒长按解锁；解锁后按钮可继续操作。
10. 「朗诵」：macOS Chrome 下应能听到中文女声；有 Edge/Windows Natural 语音时应优先选在线自然音（按钮 `title` 会显示「在线自然语音 · …」）；清空/禁用系统语音时应出现 `#voiceNotice` 降级提示且按钮保持未开启；朗读时 BGM 音量应自动压低。
11. `?class&t0=128`（不加 freeze）：确认播放/暂停、上一章/下一章、重播都跟着时间轴，背景音乐同步。
12. 开场页：点「开始上课」应请求全屏并进入课堂模式；点「自由观看」保留原布局。
