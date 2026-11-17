# 14 · 项目复盘：工程审查与幼儿园教师视角

> 审查日期：2026-11-17
> 审查基线：`main` @ `6f83bb2`（2026-11-08 第五轮 Web Speech 修正）
> 审查范围：`src/main.js`、`src/speech.js`、`src/bgm.js`、`index.html`、`app.js`、`tools/qa/`、`qa/data/`、`README.md`、`DEVELOPMENT.md`、`docs/01`–`docs/13`
> 方法：源码与文档静态审查 + esbuild 重建比对 + Chromium 实际课堂操作（1280×800 / 1440×900 / 390×844）+ `renderer.info` 测量 + QA 数据一致性核对
> 说明：本文把三路审查去重后整理为一份可执行的复盘。结论、证据和建议均以当前 HEAD 为准；未修改任何产品代码。
> 后续执行记录：第六轮按用户选择完成了第 2–6 项，见 [`15-round6-implementation.md`](15-round6-implementation.md)；第 1 项（QA 门禁/全量重跑）按用户要求未做。
>
> **问题统计：2 个 P0、16 个 P1、23 个 P2、7 个 P3（共 48 项；其中 P3 以清理/文档为主）。**

---

## 0. 一页结论

**这是一个已经能上课、视觉完成度很高的项目，不是技术 Demo。** 3D 场景、14 章叙事、课堂模式、点认/找一找/四季合影已经形成完整链路；工程上也做了确定性随机、InstancedMesh、资源释放、自动化 QA 这些超出普通演示项目的建设。

但当前最需要补的不是“再加画面”，而是两件事：

1. **课堂里真的能用**：移动端 Web Speech、找一找边界、课堂 seek 后的朗诵恢复，仍然存在会影响老师上课的缺陷。
2. **发布证据真的可信**：官方 QA 结果来自旧提交，发布脚本会把 P1 skip 当成“全过”，文档又反过来把这些结果当成当前结论。

### 0.1 成熟度判断

| 维度 | 判断 | 依据 |
|---|---|---|
| 视觉与叙事 | **强** | 14 章画面与文案高度对齐；种子、根、芽、树、四季、鸟虫、水层均有可辨识画面；截图复核通过 |
| 课堂流程 | **中上** | 顶栏 7 工具、字幕、章节卡、教师提示、点认、找一找、四季合影均可用；但“按章讲解”仍依赖老师手动操作 |
| 移动端 | **中** | 390px 顶栏 4+3 两行、44px 命中区已达标；iOS Safari/微信的语音、全屏、安全区仍有风险 |
| 工程质量 | **中** | 单文件 4,875 行、无 package/lockfile、构建与 QA 写死本机路径；但 bundle 可重建、资源释放实测稳定 |
| 发布质量 | **偏弱** | 存在 2 个 P0 级“证据/门禁”问题：旧结果被当新结果、P1 skip 被当通过 |
| 文档质量 | **中** | 文档量大、结构好；但与当前代码的偏差集中在“每章停默认值、锁定、音色名称、哈希、缓存版本”这些关键语义上 |

### 0.2 如果只做六件事

1. **修 QA 门禁**：P0/P1 的 skip 不能放行；发布前必须在当前 HEAD 重跑全量。
2. **修 iOS/微信 Web Speech**：首次语音必须在用户手势同步栈内 `speak()`，并加 `onstart` 看门狗。
3. **修“幽灵叶子”和“seek 丢朗读”**：这是两个确定性的课堂交互 bug，修复成本低。
4. **给叶子加可见性门控、降 DPR/阴影**：种子期和冬季目前仍在画约 39 万个零尺寸三角形。
5. **加 `package.json` + CI 构建校验**：让“改 src 必须重建 app.js”从人的记忆变成流程。
6. **给老师加“按章讲解”预设、四季合影保存**：不改变默认“每章停关闭”，但让课堂组织更省力。

---

## 1. 审查方法与边界

### 1.1 做了什么

- 通读 `src/main.js` 的场景、时间轴、课堂模式、点认/找一找、四季合影、动画循环等关键路径；通读 `speech.js`、`bgm.js`、`index.html` 的结构与样式。
- 用项目指定 esbuild 重建到 `/tmp`，与仓库 `app.js` 比对：
  - `app.js` SHA256 `beb3fff560f257d6d1c6e5692fde3bf67f9d07ae5ab74aa9ecbad28b0e1f0e55`
  - 重建产物 SHA256 相同；说明当前 bundle **可重建**，但流程仍靠人工。
- 用 Chromium 在 `?dbg` 下读取 `renderer.info`、实例数、帧率；在 `?class&t0=...&freeze` 下实际点过顶栏、章节抽屉、教师提示、找一找、四季合影。
- 核对 `qa/data/catalog.json`、`results.json`、`history.json`、`tools/qa/registry.js` 与文档统计。
- 对照线上 `https://hrvs0769.github.io/tree-of-seasons/` 的 `index.html` / `app.js` 哈希，确认线上与本地当前 build 一致。

### 1.2 没有做什么

- **没有重跑 40–60 分钟全量 QA**：现有 `results.json` 是旧提交产物，这个问题本身已列为 P0；修复方式应是先修流程再重跑，不应把一次新的全量结果直接盖在旧结论上。
- **没有 iOS/Safari/微信真机**：当前环境只有 Chromium；因此 Web Speech 的 iOS 结论是“代码路径高风险 + 需真机确认”，不是“已在 iPhone 上复现”。
- **没有真实幼儿园课堂观察**：教师视角来自课堂模式的实际操作、截图与教研经验，不是对真实幼儿的测量。
- **没有修改任何产品代码**：本文只提出问题和建议；修复应在后续单独提交，并重新跑受影响 QA。

---

## 2. 高级开发工程师视角

### 2.1 结论

代码的“画面工程”明显强于“交付工程”。3D 场景的组织、确定性、资源释放、实例化都做得认真；但项目仍像一个**单人长期维护的作品**：4,875 行主文件、无依赖清单、无 CI、绝对路径、测试与文档多处靠手工同步。最危险的不是某个 shader，而是：

- 课堂互动里存在“看起来正常、实际不可见/无声”的假成功；
- QA 和发布流程存在“绿色但没测”的假通过；
- 文档把旧行为当成当前行为，给后续维护者错误前提。

### 2.2 P0：发布质量门禁（必须先修）

#### P0-1 发布脚本把 P1 skip 当成“P0/P1 全过”

**位置**：`tools/qa-run.js:446-448`、`tools/qa-release.sh:32-50`、`qa/data/results.json:23-30`

**问题**：

- `qa-run.js` 只在 `failedCases` 包含 P0/P1 时退出 1；如果只有 skip，退出 2。
- `qa-release.sh` 把退出码 2 一律解释为“P0/P1 全过，存在 P2 失败或跳过项”，并打印“可以部署”。
- 当前正式结果恰好有两个 **P1 skip**：
  - `PERF-06` 首屏加载耗时
  - `REL-02` 线上资源 md5

也就是说，性能预算和线上部署一致性这两个 P1 项没有被验证，发布脚本仍会放行。

**证据**：

```text
qa/data/results.json summary:
{ total: 109, auto: 101, manual: 8, passed: 99, failed: 0, skipped: 2, passRate: 1 }

skip 明细（按 catalog 优先级）:
PERF-06 skip P1 首屏加载耗时
REL-02 skip P1 线上资源 md5 一致
```

**建议**：

