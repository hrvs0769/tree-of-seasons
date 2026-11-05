#!/bin/zsh
# 一轮视觉迭代的自动截图：构建 → 多时间点 × 多屏幕截图 → 生成拼图（便于一次看清全貌）
# 用法: ./tools/shoot.sh r1
set -e

ROOT="/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons"
ESBUILD="/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/.bin/esbuild"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROUND="${1:-r1}"
OUT="$ROOT/shots/$ROUND"
mkdir -p "$OUT"

# 1. 构建
"$ESBUILD" "$ROOT/src/main.js" --bundle --format=iife --minify \
  --alias:three="$ROOT/lib/three.module.min.js" --outfile="$ROOT/app.js" --log-level=warning

# 2. 截图：时间点 = 种子 / 发芽 / 小树 / 夏 / 秋 / 冬
TIMES=(6 24 44 66 84 106 128)
for t in $TIMES; do
  "$CHROME" --headless=new --no-sandbox --use-gl=angle --use-angle=swiftshader \
    --enable-unsafe-swiftshader --hide-scrollbars --window-size=1280,800 \
    --virtual-time-budget=350 --user-data-dir="/tmp/sh_${ROUND}_$t" \
    --screenshot="$OUT/desktop_$t.png" \
    "file://$ROOT/index.html?t0=$t&freeze" >/dev/null 2>&1
done

# 3. 手机竖屏
"$CHROME" --headless=new --no-sandbox --use-gl=angle --use-angle=swiftshader \
  --enable-unsafe-swiftshader --hide-scrollbars --window-size=390,844 \
  --virtual-time-budget=350 --user-data-dir="/tmp/sh_${ROUND}_m" \
  --screenshot="$OUT/phone_190.png" \
  "file://$ROOT/index.html?t0=190&freeze" >/dev/null 2>&1

# 4. 拼图：把 6 张桌面图 + 1 张手机图排成一张
SHEET="$OUT/sheet.html"
{
  echo '<!doctype html><meta charset=utf-8><style>'
  echo 'body{margin:0;background:#111;font:12px/1.4 system-ui;color:#ddd}'
  echo '.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:6px}'
  echo 'figure{margin:0;position:relative}'
  echo 'img{width:100%;display:block;border-radius:4px}'
  echo 'figcaption{position:absolute;left:8px;bottom:6px;background:#000a;padding:2px 8px;border-radius:4px}'
  echo '</style><div class=grid>'
  for t in $TIMES; do
    if [ "$t" = "128" ]; then cap="夏 · 长成"; else cap="t=${t}s"; fi
    echo "<figure><img src=\"desktop_$t.png\"><figcaption>${cap}</figcaption></figure>"
  done
  echo "<figure><img src=\"phone_190.png\" style=\"max-height:520px;width:auto;margin:0 auto\"><figcaption>手机 390×844</figcaption></figure>"
} > "$SHEET"

"$CHROME" --headless=new --no-sandbox --hide-scrollbars --window-size=1500,900 \
  --virtual-time-budget=1200 --user-data-dir="/tmp/sh_${ROUND}_sheet" \
  --screenshot="$OUT/sheet.png" "file://$SHEET" >/dev/null 2>&1

echo "done -> $OUT/sheet.png"
