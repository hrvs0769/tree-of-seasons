#!/usr/bin/env python3
"""
《一圈年轮》采样版 —— 用真实乐器采样渲染网页《一棵树的四季》的背景音乐。

为什么换方案：前两版是纯正弦波加法合成，音色天花板太低，HR 连续否掉。
macOS 自带 /System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls
（QuickTime GM 音色库，1.9MB，内含钢琴 / 尼龙吉他 / 竖琴 / 弦乐 / 长笛 / 音乐盒等真实采样）。
本脚本纯标准库解析 DLS，把采样按 MIDI 音高重采样后混音，不需要联网、不需要 GPU、不需要第三方包。

编曲参考（来自 github.com/AgriciDaniel/claude-music 的 references/）：
  - genre-recipes.md：Classical / Folk / Cinematic 的乐器搭配与 BPM 区间
  - music-theory.md：F / C 大调偏明亮温暖，适合自然主题
  - song-structures.md：4/4、bars → seconds 换算，段落按小节组织
  - post-processing.md：按响度而非峰值定标，留旁白空间

v3（悠然版）：HR 反馈「有点着急，慢一些，旋律再改改」。
  96 → 72 BPM；钢琴从每半拍一个音改成每拍一个；和声两小节才换一次；
  贝斯每小节只一下；竖琴取消快速滑奏；起音放柔、延音与混响拉长；
  「树的主题」重写成一句 10 秒、只有 5 个长音的田园句子，30 秒里只出现两次，句子间留白。

v4（中国风慢板）：HR 希望有周杰伦《发如雪》那一类的味道。
  只取通用音乐语汇，不复制任何具体旋律 / 编曲 / 录音：
  - A 羽五声调式（A C D E G），避开偏音；和声用空五度 / add9 / sus2，少用西洋三度堆叠
  - 6-4-1-5 一类的华语慢板走向，两小节一换；72 BPM 不变
  - 配器换成 Koto（近似古筝）、Shamisen（三弦）、Shakuhachi（近似洞箫）、
    钢琴分解和弦、弦乐铺底、拨弦轻点、零星铃音
  - 主题用长音 + 句尾拖拍 + 五声前倚音（模拟滑音 / 轮指），句子之间大幅留白
  - 风格与调式属公共音乐语汇，不受版权保护；本曲旋律为原创，未引用任何现有作品

用法：
  python3 tools/make-bgm-sampled.py --duration 30  --out /tmp/tree-bgm-sample.wav   # 试听
  python3 tools/make-bgm-sampled.py --duration 260 --out /tmp/tree-bgm-full.wav     # 全长

许可说明：音色库是 macOS 系统自带文件，只在渲染时读取，不随项目分发；
输出的是原创编曲的音频，不含任何第三方录音素材。
"""
import argparse
import math
import struct
import wave
from array import array

DLS = '/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls'
SR = 44100
BPM = 72                              # v3 放慢：96 → 72，1 小节 3.333 秒，260 秒正好 78 小节

# GM program -> (名字, 增益, 自然衰减, 释放秒, 起音秒)
# v3 把起音放柔、延音拉长、释放变慢，让句子能「呼吸」而不是一颗颗蹦出来
TIMBRE = {
    0:  ('Piano',       0.60, 0.85, 0.55, 0.014),
    24: ('Nylon Guitar',0.44, 1.50, 0.45, 0.012),
    32: ('Acoustic Bass',0.52, 0.80, 0.40, 0.016),
    46: ('Harp',        0.40, 1.80, 0.60, 0.008),
    48: ('Strings',     0.26, 0.05, 0.85, 0.550),
    73: ('Flute',       0.36, 0.04, 0.55, 0.220),
    10: ('Music Box',   0.34, 1.60, 0.55, 0.008),
    9:  ('Glockenspiel',0.28, 3.00, 0.40, 0.004),
    # v4 中国风声部（GM program）
    107:('Koto',       0.46, 1.70, 0.50, 0.006),
    106:('Shamisen',   0.36, 2.20, 0.40, 0.005),
    77: ('Shakuhachi', 0.34, 0.05, 0.60, 0.260),
    75: ('Pan Flute',  0.30, 0.06, 0.50, 0.180),
    45: ('Pizzicato',  0.34, 1.60, 0.30, 0.005),
    112:('Tinkle Bell',0.22, 2.60, 0.50, 0.004),
}