1. runner 对 P0/P1 的 skip 返回 1（或独立退出码 4），不能与 P2 skip 混在 2。
2. `qa-release.sh` 逐条读取 `results.cases` 与 `catalog.cases`，出现 P0/P1 非 pass 即阻断；如确需豁免，使用带 ID、原因、批准人、复核日期的白名单。
3. 看板与终端汇总分开显示 `passed / failed / skipped`，不要用 `passRate=1` 代替“全部通过”。

#### P0-2 官方/README 的“99 通过”来自旧提交，当前 HEAD 未做全量回归

**位置**：`qa/data/results.json:6`、`qa/data/history.json`、`README.md:22`、`docs/13-test-dashboard.md:158`

**问题**：

- 当前 HEAD：`6f83bb2`。
- `results.json` / `history.json` 最后一次正式 run 的 commit：`32225e7`。
- 两者之间 `src/main.js`、`src/speech.js`、`index.html`、`app.js` 都发生改动；`qa/data/catalog.json` 也有 23 处调整（如 CLASS-02 从 8 个按钮改为 7 个，CLASS-10 从“锁定”改为“锁定已移除”）。
- 因此“99 通过 / 0 失败 / 2 跳过”不是当前代码的完整回归结果。

更严重的是元数据不一致：

```text
results.json:
environment.baseUrl = https://hrvs0769.github.io/tree-of-seasons/
environment.testedBaseUrl = http://127.0.0.1:63702
```

看板显示 `BASE URL` 为线上地址，但实际测试跑在本地随机端口；`REL-02` 的 skip 消息也说当前 baseUrl 是本地地址。这会让读者误以为线上 md5 已经被测过。

**建议**：

1. 在 HEAD `6f83bb2` 重新跑全量 QA，或在看板明确标注“当前结果来自 32225e7，已过期”。
2. runner 写入 `commit`、`catalogHash`、`runnerVersion`、`testedBaseUrl`，看板在 `results.commit !== 当前 HEAD` 时显示过期横幅。
3. 不再手工编辑 `results.json`；如必须补字段，应由 runner 生成。

> 说明：这两条是本报告唯一的 P0。它们不是“产品会白屏”，但会让团队在没有真实验证的情况下发布，属于最高优先级。

### 2.3 P1：课堂、语音与质量体系（发布前应修）

#### P1-1 iOS/微信 Web Speech 很可能“按钮显示已开启，但完全不出声”

**位置**：`src/main.js:3412-3443`、`src/speech.js:207-216`

**问题**：`toggleVoice()` 先 `await speechReader.ensureAvailable(1200)`，随后才进入 `speakCurrentChapter()`；`speechReader.speak()` 内部又用 `setTimeout(..., 20)` 才调用 `synth.speak()`。iOS Safari 与 iOS 上的微信/Chrome 都走 WebKit，首次 `speechSynthesis.speak()` 通常要求在用户手势的同一调用栈内执行；经过 async await 和 20ms 延时后，transient activation 很可能已失效。

而 `speak()` 在真正 `synth.speak()` 之前就返回 `{ ok: true }`，`main.js` 立即把 `lastSpokenChapter` 设为当前章；如果系统静默忽略，既没有 `onstart` 也没有可靠的 `onerror`，按钮仍会保持 `aria-pressed=true`，老师只会看到“朗读已开启”。

**影响**：iPad/微信是幼儿园课堂最常见设备，这会让第五轮核心功能在最需要它的设备上“假成功”。桌面 Chrome 正常不能证明移动端正常。

**建议**：

- 首次开启：在 `#classVoiceBtn` 的 click 同步栈里调用一次 `synth.speak()`（可先发一个空 utterance 解锁），不要先 await。
- 语音列表未就绪时，把“准备语音”和“真正 speak”拆成两次用户动作，或先同步解锁再队列化。
- `speak()` 返回“已进入队列”，并加 `onstart` 1.5 秒看门狗：未触发则 `voiceOn=false`、显示 `#voiceNotice`。
- `FREEZE_T`/`VIDEO` 下 `toggleVoice()` 应直接拒绝，而不是把 `voiceOn` 设 true。

#### P1-2 “找一找”在第二年春开头会出“看不见的叶子”

**位置**：`src/main.js:3573`、`src/main.js:3588-3591`、`src/main.js:3657-3679`

**问题**：

- `partHasVisibleState('leaf')` 写成 `g > 0.13 && (p < 0.05 || p < 0.70)`，等价于 `p < 0.70`，没有检查 `leafAmount`。
- `partVisibleAt('leaf', 180)` 返回 true；`findablePartsAt(180)` 返回 `['leaf','branch','trunk']`；`partScreenPoints('leaf')` 仍有 981 个投影点。
- 但 `t=180` 时 `p=0`，`leafAmount = smoothstep(0, 0.05, 0) = 0`，24,513 个叶子实例全部压到 0.0001 缩放，实际 **0 个可见叶子**。

**影响**：孩子被问“找一找：叶在哪里？”，画面上却没有叶子；点空地也可能因为 981 个幽灵投影点命中而“找到”。这直接破坏找一找的教学意义。

**建议**：

- `partHasVisibleState` 接受 `t` 参数，按 `leafAmount` 或实际实例缩放判断；`partScreenPoints` 跳过 `sc < 0.002` 的实例。
- `findablePartsAt` 加边界回归：`179 / 180 / 180.5 / 181 / 184` 的候选集必须与实际画面一致。
- 同类检查扩展到 `flower / fruit / snow`，避免其他季节边界出现“看不见却可点”。

#### P1-3 课堂进度条/快捷键 seek 后会取消朗诵且不再恢复

**位置**：`src/main.js:3069-3076`、`src/main.js:3939-3967`、`src/main.js:4041-4044`

**问题**：`setStoryTime()` 无条件 `cancelSpeech()`；`#classProgress` 的 pointerup、键盘 Home/End/←→ 只恢复 `playing` 和 UI，没有重新 `speakCurrentChapter()`。对照 `endScrub()`（`3922-3927`）是有恢复逻辑的，说明问题只出在课堂进度条/全局快捷键这两条路径。

**影响**：老师按 README 推荐的“重讲某句”拖课堂进度条，当前章节声音会消失，直到下一章才恢复；如果同时开着 BGM ducking，还会让音乐恢复而人声没有，课堂体验非常怪。

**建议**：

- 抽出 `resumePlaybackAfterSeek()`，所有 seek 且恢复播放的入口统一调用：
  `if (classroomMode && playing && voiceOn) speakCurrentChapter();`
- 拖动过程中可以 `speechReader.pause()`，pointerup 再 `resume()`，避免每个 input 反复 cancel/speak。

#### P1-4 叶子实例全量绘制：种子期/冬天仍在画约 39 万个零尺寸三角形

**位置**：`src/main.js:2303-2310`、`src/main.js:4371-4415`

**问题**：

- `tree.leaves` 有 **24,513** 个实例，每个 `LEAF_GEO` 16 个三角形，合计约 **392,208** 个三角形。
- 叶子在种子期/冬季只被压到 0.0001 缩放，实例没有 `visible=false`，因此仍参与主渲染和阴影渲染；每帧仍然遍历 24,513 个 `leafData`，逐实例写 `setMatrixAt` / `setColorAt`。
- 实测：
  - `?t0=0&freeze`：591,256 triangles；把 `leaves.visible=false` 后 199,048，差值正好 392,208。
  - `?t0=210&freeze`：468 calls / 630,674 triangles。
  - Intel Iris Plus 1440×900 DPR2：约 27.9 FPS；DPR1 40.3 FPS。
  - `?t0=170`（第一年冬）：693,454 triangles，比夏天还高。
