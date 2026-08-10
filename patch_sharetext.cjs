const fs = require('fs');

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const shareTextFunc = `
const getShareText = (typeCode: string, characterName: string) => {
  const url = \`https://oyatsu-matching.vercel.app/\${typeCode}.html\`;
  switch(typeCode) {
    case 'YTCJ': return \`【激レア】診断した人0.6%しかいないらしい😳\\nおやつ診断で『\${characterName}』だった🥢\\n塩味・やわらか・冷たい・和、全部揃えて胡麻豆腐に到達。\\n他に何持ってきていいか分からないキャラです。\\n\${url}\\n#おやつマッチング #おやつ16タイプ\`;
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

code = code.replace("export const ResultView", shareTextFunc + "\nexport const ResultView");

fs.writeFileSync('src/components/ResultView.tsx', code);
