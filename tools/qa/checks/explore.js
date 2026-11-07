'use strict';
/** EXPLORE：画布键盘/双击/拖拽死区、点认卡、找一找 */
const { assert, sleep } = require('../harness');

async function camPos(page) {
  return page.evaluate(() => {
    const c = window.__camera;
    return c ? c.position.toArray().map((v) => +v.toFixed(4)) : null;
  });
}

async function canvasBox(page) {
  return page.locator('#app canvas').boundingBox();
}

module.exports = [
  {
    key: 'explore.canvasKeyboard',
    aliases: ['explore.keyboard', 'explore.canvasKeys', 'explore.cameraKeyboard'],
    title: '画布键盘可环顾/缩放',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&ui=1&t0=210&freeze');
      await s.page.focus('#app canvas');
      const before = await camPos(s.page);
      await s.page.evaluate(() => {
        const c = document.querySelector('#app canvas');
        c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }));
      });
      await s.page.waitForFunction((b) => {
        const p = window.__camera.position;
        return Math.hypot(p.x - b[0], p.z - b[2]) > 0.01;
      }, before, { timeout: 15000 }).catch(() => {});
      const afterTheta = await camPos(s.page);
      await s.page.evaluate(() => {
        const c = document.querySelector('#app canvas');
        c.dispatchEvent(new KeyboardEvent('keydown', { key: '=', bubbles: true, cancelable: true }));
      });
      await s.page.waitForFunction((b) => {
        const p = window.__camera.position;
        return Math.hypot(p.x - b[0], p.z - b[2]) > 0.01;
      }, afterTheta, { timeout: 15000 }).catch(() => {});
      const afterZoom = await camPos(s.page);
      await ctx.close(s);
      assert(before && afterTheta, '无法读取 __camera');
      const dTheta = Math.hypot(afterTheta[0] - before[0], afterTheta[2] - before[2]);
      assert(dTheta > 0.01, `ArrowRight 后相机未移动（${dTheta}）`);
      const dZoom = Math.hypot(afterZoom[0] - afterTheta[0], afterZoom[2] - afterTheta[2]);
      assert(dZoom > 0.01, `+ 后相机未缩放（${dZoom}）`);
      return { message: '画布聚焦后方向键旋转、+ 键缩放有效', actual: `thetaΔ=${dTheta.toFixed(3)}, zoomΔ=${dZoom.toFixed(3)}` };
    },
  },
  {
    key: 'explore.dragDeadzone',
    aliases: ['explore.deadzone', 'explore.pointerDeadzone', 'explore.drag'],
    title: '9px 拖动死区生效',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&ui=1&t0=210&freeze');
      const box = await canvasBox(s.page);
      const cx = box.x + box.width * 0.45;
      const cy = box.y + box.height * 0.5;
      const before = await camPos(s.page);
      await s.page.mouse.move(cx, cy);
      await s.page.mouse.down();
      await s.page.mouse.move(cx + 4, cy + 3);
      await s.page.mouse.up();
      await sleep(250);
      const afterSmall = await camPos(s.page);
      const smallCard = await s.page.evaluate(() => document.getElementById('partCard').classList.contains('show'));
      if (smallCard) await s.page.evaluate(() => document.getElementById('partClose').click());
      await sleep(120);
      await s.page.mouse.move(cx, cy);
      await s.page.mouse.down();
      await s.page.mouse.move(cx + 20, cy + 8, { steps: 4 });
      await s.page.mouse.up();
      await sleep(350);
      const afterDrag = await camPos(s.page);
      const cardShown = await s.page.evaluate(() => document.getElementById('partCard').classList.contains('show'));
      await ctx.close(s);
      const smallDelta = Math.hypot(afterSmall[0] - before[0], afterSmall[2] - before[2]);
      assert(smallCard === true || smallDelta < 0.01, '4px 抖动既未保持相机也未触发点认');
      const dragDelta = Math.hypot(afterDrag[0] - afterSmall[0], afterDrag[2] - afterSmall[2]);
      assert(smallDelta < 0.01, `4px 抖动触发了镜头移动：Δ=${smallDelta.toFixed(3)}`);
      assert(dragDelta > 0.01, `20px 拖动未改变镜头：Δ=${dragDelta.toFixed(3)}`);
      assert(cardShown === false, '拖动结束误开了点认卡');
      return { message: '≤9px 抖动不转镜头（按轻点处理），20px 拖动生效且不弹点认卡', actual: `smallΔ=${smallDelta.toFixed(4)}, dragΔ=${dragDelta.toFixed(3)}, smallTapCard=${smallCard}` };
    },
  },
  {
    key: 'explore.doubleClickReset',
    aliases: ['explore.dblclick', 'explore.resetCamera', 'explore.viewReset'],
    title: '双击画布复位视角',
    run: async (ctx) => {
      const s = await ctx.open('?dbg&ui=1&t0=210&freeze', { fresh: true });
      await s.page.evaluate(() => window.__classroom.seekForTest(210));
      await sleep(300);
      await s.page.evaluate(() => document.querySelector('#app canvas').focus());
      const baseline = await camPos(s.page);
      await s.page.evaluate(() => {
        const c = document.querySelector('#app canvas');
        for (let i = 0; i < 4; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }));
      });
      await s.page.waitForFunction((b) => {
        const p = window.__camera.position;
        return Math.hypot(p.x - b[0], p.z - b[2]) > 0.01;
      }, baseline, { timeout: 15000 }).catch(() => {});
      const moved = await camPos(s.page);
      const box = await canvasBox(s.page);
      await s.page.mouse.dblclick(box.x + box.width * 0.5, box.y + box.height * 0.5);
      await s.page.waitForFunction((b) => {
        const p = window.__camera.position;
        return Math.hypot(p.x - b[0], p.z - b[2]) < 0.05;
      }, baseline, { timeout: 15000 }).catch(() => {});
      const reset = await camPos(s.page);
      const toast = await s.page.textContent('#classToast');
      await ctx.close(s);
      const movedDelta = Math.hypot(moved[0] - baseline[0], moved[2] - baseline[2]);
      const resetDelta = Math.hypot(reset[0] - baseline[0], reset[2] - baseline[2]);
      assert(movedDelta > 0.01, '准备阶段键盘未移动相机');
      assert(resetDelta < 0.02, `双击后相机未复位：Δ=${resetDelta.toFixed(3)}`);
      assert(toast.includes('视角已复位'), `复位 toast=${toast}`);
      return { message: '双击画布恢复正面视角并提示「视角已复位」', actual: `movedΔ=${movedDelta.toFixed(2)}, resetΔ=${resetDelta.toFixed(3)}` };
    },
  },
  {
    key: 'explore.tapPartCard',
    aliases: ['explore.partCard', 'explore.tap', 'explore.recognize'],
    title: '点击画面部位弹出点认卡',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=210&freeze');
      const info = await s.page.evaluate(() => {
        const c = window.__classroom;
        const pts = c.partScreenPoints('trunk');
        let picked = null, clickX = 0, clickY = 0;
        for (const p of pts) {
          const part = c.pickPartAt(p.x, p.y);
          if (part) { clickX = p.x; clickY = p.y; c.handleCanvasTap(p.x, p.y); picked = part; break; }
        }
        const card = document.getElementById('partCard');
        const r = card.getBoundingClientRect();
        return {
          picked,
          points: pts.length,
          shown: card.classList.contains('show'),
          name: document.getElementById('partName').textContent,
          glyph: document.getElementById('partGlyph').textContent,
          role: card.getAttribute('role'),
          modal: card.getAttribute('aria-modal'),
          click: { x: Math.round(clickX), y: Math.round(clickY) },
          rect: { left: Math.round(r.left), top: Math.round(r.top), right: Math.round(r.right), bottom: Math.round(r.bottom) },
          vw: window.innerWidth, vh: window.innerHeight,
        };
      });
      await ctx.close(s);
      assert(info.picked, '未能从树干投影点拾取到部位');
      assert(info.shown, '#partCard 未显示');
      assert(info.name.length > 0, '#partName 为空');
      assert(info.glyph.length === 1, `glyph=${info.glyph}`);
      assert(info.role === 'dialog' && info.modal === 'false', `partCard 语义 role=${info.role}, aria-modal=${info.modal}`);
      assert(info.rect.left >= 10 && info.rect.top >= 10 && info.rect.right <= info.vw - 10 && info.rect.bottom <= info.vh - 10, `点认卡超出视口：${JSON.stringify(info.rect)}`);
      const gapRight = info.rect.left - info.click.x;
      const gapLeft = info.click.x - info.rect.right;
      const gapBottom = info.rect.top - info.click.y;
      const gapTop = info.click.y - info.rect.bottom;
      const near = [gapRight, gapLeft, gapBottom, gapTop].some((g) => Math.abs(g - 14) <= 3);
      assert(near, `点认卡未在点击点旁 gap≈14：click=${JSON.stringify(info.click)}, rect=${JSON.stringify(info.rect)}`);
      return { message: '点击树干投影点弹出点认卡，卡片锚定点击点且不出界', actual: `picked=${info.picked}, name=${info.name}, gap≈14` };
    },
  },
  {
    key: 'explore.partCardClose',
    aliases: ['explore.partCardDismiss', 'explore.cardClose'],
    title: '点认卡关闭按钮与 Esc',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=210&freeze');
      await s.page.evaluate(() => {
        const c = window.__classroom;
        for (const part of ['trunk', 'branch', 'leaf']) {
          const pts = c.partScreenPoints(part);
          for (const p of pts) { if (c.pickPartAt(p.x, p.y)) { c.handleCanvasTap(p.x, p.y); return; } }
        }
      });
      await sleep(200);
      const shown = await s.page.evaluate(() => document.getElementById('partCard').classList.contains('show'));
      if (shown) await s.page.click('#partClose');
      await sleep(250);
      const closed = await s.page.evaluate(() => !document.getElementById('partCard').classList.contains('show'));
      await ctx.close(s);
      assert(shown, '点认卡未打开');
      assert(closed, '#partClose 未关闭点认卡');
      return { message: '点认卡关闭按钮可收起卡片', actual: 'open→close' };
    },
  },
  {
    key: 'explore.partVisibility',
    aliases: ['explore.seasonalParts', 'explore.partVisible', 'explore.partSeasonFilter'],
    title: '部位按季节可见性过滤',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=100&freeze');
      const info = await s.page.evaluate(() => {
        const c = window.__classroom;
        return {
          snowSummer: c.partVisibleAt('snow', 128),
          snowWinter: c.partVisibleAt('snow', 170),
          flowerSpring: c.partVisibleAt('flower', 190),
          flowerLateSummer: c.partVisibleAt('flower', 210),
          birdSummer: c.partVisibleAt('bird', 210),
          leafWinter: c.partVisibleAt('leaf', 170),
        };
      });
      await ctx.close(s);
      assert(info.snowSummer === false, '夏天不应能点到雪');
      assert(info.snowWinter === true, '冬天应能点到雪');
      assert(info.flowerSpring === true, '第二年春应能点到花');
      assert(info.flowerLateSummer === false, 't=210 不应能点到花');
      assert(info.birdSummer === true, '第二年夏应能点到小鸟');
      assert(info.leafWinter === false, '冬天落叶后不应能点到叶');
      return { message: '雪/花/鸟/叶按季节与章节过滤正确', actual: 'snow@128=false, snow@170=true, flower@190=true, flower@210=false, bird@210=true, leaf@170=false' };
    },
  },
  {
    key: 'explore.findGameStart',
    aliases: ['explore.find', 'explore.findGame', 'explore.findStart'],
    title: '找一找启动与第 12 章队列',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      const info = await s.page.evaluate(() => {
        const c = window.__classroom;
        const available = c.findablePartsAt(210);
        c.startFindGame();
        const st = c.findState();
        return {
          available,
          state: st,
          banner: document.getElementById('findBanner').classList.contains('show'),
          text: document.getElementById('findText').textContent,
          progress: document.getElementById('findProgress').textContent,
        };
      });
      await ctx.close(s);
      assert(info.available.includes('bird'), `第 12 章可找部位缺少 bird：${info.available.join(',')}`);
      assert(info.available.includes('insect'), `第 12 章可找部位缺少 insect：${info.available.join(',')}`);
      assert(info.state.findActive === true, 'startFindGame 后 findActive=false');
      assert(info.banner, '#findBanner 未显示');
      assert(/找一找：/.test(info.text), `任务条文本=${info.text}`);
      return { message: '第 12 章找一找队列含 bird/insect，任务条正常显示', actual: `available=${info.available.join(',')}, target=${info.state.findTarget}` };
    },
  },
  {
    key: 'explore.findGameCorrect',
    aliases: ['explore.findCorrect', 'explore.findSuccess', 'explore.findHit'],
    title: '找一找点中目标反馈',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      const info = await s.page.evaluate(() => {
        const c = window.__classroom;
        c.startFindGame();
        const st = c.findState();
        const pts = c.partScreenPoints(st.findTarget);
        let clicked = false;
        for (const p of pts) { c.handleCanvasTap(p.x, p.y); clicked = true; break; }
        return {
          target: st.findTarget,
          clicked,
          points: pts.length,
          after: c.findState(),
          toast: document.getElementById('classToast').textContent,
          partName: document.getElementById('partName').textContent,
          cardShown: document.getElementById('partCard').classList.contains('show'),
        };
      });
      await ctx.close(s);
      assert(info.clicked && info.points > 0, '目标无可点击投影点');
      assert(info.after.findActive === false, '点中目标后找一找仍在进行');
      assert(/找到啦！这是/.test(info.toast), `命中 toast=${info.toast}`);
      assert(info.cardShown, '命中后点认卡未显示');
      return { message: `点中目标「${info.target}」提示找到啦并弹点认卡`, actual: `target=${info.target}, toast=${info.toast}` };
    },
  },
  {
    key: 'explore.findGameWrong',
    aliases: ['explore.findWrong', 'explore.findMiss', 'explore.findError'],
    title: '找一找点错只提示不报错',
    run: async (ctx) => {
      const s = await ctx.open('?class&t0=210&freeze');
      const info = await s.page.evaluate(() => {
        const c = window.__classroom;
        c.startFindGame();
        const st = c.findState();
        let clickedWrong = null;
        const targetPts = c.partScreenPoints(st.findTarget);
        const farFromTarget = (p) => targetPts.every((t) => Math.hypot(t.x - p.x, t.y - p.y) > 110);
        for (const part of ['trunk', 'branch', 'leaf', 'root', 'bird', 'insect']) {
          if (part === st.findTarget) continue;
          for (const p of c.partScreenPoints(part)) {
            if (!farFromTarget(p)) continue;
            const picked = c.pickPartAt(p.x, p.y);
            if (picked && picked !== st.findTarget && !(st.findTarget === 'leaf' && picked === 'cotyledon')) {
              c.handleCanvasTap(p.x, p.y);
              clickedWrong = part;
              break;
            }
          }
          if (clickedWrong) break;
        }
        if (!clickedWrong) c.handleCanvasTap(4, 4);
        const b = document.getElementById('findBanner').getBoundingClientRect();
        const t = document.getElementById('classToast').getBoundingClientRect();
        const overlap = Math.max(0, Math.min(b.right, t.right) - Math.max(b.left, t.left)) * Math.max(0, Math.min(b.bottom, t.bottom) - Math.max(b.top, t.top));
        return { target: st.findTarget, clickedWrong, after: c.findState(), toast: document.getElementById('classToast').textContent, shake: document.getElementById('findBanner').classList.contains('shake'), overlap: Math.round(overlap) };
      });
      await sleep(200);
      const info2 = await s.page.evaluate(() => ({ toast: document.getElementById('classToast').textContent, shake: document.getElementById('findBanner').classList.contains('shake') }));
      await ctx.close(s);
      assert(info.after.findActive === true, '点错后找一找被意外关闭');
      assert(/再仔细看看|这里不是/.test(info2.toast), `点错反馈=${info2.toast}`);
      assert(info2.shake, '点错部位后任务条未抖动');
      assert(info.overlap === 0, `findBanner 与 classToast 重叠 ${info.overlap}px²`);
      return { message: '点错部位：任务条抖动、底部 toast 提示且与任务条不重叠', actual: `wrong=${info.clickedWrong}, toast=${info2.toast}, overlap=0` };
    },
  },
  {
    key: 'explore.findNeedsClass',
    aliases: ['explore.findRequiresClassroom', 'explore.findGuard'],
    title: '非课堂模式不能启动找一找',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze');
      const info = await s.page.evaluate(() => {
        window.__classroom.startFindGame();
        return { active: window.__classroom.findState().findActive, toast: document.getElementById('classToast').textContent };
      });
      await ctx.close(s);
      assert(info.active === false, '自由观看模式不应启动找一找');
      assert(info.toast.includes('请先进入课堂模式'), `提示=${info.toast}`);
      return { message: '自由观看下点找一找提示先进入课堂模式', actual: `toast=${info.toast}` };
    },
  },
];
