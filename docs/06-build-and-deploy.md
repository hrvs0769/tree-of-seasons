# 06 · 构建与部署

> 本文解决：怎么重新打包、哪些文件是生成物、怎么发布到 GitHub Pages、怎么更新缓存，以及部署时别漏哪些资源。
> 主文档见 [`../DEVELOPMENT.md`](../DEVELOPMENT.md)。
> 最后更新：2026-11-07 · 对应代码：`54137d0`（第三轮 UI 现代化 · 现代设计系统 · 交互与动效）

## 1. 本地运行

`index.html` 是纯静态页面，可以直接双击打开：

```bash
open /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons/index.html
```

不需要 `npm install`、不需要本地服务器、不需要联网。所有 3D 贴图都是 Canvas 程序化生成；音频是本地 `assets/` 文件。这是开发预览方式；幼儿园课堂使用请走 GitHub Pages 的 `?class` 入口，不另外提供离线课堂包。

## 2. 构建（修改 `src/main.js` 后必须执行）

本机 esbuild 取自 solar-system 项目的依赖：

```bash
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons
"/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/.bin/esbuild" \
  src/main.js \
  --bundle --format=iife --minify \
  --alias:three=./lib/three.module.min.js \
  --outfile=app.js --log-level=warning
```

产物：

| 文件 | 来源 |
|---|---|
| `app.js` | `src/main.js` + `lib/three.module.min.js` 打包 |
| `src/bgm.js` | 不会被 esbuild 打包；`index.html` 直接 `<script>` 加载 |
| `assets/tree-of-seasons-bgm-v3.mp3` | 直接引用，不处理 |
| 其余 `assets/` | 授权说明等静态文件 |

**不要直接编辑 `app.js`。** 它每次构建会被覆盖。

> **第二轮优化后的硬提醒**：`src/main.js` 本轮改动很大（约 4.4k 行，新增确定性随机、`rootAge`、6 层土壤与水层、5 类生物 InstancedMesh、结尾 HUD 等）。**任何一次改完 `src/main.js` 都必须重新执行上面的 esbuild 命令生成 `app.js`**，否则：
> - 本地 `index.html` 与 GitHub Pages 看到的仍是旧 build；
> - `./tools/shoot.sh` / `./tools/visual-audit.sh` 虽然会自己打包，但手动用 Chrome 截图、课堂演示、线上部署不会；
- `./tools/ui-shot.js`（第三轮新增）是独立 Playwright 的 UI 定点截图器，需要本机已安装 `playwright-core` 与 Chromium，不属于运行时依赖；
> - 定帧截图会出现「代码改了但画面没变」的假象，浪费一轮审查。
>
> 验证方式：`?dbg` 打开控制台看 `window.__renderer.info.render.calls`（本轮基线 466）；或比对 `app.js` 的修改时间是否晚于 `src/main.js`。`index.html` 的季节转盘色环（`conic-gradient(from 0deg, …)`）也在本轮改过，同步 `/tmp/tree-of-seasons-deploy` 时不要漏掉 `index.html`。

### 2.1 回退点（Git）

| 标签 / 分支 | 含义 |
|---|---|
| `pre-classroom-mode` | 课堂模式改造前 |
| `classroom-mode` | 课堂模式开发分支 |
| `pre-find-game-fix` / `find-game-fix-v1` | 找一找修复前 / 完成点 |
| `pre-visual-refresh` / `visual-refresh-v1` | 远山视觉改版前 / 完成点 |
| **`pre-round2`** | **第二轮优化改动前的干净版本**（回滚本轮全部改动用这个） |
| **`round2-v1`** | **第二轮优化完成点**（确定性基线 / 深根水层 / 鸟虫树荫 / 文案对齐） |

```bash
git tag                                  # 查看已有回退点
git diff pre-round2..HEAD --stat          # 看本轮改动范围
git checkout pre-round2 -- src/main.js   # 只回退主源码（随后必须重新打包 app.js）
```

部署仓库保留全部历史标签；遇到线上回归优先切回 `pre-round2` 对应的 `app.js`，再定位问题。

## 3. GitHub Pages 当前部署

| 项 | 值 |
|---|---|
| GitHub 仓库 | https://github.com/hrvs0769/tree-of-seasons |
| GitHub Pages | https://hrvs0769.github.io/tree-of-seasons/ |
| 课堂模式入口 | https://hrvs0769.github.io/tree-of-seasons/?class |
| 分支/目录 | `main` / `/` |
| 发布方式 | GitHub Pages legacy branch source（`gh api .../pages`） |
| 账号 | `gh` 已登录 `hrvs0769` |

