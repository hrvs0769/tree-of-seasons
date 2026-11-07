# QA 看板契约（v1）

> 本文件是「可视化测试看板」的唯一数据契约。`qa-catalog` / `qa-dashboard` / `qa-runner` 三方必须严格遵守；改动前先由 Lead 更新本文件。
> 项目根：`/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons`

## 1. 目标与入口

- 独立访问入口：`https://hrvs0769.github.io/tree-of-seasons/qa/`，本地为 `http://127.0.0.1:8777/qa/`。
- 看板读者：项目负责人 / 老师。用于「一屏看清整个项目有哪些测试点、每个点验什么、当前过没过」，并在每次大版本更新时看到自动化测试进度与结果。
- 看板不替代主应用：不得修改 `index.html` / `src/main.js` / `app.js` / `src/bgm.js`。唯一例外是 Lead 最后统一加一个入口链接。

## 2. 文件所有权（write scope）

| 角色 | 可写文件 |
|---|---|
| `qa-catalog` | `qa/data/catalog.json`、`docs/12-test-points.md` |
| `qa-dashboard` | `qa/index.html`、`qa/assets/`（css/js/图标）、`qa/data/demo-*.json` |
| `qa-runner` | `tools/qa/`、`tools/qa-run.js`、`tools/qa-release.sh`、`qa/data/results.json`、`qa/data/history.json`、`qa/evidence/` |
| Lead | `qa/CONTRACT.md`、`qa/README.md`、`docs/13-test-dashboard.md`、根文档、部署 |

不要跨 scope 改文件；需要改别人的文件时先发消息给 Lead。

## 3. `qa/data/catalog.json`（测试点总表，手工维护）

```json
{
  "schemaVersion": 1,
  "project": "一棵树的四季",
  "projectEn": "The Four Seasons of a Tree",
  "updatedAt": "2026-11-08",
  "version": "v4.0.0",
  "modules": [
    {
      "id": "boot",
      "name": "启动与资源",
      "en": "BOOTSTRAP",
      "description": "打开页面到首屏可见的链路：HTML/JS/音频/字体资源、加载层、开场页、错误处理。",
      "accent": "#7BD6A6"
    }
  ],
  "cases": [
    {
      "id": "BOOT-01",
      "module": "boot",
      "title": "首页冷启动无报错",
      "summary": "冷启动后无 console error / pageerror，加载层正常退场。",
      "goal": "任何环境下首屏都不因脚本异常或资源缺失而白屏。",
      "expected": "#loading 隐藏；console.error = 0；pageerror = 0。",
      "steps": ["打开 /", "等待 #loading 隐藏", "读取控制台记录"],
      "priority": "P0",
      "type": "auto",
      "automationKey": "boot.noErrors",
      "tags": ["稳定性"],
      "since": "v1.0"
    }
  ]
}
```

### 3.1 字段规则

- `modules[]` 固定 10 个，顺序即看板顺序：`boot` 启动与资源 / `scene` 3D 场景与确定性 / `story` 叙事与章节 / `player` 播放器与音频 / `classroom` 课堂模式 / `explore` 探索与点认 / `responsive` 响应式与视觉 / `a11y` 无障碍 / `perf` 性能与稳定性 / `release` 发布与文档。
- `cases[]` 建议 90–110 条；ID 前缀 = 模块大写：`BOOT-01`、`SCENE-01`、`STORY-01`、`PLAY-01`、`CLASS-01`、`EXPLORE-01`、`RESP-01`、`A11Y-01`、`PERF-01`、`REL-01`，模块内连续编号。
- `priority`：`P0`（阻断/白屏/核心教学流程）/ `P1`（重要功能或明显体验问题）/ `P2`（细节、增强、边缘场景）。
- `type`：`auto` 必须带 `automationKey`（与 runner 注册表一致，kebab/camel 小写点分）；`manual` 不跑自动化，看板显示「待人工复核」。
- `title` ≤ 22 个汉字；`summary` 一句话（≤52 字）；`goal` 说明「为什么值得测 / 不符合会怎样」；`expected` 写可判定的验收结果；`steps` 2–5 步。
- `tags` 从：`稳定性`、`教学`、`视觉`、`交互`、`无障碍`、`性能`、`部署`、`内容`、`音频`、`兼容性` 中选 1–3 个。
- 自动化覆盖目标：≥ 62%（至少 60 条 auto）；P0 必须 100% auto 或明确标注 `manual` 原因（写进 `summary` 末尾「需人工：…」）。
- 每条用例必须能回答「这个测试点是否符合项目需要」：`goal` 要联系教学场景（幼儿园课堂 / 家庭观看），不要只写技术断言。

