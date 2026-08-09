const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const target = `      const res = await fetch(\`/api/rakuten/search?\${params.toString()}\`);
      if (res.ok) {
        const data = await res.json();
        setItems(data.items || []);
        setKeywordUsed(data.keywordUsed || mainKw);
      } else {`;

const replace = `      const res = await fetch(\`/api/rakuten/search?\${params.toString()}\`);
      if (res.ok) {
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setItems(data.items);
          setKeywordUsed(data.keywordUsed || mainKw);
        } else {
          console.warn('API returned empty items');
          throw new Error('Empty items');
        }
      } else {`;

if (code.includes(target)) {
  code = code.replace(target, replace);
  fs.writeFileSync('src/components/ResultView.tsx', code);
}