- `perf` 检查把 `calls >= 450` 当作正确性（见 P2-8），反而阻碍优化。

**影响**：教室常见低功耗核显/平板在投影分辨率下会卡顿；种子期本应是最轻的微距阶段，却承担了最重的叶子几何。

**建议**：

- 加 `tree.leaves.visible = leafAmount > 0.01 && g > 0.13;`；不可见时直接跳过整段 leaf 循环。
- `leaves.castShadow = false`，树冠阴影继续用已有 `treeShade` 平面近似；若必须保留叶影，阴影贴图降到 1024 或只在夏季开。
- 给 branch/root 设置正确的包围球并开启 `frustumCulled`；静态枝条可合并为少量 BufferGeometry。
- 自适应质量：`devicePixelRatio >= 2` 或低核显时把叶子上限降到 12k、`setPixelRatio(1.0–1.25)`、阴影 1024；按帧时间动态降档。

#### P1-5 构建与 QA 依赖写死的个人绝对路径，无法在干净机器/CI 复现

**位置**：`tools/qa-release.sh:7-8`、`tools/qa/harness.js:16,26-31`、`tools/ui-shot.js:11-15`、`README.md:123-124`、`DEVELOPMENT.md:44-47`

**问题**：

- `ROOT="/Users/<user>/WorkBuddy/Claw/tree-of-seasons"`
- `ESBUILD="/Users/<user>/Desktop/.../solar-system/node_modules/.bin/esbuild"`
- `PLAYWRIGHT_PATH = '/Users/<user>/.dsh/profiles/web/node_modules/playwright-core'`
- Chromium 候选写死 `chromium-1208`。
- 根目录没有 `package.json` / lockfile / `.github/workflows`。

当前 `app.js` 与重建产物逐字节一致，这是**在这台机器上的事实**，不是流程保证。换机器、换用户名或 CI 会直接失败。

**建议**：

- 增加 `package.json` + `package-lock.json`：`esbuild`、`playwright-core` 为 devDependencies；脚本 `build` / `qa` / `qa:release`。
- `qa-release.sh` 用 `$(git rev-parse --show-toplevel)` 和 `npm exec esbuild`；`harness` 改为 `require('playwright-core')`，保留 `PLAYWRIGHT_CORE_PATH` / `CHROME_BIN` 覆盖。
- CI 执行 `npm ci && npm run build && git diff --exit-code app.js`，让“提交的 bundle = 源码产物”成为硬门禁。

#### P1-6 “在线自然音优先”与“无需联网”的文档承诺冲突，且涉及朗读文本外发

**位置**：`src/speech.js:39-47`、`src/main.js:3432-3437`、`README.md:19`、`DEVELOPMENT.md:17`、`docs/06:15`、`docs/05:273`

**问题**：

- 代码优先 `localService === false` 的在线语音，名称含 Online/Natural/Neural 再加分；这类语音通常由浏览器/系统云端 TTS 合成。
- README/DEVELOPMENT/docs06 写“不需要联网 / 无网络依赖”，docs05 又写“在线自然音优先”；docs01 说“是否走网络由浏览器决定”。三者口径不一致。
- 当前课文是固定文本，不涉及儿童姓名；但如果未来接入老师自定义文本，在线 TTS 会把文本发到外部服务。课堂内网/弱网下，在线音还可能出现“列表有、speak 失败”。

**建议**：

- 课堂默认本机语音优先，在线音作为可选项（`仅本机语音 / 在线语音` 设置或 URL 参数）。
- 文档统一为“无自建后端；在线 TTS 可能联网”，不要写“无网络依赖”。
- `#voiceNotice`/教师手册明确告知在线语音会把朗读文本交给浏览器/系统语音服务。
- `navigator.onLine === false` 时不把在线音排首位，并对 `network`/`not-allowed` 错误回退本机音。

#### P1-7 语音状态真实性：失败时按钮仍可能显示开启；`故事姐姐` 称谓仍残留

**位置**：`src/main.js:3399-3401`、`src/main.js:3344-3360`、`index.html:1109`

**问题**：

- `speakCurrentChapter()` 的 `onerror` 只 `showVoiceNotice('error')`，没有把 `voiceOn` 设 false，也没有刷新按钮；如果错误不是 `canceled/interrupted`，按钮仍显示 `aria-pressed=true`。
- `#classVoiceBtn.title` 仍是 `'故事姐姐朗读'`，README/文档仍用“故事姐姐”；如果上轮用户说的“朗诵加上某某”指的是这个拟人化称谓，那么需求尚未完全闭环。

**影响**：老师看到“已开启”但无声音，无法判断是设备音量、语音包还是浏览器问题；同时“故事姐姐”这个称呼在悬停/读屏时仍会出现。

**建议**：

- `onerror` 统一执行 `voiceOn=false; lastSpokenChapter=-1; updateClassroomButtons(); showVoiceNotice('error')`。
- 按钮 `title` 改为“朗读本章旁白”或“朗读”，文档统一用“朗读”；如果产品需要品牌名，另设产品文案决策，不要与功能状态混在一起。

#### P1-8 文档头哈希整体过期，`REL-03` 又只校验格式，无法发现“文档落后于代码”

**位置**：`README.md:5`、`DEVELOPMENT.md:5`、`docs/01:5`、`docs/05:6`、`docs/06:5`、`docs/07:5`、`docs/12:5`、`docs/13:6`；`tools/qa/checks/extra.js:725-741`

**问题**：

- HEAD 是 `6f83bb2`，上述 8 份文档头部仍写 `5b1c469`；`docs/05` 的最后提交已经是 HEAD `6f83bb2`，却仍写旧哈希。
- `REL-03` 只读取 `docs/01`–`docs/11`，用正则要求“7–40 位十六进制”，没有和 `git rev-parse HEAD` 比较；`README`、`DEVELOPMENT`、`docs/12`、`docs/13` 不在检查范围。
- 结果就是：过期哈希可以一直 PASS，无法作为“文档基线”证据。

**建议**：

- 文档头统一写当前 HEAD；历史文档加 `状态：已冻结（frozen at <hash>）`。
- `REL-03` 改为比较文档声明的哈希与 HEAD（或 frozen 值），覆盖 README/DEVELOPMENT/docs12/docs13。
- 发布前用 `git diff --name-only` 检查文档改动，强制同步。

#### P1-9 `qa/CONTRACT.md` 与 runner 实际行为漂移

**位置**：`qa/CONTRACT.md:143-161`、`tools/qa-run.js:72-84,186-200,295-296,390-417`

**问题**：

- CONTRACT 没列 `--smoke`、`--release-fast`、`--retry-failed`、`--timeout`，但 docs/13 已在依赖这些参数。
- CONTRACT 只定义 `results.json`；实际 partial run 写 `results-smoke.json` / `results-release.json`。
- CONTRACT 说“每次运行追加 history”，实际 `if (!partialRun)` 才写（`390-417`）。
- CONTRACT 说“单条超时 45s”，实际 `GROUP_TIMEOUTS` 为 boot 120s / scene 240s / classroom 240s 等。
- CONTRACT 示例 `summary.total=104, auto=63, manual=41` 与“summary 只统计 auto”自相矛盾。

**建议**：升级 CONTRACT 到 v2，明确 CLI、结果文件、partial 语义、history 规则、超时优先级和 summary 字段；加一个 `contract-test` 自动比对 CLI/输出。

