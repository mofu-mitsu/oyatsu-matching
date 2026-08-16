import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { domToPng } from 'modern-screenshot';
import { QuizAnswers, RakutenItem, SnackTypeInfo } from '../types';
import { SnackCharacterAvatar } from './SnackCharacterAvatar';
import { calculateSnackType, SNACK_TYPES } from '../data/snackTypes';
import { getRandomEyeContactMessage, getRandomJururiMessage } from '../data/randomMessages';
import { MofumofuMascot } from './MofumofuMascot';
import { Sparkles, ExternalLink, RefreshCw, ShoppingBag, Heart, Star, Sliders, Download, Share2 } from 'lucide-react';
import { sendResultToGAS } from '../lib/gas';
import { getFallbackItems } from '../data/fallbackItems';

function dataURItoBlob(dataURI: string) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}

import { playPopSound } from '../lib/sound';

interface ResultViewProps {
  answers: QuizAnswers;
  onReset: () => void;
}

const ParameterBar = ({ leftLabel, rightLabel, value, colorClass }: { leftLabel: string, rightLabel: string, value: number, colorClass: string }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[10px] font-bold text-stone-600 px-1">
        <span className={value <= 50 ? 'text-stone-800' : ''}>{leftLabel} {100 - value}%</span>
        <span className={value > 50 ? 'text-stone-800' : ''}>{rightLabel} {value}%</span>
      </div>
      <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden relative border border-stone-200">
        <div 
          className={`absolute top-0 left-0 h-full ${colorClass} rounded-full transition-all duration-1000 ease-out`} 
          style={{ width: `${value}%` }}
        />
        <div className="absolute top-0 left-1/2 w-px h-full bg-stone-300 z-10" />
      </div>
    </div>
  );
};


const getShareText = (typeCode: string, characterName: string) => {
  const url = `https://oyatsu-matching.vercel.app/${typeCode}.html`;
  const hashtags = `#おやつマッチング #おやつ16タイプ`;

  // 🟦 ごまどうふさん専用：50%の確率で「笹かまぼこ（楽天API不条理）」に分岐！
  if (typeCode === 'YTCJ') {
    const isSasakamaboko = Math.random() < 0.5;
    if (isSasakamaboko) {
      return `✦ 概念不具合 ✦\nおやつ診断スタート ➔ 結果『ごまどうふさん』\n➔ 楽天API取得結果『笹かまぼこ』\nおやつって言いましたよね？？？？？\n${url}\n#おやつマッチング #おやつ16タイプ #なんで`;
    }
    return `✦ 遭遇率0.1% ✦\nおやつ診断で『${characterName}』だった🥢\n塩味・やわらか・冷たい・和、全部揃えて胡麻豆腐に到達。\n他に何持ってきていいか分からないキャラです。\n${url}\n${hashtags}`;
  }

  // 16タイプのテキストマップ（画像と完全連動）
  const textMap: Record<string, string> = {
    // 🌸 Sタイプ（甘味）
    'STFJ': `✦ TYPE: 王道クラシック ✦\nおやつ16タイプ診断で、\n私は『${characterName}』でした🍡\nふんわり甘くて和風、定番を大事にするタイプらしい。\nあなたの定番おやつは何かな？\n${url}\n${hashtags}`,
    'STFW': `✦ TYPE: 甘党スイーツ派 ✦\nおやつ診断したら『${characterName}』だった🧁\n洋のスイーツ派、ふわっと背伸びしたい欲もあるタイプ。\nこのキャラ、なんか王子って名前だけど実は甘えん坊説ある。\n${url}\n${hashtags}`,
    'STCJ': `✦ TYPE: 清涼感特化 ✦\nおやつ診断の結果は『${characterName}』でした🫧\n冷たくて涼やかな和風スイーツ派。\n静かな時間を一人でじっくり楽しみたい時にぴったり！\n${url}\n${hashtags}`,
    'STCW': `✦ TYPE: ごほうび贅沢枠 ✦\n私のおやつタイプは『${characterName}』でした🍮\nとろける洋スイーツで自分を甘やかす天才らしいｗ\nみんなの「ごほうびおやつ」は何？\n${url}\n${hashtags}`,
    'SHFW': `✦ TYPE: アクティブ派 ✦\nおやつ診断したら『${characterName}』だった🍪\nザクザク硬めの洋菓子派！\nノリとテンションで新しい味に挑戦したくなるタイプですｗ\n${url}\n${hashtags}`,
    'SHFJ': `✦ TYPE: 伝統こだわり枠 ✦\nおやつ診断で『${characterName}』が出たよ🍘\n硬めで香ばしい伝統の味！\n譲れないこだわりとブレない軸があるらしいｗ\n${url}\n${hashtags}`,
    'SHCJ': `✦ TYPE: 熟練隠者枠 ✦\nおやつ診断で『${characterName}』でした🍵\n冷たくてかためな渋めの和風枠。\n静かに佇む職人おじいちゃんタイプってこと…？ｗ\n${url}\n${hashtags}`,
    'SHCW': `✦ 遭遇率3.2% ✦\n冷たいチョコ系おやつの『${characterName}』でした🐧\nかため・チョコ・冷たい・洋、って全部ハード路線。\n自分ハードなキャラだと思わなかったんだけど…ｗ\n${url}\n${hashtags}`,

    // 🍺 Yタイプ（塩味）
    'YTFJ': `✦ TYPE: ほっこり師範代 ✦\nおやつ16タイプ診断で『${characterName}』でした🥢\n焦げ目と醤油の香ばしさを愛する和風タイプｗ\n「焦げ目は正義」って語り出すのわかるかもｗ\n${url}\n${hashtags}`,
    'YTFW': `✦ TYPE: シックな大人派 ✦\nおやつ診断したら『${characterName}』だった🍷\n甘すぎない塩系焼き菓子・チーズを嗜む大人枠！\nカフェやワインで上質な時間を過ごすタイプらしいｗ\n${url}\n${hashtags}`,
    'YHFJ': `✦ TYPE: 豪快大将枠 ✦\nおやつ診断で『${characterName}』が出たよ🍘\nバリバリ硬い塩味せんべい！\nストレスを物理で砕く頼れる大将タイプｗ\n${url}\n${hashtags}`,
    'YHFW': `✦ TYPE: 盛り上げムードメーカー ✦\nおやつ診断が『${characterName}』を推してきた🍟\nしょっぱくて硬くて常温で洋…もう完全にパーティー＆ビール案件じゃんｗ\n${url}\n${hashtags}`,
    'YTCW': `✦ 遭遇率1.8% ✦\nおやつ16タイプ診断、当たった人わずか1.8%！\n『${characterName}』でした🍷\nしょっぱい・やわらか・冷たい・洋。\n大人のおつまみ枠に迷い込んだ感じ。あなたは何タイプ？\n${url}\n${hashtags}`,
    'YHCJ': `✦ 遭遇率1.2% ✦\nおやつ診断で『${characterName}』が出たよ🫛\n塩気・硬め・冷たい・和…\n「これは塩分と知恵のチャージだ」と言い張る実用派ですｗ\n${url}\n${hashtags}`,
    'YHCW': `✦ 遭遇率1.5% ✦\nおやつ診断で『${characterName}』が出たんだけどｗ🥩\n冷たくて硬くて辛いハード系おつまみ！\nタフで野性的なキャラらしいｗ\n${url}\n${hashtags}`,
  };

  return textMap[typeCode] || `私のおやつ性格診断結果は『${characterName}』でした✨\nあなたにぴったりのおやつを見つけよう！\n${url}\n${hashtags}`;
};

