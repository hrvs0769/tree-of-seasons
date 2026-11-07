# 背景音乐授权说明

网页背景音乐 `tree-of-seasons-bgm-v3.mp3` 来自 **Yoiyami** 的作品
《The Budding of Consciousness – CC0 Ambient / Minimalist Theme (Yoiyami Blue Series – No.4)》。

| 项目 | 内容 |
| --- | --- |
| 作者 | Yoiyami |
| 作品页面 | https://opengameart.org/content/the-budding-of-consciousness-%E2%80%93-cc0-ambient-minimalist-theme-yoiyami-blue-series-%E2%80%93-no4 |
| 原始音频 | https://opengameart.org/sites/default/files/the_budding_of_consciousness.wav |
| 授权 | **CC0 1.0 Universal（公有领域贡献）** https://creativecommons.org/publicdomain/zero/1.0/ |
| 授权核验 | DishwasherBench 项目 `apps/web/public/audio/LICENSES.md`，2026-10-11 逐曲读取作品页面确认，非站点通用条款 |
| 原件 SHA-256 | `c879c57f4353c16926026e05fea372be64a73356ea663475aa1f54bf5499b513` |
| 取得的 MP3 SHA-256 | `3b32bec1ad263dd6cd4f9965460e8a051d9cc14a835a81b91804857335c2b36c`（3,870,327 字节） |

**CC0 允许**：自由复制、修改、再分发，可用于商业及非商业项目，**无需署名**。
作者与出处在此致谢，但并非许可要求。

## 本项目所做的处理（CC0 允许修改）

- 原曲 3:44，用 3 秒交叉淡化接上开头片段，铺满网页 4:20（260 秒）时间轴
- 2 秒淡入、4 秒淡出；整体压低 4 dB，给课堂旁白留出空间
- 重新编码为约 119 kbps 的 MP3

## 更换配乐

把新音频放进 `assets/`，修改 `index.html` 中 `<audio id="bgm">` 的 `src`，
并同步更新本文件。播放同步由 `src/bgm.js` 跟随播放条自动完成，3D 场景代码不用改。