#### P1-10 `docs/13` 退出码说明错误：2 不是“配置错误”，3 才是致命错误

**位置**：`docs/13-test-dashboard.md:108`、`qa/CONTRACT.md:158`、`tools/qa-run.js:446-455`

**问题**：docs/13 写 `2 = 其它（配置/启动错误）`；实际 `2 = P2 fail 或任何 skip`，`3 = 参数/配置/启动等致命错误`。这与 P0-1 的发布门禁漏洞叠加，会让人误以为“有跳过只是配置问题”。

**建议**：以 CONTRACT 为唯一来源生成退出码表；docs/13 同步为 `0=全通过，1=P0/P1 fail，2=P2 fail 或 skip，3=致命错误`；`qa-release.sh` 注释写明 2 包含 P1 skip 的风险。

#### P1-11 自动化检查注册错位：registry 134 个检查，实际只执行 100 个；STORY-01 与 STORY-05 共用同一检查

**位置**：`tools/qa/registry.js:38-65`、`tools/qa/checks/story.js:8-9`、`qa/data/catalog.json`

**问题**：

- `checks total 134 / used 100 / unused 34`；34 个 orphan 检查包括 `release.rootResources`、`release.bgmRange`、`release.no404`、`release.appJsFresh`、`release.noConsoleErrors` 等发布关键检查。
- `STORY-01`（14 章数据边界，P0）的 key 是 `story.chapterCount`，但 registry 把它解析成 `story.chapterRail14` 的 alias；`STORY-05` 也解析成同一个检查。因此 `start=0`、`end=260`、相邻章节无缝等数据边界从未被验证。
- `PLAY-10` 只测 ←/→/PageUp/PageDown，未测 Space/Home/End；`EXPLORE-07` 未使用 `explore.findGameCorrect`；`CLASS-04` 未使用 `class.progressKeyboard`；`A11Y-06` 只测 3 个课堂按钮，docs/12 说 4 类（含音乐）。

**建议**：

- 启动时做 catalog ↔ registry 一致性门禁：每个 auto case 必须映射到唯一检查；出现 orphan 或一对多映射直接失败。
- 为 `STORY-01` 写真正的章节数据边界检查；把 orphan 检查纳入 catalog 或删除。
- 同时把 `A11Y-06` 的“音乐 + 3 个课堂开关”补全，并更新 docs/12。

#### P1-12 真实设备与 Web Speech 覆盖严重不足：CLASS-15 是 mock

**位置**：`tools/qa/harness.js:26-31`、`tools/qa/checks/classroom.js:315-383`、`qa/data/catalog.json` 中 CLASS-11/CLASS-15

**问题**：

- runner 只启动 Chromium；catalog 中没有 Safari / iOS / iPhone / iPad / 微信 / WebKit / Firefox 关键词。
- `CLASS-15` 通过 `window.__classroom.speech.setVoicesForTest([...])` 注入假语音列表，只验证排序/降级状态；没有真实 `speechSynthesis`、`voiceschanged`、系统语音包缺失、实际发声、BGM ducking 的验证。
- `CLASS-11` 只有一条人工“故事姐姐朗读”，没有按设备记录结果。

**影响**：项目核心卖点是课堂 Web Speech，但最可能失败的 iPhone/Safari/微信路径没有被覆盖；P1-1 的 iOS 风险无法提前发现。

**建议**：

- 增加 Playwright `webkit` 项目（至少 macOS WebKit）与 iPhone/Android device profile；建立 Safari iOS、微信、Android Chrome、Edge 的人工矩阵。
- CLASS-15 保留 mock 单测，但另设“真实语音 smoke”与“无语音包真机验收”。

#### P1-13 公开 GitHub 仓库包含个人绝对路径，违反 docs/06 自己的部署安全规则

**位置**：`docs/06-build-and-deploy.md:214`、`qa/CONTRACT.md:4,161`、`DEVELOPMENT.md:43-44`、`tools/qa-release.sh:7-8`、`tools/qa/harness.js:16`

**问题**：docs/06 写“部署仓库是公开的：不要放入个人路径或密钥”，但线上 `qa/CONTRACT.md`、`DEVELOPMENT.md`、`tools/qa-release.sh`、`tools/qa/harness.js` 都包含 `/Users/<user>/...`。公开仓库已验证为 public，`https://hrvs0769.github.io/tree-of-seasons/qa/CONTRACT.md` 可直接看到个人路径。

**影响**：泄露用户名、home 目录布局、桌面项目结构；也让 QA 脚本对任何其他机器不可用。不含 token，但属于明确的隐私/工程卫生问题。

**建议**：脚本/文档统一 `$(git rev-parse --show-toplevel)`、`$HOME`、`PLAYWRIGHT_CORE_PATH`/`CHROME_BIN`；部署前用 `grep -R '/Users/'` 扫描并阻断。

#### P1-14 远程 GitHub 仓库没有任何 Git 标签，docs/06 的回退承诺不成立

**位置**：`docs/06-build-and-deploy.md:73`、`tools/qa/checks/extra.js:745-753`

**问题**：本地有 19 个标签（`pre-round2`、`round2-v1`、`round5-v1` 等），远程 `gh api repos/hrvs0769/tree-of-seasons/tags` 数量为 0；`REL-04` 只检查本地 `git tag`，所以通过。从公开仓库克隆无法 checkout 任何回退版本，文档“遇到线上回归优先切回 pre-round2”不可执行。

**建议**：执行 `git push --tags`；`REL-04` 同时检查 `git ls-remote --tags origin`；docs/06 写明本地/远程标签同步命令。

#### P1-15 文档默认值写反：docs/05 说进入课堂 `setAutoPause(true)`，代码是 `false`

**位置**：`docs/05-ui-and-audio.md:245`、`src/main.js:3514`

**问题**：用户刚刚明确要求“每章停默认关闭”，代码 `enterClassroomMode()` 已改为 `setAutoPause(false)`；docs/05 §19 仍写 `setAutoPause(true)`，且 docs/12 的 CLASS-06 也缺少“默认 autoPauseAtChapter=false”。

**影响**：老师/维护者按文档会以为进入课堂就每章停，实际不会；交接时可能把默认值改回去，直接违反用户要求。

**建议**：docs/05 改为 `setAutoPause(false)`；docs/12 的 CLASS-06 明确“默认关闭，测试中显式开启”；在 QA 中增加 `enterClassroomMode` 后 `autoPauseAtChapter === false` 的断言。

#### P1-16 打开章节/教师提示/四季合影弹层时，剧情在背后继续走

**位置**：`src/main.js:3229-3246`（`openModal`）、`src/main.js:3844-3874`（`captureQuartet`）、`src/main.js:4033-4055`（C/T/Q 快捷键）

**问题**：

- `openModal()` 只处理焦点/inert/滚动，不暂停 `playing`；打开「章节」「教师提示」「四季合影」时，3D 故事时间继续推进。
- 实测打开章节抽屉 3 秒，故事时间走了约 3 秒；教师提示/四季合影同理。第 6 章 14 秒、第 7 章 12 秒，老师看提示 3 秒就可能整章错过。
- `captureQuartet()` 内部把 `playing` 设为 false 来拍四张图，但 `finally` 会把 `old.playing` 恢复为 true；合影弹层打开后故事继续在背后播。

**影响**：这是课堂里最隐蔽的“时间丢失”：老师以为只是打开一个提示，实际学生已经错过章节；比“每章停默认关闭”更影响可控性。

**建议**：

