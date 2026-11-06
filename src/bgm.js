/* 一棵树的四季 — 背景音乐《一圈年轮》播放控制
 *
 * 这是一个独立的普通脚本，故意不参与 esbuild 打包：
 * 它只通过底部播放器的 DOM 读取「当前时间 / 是否正在播放」，
 * 所以 3D 场景代码（src/main.js、app.js）一行都不用改，画面零回归风险。
 *
 * 音乐文件：assets/tree-of-seasons-bgm-v3.mp3（CC0 公有领域，见 assets/MUSIC-LICENSE.md）
 * 生成方式：node tools/make-web-bgm.js → ffmpeg 压 mp3（见脚本头部注释）
 *
 * 同步规则：
 *   - 播放 / 暂停：跟随播放按钮状态，空格键、重播、再种一棵都自动跟随
 *   - 跳转：拖进度条、←/→ 前后 5 秒、Home/End 时，音频对齐到同一个时刻
 *   - ?freeze / ?video（截图、导出视频）模式下播放条隐藏，音乐完全不出声
 *   - 浏览器禁止无交互自动播放：默认先尝试，失败则等用户第一次点击；
 *     也可以直接点「♫ 开启音乐」。开关和音量会记在本机，下次打开沿用。
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'tree-of-seasons.bgm';
  var timeline = document.getElementById('timeline');
  var playBtn = document.getElementById('playBtn');
  var playerEl = document.getElementById('player');
  var musicBtn = document.getElementById('musicBtn');
  var classMusicBtn = document.getElementById('classMusicBtn');
  var volumeEl = document.getElementById('volume');
  var classVolumeEl = document.getElementById('classVolume');
  var audio = document.getElementById('bgm');
  if (!timeline || !playBtn || !playerEl || !audio) return;

  /* ---- 本机偏好 ---- */
  var saved = null;
  try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null'); } catch (e) { /* file:// 下可能禁用 */ }
  var on = saved && typeof saved.on === 'boolean' ? saved.on : true;
  var volume = saved && typeof saved.volume === 'number' ? saved.volume : 0.85;
  volume = Math.max(0, Math.min(1, volume));
  var ducked = false;                       // 故事姐姐朗读时自动压低背景音乐
  function applyVolume() { audio.volume = volume * (ducked ? 0.18 : 1); }
  applyVolume();
  audio.loop = false;                       // 故事播完就停，不循环
  if (volumeEl) volumeEl.value = String(Math.round(volume * 100));
  if (classVolumeEl) classVolumeEl.value = String(Math.round(volume * 100));

  var unlocked = false;                    // 浏览器是否允许出声
  var lastT = parseFloat(timeline.value) || 0;
  var armed = false;

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ on: on, volume: volume })); } catch (e) {}
  }
  function now() { return parseFloat(timeline.value) || 0; }
  function label() {
    if (!musicBtn) return;
    var audible = on && unlocked;
    // 固定短文案，状态只靠 aria-label 与状态点表达，避免按钮宽度抖动
    var labelEl = musicBtn.querySelector ? musicBtn.querySelector('.btn-label') : null;
    if (labelEl) labelEl.textContent = '音乐'; else musicBtn.textContent = '音乐';
    musicBtn.setAttribute('aria-label', audible ? '关闭背景音乐' : '开启背景音乐');
    musicBtn.setAttribute('aria-pressed', audible ? 'true' : 'false');
    musicBtn.title = (audible ? '关闭背景音乐（M）' : '开启背景音乐（M）');
    if (musicBtn.classList) {
      musicBtn.classList.toggle('off', !on);
      musicBtn.classList.toggle('on', audible);
    }
    if (classMusicBtn) {
      classMusicBtn.textContent = '音乐';
      classMusicBtn.classList.toggle('on', audible);
      classMusicBtn.setAttribute('aria-label', audible ? '关闭背景音乐' : '开启背景音乐');
      classMusicBtn.setAttribute('aria-pressed', audible ? 'true' : 'false');
    }
  }
  function seekToStory() {
    try { audio.currentTime = Math.max(0, Math.min(now(), audio.duration || 260)); } catch (e) {}
  }
  function tryPlay() {
    if (!on || !unlocked || audio.paused === false) return;
    var p = audio.play();
    if (p && p.catch) {
      p.catch(function () {                 // 仍被自动播放策略拦住，继续等手势
        unlocked = false; label(); armGesture();
      });
    }
  }
  function armGesture() {
    if (armed) return;
    armed = true;
    function kick() {
      document.removeEventListener('pointerdown', kick);
      document.removeEventListener('touchstart', kick);
      armed = false;
      if (!on) return;                     // 用户已主动静音，就别自作主张开声
      unlocked = true;
      seekToStory();
      label();
      syncPlayState();
    }
    document.addEventListener('pointerdown', kick);
    document.addEventListener('touchstart', kick);
  }
  function toggleMusic() {
    if (!unlocked || !on) {
      on = true;
      unlocked = true;                    // 点击 / 按 M 本身就是用户手势
      seekToStory();
      tryPlay();
    } else {
      on = false;
      audio.pause();
    }
    persist(); label();
    setTimeout(syncPlayState, 0);
  }

  /* ---- 控件 ---- */
  if (musicBtn) {
    // 别让「开启音乐」这一下点击被全局的首次手势监听抢先处理
    musicBtn.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    musicBtn.addEventListener('touchstart', function (e) { e.stopPropagation(); });
    musicBtn.addEventListener('click', toggleMusic);
  }
  if (classMusicBtn) {
    classMusicBtn.addEventListener('pointerdown', function (e) { e.stopPropagation(); });
    classMusicBtn.addEventListener('touchstart', function (e) { e.stopPropagation(); });
    classMusicBtn.addEventListener('click', toggleMusic);
  }
  function onVolumeInput(e) {
    var v = Math.max(0, Math.min(1, (parseFloat(e.target.value) || 0) / 100));
    volume = v;
    if (volumeEl) volumeEl.value = String(Math.round(volume * 100));
    if (classVolumeEl) classVolumeEl.value = String(Math.round(volume * 100));
    applyVolume();
    persist();
  }
  if (volumeEl) volumeEl.addEventListener('input', onVolumeInput);
  if (classVolumeEl) classVolumeEl.addEventListener('input', onVolumeInput);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'm' || e.key === 'M') { e.preventDefault(); toggleMusic(); return; }
    // 空格 / ←→ / Home / End / R 都会改变时间轴，等 app.js 处理完再对齐
    setTimeout(syncPlayState, 0);
  });

  // 事件驱动：点按钮、拖进度条立刻响应，不等下一帧。
  // 3D 场景重的时候帧率可能只有十几帧，只靠逐帧轮询会慢半拍。
  ['playBtn', 'replayBtn', 'replant'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', function () { setTimeout(syncPlayState, 0); });
  });
  ['input', 'change'].forEach(function (ev) {
    timeline.addEventListener(ev, function () { setTimeout(syncPlayState, 0); });
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { if (!audio.paused) audio.pause(); }
    else setTimeout(syncPlayState, 0);
  });

  /* ---- 跟随播放器的时间轴 ---- */
  // 画面时间是唯一基准。事件即时同步 + 每 200ms 漂移校正：
  // 小偏差用播放速度平滑追（不打断乐句），大偏差直接 seek（拖动、重播、严重掉帧）。
  function syncPlayState() {
    label();
    var t = now();
    var playing = playBtn.dataset ? playBtn.dataset.playing === '1' : playBtn.textContent.trim() === '⏸';
    var end = parseFloat(timeline.max) || 259.9;
    var hidden = playerEl.style.display === 'none';   // 定帧截图 / 导出视频：不出声
    var shouldPlay = on && unlocked && playing && !hidden && t < end - 0.05;

    if (!shouldPlay) {
      if (!audio.paused) audio.pause();
      lastT = t;
      return;
    }
    var jumped = t < lastT - 0.3 || t > lastT + 0.8;
    lastT = t;
    var drift = audio.currentTime - t;
    if (jumped || Math.abs(drift) > 1.0) {
      seekToStory();
      audio.playbackRate = 1;
    } else {
      audio.playbackRate = Math.max(0.94, Math.min(1.06, 1 - drift * 0.35));
    }
    tryPlay();
  }

  // 故事姐姐开口时压低 BGM，读完恢复；由 src/main.js 通过自定义事件通知。
  window.addEventListener('tree:voice', function (e) {
    ducked = !!(e && e.detail && e.detail.speaking);
    applyVolume();
  });

  label();
  if (on) {
    // 先试一次：浏览器若记得用户曾经和站点交互过，音乐就能自己响起来
    var p = audio.play();
    if (p && p.then) {
      p.then(function () { unlocked = true; seekToStory(); label(); syncPlayState(); })
        .catch(function () { unlocked = false; label(); armGesture(); });
    } else {
      unlocked = true; label();
    }
  }
  setInterval(syncPlayState, 200);
})();
