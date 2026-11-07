# 13 · 可视化测试看板

> 本文解决：看板在哪里、每个区域看什么、测试点如何维护、每次大版本更新如何跑自动化、结果与历史如何解读，以及常见问题。
> 入口：**https://hrvs0769.github.io/tree-of-seasons/qa/** （本地 `http://127.0.0.1:8777/qa/`）
> 测试点总表：[`12-test-points.md`](12-test-points.md)；数据契约：[`../qa/CONTRACT.md`](../qa/CONTRACT.md)
> 最后更新：2026-11-08 · 对应版本：v4.0.0（第四轮 · 可视化测试看板）

## 1. 它是什么

这是一个**独立访问的质量控制台**，不属于学生/老师使用的演示页面。它把整个项目的测试点摊开给项目负责人看，回答两个问题：

1. **这个项目到底验了什么？** 10 个模块、108 个测试点，按 P0/P1/P2 与「自动/人工」分类，每条都有目标、预期、步骤与最近结果。
2. **这次大版本能不能用？** 每次运行后看板显示执行进度、通过率、失败项、证据截图与历史趋势；P0 阻断项为 0 才建议进入课堂。

入口是 `/qa/`，与主应用完全隔离：即使看板脚本出错，也不会影响 `index.html` 的课堂演示。

## 2. 看板结构

| 区域 | 看什么 |
|---|---|
| 顶部 | 版本、最近运行时间、「复制执行命令」、返回演示 |
| 01 运行总览 | 运行中显示「执行进度」环（已完成 / 自动化总数）；结束后显示「通过率」环；下方四格：已通过 / 失败 / 未运行 / 待人工；右侧是版本、commit、耗时、浏览器、BASE URL |
| 评估结论 | 自动生成：无记录 / 运行中 / 存在 N 个 P0 阻断项 / P0 阻断项 0 可进入课堂试用 |
| 02 测试点地图 | 10 个模块的测试点数量、优先级构成、自动化覆盖与通过率；点击模块即筛选 |
| 03 测试点列表 | 按模块分组、可折叠；支持标题/ID/摘要搜索与模块、优先级、状态、类型筛选；点行展开详情、步骤、实际结果和证据图 |
| R1 最近运行 | 当前运行/最近一次运行的标签、时间、耗时、PASS/FAIL/SKIP 计数与失败 ID |
| R2 历史趋势 | 最近 6 次大版本的自动化通过率柱状图 |
| R3 自动化流程 | 构建 → 跑测试 → 看板复核三步备忘 |

## 3. 测试点怎么组织

- 共 **108 条**：自动 **100 条**（92.6%） · 人工 **8 条**。
- 优先级：**P0 22 条**（全部自动） · P1 61 条 · P2 25 条。
- 10 个模块：`boot` 启动与资源、`scene` 3D 场景与确定性、`story` 叙事与章节、`player` 播放器与音频、`classroom` 课堂模式、`explore` 探索与点认、`responsive` 响应式与视觉、`a11y` 无障碍、`perf` 性能与稳定性、`release` 发布与文档。
- 「人工」不是没测，而是必须在真实设备/真实课堂环境由人判断的项目（例如朗读声音是否可听、投影下焦点是否可见、动画在不同教室电脑上的流畅度）。看板会一直显示「待人工复核」，不冒充自动通过。

完整清单见 [`12-test-points.md`](12-test-points.md)，机器可读版本是 `qa/data/catalog.json`。

## 4. 每次大版本更新怎么跑

### 4.1 一条命令（推荐）

```bash
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons

# 重新构建 + 全量自动化（P0/P1 有失败则退出码非 0）
./tools/qa-release.sh v4.1.0 "第五轮 · 本轮主题"
```

等价的手动流程：

```bash
# 1) 构建 app.js（改过 src/main.js 时必须）
"/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/.bin/esbuild" \
  src/main.js --bundle --format=iife --minify \
  --alias:three=./lib/three.module.min.js --outfile=app.js --log-level=warning

# 2) 跑全量（runner 会自己启动静态服务器；也可加 --base-url 指向 8777）
node tools/qa-run.js --version v4.1.0 --label "第五轮 · 本轮主题"

# 3) 打开看板复核
open http://127.0.0.1:8777/qa/
```

### 4.2 运行过程中

`tools/qa-run.js` 每完成一条就原子写入 `qa/data/results.json`，状态为 `running` 并带 `progress.done/total/currentId`。看板检测到 `running` 后每 2 秒轮询一次，所以打开 `http://127.0.0.1:8777/qa/` 就能看到实时进度、当前用例和单项 PASS/FAIL。

### 4.3 中途中断 / 只补跑失败项

```bash
node tools/qa-run.js --version v4.1.0 --label "第五轮 · 本轮主题" --retry-failed
```

