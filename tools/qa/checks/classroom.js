'use strict';
/** CLASSROOM：课堂模式入口、顶栏、字幕、进度、自动暂停、弹层、锁定、合影、toast */
const { assert, sleep } = require('../harness');
const { CHAPTERS } = require('../expected');

async function readState(page) { return page.evaluate(() => window.__classroom.state()); }

module.exports = [
  {
    key: 'class.enterParam',
    aliases: ['classroom.enter', 'class.enter', 'class.enterMode', 'class.param'],
    title: '?class 直接进入课堂模式',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const info = await s.page.evaluate(() => ({
        cls: window.__classroom.state().classroomMode,
        body: document.body.classList.contains('classroom-mode'),
        startHidden: document.getElementById('startScreen').classList.contains('hidden'),
        topVisible: getComputedStyle(document.getElementById('classroomTop')).display !== 'none',
        topButtons: document.querySelectorAll('#classroomTop button').length,
        toolbar: (() => { const t = document.querySelector('#classroomTop .class-top-actions'); return t ? { role: t.getAttribute('role'), label: t.getAttribute('aria-label') } : null; })(),
        subtitleVisible: getComputedStyle(document.getElementById('subtitleBar')).display !== 'none',
      }));
      await ctx.close(s);
      assert(info.cls && info.body, '?class 未进入课堂模式');
      assert(info.startHidden, '?class 下开场页未隐藏');
      assert(info.topVisible, '课堂顶栏不可见');
      assert(info.topButtons === 7, `课堂顶栏按钮=${info.topButtons}，期望 7（锁定已移除）`);
      assert(info.toolbar && info.toolbar.role === 'toolbar' && info.toolbar.label === '课堂工具', `顶栏 toolbar 语义=${JSON.stringify(info.toolbar)}`);
      assert(info.subtitleVisible, '字幕带不可见');
      return { message: '?class 直接进入课堂模式，顶栏 7 按钮与字幕带可见', actual: `classroomMode=true, topButtons=7` };
    },
  },
  {
    key: 'class.topButtons7',
    aliases: ['classroom.topbar', 'class.topbar', 'class.toolbar', 'class.topButtons'],
    title: '课堂顶栏 7 个工具按钮齐全',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const info = await s.page.evaluate(() => {
        const ids = ['classChapterBtn', 'classTeacherBtn', 'classFindBtn', 'classQuartetBtn', 'classAutoBtn', 'classProjectorBtn', 'classExitBtn'];
        return ids.map((id) => {
          const el = document.getElementById(id);
          const r = el.getBoundingClientRect();
          return { id, exists: !!el, text: el.textContent.trim(), w: Math.round(r.width), h: Math.round(r.height) };
        });
      });
      await ctx.close(s);
      assert(info.every((b) => b.exists && b.w > 0 && b.h > 0), `按钮缺失/不可见：${JSON.stringify(info.filter((b) => !b.exists || b.w === 0))}`);
      assert(info.length === 7, `按钮数=${info.length}`);
      const names = info.map((b) => b.text).join('/');
      for (const k of ['章节', '教师提示', '找一找', '四季合影', '每章停', '增亮', '退出']) {
        assert(names.includes(k), `缺少按钮文案「${k}」，实际：${names}`);
      }
      return { message: '课堂顶栏 7 个按钮齐全且全部可见', actual: `7/7: ${names}` };
    },
  },
  {
    key: 'class.subtitle',
    aliases: ['classroom.subtitle', 'class.subtitleText', 'class.chapterSubtitle'],
    title: '第 12 章课堂大字幕正确',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      const info = await s.page.evaluate(() => ({
        text: document.getElementById('subtitleText').textContent,
        meta: document.getElementById('subtitleMeta').textContent,
        live: document.getElementById('subtitleText').getAttribute('aria-live'),
        chapter: window.__classroom.state().currentChapter,
      }));
      await ctx.close(s);
      assert(info.chapter === 11, `currentChapter=${info.chapter}`);
      assert(info.text === CHAPTERS[11].text, `字幕文本=${info.text}`);
      assert(info.meta === '第 12 章 · 第二年 · 夏', `字幕 meta=${info.meta}`);
      assert(info.live === 'polite', `aria-live=${info.live}`);
      return { message: '?class&t0=210 显示第 12 章大字幕', actual: `meta=${info.meta}` };
    },
  },
  {
    key: 'class.progressSlider',
    aliases: ['classroom.progress', 'class.progress', 'class.progressAria', 'class.classProgress'],
    title: '#classProgress role=slider 与 aria 值',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const before = await s.page.evaluate(() => {
        const p = document.getElementById('classProgress');
        return { role: p.getAttribute('role'), min: p.getAttribute('aria-valuemin'), max: p.getAttribute('aria-valuemax'), now: p.getAttribute('aria-valuenow'), tabindex: p.getAttribute('tabindex'), label: p.getAttribute('aria-label') };
      });
      await s.page.evaluate(() => { window.__classroom.seekForTest(150); });
      await sleep(150);
      const after = await s.page.evaluate(() => document.getElementById('classProgress').getAttribute('aria-valuenow'));
      const box = await s.page.locator('#classProgress').boundingBox();
      await s.page.mouse.click(box.x + box.width * 0.5, box.y + box.height / 2);
      await sleep(250);
      const clickTime = await s.page.evaluate(() => window.__classroom.state().storyTime);
      await ctx.close(s);
      assert(before.role === 'slider', `role=${before.role}`);
      assert(before.min === '0' && before.max === '260', `aria-valuemin/max=${before.min}/${before.max}`);
      assert(before.tabindex === '0', `tabindex=${before.tabindex}`);
      assert(before.label === '课堂播放进度', `aria-label=${before.label}`);
      assert(Number(before.now) === 100, `初始 aria-valuenow=${before.now}`);
      assert(Number(after) === 150, `seek 后 aria-valuenow=${after}`);
      assert(Math.abs(clickTime - 130) < 2, `点击 50% 后 storyTime=${clickTime}，期望约 130`);
      return { message: '#classProgress 具备 slider 语义，aria-valuenow 更新且点击 50%≈130s', actual: `role=slider, now 100→150, click50%=${clickTime.toFixed(1)}` };
    },
  },
  {
    key: 'class.prevNextDisabled',
    aliases: ['classroom.prevNext', 'class.prevNext', 'class.chapterButtons'],
    title: '首尾章上一章/下一章禁用',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=0&freeze');
      const atStart = await s.page.evaluate(() => ({ prev: document.getElementById('classPrevBtn').disabled, next: document.getElementById('classNextBtn').disabled }));
      await s.page.evaluate(() => { window.__classroom.seekForTest(259); });
      await sleep(120);
      const atEnd = await s.page.evaluate(() => ({ prev: document.getElementById('classPrevBtn').disabled, next: document.getElementById('classNextBtn').disabled }));
      await s.page.evaluate(() => { window.__classroom.seekForTest(150); });
      await sleep(120);
      const mid = await s.page.evaluate(() => ({ prev: document.getElementById('classPrevBtn').disabled, next: document.getElementById('classNextBtn').disabled }));
      await ctx.close(s);
      assert(atStart.prev === true && atStart.next === false, `首章 disabled：prev=${atStart.prev}, next=${atStart.next}`);
      assert(atEnd.prev === false && atEnd.next === true, `末章 disabled：prev=${atEnd.prev}, next=${atEnd.next}`);
      assert(mid.prev === false && mid.next === false, `中间章 disabled：prev=${mid.prev}, next=${mid.next}`);
      return { message: '课堂上一章/下一章首尾禁用状态正确', actual: 'start: prev=disabled; end: next=disabled; mid: both enabled' };
    },
  },
  {
    key: 'class.autoPause',
    aliases: ['classroom.autoPause', 'class.chapterAutoPause', 'class.autoPauseAtChapter'],
    title: '每章结束自动暂停并提示',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=14.8', { readyTimeout: 30000 });
      // 本轮默认不开启每章停，测试里显式打开再验证；从 14.8s 起跑，软件 GL 下也只需跨过 16s 章节边界
      await s.page.click('#classAutoBtn');
      await s.page.waitForFunction(() => document.getElementById('pausePrompt').classList.contains('show'), null, { timeout: 30000 });
      const pause = await s.page.evaluate(() => ({
        text: document.getElementById('pausePrompt').textContent,
        state: window.__classroom.state(),
      }));
      await s.page.click('#pauseContinue');
      await s.page.waitForFunction(() => window.__classroom.state().storyTime > 16.05, null, { timeout: 12000 }).catch(() => {});
      const after = await readState(s.page);
      await ctx.close(s);
      assert(Math.abs(pause.state.storyTime - 16) < 0.4, `自动暂停时间=${pause.state.storyTime}，期望 16`);
      assert(pause.state.playing === false, '自动暂停后 playing 应为 false');
      assert(pause.text.includes('第 1 章结束') && pause.text.includes('下一章：春雨滋润'), `暂停提示=${pause.text}`);
      assert(after.playing === true, '点继续播放后 playing 应为 true');
      assert(after.storyTime > 16, `继续播放后时间未前进：${after.storyTime}`);
      return { message: '播放到 16s 自动暂停，提示第 1 章结束/下一章春雨滋润，继续可播放', actual: `t=${pause.state.storyTime.toFixed(2)}, text=${pause.text.trim()}` };
    },
  },
  {
    key: 'class.teacherPanel',
    aliases: ['classroom.teacher', 'class.teacher', 'class.teacherTips'],
    title: '教师提示弹层内容正确',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      await s.page.click('#classTeacherBtn');
      await sleep(450);
      const info = await s.page.evaluate(() => {
        const m = document.getElementById('teacherPanel');
        return {
          shown: m.classList.contains('show'),
          role: m.getAttribute('role'),
          title: document.getElementById('teacherTitle').textContent,
          body: document.getElementById('teacherBody').textContent,
          inertApp: document.getElementById('app').hasAttribute('inert'),
        };
      });
      await s.page.keyboard.press('Escape');
      await sleep(350);
      const closed = await s.page.evaluate(() => !document.getElementById('teacherPanel').classList.contains('show'));
      await ctx.close(s);
      assert(info.shown, '教师提示弹层未打开');
      assert(info.role === 'dialog', `teacherPanel role=${info.role}`);
      assert(info.title === '第 12 章 · 第二年 · 夏', `teacherTitle=${info.title}`);
      assert(info.body.includes('可以问') && info.body.includes('可以动'), '教师提示缺少 可以问/可以动');
      assert(info.inertApp, '弹层打开时 #app 未设置 inert');
      assert(closed, 'Esc 未关闭教师提示');
      return { message: '教师提示显示当前章「可以问/可以动」，Esc 可关闭', actual: `title=${info.title}` };
    },
  },
  {
    key: 'class.exitConfirm',
    aliases: ['classroom.exit', 'class.exit', 'class.exitConfirmPreserve'],
    title: '退出确认与进度保留',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      await s.page.click('#classExitBtn');
      await sleep(350);
      const modal = await s.page.evaluate(() => {
        const m = document.getElementById('exitConfirm');
        return { shown: m.classList.contains('show'), text: m.textContent, role: m.getAttribute('role') };
      });
      await s.page.click('#exitCancelBtn');
      await sleep(350);
      const stillClass = await s.page.evaluate(() => window.__classroom.state().classroomMode);
      await s.page.click('#classExitBtn');
      await sleep(350);
      await s.page.click('#exitConfirmBtn');
      await sleep(700);
      const after = await s.page.evaluate(() => ({
        cls: window.__classroom.state().classroomMode,
        storyTime: window.__classroom.state().storyTime,
        startVisible: !document.getElementById('startScreen').classList.contains('hidden'),
        freeText: document.getElementById('freeViewBtn').textContent,
      }));
      await ctx.close(s);
      assert(modal.shown && modal.role === 'dialog', '退出确认弹层未打开或语义异常');
      assert(modal.text.includes('当前进度会保留'), `退出确认文案=${modal.text}`);
      assert(stillClass === true, '点取消后不应退出课堂');
      assert(after.cls === false, '点退出课堂后 classroomMode 仍为 true');
      assert(Math.abs(after.storyTime - 100) < 0.5, `退出后 storyTime=${after.storyTime}，应保留 100`);
      assert(after.startVisible, '退出后开场页未恢复');
      assert(after.freeText.includes('继续观看'), `退出后自由观看按钮=${after.freeText}`);
      return { message: '退出课堂需二次确认，取消不退出，确认后保留进度', actual: `storyTime=${after.storyTime.toFixed(1)}, button=${after.freeText.trim()}` };
    },
  },
  {
    key: 'class.lockOverlay',
    aliases: ['classroom.lock', 'class.lock', 'class.lockScreen'],
    title: '锁定功能已移除',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const info = await s.page.evaluate(() => ({
        btn: !!document.getElementById('classLockBtn'),
        overlay: !!document.getElementById('lockOverlay'),
        stateHasLock: Object.prototype.hasOwnProperty.call(window.__classroom.state(), 'touchLocked'),
        buttons: document.querySelectorAll('#classroomTop button').length,
      }));
      await s.page.keyboard.press('l');
      await sleep(150);
      const after = await s.page.evaluate(() => ({ overlay: !!document.getElementById('lockOverlay'), bodyLocked: document.body.classList.contains('locked') }));
      await ctx.close(s);
      assert(!info.btn && !info.overlay && !info.stateHasLock, `锁定痕迹仍存在：${JSON.stringify(info)}`);
      assert(info.buttons === 7, `顶栏按钮=${info.buttons}，期望 7`);
      assert(!after.overlay && !after.bodyLocked, '按 L 后仍出现锁定层');
      return { message: '锁定按钮/遮罩/状态/快捷键均已移除', actual: 'classLockBtn=null, lockOverlay=null, L=no-op' };
    },
  },
  {
    key: 'class.quartet',
    aliases: ['classroom.quartet', 'class.quartet', 'class.fourSeasonsPhoto', 'class.quartetBusy'],
    title: '四季合影生成 4 张且忙状态正确',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      await s.page.click('#classQuartetBtn');
      const busy = await s.page.evaluate(() => {
        const b = document.getElementById('classQuartetBtn');
        return { busy: b.getAttribute('aria-busy'), disabled: b.disabled, cls: b.classList.contains('busy') };
      });
      await s.page.waitForFunction(() => document.getElementById('quartetOverlay').classList.contains('show'), null, { timeout: 30000 });
      await sleep(200);
      const info = await s.page.evaluate(() => {
        const grid = document.getElementById('quartetGrid');
        const figures = Array.from(grid.querySelectorAll('.quartet-item'));
        const b = document.getElementById('classQuartetBtn');
        return {
          count: figures.length,
          captions: figures.map((f) => f.querySelector('figcaption').textContent),
          imgs: figures.map((f) => { const im = f.querySelector('img'); return { src: im.getAttribute('src').slice(0, 22), w: im.naturalWidth, fit: getComputedStyle(im).objectFit }; }),
          ariaBusy: b.getAttribute('aria-busy'),
          disabled: b.disabled,
        };
      });
      await ctx.close(s);
      assert(busy.busy === 'true' && busy.disabled && busy.cls, `点击后忙状态异常 ${JSON.stringify(busy)}`);
      assert(info.count === 4, `合影图片=${info.count}，期望 4`);
      assert(info.captions.some((c) => c.includes('夏')) && info.captions.some((c) => c.includes('秋')) && info.captions.some((c) => c.includes('冬')) && info.captions.some((c) => c.includes('春')), `四季标签=${info.captions.join('/')}`);
      assert(info.imgs.every((i) => i.src.startsWith('data:image/jpeg')), '合影不是 canvas JPEG 快照');
      assert(info.imgs.every((i) => i.fit === 'contain'), `合影 object-fit=${info.imgs.map((i) => i.fit).join('/')}`);
      assert(info.ariaBusy === 'false' && !info.disabled, '合影完成后忙状态未复位');
      return { message: '四季合影生成夏/秋/冬/春 4 张，busy→idle 状态完整', actual: `count=4, captions=${info.captions.join(',')}` };
    },
  },
  {
    key: 'class.toast',
    aliases: ['classroom.toast', 'class.toast', 'class.feedbackToast'],
    title: '课堂操作 toast 反馈',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      await s.page.click('#classAutoBtn');
      await sleep(250);
      const info = await s.page.evaluate(() => {
        const t = document.getElementById('classToast');
        return { shown: t.classList.contains('show'), text: t.textContent, role: t.getAttribute('role'), live: t.getAttribute('aria-live') };
      });
      await ctx.close(s);
      assert(info.shown, '#classToast 未显示');
      assert(info.role === 'status' && info.live === 'polite', `toast 语义 role=${info.role} live=${info.live}`);
      assert(/自动暂停/.test(info.text), `toast 文本=${info.text}`);
      return { message: '课堂操作后底部 toast 正常反馈', actual: `text=${info.text}` };
    },
  },
  {
    key: 'class.projector',
    aliases: ['classroom.projector', 'class.projector', 'class.brightness'],
    title: '投影增亮开关与 aria-pressed',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      await s.page.click('#classProjectorBtn');
      await sleep(200);
      const on = await s.page.evaluate(() => ({ cls: document.body.classList.contains('projector'), pressed: document.getElementById('classProjectorBtn').getAttribute('aria-pressed'), filter: getComputedStyle(document.querySelector('#app canvas')).filter }));
      await s.page.click('#classProjectorBtn');
      await sleep(200);
      const off = await s.page.evaluate(() => ({ cls: document.body.classList.contains('projector'), pressed: document.getElementById('classProjectorBtn').getAttribute('aria-pressed'), filter: getComputedStyle(document.querySelector('#app canvas')).filter }));
      await ctx.close(s);
      assert(on.cls && on.pressed === 'true', `开启异常 ${JSON.stringify(on)}`);
      assert(/brightness\(1\.14\)/.test(on.filter), `投影增亮 canvas filter=${on.filter}`);
      assert(!off.cls && off.pressed === 'false', `关闭异常 ${JSON.stringify(off)}`);
      assert(!/brightness/.test(off.filter), `关闭后 filter=${off.filter}`);
      return { message: '投影增亮切换 body.projector 与 aria-pressed', actual: `on=true→false` };
    },
  },
  {
    key: 'class.voiceAria',
    aliases: ['classroom.voice', 'class.voice', 'class.readAloud'],
    title: '朗诵语音选择与无语音降级',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      // 1) 空语音列表：点击朗读必须降级提示，且不把 aria-pressed 误置为 true
      await s.page.evaluate(() => window.__classroom.speech.setVoicesForTest([]));
      const before = await s.page.evaluate(() => ({
        pressed: document.getElementById('classVoiceBtn').getAttribute('aria-pressed'),
        title: document.getElementById('classVoiceBtn').title,
      }));
      await s.page.click('#classVoiceBtn');
      await sleep(350);
      const fallback = await s.page.evaluate(() => {
        const n = document.getElementById('voiceNotice');
        const st = window.__classroom.speech.state();
        return {
          pressed: document.getElementById('classVoiceBtn').getAttribute('aria-pressed'),
          shown: n.classList.contains('show') && !n.hidden,
          text: document.getElementById('voiceNoticeText').textContent,
          available: st.available,
          reason: st.reason,
          title: document.getElementById('classVoiceBtn').title,
        };
      });
      assert(before.pressed === 'false', `初始 aria-pressed=${before.pressed}`);
      assert(!fallback.available && fallback.reason === 'no-voices', `空语音列表状态=${JSON.stringify(fallback)}`);
      assert(fallback.pressed === 'false', `无语音时点击后 aria-pressed 不应变为 true：${fallback.pressed}`);
      assert(fallback.shown, '无语音时未显示 #voiceNotice 降级提示');
      assert(/语音|朗读/.test(fallback.text) && /Chrome|Edge|系统/.test(fallback.text), `降级提示文案不完整：${fallback.text}`);

      // 2) 排序：中文在线自然音 > 本机中文音 > 英文
      const ranked = await s.page.evaluate(() => {
        window.__classroom.speech.setVoicesForTest([
          { name: 'Tingting', lang: 'zh-CN', voiceURI: 'Tingting', localService: true, default: true },
          { name: 'Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)', lang: 'zh-CN', voiceURI: 'Microsoft Xiaoxiao Online (Natural) - Chinese (Mainland)', localService: false },
          { name: 'Microsoft Yunxi Online (Natural) - Chinese (Mainland)', lang: 'zh-CN', voiceURI: 'Microsoft Yunxi Online (Natural) - Chinese (Mainland)', localService: false },
          { name: 'Google 普通话（中国大陆）', lang: 'zh-CN', voiceURI: 'Google 普通话（中国大陆）', localService: true },
          { name: 'English (United States)', lang: 'en-US', voiceURI: 'en-US', localService: true },
        ]);
        return window.__classroom.speech.state();
      });
      assert(ranked.available && ranked.voice, `在线自然音列表不可用：${JSON.stringify(ranked)}`);
      assert(/Xiaoxiao/i.test(ranked.voice.rawName || ranked.voice.name), `未优先选择 Xiaoxiao Online：${ranked.voice.name}`);
      assert(ranked.voice.online && ranked.voice.natural, `首选音不是在线自然音：${JSON.stringify(ranked.voice)}`);

      // 3) 只有本机中文音时仍可用，且标记为 local
      const local = await s.page.evaluate(() => {
        window.__classroom.speech.setVoicesForTest([
          { name: 'Tingting', lang: 'zh-CN', voiceURI: 'Tingting', localService: true, default: true },
          { name: 'English (United States)', lang: 'en-US', voiceURI: 'en-US', localService: true },
        ]);
        return window.__classroom.speech.state();
      });
      assert(local.available && /Tingting/i.test(local.voice.rawName || local.voice.name), `本机中文音回退失败：${JSON.stringify(local)}`);
      assert(local.voice.online === false, `本机中文音不应标记为 online：${JSON.stringify(local.voice)}`);

      // 4) 只有非中文音：明确 no-chinese，而不是拿英文声音硬读中文
      const nonChinese = await s.page.evaluate(() => {
        window.__classroom.speech.setVoicesForTest([{ name: 'English (United States)', lang: 'en-US', voiceURI: 'en-US', localService: true }]);
        return window.__classroom.speech.state();
      });
      assert(!nonChinese.available && nonChinese.reason === 'no-chinese', `仅非中文音状态=${JSON.stringify(nonChinese)}`);

      await s.page.evaluate(() => window.__classroom.speech.resetForTest());
      await ctx.close(s);
      return {
        message: '在线自然音优先、本机中文音可用、无中文音降级提示',
        actual: `fallback=${fallback.reason}, pick=${ranked.voice.name}, local=${local.voice.name}, nonChinese=${nonChinese.reason}`,
      };
    },
  },
  {
    key: 'class.progressKeyboard',
    aliases: ['classroom.progressKeyboard', 'class.progressKeys', 'class.classProgressKeyboard'],
    title: '课堂进度条键盘 ±5 秒',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      await s.page.focus('#classProgress');
      await s.page.keyboard.press('ArrowRight');
      await sleep(150);
      const info = await s.page.evaluate(() => ({ storyTime: window.__classroom.state().storyTime, now: document.getElementById('classProgress').getAttribute('aria-valuenow') }));
      await s.page.keyboard.press('ArrowLeft');
      await sleep(150);
      const back = await s.page.evaluate(() => window.__classroom.state().storyTime);
      await ctx.close(s);
      assert(Math.abs(info.storyTime - 105) < 0.3, `ArrowRight 后 storyTime=${info.storyTime}`);
      assert(Number(info.now) === 105, `aria-valuenow=${info.now}`);
      assert(Math.abs(back - 100) < 0.3, `ArrowLeft 后 storyTime=${back}`);
      return { message: '课堂进度条聚焦后 ←/→ 每次 5 秒', actual: `100→${info.storyTime.toFixed(1)}→${back.toFixed(1)}` };
    },
  },
  {
    key: 'class.seasonWheel',
    aliases: ['classroom.wheel', 'class.seasonWheel', 'class.wheel'],
    title: '季节转盘为纯图表且年份正确',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      const info = await s.page.evaluate(() => {
        const w = document.getElementById('seasonWheel');
        const labels = Array.from(w.querySelectorAll('.wheel-label')).map((l) => l.textContent.trim());
        return {
          ariaHidden: w.getAttribute('aria-hidden'),
          pointerEvents: getComputedStyle(w).pointerEvents,
          labels,
          year: document.getElementById('wheelYear').textContent,
        };
      });
      await ctx.close(s);
      assert(info.ariaHidden === 'true', `seasonWheel aria-hidden=${info.ariaHidden}`);
      assert(info.pointerEvents === 'none', `seasonWheel pointer-events=${info.pointerEvents}`);
      assert(info.labels.length === 4 && ['春', '夏', '秋', '冬'].every((x) => info.labels.includes(x)), `转盘标签=${info.labels.join('/')}`);
      assert(info.year === '第 2 年', `wheelYear=${info.year}`);
      return { message: '季节转盘 aria-hidden 纯图表，四角标签与年份正确', actual: `labels=${info.labels.join('/')}, year=${info.year}` };
    },
  },
  {
    key: 'class.endToast',
    aliases: ['classroom.end', 'class.endToast', 'class.storyEnd'],
    title: '播放结束 toast 提示回顾合影',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=259.85');
      await s.page.waitForFunction(() => {
        const t = document.getElementById('classToast');
        return t.classList.contains('show') && /播放结束/.test(t.textContent);
      }, null, { timeout: 20000 });
      const info = await s.page.evaluate(() => ({
        text: document.getElementById('classToast').textContent,
        state: window.__classroom.state(),
        quartetShown: document.getElementById('quartetOverlay').classList.contains('show'),
      }));
      await ctx.close(s);
      assert(info.text.includes('本课播放结束') && info.text.includes('四季合影'), `结束 toast=${info.text}`);
      assert(info.state.playing === false, '播放结束后 playing 应为 false');
      assert(Math.abs(info.state.storyTime - 259.9) < 0.15, `播放结束 storyTime=${info.state.storyTime}`);
      assert(!info.quartetShown, '播放结束不应自动弹合影');
      return { message: '播放结束 toast 提示可回顾四季合影，不强制弹层', actual: `text=${info.text}` };
    },
  },
];
