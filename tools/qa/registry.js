'use strict';
/**
 * 检查注册表：把 tools/qa/checks/* 的 automationKey 汇总，并提供精确/归一化解析。
 * catalog 的 automationKey 与注册表不一致时，通过 aliases 或重新对齐补齐（不改 catalog）。
 */
const path = require('path');

const MODULES = [
  ['boot', '启动与资源'],
  ['scene', '3D 场景与确定性'],
  ['story', '叙事与章节'],
  ['player', '播放器与音频'],
  ['classroom', '课堂模式'],
  ['explore', '探索与点认'],
  ['responsive', '响应式与视觉'],
  ['a11y', '无障碍'],
  ['perf', '性能与稳定性'],
  ['release', '发布与文档'],
];

const MODULE_FILES = ['boot', 'scene', 'story', 'player', 'classroom', 'explore', 'responsive', 'a11y', 'perf', 'release', 'extra'];

function norm(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function build() {
  const checks = [];
  for (const mod of MODULE_FILES) {
    let arr;
    try { arr = require(path.join(__dirname, 'checks', mod + '.js')); } catch (e) {
      throw new Error(`加载检查模块 ${mod} 失败：${e.stack || e}`);
    }
    for (const c of arr) {
      if (!c.key || typeof c.run !== 'function') throw new Error(`检查模块 ${mod} 存在非法条目：${JSON.stringify(c.key)}`);
      checks.push({ ...c, group: c.group || mod });
    }
  }
  const exact = new Map();
  const normalized = new Map();
  for (const c of checks) {
    exact.set(c.key, c);
    normalized.set(norm(c.key), c);
    for (const a of c.aliases || []) {
      if (!exact.has(a)) exact.set(a, c);
      if (!normalized.has(norm(a))) normalized.set(norm(a), c);
    }
  }
  function resolve(key) {
    if (!key) return null;
    if (exact.has(key)) return exact.get(key);
    const n = norm(key);
    if (normalized.has(n)) return normalized.get(n);
    // 兼容 catalog 里常见的模块前缀简写，如 className -> class.name？保持保守，不做模糊猜测。
    return null;
  }
  return { checks, resolve, exact, normalized };
}

/** catalog 缺失时的自检用伪 catalog（仅 qa-run 内部使用，不写盘） */
function syntheticCatalog() {
  const { checks } = build();
  const counters = {};
  const cases = checks.map((c) => {
    counters[c.group] = (counters[c.group] || 0) + 1;
    const prefix = c.group.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5);
    return {
      id: `${prefix}-${String(counters[c.group]).padStart(2, '0')}`,
      module: c.group,
      title: c.title,
      summary: c.title,
      goal: '自检',
      expected: '',
      steps: [],
      priority: 'P1',
      type: 'auto',
      automationKey: c.key,
      tags: [],
      since: 'self-test',
    };
  });
  return {
    schemaVersion: 1, project: '一棵树的四季', updatedAt: '', version: '',
    modules: MODULES.map(([id, name]) => ({ id, name })),
    cases,
    __synthetic: true,
  };
}

module.exports = { build, syntheticCatalog, MODULES, norm };
