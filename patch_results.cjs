const fs = require('fs');

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// fetchの部分の置き換え
const fetchRegex = /const res = await fetch\(`\/api\/rakuten\/search\?\$\{params\.toString\(\)\}`\);[\s\S]*?} catch \(err\) {/m;
const newFetchLogic = `const res = await fetch(\`/api/rakuten/search?\${params.toString()}\`);
      let combined = [];
      let usedKw = mainKw;
      if (res.ok) {
        const data = await res.json();
        const apiItems = data.items || [];
        combined = [...apiItems];
        usedKw = data.keywordUsed || mainKw;
      } else {
        console.warn('API returned error');
      }

      if (combined.length < 6) {
        const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes);
        const seenUrls = new Set(combined.map((item: any) => item.itemUrl));
        for (const fb of fallbacks) {
          if (combined.length >= 6) break;
          if (!seenUrls.has(fb.itemUrl)) {
            combined.push(fb);
            seenUrls.add(fb.itemUrl);
          }
        }
      }

      setItems(combined);
      setKeywordUsed(usedKw);
    } catch (err) {`;

code = code.replace(fetchRegex, newFetchLogic);

// catchブロックの中の "(フォールバック)" を消す
code = code.replace(
  "setKeywordUsed(mainKw + \" (フォールバック)\");",
  "setKeywordUsed(mainKw);"
);

// handleSaveImage のウォームアップとシェアテキスト変更
const saveImageRegex = /setIsCapturing\(true\);\s*try {\s*const dataUrl = await toPng\(node, {/m;
const newSaveImageStart = `setIsCapturing(true);
    try {
      // html-to-image の Safari バグ回避 (ウォームアップ)
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1 });
      const dataUrl = await toPng(node, {`;

code = code.replace(saveImageRegex, newSaveImageStart);

// getShareText 関数の追加 (ファイルの先頭近く、importの下あたり)
const shareTextFunc = `
const getShareText = (typeCode: string, characterName: string) => {
  const url = "https://oyatsu-matching.vercel.app/";
  switch(typeCode) {
    case 'YTCJ': return \`【激レア】診断した人0.6%しかいないらしい😳\\nおやつ診断で『\${characterName}』だった🥢\\n塩味・やわらか・冷たい・和、全部揃えて胡麻豆腐に到達。他に何持ってきていいか分からないキャラです。\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
    case 'STFJ': return \`【王道タイプ】おやつ16タイプ診断で、\\n私は『\${characterName}』でした🍡\\nふんわり甘くて和風、定番を大事にするタイプらしい。\\nあなたの定番おやつは何かな？\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
    case 'STFW': return \`おやつ診断したら『\${characterName}』だった🧁\\n洋のスイーツ派、ふわっと背伸びしたい欲もあるタイプ。\\nこのキャラ、なんか王子って名前だけど実は甘えん坊説ある。\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
    case 'YTCW': return \`【ちょいレア】おやつ16タイプ診断、当たった人わずか◯◯%！\\n『\${characterName}』でした🍷\\nしょっぱい・やわらか・冷たい・洋。\\n大人のおつまみ枠に迷い込んだ感じ。\\nあなたは何タイプ？\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
    case 'YHFW': return \`おやつ診断が『\${characterName}』を推してきた🍟\\nしょっぱくて硬くて常温で洋…もう完全にビール案件じゃんｗ\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
    case 'YHCJ': return \`【渋め枠】おやつ診断で『\${characterName}』 🍵\\n塩気・硬め・冷たい・和…おじいちゃん熟成年タイプってこと？\\n\${url}\\n#おやつマッチング #おやつ16タイプ #渋い\`;
    case 'YHCW': return \`冷たいチョコ系おやつの『\${characterName}』でした🐧\\nかため・チョコ・冷たい・洋、って全部ハード路線。\\n自分ハードなキャラだと思わなかったんだけど…ｗ\\n\${url}\\n#おやつマッチング #おやつ16タイプ #MBTIっぽい\`;
    default: return \`私のおやつ性格診断結果は『\${characterName}』でした✨\\nあなたにぴったりのおやつを見つけよう！\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
  }
};
`;

code = code.replace("export function ResultView", shareTextFunc + "\nexport function ResultView");

// navigator.share の text を変更
const shareTextRegex = /text: `私の診断結果は「\$\{snackType\.title\}」でした！\\n\\n#16タイプおやつ診断`,/m;
code = code.replace(shareTextRegex, "text: getShareText(snackType.id, snackType.characterName),");

fs.writeFileSync('src/components/ResultView.tsx', code);
