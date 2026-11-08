'use strict';
/** RESPONSIVE：五档断点无横向溢出、关键控件可见、移动端 44px 与课堂顶栏两行 */
const { assert, sleep } = require('../harness');

const VIEWPORTS = [
  { key: 'responsive.desktop1440', w: 1440, h: 900, aliases: ['responsive.1440', 'responsive.w1440', 'responsive.desktop'] },
  { key: 'responsive.desktop1280', w: 1280, h: 800, aliases: ['responsive.1280', 'responsive.w1280'] },
  { key: 'responsive.tablet1024', w: 1024, h: 768, aliases: ['responsive.1024', 'responsive.w1024'] },
  { key: 'responsive.tablet768', w: 768, h: 1024, aliases: ['responsive.768', 'responsive.w768', 'responsive.tabletPortrait'] },
  { key: 'responsive.mobile390', w: 390, h: 844, aliases: ['responsive.390', 'responsive.w390', 'responsive.mobile', 'responsive.phone'] },
];

function viewportCheck(vp) {
  return {
    key: vp.key,
    aliases: vp.aliases,
    title: `${vp.w}×${vp.h} 响应式无溢出`,
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze', { viewport: { width: vp.w, height: vp.h } });
      await sleep(400);
      const info = await s.page.evaluate(() => {
        const visible = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return false;
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden';
        };
        return {
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
          bodyScrollWidth: document.body.scrollWidth,
          play: visible('#playBtn'),
          timeline: visible('#timeline'),
          replay: visible('#replayBtn'),
          music: visible('#musicBtn'),
          replant: visible('#replant'),
          volumeDisplay: getComputedStyle(document.getElementById('volumeWrap')).display,
          playerRect: (() => { const r = document.getElementById('player').getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height), bottom: Math.round(r.bottom) }; })(),
        };
      });
      await ctx.shot(s, vp.key + '-free');
      let cls = null;
      if (vp.w <= 768) {
        const s2 = await ctx.open('?class&t0=210&freeze', { viewport: { width: vp.w, height: vp.h } });
        await sleep(400);
        cls = await s2.page.evaluate(() => {
          const scrollWidth = document.documentElement.scrollWidth;
          const buttons = Array.from(document.querySelectorAll('#classroomTop button')).map((b) => {
            const r = b.getBoundingClientRect();
            return { w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top) };
          });
          return {
            scrollWidth,
            innerWidth: window.innerWidth,
            buttons,
            topHeight: Math.round(document.getElementById('classroomTop').getBoundingClientRect().height),
            rows: [...new Set(buttons.map((b) => b.top))].length,
          };
        });
        await ctx.shot(s2, vp.key + '-class');
        await ctx.close(s2);
      }
      await ctx.close(s);
      assert(info.scrollWidth <= info.innerWidth + 1, `${vp.w}×${vp.h} 横向溢出：scrollWidth=${info.scrollWidth} > innerWidth=${info.innerWidth}`);
      if (cls) assert(cls.scrollWidth <= cls.innerWidth + 1, `课堂模式 ${vp.w}×${vp.h} 横向溢出：${cls.scrollWidth} > ${cls.innerWidth}`);
      assert(info.play && info.timeline && info.replay && info.music && info.replant, `关键播放控件不可见：${JSON.stringify(info)}`);
      assert(info.playerRect.bottom <= vp.h + 1, `播放器底部溢出 ${info.playerRect.bottom} > ${vp.h}`);
      if (cls) assert(cls.buttons.length === 7 && cls.buttons.every((b) => b.w > 0 && b.h > 0), '课堂顶栏按钮不可见');
      if (vp.w <= 980) {
        assert(info.volumeDisplay === 'none', `${vp.w}px 下 #volumeWrap 应隐藏，实际 ${info.volumeDisplay}`);
      }
      if (vp.w <= 700) {
        assert(cls && cls.rows >= 2, `移动端课堂顶栏应为多行，实际 ${cls && cls.rows} 行`);
        assert(cls.buttons.every((b) => b.h >= 44), `移动端课堂按钮高度不足 44px：${cls.buttons.map((b) => b.h).join('/')}`);
      }
      return {
        message: `${vp.w}×${vp.h} 无横向溢出，关键控件可见${vp.w <= 700 ? '，课堂顶栏两行且按钮 ≥44px' : ''}`,
        actual: `scrollWidth=${info.scrollWidth}/${info.innerWidth}, playerBottom=${info.playerRect.bottom}, classRows=${cls ? cls.rows : 'n/a'}`,
      };
    },
  };
}

module.exports = [
  ...VIEWPORTS.map(viewportCheck),
  {
    key: 'responsive.mobilePlayer44',
    aliases: ['responsive.player44', 'responsive.touchTargets', 'responsive.mobileControls'],
    title: '移动端播放器控件 ≥44px',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze', { viewport: { width: 390, height: 844 } });
      await sleep(400);
      const info = await s.page.evaluate(() => {
        const ids = ['playBtn', 'replayBtn', 'musicBtn', 'replant', 'timelineWrap'];
        return ids.map((id) => {
          const el = document.getElementById(id);
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return { id, w: Math.round(r.width), h: Math.round(r.height), display: cs.display };
        });
      });
      await ctx.close(s);
      const bad = info.filter((i) => i.display !== 'none' && (i.h < 44 || i.w < 44));
      assert(bad.length === 0, `移动端控件小于 44px：${bad.map((b) => `${b.id}=${b.w}x${b.h}`).join(', ')}`);
      return { message: '移动端播放器 5 个关键命中区均 ≥44px', actual: info.map((i) => `${i.id}=${i.w}x${i.h}`).join(', ') };
    },
  },
  {
    key: 'responsive.classTopbarMobile',
    aliases: ['responsive.classTopbar', 'responsive.topbarRows', 'responsive.mobileTopbar'],
    title: '移动端课堂顶栏两行 7 按钮',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze', { viewport: { width: 390, height: 844 } });
      await sleep(400);
      const info = await s.page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('#classroomTop button')).map((b) => {
          const r = b.getBoundingClientRect();
          return { text: b.textContent.trim(), w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top), left: Math.round(r.left) };
        });
        return {
          buttons,
          rows: [...new Set(buttons.map((b) => b.top))].length,
          topHeight: Math.round(document.getElementById('classroomTop').getBoundingClientRect().height),
          classTopVar: getComputedStyle(document.documentElement).getPropertyValue('--class-top').trim(),
          scrollWidth: document.documentElement.scrollWidth,
          innerWidth: window.innerWidth,
        };
      });
      await ctx.close(s);
      assert(info.buttons.length === 7, `按钮数=${info.buttons.length}`);
      assert(info.rows >= 2, `顶栏行数=${info.rows}，期望 2 行`);
      assert(info.buttons.every((b) => b.h >= 44 && b.w >= 44), `按钮尺寸不足：${info.buttons.map((b) => `${b.text}=${b.w}x${b.h}`).join(', ')}`);
      assert(info.scrollWidth <= info.innerWidth + 1, `顶栏横向溢出 ${info.scrollWidth}>${info.innerWidth}`);
      assert(info.classTopVar === '134px', `移动端 --class-top=${info.classTopVar}，期望 134px`);
      return { message: '390×844 课堂顶栏 7 按钮排两行、每个 ≥44×44，顶栏 134px', actual: `rows=${info.rows}, topHeight=${info.topHeight}, --class-top=${info.classTopVar}` };
    },
  },
];
