# 15 · 第六轮执行记录（按审查清单 2–6）

> 执行日期：2026-11-18
> 起点标签：`pre-round6` = `6f83bb2`
> 范围：用户在审查文档 §0.2 的“六件事”中明确选择 **只做第 2–6 件，第 1 件不做**。
> 第 1 件（修 QA 发布门禁 + 当前 HEAD 全量重跑）保持原状，不在本轮改动范围内。

## 1. 执行清单

| # | 审查文档中的事项 | 本轮状态 | 主要落点 |
|---|---|---|---|
| 1 | 修 QA 门禁；当前 HEAD 重跑全量 | **按用户要求不做** | `qa-release.sh` 未改；正式 `results.json` 未覆盖 |
| 2 | iOS/微信 Web Speech：同步 speak + 看门狗 | **已完成** | `src/speech.js`、`src/main.js` |
| 3 | 幽灵叶子 + seek 丢朗读 | **已完成** | `src/main.js` |
| 4 | 叶子可见性门控 + 降 DPR/阴影 | **已完成** | `src/main.js` |
| 5 | package.json + CI 构建校验 | **已完成** | `package.json`、`package-lock.json`、`.github/workflows/ci.yml`、`tools/*` |
| 6 | 按章讲解预设 + 四季合影保存 | **已完成** | `index.html`、`src/main.js` |

## 2. 具体改动

### 2.1 Web Speech（iOS/微信）

- `src/speech.js`
  - `speak(text, opts)` 新增 `opts.immediate`：UI 首次点击直接调用 `synth.speak()`，不再先 `await` 再 `setTimeout(20)`；
  - 增加 `onstart` 看门狗：1.8 秒内没有触发 `onstart`，将以 `no-start` 走 `onerror`，不再“按钮显示已开启但完全无声”；
  - 普通章节自动切换仍保留 20ms 延迟，兼容 Chrome `cancel()+speak()` 同 tick 的问题。
- `src/main.js`
  - `toggleVoice()` 先 `refresh()` 同步取语音；语音已就绪时不 await；
  - `speakCurrentChapter({ immediate: true })` 用于点击「朗读」、播放、继续、seek 结束等用户动作；
  - `onerror` 统一把 `voiceOn` 置 false、刷新 `aria-pressed`、显示降级提示；
  - `FREEZE_T`/`VIDEO` 下拒绝开启朗读（无语音时仍显示明确的 no-voices 提示）；
  - 按钮 `title` 统一为「朗读本章旁白」，不再出现“故事姐姐”称谓。

### 2.2 幽灵叶子与 seek 朗诵

- `partVisibleAt(part, t)`、`partHasVisibleState(part, t)`、`partWorldPoints(part, t)`、`partScreenPoints(part, t)`、`findablePartsAt(t)` 全部改为显式时间参数，不再读取全局 `storyTime`；
- `partHasVisibleState('leaf', 180)` 现在为 false：`t=180` 时 `p=0`、`leafAmount=0`，不再把 981 个不可见投影点当成可找目标；
- `partScreenPoints('leaf', 180)` 返回空；`findablePartsAt(180)` 只保留 `branch/trunk`；`181` 后叶子重新出现；
- 课堂 `#classProgress` 的 pointerup、`←/→` 键、全局 Home/End/←/→ 在恢复播放后调用 `speakCurrentChapter({ immediate: true })`，老师“重讲某句”不会丢朗读。

### 2.3 叶子性能

- `tree.leaves.visible` 仅在 `g > 0.13 && leafAmount > 0.01 && p < 0.72`（生长后且非冬季）时为 true；
- 冬季/种子期整段跳过 24,513 个叶实例的矩阵/颜色更新；
- `leaves.castShadow = false`，树冠阴影继续由既有 `treeShade` 平面承担；
- `LOW_POWER`（触屏设备或 `hardwareConcurrency <= 4`）时：
  - `DPR_CAP = 1.3`（否则 1.75）；
  - 太阳阴影 `1024×1024`（否则 2048×2048）。

实测：

| 场景 | 改前 | 改后 |
|---|---:|---:|
| `?dbg&ui=1&t0=0&freeze` | 42 calls / 591,256 triangles | **41 calls / 199,048 triangles** |
| `?dbg&ui=1&t0=210&freeze` | 468 calls / 630,674 triangles | 468 calls / 630,674 triangles（夏季叶子本来可见，保留） |

### 2.4 构建/QA 可移植性与 CI

- 新增 `package.json`：`esbuild 0.25.12`、`playwright-core 1.63.0`，scripts `build` / `build:check` / `qa` / `qa:smoke`；
- 新增 `package-lock.json`（lockfileVersion 3，registry.npmjs.org）；
- 新增 `.github/workflows/ci.yml`：`npm ci` → `npm run build` → `git diff --exit-code app.js`；
- `tools/qa/harness.js`、`tools/ui-shot.js`：优先 `PLAYWRIGHT_CORE_PATH` / 本地 `playwright-core` / 旧本机路径回退；Chromium 优先 `CHROME_BIN`、扫描 `PLAYWRIGHT_BROWSERS_PATH` 下所有 `chromium-*`，不再写死 1208；
- `tools/qa-release.sh`：`ROOT` 改为脚本相对路径；esbuild 优先 `node_modules/.bin/esbuild`，其次 PATH；缺少依赖时提示 `npm ci`。