def chunks(buf, s, e):
    i = s
    while i + 8 <= e:
        cid = buf[i:i + 4]
        sz = struct.unpack_from('<I', buf, i + 4)[0]
        b = i + 8
        yield cid, sz, b
        i = b + sz + (sz & 1)


class Soundbank:
    """解析 QuickTime 版 DLS：LIST ins / LIST wave 变体（不是标准 RIFF WAVE 池）。"""

    def __init__(self, path=DLS):
        self.d = open(path, 'rb').read()
        d = self.d
        if d[:4] != b'RIFF' or d[8:12] != b'DLS ':
            raise ValueError('不是 DLS 文件: ' + path)
        top = list(chunks(d, 12, len(d)))
        lins = ptbl = wvpl = None
        for cid, sz, b in top:
            if cid == b'LIST':
                t = d[b:b + 4]
                if t == b'lins': lins = (sz, b)
                elif t == b'wvpl': wvpl = (sz, b)
            elif cid == b'ptbl': ptbl = (sz, b)
        _, pb = ptbl
        _, ccues = struct.unpack_from('<II', d, pb)
        self.cues = list(struct.unpack_from('<%dI' % ccues, d, pb + 8))
        self._read_waves(wvpl)
        self._read_instruments(lins)
        self._cache = {}

    def _read_waves(self, wvpl):
        d, wsz, wb = self.d, wvpl[0], wvpl[1]
        self.waves = {}
        # cue 偏移是相对 wvpl 数据区（跳过 4 字节 type）的 LIST chunk 起点
        base = wb + 4
        for idx, off in enumerate(self.cues):
            st = base + off
            if st + 12 > len(d) or d[st:st + 4] != b'LIST' or d[st + 8:st + 12] != b'wave':
                continue
            end = st + 8 + struct.unpack_from('<I', d, st + 4)[0]
            fmt = data = wsmp = None
            for cid, sz, b in chunks(d, st + 12, min(end, len(d))):
                if cid == b'fmt ': fmt = struct.unpack_from('<HHIIHH', d, b)
                elif cid == b'data': data = (sz, b)
                elif cid == b'wsmp': wsmp = b
            if not fmt or not data:
                continue
            unity, loops = 60, []
            if wsmp:
                unity = struct.unpack_from('<H', d, wsmp + 4)[0]
                nl = struct.unpack_from('<I', d, wsmp + 16)[0]
                for j in range(nl):
                    _, _, ls, ll = struct.unpack_from('<IIII', d, wsmp + 20 + j * 16)
                    if ll > 0: loops.append((ls, ll))
            self.waves[idx] = dict(ch=fmt[1], sr=fmt[2], bits=fmt[5],
                                   off=data[1], n=data[0], unity=unity, loops=loops)

    def _read_instruments(self, lins):
        d, lsz, lb = self.d, lins[0], lins[1]
        self.insts = {}
        for cid, sz, b in chunks(d, lb + 4, lb + lsz):
            if cid != b'LIST' or d[b:b + 4] != b'ins ':
                continue
            insh = rgn_list = None
            for c2, s2, b2 in chunks(d, b + 4, b + sz):
                if c2 == b'insh': insh = b2
                elif c2 == b'LIST' and d[b2:b2 + 4] == b'lrgn': rgn_list = (s2, b2)
            if insh is None: continue
            _, bank, prog = struct.unpack_from('<III', d, insh)
            regions = []
            if rgn_list:
                rsz, rb = rgn_list
                for c3, s3, b3 in chunks(d, rb + 4, rb + rsz):
                    if c3 != b'LIST' or d[b3:b3 + 4] != b'rgn ': continue
                    kl = kh = vl = vh = None
                    cue = unity = fine = att = None
                    loops = []
                    for c4, s4, b4 in chunks(d, b3 + 4, b3 + s3):
                        if c4 == b'rgnh':
                            kl, kh, vl, vh = struct.unpack_from('<HHHH', d, b4)
                        elif c4 == b'wlnk':
                            cue = struct.unpack_from('<I', d, b4 + 8)[0]
                        elif c4 == b'wsmp':
                            unity = struct.unpack_from('<H', d, b4 + 4)[0]
                            fine = struct.unpack_from('<h', d, b4 + 6)[0]
                            # QuickTime 版把 lAttenuation 写成保留值，不能当真实衰减用
                            att = 0
                            nl = struct.unpack_from('<I', d, b4 + 16)[0]
                            for j in range(nl):
                                _, _, ls, ll = struct.unpack_from('<IIII', d, b4 + 20 + j * 16)
                                if ll > 0: loops.append((ls, ll))
                    if cue is not None:
                        regions.append(dict(key=(kl or 0, kh if kh is not None else 127),
                                            vel=(vl or 0, vh if vh is not None else 127),
                                            cue=cue, unity=unity, fine=fine or 0,
                                            att=att or 0, loops=loops))
            self.insts.setdefault((bank, prog), []).extend(regions)

    def samples(self, cue):
        """把 8/16bit PCM 解码成 float 数组并缓存。"""
        if cue in self._cache: return self._cache[cue]
        w = self.waves.get(cue)
        if not w: return None
        n, bits, ch = w['n'], w['bits'], w['ch']
        if bits == 8:
            raw = self.d[w['off']:w['off'] + n]
            a = array('f', ((v - 128) / 128.0 for v in raw))
        elif bits == 16:
            cnt = n // 2
            a = array('f', (v / 32768.0 for v in struct.unpack_from('<%dh' % cnt, self.d, w['off'])))
        else:
            return None
        if ch == 2:  # 交错立体声只取左声道
            a = a[::2]
        self._cache[cue] = (a, w)
        return self._cache[cue]

    def region(self, prog, midi, vel):
        best = None
        for r in self.insts.get((0, prog), []):
            if r['key'][0] <= midi <= r['key'][1] and r['vel'][0] <= vel <= r['vel'][1]:
                if self.waves.get(r['cue']): return r
                best = best or r
        return best


