'use strict';
/** PLAYER：播放/暂停、时间前进、seek、重播、再种、BGM、音量持久化、定帧隐藏 */
const { assert, sleep } = require('../harness');

async function state(page) { return page.evaluate(() => window.__classroom.state()); }

module.exports = [
  {
    key: 'player.playPause',
    aliases: ['player.play', 'player.pause', 'player.togglePlay', 'player.playButton'],
    title: '播放/暂停状态与 aria 正确',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze');
      const read = () => s.page.evaluate(() => {
        const b = document.getElementById('playBtn');
        return { dataset: b.dataset.playing, aria: b.getAttribute('aria-label'), state: window.__classroom.state().playing };
      });
      const before = await read();
      await s.page.click('#playBtn');
      await sleep(150);
      const playing = await read();
      await s.page.click('#playBtn');
      await sleep(150);
      const paused = await read();
      await ctx.close(s);
      assert(before.dataset === '0' && before.aria === '播放', `初始状态异常 dataset=${before.dataset} aria=${before.aria}`);
      assert(playing.dataset === '1' && playing.aria === '暂停' && playing.state === true, `点击播放后异常 ${JSON.stringify(playing)}`);
      assert(paused.dataset === '0' && paused.aria === '播放' && paused.state === false, `再次点击后异常 ${JSON.stringify(paused)}`);
      return { message: '播放/暂停按钮 dataset.playing 与 aria-label 同步', actual: `0→1→0, aria 播放→暂停→播放` };
    },
  },
  {
    key: 'player.timeAdvances',
    aliases: ['player.playingTime', 'player.timeProgress', 'player.playback'],
    title: '播放时剧情时间前进',
    run: async (ctx) => {
      const s = await ctx.open('?t0=100');
      const t1 = (await state(s.page)).storyTime;
      let advanced = false;
      try {
        await s.page.waitForFunction((start) => window.__classroom.state().storyTime > start + 0.05, t1, { timeout: 12000 });
        advanced = true;
      } catch (e) { /* 软件 GL 帧慢，下方断言给出具体值 */ }
      const t2 = (await state(s.page)).storyTime;
      const timecode = await s.page.textContent('#timecode');
      await ctx.close(s);
      assert(advanced, `12s 内播放时间仅从 ${t1.toFixed(2)} → ${t2.toFixed(2)}`);
      assert(/^0[12]:\d\d \/ 04:20$/.test(timecode.trim()), `timecode=${timecode}`);
      return { message: '播放中剧情时间持续前进', actual: `storyTime ${t1.toFixed(2)}→${t2.toFixed(2)}, timecode=${timecode.trim()}` };
    },
  },
  {
    key: 'player.keyboardSeek',
    aliases: ['player.arrowSeek', 'player.keyboard', 'player.seek5s'],
    title: '←/→ 快退快进 5 秒',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=100&freeze');
      await s.page.evaluate(() => { window.__classroom.seekForTest(100); document.body.focus(); });
      await sleep(200);
      await s.page.keyboard.press('ArrowRight');
      await sleep(120);
      const tRight = (await state(s.page)).storyTime;
      await s.page.keyboard.press('ArrowLeft');
      await sleep(120);
      const tLeft = (await state(s.page)).storyTime;
      await s.page.keyboard.press('PageDown');
      await sleep(350);
      const pageDown = await s.page.evaluate(() => ({ t: window.__classroom.state().storyTime, title: document.getElementById('chapterTitle').textContent }));
      await s.page.keyboard.press('PageUp');
      await sleep(350);
      const pageUp = await s.page.evaluate(() => ({ t: window.__classroom.state().storyTime, title: document.getElementById('chapterTitle').textContent }));
      await ctx.close(s);
      assert(Math.abs(tRight - 105) < 0.2, `ArrowRight 后 storyTime=${tRight}，期望 105`);
      assert(Math.abs(tLeft - 100) < 0.2, `ArrowLeft 后 storyTime=${tLeft}，期望 100`);
      assert(Math.abs(pageDown.t - 108.01) < 0.4 && pageDown.title === '长成大树', `PageDown 后 ${pageDown.t}/${pageDown.title}`);
      assert(Math.abs(pageUp.t - 94.01) < 0.4 && pageUp.title === '小树成形', `PageUp 后 ${pageUp.t}/${pageUp.title}`);
      return { message: '全局 ←/→ ±5s，PageUp/PageDown 切相邻章', actual: `100→${tRight.toFixed(0)}→${tLeft.toFixed(0)}, PageDown=${pageDown.t.toFixed(1)}, PageUp=${pageUp.t.toFixed(1)}` };
    },
  },
  {
    key: 'player.timelineSeek',
    aliases: ['player.dragSeek', 'player.scrub', 'player.seekTimeline'],
    title: '拖动时间轴可跳转',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0');
      await s.page.evaluate(() => {
        const tl = document.getElementById('timeline');
        tl.value = '200';
        tl.dispatchEvent(new Event('input', { bubbles: true }));
        tl.dispatchEvent(new Event('change', { bubbles: true }));
      });
      await sleep(200);
      const info = await s.page.evaluate(() => ({
        storyTime: window.__classroom.state().storyTime,
        timecode: document.getElementById('timecode').textContent,
        title: document.getElementById('chapterTitle').textContent,
      }));
      await ctx.close(s);
      assert(Math.abs(info.storyTime - 200) < 0.2, `seek 后 storyTime=${info.storyTime}，期望 200`);
      assert(info.timecode === '03:20 / 04:20', `timecode=${info.timecode}`);
      assert(info.title === '第二年 · 夏', `切章异常 title=${info.title}`);
      return { message: '时间轴 input/change 跳转 200s 并同步章节', actual: `storyTime=200, timecode=${info.timecode}` };
    },
  },
  {
    key: 'player.replay',
    aliases: ['player.replayButton', 'player.restart'],
    title: '重播按钮归零并播放',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=100');
      await s.page.click('#replayBtn');
      await sleep(200);
      const info = await s.page.evaluate(() => ({
        state: window.__classroom.state(),
        dataset: document.getElementById('playBtn').dataset.playing,
        title: document.getElementById('chapterTitle').textContent,
      }));
      await ctx.close(s);
      assert(info.state.storyTime < 0.6, `重播后 storyTime=${info.state.storyTime}`);
      assert(info.state.playing === true, '重播后 playing 应为 true');
      assert(info.dataset === '1', `播放键 dataset=${info.dataset}`);
      assert(info.title === '种子入土', `重播后章节=${info.title}`);
      return { message: '重播回到 0 秒并开始播放', actual: `storyTime=0, playing=true, chapter=种子入土` };
    },
  },
  {
    key: 'player.replant',
    aliases: ['player.replantButton', 'player.newTree'],
    title: '再种一棵归零并刷新',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=100');
      await s.page.click('#replant');
      await sleep(350);
      const info = await s.page.evaluate(() => ({
        state: window.__classroom.state(),
        timecode: document.getElementById('timecode').textContent,
        canvas: !!document.querySelector('#app canvas'),
      }));
      await ctx.close(s);
      assert(info.state.storyTime < 2.0, `再种后 storyTime=${info.state.storyTime}`);
      assert(info.state.playing === true, '再种后 playing 应为 true');
      assert(info.timecode === '00:00 / 04:20', `timecode=${info.timecode}`);
      assert(info.canvas, '再种后 canvas 丢失');
      return { message: '再种一棵：时间归零、开始播放、canvas 正常', actual: `storyTime=0, timecode=${info.timecode}` };
    },
  },
  {
    key: 'player.musicToggle',
    aliases: ['player.music', 'player.bgmToggle', 'player.musicButton'],
    title: '音乐开关与 aria-pressed',
    run: async (ctx) => {
      const s = await ctx.open('?t0=0');
      await sleep(300);
      const read = () => s.page.evaluate(() => ({
        pressed: document.getElementById('musicBtn').getAttribute('aria-pressed'),
        label: document.getElementById('musicBtn').getAttribute('aria-label'),
        off: document.getElementById('musicBtn').classList.contains('off'),
        stored: localStorage.getItem('tree-of-seasons.bgm'),
        width: Math.round(document.getElementById('musicBtn').getBoundingClientRect().width),
        paused: document.getElementById('bgm').paused,
      }));
      const a = await read();
      await s.page.click('#musicBtn');
      await sleep(200);
      const b = await read();
      await s.page.keyboard.press('m');
      await sleep(200);
      const c = await read();
      await ctx.close(s);
      assert(a.pressed === 'true' || a.pressed === 'false', `初始 aria-pressed 缺失：${a.pressed}`);
      assert(b.pressed !== a.pressed, `点击音乐后 aria-pressed 未变化：${a.pressed} → ${b.pressed}`);
      assert(c.pressed !== b.pressed, `M 键后 aria-pressed 未变化：${b.pressed} → ${c.pressed}`);
      assert((b.pressed === 'true') === /关闭背景音乐/.test(b.label), `点击后 label 与状态不一致：${b.label}`);
      assert((c.pressed === 'true') === /关闭背景音乐/.test(c.label), `M 键后 label 与状态不一致：${c.label}`);
      assert(b.stored && typeof JSON.parse(b.stored).on === 'boolean', `localStorage 未保存开关状态：${b.stored}`);
      assert(Math.abs(b.width - a.width) <= 1, `音乐按钮宽度抖动：${a.width}→${b.width}px`);
      assert((b.pressed === 'false') === b.paused, `audio.paused=${b.paused} 与 aria-pressed=${b.pressed} 不一致`);
      return { message: '点击与 M 键均可切换 BGM，aria-pressed/label/audio 状态与宽度同步', actual: `${a.pressed}→${b.pressed}→${c.pressed}, width ${a.width}px` };
    },
  },
  {
    key: 'player.volumePersist',
    aliases: ['player.volume', 'player.volumeMemory', 'player.bgmVolume'],
    title: '音量写入并跨刷新记忆',
    timeout: 120000,
    run: async (ctx) => {
      const s = await ctx.open('?t0=0');
      await s.page.evaluate(() => {
        const v = document.getElementById('volume');
        v.value = '42';
        v.dispatchEvent(new Event('input', { bubbles: true }));
      });
      await sleep(200);
      const stored = await s.page.evaluate(() => localStorage.getItem('tree-of-seasons.bgm'));
      const immediate = await s.page.evaluate(() => ({
        audio: +document.getElementById('bgm').volume.toFixed(3),
        volume: document.getElementById('volume').value,
        classVolume: document.getElementById('classVolume').value,
      }));
      await s.page.reload({ waitUntil: 'load', timeout: 60000 });
      await s.page.waitForFunction(() => !!window.__classroom, null, { timeout: 20000 });
      await sleep(400);
      const valueAfter = await s.page.evaluate(() => ({ volume: document.getElementById('volume').value, classVolume: document.getElementById('classVolume').value, audio: +document.getElementById('bgm').volume.toFixed(3) }));
      await ctx.close(s);
      const parsed = JSON.parse(stored || 'null');
      assert(parsed && Math.abs(parsed.volume - 0.42) < 0.001, `localStorage 音量=${stored}`);
      assert(Math.abs(immediate.audio - 0.42) < 0.01, `audio.volume=${immediate.audio}，期望 0.42`);
      assert(immediate.classVolume === '42', `#classVolume=${immediate.classVolume}`);
      assert(valueAfter.volume === '42' && valueAfter.classVolume === '42', `刷新后 volume=${valueAfter.volume}, classVolume=${valueAfter.classVolume}`);
      assert(Math.abs(valueAfter.audio - 0.42) < 0.01, `刷新后 audio.volume=${valueAfter.audio}`);
      return { message: '音量 42% 同步 audio/#volume/#classVolume，并跨刷新记忆', actual: `stored=${stored}, afterReload=${valueAfter.volume}/${valueAfter.classVolume}` };
    },
  },
  {
    key: 'player.freezeHidden',
    aliases: ['player.freezePlayer', 'player.silentFreeze', 'player.freezeAudio'],
    title: '?freeze 下播放器隐藏且静音',
    run: async (ctx) => {
      const s = await ctx.open('?t0=128&freeze');
      await sleep(600);
      const info = await s.page.evaluate(() => {
        const audio = document.getElementById('bgm');
        return {
          player: getComputedStyle(document.getElementById('player')).display,
          narration: getComputedStyle(document.getElementById('narration')).display,
          paused: audio.paused,
          volume: audio.volume,
          playing: window.__classroom.state().playing,
        };
      });
      await ctx.close(s);
      assert(info.player === 'none', `#player display=${info.player}`);
      assert(info.narration === 'none', `#narration display=${info.narration}`);
      assert(info.playing === false, '定帧模式 playing 应为 false');
      assert(info.paused === true, '定帧模式音频未暂停');
      return { message: '?freeze 隐藏播放器/旁白且音频静音', actual: `player=${info.player}, audio.paused=${info.paused}` };
    },
  },
  {
    key: 'player.timecode',
    aliases: ['player.timecodeFormat', 'player.clock'],
    title: '时间码格式 mm:ss / 04:20',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=0&freeze');
      const initial = await s.page.textContent('#timecode');
      await s.page.evaluate(() => { window.__classroom.seekForTest(100); });
      const at100 = await s.page.textContent('#timecode');
      await ctx.close(s);
      assert(initial.trim() === '00:00 / 04:20', `初始 timecode=${initial}`);
      assert(at100.trim() === '01:40 / 04:20', `100s timecode=${at100}`);
      return { message: '时间码格式正确', actual: `${initial.trim()} / ${at100.trim()}` };
    },
  },
  {
    key: 'player.scrubTip',
    aliases: ['player.timelineTip', 'player.hoverTip'],
    title: '进度条 hover 显示时间与章名',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze');
      const box = await s.page.locator('#timelineWrap').boundingBox();
      await s.page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
      await sleep(200);
      const info = await s.page.evaluate(() => {
        const tip = document.getElementById('scrubTip');
        return { shown: tip.classList.contains('show'), text: tip.textContent, left: tip.style.left };
      });
      await ctx.close(s);
      assert(info.shown, '#scrubTip 未显示');
      assert(/^\d\d:\d\d · .+/.test(info.text), `scrubTip 文本=${info.text}`);
      return { message: 'hover 时间轴显示 mm:ss · 章名 气泡', actual: `text=${info.text}` };
    },
  },
  {
    key: 'player.keyboardSpace',
    aliases: ['player.space', 'player.spaceToggle'],
    title: '空格键播放/暂停',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=128&freeze');
      await s.page.evaluate(() => document.body.focus());
      await s.page.keyboard.press('Space');
      await sleep(150);
      const p1 = (await state(s.page)).playing;
      await s.page.keyboard.press('Space');
      await sleep(150);
      const p2 = (await state(s.page)).playing;
      await ctx.close(s);
      assert(p1 === true && p2 === false, `空格切换异常 ${p1} → ${p2}`);
      return { message: '空格键切换播放/暂停', actual: `playing true→false` };
    },
  },
  {
    key: 'player.homeEnd',
    aliases: ['player.homeEndKeys', 'player.jumpEnds'],
    title: 'Home/End 跳到首尾',
    run: async (ctx) => {
      const s = await ctx.open('?ui=1&t0=100&freeze');
      await s.page.evaluate(() => document.body.focus());
      await s.page.keyboard.press('End');
      await sleep(150);
      const end = (await state(s.page)).storyTime;
      await s.page.keyboard.press('Home');
      await sleep(150);
      const home = (await state(s.page)).storyTime;
      await ctx.close(s);
      assert(Math.abs(end - 259.9) < 0.2, `End 后 storyTime=${end}`);
      assert(home < 0.2, `Home 后 storyTime=${home}`);
      return { message: 'Home/End 跳转首尾', actual: `End=${end}, Home=${home}` };
    },
  },
];
