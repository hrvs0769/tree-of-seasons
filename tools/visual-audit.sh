#!/bin/zsh
# 固定视觉审查截图：构建 → 多时间点/多分辨率截图 → 拼图 + 指标
# 用法: ./tools/visual-audit.sh [round]
set -e

ROOT="/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons"
ROUND="${1:-audit-$(date +%Y%m%d-%H%M%S)}"
OUT="$ROOT/shots/visual-audit/$ROUND"
mkdir -p "$OUT"

# 优先使用 Playwright 的 headless shell，其次用系统 Chrome
if [ -n "$CHROME_BIN" ] && [ -x "$CHROME_BIN" ]; then
  CHROME="$CHROME_BIN"
elif [ -x "$HOME/Library/Caches/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-mac-x64/chrome-headless-shell" ]; then
  CHROME="$HOME/Library/Caches/ms-playwright/chromium_headless_shell-1208/chrome-headless-shell-mac-x64/chrome-headless-shell"
elif [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  echo "找不到 Chrome / chrome-headless-shell，请设置 CHROME_BIN" >&2
  exit 1
fi
ESBUILD="/Users/liuhuirong/Desktop/我的电脑/dsh/solar-system/node_modules/.bin/esbuild"
"$ESBUILD" "$ROOT/src/main.js" --bundle --format=iife --minify \
  --alias:three="$ROOT/lib/three.module.min.js" --outfile="$ROOT/app.js" --log-level=warning

shot() {
  local name="$1" size="$2" url="$3"
  local profile="/tmp/visual-audit-$ROUND-$name"
  "$CHROME" --no-sandbox --use-gl=angle --use-angle=swiftshader \
    --enable-unsafe-swiftshader --hide-scrollbars --window-size="$size" \
    --virtual-time-budget=1400 --user-data-dir="$profile" \
    --screenshot="$OUT/$name.png" "$url" >/dev/null 2>&1 || true
}

BASE="file://$ROOT/index.html"
if [ "${AUDIT_FULL:-0}" = "1" ]; then
  ITEMS=(
    "desktop-06-seed 1440,900 ?stage&t0=6&freeze"
    "desktop-20-rain 1440,900 ?stage&t0=20&freeze"
    "desktop-44-root 1440,900 ?stage&t0=44&freeze"
    "desktop-66-sprout 1440,900 ?stage&t0=66&freeze"
    "desktop-100-sapling 1440,900 ?stage&t0=100&freeze"
    "desktop-128-summer 1440,900 ?stage&t0=128&freeze"
    "desktop-150-autumn 1440,900 ?stage&t0=150&freeze"
    "desktop-170-winter 1440,900 ?stage&t0=170&freeze"
    "desktop-190-spring 1440,900 ?stage&t0=190&freeze"
    "desktop-230-fruit 1440,900 ?stage&t0=230&freeze"
    "class-128-ui 1440,900 ?class&t0=128&freeze"
    "class-170-ui 1440,900 ?class&t0=170&freeze"
    "mobile-128-ui 390,844 ?class&t0=128&freeze"
  )
else
  # 快速基线：覆盖种子 / 根 / 幼苗 / 夏 / 冬 / 春 + 课堂 UI
  ITEMS=(
    "desktop-06-seed 1280,800 ?stage&t0=6&freeze"
    "desktop-44-root 1280,800 ?stage&t0=44&freeze"
    "desktop-100-sapling 1280,800 ?stage&t0=100&freeze"
    "desktop-128-summer 1280,800 ?stage&t0=128&freeze"
    "desktop-170-winter 1280,800 ?stage&t0=170&freeze"
    "desktop-190-spring 1280,800 ?stage&t0=190&freeze"
    "class-128-ui 1280,800 ?class&t0=128&freeze"
  )
fi
for item in "${ITEMS[@]}"; do
  set -- ${=item}
  shot "$1" "$2" "$BASE$3"
done

python3 "$ROOT/tools/visual-audit.py" "$OUT" "$ROUND"
echo "done -> $OUT/sheet.png"
