#!/bin/zsh
# 大版本自动化发布检查：构建 app.js → 全量 QA → 只有 P0/P1 全过才提示可以部署。
# 用法: ./tools/qa-release.sh [version] [label]
#   例: ./tools/qa-release.sh v4.0.0 "第四轮 · 可视化测试看板"
set -u

ROOT="/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons"
ESBUILD="/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/.bin/esbuild"
VERSION="${1:-v4.0.0}"
LABEL="${2:-大版本发布检查}"

cd "$ROOT" || { echo "✖ 无法进入项目根：$ROOT"; exit 2; }

if [ ! -x "$ESBUILD" ]; then
  echo "✖ 找不到 esbuild：$ESBUILD"
  exit 2
fi

echo "▶ [1/2] 构建 app.js"
"$ESBUILD" "$ROOT/src/main.js" --bundle --format=iife --minify \
  --alias:three="$ROOT/lib/three.module.min.js" \
  --outfile="$ROOT/app.js" --log-level=warning || { echo "✖ app.js 构建失败"; exit 2; }

echo "▶ [2/2] 运行全量自动化测试"
node tools/qa-run.js --version "$VERSION" --label "$LABEL"
CODE=$?

if [ "$CODE" -eq 0 ]; then
  echo ""
  echo "✅ 测试通过，可以部署"
  exit 0
elif [ "$CODE" -eq 2 ]; then
  # P2-only 失败/跳过：必须确认 results.json 已结束（不是 running/缺文件），避免半截结果被当通过
  node -e '
    const fs = require("fs");
    const r = JSON.parse(fs.readFileSync("qa/data/results.json", "utf8"));
    if (!r || (r.status !== "passed" && r.status !== "failed") || !r.finishedAt) {
      console.error("✖ qa/data/results.json 尚未正常结束（status=" + (r && r.status) + ", finishedAt=" + (r && r.finishedAt) + "）");
      process.exit(3);
    }
  '
  VERIFY=$?
  if [ "$VERIFY" -ne 0 ]; then
    echo ""
    echo "✖ 测试结果不完整，禁止部署（results.json 校验失败）"
    exit 3
  fi
  echo ""
  echo "✅ 测试通过（P0/P1 全过，存在 P2 失败或跳过项），可以部署"
  exit 0
else
  echo ""
  echo "✖ 测试失败或 runner 异常：禁止部署（qa-run 退出码 $CODE）"
  echo "   详见 qa/data/results.json 与 qa/evidence/"
  exit "$CODE"
fi
