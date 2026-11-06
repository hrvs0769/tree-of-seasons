#!/usr/bin/env python3
"""把视觉审查截图拼成一张 sheet，并生成指标和报告骨架。"""
import json
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageStat, ImageFilter

out = Path(sys.argv[1])
round_name = sys.argv[2] if len(sys.argv) > 2 else out.name
files = sorted(out.glob("*.png"))
if not files:
    raise SystemExit("no screenshots found")

# 按文件名顺序排列，每行 3 张
thumb_w, thumb_h = 420, 236
cols = 3
rows = (len(files) + cols - 1) // cols
sheet = Image.new("RGB", (cols * (thumb_w + 12) + 12, rows * (thumb_h + 44) + 12), (12, 18, 14))
draw = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype("/System/Library/Fonts/PingFang.ttc", 14)
except Exception:
    font = ImageFont.load_default()

metrics = {}
for i, f in enumerate(files):
    im = Image.open(f).convert("RGB")
    thumb = im.copy()
    thumb.thumbnail((thumb_w, thumb_h))
    x = 12 + (i % cols) * (thumb_w + 12)
    y = 12 + (i // cols) * (thumb_h + 44)
    sheet.paste(thumb, (x, y))
    draw.text((x, y + thumb_h + 7), f.stem, fill=(230, 220, 200), font=font)
    gray = im.convert("L")
    stat = ImageStat.Stat(gray)
    edges = gray.filter(ImageFilter.FIND_EDGES)
    metrics[f.name] = {
        "width": im.width, "height": im.height,
        "brightness": round(stat.mean[0], 2),
        "contrast": round(stat.stddev[0], 2),
        "edge_density": round(sum(ImageStat.Stat(edges).mean) / max(1, edges.width * edges.height), 4),
    }

sheet_path = out / "sheet.png"
sheet.save(sheet_path, quality=90)
(out / "metrics.json").write_text(json.dumps({"round": round_name, "files": metrics}, ensure_ascii=False, indent=2), encoding="utf-8")
(out / "report.md").write_text(f"""# 视觉审查 · {round_name}

- 日期：{__import__('datetime').date.today().isoformat()}
- 截图目录：`{out}`
- 拼图：![sheet](sheet.png)
- 指标：`metrics.json`

## 八维评分（1–5）

| 维度 | 分数 | 备注 |
|---|---:|---|
| 构图与镜头 |  |  |
| 光照与曝光 |  |  |
| 树体细节 |  |  |
| 根系细节 |  |  |
| 土壤与地形 |  |  |
| 远景与季节 |  |  |
| UI 与排版 |  |  |
| 课堂可用性 |  |  |

平均分：

## 最影响观感的 3 个问题

1. 
2. 
3. 

## 本轮改动

## 下一轮
""", encoding="utf-8")
print(f"sheet -> {sheet_path}")
print(f"metrics -> {out / 'metrics.json'}")
print(f"report -> {out / 'report.md'}")
