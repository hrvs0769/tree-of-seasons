# QA · 一棵树的四季测试看板

独立访问入口：`/qa/`（线上 `https://hrvs0769.github.io/tree-of-seasons/qa/`，本地 `http://127.0.0.1:8777/qa/`）。

- 测试点总表：`data/catalog.json`（109 条，10 模块）与 `docs/12-test-points.md`
- 最近运行：`data/results.json`；历史：`data/history.json`；证据：`evidence/*.jpg`
- 看板源码：`index.html` + `assets/qa.css` + `assets/qa.js`（纯原生，无框架/外链）
- 日常小改：`node tools/qa-run.js --only CLASS,A11Y` 或 `node tools/qa-run.js --smoke`（只写 `results-smoke.json`，不覆盖正式看板）。发布前：`node tools/qa-run.js --release-fast`（全部 P0，实测约 10 分钟，写 `results-release.json`）；全量只在版本收尾/大改时跑。
- 自动化入口：项目根执行 `node tools/qa-run.js --version v4.1.0 --label "..."`，或 `./tools/qa-release.sh v4.1.0 "..."`
- 数据契约：`CONTRACT.md`；使用手册：`docs/13-test-dashboard.md`

注意：`data/demo-*.json` 只在 URL 加 `?demo=1` 时用于视觉预览，正式看板不会把示例数据当作真实结果。