### 3.2 内容来源（必须通读，不要凭空写）

- `DEVELOPMENT.md`、`docs/01`–`docs/11`，尤其 `docs/05-ui-and-audio.md`（交互/课堂/音频）、`docs/07-testing-and-debugging.md`（逐章画面清单/确定性/性能/课堂回归）、`docs/11`（UI 系统与 a11y 验收）。
- `index.html` 的 DOM id、`src/main.js` 的 `CHAPTERS` / `window.__classroom` / 事件表。
- `README.md`、`ITERATIONS.md` 的功能范围与已知限制。
- 覆盖：10 个模块全部要有 7–15 条；14 章画面/时序至少 8 条；课堂模式至少 14 条；a11y 至少 12 条；性能/确定性至少 8 条。

## 4. `qa/data/results.json`（runner 生成，看板只读）

```json
{
  "schemaVersion": 1,
  "runId": "20261108-001",
  "version": "v4.0.0",
  "label": "第四轮 · 可视化测试看板",
  "commit": "deadf85",
  "status": "running",
  "startedAt": "2026-11-08T00:20:00+08:00",
  "finishedAt": null,
  "durationMs": 0,
  "environment": {
    "baseUrl": "http://127.0.0.1:8777",
    "browser": "Chromium 1208",
    "platform": "macOS",
    "viewport": "1440x900"
  },
  "progress": { "done": 0, "total": 63, "currentId": "BOOT-01" },
  "summary": {
    "total": 104, "auto": 63, "manual": 41,
    "passed": 0, "failed": 0, "skipped": 0, "passRate": 0
  },
  "cases": [
    {
      "id": "BOOT-01",
      "status": "pass",
      "durationMs": 320,
      "message": "加载完成，无 console error",
      "actual": "console.error=0, pageerror=0",
      "evidence": ["evidence/BOOT-01.jpg"]
    }
  ]
}
```

- `status`：`running` / `passed` / `failed` / `not-run`。单项 `status`：`pass` / `fail` / `skip`。
- `summary` 只统计 auto 用例；`passRate = passed / (passed + failed)`（0–1，保留 3 位）。
- `cases[]` 只放 auto 且已执行的项；缺失项看板显示「未运行」。
- 运行中必须每完成一条就落盘（`qa/data/results.json`），看板据此显示实时进度。

## 5. `qa/data/history.json`（runner 生成）

```json
{
  "schemaVersion": 1,
  "runs": [
    {
      "runId": "20261108-001",
      "version": "v4.0.0",
      "label": "第四轮 · 可视化测试看板",
      "commit": "deadf85",
      "finishedAt": "2026-11-08T00:26:00+08:00",
      "durationMs": 360000,
      "summary": { "total": 104, "auto": 63, "manual": 41, "passed": 61, "failed": 2, "skipped": 0, "passRate": 0.968 },
      "failed": ["CLASS-07", "PERF-03"]
    }
  ]
}
```

- 每次运行追加一条，按 `finishedAt` 升序；同一 `version + commit` 重跑则替换最后一条，避免重复。
- 历史最多保留 30 条。

## 6. Runner 接口

```bash
node tools/qa-run.js \
  --version v4.0.0 \
  --label "第四轮 · 可视化测试看板" \
  [--base-url http://127.0.0.1:8777] \
  [--only BOOT,PLAY] \
  [--headed] [--no-evidence]
```