class Mixer:
    def __init__(self, duration, bank):
        self.n = int(SR * duration)
        self.L = array('f', [0.0]) * self.n
        self.R = array('f', [0.0]) * self.n
        self.bank = bank
        self.notes = 0

    def note(self, prog, midi, t0, dur, vel=90, pan=0.0, gain=1.0):
        r = self.bank.region(prog, midi, vel)
        if not r: return
        got = self.bank.samples(r['cue'])
        if not got: return
        self.notes += 1
        src, w = got
        if len(src) < 8: return
        name, g, decay, rel, atk = TIMBRE[prog]
        unity = r['unity'] if r['unity'] is not None else w['unity']
        fine = r['fine'] / 1200.0
        step = (w['sr'] / SR) * (2.0 ** ((midi - unity) / 12.0 + fine))
        loops = r['loops'] or w['loops']
        loop_s, loop_e = 0, 0
        if loops:
            ls, ll = loops[0]
            loop_s, loop_e = ls, ls + ll
            if loop_e > len(src): loop_e = len(src)
        amp = g * gain * (vel / 100.0)
        # DLS 的 lAttenuation 是 1/65536 dB
        if r['att']:
            amp *= 10 ** ((r['att'] / 65536.0) / 20.0)
        pl, pr = math.sqrt((1 - pan) / 2), math.sqrt((1 + pan) / 2)
        start = max(0, int(t0 * SR))
        total = min(self.n - start, int((dur + rel * 3.2) * SR))
        if total <= 0: return
        L, R = self.L, self.R
        pos, srcn = 0.0, len(src)
        a = 1.0 / max(atk * SR, 1.0)
        dcy = decay
        inv_rel = 1.0 / max(rel * SR, 1.0)
        for i in range(total):
            if loop_e > loop_s and pos >= loop_e:
                pos = loop_s + (pos - loop_e) % (loop_e - loop_s)
            if pos >= srcn - 1: break
            j = int(pos)
            frac = pos - j
            v = src[j] + (src[j + 1] - src[j]) * frac
            t = i / SR
            env = min(1.0, i * a) * math.exp(-t * dcy)
            if t > dur: env *= math.exp(-(t - dur) * inv_rel * 4.0)
            val = v * env * amp
            k = start + i
            L[k] += val * pl
            R[k] += val * pr
            pos += step

    def reverb(self, wet=0.20):
        taps = [(0.0211, .32), (0.0299, .25), (0.0383, .19), (0.0517, .13), (0.0713, .08)]
        for ch in (self.L, self.R):
            dry = array('f', ch)
            for dt, g in taps:
                k = int(dt * SR)
                for i in range(k, self.n):
                    ch[i] += dry[i - k] * g * wet
            k2 = int(0.137 * SR)
            snap = array('f', ch)
            for i in range(k2, self.n):
                ch[i] += snap[i - k2] * 0.10 * wet

    def finish(self, path, target_db=-20.0, fade_in=0.5, fade_out=1.6):
        n = self.n
        total = 0.0
        for i in range(n):
            t = i / SR
            f = min(1.0, t / fade_in)
            if t > (n / SR - fade_out):
                f *= max(0.0, (n / SR - t) / fade_out)
            l, r = self.L[i] * f, self.R[i] * f
            l, r = math.tanh(l * 1.4), math.tanh(r * 1.4)
            self.L[i], self.R[i] = l, r
            total += l * l + r * r
        rms = math.sqrt(total / (2 * n)) or 1e-9
        gain = (10 ** (target_db / 20.0)) / rms
        peak = max(max(abs(v) for v in self.L), max(abs(v) for v in self.R))
        lim = 10 ** (-1.5 / 20.0)
        if peak * gain > lim: gain = lim / peak
        w = wave.open(path, 'wb')
        w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
        out = array('h')
        for i in range(n):
            out.append(int(max(-1, min(1, self.L[i] * gain)) * 32767))
            out.append(int(max(-1, min(1, self.R[i] * gain)) * 32767))
        w.writeframes(out.tobytes())
        w.close()
        return 20 * math.log10(rms * gain), 20 * math.log10(min(peak * gain, lim))


