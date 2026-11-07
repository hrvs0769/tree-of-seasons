/* 一棵树的四季 — 朗诵器（浏览器 Web Speech API / speechSynthesis）
 *
 * 设计目标（第五轮）：
 *   - 只用浏览器内置 speechSynthesis：不需要后端、不加载任何音频文件；
 *   - 优先选择中文语音，中文里再优先「在线自然音」（Microsoft Natural / Online、Google 普通话等）；
 *   - 没有语音、没有中文语音或浏览器不支持时，返回明确 reason，由界面做降级提示；
 *   - 语音列表是异步加载的，监听 voiceschanged 并短暂轮询，兼容 Chrome / Edge / Safari / 移动端。
 *
 * 这个模块不碰 DOM，也不依赖 Three.js；main.js 只负责状态和提示文案。
 */

const CHINESE_LANG_RE = /^(zh|cmn|yue)([-_]|$)/i;
const CHINESE_TEXT_RE = /chinese|mandarin|中文|普通话|国语|國語|粤语|粵語/i;
const NATURAL_RE = /(^|[^a-z])(online|natural|neural|premium|enhanced)([^a-z]|$)|云端|在线|自然|神经/i;
const NEURAL_NAME_RE = /xiaoxiao|xiaoyi|yunjian|yunxi|yunyang|xiaohan|xiaomo|xiaoxuan|xiaorui|yunfeng|xiaobei|xiaoni|yunye|xiaochen|xiaoshuang/i;
const LOCAL_GOOD_RE = /tingting|meijia|sinji|huihui|kangkang|yaoyao|li[-_ ]?mu/i;
/* 系统里的趣味音/低质量紧凑音，名称命中就强烈降权 */
const BAD_RE = /compact|eloquence|whisper|novelty|bells|boing|bubbles|cellos|trinoids|zarvox|albert|bad news|good news|jester|organ|superstar|wobble|bahh|deranged|hysterical|pipe organ|rocko|junior|ralph|fred|kathy|princess|agnes|victoria|alex|daniel|samantha|karen|moira|tessa/i;

function isChineseVoice(v) {
  if (!v) return false;
  const lang = String(v.lang || '').toLowerCase();
  if (CHINESE_LANG_RE.test(lang)) return true;
  return CHINESE_TEXT_RE.test(String(v.name || '') + ' ' + String(v.voiceURI || ''));
}

function scoreVoice(v) {
  if (!isChineseVoice(v)) return -1;
  const lang = String(v.lang || '').toLowerCase();
  const text = (String(v.name || '') + ' ' + String(v.voiceURI || '') + ' ' + lang).toLowerCase();
  let score = 100;

  // 1) 地区：普通话优先，其次台湾/香港/粤语；这些都还能读中文，只是口音不同
  if (/^zh[-_]?cn$/.test(lang) || /^cmn[-_]?(cn|hans)/.test(lang)) score += 40;
  else if (/^zh[-_]?hans/.test(lang) || /^zh([-_](sg|my))?$/.test(lang)) score += 32;
  else if (/^zh[-_](tw|hk|mo)/.test(lang) || /^yue/.test(lang)) score += 18;
  else score += 10;

  // 2) 在线优先：Edge 的 Natural/Online 语音通常是 localService=false
  const online = v.localService === false;
  if (online) score += 40;
  if (NATURAL_RE.test(text)) score += 30;
  if (NEURAL_NAME_RE.test(text)) score += 25;
  if (/google/.test(text)) score += 18;
  if (LOCAL_GOOD_RE.test(text)) score += 8;
  if (v.default) score += 2;
  if (BAD_RE.test(text)) score -= 80;
  return score;
}

function rankVoices(list) {
  return (Array.isArray(list) ? list : [])
    .map((v) => ({ v, score: scoreVoice(v) }))
    .filter((x) => x.score >= 0)
    .sort((a, b) => (b.score - a.score) || String(a.v.name || '').localeCompare(String(b.v.name || '')))
    .map((x) => x.v);
}

