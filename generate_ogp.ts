import fs from 'fs';
import path from 'path';
import { SNACK_TYPES } from './src/data/snackTypes';
import { getFallbackItems } from './src/data/fallbackItems';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

Object.values(SNACK_TYPES).forEach(typeInfo => {
  const fallbacks = getFallbackItems(typeInfo.id, 0, 99999, [], []);
  const recommendedItem = fallbacks.length > 0 ? fallbacks[Math.floor(Math.random() * fallbacks.length)] : null;

  const isS = typeInfo.id.startsWith('S');
  const isT = typeInfo.id.charAt(1) === 'T';
  const isF = typeInfo.id.charAt(2) === 'F';
  const isJ = typeInfo.id.charAt(3) === 'J';
  
  const sweetness = isS ? 80 : 20;
  const tenderness = isT ? 80 : 20;
  const freshness = isF ? 20 : 80;
  const japaneseness = isJ ? 80 : 20;

  const getBestPairName = (bestId: string) => {
    return SNACK_TYPES[bestId]?.characterName || '不明';
  };

  let recommendedHtml = '';
  if (recommendedItem) {
    recommendedHtml = `
      <div class="bg-stone-800 text-white rounded-3xl p-5 mb-8 shadow-md relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-6xl opacity-10">🎁</div>
        <h2 class="text-sm font-black mb-3 flex items-center gap-2 relative z-10 text-yellow-300">
          <span>✨</span> リアル神おやつ召喚
        </h2>
        <p class="text-[10px] font-bold text-stone-300 mb-4 leading-relaxed relative z-10">
          ちなみにこのタイプには、こういう『リアル神おやつ』が召喚されるよ！
        </p>
        
        <a href="${recommendedItem.itemUrl}" target="_blank" rel="noopener noreferrer" class="block bg-white text-stone-800 rounded-2xl p-3 hover:scale-[1.02] transition-transform relative z-10">
          <div class="flex gap-3 items-center">
            <img src="${recommendedItem.imageUrl}" alt="おすすめおやつ" class="w-14 h-14 object-cover rounded-xl shadow-sm border border-stone-100 flex-shrink-0" onerror="this.src='https://placehold.co/100x100/f5f5f4/a8a29e?text=No+Image'" />
            <div class="flex-1 min-w-0">
              <p class="text-[11px] font-bold truncate leading-tight">${recommendedItem.itemName}</p>
              <p class="text-[9px] text-stone-500 mt-1 truncate">${recommendedItem.shopName}</p>
              <p class="text-xs font-black text-rose-600 mt-1">¥${recommendedItem.itemPrice.toLocaleString()}</p>
            </div>
          </div>
        </a>
      </div>
    `;
  }

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
  <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Zen Maru Gothic', sans-serif; }
  </style>
</head>
<body class="bg-[#faf9f7] min-h-screen text-stone-800 pb-24">
  <div class="max-w-md mx-auto bg-white min-h-screen shadow-xl relative pb-12 border-x border-stone-100">
    <!-- 固定ヘッダー -->
    <div class="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-pink-100 shadow-sm transition-all">
      <div class="px-4 py-3 flex flex-col items-center justify-between gap-3">
        <!-- ロゴ -->
        <a href="/" class="flex items-center gap-2 cursor-pointer group select-none hover:opacity-80 transition-opacity w-full">
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 flex items-center justify-center text-white shadow-md shadow-pink-200 transform group-hover:scale-105 transition-transform shrink-0">
            <span class="text-xl">🍪</span>
          </div>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-extrabold text-lg bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                おやつマッチング
              </span>
              <span class="bg-pink-100 text-pink-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-pink-200">
                16タイプ診断
              </span>
            </div>
            <p class="text-[10px] text-stone-500 font-medium mt-0.5 leading-tight">
              あなたにぴったりのおやつを召喚・お迎えできるスイーツ診断
            </p>
          </div>
        </a>
      </div>
    </div>

    <div class="p-5">
      <div class="text-center mb-6 mt-4">
        <p class="text-stone-500 font-bold mb-2 text-xs">＼ 友達の診断結果は… ／</p>
        <h1 class="text-2xl font-black text-stone-800 mb-3">${typeInfo.characterName}</h1>
        <p class="text-xs font-extrabold text-rose-600 px-4 py-1.5 bg-rose-50 rounded-full inline-block border border-rose-200 shadow-sm">
          ${typeInfo.title}
        </p>
      </div>

      <!-- OGP画像エリア (比率 1200:630) -->
      <div class="mb-8 rounded-3xl overflow-hidden shadow-md border-[4px] border-stone-50 bg-stone-100 aspect-[1200/630] flex items-center justify-center relative group">
        <img src="/ogp/${typeInfo.id}.png" alt="${typeInfo.characterName}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.src='https://placehold.co/1200x630/f5f5f4/a8a29e?text=No+Image'" />
      </div>

      <!-- プロフィール -->
      <div class="bg-stone-50 rounded-3xl p-5 mb-6 border border-stone-100 shadow-sm relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-6xl opacity-10">📖</div>
        <h2 class="text-sm font-black text-stone-700 mb-3 flex items-center gap-2 relative z-10">
          <span class="text-rose-500">◆</span> どんなタイプ？
        </h2>
        <p class="text-xs leading-loose text-stone-600 font-bold relative z-10">${typeInfo.description}</p>
        
        <div class="mt-4 pt-4 border-t border-stone-200">
          <p class="text-[10px] font-black text-stone-500 mb-2">特徴</p>
          <div class="flex flex-wrap gap-1.5">
            ${typeInfo.personalityTraits.map(t => `<span class="bg-white border border-stone-200 text-stone-700 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-sm">${t}</span>`).join('')}
          </div>
        </div>
      </div>
      
      <!-- おやつパラメータ -->
      <div class="bg-stone-50 rounded-3xl p-5 mb-6 border border-stone-100 shadow-sm relative overflow-hidden">
        <div class="absolute -right-4 -top-4 text-6xl opacity-10">📊</div>
        <h2 class="text-sm font-black text-stone-700 mb-4 flex items-center gap-2 relative z-10">
          <span class="text-amber-500">◆</span> おやつパラメータ
        </h2>
        <div class="space-y-4 relative z-10">
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>しょっぱい派</span>
              <span>甘い派</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-pink-400 rounded-full" style="width: ${sweetness}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>かため派</span>
              <span>やわらか派</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-amber-400 rounded-full" style="width: ${tenderness}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>常温ホッとする派</span>
              <span>冷たい派</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-blue-400 rounded-full" style="width: ${freshness}%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[9px] font-bold text-stone-600 px-1 mb-1">
              <span>洋風派</span>
              <span>和風派</span>
            </div>
            <div class="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-400 rounded-full" style="width: ${japaneseness}%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ベスト相性 -->
      <div class="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-4 mb-6 border border-rose-100 shadow-sm flex items-center justify-between">
        <div>
          <p class="text-[10px] font-black text-rose-500 mb-0.5 flex items-center gap-1"><span>❤️</span> ベスト相性</p>
          <p class="text-[13px] font-black text-stone-800">${getBestPairName(typeInfo.bestPairingTypeId)}</p>
        </div>
        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner border border-rose-100 overflow-hidden">
          <img src="/ogp/${typeInfo.bestPairingTypeId}.png" alt="" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/100x100/f5f5f4/a8a29e?text=?'" />
        </div>
      </div>

      <!-- リアル神おやつ召喚 -->
      ${recommendedHtml}

      <div class="text-center mt-8">
        <a href="/" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-extrabold px-6 py-4 rounded-2xl shadow-md hover:scale-[1.02] active:scale-95 transition-all gap-2 text-sm">
          <span>自分のおやつタイプを診断する！</span>
          <span>✨</span>
        </a>
      </div>
    </div>
  </div>
</body>
</html>`;
  
  fs.writeFileSync(path.join(publicDir, `${typeInfo.id}.html`), html);
  console.log(`Generated ${typeInfo.id}.html`);
});