- 在 `openModal()` 里统一记录 `modalResumePlaying = playing` 并 `playing=false; syncPlayer();`；关闭时按 `modalResumePlaying` 恢复（或保持暂停并显示“已暂停 · 空格继续”）。
- `captureQuartet()` 打开弹层后不要恢复 `playing=true`；恢复由关闭弹层触发。
- 加 QA：打开章节/教师提示/合影后 1 秒，`storyTime` 不增长；关闭后按预期恢复。

### 2.4 P2：工程、兼容与可访问性

| ID | 问题 | 位置 | 影响与建议 |
|---|---|---|---|
| P2-1 | `?freeze` / `?video` 初始化仍调用 `audio.play()`，并 `preload="auto"` 下载 3.7MB BGM | `src/bgm.js:199-208`、`index.html:1245` | 截图/录课可能混入 BGM，弱网首屏变慢；初始化前判断 `playerEl.style.display === 'none'`，改 `preload="metadata"`，freeze/video 直接 `audio.muted=true` 且不 play |
| P2-2 | `partHasVisibleState()` / `partWorldPoints()` 读取全局 `storyTime`，与 `partVisibleAt(part,t)` 的 `t` 不一致 | `src/main.js:3563-3602`、`3635-3641` | 测试/合影/未来多时间点查询会得到“按当前帧判断”的错误结果；把 `t` 一路传下去，纯函数不读全局 |
| P2-3 | `captureQuartet()` 不取消朗诵；4 张 dataURL 常驻 DOM | `src/main.js:3844-3874`、`3826-3834` | 合影时旧章节声音还在读；低端 iPad 连拍内存峰值；捕获前 `cancelSpeech()`，结束按原状态恢复；改用 Blob URL 并 revoke |
| P2-4 | `requestWakeLock()` 异步竞态：退出课堂后 Promise 仍可能把 `wakeLock` 写回 | `src/main.js:3462-3468`、`3526`、`3536` | 退出后屏幕仍常亮、耗电；await 后检查 `classroomMode`，不匹配立即 release，监听 `release` 事件 |
| P2-5 | canvas `role="application"` 只有操作说明，没有画面等价文本 | `src/main.js:2749-2751`、`index.html:937` | 读屏用户不知道当前章节/画面内容；改 `role=img` + `aria-describedby` 指向字幕/章节说明，或增加 `aria-live` 摘要 |
| P2-6 | `#partCard` 关闭不还焦点；`inert` 无降级；`focusableIn` 依赖 `offsetParent` | `src/main.js:3705-3736`、`3216-3256` | 键盘老师关闭点认卡后焦点丢失；旧 Safari 弹层可穿透；记录并恢复 `lastFocused`，用 `getClientRects()`/`checkVisibility()` |
| P2-7 | `prefers-reduced-motion` 只压缩 CSS，3D 树摆/雪/雨/尘埃仍动 | `src/main.js:2642-2643`、`4513-4554`、`4702-4705` | 前庭敏感用户仍看到持续运动；`REDUCED_MOTION` 时把 `dt=0` 或粒子/树摆幅度降到 10%，监听媒体查询变化 |
| P2-8 | 性能门禁“倒置”：`calls >= 450` 才算对，`triangles >= 300000`，优化到更低反而失败；`perf.loadTime` 在软件 GL 下永远 skip | `tools/qa/checks/perf.js:25-44,110-111` | 形成“越重越对”的反向激励；改为纯上限 + `t0=0/180/210` 多点采样；loadTime 记录为环境观察项，不要用 skip 掩盖 |
| P2-9 | 没有 `env(safe-area-inset-bottom)`，`viewport-fit=cover` 下 iPhone home indicator 可能压住课堂底栏 | `index.html:5`、`index.html:506-510`、`819` | 手机课堂底部控件被遮挡；给 `#classroomBar`/`#player` 加 safe-area padding，并相应调整 `--class-bottom` |
| P2-10 | `snapshotCanvas()` 使用默认 `preserveDrawingBuffer:false` 的 WebGL canvas 直接 `drawImage` | `src/main.js:3826-3834`、`123` | Safari/iOS 部分 GPU 可能得到黑图/空图；四季合影在 Chromium 通过不等于 Safari 通过；用 RenderTarget 读像素或专用截图 renderer |
| P2-11 | 全屏失败提示“按 F11”是桌面文案；`wakeLock` 不可用时静默 | `src/main.js:3478-3484`、`3462-3464` | iPad/微信老师被指向错误操作，屏幕可能自动熄灭；按设备给“浏览器全屏/横屏”提示，并显示常亮状态 |
| P2-12 | 全局覆盖 `Math.random`，所有后续代码的随机都变成同一条序列 | `src/main.js:34-36` | 可复现有收益，但新增任何随机调用都会改变后续贴图/树，难定位；保留 `mulberry32`，改为显式传参 `rand` |
| P2-13 | `innerHTML` 多处拼接；生产页常驻 `window.__classroom`/`?dbg` 探针 | `src/main.js:3020,3310-3328,3780,3860-3881,4817-4874` | 当前常量安全，但未来接入自定义文案/姓名会直接 XSS；生产构建关闭测试钩子，HTML 统一走 textContent/转义 helper |
| P2-14 | 其余文档漂移簇：docs/05 `?v=round3`；docs/07 说按钮 title 显示“在线自然语音”；docs/11 仍写 8 按钮/锁定层/`touchLocked`；docs/12 与 catalog 有 6 处字段差异；README 第四轮小节写成 109/101；docs/06 把 `lib/three.module.min.js`、`src/speech.js` 列为必须部署（实际已打进 `app.js`） | `docs/05:255`、`docs/07:215`、`docs/11:98,107,156,212,254`、`docs/12` 全文、`README.md:25-29`、`docs/06:159-164` | 老师/维护者会按错误默认值操作，或误以为锁定仍存在；以 catalog/代码为唯一源生成文档，历史文档加 frozen 标记 |
| P2-15 | partial run 元数据混乱：`results-release.json` 与 `results-smoke.json` 同日 runId 都为 `20261108-007`；summary 仍是 total 109/auto 101，容易误读为“109 条中 22/12 条 100% 通过” | `tools/qa-run.js:118-130,186-189`、两个 results 文件 | 审计/归档不可用；增加 `mode`、`selected`、`catalogTotal`、独立 runId 序列，`status=partial` |
| P2-16 | `--retry-failed` 只读 `results.json`，不读 `results-smoke.json`；可能把旧版本 pass 合并进新版本；`--smoke --retry-failed` 的 `cases` 数量会异常 | `tools/qa-run.js:186-200,390-417`、`docs/13:88` | 文档推荐的中断恢复流程不可用；校验 version/commit/catalogHash，支持显式 `--results`，无待重跑项时直接退出 |
| P2-17 | 部署文档的 `cp -R` 是叠加复制而非干净快照；`cp -R docs/* ... || true` 吞错；`rsync --delete qa/` 可能删线上证据 | `docs/06:102-116` | 旧 docs/assets 残留、docs 复制失败不阻断、证据误删；用 staging + manifest + `set -e`，部署前打印文件清单 |
| P2-18 | `REL-06` 依赖 `/tmp/tree-of-seasons-deploy` 是否存在；当前该目录只有 `.git`、没有 `.nojekyll`，下次全量会误判 | `tools/qa/checks/extra.js:773-793` | QA 结果受外部临时目录影响；用 `QA_DEPLOY_DIR` 指向干净临时目录并自行准备快照，或移除该检查 |
| P2-19 | BGM 音频没有 cache-busting；缓存参数文档仍写 round3 | `index.html:1245-1247`、`docs/05:255`、`docs/12:218` | 换曲后可能听旧音频；用统一 `ASSET_VERSION` 注入 app.js/bgm.js/audio，文档只引用该常量 |
| P2-20 | 关键覆盖盲区：全屏、触摸、断网、BGM 加载失败、`localStorage` 禁用、连续 4:20 长播均无自动或明确人工项 | `qa/data/catalog.json`、`docs/12`、`tools/qa/checks/boot.js`、`perf.js` | 这些正是课堂现场最常见的故障；新增全屏断言、Playwright touch、网络拦截、存储沙箱、连续长播 heap 采样，并写入人工清单 |
| P2-21 | `?class` 直达会立即自动播放，且不请求全屏；开始页“自动全屏”只在 `#startClassBtn` 路径成立 | `src/main.js:4837`、`src/main.js:3496-3527`、`index.html` 开场页文案 | 老师打开直达链接时孩子还没坐好、浏览器地址栏还在；建议 `?class` 先显示“开始上课/暂停待开始”浮层，首次点击请求全屏，或提供 `?class&autoplay=0` |
| P2-22 | 教师提示弹层文案说“只在老师操作时显示，不投影到小朋友画面”，实际是全屏弹层，电脑镜像投影时孩子会看到 | `index.html` 教师提示说明、`src/main.js:3229-3246` | 老师会误以为问题不会投出去，实际提前暴露答案；改文案/做成右侧抽屉或双屏教师窗口 |
| P2-23 | 找一找命中后只 `stopFindGame()`，没有「继续播放 / 再找一个」入口 | `src/main.js:3800-3823` | 课堂会停在画面，老师转身组织下一环节后容易忘点播放；在点认卡底部加「继续播放」「再找一个」两个按钮 |

