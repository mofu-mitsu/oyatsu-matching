const fs = require('fs');

// Patch Vercel API
let vercelApi = fs.readFileSync('api/rakuten/search.ts', 'utf-8');
vercelApi = vercelApi.replace(
  "const headers: any = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };",
  "const headers: any = { \n        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',\n        'Referer': req.headers.referer || 'https://oyatsu-matching.vercel.app/'\n      };"
);
fs.writeFileSync('api/rakuten/search.ts', vercelApi);

// Patch server.ts API
let serverApi = fs.readFileSync('server.ts', 'utf-8');
serverApi = serverApi.replace(
  "const headers: any = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };",
  "const headers: any = { \n        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',\n        'Referer': req.headers.referer || 'https://oyatsu-matching.vercel.app/'\n      };"
);
fs.writeFileSync('server.ts', serverApi);