- 无 `--base-url` 时自己启动静态服务器（根 = 项目根，随机端口），结束后关闭。
- 读 `qa/data/catalog.json`，对 `type=auto` 的用例按 `automationKey` 执行；未实现的 key → `skip` 且 message 说明。
- 每条用例独立 try/catch，单条超时 45s；失败不得中断整轮。
- 证据截图写到 `qa/evidence/<ID>.jpg`（viewport 截图，JPEG 质量 80，宽 ≤1440），`results.json.cases[].evidence` 用相对 `qa/` 的路径（`evidence/BOOT-01.jpg`）。
- 退出码：全部 P0/P1 通过且无失败/跳过为 0；有 P0/P1 fail 为 1；仅 P2 fail 或存在 skip 为 2；参数/配置/启动等致命错误为 3（release 脚本只接受 0 与 2）。
- 控制台输出：`[12/63] BOOT-01 PASS 320ms`、结尾汇总表 + 失败项列表。
- 提供 `tools/qa-release.sh`：构建 `app.js` → 跑全量 → 若 P0/P1 失败则非 0 退出；其余情况提示可部署。
- 依赖：`playwright-core` 从 `/Users/liuhuirong/.dsh/profiles/web/node_modules/playwright-core` 加载（本机已有）；Chromium 候选路径与 `tools/ui-shot.js` 相同，可用 `CHROME_BIN` 覆盖。

## 7. 看板 `qa/index.html` 要求

### 7.1 信息架构（首屏必须全有）

1. 顶部：品牌「一棵树的四季 · 质量看板」+ `QA CONSOLE` + 版本 `v4.0.0` + 最近运行时间 + 「返回演示」链接 + 「复制执行命令」按钮。
2. 总览 Hero：巨大通过率环（或大数字）+ `已通过 / 失败 / 未运行 / 待人工` 四格 + 本次 `版本 / commit / 耗时 / 浏览器` + 运行状态徽标（`运行中` 有脉冲动画）。
3. 「测试点地图」：10 个模块 × P0/P1/P2 的矩阵/条形，显示每模块总数与自动通过率，点击可筛选。
4. 筛选栏：搜索（标题/ID/摘要）、模块、优先级、状态、类型（自动/人工）；显示「当前 N / 总数」+ 清空。
5. 测试点列表：按模块分组、可折叠；每行显示 ID、标题、摘要、P0/P1/P2、自动/人工、状态点、最近耗时；点击展开详情（目标 / 预期 / 步骤 / 实际结果 / 证据截图）。失败项默认展开。
6. 右栏（或下方）：最近一次运行摘要 + 历史趋势（近 6 次大版本通过率柱状/折线，纯 CSS/SVG）+「大版本自动化流程」三步说明。
7. 空状态：无 `results.json` 时仍展示完整测试点目录，顶部提示「尚无自动化运行记录」+ 复制命令；不能白屏。

### 7.2 视觉

- 与主应用同一套深色 token（`#0C100E` 底、`#151B18` 面、`#F2F4F0` 字、`#7BD6A6` 强调），但气质是「工程控制台」：细网格背景、等宽字体用于 ID/时间码、状态色克制（pass 薄荷绿、fail `#E17A63`、pending `#8A928B`、manual `#E5B36A`）。
- 禁止：衬线字体、金棕古风、emoji 图标、外部字体/CDN/图片、框架。图标用内联 SVG。
- 响应式：1440 / 1280 / 1024 / 768 / 390 五档；390 下为单列，筛选横向滚动或折叠，表格变卡片。
- 动效：入场 fade/rise 300–500ms；筛选与展开 160–220ms；`prefers-reduced-motion` 关闭。
- 可访问性：语义化 header/nav/main/section、按钮真实 `<button>`、筛选可用键盘、状态不只靠颜色（同时有文字）、对比度 AA、焦点可见。

### 7.3 数据加载

- `fetch('data/catalog.json', {cache:'no-store'})`、`fetch('data/results.json')`、`fetch('data/history.json')`；任一失败使用内置空态，不阻塞其它文件。
- 结果运行中（`status==='running'`）时每 2s 轮询 `results.json`，更新进度与单项状态；运行结束后停止轮询。
- 所有路径相对 `qa/`，必须能在 GitHub Pages 子路径 `/tree-of-seasons/qa/` 下工作。
- 不写死具体测试条数，全部由 catalog 计算。

## 8. 验收

- `node tools/qa-run.js --version v4.0.0 ...` 能跑完并生成三份数据；`results.json` 与 `catalog.json` 的 auto ID 一一对应。
- 看板在 1440×900 / 390×844 截图无溢出、无遮挡、无控制台错误。
- 看板首屏 3 秒内可读（本地静态服务器）；数据缺失/运行中/有失败三种状态都要验证。
- `docs/13-test-dashboard.md` 写清：入口、数据契约、如何执行大版本测试、如何解读、如何加测试点、已知限制。
- `docs/12-test-points.md` 是测试点总表（由 catalog 同步），`docs/13` 是看板使用手册。