function cleanVoiceName(name) {
  return String(name || '')
    .replace(/\s*[-–—]\s*(chinese|mandarin).*$/i, '')
    .replace(/\s*\((natural|online)\)\s*/ig, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function describeVoice(v) {
  if (!v) return null;
  const text = String(v.name || '') + ' ' + String(v.voiceURI || '');
  const online = v.localService === false;
  const natural = NATURAL_RE.test(text) || NEURAL_NAME_RE.test(text);
  return {
    name: cleanVoiceName(v.name || v.voiceURI || ''),
    rawName: String(v.name || ''),
    lang: String(v.lang || ''),
    voiceURI: String(v.voiceURI || ''),
    localService: v.localService !== false,
    online,
    natural,
    default: !!v.default,
    score: scoreVoice(v),
  };
}

function createSpeechReader(options = {}) {
  const win = typeof window !== 'undefined' ? window : null;
  const synth = options.synth || (win && win.speechSynthesis) || null;
  const Utterance = options.Utterance || (win && win.SpeechSynthesisUtterance) || null;
  const supported = !!(synth && Utterance);

  let overrideVoices = null;
  let rawVoices = [];
  let ranked = [];
  let voice = null;
  let ready = false;
  let reason = '';
  let current = null;
  let pollTimer = 0;
  const listeners = [];

  function getRawVoices() {
    if (overrideVoices !== null) return overrideVoices.slice();
    if (!supported) return [];
    try { return Array.from(synth.getVoices() || []); } catch (e) { return []; }
  }

  function computeReason() {
    if (!supported) return 'unsupported';
    if (!rawVoices.length) return 'no-voices';
    if (!ranked.length) return 'no-chinese';
    return '';
  }

  function state() {
    return {
      supported,
      ready,
      available: !!voice,
      reason,
      voice: describeVoice(voice),
      voices: ranked.map(describeVoice),
      total: rawVoices.length,
    };
  }

  function emit() {
    const snapshot = state();
    for (const fn of listeners.slice()) {
      try { fn(snapshot); } catch (e) { /* 订阅方异常不影响朗读 */ }
    }
  }

  function refresh() {
    rawVoices = getRawVoices();
    ranked = rankVoices(rawVoices);
    voice = ranked[0] || null;
    ready = true;
    reason = computeReason();
    emit();
    return state();
  }

  function subscribe(fn) {
    if (typeof fn !== 'function') return () => {};
    listeners.push(fn);
    fn(state());
    return () => {
      const i = listeners.indexOf(fn);
      if (i >= 0) listeners.splice(i, 1);
    };
  }

  function emitVoice(speaking) {
    if (!win || !win.dispatchEvent || typeof win.CustomEvent !== 'function') return;
    win.dispatchEvent(new win.CustomEvent('tree:voice', { detail: { speaking: !!speaking } }));
  }

  function cancel() {
    current = null;
    if (synth) {
      try { synth.cancel(); } catch (e) { /* ignore */ }
    }
    emitVoice(false);
  }

  function speak(text, opts = {}) {
    if (!supported) return { ok: false, reason: 'unsupported' };
    refresh();
    if (!voice) return { ok: false, reason: reason || 'no-voices' };

    // 先取消上一段；current 置空后，旧 utterance 的 end/error 回调会被忽略。
    cancel();

    let u;
    try { u = new Utterance(String(text == null ? '' : text)); }
    catch (e) { return { ok: false, reason: 'unsupported' }; }

    u.voice = voice;
    u.lang = voice.lang || 'zh-CN';
    u.rate = typeof opts.rate === 'number' ? opts.rate : 0.92;
    u.pitch = typeof opts.pitch === 'number' ? opts.pitch : 1.04;
    u.volume = typeof opts.volume === 'number' ? opts.volume : 1;

    let settled = false;
    const finish = (detail) => {
      if (settled || current !== u) return;
      settled = true;
      current = null;
      emitVoice(false);
      if (opts.onend) { try { opts.onend(detail); } catch (e) { /* ignore */ } }
    };
    u.onstart = () => {
      if (current !== u) return;
      emitVoice(true);
      if (opts.onstart) { try { opts.onstart(); } catch (e) { /* ignore */ } }
    };
    u.onend = () => finish({ type: 'end' });
    u.onerror = (e) => {
      if (current !== u) return;
      const err = (e && e.error) || 'error';
      if (!/canceled|interrupted/i.test(err) && opts.onerror) {
        try { opts.onerror(err, e); } catch (e2) { /* ignore */ }
      }
      finish({ type: 'error', error: err });
    };

    current = u;
    // Chrome 在 cancel() 同 tick 调 speak() 偶尔会静默失败，延后一个 tick 更稳。
    setTimeout(() => {
      if (current !== u) return;
      try { synth.speak(u); }
      catch (e) {
        if (opts.onerror) { try { opts.onerror('synthesis-failed', e); } catch (e2) { /* ignore */ } }
        finish({ type: 'error', error: 'synthesis-failed' });
      }
    }, 20);

    return { ok: true, voice: describeVoice(voice) };
  }

  function pause() {
    if (!supported) return false;
    try { synth.pause(); return true; } catch (e) { return false; }
  }
  function resume() {
    if (!supported) return false;
    try { synth.resume(); return true; } catch (e) { return false; }
  }
  function isSpeaking() {
    return !!current || !!(supported && synth.speaking);
  }
  function isPaused() {
    return !!(supported && synth.paused);
  }

  function ensureAvailable(timeoutMs = 1500) {
    refresh();
    if (supported && voice) return Promise.resolve(state());
    // 测试模式下语音列表是显式注入的，不需要等待真实 voiceschanged
    if (overrideVoices !== null || !supported) return Promise.resolve(state());
    return new Promise((resolve) => {
      let done = false;
      let unsub = null;
      let timer = 0;
      const finish = () => {
        if (done) return;
        done = true;
        if (timer) clearTimeout(timer);
        if (unsub) unsub();
        resolve(refresh());
      };
      unsub = subscribe(() => { if (voice) finish(); });
      timer = setTimeout(finish, Math.max(100, timeoutMs || 1500));
    });
  }

  /* ---- 测试钩子：不依赖本机是否装了语音，也能验证排序和降级 ---- */
  function setVoicesForTest(list) {
    overrideVoices = Array.isArray(list) ? list.map((v) => Object.assign({}, v)) : null;
    return refresh();
  }
  function resetForTest() {
    overrideVoices = null;
    cancel();
    return refresh();
  }

  if (supported) {
    refresh();
    try {
      if (synth.addEventListener) synth.addEventListener('voiceschanged', refresh);
      else {
        const prev = synth.onvoiceschanged;
        synth.onvoiceschanged = function (e) {
          if (typeof prev === 'function') prev.call(synth, e);
          refresh();
        };
      }
    } catch (e) { /* ignore */ }
    // 有些移动端浏览器初始 getVoices() 为空，稍后再取几次
    let tries = 0;
    const poll = () => {
      if (voice || tries >= 8) return;
      tries += 1;
      refresh();
      pollTimer = setTimeout(poll, tries < 4 ? 150 : 400);
    };
    pollTimer = setTimeout(poll, 120);
  }

  return {
    supported,
    state,
    subscribe,
    refresh,
    speak,
    cancel,
    pause,
    resume,
    isSpeaking,
    isPaused,
    ensureAvailable,
    setVoicesForTest,
    resetForTest,
    rankVoices: (list) => rankVoices(list).map(describeVoice),
    _cleanup: () => { if (pollTimer) clearTimeout(pollTimer); },
  };
}

export { createSpeechReader, rankVoices, isChineseVoice, describeVoice };
