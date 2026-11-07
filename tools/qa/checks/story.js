'use strict';
/** STORY：14 章数据、章节弹层、切章同步、时间轴范围与叙事文案 */
const { assert, sleep } = require('../harness');
const { CHAPTERS, MIDPOINTS } = require('../expected');

module.exports = [
  {
    key: 'story.chapterRail14',
    aliases: ['story.chapterCount', 'story.14chapters', 'story.chapterRail'],
    title: '章节刻线 14 段完整',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const info = await s.page.evaluate(() => {
        const rail = document.getElementById('chapterRail');
        return {
          count: rail.children.length,
          titles: Array.from(rail.children).map((el) => el.getAttribute('title')),
          ariaHidden: rail.getAttribute('aria-hidden'),
        };
      });
      const at0 = await s.page.evaluate(() => {
        window.__classroom.seekForTest(0);
        return Array.from(document.getElementById('chapterRail').children).map((c) => c.className);
      });
      const at210 = await s.page.evaluate(() => {
        window.__classroom.seekForTest(210);
        return Array.from(document.getElementById('chapterRail').children).map((c) => c.className);
      });
      await ctx.close(s);
      assert(info.count === 14, `#chapterRail 子元素=${info.count}，期望 14`);
      assert(JSON.stringify(info.titles) === JSON.stringify(CHAPTERS.map((c) => c.title)), `刻线标题不匹配：${info.titles.join('/')}`);
      assert(info.ariaHidden === 'true', '#chapterRail 缺少 aria-hidden=true');
      assert(at0[0] === 'current' && at0.filter((c) => c === 'done').length === 0, `t=0 刻线=${at0.join('/')}`);
      assert(at210.filter((c) => c === 'done').length === 11 && at210[11] === 'current', `t=210 刻线 done=${at210.filter((c) => c === 'done').length}, current=${at210.indexOf('current')}`);
      return { message: '章节刻线 14 段，标题与 done/current 状态正确', actual: `count=14; t0 current=0; t210 done=11 current=11` };
    },
  },
  {
    key: 'story.chapterTitlesMap',
    aliases: ['story.chapterText', 'story.chapterCopy', 'story.chapterMapping', 'story.narration'],
    title: '14 章标题与文案映射正确',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const rows = [];
      for (let i = 0; i < MIDPOINTS.length; i++) {
        const t = MIDPOINTS[i];
        await s.page.evaluate((tt) => { window.__classroom.seekForTest(tt); }, t);
        const info = await s.page.evaluate(() => ({
          title: document.getElementById('chapterTitle').textContent,
          text: document.getElementById('chapterText').textContent,
          index: document.getElementById('chapterIndex').textContent,
          subtitleMeta: document.getElementById('subtitleMeta').textContent,
          subtitleText: document.getElementById('subtitleText').textContent,
        }));
        rows.push(info);
        assert(info.title === CHAPTERS[i].title, `第 ${i + 1} 章标题="${info.title}"，期望 "${CHAPTERS[i].title}"`);
        assert(info.text === CHAPTERS[i].text, `第 ${i + 1} 章正文不一致`);
        assert(info.index === `第 ${i + 1} 章 / 共 14 章`, `第 ${i + 1} 章 #chapterIndex="${info.index}"`);
        assert(info.subtitleMeta === `第 ${i + 1} 章 · ${CHAPTERS[i].title}`, `第 ${i + 1} 章字幕 meta="${info.subtitleMeta}"`);
        assert(info.subtitleText === CHAPTERS[i].text, `第 ${i + 1} 章字幕正文不一致`);
      }
      await ctx.close(s);
      return { message: '14 章标题/正文/章节号/字幕全部映射正确', actual: `14/14 exact match` };
    },
  },
  {
    key: 'story.chapterDrawer14',
    aliases: ['story.chapterModal', 'story.chapterGrid', 'story.chapterPicker'],
    title: '章节弹层 14 张卡片',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze&dbg');
      await s.page.click('#chapterBtnNormal');
      await sleep(500);
      const info = await s.page.evaluate(() => {
        const modal = document.getElementById('chapterDrawer');
        const cards = Array.from(modal.querySelectorAll('.chapter-item'));
        return {
          shown: modal.classList.contains('show'),
          role: modal.getAttribute('role'),
          modal: modal.getAttribute('aria-modal'),
          count: cards.length,
          names: cards.map((c) => c.querySelector('.chapter-name').textContent),
          current: cards.filter((c) => c.classList.contains('current')).length,
          currentAria: cards.filter((c) => c.getAttribute('aria-current') === 'step').length,
          visibleCards: cards.filter((c) => c.getBoundingClientRect().height > 0).length,
        };
      });
      await ctx.close(s);
      assert(info.shown, '章节弹层未打开');
      assert(info.role === 'dialog' && info.modal === 'true', '章节弹层 dialog 语义异常');
      assert(info.count === 14, `章节卡片=${info.count}，期望 14`);
      assert(JSON.stringify(info.names) === JSON.stringify(CHAPTERS.map((c) => c.title)), '章节卡片标题不匹配');
      assert(info.current === 1 && info.currentAria === 1, `当前章高亮=${info.current}，aria-current=${info.currentAria}`);
      assert(info.visibleCards === 14, `可见卡片=${info.visibleCards}`);
      return { message: '章节弹层 14 张卡片完整，当前章高亮并带 aria-current', actual: `cards=14, current=1, aria-current=1` };
    },
  },
  {
    key: 'story.chapterSwitchSync',
    aliases: ['story.chapterSwitch', 'story.switchChapter', 'story.chapterJump'],
    title: '切章后 HUD/季节同步',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0');
      await s.page.click('#chapterBtnNormal');
      await sleep(800);
      await s.page.locator('#chapterGrid .chapter-item[data-index="11"]').click({ force: true });
      // 季节 HUD 由 animate() 在下一帧更新；软件 GL 单帧可能需要数秒
      await s.page.waitForFunction(() => document.body.dataset.season === '夏' && document.getElementById('season').textContent === '夏', null, { timeout: 20000 }).catch(() => {});
      await sleep(100);
      const info = await s.page.evaluate(() => {
        const st = window.__classroom.state();
        const rail = document.getElementById('chapterRail');
        return {
          storyTime: st.storyTime,
          currentChapter: st.currentChapter,
          title: document.getElementById('chapterTitle').textContent,
          season: document.body.dataset.season,
          seasonText: document.getElementById('season').textContent,
          classTitle: document.getElementById('classChapterTitle').textContent,
          subtitle: document.getElementById('subtitleText').textContent,
          modalShown: document.getElementById('chapterDrawer').classList.contains('show'),
          railCurrent: Array.from(rail.children).findIndex((c) => c.classList.contains('current')),
          railDone: Array.from(rail.children).filter((c) => c.classList.contains('done')).length,
        };
      });
      await ctx.close(s);
      assert(Math.abs(info.storyTime - 200.01) < 0.3, `storyTime=${info.storyTime}，期望约 200.01`);
      assert(info.currentChapter === 11, `currentChapter=${info.currentChapter}，期望 11`);
      assert(info.title === '第二年 · 夏', `#chapterTitle=${info.title}`);
      assert(info.season === '夏' && info.seasonText === '夏', `季节同步失败 body=${info.season}, #season=${info.seasonText}`);
      assert(info.classTitle === '第二年 · 夏', `#classChapterTitle=${info.classTitle}`);
      assert(info.subtitle.includes('树荫像一把大伞'), '字幕未切到第 12 章');
      assert(!info.modalShown, '切章后章节弹层未关闭');
      assert(info.railCurrent === 11 && info.railDone === 11, `刻线状态 current=${info.railCurrent}, done=${info.railDone}`);
      return { message: '点击第 12 章卡片后时间/HUD/季节/字幕同步', actual: `t=${info.storyTime.toFixed(2)}, season=夏, rail=11/14` };
    },
  },
  {
    key: 'story.timelineMax',
    aliases: ['story.timelineRange', 'story.storyEnd', 'player.timelineMax'],
    title: '时间轴范围 0–259.9s',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const info = await s.page.evaluate(() => {
        const tl = document.getElementById('timeline');
        return { min: tl.min, max: tl.max, step: tl.step, value: tl.value, timecode: document.getElementById('timecode').textContent };
      });
      await ctx.close(s);
      assert(info.min === '0', `timeline.min=${info.min}`);
      assert(info.max === '259.9', `timeline.max=${info.max}，期望 259.9`);
      assert(info.step === '0.1', `timeline.step=${info.step}`);
      assert(/\/ 04:20$/.test(info.timecode), `timecode=${info.timecode}`);
      return { message: '时间轴 min=0 / max=259.9 / step=0.1，总时长 04:20', actual: `min=${info.min}, max=${info.max}, step=${info.step}` };
    },
  },
  {
    key: 'story.seasonTimeline',
    aliases: ['story.seasons', 'story.yearHud', 'story.seasonSync'],
    title: '14 章季节与年份 HUD 同步',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const rows = [];
      for (let i = 0; i < MIDPOINTS.length; i++) {
        const info = await s.page.evaluate((tt) => {
          window.__classroom.seekForTest(tt);
          return {
            season: document.body.dataset.season,
            seasonText: document.getElementById('season').textContent,
            year: document.getElementById('year').textContent,
            wheelYear: document.getElementById('wheelYear').textContent,
          };
        }, MIDPOINTS[i]);
        const expectYear = i >= 10 ? '第 2 年' : '第 1 年';
        rows.push({ i, ...info });
        assert(info.season === CHAPTERS[i].season && info.seasonText === CHAPTERS[i].season, `第 ${i + 1} 章季节=${info.season}/${info.seasonText}，期望 ${CHAPTERS[i].season}`);
        assert(info.year === expectYear, `第 ${i + 1} 章年份=${info.year}，期望 ${expectYear}`);
        assert(info.wheelYear === expectYear, `第 ${i + 1} 章转盘年份=${info.wheelYear}`);
      }
      await ctx.close(s);
      return { message: '14 章季节标签与第 1/2 年 HUD 全部正确', actual: `chapters 1-10=第1年, 11-14=第2年` };
    },
  },
  {
    key: 'story.subtitleHighlight',
    aliases: ['story.subtitle', 'story.subtitleKeywords', 'story.narrationHighlight'],
    title: '字幕关键词高亮与 aria-live',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const info = await s.page.evaluate(() => {
        window.__classroom.seekForTest(210);
        const el = document.getElementById('subtitleText');
        return {
          live: el.getAttribute('aria-live'),
          atomic: el.getAttribute('aria-atomic'),
          emCount: el.querySelectorAll('em').length,
          text: el.textContent,
          chapterText: document.getElementById('chapterText').textContent,
          meta: document.getElementById('subtitleMeta').textContent,
        };
      });
      await ctx.close(s);
      assert(info.live === 'polite' && info.atomic === 'true', `subtitle aria-live=${info.live}, atomic=${info.atomic}`);
      assert(info.emCount >= 3, `字幕关键词高亮 em=${info.emCount}，期望 ≥3`);
      assert(info.text.includes('小鸟和昆虫'), `字幕文本异常：${info.text}`);
      assert(info.text === info.chapterText, '字幕文本与 #chapterText 不一致');
      assert(info.meta === '第 12 章 · 第二年 · 夏', `字幕 meta=${info.meta}`);
      return { message: '字幕与旁白同源，关键词 <em> 高亮、meta 正确', actual: `em=${info.emCount}, meta=${info.meta}` };
    },
  },
  {
    key: 'story.railProgressState',
    aliases: ['story.chapterRailState', 'story.progressRail'],
    title: '章节刻线 done/current 状态',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const mid = await s.page.evaluate(() => { window.__classroom.seekForTest(150); return Array.from(document.getElementById('chapterRail').children).map((c) => c.className); });
      const start = await s.page.evaluate(() => { window.__classroom.seekForTest(0); return Array.from(document.getElementById('chapterRail').children).map((c) => c.className); });
      await ctx.close(s);
      assert(mid.filter((c) => c === 'done').length === 8, `t=150 done=${mid.filter((c) => c === 'done').length}，期望 8`);
      assert(mid[8] === 'current', `t=150 current 位置=${mid.indexOf('current')}，期望 8`);
      assert(start[0] === 'current' && start.filter((c) => c === 'done').length === 0, 't=0 刻线状态异常');
      return { message: '章节刻线随播放进度更新 done/current', actual: `t=150: done=8 current=8; t=0: current=0` };
    },
  },
];
