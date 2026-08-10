const fs = require('fs');
let code = fs.readFileSync('src/data/snackTypes.ts', 'utf-8');

// calculateSnackType の japaneseScore 判定を修正
code = code.replace(
  "const j = japaneseScore > 50 ? 'W' : 'J'; // 50超ならWestern(W), 以下ならJapanese(J)",
  "const j = japaneseScore >= 50 ? 'W' : 'J'; // 50以上ならWestern(W), 未満ならJapanese(J)"
);

// YHCJ のキーワード（冷やし塩せんべいなど）でエラーが出がちなので修正
code = code.replace(
  "recommendedKeywords: ['冷やし塩せんべい', 'フリーズドライ おつまみ', '塩もなか', '冷製 おつまみ 和', 'ひんやり おつまみ']",
  "recommendedKeywords: ['塩もなか', 'おつまみ スナック', '和菓子 塩', '冷製 おつまみ', 'ひんやり スナック']"
);

fs.writeFileSync('src/data/snackTypes.ts', code);
