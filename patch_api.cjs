const fs = require('fs');

function patchFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf-8');
  content = content.replace(
    "const response = await fetch(apiUrl, { headers });",
    `let response = await fetch(apiUrl, { headers });
      
      // 429 Too Many Requests の場合は 1秒待機してもう1回だけリトライする
      if (!response.ok && response.status === 429) {
        console.warn('⚠️ 429 Rate Limit Exceeded. Waiting for 1000ms...');
        await new Promise(resolve => setTimeout(resolve, 1050));
        response = await fetch(apiUrl, { headers });
      }
      
      // ループの次のイテレーションに備えて、連続でリクエストしないように1000ms待機
      if (i > 0) {
        await new Promise(resolve => setTimeout(resolve, 1050));
      }`
  );
  fs.writeFileSync(filepath, content);
}

patchFile('api/rakuten/search.ts');
patchFile('server.ts');