### 2.5 P3：清理项

- **死代码**：`autoPausePending`（`src/main.js:2868` 起）只赋值不读取；`classSeasonEl` 更新但 CSS 永远 `display:none`；`speechReader.pause/resume/isPaused` 未接线。
- **锁图标残留**：锁定功能已移除，但 `index.html:932` 仍保留 `#i-lock` symbol；`docs/05:29` 仍按 15 个图标统计。建议删除或标注“未使用保留”。
- **旧媒体**：仓库仍跟踪 `tree-of-seasons.mp4`（34MB）与 `tree-of-seasons-bgm.wav`（10MB），与当前网页无关；建议移到 `archive/` 或 Git LFS，部署清单只保留 `app.js`、`src/bgm.js`、`assets/tree-of-seasons-bgm-v3.mp3`。
- **测试 fixture 重复**：`tools/qa/expected.js` 复制了 `src/main.js` 的 14 章数据；建议抽 `src/chapters.js` 共享或由测试构建暴露只读 `__chapterMeta`。
- **QA 超时定时器**：`tools/qa-run.js:301-302` 的 `Promise.race` 没有 `clearTimeout`；101 条用例会留下大量 pending timer，当前 `process.exit` 掩盖了问题。
- **文档格式/行数**：`docs/01` 与 `docs/06` 仍写 `main.js` 约 4.4k 行（实际 4,875）；`docs/06:45` blockquote 少 `>`；`docs/07` 第 8 节编号从 8 跳到 10。
- **文档架构**：`DEVELOPMENT.md` 252 行同时承担概况、目录、架构、关键概念、常见任务、已知限制，与 docs/01–07 大量重复；建议拆成“入口/索引”+ ADR，历史计划移到 archive。

### 2.6 架构与可维护性专项

| 指标 | 当前值 | 判断 |
|---|---:|---|
| `src/main.js` | 4,875 行 | 单文件承载场景、时间轴、UI、课堂、点认、找一找、合影、渲染循环；建议拆分 |
| `index.html` | 1,249 行 / 约 51KB 内联 CSS | 样式与 DOM 耦合；建议抽 `src/styles.css` |
| `app.js` | 648KB 生成物 | 可继续提交，但必须有 CI 校验 |
| `qa/` | 13MB 证据 | 可部署；注意 `results-smoke/release` 不要误发布 |
| 依赖清单 | 无 `package.json`/lockfile | 构建/QA 无法在干净机器复现 |
| 自动化检查 | registry 134 个，实际使用 100 个 | 34 个 orphan 检查，STORY-01 与 STORY-05 共用同一检查 |

**拆分建议（不要求一次完成）**：

1. `src/chapters.js`：章节数据 + 教师提示 + PART_INFO；供 main 与 QA fixture 共用。
2. `src/scene.js`：`buildTree`、地形、天空、粒子；输入 seed/rand，输出 scene。
3. `src/classroom.js`：课堂状态、语音、找一找、合影；通过 small API 与渲染层通信。
4. `src/ui.js`：播放器、快捷键、弹层、DOM。
5. `src/main.js` 只做装配与 `animate()`；未来可以按需加载。

**不要改的部分**：

- 不要为了“解耦”重写树/根系生成；当前 `InstancedMesh`、`disposeTree`、确定性随机的基础是对的。
- 不要把 `app.js` 移出仓库而不提供稳定构建；GitHub Pages 需要它。
- 不要为了性能把 `LEAF_GEO` 退回逐叶 Mesh；先做可见性门控和阴影/DPR 优化即可。

---

## 3. 幼儿园教师视角

### 3.1 我怎样理解这个项目

如果把它交给我的班，我会把它当成一节 **15–20 分钟自然观察集体活动**里的“3D 画面 + 提词器”，不是放给孩子自己看的动画片。

它不是“点开就上完”的课：需要老师带着看、随时暂停、边看边问、边做动作。14 章、4 分 20 秒是一个完整的故事，但对 3–6 岁孩子来说，更像 **3 个教学片段**，而不是一节课从头放到尾。

如果明天上课，我会这样用：

> 先打开 `?class`，用 30 秒检查声音/全屏/投影；把「每章停」打开，按“种子—小树—四季”分三段；每段结束问一个问题、做一个动作；最后用「四季合影」回顾，再让孩子指出自己最喜欢哪个季节。

> **一个产品取舍要说清**：从教研角度，很多老师希望进入课堂就默认“章末暂停”；但本项目的负责人已明确要求“默认不要选每章停”。因此本报告不建议把全局默认值改回开启，而是建议在开场页提供“按章讲解”预设——谁需要谁选择，默认仍是连续观看。这样既尊重产品决定，也解决老师忘记开暂停的问题。

### 3.2 做得好的地方

