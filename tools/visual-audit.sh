#!/bin/zsh
# 固定视觉审查截图：构建 → 多时间点/多分辨率截图 → 拼图 + 指标
# 用法: ./tools/visual-audit.sh [round]   （AUDIT_BUDGET=300 可覆盖无头渲染的虚拟时间预算；定帧只重绘一次）
#
# 第二轮基线：覆盖根系深扎 / 含水层 / 第二年鸟虫与果实等关键帧。
#   快速模式（默认 1280×800）：8 张
#   全量模式（AUDIT_FULL=1，1440×900；手机 UI 仍为 390×844）：24 张
#   下面两份 ITEMS 的条目数必须与这两个数字一致（改清单时同步改注释）。
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
    --virtual-time-budget="${AUDIT_BUDGET:-300}" --user-data-dir="$profile" \
    --screenshot="$OUT/$name.png" "$url" >/dev/null 2>&1 || true
}

BASE="file://$ROOT/index.html"
if [ "${AUDIT_FULL:-0}" = "1" ]; then
  # 全量模式 24 张：20 张桌面关键帧 + 2 张课堂 UI + 2 张手机竖屏 UI
  ITEMS=(
    "desktop-06-seed 1440,900 ?stage&t0=6&freeze"
    "desktop-20-rain 1440,900 ?stage&t0=20&freeze"
    "desktop-44-root 1440,900 ?stage&t0=44&freeze"
    "desktop-66-sprout 1440,900 ?stage&t0=66&freeze"
    "desktop-100-sapling 1440,900 ?stage&t0=100&freeze"
    "desktop-108-smalltree 1440,900 ?stage&t0=108&freeze"
    "desktop-120-fulltree 1440,900 ?stage&t0=120&freeze"
    "desktop-128-summer 1440,900 ?stage&t0=128&freeze"
    "desktop-140-summer-end 1440,900 ?stage&t0=140&freeze"
    "desktop-150-autumn 1440,900 ?stage&t0=150&freeze"
    "desktop-160-winter-start 1440,900 ?stage&t0=160&freeze"
    "desktop-170-winter-snow 1440,900 ?stage&t0=170&freeze"
    "desktop-190-spring 1440,900 ?stage&t0=190&freeze"
    "desktop-200-summer-full 1440,900 ?stage&t0=200&freeze"
    "desktop-210-birds 1440,900 ?stage&t0=210&freeze"
    "desktop-220-autumn 1440,900 ?stage&t0=220&freeze"
    "desktop-230-fruit 1440,900 ?stage&t0=230&freeze"
    "desktop-240-winter-end 1440,900 ?stage&t0=240&freeze"
    "desktop-250-water 1440,900 ?stage&t0=250&freeze"
    "desktop-260-end 1440,900 ?stage&t0=260&freeze"
    "class-128-ui 1440,900 ?class&t0=128&freeze"
    "class-210-ui 1440,900 ?class&t0=210&freeze"
    "mobile-128-ui 390,844 ?class&t0=128&freeze"
    "mobile-210-ui 390,844 ?class&t0=210&freeze"
  )
else
  # 快速模式 8 张：种子近景 / 春雨 / 根系剖面 / 幼苗 / 第二年夏鸟虫 / 果实 / 深根水层 + 课堂 UI
  # 必留 t=6 / 44 / 210 / 250；夏 / 秋 / 冬 / 第二年春放到全量模式
  ITEMS=(
    "desktop-06-seed 1280,800 ?stage&t0=6&freeze"
    "desktop-20-rain 1280,800 ?stage&t0=20&freeze"
    "desktop-44-root 1280,800 ?stage&t0=44&freeze"
    "desktop-100-sapling 1280,800 ?stage&t0=100&freeze"
    "desktop-210-birds 1280,800 ?stage&t0=210&freeze"
    "desktop-230-fruit 1280,800 ?stage&t0=230&freeze"
    "desktop-250-water 1280,800 ?stage&t0=250&freeze"
    "class-210-ui 1280,800 ?class&t0=210&freeze"
  )
fi
for item in "${ITEMS[@]}"; do
  set -- ${=item}
  shot "$1" "$2" "$BASE$3"
done

python3 "$ROOT/tools/visual-audit.py" "$OUT" "$ROUND"
echo "done -> $OUT/sheet.png"