当前部署目录是一个**干净的静态快照**，只包含运行所需文件（不含 `shots/`、视频和构建缓存）。本地主仓库与 GitHub 仓库没有配置 upstream；更新线上时需要手动同步。

## 4. 更新 GitHub Pages 的标准流程

### 4.1 准备临时部署目录

```bash
rm -rf /tmp/tree-of-seasons-deploy
git clone https://github.com/hrvs0769/tree-of-seasons.git /tmp/tree-of-seasons-deploy
cd /Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons
```

### 4.2 同步运行文件

```bash
cp index.html app.js README.md DEVELOPMENT.md ITERATIONS.md /tmp/tree-of-seasons-deploy/
cp -R lib /tmp/tree-of-seasons-deploy/            # Three.js
cp -R src /tmp/tree-of-seasons-deploy/            # main.js + bgm.js（源码也公开）
mkdir -p /tmp/tree-of-seasons-deploy/assets
cp assets/tree-of-seasons-bgm-v3.mp3 assets/MUSIC-LICENSE.md /tmp/tree-of-seasons-deploy/assets/
mkdir -p /tmp/tree-of-seasons-deploy/docs
cp -R docs/* /tmp/tree-of-seasons-deploy/docs/ 2>/dev/null || true
touch /tmp/tree-of-seasons-deploy/.nojekyll
```

（部署目录里如果已有旧 `assets/`，用 `cp -R` 前确认不会漏掉新音频。）

### 4.3 提交并推送

```bash
cd /tmp/tree-of-seasons-deploy
git add -A
git commit -m "更新网页版：<说明>"
git push origin main
```

GitHub Pages 会自动重建。用以下命令确认：

```bash
gh api repos/hrvs0769/tree-of-seasons/pages --jq '.status, .html_url'
curl -L -s -o /dev/null -w '%{http_code}\n' https://hrvs0769.github.io/tree-of-seasons/
```

状态应为 `built`、HTTP 200。通常 10–60 秒生效。

### 4.4 首次启用 Pages（如果换了仓库）

```bash
gh api --method POST repos/<owner>/<repo>/pages --input - <<'JSON'
{"source":{"branch":"main","path":"/"}}
JSON
```

## 5. 缓存

- 浏览器/平台可能缓存 `app.js`、`index.html`。第三轮起 `index.html` 对 `app.js` / `src/bgm.js` 加了 `?v=round3` 版本号；发布新版本时同步递增该参数（如 `?v=round4`）即可强制刷新构建产物。
- 更新后让用户访问带版本查询参数的 URL，例如：
  `https://hrvs0769.github.io/tree-of-seasons/?v=7`
- 本地调试同样可在 URL 加 `?v=时间戳`。
- 页面源码引用 `./app.js` 和 `./src/bgm.js`，路径必须相对；不要改成绝对 `/`（GitHub Pages 子路径会失效）。

## 6. 哪些文件要部署

必须：

```text
index.html
app.js
lib/three.module.min.js
src/bgm.js              （音频控制）
assets/tree-of-seasons-bgm-v3.mp3
assets/MUSIC-LICENSE.md
```

推荐一起带上：

```text
README.md
DEVELOPMENT.md
ITERATIONS.md
docs/*.md
src/main.js             （源码，便于公开仓库维护）
.nojekyll
```

不需要：

```text
shots/                 视觉迭代产物，体积大，已 gitignore
tree-of-seasons.mp4    旧 58 秒成片（如果需要视频另说）
tree-of-seasons-bgm.wav 旧成片配乐
tools/                 构建/截图工具，可留也可不带
node_modules/
```

## 7. 视频/旧工具说明

`tools/render.js` + `tools/make-video.sh` 是**旧的 58 秒成片流水线**：

- `render.js` 的时间映射 `KEYS` 仍是旧版（最远只到 170s），不是当前 260s 网页时间轴；
- `make-video.sh` 用的是根目录 `tree-of-seasons-bgm.wav`，不是网页的 `assets/...mp3`；
- 当前线上是网页交互版，不需要先生成视频。

如果要重新做课堂成片：先把 `render.js` 的 `KEYS` 改成对应 260s 的故事时间，再生成帧、用 ffmpeg 合成；不要在旧 `tree-of-seasons.mp4` 上直接改。

## 8. 依赖与安全

- 不需要 `npm install`；esbuild 是系统已有外部依赖，打包时只读 `lib/three.module.min.js`。
- 不引入 CDN；`file://` 和 GitHub Pages 均无网络依赖（音频除外，仍是本地文件）。
- 不要把 GitHub token 写进任何项目文件；`gh` 使用系统 keyring。
- 部署仓库是公开的：不要放入 `shots/`、临时帧、个人路径或密钥。
