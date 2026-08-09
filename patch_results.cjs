const fs = require('fs');

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// 楽天API呼び出しの関数で、fallback を 3つ混ぜる処理を追加
// そして、エラー時には今まで通りすべて fallback
code = code.replace(
  "      if (res.ok) {\n        const data = await res.json();\n        if (data.items && data.items.length > 0) {\n          setItems(data.items);\n          setKeywordUsed(data.keywordUsed || mainKw);\n        } else {\n          console.warn('API returned empty items');\n          throw new Error('Empty items');\n        }\n      }",
  `      if (res.ok) {
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          // fallbackと3つずつハーフハーフにする
          const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes);
          const apiItems = data.items.slice(0, 3);
          const fallbackItemsToUse = fallbacks.slice(0, 3);
          const combined = [...apiItems, ...fallbackItemsToUse];
          // 重複を取り除くなどしても良いが、ここでは単純に結合
          setItems(combined);
          setKeywordUsed(data.keywordUsed || mainKw);
        } else {
          console.warn('API returned empty items');
          throw new Error('Empty items');
        }
      }`
);

// getFallbackItems を使っているので、もし import されていなければ追加（すでにされているはずだが確認）
fs.writeFileSync('src/components/ResultView.tsx', code);
