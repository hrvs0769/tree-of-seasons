'use strict';
/**
 * QA Runner 内置静态服务器。
 * 根目录 = 项目根，随机端口，支持 .html/.js/.css/.json/.mp3/.wav/.png/.svg 等 MIME，
 * 并实现 Range 请求（BGM 的 HEAD/Range 可访问性验收需要 206）。
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

function safeResolve(root, urlPath) {
  let pathname = urlPath.split('?')[0].split('#')[0];
  try { pathname = decodeURIComponent(pathname); } catch (e) { pathname = urlPath.split('?')[0]; }
  const rel = pathname.replace(/^\/+/, '');
  const abs = path.resolve(root, rel);
  if (abs !== root && !abs.startsWith(root + path.sep)) return null;
  return abs;
}

function createStaticServer(root) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      if (req.url === '/favicon.ico') {
        res.writeHead(204, { 'Cache-Control': 'no-store' });
        res.end();
        return;
      }
      let file = safeResolve(root, req.url || '/');
      if (!file) { res.writeHead(403); res.end('Forbidden'); return; }
      try {
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
          const index = path.join(file, 'index.html');
          if (fs.existsSync(index)) file = index;
          else { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('Not found'); return; }
        }
      } catch (e) {
        res.writeHead(500); res.end('Server error'); return;
      }
      let stat;
      try { stat = fs.statSync(file); } catch (e) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found: ' + req.url);
        return;
      }
      if (!stat.isFile()) { res.writeHead(404); res.end('Not found'); return; }
      const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
      const headers = {
        'Content-Type': type,
        'Cache-Control': 'no-store',
        'Accept-Ranges': 'bytes',
      };
      // Range 支持（音视频验收）
      const range = req.headers.range;
      if (range && /^bytes=\d*-\d*$/.test(range)) {
        const [s, e] = range.replace('bytes=', '').split('-');
        let start = s === '' ? undefined : parseInt(s, 10);
        let end = e === '' ? undefined : parseInt(e, 10);
        if (start === undefined) { // suffix range: bytes=-N
          start = Math.max(0, stat.size - (end || 0));
          end = stat.size - 1;
        } else {
          if (end === undefined || end >= stat.size) end = stat.size - 1;
        }
        if (start > end || start >= stat.size) {
          res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
          res.end();
          return;
        }
        headers['Content-Range'] = `bytes ${start}-${end}/${stat.size}`;
        headers['Content-Length'] = end - start + 1;
        res.writeHead(206, headers);
        if (req.method === 'HEAD') { res.end(); return; }
        fs.createReadStream(file, { start, end }).pipe(res);
        return;
      }
      headers['Content-Length'] = stat.size;
      res.writeHead(200, headers);
      if (req.method === 'HEAD') { res.end(); return; }
      fs.createReadStream(file).pipe(res);
    });
    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port, url: `http://127.0.0.1:${port}` });
    });
  });
}

function closeServer(handle) {
  return new Promise((resolve) => {
    if (!handle || !handle.server) return resolve();
    handle.server.close(() => resolve());
    // 防止 keep-alive 连接拖住退出
    if (handle.server.closeAllConnections) handle.server.closeAllConnections();
  });
}

module.exports = { createStaticServer, closeServer, MIME };