# v4：A 羽五声调式（A C D E G）。和弦尽量用五声内音 + 空五度 / add9 / sus2，
# 避开西洋大小调里那种明确的三度导向，才有「中国风慢板」的清冷含蓄。
# notes = 中音区和弦音，arp = 高音区五声（Koto 轮指用），root = 低音。
CHORDS = [
    dict(root=45, notes=[57, 60, 64, 67], arp=[69, 72, 76, 79, 81], name='Am7'),
    dict(root=41, notes=[53, 57, 60, 67], arp=[69, 72, 74, 79, 81], name='Fadd9'),
    dict(root=48, notes=[60, 62, 67, 72], arp=[67, 72, 76, 79, 84], name='Csus2'),
    dict(root=43, notes=[55, 57, 62, 67], arp=[67, 69, 74, 79, 81], name='Gsus2'),
]
PENTA = [69, 72, 74, 76, 79, 81, 84, 86, 88]

# 「树的主题」v4：五声羽调、长音、句尾拖拍、句中拔高一次再缓缓落回。
# 每个长音前面会由 Koto 补一个上方五声前倚音，模拟滑音 / 轮指的口吻。
# 这是原创旋律，与任何现有作品无关。
THEME = {
    'A': [(0.00, 69, 1.30), (1.40, 72, 1.30), (2.90, 76, 2.40),
          (5.60, 81, 1.50), (7.30, 79, 1.20), (8.60, 76, 2.00)],
    'B': [(0.00, 76, 1.40), (1.50, 74, 1.30), (2.90, 72, 2.40),
          (5.60, 69, 1.60), (7.40, 72, 2.40)],
}

def upper_penta(n):
    for x in PENTA:
        if x > n: return x
    return n + 2


