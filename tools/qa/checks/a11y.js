'use strict';
/** A11Y：弹层语义/inert/焦点循环/焦点恢复、状态 aria、reduced-motion、44px 触控 */
const { assert, sleep } = require('../harness');

const MODALS = [
  ['chapterDrawer', 'chapterDrawerTitle'],
  ['teacherPanel', 'teacherTitle'],
  ['quartetOverlay', 'quartetTitle'],
  ['shortcutPanel', 'shortcutTitle'],
  ['exitConfirm', 'exitConfirmTitle'],
];

module.exports = [
  {
    key: 'a11y.modalSemantics',
    aliases: ['a11y.modals', 'a11y.dialogSemantics', 'a11y.modalRoles'],
    title: '5 个弹层 role/aria-modal/labelledby',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const info = await s.page.evaluate((modals) => modals.map(([id, labelId]) => {
        const m = document.getElementById(id);
        return {
          id,
          role: m.getAttribute('role'),
          modal: m.getAttribute('aria-modal'),
          labelledby: m.getAttribute('aria-labelledby'),
          labelExists: !!document.getElementById(labelId),
        };
      }), MODALS);
      const part = await s.page.evaluate(() => ({
        role: document.getElementById('partCard').getAttribute('role'),
        modal: document.getElementById('partCard').getAttribute('aria-modal'),
        labelledby: document.getElementById('partCard').getAttribute('aria-labelledby'),
        labelExists: !!document.getElementById('partName'),
      }));
      await ctx.close(s);
      for (const m of info) {
        assert(m.role === 'dialog', `${m.id} role=${m.role}`);
        assert(m.modal === 'true', `${m.id} aria-modal=${m.modal}`);
        assert(m.labelledby && m.labelExists, `${m.id} aria-labelledby=${m.labelledby} 无效`);
      }
      assert(part.role === 'dialog' && part.modal === 'false' && part.labelExists, `#partCard 语义异常：${JSON.stringify(part)}`);
      return { message: '5 个 modal 均为 dialog/aria-modal/aria-labelledby，#partCard 为非模态 dialog', actual: '5/5 modal ok, partCard aria-modal=false' };
    },
  },
  {
    key: 'a11y.modalInert',
    aliases: ['a11y.backgroundInert', 'a11y.inert', 'a11y.modalBackground'],
    title: '弹层打开时背景 inert',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      await s.page.click('#chapterBtnNormal');
      await sleep(450);
      const open = await s.page.evaluate(() => {
        const ids = ['app', 'sidebar', 'player', 'classroomTop', 'classroomBar', 'subtitleBar', 'seasonWheel', 'vignette'];
        return ids.map((id) => ({ id, inert: document.getElementById(id).hasAttribute('inert') }));
      });
      await s.page.keyboard.press('Escape');
      await sleep(350);
      const closed = await s.page.evaluate(() => ['app', 'sidebar', 'player'].map((id) => document.getElementById(id).hasAttribute('inert')));
      await ctx.close(s);
      assert(open.every((i) => i.inert), `打开弹层后未全部 inert：${open.filter((i) => !i.inert).map((i) => i.id).join(',')}`);
      assert(closed.every((v) => !v), '关闭弹层后 inert 未移除');
      return { message: '弹层打开时 8 个背景区域 inert，关闭后解除', actual: `open=8/8 inert, closed=0/3` };
    },
  },
  {
    key: 'a11y.focusTrap',
    aliases: ['a11y.tabTrap', 'a11y.modalFocusTrap', 'a11y.focusLoop'],
    title: '弹层 Tab 焦点循环',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      await s.page.click('#chapterBtnNormal');
      await sleep(500);
      const results = [];
      for (let i = 0; i < 12; i++) {
        await s.page.keyboard.press('Tab');
        results.push(await s.page.evaluate(() => {
          const a = document.activeElement;
          const modal = document.querySelector('.modal.show');
          return { id: a ? a.id || a.className : '', inModal: !!(modal && a && modal.contains(a)) };
        }));
      }
      await ctx.close(s);
      assert(results.every((r) => r.inModal), `Tab 焦点跑出弹层：${results.filter((r) => !r.inModal).map((r) => r.id).join(',')}`);
      return { message: 'Tab 12 次焦点始终在弹层内循环', actual: `12/12 in modal, sequence=${results.slice(0, 4).map((r) => r.id).join('→')}…` };
    },
  },
  {
    key: 'a11y.escRestoreFocus',
    aliases: ['a11y.focusRestore', 'a11y.escClose', 'a11y.modalEsc'],
    title: 'Esc 关闭弹层并恢复焦点',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      await s.page.focus('#chapterBtnNormal');
      await s.page.click('#chapterBtnNormal');
      await sleep(450);
      const opened = await s.page.evaluate(() => document.getElementById('chapterDrawer').classList.contains('show'));
      await s.page.keyboard.press('Escape');
      await sleep(350);
      const info = await s.page.evaluate(() => ({
        closed: !document.getElementById('chapterDrawer').classList.contains('show'),
        activeId: document.activeElement ? document.activeElement.id : '',
      }));
      await ctx.close(s);
      assert(opened, '章节弹层未打开');
      assert(info.closed, 'Esc 未关闭章节弹层');
      assert(info.activeId === 'chapterBtnNormal', `关闭后焦点=${info.activeId}，期望 chapterBtnNormal`);
      return { message: 'Esc 关闭弹层并把焦点还给触发按钮', actual: `focus=${info.activeId}` };
    },
  },
  {
    key: 'a11y.startDialog',
    aliases: ['a11y.startScreen', 'a11y.openingDialog', 'a11y.startFocus'],
    title: '开场页 dialog 语义与焦点',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitMs: 1000 });
      const info = await s.page.evaluate(() => {
        const ss = document.getElementById('startScreen');
        return {
          role: ss.getAttribute('role'),
          modal: ss.getAttribute('aria-modal'),
          labelledby: ss.getAttribute('aria-labelledby'),
          active: document.activeElement ? document.activeElement.id : '',
          appInert: document.getElementById('app').hasAttribute('inert'),
          sidebarInert: document.getElementById('sidebar').hasAttribute('inert'),
        };
      });
      const tabs = [];
      for (let i = 0; i < 6; i++) {
        await s.page.keyboard.press('Tab');
        tabs.push(await s.page.evaluate(() => {
          const a = document.activeElement;
          return { id: a ? a.id : '', inStart: !!(a && document.getElementById('startScreen').contains(a)) };
        }));
      }
      await ctx.close(s);
      assert(info.role === 'dialog' && info.modal === 'true', `startScreen role=${info.role} aria-modal=${info.modal}`);
      assert(info.labelledby === 'startTitle', `aria-labelledby=${info.labelledby}`);
      assert(info.active === 'startClassBtn', `初始焦点=${info.active}，期望 startClassBtn`);
      assert(info.appInert && info.sidebarInert, '开场页显示时背景未 inert');
      assert(tabs.every((t) => t.inStart), `Tab 焦点跑出开场页：${tabs.filter((t) => !t.inStart).map((t) => t.id).join(',')}`);
      return { message: '开场页 dialog 语义正确，初始焦点开始上课，Tab 限制在开场页内', actual: `active=${info.active}, appInert=true` };
    },
  },
  {
    key: 'a11y.progressAria',
    aliases: ['a11y.classProgress', 'a11y.slider', 'a11y.progressValue'],
    title: '#classProgress slider aria 值更新',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const before = await s.page.evaluate(() => {
        const p = document.getElementById('classProgress');
        return { role: p.getAttribute('role'), now: p.getAttribute('aria-valuenow'), max: p.getAttribute('aria-valuemax'), label: p.getAttribute('aria-label') };
      });
      await s.page.evaluate(() => { window.__classroom.seekForTest(210); });
      await sleep(150);
      const after = await s.page.evaluate(() => document.getElementById('classProgress').getAttribute('aria-valuenow'));
      await ctx.close(s);
      assert(before.role === 'slider' && before.max === '260' && before.label === '课堂播放进度', `slider 语义异常 ${JSON.stringify(before)}`);
      assert(Number(before.now) === 100 && Number(after) === 210, `aria-valuenow ${before.now}→${after}，期望 100→210`);
      return { message: '#classProgress aria-valuenow 随 seek 从 100 更新到 210', actual: `${before.now}→${after}` };
    },
  },
  {
    key: 'a11y.ariaPressed',
    aliases: ['a11y.toggleButtons', 'a11y.pressed', 'a11y.classToggles'],
    title: '课堂开关按钮 aria-pressed',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const read = () => s.page.evaluate(() => ['classAutoBtn', 'classVoiceBtn', 'classProjectorBtn'].map((id) => ({ id, pressed: document.getElementById(id).getAttribute('aria-pressed') })));
      const before = await read();
      await s.page.click('#classAutoBtn');
      await sleep(150);
      await s.page.click('#classProjectorBtn');
      await sleep(150);
      const after = await read();
      await ctx.close(s);
      assert(before.every((b) => b.pressed === 'true' || b.pressed === 'false'), `缺少 aria-pressed：${JSON.stringify(before)}`);
      const autoBefore = before.find((b) => b.id === 'classAutoBtn').pressed;
      const autoAfter = after.find((b) => b.id === 'classAutoBtn').pressed;
      const projBefore = before.find((b) => b.id === 'classProjectorBtn').pressed;
      const projAfter = after.find((b) => b.id === 'classProjectorBtn').pressed;
      assert(autoBefore !== autoAfter, '每章停 aria-pressed 未翻转');
      assert(projBefore !== projAfter, '增亮 aria-pressed 未翻转');
      return { message: '3 个课堂开关均带 aria-pressed 且随点击翻转', actual: `auto ${autoBefore}→${autoAfter}, projector ${projBefore}→${projAfter}` };
    },
  },
  {
    key: 'a11y.reducedMotion',
    aliases: ['a11y.reduced', 'a11y.prefersReducedMotion', 'a11y.motion'],
    title: 'prefers-reduced-motion 关闭动效',
    run: async (ctx) => {
      const s = await ctx.open('/', { reducedMotion: 'reduce', waitMs: 600 });
      const info = await s.page.evaluate(() => {
        const pick = (el) => {
          if (!el) return null;
          const cs = getComputedStyle(el);
          return { animationDuration: cs.animationDuration, transitionDuration: cs.transitionDuration };
        };
        return {
          matches: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
          startCopy: pick(document.querySelector('#startScreen .start-copy > *')),
          playBtn: pick(document.getElementById('playBtn')),
          app: pick(document.getElementById('app')),
        };
      });
      await ctx.close(s);
      const toSec = (v) => Math.max(...String(v).split(',').map((x) => parseFloat(x) || 0));
      assert(info.matches, 'reducedMotion 媒体查询未生效');
      for (const [name, v] of Object.entries({ startCopy: info.startCopy, playBtn: info.playBtn, app: info.app })) {
        if (!v) continue;
        assert(toSec(v.animationDuration) < 0.01, `${name} animation-duration=${v.animationDuration}，未压缩到 .001ms`);
        assert(toSec(v.transitionDuration) < 0.01, `${name} transition-duration=${v.transitionDuration}，未压缩到 .001ms`);
      }
      return { message: 'reduced-motion 下 animation/transition 时长压缩到 0.001ms', actual: `startCopy=${info.startCopy.animationDuration}, playBtn=${info.playBtn.transitionDuration}` };
    },
  },
  {
    key: 'a11y.icons',
    aliases: ['a11y.svg', 'a11y.iconSemantics', 'a11y.buttonNames'],
    title: 'SVG 图标 aria-hidden 与按钮可访问名',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const info = await s.page.evaluate(() => {
        const icons = Array.from(document.querySelectorAll('button svg'));
        const badIcons = icons.filter((svg) => svg.getAttribute('aria-hidden') !== 'true' && !svg.closest('[aria-label]'));
        const buttons = Array.from(document.querySelectorAll('button'));
        const nameless = buttons.filter((b) => {
          const name = (b.getAttribute('aria-label') || '').trim() || (b.textContent || '').trim();
          return !name;
        }).map((b) => b.id || b.className);
        const uses = document.querySelectorAll('use[href^="#i-"]').length;
        const sprite = document.querySelector('svg[width="0"]');
        const spriteHidden = sprite ? sprite.getAttribute('aria-hidden') : null;
        return { icons: icons.length, badIcons: badIcons.length, buttons: buttons.length, nameless, uses, spriteHidden };
      });
      await ctx.close(s);
      assert(info.icons >= 10, `按钮内 SVG=${info.icons}，期望 ≥10`);
      assert(info.badIcons === 0, `有 ${info.badIcons} 个 SVG 未 aria-hidden`);
      assert(info.nameless.length === 0, `无可见名称的按钮：${info.nameless.join(',')}`);
      assert(info.uses >= 15, `内联 icon 使用=${info.uses}，期望 ≥15`);
      assert(info.spriteHidden === 'true', 'sprite 根 svg 缺少 aria-hidden=true');
      return { message: '全部 SVG aria-hidden，所有 button 有可访问名称，sprite 15 图标被使用', actual: `buttonSvg=${info.icons}, uses=${info.uses}, buttons=${info.buttons}, nameless=0` };
    },
  },
  {
    key: 'a11y.canvasRole',
    aliases: ['a11y.canvas', 'a11y.canvasAria', 'a11y.canvasKeyboardLabel'],
    title: 'canvas role/aria-label/tabindex',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze');
      const info = await s.page.evaluate(() => {
        const c = document.querySelector('#app canvas');
        return { tabindex: c.getAttribute('tabindex'), role: c.getAttribute('role'), label: c.getAttribute('aria-label') };
      });
      await ctx.close(s);
      assert(info.tabindex === '0', `canvas tabindex=${info.tabindex}`);
      assert(info.role === 'application', `canvas role=${info.role}`);
      assert(info.label && info.label.includes('3D 树木画面') && info.label.includes('方向键'), `canvas aria-label=${info.label}`);
      return { message: 'canvas 可聚焦且具备中文操作说明', actual: `tabindex=0, role=application` };
    },
  },
  {
    key: 'a11y.liveRegions',
    aliases: ['a11y.live', 'a11y.statusRoles', 'a11y.announcements'],
    title: '状态播报 live region 配置',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze');
      const info = await s.page.evaluate(() => {
        const get = (id) => {
          const el = document.getElementById(id);
          return { role: el.getAttribute('role'), live: el.getAttribute('aria-live'), atomic: el.getAttribute('aria-atomic') };
        };
        return { subtitle: get('subtitleText'), find: get('findBanner'), pause: get('pausePrompt'), toast: get('classToast'), loading: get('loading') };
      });
      await ctx.close(s);
      assert(info.subtitle.live === 'polite' && info.subtitle.atomic === 'true', `subtitle=${JSON.stringify(info.subtitle)}`);
      assert(info.find.role === 'status' && info.find.live === 'polite', `findBanner=${JSON.stringify(info.find)}`);
      assert(info.pause.role === 'status', `pausePrompt=${JSON.stringify(info.pause)}`);
      assert(info.toast.role === 'status' && info.toast.live === 'polite', `classToast=${JSON.stringify(info.toast)}`);
      assert(info.loading.role === 'status', `loading=${JSON.stringify(info.loading)}`);
      return { message: '字幕/找一找/暂停/ toast/加载层均具备 status/live 语义', actual: 'subtitle, findBanner, pausePrompt, classToast, loading ok' };
    },
  },
  {
    key: 'a11y.modalClose44',
    aliases: ['a11y.closeButton', 'a11y.modalClose', 'a11y.closeTarget'],
    title: '移动端弹层关闭按钮 44px',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze', { viewport: { width: 390, height: 844 } });
      await s.page.click('#chapterBtnNormal');
      await sleep(450);
      const info = await s.page.evaluate(() => Array.from(document.querySelectorAll('.modal.show .modal-close')).map((el) => {
        const r = el.getBoundingClientRect();
        return { w: Math.round(r.width), h: Math.round(r.height) };
      }));
      await ctx.close(s);
      assert(info.length > 0, '未找到弹层关闭按钮');
      assert(info.every((r) => r.w >= 44 && r.h >= 44), `关闭按钮尺寸=${JSON.stringify(info)}`);
      return { message: '390×844 下弹层关闭按钮 ≥44×44', actual: info.map((r) => `${r.w}x${r.h}`).join(',') };
    },
  },
  {
    key: 'a11y.focusRing',
    aliases: ['a11y.focusVisible', 'a11y.outline', 'a11y.focusStyle'],
    title: '键盘焦点环可见',
    run: async (ctx) => {
      const s = await ctx.open('/', { waitMs: 1000 });
      await s.page.keyboard.press('Tab');
      await sleep(150);
      const info = await s.page.evaluate(() => {
        const a = document.activeElement;
        const cs = getComputedStyle(a);
        return { id: a.id || a.className, outlineStyle: cs.outlineStyle, outlineWidth: cs.outlineWidth, boxShadow: cs.boxShadow };
      });
      await ctx.close(s);
      const width = parseFloat(info.outlineWidth) || 0;
      assert(info.outlineStyle !== 'none' && width >= 1.5, `焦点元素 ${info.id} outline=${info.outlineStyle} ${info.outlineWidth}`);
      return { message: '键盘 Tab 后焦点元素有 2px 可见描边', actual: `${info.id}: outline ${info.outlineStyle} ${info.outlineWidth}` };
    },
  },
  {
    key: 'a11y.touchTargets44',
    aliases: ['a11y.touchTargets', 'a11y.minTouch', 'a11y.hitArea'],
    title: '移动端触控目标 ≥44px',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze', { viewport: { width: 390, height: 844 } });
      await sleep(400);
      const info = await s.page.evaluate(() => {
        const sels = ['#classroomTop button', '#classroomBar button', '#classProgress', '#partClose', '#findClose'];
        const out = [];
        for (const sel of sels) {
          for (const el of document.querySelectorAll(sel)) {
            const r = el.getBoundingClientRect();
            const cs = getComputedStyle(el);
            if (cs.display === 'none' || cs.visibility === 'hidden' || r.width === 0) continue;
            out.push({ sel, id: el.id || el.className, w: Math.round(r.width), h: Math.round(r.height) });
          }
        }
        return out;
      });
      await ctx.close(s);
      const bad = info.filter((i) => i.h < 44 || i.w < 44);
      assert(info.length >= 12, `检测到触控目标=${info.length}，期望 ≥12`);
      assert(bad.length === 0, `触控目标小于 44px：${bad.map((b) => `${b.id}=${b.w}x${b.h}`).join(', ')}`);
      return { message: `移动端 ${info.length} 个课堂触控目标均 ≥44×44`, actual: `min=${Math.min(...info.map((i) => i.h))}px, count=${info.length}` };
    },
  },
];