`--retry-failed` 会读取现有 `qa/data/results.json`，保留已通过项，只补跑 fail/skip 项并在最后合并成一次完整结果；适合网络中断、浏览器崩溃或先跑单模块后补全。

### 4.4 结束后

- 退出码：`0` = P0/P1 全部通过；`1` = 有 P0/P1 失败；`2` = 其它（配置/启动错误）。
- `results.json` 变为 `passed` / `failed`，`history.json` 追加一条大版本记录。
- 看板「最近运行」与「历史趋势」自动更新；失败项默认展开，可看 `message` / `actual` / 证据截图。
- **只有 P0 阻断项为 0 才建议上课。** P1 失败可以评估是否影响本轮目标；P2 可以排期。

### 4.5 发布到 GitHub Pages

按 [`06-build-and-deploy.md`](06-build-and-deploy.md) 的流程同步；`qa/` 与 `tools/qa-run.js`、`tools/qa/` 属于「推荐一起部署」的内容，这样线上也能直接打开 `/qa/` 看最新报告与历史。`shots/` 仍然不入库。

## 5. 数据文件

| 文件 | 维护者 | 作用 |
|---|---|---|
| `qa/data/catalog.json` | 人工 | 测试点总表（108 条），唯一事实来源 |
| `docs/12-test-points.md` | 人工/同步 | catalog 的可读版，按模块分组的表格 |
| `qa/data/results.json` | `tools/qa-run.js` | 最近一次运行：状态、进度、summary、每条实际结果与证据 |
| `qa/data/history.json` | `tools/qa-run.js` | 最多 30 次大版本运行摘要，供趋势图 |
| `qa/evidence/*.jpg` | runner | 失败/关键检查的证据截图 |
| `qa/data/demo-*.json` | 开发 | 仅 `?demo=1` 使用的示例数据，正式页面绝不加载为默认结果 |

字段定义见 [`../qa/CONTRACT.md`](../qa/CONTRACT.md) §3–§5。看板全部相对路径加载，GitHub Pages 子路径 `/tree-of-seasons/qa/` 可直接工作。

## 6. 如何新增/修改测试点

1. 在 `qa/data/catalog.json` 增加一条 case：`id` 按模块前缀连续编号，`priority`、`type`、`automationKey`（auto 必填）、`goal`、`expected`、`steps` 齐全。
2. 同步更新 `docs/12-test-points.md` 的统计与对应模块表格。
3. 若 `type=auto`，在 `tools/qa/checks/<module>.js` 实现同名 `key` 的检查；返回 `{message, actual}` 即为 PASS，抛 `Error` 为 FAIL，抛 `SkipError` 为 SKIP。
4. 运行 `node tools/qa-run.js --version <版本> --label "<标签>" --only <模块>` 先验证新检查，再跑全量。
5. 看板刷新即可看到新测试点；无需改前端代码。

## 7. 常见问题

| 现象 | 处理 |
|---|---|
| `qa-run.js` 找不到 Chromium | 设置 `CHROME_BIN`，或安装 Playwright Chromium；默认会找 `~/Library/Caches/ms-playwright/chromium-1208/...` 与系统 Chrome |
| 本地 `/qa/` 打开空白/无数据 | 用 `http://127.0.0.1:8777/qa/`，不要用 `file://`（fetch 需要 http）；确认 `qa/data/catalog.json` 存在 |
| 看板显示「未运行」 | 还没有正式运行；执行 `node tools/qa-run.js --version ...` |
| 看板一直「运行中」 | runner 可能异常退出；看终端输出，或重新运行（会生成新的 runId） |
| 某个 auto 一直 SKIP | 看 `message`：可能是「需线上环境」或该 key 尚未实现；不要把它当 PASS |
| 修改测试点后统计没变 | 看板读 catalog；确认 JSON 合法、刷新页面（`?v=` 可破缓存） |
| 部署后 `/qa/` 404 | 确认部署目录包含 `qa/index.html`、`qa/assets/`、`qa/data/`、`qa/evidence/`，并保留 `.nojekyll` |

## 8. 当前基线

| 项 | 值 |
|---|---|
| 测试点 | 108（自动 100 / 人工 8） |
| 优先级 | P0 22 / P1 61 / P2 25 |
| 自动化 | Playwright Chromium，桌面 1440×900 主基线 + 五档响应式 |
| 性能预算 | draw calls 450–500，triangles ≤ 650k |
| 最近一次正式运行 | 100 条 auto：98 通过 / 0 失败 / 2 跳过（软件 GL 首屏预算、线上 md5 需线上环境），passRate 100% |

> 本文件与 [`12-test-points.md`](12-test-points.md) 一起维护：新增测试点先改 catalog，再同步清单与看板；不要在多处各写一份。