export const ResultView: React.FC<ResultViewProps> = ({ answers, onReset }) => {
  const [snackType, setSnackType] = useState<SnackTypeInfo | null>(null);
  const [items, setItems] = useState<RakutenItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [keywordUsed, setKeywordUsed] = useState<string>('');
  const hasSentToGAS = React.useRef(false);
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<string | null>(null);

  // 演出用ステート
  const [eyeContactMsg, setEyeContactMsg] = useState<string>('');
  const [jururiMsg, setJururiMsg] = useState<string>('');

  // ボタン文言カスタマイズ
  const [buttonStyle, setButtonStyle] = useState<string>('お迎えする');

  // 条件の再調整用
  const [budget, setBudget] = useState<string>(answers.budget);
  const [customSearchKeyword, setCustomSearchKeyword] = useState<string>('');
  
  const [isPureLSI, setIsPureLSI] = useState<boolean>(false);
  const [alternateType, setAlternateType] = useState<SnackTypeInfo | null>(null);

  


  useEffect(() => {
    // tenderスコアの計算
    const tenderCount = answers.textures.filter(t => ['ふわふわ', 'もっちり', 'とろとろ', 'ほろほろ'].includes(t)).length;
    const hardCount = answers.textures.filter(t => ['サクサク', 'ザクザク', 'カリカリ', 'パリパリ'].includes(t)).length;
    
    let tenderScore = 50;
    if (tenderCount > hardCount) tenderScore = 80;
    if (hardCount > tenderCount) tenderScore = 20;

    // 診断結果の計算
    let resultType = calculateSnackType(
      answers.sweetValue,
      tenderScore,
      answers.freshValue,
      answers.japaneseValue
    );

    // LSI芋虫の特別処理 (YTCJ: ごまどうふ, YHCJ: クール枝豆)
    let pureLSI = false;
    if ((resultType.code === 'YTCJ' || resultType.code === 'YHCJ') && !answers.isQuickMatch) {
      const isTie = answers.sweetValue === 50 || tenderScore === 50 || answers.freshValue === 50 || answers.japaneseValue === 50;
      if (isTie) {
        // 半々の場合は別のタイプに寄せる (S:甘い, W:洋風 などに変更)
        const newSweet = answers.sweetValue === 50 ? 51 : answers.sweetValue; // Y -> S
        const newJapanese = answers.japaneseValue === 50 ? 51 : answers.japaneseValue; // J -> W
        const newTender = tenderScore === 50 ? 51 : tenderScore;
        const newFresh = answers.freshValue === 50 ? 49 : answers.freshValue; // C -> F
        resultType = calculateSnackType(newSweet, newTender, newFresh, newJapanese);
      } else {
        pureLSI = true;
      }
    }
    
    // 半々の要素がある場合、もう1つのタイプ（裏タイプ）を計算
    let altType: SnackTypeInfo | null = null;
    if (answers.japaneseValue === 50) {
       // 和洋が半々
       const altJ = resultType.code.endsWith('J') ? 100 : 0;
       altType = calculateSnackType(answers.sweetValue, tenderScore, answers.freshValue, altJ);
    } else if (answers.sweetValue === 50) {
       // 甘辛が半々
       const altS = resultType.code.startsWith('S') ? 0 : 100;
       altType = calculateSnackType(altS, tenderScore, answers.freshValue, answers.japaneseValue);
    } else if (answers.freshValue === 50) {
       // 温度感が半々
       const altF = resultType.code[2] === 'F' ? 100 : 0;
       altType = calculateSnackType(answers.sweetValue, tenderScore, altF, answers.japaneseValue);
    } else if (tenderScore === 50) {
       // 食感が半々
       const altT = resultType.code[1] === 'T' ? 0 : 100;
       altType = calculateSnackType(answers.sweetValue, altT, answers.freshValue, answers.japaneseValue);
    }
    
    // LSI回避などで同一になった場合は無効化
    if (altType && altType.code === resultType.code) {
      altType = null;
    }

    setIsPureLSI(pureLSI);
    setSnackType(resultType);
    setAlternateType(altType);

    // ランダム演出メッセージのセット
    setEyeContactMsg(getRandomEyeContactMessage());
    setJururiMsg(getRandomJururiMessage());

    // 紙吹雪演出
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#fbbf24', '#34d399', '#60a5fa'],
      });
    } catch (e) {
      console.warn('confetti trigger failed:', e);
    }

    // 楽天API呼び出し
    fetchRakutenItems(
      resultType,
      answers.budget,
      answers.flavors,
      answers.customFlavor || '',
      answers.dislikes,
      answers.customDislike,
      answers.mode,
      answers.mood,
      answers.giftVibe
    );

    // GASに診断結果を送信（初回マウント/診断完了時）
    if (!hasSentToGAS.current) {
      hasSentToGAS.current = true;
      sendResultToGAS({
        mode: answers.mode,
        typeCode: resultType.code,
        typeName: resultType.title,
        answers: answers,
        budget: answers.budget,
        flavors: answers.flavors,
        keywordUsed: resultType.recommendedKeywords[0],
      });
    }
  }, [answers]);

  // 楽天APIデータ取得関数
  const fetchRakutenItems = async (
    typeInfo: SnackTypeInfo,
    selectedBudget: string,
    flavors: string[],
    customFlv: string,
    dislikeList: string[],
    customDis: string,
    mode?: string,
    mood?: string,
    giftVibe?: string
  ) => {
    setLoading(true);
    let mainKw = typeInfo.recommendedKeywords[0] || 'スイーツ';
    let minP = 0;
    let maxP = 0;
    const allDislikes = [...dislikeList];
    if (customDis.trim()) allDislikes.push(customDis.trim());

    try {
      // 検索キーワードの構築（シンプルかつ的確に）
      const randomKwIndex = Math.floor(Math.random() * typeInfo.recommendedKeywords.length);
      const baseTypeKw = typeInfo.recommendedKeywords[randomKwIndex] || typeInfo.recommendedKeywords[0] || 'スイーツ';

      const isSweet = typeInfo.code.startsWith('S');

      // 0. 自由入力カスタムフレーバーがあれば最優先！
      if (customFlv.trim() && !customSearchKeyword.trim()) {
        mainKw = `${customFlv.trim()} ${isSweet ? 'スイーツ' : 'おつまみ'}`;
      } else if (flavors.length > 0 && !customSearchKeyword.trim()) {
        // フレーバー指定がある場合、実在する王道お菓子ワードを生成
        const rawFlv = flavors[0] || '';
        const cleanFlv = rawFlv.replace(/ミント[・/]チョコミント/g, 'チョコミント').replace(/[・/、,()（）]/g, ' ').trim();
        if (isSweet) {
          if (cleanFlv === 'ミント' || cleanFlv === 'チョコミント' || cleanFlv.includes('ミント')) {
            const chocoMintOptions = ['チョコミント スイーツ', 'チョコミント チョコ', 'チョコミント サンド', 'チョコミント クッキー', 'チョコミント ケーキ', 'チョコミント アイス'];
            mainKw = chocoMintOptions[Math.floor(Math.random() * chocoMintOptions.length)];
          } else if (cleanFlv === 'チーズ') {
            const cheeseOptions = ['チーズケーキ', 'チーズ クッキー', '濃厚 チーズ スイーツ'];
            mainKw = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
          } else if (cleanFlv === '抹茶') {
            const matchaOptions = ['抹茶 スイーツ', '抹茶 ケーキ', '抹茶 チョコ', '抹茶 クッキー'];
            mainKw = matchaOptions[Math.floor(Math.random() * matchaOptions.length)];
          } else if (cleanFlv === 'チョコ') {
            const chocoOptions = ['チョコ スイーツ', 'ガトーショコラ', 'チョコレート ギフト', '濃厚 チョコ ケーキ'];
            mainKw = chocoOptions[Math.floor(Math.random() * chocoOptions.length)];
          } else if (cleanFlv === 'いちご') {
            const berryOptions = ['いちご スイーツ', '苺 ケーキ', 'いちご チョコ', 'いちご 焼き菓子'];
            mainKw = berryOptions[Math.floor(Math.random() * berryOptions.length)];
          } else {
            mainKw = `${cleanFlv} スイーツ`;
          }
        } else {
          mainKw = `${cleanFlv} おつまみ`;
        }
      } else if (answers.textures && answers.textures.length > 0 && !customSearchKeyword.trim()) {
        // 食感キーワード（フレーバー指定がない場合のみ補助で付与）
        const textureKwMap: Record<string, string[]> = {
          'サクサク': ['クッキー', 'パイ'],
          'ザクザク': ['クランチ', 'パイ'],
          'カリカリ': ['かりんとう', 'ナッツ'],
          'パリパリ': ['せんべい', 'チップス'],
          'ふわふわ': ['シフォンケーキ', 'バウムクーヘン'],
          'もっちり': ['大福', 'わらび餅'],
          'とろとろ': ['プリン', 'アイス'],
          'ほろほろ': ['フィナンシェ', 'クッキー'],
        };
        const matched = textureKwMap[answers.textures[0]];
        if (matched) {
          mainKw = `${matched[0]} ${baseTypeKw}`;
        } else {
          mainKw = baseTypeKw;
        }
      } else {
        mainKw = baseTypeKw;
      }

      // カスタムキーワード指定（再検索バー）があれば最優先
      if (customSearchKeyword.trim()) {
        mainKw = customSearchKeyword.trim();
      }

      // 予算計算 (上限価格を厳密に設定)
      if (selectedBudget === '500') { minP = 0; maxP = 500; }
      else if (selectedBudget === '1000') { minP = 0; maxP = 1000; }
      else if (selectedBudget === '3000') { minP = 0; maxP = 3000; }
      else if (selectedBudget === '5000') { minP = 0; maxP = 5000; }
      else if (selectedBudget === '10000') { minP = 0; maxP = 10000; }
      else { minP = 0; maxP = 0; }

      const params = new URLSearchParams({
        keyword: mainKw,
        typeCode: typeInfo.id,
      });
      if (minP > 0) params.append('minPrice', String(minP));
      if (maxP > 0) params.append('maxPrice', String(maxP));
      if (customFlv.trim()) params.append('customFlavor', customFlv.trim());
      if (flavors.length > 0) params.append('flavors', flavors.join(','));
      if (allDislikes.length > 0) params.append('dislikes', allDislikes.join(','));
      if (mode) params.append('mode', mode);
      if (mood) params.append('mood', mood);
      if (giftVibe) params.append('giftVibe', giftVibe);

      const res = await fetch(`/api/rakuten/search?${params.toString()}`);
      let apiItems: any[] = [];
      let usedKw = mainKw;
      if (res.ok) {
        const data = await res.json();
        apiItems = data.items || [];
        usedKw = data.keywordUsed || mainKw;
      } else {
        console.warn('API returned error');
      }

      // 1. フォールバックデータも正確な条件で9件ランダム取得
      const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes, 9);

      // 2. APIからの取得結果がある場合
      const combined: any[] = [...apiItems];
      const seenUrls = new Set(apiItems.map((item: any) => item.itemUrl));

      // 3. Fallbackから補填して確実に合計9件にする
      for (const fb of fallbacks) {
        if (combined.length >= 9) break;
        if (!seenUrls.has(fb.itemUrl)) {
          combined.push(fb);
          seenUrls.add(fb.itemUrl);
        }
      }

      // 最終ガード: 非食品（生地、布、のぼり旗、アクセ等）・予算・嫌いなものの最終フィルタ
      let finalFiltered = combined;

      const clientNonFoodKeywords = [
        '生地', '綿プリント生地', 'プリント生地', 'はぎれ', 'ハギレ', 'カットクロス', '布地', 'コットン', '麻', 'リネン',
        '手芸', 'クラフト', 'パーツ', 'デコパーツ', 'レジン', 'シリコンモールド', 'モールド', '型紙', '資材',
        '食品サンプル', 'サンプル', 'フェイク', 'ミニチュア', '粘土', 'ビーズ',
        'のぼり', 'のぼり旗', '旗', '看板', 'ポスター', '什器', '名入れ', 'ネコポス便 和菓子', 'ネコポス便 洋菓子',
        'ピアス', 'イヤリング', 'ネックレス', 'リング', '指輪', 'ブレスレット', 'アクセサリー', 'アクセ', 'チャーム',
        'キャンドル', '石鹸', 'せっけん', '入浴剤', 'シール', 'ステッカー', 'マステ', '文具', 'キーホルダー', 'アクスタ',
        'コップ', 'マグカップ', 'お皿', 'プレート', 'スプーン', 'フォーク', 'ラッピング', '空箱', '紙袋',
        'シャツ', 'パンツ', 'ソックス', '服', 'アパレル', 'カラコン', 'コンタクト', 'リップ', '化粧水', 'コスメ',
        'スマホケース', 'ケース', 'カバー', 'ぬいぐるみ', 'フィギュア', '本', '雑誌', 'cd', 'dvd'
      ];
      const clientNonFoodShops = ['サインモール', '看板', '手芸', 'ナカムラ', 'グッズプロ', 'lucca', 'パーツ', '生地'];

      finalFiltered = finalFiltered.filter((item: any) => {
        const text = `${item.itemName} ${item.itemCaption || ''}`.toLowerCase();
        const shop = (item.shopName || '').toLowerCase();
        if (clientNonFoodKeywords.some(kw => text.includes(kw.toLowerCase()))) return false;
        if (clientNonFoodShops.some(kw => shop.includes(kw.toLowerCase()))) return false;
        return true;
      });

      if (maxP > 0) {
        finalFiltered = finalFiltered.filter((item: any) => item.itemPrice <= maxP);
      }
      if (minP > 0) {
        finalFiltered = finalFiltered.filter((item: any) => item.itemPrice >= minP);
      }
      if (allDislikes.length > 0) {
        const normDislikes = allDislikes.map(d => d.toLowerCase().trim()).filter(Boolean);
        finalFiltered = finalFiltered.filter((item: any) => {
          const text = `${item.itemName} ${item.itemCaption || ''}`.toLowerCase();
          return !normDislikes.some(dis => text.includes(dis));
        });
      }

      // もしフィルタで不足してしまった場合は、fallbackから9件確実に補う
      if (finalFiltered.length < 9) {
        const additionalFb = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes, 9);
        for (const fb of additionalFb) {
          if (finalFiltered.length >= 9) break;
          if (!finalFiltered.some((it: any) => it.itemUrl === fb.itemUrl)) {
            finalFiltered.push(fb);
          }
        }
      }

      setItems(finalFiltered.slice(0, 9));
      setKeywordUsed(usedKw);
    } catch (err) {
      console.error('Rakuten fetch error:', err);
      console.log('フォールバックデータを使用します');
      const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes);
      setItems(fallbacks);
      setKeywordUsed(mainKw);
    } finally {
      setLoading(false);
    }
  };

  const captureNodeToDataUrl = async (node: HTMLElement): Promise<string> => {
    // ノード内のすべての画像がデコード完了するのを待つ
    const imgs = Array.from(node.querySelectorAll('img'));
    await Promise.all(
      imgs.map((img) => {
        if (img.complete && img.naturalWidth > 0) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );

    // ウォームアップレンダリング（これで画像が内部デコード・キャッシュされ確実に載る）
    try {
      await domToPng(node, { quality: 0.1, pixelRatio: 1, cacheBust: true });
    } catch (e) {
      // warmup error ignore
    }

    await new Promise((r) => setTimeout(r, 100));

    // 本番高画質キャプチャ（oklchカラー関数も完全サポート）
    return await domToPng(node, {
      quality: 0.95,
      backgroundColor: '#ffffff',
      pixelRatio: 2,
      cacheBust: true,
      fetchRequestInit: { cache: 'force-cache' },
    });
  };

  const handleSaveImage = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;
    
    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await captureNodeToDataUrl(node);
      
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        setShowImageModal(dataUrl);
      } else {
        const link = document.createElement('a');
        link.download = `oyatsu-shindan-${snackType.code}.png`;
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.error('画像保存に失敗しました:', err);
      alert('画像の保存に失敗しちゃいました💦');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleShare = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;

    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await captureNodeToDataUrl(node);
      
      const blob = dataURItoBlob(dataUrl);
      const file = new File([blob], `oyatsu-${snackType.code}.png`, { type: 'image/png' });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: '私のおやつ性格診断結果！',
          text: getShareText(snackType.id, snackType.characterName),
          files: [file],
        });
      } else {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          setShowImageModal(dataUrl);
        } else {
          const link = document.createElement('a');
          link.download = `oyatsu-${snackType.code}.png`;
          link.href = dataUrl;
          link.click();
        }
        alert('お使いのブラウザは画像シェアに対応していないため、画像を保存しました！SNS等でシェアしてみてね✨');
      }
    } catch (err) {
      console.error('シェアに失敗しました:', err);
      alert('シェア画像の作成に失敗しちゃいました💦');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleTextShare = () => {
    if (!snackType) return;
    const shareText = getShareText(snackType.id, snackType.characterName);
    if (navigator.share) {
      navigator.share({
        title: '私のおやつ性格診断結果！',
        text: shareText,
      }).catch(console.error);
    } else {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
      window.open(url, '_blank');
    }
  };

  // パラメータバー用
  const tenderCount = answers.textures.filter(t => ['ふわふわ', 'もっちり', 'とろとろ', 'ほろほろ'].includes(t)).length;
  const hardCount = answers.textures.filter(t => ['サクサク', 'ザクザク', 'カリカリ', 'パリパリ'].includes(t)).length;
  let renderTenderScore = 50;
  if (tenderCount > hardCount) renderTenderScore = 80;
  if (hardCount > tenderCount) renderTenderScore = 20;

  if (!snackType) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8" id="result-container">
      {isPureLSI && (
        <div className="bg-rose-100 border-2 border-rose-500 rounded-3xl p-6 shadow-lg animate-pulse">
          <h2 className="text-xl sm:text-2xl font-black text-rose-800 flex items-center gap-2 mb-3">
            <span className="text-2xl">🚨</span>
            【警告】あなたは人類全体の約0.1%「おやつ界の異端児（LSI芋虫）」です！
            <span className="text-2xl">🐛</span>
          </h2>
          <p className="text-sm sm:text-base font-bold text-rose-900 leading-relaxed bg-white/60 p-4 rounded-2xl">
            3時のおやつに甘いケーキやプリンを求める軟弱な思想を完全に切り捨て、冷やし豆腐や枝豆、スパイシー珍味で淡々と物理塩分補給を行う超ストイックなレアタイプ！<br/>
            一般的なおやつ売り場ではあなたを満足させられないため、当ツールは特別に<strong>「居酒屋のスピードメニュー＆絶品小鉢データベース」</strong>から極上のおやつを召喚しました。誇りを持って冷や奴をお迎えしてください。
          </p>
        </div>
      )}

      {/* 診断タイプ発表カード */}
      <div className={`rounded-3xl p-6 sm:p-8 border ${snackType.color.border} ${snackType.color.bg} shadow-xl relative overflow-hidden`} id="snack-result-card">
        {isCapturing && (
          <div className="absolute top-4 right-4 z-20">
            <span className="text-[11px] font-black text-amber-900 bg-white/95 px-3 py-1 rounded-full border border-amber-300 shadow-sm whitespace-nowrap">
              16タイプおやつ診断
            </span>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white/95 shadow-md border-2 border-amber-200 flex items-center justify-center p-2 flex-shrink-0 relative overflow-hidden my-1">
              <SnackCharacterAvatar typeId={snackType.id} size="lg" />
            </div>
            <span className="text-xs font-black text-amber-900 mt-2 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300 shadow-2xs whitespace-nowrap">
              {snackType.characterEmoji} {snackType.characterName}
            </span>
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className={`text-xs font-extrabold px-3 py-1 rounded-full whitespace-nowrap ${snackType.color.badge}`}>
                TYPE: {snackType.code}
              </span>
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 whitespace-nowrap">
                キャラクター: {snackType.characterName}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-stone-900 leading-tight">
              {snackType.title}
            </h1>

            <p className="text-xs sm:text-sm font-extrabold text-rose-600">
              おすすめカテゴリ: {snackType.snackCategory}
            </p>

            <p className="text-xs sm:text-sm text-stone-700 font-medium italic bg-white/70 p-3 rounded-2xl border border-stone-200/60 mt-2">
              「{snackType.catchphrase}」
            </p>
          </div>
        </div>

        {/* 解説と性格的特徴 */}
        <div className="mt-6 pt-6 border-t border-stone-200/60 grid sm:grid-cols-2 gap-4 text-xs text-stone-700">
          <div className="space-y-2">
            <h3 className="font-extrabold text-stone-900 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>おやつ性格プロファイル</span>
            </h3>
            <p className="leading-relaxed bg-white/60 p-3 rounded-xl">
              {answers.mode === 'gift' ? snackType.description.replace(/あなた/g, 'あの人') : snackType.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-extrabold text-stone-900 flex items-center gap-1">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>{answers.mode === 'gift' ? 'このおやつが似合う人の特徴' : 'あなたの特徴＆相性'}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {snackType.personalityTraits.map((trait) => (
                  <span key={trait} className="bg-white/90 text-stone-800 font-bold px-2.5 py-1 rounded-xl border border-stone-200 shadow-2xs">
                    ✨ {trait}
                  </span>
                ))}
              </div>
            </div>
            
            {answers.mode !== 'gift' && (
              <div className="bg-white/70 p-3 rounded-xl border border-stone-200/60">
                <p className="font-bold text-stone-800 mb-1">🤝 ベスト相性タイプ</p>
                <p className="font-extrabold text-rose-600">
                  {snackType.bestPairingTypeId} ({SNACK_TYPES[snackType.bestPairingTypeId]?.title})
                </p>
              </div>
            )}

            {alternateType && (
              <div className="bg-amber-50 p-3 rounded-xl border border-amber-200">
                <p className="font-bold text-amber-900 mb-1 flex items-center gap-1">
                  <span>🎭</span> 【裏タイプ】
                </p>
                <p className="text-xs text-amber-800 leading-tight mb-2">
                  回答が半々で迷ったあなたには、こちらのタイプも潜んでいます。
                </p>
                <div className="flex items-center gap-3 bg-white/60 p-2 rounded-lg">
                  <div className="w-12 h-12 flex-shrink-0">
                    <SnackCharacterAvatar typeId={alternateType.id} size="sm" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 whitespace-nowrap">
                      {alternateType.code}
                    </span>
                    <p className="text-xs font-extrabold text-stone-800">{alternateType.title}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 診断パラメータ分析 */}
        <div className="mt-4 pt-6 border-t border-stone-200/60">
          <h3 className="font-extrabold text-stone-900 flex items-center gap-1 mb-4 text-xs">
            <Sliders className="w-4 h-4 text-sky-500" />
            <span>おやつパラメータ分析</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <ParameterBar leftLabel="🍘 しょっぱい" rightLabel="甘い 🍫" value={answers.sweetValue} colorClass="bg-gradient-to-r from-orange-400 to-rose-400" />
            <ParameterBar leftLabel="🥨 硬い" rightLabel="柔らかい 🥞" value={renderTenderScore} colorClass="bg-gradient-to-r from-amber-500 to-yellow-300" />
            <ParameterBar leftLabel="🍪 常温" rightLabel="ひんやり 🧊" value={answers.freshValue} colorClass="bg-gradient-to-r from-amber-600 to-sky-400" />
            <ParameterBar leftLabel="🍵 和風" rightLabel="洋風 🍰" value={answers.japaneseValue} colorClass="bg-gradient-to-r from-emerald-500 to-pink-400" />
          </div>
        </div>

      </div>

      {/* シェア・保存ボタン群 */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => { playPopSound(); handleSaveImage(); }}
          disabled={isCapturing}
          className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-extrabold text-[10px] sm:text-xs px-2 sm:px-3 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-1 disabled:opacity-50 flex-1 justify-center"
        >
          <Download className="w-4 h-4" />
          <span>画像を保存</span>
        </button>
        <button
          type="button"
          onClick={() => { playPopSound(); handleShare(); }}
          disabled={isCapturing}
          className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-extrabold text-[10px] sm:text-xs px-2 sm:px-3 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-1 disabled:opacity-50 flex-1 justify-center"
        >
          <Share2 className="w-4 h-4" />
          <span>画像をシェア</span>
        </button>
        <button
          type="button"
          onClick={() => { playPopSound(); handleTextShare(); }}
          disabled={isCapturing}
          className="bg-stone-800 hover:bg-stone-900 text-white font-extrabold text-[10px] sm:text-xs px-2 sm:px-4 py-2.5 rounded-2xl shadow-md shadow-stone-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1 disabled:opacity-50 flex-1 justify-center"
        >
          <Share2 className="w-4 h-4" />
          <span>結果をシェア</span>
        </button>
      </div>

      {showImageModal && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={() => setShowImageModal(null)}>
          <div className="bg-white p-4 rounded-3xl max-w-sm w-full space-y-4 my-8 relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowImageModal(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/40 backdrop-blur-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <p className="text-center font-extrabold text-stone-800">画像を長押しして保存してね✨</p>
            <div className="rounded-2xl overflow-hidden shadow-inner border border-stone-200">
              <img src={showImageModal} alt="診断結果" className="w-full h-auto" />
            </div>
            <button
              onClick={() => setShowImageModal(null)}
              className="w-full py-3 bg-stone-200 text-stone-800 font-bold rounded-2xl hover:bg-stone-300 transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      {/* 「おやつがこちらを見ています…👀✨」＆ もふもふマスコット演出 */}
      <div className="space-y-3" id="eye-contact-section">
        <MofumofuMascot
          message={jururiMsg}
          mood="jururi"
          character="hamster"
          size="md"
        />

        {/* おやつの視線メッセージ */}
        <div className="bg-gradient-to-r from-amber-100/90 via-pink-100/90 to-rose-100/90 p-4 rounded-3xl border border-amber-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-bounce">👀✨</span>
            <div>
              <span className="text-[10px] font-extrabold text-amber-800 bg-amber-200/80 px-2 py-0.5 rounded-full">
                おやつの囁き
              </span>
              <p className="text-xs sm:text-sm font-extrabold text-stone-800 mt-0.5">
                {eyeContactMsg}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setEyeContactMsg(getRandomEyeContactMessage())}
            className="text-[11px] font-bold text-stone-600 bg-white/80 hover:bg-white px-3 py-1.5 rounded-xl border border-stone-200 transition-all flex items-center gap-1 flex-shrink-0"
            id="change-eye-contact-msg-btn"
          >
            <RefreshCw className="w-3 h-3" />
            <span>別の囁きを聞く</span>
          </button>
        </div>
      </div>

      {/* 楽天市場から召喚されたおやつ商品一覧 */}
      <div className="space-y-4" id="rakuten-products-section">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-500" />
              <h2 className="text-lg font-extrabold text-stone-900">
                {answers.mode === 'gift' ? 'あの人にぴったりのおやつを召喚しました！' : 'あなたにぴったりのおやつを召喚しました！'}
              </h2>
            </div>
            <p className="text-xs text-stone-500">
              楽天市場から条件に合ったおすすめおやつを検索中 (キーワード: 「{keywordUsed}」)
            </p>
          </div>

          {/* ボタンの文言切替カスタム */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-2xl border text-xs">
            <span className="text-[10px] text-stone-500 font-bold px-1">ボタン文言:</span>
            {[
              { id: 'お迎えする', label: 'お迎えする' },
              { id: '召喚する', label: '召喚する' },
              { id: '見に行く', label: '見に行く' },
              { id: '召し上がる', label: '召し上がる' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setButtonStyle(btn.id)}
                className={`px-2 py-1 rounded-xl text-[10px] font-bold transition-all ${
                  buttonStyle === btn.id ? 'bg-white text-rose-600 shadow-2xs' : 'text-stone-600'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* ローディング表示 */}
        {loading ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs font-bold text-stone-600">
              楽天市場からおやつを捜索中……🤤 少々お待ちを！
            </p>
          </div>
        ) : items.length === 0 ? (
          <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200 text-center space-y-2">
            <p className="text-sm font-bold text-amber-900">
              えへへ、ぴったりのおやつを探し中だよ！
            </p>
            <p className="text-xs text-stone-600">
              キーワードを少し変えるか、予算を広げて再検索してみてね！
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition-all p-4 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* じゅるり吹き出し装飾 (最初のカードのみ) */}
                {idx === 0 && (
                  <div className="absolute top-2 right-2 bg-amber-400 text-amber-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-2xs animate-pulse z-10">
                    一番おすすめ！🤤
                  </div>
                )}

                <div className="space-y-3">
                  {/* 商品画像 */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden bg-stone-100 relative">
                    <img
                      src={item.imageUrl || 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400'}
                      alt={item.itemName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* 商品名 */}
                  <h3 className="text-xs font-bold text-stone-900 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">
                    {item.itemName}
                  </h3>

                  {/* レビュー＆価格 */}
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-stone-100">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{item.reviewAverage > 0 ? item.reviewAverage.toFixed(1) : '4.5'}</span>
                      <span className="text-[10px] text-stone-400">({item.reviewCount || 12})</span>
                    </div>

                    <div className="text-sm font-black text-rose-600">
                      ¥{item.itemPrice.toLocaleString()}
                    </div>
                  </div>

                  <p className="text-[10px] text-stone-400 truncate">
                    ショップ: {item.shopName}
                  </p>
                </div>

                {/* お迎えボタン */}
                <a
                  href={item.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2.5 px-3 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-extrabold text-xs shadow-md shadow-pink-100 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  id={`rakuten-item-btn-${idx}`}
                >
                  <span>
                    {buttonStyle === 'お迎えする' && '✨ このおやつをお迎えする'}
                    {buttonStyle === '召喚する' && '🍩 このおやつを召喚する'}
                    {buttonStyle === '見に行く' && '🍓 このおやつを見に行く'}
                    {buttonStyle === '召し上がる' && '👉 楽天市場で今すぐ召し上がる'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 絞り込み条件の再調整パネル */}
      <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 space-y-4 shadow-sm" id="search-adjust-panel">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-1.5 font-extrabold text-sm text-stone-800">
            <Sliders className="w-4 h-4 text-stone-500" />
            <span>おやつ検索条件を微調整する</span>
          </div>
          <p className="text-xs text-stone-500 font-medium">結果がイマイチな場合は、追加キーワードや予算を調整して再検索してみてね！</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-stone-600">追加キーワード:</label>
            <input
              type="text"
              value={customSearchKeyword}
              onChange={(e) => setCustomSearchKeyword(e.target.value)}
              placeholder="例: 北海道 バターサンド, 抹茶 タルト"
              className="w-full px-4 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-2xs transition-shadow"
              id="custom-search-input"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-stone-600">予算調整:</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-stone-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-rose-400 shadow-2xs transition-shadow"
              id="budget-adjust-select"
            >
              <option value="500">500円以下</option>
              <option value="1000">1,000円以下</option>
              <option value="3000">3,000円以下</option>
              <option value="5000">5,000円以下</option>
              <option value="10000">10,000円以下</option>
              <option value="any">気にしない</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            if (!snackType) return;
            playPopSound();
            fetchRakutenItems(
              snackType,
              budget,
              answers.flavors,
              answers.customFlavor || '',
              answers.dislikes,
              answers.customDislike,
              answers.mode,
              answers.mood,
              answers.giftVibe
            );
          }}
          className="w-full py-3 rounded-2xl bg-stone-800 text-white font-extrabold text-sm hover:bg-stone-900 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
          id="re-search-submit"
        >
          <RefreshCw className="w-4 h-4" />
          <span>条件を更新しておやつを再捜索する</span>
        </button>
      </div>

      {/* 最初からやり直すボタン（目立たせる） */}
      <div className="pt-6 pb-12 flex justify-center border-t border-stone-200">
        <button
          type="button"
          onClick={() => { playPopSound(); onReset(); }}
          className="group relative px-6 py-3 bg-gradient-to-br from-rose-500 to-pink-600 text-white font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          id="re-quiz-primary-button"
        >
          <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <RefreshCw className="w-5 h-5" />
          <span className="text-sm">最初から診断し直す！✨</span>
        </button>
      </div>
    </div>
  );
};