1. **故事线完整，孩子能“看见变化”**：种子入土 → 春雨 → 扎根 → 破土 → 小树 → 大树 → 四季，画面和旁白基本一一对应；不是只有一棵静态树。
2. **地下根系是少见的亮点**：大多数树木课件只画地上，这个项目把根扎到含水层、画出侧根和根毛；对大班孩子讲“根在土里做什么”很有说服力。
3. **大字幕和关键词高亮适合集体观看**：1440×900 下字幕约 33px，关键词用薄荷绿标出；老师可以照着念，孩子也能注意到“种子、根、芽、叶、花、果”。
4. **教师提示卡很实用**：每章都有“可以问 / 可以动”，例如“先钻出来的是叶子，还是根？”“双手向下伸，学根往泥土深处钻”；这不是装饰，是真正的课堂脚本。
5. **每章停是可选功能**：默认关闭符合“先看完整故事”的场景；打开后停在章节边界并显示“继续播放”，老师可以提问后再走。
6. **点认卡有拼音和专用字**：种子/根/树干/树枝/叶/花/果/雪/小鸟/昆虫，适合大班识字启蒙；点击位置锚定，孩子能对应“我说的就是这里”。
7. **找一找有成功/错误反馈**：点对显示“找到啦”，点错只提示再试；错误 toast 在底部，不盖住任务条，课堂秩序不容易被打断。
8. **四季合影适合回顾**：四张图同构图、不同季节，最后问“你最喜欢哪个季节？”很自然；比单张截图更适合做课堂总结。
9. **退出保留进度**：老师误触或临时切走，再回来可以继续；对课堂设备切换很实用。
10. **手机端没有把画面挡死**：390×844 下顶栏 4+3 两行、每个 44px，字幕和底栏都在画面外；老师在手机上也能操作。
11. **投影增亮是刚需**：教室投影常把深色画面洗灰，增亮能救回树冠和土壤层次；虽然只作用于 canvas，但至少方向对。
12. **无声音也能上课**：朗读默认关闭、文字旁白始终显示；不会因为语音包缺失而让孩子无事可看。

### 3.3 会卡住的地方

#### 课前

- **`?class` 直达到手就自动播放，而且不请求全屏**：孩子还没坐好第 1 章已经开始；页面还留着浏览器地址栏，投影出来不干净。浏览器全屏只能靠老师自己按 F，开场页没有“一键全屏”提示。
- **没有课前检查/弱网兜底**：项目要求线上部署、不提供离线课堂包（这是产品约束），但至少要有网络/加载状态提示和重试；目前没有“一键检查声音/全屏/网络”的入口，弱网时老师只能干等。
- **“自动全屏”在 iPad/微信上不成立**：开场页写着“自动全屏”，但 iOS Safari 不支持 `requestFullscreen`，微信内置浏览器也常拦；失败提示却写“按 F11”，老师在手机上找不到 F11。
- **没有声音检查**：老师不知道本机有没有中文语音、BGM 会不会被浏览器拦截；上课后才发现“朗读已开启但没声”，现场很难处理。
- **“每章停”默认关闭，容易忘记打开**：这是用户明确要求的状态，我理解；但课堂老师第一次用很容易让 14 章直接播完。需要一个“按章讲解”的入口，而不是把默认值改回去。
- **教师提示要打开弹层**：弹层会盖住树，老师没法一边指着树一边读问题；如果打印成一张小卡片，或做成可停靠的侧栏，会更顺手。

#### 课中

- **4 分 20 秒对 3–6 岁偏长**：14 章并非都是 16–24 秒——第 1–2 章 16 秒、第 3 章 24 秒、第 4 章 20 秒、第 5 章 18 秒、**第 6 章 14 秒、第 7 章 12 秒**、第 8–14 章各 20 秒；平均约 18.6 秒。最精彩的第 6、7 章反而最短，孩子刚“哇”完就切走；小班通常 5–8 分钟注意力，直接整段播放会后半程散掉。需要明确的三段式或按班龄裁剪。
- **打开章节/教师提示/四季合影时剧情还在走**：老师看提示 3 秒，故事就少 3 秒；第 7 章只有 12 秒，一次查看就可能整章跳过。这是课堂里最隐蔽的时间丢失。
- **教师提示的“不会投影”文案与实际不符**：教师提示是全屏弹层，电脑接投影时孩子会看到问题；老师如果按文案理解，会把答案提前投出去。
- **找一找命中后没有「继续播放」**：找到后画面停住，老师转身组织下一环节就忘了继续，课堂会停在原地。
- **词汇偏抽象**：子叶、真叶、侧根、养分、腐烂、轮回，这些词对 3–6 岁不直观；老师必须现场翻译成“小种子喝饱水、硬壳裂开、根像手指往下钻”等话术。
- **找一找对小手太难**：树冠上的叶子、树枝在投影上很小；没有提示光圈，孩子点两三次找不到就失去兴趣。需要“找一找提示/放大镜/更大命中区”。
- **7 个顶栏按钮对老师来说偏多**：章节、教师提示、找一找、四季合影、每章停、增亮、退出都在一排；找一找和退出相邻，虽然有退出确认，仍容易误触。
- **朗诵在 iPad/微信可能没有声音**：按钮显示“朗读已开启”，但系统静默；老师会以为是音量问题，实际需要换浏览器/装语音包。这是最影响课堂节奏的故障。
- **“故事姐姐”这个称呼**：如果老师想把它当工具，叫“朗读”更直接；“故事姐姐”会让孩子期待一个角色，但声音可能只是本机婷婷，落差大。
- **四季合影不能保存**：四张图很好看，但只能看，不能一键存下来发给家长/做班级记录；老师只能用手机拍屏幕，效果差。
- **投影增亮不增字幕**：增亮只改 canvas，字幕/按钮仍是深色；在很亮的教室里，老师可能看得清树，看不清控制条。

#### 课后

- **没有课堂记录/回顾材料**：没有“本节课看了哪些章节”“孩子指认了哪些部位”的记录；老师做家园共育要自己整理。
- **没有打印材料**：四季合影、点认卡、找一找题目都可以做成一张观察纸，但目前没有导出/打印。
- **没有分龄建议**：小班/中班/大班应该看哪几段、问什么问题，文档里没有一页教师速查卡；新老师上手成本高。

### 3.4 具体改进建议

#### 马上能改（1–2 天）

1. **开场页加“课前 30 秒检查”**：声音测试（播放一句“小朋友们好”）、全屏状态、投影增亮、每章停开关；让老师进课堂前就知道设备行不行。
2. **把“朗读已开启”改成“真的开始读”才提示**：加 `onstart` 看门狗；未触发就显示“没有声音，请检查系统语音包”，避免假成功。
3. **删掉“故事姐姐”称谓**：按钮统一“朗读”，提示统一“朗读已开启/朗读已关闭”；如果产品要保留角色，另做品牌决策。
4. **找一找加提示**：8 秒未点中或错 2 次后，在目标附近显示柔光圈；命中范围从 40–80px 再放宽 20%；错误提示改成“再找找看，它在这边”并给方向。
5. **四季合影加“保存图片”**：`canvas.toBlob()` 下载 JPG/PNG；再加“打印”或“复制到剪贴板”，方便家园共育。
6. **章节抽屉加“重讲本章”**：点当前章卡片时从本章 `start` 重播，不要只跳进度；老师重讲一句时不用拖细进度条。

#### 下个版本（1–2 周）

7. **两个课堂预设**：开场页给“连续观看”和“按章讲解”两个按钮；后者自动打开每章停 + 教师提示，默认仍是连续观看（不违背“默认不要每章停”的要求）。
8. **儿童版/教师版旁白**：儿童版把“子叶、真叶、侧根、养分、轮回”换成短句和比喻；教师版保留科学词，附一句“可以这样解释”。
9. **一页教师速查卡**：三段时间、每段 2 个问题、1 个动作、1 个找一找目标；打印 A4，放讲台。
10. **投影模式增强**：不只增亮 canvas，还把字幕字号 +10%、按钮对比度提高；提供“高对比/大字”开关。
11. **分龄模式**：小班 8 章精简版（约 2 分半：种子、春雨、生根、发芽、大树、夏、秋、冬/新芽）、中班 0–120 秒 + 一个季节、大班完整 4:20；一键切换。
12. **四季合影保存/打印模板**：四格图 + 课题名 + 日期 + 孩子姓名留白，直接打印或发家长。

