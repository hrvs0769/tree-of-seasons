#!/bin/zsh
# 把 render.js 产出的帧序列编码成成片。
# 用法: ./tools/make-video.sh [/tmp/tree_frames] [out.mp4]
set -e

ROOT="/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons"
FRAMES="${1:-/tmp/tree_frames}"
OUT="${2:-$ROOT/tree-of-seasons.mp4}"

# 开头 0.8 秒淡入、56.6 秒起 1.4 秒淡出，避免一上来就是硬切
ffmpeg -y -framerate 30 -i "$FRAMES/%05d.jpg" \
  -vf "fade=t=in:st=0:d=0.8,fade=t=out:st=56.6:d=1.4,format=yuv420p" \
  -c:v libx264 -preset slow -crf 27 -maxrate 6M -bufsize 12M \
  -movflags +faststart -r 30 "$OUT"

ls -lh "$OUT"
