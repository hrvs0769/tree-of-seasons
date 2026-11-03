#!/bin/zsh
# 把 render.js 产出的帧序列编码成片，并贴上合成好的 BGM。
# 用法: ./tools/make-video.sh [/tmp/tree_frames] [out.mp4]
set -e

ROOT="/Users/liuhuirong/WorkBuddy/Claw/tree-of-seasons"
FRAMES="${1:-/tmp/tree_frames}"
OUT="${2:-$ROOT/tree-of-seasons.mp4}"
BGM="$ROOT/tree-of-seasons-bgm.wav"

# 1. 画面：开头 0.8 秒淡入、56.6 秒起 1.4 秒淡出
ffmpeg -y -loglevel error -framerate 30 -i "$FRAMES/%05d.jpg" \
  -vf "fade=t=in:st=0:d=0.8,fade=t=out:st=56.6:d=1.4,format=yuv420p" \
  -c:v libx264 -preset slow -crf 27 -maxrate 6M -bufsize 12M \
  -movflags +faststart -r 30 -an /tmp/_tree_video.mp4

if [ ! -f "$BGM" ]; then
  echo "还没有 BGM，先跑 node tools/make-bgm.js"; exit 1
fi

# 2. 合上音频：视频流直接拷贝（不二次压缩），音频 aac 192k。
#    BGM 本身长 58.000 秒、与画面等长，-shortest 只是兜底。
ffmpeg -y -loglevel error -i /tmp/_tree_video.mp4 -i "$BGM" \
  -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -ar 44100 \
  -shortest -movflags +faststart "$OUT"

echo "--- 成片"
ffprobe -v error -show_entries format=duration,size \
  -show_entries stream=codec_type,codec_name,width,height,r_frame_rate,sample_rate,channels \
  -of default=nw=1 "$OUT"
ls -lh "$OUT"