#### 长期（1–2 个月）

13. **教师端课堂记录**：本地保存“今天看到第几章、孩子指认了哪些部位、找一找完成情况”；不一定要后端，localStorage 即可。
14. **无障碍与多设备**：Safari/iPad/微信真机矩阵；离线本机语音方案；字幕可调字号；语音失败自动回退。
15. **课程包**：把 14 章拆成 3 个 1–2 分钟微课 + 1 个四季回顾；支持家庭观看和课堂两种节奏。

### 3.5 如果只改三件事

1. **加“按章讲解”预设**：让老师一键获得“每章停 + 教师提示 + 找一找”的课堂节奏，同时保留“连续观看”的默认入口。
2. **让找一找变简单**：目标柔光圈、错两次给方向、命中范围更大；否则孩子玩两次就不玩了。
3. **四季合影可保存/打印**：这是老师最愿意带出课堂、发给家长的东西；没有保存，这个功能的价值少一半。

### 3.6 一页课堂速查（给老师）

| 时间 | 看什么 | 老师可以问 | 可以这样动 |
|---|---|---|---|
| 0:00–1:16（第 1–4 章） | 种子、春雨、裂壳、主根/侧根、破土、子叶 | “种子住在哪里？先长出来的是根还是叶？” | 抱膝当种子；手指点膝盖当春雨；双手向下学根 |
| 1:16–2:00（第 5–7 章） | 幼苗、真叶、茎变粗、小树成形、96–106 秒有雨 | “小树被风吹，为什么没有倒？” | 左右摇摆像小树；手掌摊开当叶子晒太阳 |
| 2:00–4:20（第 8–14 章） | 第一年夏/秋/冬、第二年春/夏/秋/冬、花/果/雪/鸟虫 | “叶子落了以后去了哪里？”“果实里藏着什么？” | 双手搭凉棚；手指转圈学落叶；捧手当果实；画一个大圆圈表示四季轮回 |

**课前 30 秒**：打开 `?class` → 点「音乐」确认音量 → 点「朗读」听一句 → 打开「每章停」→ 点「增亮」→ 全屏。
**课后 1 分钟**：点「四季合影」→ 保存/打印 → 问“你最喜欢哪个季节，为什么？”

---

## 4. 结论与建议的优先级

| 优先级 | 事项 | 为什么现在做 |
|---|---|---|
| **P0（本周）** | 修 P1 skip 门禁；在当前 HEAD 重跑全量并刷新看板 | 否则所有“通过”都不可信 |
| **P1（立即）** | iOS/微信 Web Speech 同步 speak + 看门狗；seek 后恢复朗读 | 直接影响课堂核心功能 |
| **P1（下一轮）** | 找一找幽灵叶子；叶子可见性/阴影/DPR；package/CI | 课堂正确性 + 性能 + 可维护性 |
| **P1（下一轮）** | 文档哈希/默认值/缓存版本修正；registry 一致性 | 避免后续维护者按错前提工作 |
| **P2（计划）** | 移动端安全区、Safari 合影、wake lock 竞态、a11y 文本、部署快照 | 提升真实设备可用性 |
| **P3（清理）** | 死代码、i-lock、旧视频/音频、ADR、文档格式 | 降低长期维护成本 |

**产品建议一句话**：先把“老师真的能稳定上完一节课”做扎实，再考虑增加新的 3D 内容。当前项目最值钱的不是更多树，而是“一棵树能被老师放心地带进课堂”。

---

## 5. 附：关键证据与复现命令

```bash
cd "$(git rev-parse --show-toplevel)"

# 1) 当前 HEAD 与官方结果提交
git rev-parse --short HEAD                 # 6f83bb2
python3 - <<'EOF'
import json
r = json.load(open('qa/data/results.json'))
print(r['commit'], r['summary'])
print([(c['id'], c['status']) for c in r['cases'] if c['status'] != 'pass'])
EOF

# 2) P1 skip 明细
python3 - <<'EOF'
import json
c = {x['id']: x for x in json.load(open('qa/data/catalog.json'))['cases']}
r = json.load(open('qa/data/results.json'))
for x in r['cases']:
    if x['status'] != 'pass':
        print(x['id'], x['status'], c[x['id']]['priority'], c[x['id']]['title'])
EOF

# 3) 找一找幽灵叶子
# 浏览器打开 ?class&t0=180&freeze
# window.__classroom.partVisibleAt('leaf', 180)     -> true
# window.__classroom.findablePartsAt(180)           -> ["leaf","branch","trunk"]
# window.__classroom.partScreenPoints('leaf').length -> 981
# 实际可见 leaf instance scale > 0.0005 的数量 -> 0

# 4) 叶子实例与渲染统计
# ?dbg&ui=1&t0=0&freeze   -> 591,256 triangles；leaves.visible=false 后 199,048
# ?dbg&ui=1&t0=210&freeze -> 468 calls / 630,674 triangles
# ?dbg&ui=1&t0=170&freeze -> 693,454 triangles

# 5) bundle 可重建
"$ESBUILD" \
  src/main.js --bundle --format=iife --minify \
  --alias:three=./lib/three.module.min.js \
  --outfile=/tmp/app-check.js --log-level=warning
shasum -a 256 app.js /tmp/app-check.js
```

### 5.1 可接受/不建议回退的部分

- **`app.js` 提交入库**：对 GitHub Pages 纯静态部署是合理取舍；当前与源码重建一致。应加 CI 校验，而不是删除。
- **`disposeTree`/`disposeEnvironment`**：连续 replant 5 次，`geometries`/`textures` 稳定在 454/26；共享几何（`LEAF_GEO`/`CROSS_GEO`）故意不 dispose 是对的。
- **InstancedMesh 叶子/草**：实例化方向正确；性能问题只需加可见性门控/阴影/DPR，不要退回逐叶 Mesh。
- **当前 `innerHTML`**：所有输入是硬编码常量，没有可利用 XSS；未来接自定义文本再统一转义。
- **BGM 200ms 同步**：单页生命周期内一个实例，观感比 rAF 简单；只需处理 freeze/video 的初始播放和预加载。
- **`setTimeout(20)` 的 Chrome 兼容注释**：Chrome 桌面确实可能需要延迟；不要直接删除，改为平台分支（WebKit 同步、Chrome 延迟）+ 看门狗。

### 5.2 留给产品负责人的问题

1. 上轮“朗诵加上某某是一个愚蠢的做法”里的“某某”是否指“故事姐姐”？如果是，代码仍保留 `title="故事姐姐朗读"` 和 README 中的称呼，需要确认并统一。
2. 项目当前明确“不提供离线课堂包”。如果保持这个决定，在线 TTS 文档应写成“无自建后端，但语音可能联网”；如果未来改为离线优先，才需要把本机语音排序到在线音之前。
3. 4 分 20 秒是给一节完整课，还是给老师按段选取的素材？这决定是否需要分龄/分段预设。
4. 公开仓库是否接受包含个人路径的 QA 文档？如果不接受，需要把 `qa/CONTRACT.md`、`DEVELOPMENT.md` 中的 `/Users/<user>/...` 全部改为相对路径/环境变量。
5. `app.js` 是否可以由 CI 生成而不入库？如果继续入库，必须接受“每次改 src 都要同步 bundle”的流程成本。

---

> 本文是审查文档，不是修复记录。建议按 §4 的优先级拆成独立提交；每个修复都应更新 `docs/12`/`docs/13` 的对应测试点，并在当前 HEAD 上重新跑受影响 QA。