def compose(duration, bank):
    m = Mixer(duration, bank)
    BEAT, BAR = 60.0 / BPM, 240.0 / BPM
    bars = int(duration / BAR)
    seq = [0, 1, 2, 3, 0]        # 6-4-1-5 一类的华语慢板走向，两小节一换
    rnd_state = [20261105]

    def rnd():
        s = rnd_state[0]
        s = (s + 0x6D2B79F5) & 0xFFFFFFFF
        rnd_state[0] = s
        x = ((s ^ (s >> 15)) * (s | 1)) & 0xFFFFFFFF
        x ^= (x + (((x ^ (x >> 7)) * (x | 61)) & 0xFFFFFFFF)) & 0xFFFFFFFF
        return ((x ^ (x >> 14)) & 0xFFFFFFFF) / 4294967296.0

    for bar in range(bars):
        t = bar * BAR
        if t > duration - 1.0: break
        c = CHORDS[seq[(bar // 2) % len(seq)]]
        fade = min(1.0, (duration - t) / 6.0)
        # 弦乐：每两小节一层，很轻，只负责空气和温度
        if bar % 2 == 0:
            for k, note in enumerate(c['notes'][:3]):
                m.note(48, note, t, BAR * 1.9, 34, pan=(k - 1) * 0.40, gain=0.62 * fade)
        # 拨弦弦乐：第 1 拍轻点一下，代替西洋贝斯
        m.note(45, c['root'] + 12, t, 0.9, 50, 0.0, 0.52 * fade)
        # 钢琴：左手一个低音 + 右手两个和弦音，每小节只三下，留白很多
        m.note(0, c['notes'][0] - 12, t, 1.6, 52, -0.18, 0.60 * fade)
        for beat, idx in ((1, 1), (3, 2)):
            if t + beat * BEAT > duration - 0.3: continue
            m.note(0, c['notes'][idx], t + beat * BEAT + (rnd() - .5) * .018, 1.3,
                   54 + int(rnd() * 8), 0.20, 0.64 * fade)
        # Koto 轮指：三个五声音落在拍间，像珠落玉盘但不赶
        for k in range(3):
            tt = t + BEAT * (0.5 + k * 1.2)
            if tt > duration - 0.3: break
            note = c['arp'][(bar + k) % len(c['arp'])]
            m.note(107, note, tt, 0.9, 40 + int(rnd() * 6), 0.30, 0.60 * fade)
        # Shamisen：每两小节一次中音拨弦，给一点筋骨
        if bar % 2 == 1:
            m.note(106, c['notes'][1], t + BEAT * 2, 1.1, 40, -0.30, 0.48 * fade)
        # 竖琴：每四小节句尾两个轻音
        if bar % 4 == 3:
            for k, note in enumerate(c['arp'][:2]):
                m.note(46, note + 12, t + BEAT * 2.2 + k * 0.35, 0.8, 34, 0.35, 0.40 * fade)
        # 铃：极稀疏的高音
        if bar % 4 == 2:
            m.note(112, c['arp'][-1], t + BEAT * 2.5, 1.0, 32, 0.30, 0.40 * fade)

    # 主旋律：Shakuhachi（近似洞箫）演奏；每个长音前由 Koto 补一个上方五声前倚音，
    # 模拟中国风的滑音 / 轮指口吻，而不是把音直接摆上去
    for start, key, g in ((BAR, 'A', 0.92), (BAR * 5, 'B', 0.84)):
        if start + 11 > duration: continue
        for dt, note, dur in THEME[key]:
            if start + dt - 0.14 > 0:
                m.note(107, upper_penta(note), start + dt - 0.14, 0.36, 30, -0.10, 0.34)
            m.note(77, note, start + dt + (rnd() - .5) * 0.03, dur, 54, -0.08, g)

    m.reverb(0.30)               # 中国风慢板要空一点
    return m


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--duration', type=float, default=30.0)
    ap.add_argument('--out', default='/tmp/tree-bgm-sampled.wav')
    a = ap.parse_args()
    bank = Soundbank()
    print('音色库: %d 个波形, %d 组乐器' % (len(bank.waves), len(bank.insts)))
    for p in TIMBRE:
        rs = bank.insts.get((0, p), [])
        ok = sum(1 for r in rs if r['cue'] in bank.waves)
        print('  %-14s program %-3d 可用区域 %d/%d' % (TIMBRE[p][0], p, ok, len(rs)))
    m = compose(a.duration, bank)
    rms, peak = m.finish(a.out, fade_out=min(2.4, a.duration * 0.08))
    print('编曲: %d BPM  发声 %d 次（%.1f 次/秒）' % (BPM, m.notes, m.notes / a.duration))
    print('输出 %s  %.1fs  RMS %.1f dBFS  峰值 %.1f dBFS' % (a.out, a.duration, rms, peak))