### 2.5 按章讲解预设与四季合影保存

- 开场页新增 `#startGuidedBtn`「按章讲解」：
  - 点击后进入课堂并设置 `autoPauseAtChapter = true`；
  - `#startClassBtn` 与 `?class` 仍默认 `autoPauseAtChapter = false`，**没有改变用户要求的默认关闭**；
- 四季合影弹层新增 `#quartetSaveBtn`「保存四宫格」：
  - 把 4 张 720px 快照拼成 2×2 JPG；
  - 调色板与深色背景一致，带季节/年份标签；
  - 通过 Blob URL 下载 `一棵树的四季-四季合影.jpg`；
  - 保存按钮启用 `aria-busy`/`disabled` 逻辑不参与截图循环（截图完成后再显示弹层）。

## 3. 验证记录

### 3.1 构建

```text
npm ci --no-audit --no-fund                  # 成功
npm run build                                 # 成功
npm run build:check                           # exit 0（app.js 与当前 src 构建结果一致）
node --check src/speech.js                    # OK
node --check tools/qa/harness.js              # OK
node --check tools/ui-shot.js                 # OK
bash -n tools/qa-release.sh                   # OK
```

### 3.2 自动化回归（本轮相关子集）

`node tools/qa-run.js --only CLASS-02,CLASS-06,CLASS-10,CLASS-15,PLAY-10,EXPLORE-07,PERF-01,PERF-02,PERF-04,A11Y-06 --version v4.1.0 --label "第六轮 · 核心回归"`

```text
10/10 PASS · 0 fail · 0 skip · 8m05s · runId 20261118-001
```

（写入 `qa/data/results-smoke.json`，不覆盖正式 `results.json`。）

### 3.2.1 发布前 P0 复测

- 第一轮 `--release-fast`：21/22 通过，唯一失败为 `SCENE-08` 定帧截图字节数差 11B（1450235 vs 1450246）；两个新鲜页面手工对比 `bbox=None`，判断为软件 GL 下截图稳定等待不足。
- 将 `tools/qa/checks/scene.js` 的确定性截图等待从 400ms 提升到 1500ms；`SCENE-08` 单独复测 PASS。
- 第二轮 `--release-fast`：**22/22 PASS，0 fail，0 skip，11m39s**（写 `qa/data/results-release.json`，不覆盖正式 `results.json`）。

### 3.3 浏览器手工验证

- `?class&t0=180&freeze`：`partVisibleAt('leaf',180)=false`、`findablePartsAt(180)=['branch','trunk']`、`partScreenPoints('leaf',180)=0`；
- `?class&t0=181&freeze`：叶子重新出现；
- 课堂打开「章节」：播放暂停，等待 1.2 秒 `storyTime` 不变；关闭后恢复播放；
- 开场页「按章讲解」：进入后 `autoPauseAtChapter=true`，`#classAutoBtn aria-pressed=true`；
- `?class&t0=210&freeze`：四季合影生成 4 张；点击「保存四宫格」触发 `download="一棵树的四季-四季合影.jpg"`；
- 语音：`?class&t0=100` 点击朗读，Chrome `speechSynthesis.speaking=true`；强制模拟 `synth.speak` 不触发 `onstart`，1.8 秒后按钮自动回到 false 并显示失败提示；
- 移动端 390×844 截图：顶栏 4+3 两行、字幕/控制条不压画面；开场页三按钮不溢出。

## 4. 未做/边界

- **未做第 1 件**：`qa-release.sh` 的 P1 skip 放行逻辑保持原样；正式 `qa/data/results.json` 仍是旧提交 `32225e7` 的结果。后续应按审查文档 P0-1/P0-2 单独处理。
- **未跑 109 条全量**：本轮只跑相关 10 条子集 + 发布前 P0 门禁（第二轮 22/22，见 `qa/data/results-release.json`）；没有覆盖旧的正式 `results.json`。
- **未做 iOS/Safari 真机**：Web Speech 修复是基于 WebKit 用户激活约束的代码路径修正，必须用真实 iPad/微信再验收。
- **未做 P2-21 `?class` 暂停待开始**：这是教师体验建议，不属于用户指定的六件事；开场页保留连续观看默认。

## 5. 回退

- `pre-round6` 标签指向改动前 `6f83bb2`；
- 本轮完成后打 `round6-v1` 标签；
- 若只想回退代码：`git checkout pre-round6 -- src/main.js src/speech.js index.html app.js tools/qa tools/ui-shot.js tools/qa-release.sh package.json package-lock.json .github`（注意不要误删本轮文档）。
