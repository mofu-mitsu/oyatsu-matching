const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const target1 = `const RAKUTEN_APP_ID = process.env.RAKUTEN_APP_ID || '1055088369869282145';
const RAKUTEN_AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || '3d94ea21.0d257908.3d94ea22.0ed11c6e';`;

const replace1 = `const RAKUTEN_APP_ID = process.env.RAKUTEN_APP_ID || '1055088369869282145';
const RAKUTEN_ACCESS_KEY = process.env.RAKUTEN_ACCESS_KEY || '';
const RAKUTEN_AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || '3d94ea21.0d257908.3d94ea22.0ed11c6e';`;

const target2 = `      const apiUrl = \`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?\${params.toString()}\`;

      const response = await fetch(apiUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });`;

const replace2 = `      const apiUrl = \`https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701?\${params.toString()}\`;

      const headers: any = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };
      if (RAKUTEN_ACCESS_KEY) {
        headers['accessKey'] = RAKUTEN_ACCESS_KEY;
      }

      const response = await fetch(apiUrl, {
        headers,
      });`;

code = code.replace(target1, replace1).replace(target2, replace2);
fs.writeFileSync('server.ts', code);
