const fs = require('fs');
let code = fs.readFileSync('src/data/fallbackItems.ts', 'utf-8');

const targetStr = `    if (item.targetTypes.includes(typeCode)) {
      score += 1000; // 基本スコア
      if (item.targetTypes.length === 1) score += 200; // 1タイプ専用ならボーナス
      if (item.targetTypes.length === 2) score += 100;
    }`;

const replaceStr = `    if (item.targetTypes.includes(typeCode)) {
      score += 1000; // 基本スコア
      if (item.targetTypes.length === 1) score += 200; // 1タイプ専用ならボーナス
      if (item.targetTypes.length === 2) score += 100;
    } else {
      const isJapanese = typeCode.endsWith('J');
      const isWestern = typeCode.endsWith('W');
      const itemIsJapanese = item.targetTypes.some(t => t.endsWith('J'));
      const itemIsWestern = item.targetTypes.some(t => t.endsWith('W'));
      if ((isJapanese && itemIsJapanese) || (isWestern && itemIsWestern)) {
        score += 500;
      } else {
        score -= 500;
      }
    }`;

code = code.replace(targetStr, replaceStr);
fs.writeFileSync('src/data/fallbackItems.ts', code);
