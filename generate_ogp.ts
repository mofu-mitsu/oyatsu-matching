import fs from 'fs';
import path from 'path';
import { SNACK_TYPES } from './src/data/snackTypes';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

Object.values(SNACK_TYPES).forEach(typeInfo => {
  const html = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>おやつ16タイプ診断結果: ${typeInfo.characterName}</title>
  
  <meta property="og:title" content="おやつ16タイプ診断結果: ${typeInfo.characterName}" />
  <meta property="og:description" content="私の診断結果は「${typeInfo.title}」でした！あなたにぴったりのおやつを見つけよう！" />
  <meta property="og:image" content="https://oyatsu-matching.vercel.app/ogp/${typeInfo.id}.png" />
  <meta property="og:url" content="https://oyatsu-matching.vercel.app/${typeInfo.id}.html" />
  <meta name="twitter:card" content="summary_large_image" />

  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-stone-50 min-h-screen text-stone-800 font-sans pb-24">
  <div class="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
    <!-- 固定ヘッダー: あなたも診断するボタン -->
    <div class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 p-4 text-center">
      <a href="/" class="inline-flex items-center justify-center w-full bg-gradient-to-br from-rose-500 to-pink-600 text-white font-extrabold px-6 py-3.5 rounded-2xl shadow-lg shadow-pink-200 hover:scale-[1.02] active:scale-95 transition-all">
        ✨ 私も診断してみる ✨
      </a>
    </div>

    <div class="p-6">
      <div class="text-center mb-6 mt-2">
        <p class="text-stone-500 font-bold mb-2 text-sm">＼ 友達の診断結果は… ／</p>
        <h1 class="text-3xl font-extrabold text-stone-800 mb-3">${typeInfo.characterName}</h1>
        <p class="text-sm font-extrabold text-rose-600 px-4 py-1.5 bg-rose-50 rounded-full inline-block border border-rose-200">
          ${typeInfo.title}
        </p>
      </div>

      <!-- OGP画像エリア -->
      <div class="mb-8 rounded-3xl overflow-hidden shadow-md border-[6px] border-stone-50 bg-stone-100 aspect-square flex items-center justify-center relative group">
        <img src="/ogp/${typeInfo.id}.png" alt="${typeInfo.characterName}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/600x600/f5f5f4/a8a29e?text=No+Image'" />
      </div>

      <div class="bg-stone-50 rounded-3xl p-6 mb-6 border border-stone-100 shadow-sm">
        <h2 class="text-lg font-extrabold text-stone-700 mb-3 flex items-center gap-2">
          <span>📖</span> どんなタイプ？
        </h2>
        <p class="text-sm leading-relaxed text-stone-600 font-medium">${typeInfo.description}</p>
      </div>
      
      <div class="bg-stone-50 rounded-3xl p-6 mb-8 border border-stone-100 shadow-sm">
        <h2 class="text-lg font-extrabold text-stone-700 mb-3 flex items-center gap-2">
          <span>✨</span> 特徴
        </h2>
        <div class="flex flex-wrap gap-2">
          ${typeInfo.personalityTraits.map(t => `<span class="bg-white border border-stone-200 text-stone-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">${t}</span>`).join('')}
        </div>
      </div>
      
      <div class="text-center">
        <a href="/" class="inline-flex items-center justify-center w-full bg-stone-800 text-white font-extrabold px-6 py-4 rounded-2xl shadow-md hover:bg-stone-700 active:scale-95 transition-all">
          自分のおやつタイプを診断する！ 🍪
        </a>
      </div>
    </div>
  </div>
</body>
</html>`;
  
  fs.writeFileSync(path.join(publicDir, `${typeInfo.id}.html`), html);
  console.log(`Generated ${typeInfo.id}.html`);
});
