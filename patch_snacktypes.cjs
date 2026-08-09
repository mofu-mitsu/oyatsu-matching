const fs = require('fs');

let code = fs.readFileSync('src/data/snackTypes.ts', 'utf-8');

// STFW: ほんのり焼き立てバウム -> シフォンケーキ、バウムクーヘン、マドレーヌ -> ケーキ、シュークリーム、エクレア、カステラ、ふんわり 焼き菓子 等
code = code.replace(
  "recommendedKeywords: ['洋菓子 焼き菓子', 'バウムクーヘン', 'シフォンケーキ', 'マドレーヌ']",
  "recommendedKeywords: ['洋菓子 焼き菓子', 'バウムクーヘン', 'シフォンケーキ', 'マドレーヌ', 'カステラ', 'シュークリーム', 'エクレア', 'ケーキ']"
);

// SHFJ: カリッと香ばし黒糖和菓子 -> かりんとう、黒糖あられ、芋かりんとう、奉天 -> おかき、せんべい、あられ、かりんとう、和菓子 堅焼き 等
code = code.replace(
  "recommendedKeywords: ['かりんとう', '黒糖あられ', '芋かりんとう', '奉天']",
  "recommendedKeywords: ['かりんとう', '黒糖あられ', '芋かりんとう', '奉天', '和菓子 おかき', '堅焼きせんべい', '黒豆あられ']"
);

// STCW: とろける極上ひんやりスイーツ
code = code.replace(
  "recommendedKeywords: ['高級プリン', 'プレミアムアイス', '生チョコ', 'レアチーズケーキ']",
  "recommendedKeywords: ['高級プリン', 'プレミアムアイス', '生チョコ', 'レアチーズケーキ', 'ひんやり スイーツ', '冷蔵 洋菓子', 'アイスクリーム']"
);

// STCJ: ひんやり涼やか和生菓子
code = code.replace(
  "recommendedKeywords: ['水ようかん', 'あんみつ', 'くず餅', '抹茶ゼリー']",
  "recommendedKeywords: ['水ようかん', 'あんみつ', 'くず餅', '抹茶ゼリー', 'ひんやり 和菓子', '冷やし スイーツ 和', 'わらび餅']"
);

// YHCJ: 冷やし塩もなか＆冷やし枝豆スナック -> 枝豆スナックでエラーが出がち
code = code.replace(
  "recommendedKeywords: ['冷やし塩せんべい', '枝豆スナック', 'フリーズドライ おつまみ', '塩もなか']",
  "recommendedKeywords: ['冷やし塩せんべい', 'フリーズドライ おつまみ', '塩もなか', '冷製 おつまみ 和', 'ひんやり おつまみ']"
);

fs.writeFileSync('src/data/snackTypes.ts', code);
