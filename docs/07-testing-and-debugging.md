# 07 · 测试、截图与调试

> 本文解决：改动后怎么快速验证、怎么用 URL 参数定帧、怎么定位画面上的“怪东西”，以及章节/画面错位的核对方法。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。

## 1. URL 调试参数

| 参数 | 作用 |
|---|---|
| `?t0=N` | 从第 N 秒开始；不带 `freeze` 时会继续播放 |
| `?t0=N&freeze` | 时间钉死在 N 秒，画面静止；播放器/旁白隐藏，适合截图 |
| `?debug` | 控制台每 0.5 秒输出 `t/p/g/ground/snowA/grassY` |
| `?dbg` | 暴露调试对象（见下） |
| `?video` | 外部逐帧喂时间，`window.__videoReady = true`，播放器/旁白隐藏 |

## 2. 快速截图

```bash
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons
./tools/shoot.sh rN
```

`tools/shoot.sh` 当前流程：

1. 用 esbuild 重新打包 `app.js`；
2. 桌面 1280×800 截 7 个时间点：
   `6 / 24 / 44 / 66 / 84 / 106 / 128` 秒；
3. 手机 390×844 截 `190` 秒；
4. 生成 `shots/rN/sheet.png` 拼图。

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
| `?t0=0&freeze` | 小种子、微距、种子在土面附近 | 种子不能大；不能悬空太高 |
| `?t0=20&freeze` | **春雨**、种子吸水、种皮裂 | 雨窗必须覆盖第 2 章 16–31s；不能等章节出现时雨已停 |
| `?t0=40&freeze` | 主根向下、开始有侧根 | 根不能只有一根直锥 |
| `?t0=56&freeze` | 破土、主干开始、子叶 | 子叶不能像大扇子；不能悬空 |
| `?t0=76–94&freeze` | 幼苗、干长高、早期叶片 | 不要把大树误当幼苗 |
| `?t0=100&freeze` | 侧枝开始、树干+根系强壮 | 根系不能稀疏、不能只在土表 |
| `?t0=120&freeze` | 完整大树（7 章结束） | 树冠要完整，不应只有主干 |
| `?t0=140&freeze` | 第一年秋叶、地面落叶 | 不能整树瞬间光秃 |
| `?t0=170&freeze` | 冬季大雪、枝头积雪、根深 | 雪不能太少/太快；地面不能还是绿草 |
| `?t0=190&freeze` | 第二年春，叶子绿色，有花 | **不能整树雪白**（旧 bug：blossomF 染叶） |
| `?t0=230&freeze` | 第二年秋，果实 | 果实不能太小/全被叶子遮住 |

检查完后，再看一遍 `?t0=20` 和 `?t0=170` 的动态（不加 freeze），确认雨/雪是在运动而不是静态点。

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

当前量级（桌面、随机种子会浮动）：

- 约 450–500 draw calls
- 约 0.6M triangles

如果改树/根/粒子后数值明显升高：

1. 优先合并静态根系/枝干，或降粒子数量；
2. 检查是否误把实例化物体拆成多个 Mesh；
3. 检查 `buildTree()` 每次换树是否泄漏（见 `docs/03`）。

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
