/* ==========================================================================
   一棵树的四季 · 质量看板（QA CONSOLE）
   读取 qa/data/{catalog,results,history}.json，纯原生 JS，无框架无外链。
   ?demo=1 才启用完整示例数据；示例结果绝不作为正式结果的默认兜底。
   ========================================================================== */
(function () {
  'use strict';

  var DATA_VERSION = '4';
  var COPY_LABEL = '第四轮 · 可视化测试看板';
  var POLL_MS = 2000;

  var state = {
    catalog: null,
    results: null,
    history: null,
    models: [],
    demo: false,
    demoBundle: false,
    demoFallback: false,
    debugState: null,
    filters: { q: '', module: 'all', priority: 'all', status: 'all', type: 'all' },
    collapsed: new Set(),
    expanded: new Set(),
    userToggled: new Set(),
    pollTimer: null,
    toastTimer: null,
    searchTimer: null,
    lastFocus: null
  };

  var STATUS_META = {
    pass: { label: '通过', icon: 'i-check', cls: 'is-pass' },
    fail: { label: '失败', icon: 'i-x', cls: 'is-fail' },
    skip: { label: '已跳过', icon: 'i-skip', cls: 'is-skip' },
    'not-run': { label: '未运行', icon: 'i-dash', cls: 'is-not-run' },
    manual: { label: '待人工复核', icon: 'i-user', cls: 'is-manual' },
    running: { label: '运行中', icon: 'i-pulse', cls: 'is-running' }
  };

  /* 模块目的：优先取 catalog 的 module.purpose（若有），否则从 description 关键词改写成 8–12 字 */
  var PURPOSE_RULES = [
    { re: /加载层|字体资源|冷启动|启动与资源/g, text: '首屏资源与错误兜底' },
    { re: /定帧|确定性|固定种子|树形/g, text: '3D 画面与定帧可复现' },
    { re: /旁白|章节|时序|叙事/g, text: '叙事时序与章节衔接' },
    { re: /播放|音频|音量|重播/g, text: '播放器与音频闭环' },
    { re: /课堂|字幕|朗读|锁定/g, text: '课堂流程与字幕控制' },
    { re: /点认|找一找|合影|探索/g, text: '互动探索与点认反馈' },
    { re: /断点|响应式|触控|布局/g, text: '五档断点与触控布局' },
    { re: /无障碍|焦点|ARIA|对比度/gi, text: '语义焦点与无障碍' },
    { re: /性能|渲染|重绘|首屏时间/g, text: '性能与渲染稳定性' },
    { re: /发布|构建|文档|部署/g, text: '构建发布与文档同步' }
  ];

  /* ------------------------------------------------------------ 工具函数 */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function formatDateTime(iso) {
    if (!iso) return '—';
    var m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
    return m ? m[1] + '-' + m[2] + '-' + m[3] + ' ' + m[4] + ':' + m[5] : String(iso);
  }

  function formatShortTime(iso) {
    if (!iso) return '—';
    var m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
    return m ? m[2] + '-' + m[3] + ' ' + m[4] + ':' + m[5] : String(iso);
  }

  function formatDuration(ms) {
    if (ms == null || !isFinite(ms)) return '—';
    var total = Math.round(Number(ms) / 1000);
    if (total < 60) return total + 's';
    var m = Math.floor(total / 60);
    var s = total % 60;
    return m + 'm ' + String(s).padStart(2, '0') + 's';
  }

  function formatRate(rate) {
    if (rate == null || !isFinite(rate)) return '—';
    var pct = rate * 100;
    return (Math.abs(pct - Math.round(pct)) < 0.05 ? String(Math.round(pct)) : pct.toFixed(1)) + '%';
  }

  function statusMeta(status, running) {
    var meta = STATUS_META[status] || STATUS_META['not-run'];
    if (status === 'not-run' && running) return { label: '待运行', icon: 'i-dash', cls: 'is-not-run' };
    return meta;
  }

  function derivePurpose(mod) {
    if (mod && mod.purpose) return String(mod.purpose);
    var desc = String((mod && mod.description) || '');
    var haystack = desc + ' ' + String((mod && mod.name) || '');
    var best = null;
    var bestScore = 0;
    PURPOSE_RULES.forEach(function (rule) {
      var matched = haystack.match(rule.re);
      var score = matched ? matched.length : 0;
      if (score > bestScore) { bestScore = score; best = rule; }
    });
    if (best) return best.text;
    var first = desc.split(/[：。；]/)[0].replace(/^打开页面到/, '').trim();
    if (first) return first.slice(0, 12);
    return String((mod && mod.name) || '测试点').slice(0, 12);
  }

  function evidenceSrc(path) {
    var value = String(path || '');
    if (/^(data:|https?:|\/)/.test(value)) return value;
    var ver = (state.results && state.results.runId) || DATA_VERSION;
    return value + (value.indexOf('?') === -1 ? '?' : '&') + 'v=' + encodeURIComponent(ver);
  }

  function getRunCommand() {
    var version = (state.catalog && state.catalog.version) || (state.results && state.results.version) || 'v4.1.0';
    return 'node tools/qa-run.js --version ' + version + ' --label "' + COPY_LABEL + '"';
  }

  /* ------------------------------------------------------------ 数据加载 */
  function fetchJSON(path, optional) {
    var sep = path.indexOf('?') === -1 ? '?' : '&';
    var url = path + sep + 'v=' + DATA_VERSION;
    return fetch(url, { cache: 'no-store' }).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status + ' · ' + path);
      return res.json();
    }).catch(function (err) {
      if (optional) return null;
      throw err;
    });
  }

  function toRunning(results) {
    var total = (results.summary && results.summary.auto) || (results.cases ? results.cases.length : 0);
    var done = Math.min(12, results.cases ? results.cases.length : 0);
    var cases = (results.cases || []).slice(0, done).map(function (c, i) {
      return i === done - 1 ? Object.assign({}, c, { status: 'pass' }) : c;
    });
    return Object.assign({}, results, {
      status: 'running',
      finishedAt: null,
      durationMs: 0,
      progress: { done: done, total: total, currentId: cases.length ? cases[cases.length - 1].id : '—' },
      cases: cases
    });
  }

  async function loadData() {
    var params = new URLSearchParams(window.location.search);
    state.demoBundle = params.get('demo') === '1';
    state.debugState = params.get('state');

    if (state.demoBundle) {
      state.catalog = await fetchJSON('data/demo-catalog.json');
      state.demo = true;
    } else {
      try {
        state.catalog = await fetchJSON('data/catalog.json');
      } catch (err) {
        /* catalog 缺失时允许回退示例目录，但必须显示「示例数据」提示，且不使用示例结果 */
        state.catalog = await fetchJSON('data/demo-catalog.json');
        state.demo = true;
        state.demoFallback = true;
      }
    }

    if (!state.catalog || !Array.isArray(state.catalog.modules) || !Array.isArray(state.catalog.cases)) {
      throw new Error('catalog schema invalid');
    }

    if (state.demoBundle) {
      state.results = await fetchJSON('data/demo-results.json?_=' + Date.now(), true);
      state.history = await fetchJSON('data/demo-history.json?_=' + Date.now(), true);
    } else {
      state.results = await fetchJSON('data/results.json?_=' + Date.now(), true);
      /* 运行中或无当前结果时不请求历史文件，避免 runner 尚未写出 history.json 时产生 404；结束后轮询会补拉 */
      state.history = (!state.results || state.results.status === 'running')
        ? null
        : await fetchJSON('data/history.json?_=' + Date.now(), true);
    }

    if (state.debugState === 'empty') {
      state.results = null;
      state.history = null;
    } else if (state.debugState === 'running' && state.results) {
      state.results = toRunning(state.results);
    }
  }

  /* ------------------------------------------------------------ 模型 */
  function getModels() {
    var resultMap = new Map();
    if (state.results && Array.isArray(state.results.cases)) {
      state.results.cases.forEach(function (r) { resultMap.set(r.id, r); });
    }
    return (state.catalog.cases || []).map(function (c) {
      var result = resultMap.get(c.id) || null;
      var status;
      if (c.type === 'manual') status = 'manual';
      else if (result) status = result.status || 'not-run';
      else status = 'not-run';
      return Object.assign({}, c, { result: result, status: status, durationMs: result ? result.durationMs : null });
    });
  }

  function summarise(models) {
    var auto = models.filter(function (m) { return m.type === 'auto'; });
    var manual = models.filter(function (m) { return m.type === 'manual'; });
    var passed = auto.filter(function (m) { return m.status === 'pass'; }).length;
    var failed = auto.filter(function (m) { return m.status === 'fail'; }).length;
    var skipped = auto.filter(function (m) { return m.status === 'skip'; }).length;
    var autoTotal = auto.length;
    var notRun = Math.max(0, autoTotal - passed - failed - skipped);
    var executed = passed + failed;
    var p0 = models.filter(function (m) { return m.priority === 'P0'; });
    var p0Auto = p0.filter(function (m) { return m.type === 'auto'; });
    var p1 = models.filter(function (m) { return m.priority === 'P1'; });
    return {
      total: models.length,
      autoTotal: autoTotal,
      manualTotal: manual.length,
      passed: passed,
      failed: failed,
      skipped: skipped,
      notRun: notRun,
      executed: executed,
      passRate: executed ? passed / executed : null,
      p0Total: p0.length,
      p0Pass: p0.filter(function (m) { return m.status === 'pass'; }).length,
      p0Fail: p0.filter(function (m) { return m.status === 'fail'; }).length,
      p0NotRun: p0Auto.filter(function (m) { return m.status === 'not-run' || m.status === 'skip'; }).length,
      p0Manual: p0.filter(function (m) { return m.status === 'manual'; }).length,
      p1Fail: p1.filter(function (m) { return m.status === 'fail'; }).length
    };
  }

  function getFilteredModels() {
    var q = state.filters.q.trim().toLowerCase();
    return state.models.filter(function (m) {
      if (state.filters.module !== 'all' && m.module !== state.filters.module) return false;
      if (state.filters.priority !== 'all' && m.priority !== state.filters.priority) return false;
      if (state.filters.status !== 'all' && m.status !== state.filters.status) return false;
      if (state.filters.type !== 'all' && m.type !== state.filters.type) return false;
      if (q) {
        var hay = (m.id + ' ' + m.title + ' ' + m.summary).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  /* ------------------------------------------------------------ 顶栏 / Hero */
  function renderTop() {
    var version = (state.results && state.results.version) || (state.catalog && state.catalog.version) || '—';
    $('#topVersion').textContent = version;
    if (!state.results) {
      $('#topLastRun').textContent = '尚未运行';
    } else if (state.results.status === 'running') {
      $('#topLastRun').textContent = '运行中 · ' + formatShortTime(state.results.startedAt);
    } else {
      $('#topLastRun').textContent = formatShortTime(state.results.finishedAt || state.results.startedAt);
    }
    var updated = state.results
      ? 'UPDATED ' + formatShortTime(state.results.finishedAt || state.results.startedAt)
      : 'CATALOG ' + (state.catalog.updatedAt || '—');
    $('#heroUpdated').textContent = updated;
  }

  function renderOverview(models) {
    var s = summarise(models);
    var rate = s.passRate;
    var running = !!(state.results && state.results.status === 'running');
    var processed = s.passed + s.failed + s.skipped;
    var progressDone = running && state.results.progress && state.results.progress.done != null
      ? state.results.progress.done : processed;
    var progressMode = !state.results || running || processed < s.autoTotal;
    var progressRatio = s.autoTotal ? Math.min(1, progressDone / s.autoTotal) : 0;

    var ringWrap = $('.ring-wrap');
    var ringValue = $('#ringValue');
    var C = 2 * Math.PI * Number(ringValue.getAttribute('r'));
    ringValue.style.strokeDasharray = String(C);
    ringWrap.classList.remove('is-empty', 'is-pass', 'is-fail', 'is-progress', 'is-rate');
    if (progressMode) {
      ringWrap.classList.add('is-progress');
      if (!state.results) ringWrap.classList.add('is-empty');
      ringValue.style.strokeDashoffset = String(C * (1 - progressRatio));
      $('#ringLabel').textContent = 'RUN PROGRESS';
      $('#passRate').textContent = String(Math.round(progressRatio * 100));
      $('#ringSub').textContent = '已执行 ' + progressDone + ' / ' + s.autoTotal;
      $('#ringTitle').textContent = '自动化测试执行进度 ' + Math.round(progressRatio * 100) + '%';
      var passrateEl = $('#ringPassRate');
      passrateEl.hidden = false;
      passrateEl.textContent = '已执行项通过率 ' + (rate == null ? '—' : formatRate(rate));
      passrateEl.classList.toggle('is-low', rate != null && rate < 0.9);
    } else {
      ringWrap.classList.add('is-rate');
      ringWrap.classList.toggle('is-pass', rate >= 0.9);
      ringWrap.classList.toggle('is-fail', rate < 0.9);
      ringValue.style.strokeDashoffset = String(C * (1 - (rate == null ? 0 : rate)));
      $('#ringLabel').textContent = 'PASS RATE';
      $('#passRate').textContent = rate == null ? '—' : (Math.abs(rate * 100 - Math.round(rate * 100)) < 0.05
        ? String(Math.round(rate * 100))
        : (rate * 100).toFixed(1));
      $('#ringSub').textContent = s.passed + ' / ' + (s.passed + s.failed) + ' 通过';
      $('#ringTitle').textContent = '自动化测试通过率 ' + (rate == null ? '—' : formatRate(rate));
      $('#ringPassRate').hidden = true;
    }
    $('#statPassed').textContent = s.passed;
    $('#statFailed').textContent = s.failed;
    $('#statNotRun').textContent = s.notRun;
    $('#statManual').textContent = s.manualTotal;
    $('#statNotRunFoot').textContent = s.skipped ? ('NOT RUN · 跳过 ' + s.skipped) : 'NOT RUN · AUTO';

    var badge = $('#runBadge');
    var badgeCls = 'is-pending';
    var badgeText = '未运行';
    if (!state.results) {
      badgeCls = 'is-pending'; badgeText = '未运行';
    } else if (running) {
      badgeCls = 'is-running'; badgeText = '运行中';
    } else if (s.failed > 0) {
      badgeCls = 'is-fail'; badgeText = '有失败';
    } else if (state.results.status === 'passed') {
      badgeCls = 'is-pass'; badgeText = '已通过';
    } else {
      badgeCls = 'is-pending'; badgeText = '已完成';
    }
    badge.className = 'status-badge ' + badgeCls;
    $('.status-text', badge).textContent = badgeText;

    var progressBox = $('#heroProgress');
    if (running) {
      var pct = Math.round(progressRatio * 100);
      progressBox.hidden = false;
      $('#progressText').textContent = progressDone + ' / ' + s.autoTotal;
      $('#progressPct').textContent = pct + '%';
      $('#progressFill').style.width = pct + '%';
      $('#progressBar').setAttribute('aria-valuenow', String(pct));
      $('#runStatusNote').textContent = '正在执行 ' + ((state.results.progress && state.results.progress.currentId) || '…') + ' · 每 2 秒刷新';
    } else {
      progressBox.hidden = true;
      if (!state.results) {
        $('#runStatusNote').textContent = '尚无自动化运行记录';
      } else {
        var note = '完成于 ' + formatShortTime(state.results.finishedAt || state.results.startedAt) + ' · 耗时 ' + formatDuration(state.results.durationMs);
        if (s.skipped) note += ' · 跳过 ' + s.skipped + ' 项';
        if (s.failed) note += ' · ' + s.failed + ' 项失败';
        $('#runStatusNote').textContent = note;
      }
    }

    var env = (state.results && state.results.environment) || {};
    $('#metaVersion').textContent = (state.results && state.results.version) || (state.catalog && state.catalog.version) || '—';
    $('#metaCommit').textContent = (state.results && state.results.commit) || '—';
    $('#metaDuration').textContent = state.results && state.results.durationMs ? formatDuration(state.results.durationMs) : (running ? '进行中' : '—');
    $('#metaBrowser').textContent = env.browser || '—';
    $('#metaBaseUrl').textContent = env.baseUrl || '—';
    $('#metaRunId').textContent = (state.results && state.results.runId) || '—';

    renderVerdict(s, running);
  }

  function renderVerdict(s, running) {
    var box = $('#projectVerdict');
    var text = $('#verdictText');
    var tag = $('#verdictTag');
    var cls = 'is-pending';
    var message = '';
    if (!state.results) {
      message = '尚无运行记录 · 先执行自动化测试';
      tag.textContent = 'P0 ' + s.p0Total + ' 项待验证';
    } else if (s.p0Fail > 0) {
      cls = 'is-fail';
      message = '存在 ' + s.p0Fail + ' 个 P0 阻断项 · 不建议直接上课';
      tag.textContent = 'P0 ' + s.p0Pass + '/' + s.p0Total + ' 通过';
    } else if (running) {
      message = '自动化测试运行中，P0 结论待全部跑完后生成';
      tag.textContent = 'P0 ' + s.p0Pass + '/' + s.p0Total;
    } else if (s.p0Total === 0) {
      cls = 'is-warn';
      message = '目录中暂无 P0 用例 · 请先补全测试点';
      tag.textContent = 'P0 0 项';
    } else if (s.p0NotRun + s.p0Manual > 0) {
      cls = 'is-warn';
      message = 'P0 仍有 ' + (s.p0NotRun + s.p0Manual) + ' 项未验证 · 暂不建议直接上课';
      tag.textContent = 'P0 ' + s.p0Pass + '/' + s.p0Total + ' 通过';
    } else {
      cls = 'is-pass';
      message = 'P0 阻断项 0 · 可进入课堂试用';
      tag.textContent = 'P0 ' + s.p0Pass + '/' + s.p0Total + (s.p1Fail ? ' · P1 ' + s.p1Fail + ' 失败' : ' 通过');
    }
    box.className = 'verdict ' + cls;
    if (text.textContent !== message) text.textContent = message;
  }

  /* ------------------------------------------------------------ 测试点地图 */
  function mapTileData(mod, index) {
    var list = state.models.filter(function (m) { return m.module === mod.id; });
    var p0 = list.filter(function (m) { return m.priority === 'P0'; }).length;
    var p1 = list.filter(function (m) { return m.priority === 'P1'; }).length;
    var p2 = list.filter(function (m) { return m.priority === 'P2'; }).length;
    var auto = list.filter(function (m) { return m.type === 'auto'; });
    var executed = auto.filter(function (m) { return m.status === 'pass' || m.status === 'fail'; });
    var passed = auto.filter(function (m) { return m.status === 'pass'; }).length;
    var rate = executed.length ? passed / executed.length : null;
    var purpose = derivePurpose(mod);
    var bars = '';
    if (p0) bars += '<i class="bar-p0" style="flex:' + p0 + '"></i>';
    if (p1) bars += '<i class="bar-p1" style="flex:' + p1 + '"></i>';
    if (p2) bars += '<i class="bar-p2" style="flex:' + p2 + '"></i>';
    if (!bars) bars = '<i class="bar-p2" style="flex:1;opacity:.15"></i>';
    return {
      index: index,
      total: list.length,
      p0: p0,
      p1: p1,
      p2: p2,
      auto: auto.length,
      rate: rate,
      bars: bars,
      purpose: /^[A-Za-z0-9]/.test(purpose) ? '验证 ' + purpose : '验证' + purpose
    };
  }

  function mapTileHtml(mod, data) {
    return '<button class="map-cell" type="button" data-module="' + esc(mod.id) + '" aria-pressed="' + (state.filters.module === mod.id) + '" aria-label="筛选模块：' + esc(mod.name) + '，共 ' + data.total + ' 个测试点">' +
      '<span class="map-top">' +
        '<span class="map-index">' + String(data.index + 1).padStart(2, '0') + '</span>' +
        '<span class="map-en">' + esc(mod.en || '') + '</span>' +
        '<span class="map-total">' + data.total + '<small>条</small></span>' +
      '</span>' +
      '<span class="map-name">' + esc(mod.name) + '</span>' +
      '<span class="map-purpose">' + esc(data.purpose) + '</span>' +
      '<span class="map-bars" aria-hidden="true">' + data.bars + '</span>' +
      '<span class="map-foot"><span>P0 ' + data.p0 + ' · P1 ' + data.p1 + ' · P2 ' + data.p2 + '</span><span>自动 ' + data.auto + ' · ' + (data.rate == null ? '未运行' : '通过 ' + formatRate(data.rate)) + '</span></span>' +
      '<span class="map-rate' + (data.rate == null ? ' is-empty' : '') + '"><i style="width:' + (data.rate == null ? 0 : Math.round(data.rate * 100)) + '%"></i></span>' +
    '</button>';
  }

  function renderMap() {
    var modules = state.catalog.modules || [];
    var root = $('#moduleMap');
    var existing = $$('.map-cell', root);
    if (existing.length === modules.length) {
      /* 轮询刷新时原地更新，避免把用户正在点击的按钮从 DOM 上摘下 */
      modules.forEach(function (mod, index) {
        var btn = existing[index];
        var data = mapTileData(mod, index);
        btn.setAttribute('data-module', mod.id);
        btn.setAttribute('aria-pressed', String(state.filters.module === mod.id));
        btn.setAttribute('aria-label', '筛选模块：' + mod.name + '，共 ' + data.total + ' 个测试点');
        $('.map-index', btn).textContent = String(index + 1).padStart(2, '0');
        $('.map-en', btn).textContent = mod.en || '';
        $('.map-total', btn).innerHTML = data.total + '<small>条</small>';
        $('.map-name', btn).textContent = mod.name;
        $('.map-purpose', btn).textContent = data.purpose;
        $('.map-bars', btn).innerHTML = data.bars;
        $('.map-foot', btn).innerHTML = '<span>P0 ' + data.p0 + ' · P1 ' + data.p1 + ' · P2 ' + data.p2 + '</span><span>自动 ' + data.auto + ' · ' + (data.rate == null ? '未运行' : '通过 ' + formatRate(data.rate)) + '</span>';
        var rateEl = $('.map-rate', btn);
        rateEl.className = 'map-rate' + (data.rate == null ? ' is-empty' : '');
        $('i', rateEl).style.width = (data.rate == null ? 0 : Math.round(data.rate * 100)) + '%';
      });
    } else {
      root.innerHTML = modules.map(function (mod, index) { return mapTileHtml(mod, mapTileData(mod, index)); }).join('');
    }
    var meta = $('#mapTitle').closest('.panel-head').querySelector('.panel-head-meta');
    if (meta) meta.textContent = modules.length + ' 个模块 · 点击筛选';
  }

  function syncMapPressed() {
    $$('#moduleMap .map-cell').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-module') === state.filters.module));
    });
  }

  /* ------------------------------------------------------------ 筛选与列表 */
  function populateModuleFilter() {
    var sel = $('#filterModule');
    var options = ['<option value="all">全部</option>'];
    (state.catalog.modules || []).forEach(function (mod) {
      options.push('<option value="' + esc(mod.id) + '">' + esc(mod.name) + '</option>');
    });
    sel.innerHTML = options.join('');
    sel.value = 'all';
  }

  function activeFilterCount() {
    var f = state.filters;
    var n = 0;
    if (f.q.trim()) n++;
    if (f.module !== 'all') n++;
    if (f.priority !== 'all') n++;
    if (f.status !== 'all') n++;
    if (f.type !== 'all') n++;
    return n;
  }

  function renderFilterState() {
    var visible = getFilteredModels();
    var total = state.models.length;
    $('#filterCurrent').textContent = visible.length;
    $('#filterTotal').textContent = '/ ' + total;
    var moduleCount = new Set(visible.map(function (m) { return m.module; })).size;
    $('#catalogSummary').textContent = '当前显示 ' + visible.length + ' / ' + total + ' 个测试点 · ' + moduleCount + ' 个模块';
    var active = activeFilterCount();
    $('#filterToggleCount').textContent = active ? active + ' 项' : '';
    $('#filterToggle').setAttribute('aria-label', active ? ('筛选，已启用 ' + active + ' 项') : '筛选');
    $('#filterModule').value = state.filters.module;
    $('#filterPriority').value = state.filters.priority;
    $('#filterStatus').value = state.filters.status;
    $('#filterType').value = state.filters.type;
    return visible;
  }

  function groupStatsHtml(list) {
    var auto = list.filter(function (m) { return m.type === 'auto'; });
    var executed = auto.filter(function (m) { return m.status === 'pass' || m.status === 'fail'; });
    var passed = auto.filter(function (m) { return m.status === 'pass'; }).length;
    var rate = executed.length ? passed / executed.length : null;
    return '<span class="gs-total"><b>' + list.length + '</b> 条</span>' +
      '<span class="gs-auto">自动 <b>' + auto.length + '</b></span>' +
      '<span class="gs-rate">通过 <b>' + (rate == null ? '—' : formatRate(rate)) + '</b></span>';
  }

  function renderGroups(visible) {
    var groupsRoot = $('#caseGroups');
    var empty = $('#catalogEmpty');
    if (!state.models.length) {
      groupsRoot.innerHTML = '';
      empty.hidden = false;
      $('.empty-code', empty).textContent = 'NO DATA';
      $('h3', empty).textContent = '测试点目录为空';
      $('p', empty).textContent = '请确认 qa/data/catalog.json 是否包含 cases。';
      return;
    }
    if (!visible.length) {
      groupsRoot.innerHTML = '';
      empty.hidden = false;
      $('.empty-code', empty).textContent = 'NO MATCH';
      $('h3', empty).textContent = '当前筛选没有测试点';
      $('p', empty).textContent = '换一个关键词，或清空筛选条件查看全部测试点。';
      return;
    }
    empty.hidden = true;

    var byModule = new Map();
    visible.forEach(function (m) {
      if (!byModule.has(m.module)) byModule.set(m.module, []);
      byModule.get(m.module).push(m);
    });

    var html = '';
    (state.catalog.modules || []).forEach(function (mod, index) {
      var list = byModule.get(mod.id);
      if (!list || !list.length) return;
      var collapsed = state.collapsed.has(mod.id);
      var groupId = 'group-body-' + mod.id;
      html += '<section class="group' + (collapsed ? ' collapsed' : '') + '" data-module="' + esc(mod.id) + '">' +
        '<button class="group-head" type="button" aria-expanded="' + String(!collapsed) + '" aria-controls="' + esc(groupId) + '" data-module="' + esc(mod.id) + '">' +
          '<span class="group-index">' + String(index + 1).padStart(2, '0') + '</span>' +
          '<span class="group-name">' + esc(mod.name) + '<span class="group-en">' + esc(mod.en || '') + '</span></span>' +
          '<span class="group-stats">' + groupStatsHtml(list) + '</span>' +
          '<svg class="icon chev" aria-hidden="true"><use href="#i-chev"/></svg>' +
        '</button>' +
        '<div class="group-body" id="' + esc(groupId) + '">' + list.map(renderCaseRow).join('') + '</div>' +
      '</section>';
    });
    groupsRoot.innerHTML = html;
  }

  /* 轮询时只更新已有行与分组统计，不重建列表 DOM，保证点击/键盘交互不被 2s 刷新打断 */
  function updateRenderedCases() {
    var visible = getFilteredModels();
    var rows = $$('#caseGroups .case-row');
    if (rows.length !== visible.length) {
      renderGroupsKeepingFocus(visible);
      return;
    }
    var byId = new Map(visible.map(function (m) { return [m.id, m]; }));
    var running = !!(state.results && state.results.status === 'running');
    rows.forEach(function (row) {
      var id = row.getAttribute('data-case-id');
      var m = byId.get(id);
      if (!m) return;
      var meta = statusMeta(m.status, running);
      row.className = 'case-row' + (m.status === 'fail' ? ' is-fail' : '') + (m.status === 'manual' ? ' is-manual' : '') +
        (running && state.results.progress && state.results.progress.currentId === m.id ? ' is-running' : '');
      var pill = $('.status-pill', row);
      if (pill) {
        pill.className = 'status-pill ' + meta.cls;
        pill.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#' + meta.icon + '"/></svg><span>' + meta.label + '</span>';
      }
      var dur = $('.case-dur', row);
      if (dur) dur.textContent = m.durationMs != null ? (m.durationMs < 1000 ? m.durationMs + 'ms' : (m.durationMs / 1000).toFixed(1) + 's') : '—';
      var detail = document.getElementById('case-detail-' + id);
      if (detail && detail.getAttribute('data-detail-sig') !== caseSignature(m)) {
        detail.innerHTML = renderCaseDetail(m);
        detail.setAttribute('data-detail-sig', caseSignature(m));
      }
      if (m.status === 'fail' && !state.userToggled.has(m.id)) {
        state.expanded.add(m.id);
        row.setAttribute('aria-expanded', 'true');
        if (detail) detail.hidden = false;
      }
    });
    $$('.group').forEach(function (group) {
      var modId = group.getAttribute('data-module');
      var list = visible.filter(function (m) { return m.module === modId; });
      var stats = $('.group-stats', group);
      if (stats) stats.innerHTML = groupStatsHtml(list);
    });
    renderFilterState();
  }

  function caseSignature(m) {
    var r = m.result || {};
    return [m.status, m.durationMs == null ? '' : m.durationMs, r.actual || '', r.message || '', (r.evidence || []).length].join('|');
  }

  function renderCaseRow(m) {
    var running = !!(state.results && state.results.status === 'running');
    var meta = statusMeta(m.status, running);
    var expanded = state.expanded.has(m.id);
    var rowCls = 'case-row' + (m.status === 'fail' ? ' is-fail' : '') + (m.status === 'manual' ? ' is-manual' : '') +
      (running && state.results.progress && state.results.progress.currentId === m.id ? ' is-running' : '');
    var detailId = 'case-detail-' + m.id;
    var duration = m.durationMs != null ? (m.durationMs < 1000 ? m.durationMs + 'ms' : (m.durationMs / 1000).toFixed(1) + 's') : '—';
    return '<button class="' + rowCls + '" type="button" data-case-id="' + esc(m.id) + '" aria-expanded="' + String(expanded) + '" aria-controls="' + esc(detailId) + '">' +
      '<span class="case-id">' + esc(m.id) + '</span>' +
      '<span class="case-main"><span class="case-title">' + esc(m.title) + '</span><span class="case-summary">' + esc(m.summary) + '</span></span>' +
      '<span class="case-meta">' +
        '<span class="badge badge-' + m.priority.toLowerCase() + '">' + esc(m.priority) + '</span>' +
        '<span class="badge ' + (m.type === 'auto' ? 'badge-auto' : 'badge-manual') + '">' + (m.type === 'auto' ? '自动' : '人工') + '</span>' +
        '<span class="status-pill ' + meta.cls + '"><svg class="icon" aria-hidden="true"><use href="#' + meta.icon + '"/></svg><span>' + meta.label + '</span></span>' +
        '<span class="case-dur">' + esc(duration) + '</span>' +
      '</span>' +
      '<svg class="icon chev" aria-hidden="true"><use href="#i-chev"/></svg>' +
    '</button>' +
    '<div class="case-detail" id="' + esc(detailId) + '" data-case-detail="' + esc(m.id) + '" data-detail-sig="' + esc(caseSignature(m)) + '"' + (expanded ? '' : ' hidden') + '>' + renderCaseDetail(m) + '</div>';
  }

  function renderCaseDetail(m) {
    var result = m.result || {};
    var evidence = Array.isArray(result.evidence) ? result.evidence : [];
    var steps = Array.isArray(m.steps) ? m.steps : [];
    var notes = '';
    if (m.status === 'manual') {
      notes += '<div class="detail-note is-manual"><svg class="icon" aria-hidden="true"><use href="#i-user"/></svg><span>待人工复核：此测试点不参与自动化运行，需按步骤人工检查并记录结论。</span></div>';
    } else if (m.status === 'not-run') {
      notes += '<div class="detail-note is-not-run"><svg class="icon" aria-hidden="true"><use href="#i-info"/></svg><span>未运行：最近一次自动化运行尚未包含此用例' + (state.results && state.results.status === 'running' ? '（运行仍在进行中）' : '') + '。</span></div>';
    } else if (m.status === 'skip') {
      notes += '<div class="detail-note is-skip"><svg class="icon" aria-hidden="true"><use href="#i-skip"/></svg><span>已跳过：' + esc(result.message || 'runner 尚未实现对应的 automationKey。') + '</span></div>';
    }
    var evidenceHtml = evidence.length
      ? '<div class="evidence-list">' + evidence.map(function (src, i) {
          var alt = m.id + ' 证据截图 ' + (i + 1);
          var resolved = evidenceSrc(src);
          return '<button class="evidence-thumb" type="button" data-evidence-src="' + esc(resolved) + '" data-evidence-alt="' + esc(alt) + '" aria-label="查看' + esc(alt) + '"><img src="' + esc(resolved) + '" alt="" loading="lazy" decoding="async"></button>';
        }).join('') + '</div>'
      : '<div class="evidence-empty"><svg class="icon" aria-hidden="true"><use href="#i-image"/></svg>无截图证据</div>';

    return '<div class="detail-grid">' +
      '<div class="detail-block"><h4>目标 · GOAL</h4><p>' + esc(m.goal || '—') + '</p></div>' +
      '<div class="detail-block"><h4>预期 · EXPECTED</h4><p>' + esc(m.expected || '—') + '</p></div>' +
      '<div class="detail-block steps"><h4>步骤 · STEPS</h4><ol class="steps-list">' + steps.map(function (step) { return '<li>' + esc(step) + '</li>'; }).join('') + '</ol></div>' +
      '<div class="detail-block actual"><h4>实际结果 · ACTUAL</h4><pre class="actual-block' + (m.status === 'fail' ? ' is-fail' : '') + '">' + esc(result.actual || '—') + '</pre>' +
        (result.message ? '<div class="detail-message"><strong>消息</strong><span>' + esc(result.message) + '</span></div>' : '') +
      '</div>' +
      '<div class="detail-block evidence"><h4>证据 · EVIDENCE</h4>' + evidenceHtml + '</div>' +
    '</div>' + notes;
  }

  /* ------------------------------------------------------------ 右栏 */
  function renderRailRun(models, s) {
    var root = $('#recentRun');
    if (!state.results) {
      root.innerHTML = '<div class="rail-empty"><p>尚无自动化运行记录。执行一次全量运行后，这里会显示 runId、耗时与失败项。</p>' +
        '<button class="btn btn-ghost btn-small js-copy" type="button"><svg class="icon" aria-hidden="true"><use href="#i-copy"/></svg>复制执行命令</button></div>';
      return;
    }
    var r = state.results;
    var running = r.status === 'running';
    var badgeCls = running ? 'is-running' : (s.failed > 0 ? 'is-fail' : 'is-pass');
    var badgeText = running ? '运行中' : (s.failed > 0 ? '有失败' : '已通过');
    var failedModels = models.filter(function (m) { return m.status === 'fail'; });
    var autoTotal = s.autoTotal || 1;
    var passPct = Math.round(s.passed / autoTotal * 100);
    var failPct = Math.round(s.failed / autoTotal * 100);
    var skipPct = Math.round(s.skipped / autoTotal * 100);
    var failChips = failedModels.slice(0, 8).map(function (m) { return '<span class="fail-chip">' + esc(m.id) + '</span>'; }).join('');
    if (failedModels.length > 8) failChips += '<span class="fail-chip fail-more">+' + (failedModels.length - 8) + '</span>';
    var fails = failedModels.length
      ? '<div class="run-fails"><span class="run-fails-label">FAILED ' + failedModels.length + '</span>' + failChips + '</div>'
      : '';
    root.innerHTML = '<div class="recent-top"><div style="min-width:0"><div class="recent-label">' + esc(r.label || '自动化运行') + '</div>' +
      '<div class="recent-runid">' + esc(r.runId || '—') + ' · ' + esc(r.version || '—') + '</div></div>' +
      '<span class="status-badge ' + badgeCls + '"><span class="status-dot" aria-hidden="true"></span><span class="status-text">' + badgeText + '</span></span></div>' +
      '<dl class="run-kv">' +
        '<div><dt>STARTED</dt><dd>' + formatDateTime(r.startedAt) + '</dd></div>' +
        '<div><dt>FINISHED</dt><dd>' + (r.finishedAt ? formatDateTime(r.finishedAt) : '—') + '</dd></div>' +
        '<div><dt>DURATION</dt><dd>' + (running ? '进行中' : formatDuration(r.durationMs)) + '</dd></div>' +
        '<div><dt>COMMIT</dt><dd class="mono">' + esc(r.commit || '—') + '</dd></div>' +
      '</dl>' +
      '<div class="run-meter"><div class="run-meter-head"><span>PASS <b>' + s.passed + '</b> · FAIL <b>' + s.failed + '</b> · SKIP <b>' + s.skipped + '</b></span><span>' + (s.passRate == null ? '—' : formatRate(s.passRate)) + '</span></div>' +
        '<div class="meter" role="img" aria-label="已通过 ' + s.passed + '，失败 ' + s.failed + '，跳过 ' + s.skipped + '，自动化共 ' + s.autoTotal + ' 项">' +
          '<i style="width:' + passPct + '%"></i><i class="is-fail" style="width:' + failPct + '%"></i><i class="is-skip" style="width:' + skipPct + '%"></i>' +
        '</div></div>' + fails;
  }

  function renderHistory() {
    var root = $('#historyChart');
    var runs = (state.history && Array.isArray(state.history.runs)) ? state.history.runs.slice() : [];
    runs = runs.filter(function (r) { return r && r.summary && typeof r.summary.passRate === 'number'; })
      .sort(function (a, b) { return new Date(a.finishedAt || 0) - new Date(b.finishedAt || 0); })
      .slice(-6);
    $('#historyCount').textContent = runs.length ? (runs.length + (runs.length > 1 ? ' RUNS' : ' RUN')) : '—';
    if (!runs.length) {
      root.innerHTML = '<div class="chart-empty">暂无历史运行记录</div>';
      return;
    }
    var W = 340, H = 166, left = 22, right = 8, top = 20, bottom = 34;
    var plotW = W - left - right;
    var plotH = H - top - bottom;
    var slot = plotW / runs.length;
    var barW = Math.max(10, Math.min(26, slot * 0.42));
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-labelledby="chartTitle">' +
      '<title id="chartTitle">近 ' + runs.length + ' 次运行的自动化通过率趋势</title>';
    [0, 0.25, 0.5, 0.75, 1].forEach(function (g) {
      var y = top + plotH * (1 - g);
      svg += '<line class="chart-grid" x1="' + left + '" y1="' + y.toFixed(1) + '" x2="' + (W - right) + '" y2="' + y.toFixed(1) + '"/>';
      if (g === 0 || g === 0.5 || g === 1) {
        svg += '<text class="chart-label" x="0" y="' + (y + 3).toFixed(1) + '">' + (g * 100) + '</text>';
      }
    });
    svg += '<line class="chart-baseline" x1="' + left + '" y1="' + (top + plotH) + '" x2="' + (W - right) + '" y2="' + (top + plotH) + '"/>';
    runs.forEach(function (run, i) {
      var rate = Math.max(0, Math.min(1, Number(run.summary.passRate)));
      var h = plotH * rate;
      var x = left + slot * i + (slot - barW) / 2;
      var y = top + plotH - h;
      var latest = i === runs.length - 1;
      var title = (run.version || '') + ' · ' + (run.label || '') + ' · 通过率 ' + formatRate(rate) + ' · ' + formatShortTime(run.finishedAt);
      svg += '<rect class="chart-bar' + (latest ? ' is-latest' : '') + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + Math.max(1, h).toFixed(1) + '" rx="1.5"><title>' + esc(title) + '</title></rect>';
      svg += '<text class="chart-value' + (latest ? ' is-latest' : '') + '" x="' + (x + barW / 2).toFixed(1) + '" y="' + (y - 4).toFixed(1) + '" text-anchor="middle">' + formatRate(rate).replace('%', '') + '</text>';
      var label = (run.finishedAt || '').slice(5, 10) || (run.version || '');
      svg += '<text class="chart-label" x="' + (x + barW / 2).toFixed(1) + '" y="' + (top + plotH + 13) + '" text-anchor="middle">' + esc(label) + '</text>';
    });
    svg += '</svg>';
    root.innerHTML = svg;
  }

  /* ------------------------------------------------------------ 提示条 */
  function renderDemoState() {
    $('#demoBadge').hidden = !state.demo;
    var notice = $('#demoNotice');
    notice.hidden = !state.demo;
    if (state.demo) {
      if (state.demoBundle) {
        notice.innerHTML = '<span class="demo-notice-tag">DEMO DATA</span><p>当前展示的是示例数据（<code>qa/data/demo-*.json</code>），仅用于视觉预览，不代表真实测试结果。</p>';
      } else {
        notice.innerHTML = '<span class="demo-notice-tag">FALLBACK</span><p>未读取到 <code>qa/data/catalog.json</code>，目录已回退到示例数据；真实结果请以 <code>results.json</code> 为准。</p>';
      }
    }
    $('#dataNotice').hidden = !!state.results;
  }

  /* ------------------------------------------------------------ 全量渲染 */
  function renderAll() {
    state.models = getModels();
    state.models.forEach(function (m) {
      if (m.status === 'fail' && !state.userToggled.has(m.id)) state.expanded.add(m.id);
    });
    renderTop();
    renderOverview(state.models);
    renderMap();
    var visible = renderFilterState();
    renderGroupsKeepingFocus(visible);
    var s = summarise(state.models);
    renderRailRun(state.models, s);
    renderHistory();
    renderDemoState();
  }

  /* ------------------------------------------------------------ 轮询 */
  function stopPoll() {
    if (state.pollTimer) {
      clearTimeout(state.pollTimer);
      state.pollTimer = null;
    }
  }

  function schedulePoll() {
    stopPoll();
    if (state.demoBundle || state.debugState) return; /* 示例数据与调试态不轮询 */
    if (!state.results || state.results.status !== 'running') return;
    state.pollTimer = setTimeout(pollResults, POLL_MS);
  }

  function refreshLiveData() {
    state.models = getModels();
    state.models.forEach(function (m) {
      if (m.status === 'fail' && !state.userToggled.has(m.id)) state.expanded.add(m.id);
    });
    renderTop();
    renderOverview(state.models);
    renderMap();
    updateRenderedCases();
    var s = summarise(state.models);
    renderRailRun(state.models, s);
  }

  function delay(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  /* runner 先写 results.json 再写 history.json，完成后短暂重试拉取历史，避免踩到写盘间隙 */
  async function loadHistoryWhenReady(attempts) {
    var tries = attempts || 4;
    for (var i = 0; i < tries; i++) {
      var history = await fetchJSON('data/history.json?_=' + Date.now(), true);
      if (history) {
        state.history = history;
        renderHistory();
        return;
      }
      if (i < tries - 1) await delay(450);
    }
  }

  async function pollResults() {
    state.pollTimer = null;
    try {
      var next = await fetchJSON('data/results.json?_=' + Date.now(), true);
      if (next) {
        var wasRunning = state.results && state.results.status === 'running';
        state.results = next;
        if (wasRunning && next.status !== 'running') {
          state.history = null;
          renderAll();
          showToast('自动化测试已完成，看板已更新');
          loadHistoryWhenReady();
        } else {
          refreshLiveData();
        }
      }
    } catch (err) {
      /* 网络抖动时静默重试；不打断已有结果 */
    }
    schedulePoll();
  }

  /* ------------------------------------------------------------ 交互 */
  function setFilter(key, value) {
    state.filters[key] = value;
    var visible = renderFilterState();
    renderGroupsKeepingFocus(visible);
    syncMapPressed();
  }

  function resetFilters() {
    if (state.searchTimer) {
      clearTimeout(state.searchTimer);
      state.searchTimer = null;
    }
    state.filters = { q: '', module: 'all', priority: 'all', status: 'all', type: 'all' };
    $('#searchInput').value = '';
    setFilter('q', '');
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) { /* fall through */ }
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (err) {
      return false;
    }
  }

  async function copyCommand(btn) {
    var ok = await copyText(getRunCommand());
    if (!ok) {
      showToast('复制失败，请手动复制执行命令');
      return;
    }
    showToast('执行命令已复制到剪贴板');
    if (btn && btn.id === 'copyCommand') {
      btn.classList.add('copied');
      setTimeout(function () { btn.classList.remove('copied'); }, 2000);
    }
  }

  function showToast(message) {
    var toast = $('#toast');
    $('#toastText').textContent = message;
    toast.classList.add('show');
    if (state.toastTimer) clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
  }

  function openLightbox(src, alt) {
    state.lastFocus = document.activeElement;
    $('#lightboxImage').src = src;
    $('#lightboxImage').alt = alt || '证据截图';
    $('#lightboxCaption').textContent = alt || '证据截图';
    $('#lightbox').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#lightboxClose').focus();
  }

  function closeLightbox() {
    if ($('#lightbox').hidden) return;
    $('#lightbox').hidden = true;
    $('#lightboxImage').removeAttribute('src');
    document.body.style.overflow = '';
    if (state.lastFocus && typeof state.lastFocus.focus === 'function') state.lastFocus.focus();
  }

  function captureFocus() {
    var el = document.activeElement;
    if (!el) return null;
    if (el.closest && el.closest('.case-row')) return { type: 'case', id: el.closest('.case-row').getAttribute('data-case-id') };
    if (el.closest && el.closest('.group-head')) return { type: 'group', id: el.closest('.group-head').getAttribute('data-module') };
    return null;
  }

  function restoreFocus(focus) {
    if (!focus) return;
    var el = null;
    if (focus.type === 'case') el = document.querySelector('.case-row[data-case-id="' + focus.id.replace(/"/g, '\\"') + '"]');
    if (focus.type === 'group') el = document.querySelector('.group-head[data-module="' + focus.id.replace(/"/g, '\\"') + '"]');
    if (el) el.focus({ preventScroll: true });
  }

  function bindEvents() {
    document.addEventListener('click', function (e) {
      var copyBtn = e.target.closest('#copyCommand, .js-copy');
      if (copyBtn) {
        e.preventDefault();
        copyCommand(copyBtn);
        return;
      }

      var mapBtn = e.target.closest('#moduleMap .map-cell');
      if (mapBtn) {
        var mod = mapBtn.getAttribute('data-module');
        setFilter('module', state.filters.module === mod ? 'all' : mod);
        return;
      }

      var groupHead = e.target.closest('.group-head');
      if (groupHead) {
        var group = groupHead.closest('.group');
        var modId = groupHead.getAttribute('data-module');
        var collapsed = group.classList.toggle('collapsed');
        groupHead.setAttribute('aria-expanded', String(!collapsed));
        if (collapsed) state.collapsed.add(modId); else state.collapsed.delete(modId);
        return;
      }

      var evidenceBtn = e.target.closest('.evidence-thumb');
      if (evidenceBtn) {
        openLightbox(evidenceBtn.getAttribute('data-evidence-src'), evidenceBtn.getAttribute('data-evidence-alt'));
        return;
      }

      var row = e.target.closest('.case-row');
      if (row) {
        var id = row.getAttribute('data-case-id');
        var detail = document.getElementById('case-detail-' + id);
        if (!detail) return;
        var isExpanded = row.getAttribute('aria-expanded') === 'true';
        row.setAttribute('aria-expanded', String(!isExpanded));
        detail.hidden = isExpanded;
        state.userToggled.add(id);
        if (isExpanded) state.expanded.delete(id); else state.expanded.add(id);
        return;
      }

      if (e.target === $('#lightbox')) closeLightbox();
    });

    $('#lightboxClose').addEventListener('click', closeLightbox);

    /* 证据图缺失时给出可读占位，不显示浏览器破图 */
    $('#caseGroups').addEventListener('error', function (e) {
      var img = e.target;
      if (!img || img.tagName !== 'IMG') return;
      var btn = img.closest('.evidence-thumb');
      if (!btn) return;
      btn.classList.add('is-broken');
      btn.disabled = true;
      img.remove();
      var note = document.createElement('span');
      note.className = 'evidence-broken';
      note.textContent = '截图不可用';
      btn.appendChild(note);
    }, true);

    document.addEventListener('keydown', function (e) {
      if (!$('#lightbox').hidden) {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeLightbox();
          return;
        }
        if (e.key === 'Tab') {
          e.preventDefault();
          $('#lightboxClose').focus();
          return;
        }
      }
      if (e.key === 'Escape') {
        var filters = $('#filters');
        if (filters.classList.contains('open')) {
          filters.classList.remove('open');
          $('#filterToggle').setAttribute('aria-expanded', 'false');
        }
      }
    });

    $('#searchInput').addEventListener('input', function (e) {
      var value = e.target.value;
      if (state.searchTimer) clearTimeout(state.searchTimer);
      state.searchTimer = setTimeout(function () {
        state.searchTimer = null;
        setFilter('q', value);
      }, 140);
    });
    $('#searchInput').addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && e.target.value) {
        e.target.value = '';
        setFilter('q', '');
      }
    });
    $('#filterModule').addEventListener('change', function (e) { setFilter('module', e.target.value); });
    $('#filterPriority').addEventListener('change', function (e) { setFilter('priority', e.target.value); });
    $('#filterStatus').addEventListener('change', function (e) { setFilter('status', e.target.value); });
    $('#filterType').addEventListener('change', function (e) { setFilter('type', e.target.value); });
    $('#clearFilters').addEventListener('click', resetFilters);
    $('#emptyClear').addEventListener('click', resetFilters);
    $('#filterToggle').addEventListener('click', function () {
      var filters = $('#filters');
      var open = filters.classList.toggle('open');
      $('#filterToggle').setAttribute('aria-expanded', String(open));
    });
    $('#retryLoad').addEventListener('click', function () { window.location.reload(); });
  }

  function renderGroupsKeepingFocus(visible) {
    var focus = captureFocus();
    renderGroups(visible);
    restoreFocus(focus);
  }

  function showFatal() {
    $('#dashboard').hidden = true;
    $('#dataNotice').hidden = true;
    $('#fatalError').hidden = false;
    $('#retryLoad').focus();
  }

  /* ------------------------------------------------------------ 启动 */
  async function init() {
    bindEvents();
    try {
      await loadData();
    } catch (err) {
      showFatal();
      return;
    }
    state.models = getModels();
    populateModuleFilter();
    renderAll();
    schedulePoll();
  }

  init();
})();
