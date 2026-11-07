'use strict';
/** 章节与文案基准（与 src/main.js 的 CHAPTERS 保持一致，仅用于测试断言） */
const CHAPTERS = [
  { start: 0, end: 16, title: '种子入土', text: '一颗小小的种子落进松软的泥土里。它安静地躺着，等待水分和温暖把它唤醒。', season: '春' },
  { start: 16, end: 32, title: '春雨滋润', text: '春雨落下来，种子喝饱了水，身体慢慢胀大，坚硬的外壳从中间裂开一条缝。', season: '春' },
  { start: 32, end: 56, title: '向下扎根', text: '最先钻出来的不是叶子，而是根。主根向下探索，侧根向四周铺开，把泥土牢牢抓住。', season: '春' },
  { start: 56, end: 76, title: '破土发芽', text: '嫩芽顶着种壳钻出地面，两片子叶慢慢展开，第一次见到阳光。', season: '春' },
  { start: 76, end: 94, title: '幼苗初长', text: '小苗把根扎得更深，茎秆变粗，第一片真叶舒展开来，它开始自己制造养分。', season: '春' },
  { start: 94, end: 108, title: '小树成形', text: '风吹过，雨落下，小树在一次次摇晃中变得更结实，枝丫一层层向外伸展。', season: '春' },
  { start: 108, end: 120, title: '长成大树', text: '一年又一年，树干粗壮，树冠如伞，它终于长成了一棵大树。', season: '春' },
  { start: 120, end: 140, title: '第一年 · 夏', text: '夏天到了，叶子浓绿，阳光穿过树冠，树荫下凉快极了。', season: '夏' },
  { start: 140, end: 160, title: '第一年 · 秋', text: '秋天，叶子变成红和金，一片片飘落，慢慢腐烂，变成泥土里的养分。', season: '秋' },
  { start: 160, end: 180, title: '第一年 · 冬', text: '冬天，枝头落满白雪，树安静地睡着，根还在土里呼吸。', season: '冬' },
  { start: 180, end: 200, title: '第二年 · 春', text: '第二年春天，树又醒来，新芽和花朵一起冒出来。', season: '春' },
  { start: 200, end: 220, title: '第二年 · 夏', text: '夏天，树荫像一把大伞，小鸟和昆虫都来这里休息。', season: '夏' },
  { start: 220, end: 240, title: '第二年 · 秋', text: '第二年秋天，枝头结出果实，果实里有新的种子，生命就这样传下去。', season: '秋' },
  { start: 240, end: 260, title: '第二年 · 冬', text: '冬天又来了，一年结束，新的轮回又要开始。', season: '冬' },
];

const MIDPOINTS = CHAPTERS.map((c) => (c.start + Math.min(c.end, 259.9)) / 2);

module.exports = { CHAPTERS, MIDPOINTS, STORY_END: 259.9 };
