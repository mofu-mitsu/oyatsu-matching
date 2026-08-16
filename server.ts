import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { getFallbackItems } from './src/data/fallbackItems';

const app = express();
const PORT = 3000;

app.use(express.json());

// 楽天API設定
const RAKUTEN_APP_ID = process.env.RAKUTEN_APP_ID || '52e88efe-2652-42d6-8a0f-8d6d5861ff23';
const RAKUTEN_ACCESS_KEY = process.env.RAKUTEN_ACCESS_KEY || '';
const RAKUTEN_AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || '3d94ea21.0d257908.3d94ea22.0ed11c6e';

// -------------------------------------------------------------
// API Routes
// -------------------------------------------------------------

// 1. ヘルスチェック
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 2. 楽天商品検索プロキシ API
app.get('/api/rakuten/search', async (req, res) => {
  try {
    const rawKeyword = (req.query.keyword as string) || 'スイーツ ギフト';
    const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
    const dislikes = req.query.dislikes ? (req.query.dislikes as string).split(',').filter(Boolean) : [];
    
    // typeCode for fallback
    const typeCode = (req.query.typeCode as string) || 'STFW';
    const isSweetType = typeCode.startsWith('S');
    const mode = (req.query.mode as string) || 'self';
    const isGift = mode === 'gift' || (req.query.isGift === 'true');
    const mood = (req.query.mood as string) || '';
    const giftVibe = (req.query.giftVibe as string) || '';

    // 自由入力の好きなもの・キーワード（最優先）
    const customFlavor = (req.query.customFlavor as string || '').trim();

    // 複数フレーバー
    let flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    if (customFlavor && !flavors.includes(customFlavor)) {
      flavors = [customFlavor, ...flavors];
    }
    
    // 多すぎる単語を整理し段階的な検索候補を作成
    const keywordsToTry: string[] = [];

    // 元のキーワードから単語を取り出し
    const tokens = rawKeyword.split(/\s+/).filter(Boolean);

    // 0. 自由入力キーワードがあれば最優先！
    if (customFlavor) {
      if (isSweetType) {
        keywordsToTry.push(`${customFlavor} スイーツ`);
        keywordsToTry.push(`${customFlavor} お菓子`);
        keywordsToTry.push(customFlavor);
      } else {
        keywordsToTry.push(`${customFlavor} おつまみ`);
        keywordsToTry.push(customFlavor);
      }
    }

    // 1. フレーバー + 基本キーワード
    if (flavors.length > 0) {
      const primary = flavors[0];
      let primaryFlavor = primary;
      if (isSweetType) {
        if (primary === 'チーズ') primaryFlavor = 'チーズケーキ';
        else if (primary === 'ミント' || primary === 'チョコミント' || primary === 'ミント・チョコミント') primaryFlavor = 'チョコミント';
      }
      
      const mainWord = tokens.find(t => !flavors.includes(t) && t !== '高級' && t !== 'ギフト' && t !== 'おつまみ') || (isSweetType ? 'スイーツ' : 'おつまみ');
      if (isGift || mood === 'ご褒美' || giftVibe === '高級感') {
        keywordsToTry.push(`${primaryFlavor} ギフト`);
        keywordsToTry.push(`高級 ${primaryFlavor}`);
      }
      keywordsToTry.push(`${primaryFlavor} ${mainWord}`);
      keywordsToTry.push(primaryFlavor);
    }

    // 2. ギフト・高級指定がある場合
    if (isGift || mood === 'ご褒美' || giftVibe === '高級感') {
      if (isSweetType) {
        keywordsToTry.push('高級 スイーツ ギフト 詰め合わせ', '洋菓子 ギフト 詰め合わせ', '和菓子 高級 ギフト');
      } else {
        keywordsToTry.push('高級 おつまみ ギフト 詰め合わせ', '珍味 ギフト 詰め合わせ');
      }
    }

    // 3. ユーザー指定キーワードから修飾語（高級など）を除いた2単語
    const coreTokens = tokens.filter(t => t !== '高級' && t !== 'ギフト' && t !== 'おつまみ');
    if (coreTokens.length > 0) {
      keywordsToTry.push(coreTokens.slice(0, 2).join(' '));
      keywordsToTry.push(coreTokens[0]);
    }

    // 4. タイプの大枠キーワード
    if (isSweetType) {
      keywordsToTry.push('洋菓子 焼き菓子', '和菓子 スイーツ', 'スイーツ');
    } else {
      keywordsToTry.push('おつまみ 珍味', 'おつまみ ギフト', 'おつまみ');
    }

    // 重複除去
    const uniqueKeywords = Array.from(new Set(keywordsToTry.filter(Boolean)));

    let data: any = null;
    let successfulKeyword = '';

    // 楽天ジャンルID設定
    // 100227 = スイーツ・お菓子（S系は完全固定で雑貨・コスメ・カラコン・スマホケースを完全遮断）
    // Y系は 100227 (スナック菓子・せんべい・ナッツ) または 食品全般
    const genreCandidates = isSweetType 
      ? ['100227'] 
      : ['100227', '100371', '']; // Y系はまずお菓子・惣菜、なければ全体

    searchLoop: for (const genreId of genreCandidates) {
      for (const kw of uniqueKeywords) {
        console.log(`🛍️ 楽天商品検索トライ: keyword="${kw}", genreId="${genreId}", price=${minPrice}-${maxPrice}`);

        const params = new URLSearchParams({
          applicationId: RAKUTEN_APP_ID,
          affiliateId: RAKUTEN_AFFILIATE_ID,
          keyword: kw,
          hits: '30',
          format: 'json',
          sort: (isGift || mood === 'ご褒美') ? '+reviewAverage' : 'standard',
        });

        if (genreId) params.append('genreId', genreId);
        if (minPrice && minPrice > 0) params.append('minPrice', String(minPrice));
        if (maxPrice && maxPrice > 0 && maxPrice < 999999) params.append('maxPrice', String(maxPrice));

        // 楽天API 正式V2エンドポイント
        const apiUrl = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?${params.toString()}`;

        const headers: any = { 
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Referer': req.headers.referer || 'https://oyatsu-matching.vercel.app/'
        };

        try {
          const response = await fetch(apiUrl, { headers });
          if (response.ok) {
            const resJson = await response.json();
            if (resJson && resJson.Items && resJson.Items.length > 0) {
              data = resJson;
              successfulKeyword = kw;
              console.log(`✅ 楽天APIヒット (${resJson.Items.length}件): keyword="${kw}" (genreId=${genreId})`);
              break searchLoop;
            }
          } else {
            console.warn(`⚠️ 楽天API応答エラー (${response.status}) for keyword="${kw}"`);
          }
        } catch (err) {
          console.error(`❌ 楽天API通信エラー for keyword="${kw}":`, err);
        }
      }
    }

    if (!data || !data.Items || data.Items.length === 0) {
      console.warn('⚠️ 楽天APIヒットゼロのため、フォールバックデータを返却します。');
      const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, flavors, dislikes, 9);
      return res.json({ items: fallbackItems, keywordUsed: 'おすすめのおやつ', totalCount: fallbackItems.length });
    }

    let items = data.Items.map((entry: any) => formatRakutenItem(entry.Item));

    // 0. 非食品（服、ケース、カバー、カラコン、コンタクト、ぬいぐるみ、雑貨、コスメ、美容液など）を徹底除外
    const nonFoodKeywords = [
      'シャツ', 'tシャツ', 'パンツ', 'ケース', 'カバー', '手帳型', 'バッグ', '本', '雑誌', 'cd', 'dvd',
      'コスメ', '美容液', '化粧', '化粧品', '化粧水', '乳液', '美容', 'スキンケア', 'フェイスパック',
      'ハンドクリーム', 'ボディクリーム', 'リップクリーム', '靴クリーム', 'シューケア', 'シューポリッシュ',
      'レザーケア', '革お手入れ', 'クレンジング', '洗顔', 'シャンプー', 'コンディショナー', 'トリートメント',
      'せっけん', '石鹸', 'ボディソープ', 'フレグランス', '香水', 'ネイル', 'マニキュア', 'リップグロス',
      '口紅', 'ファンデーション', 'パウダー', 'コンシーラー', 'アイシャドウ', 'マスカラ', 'アイライナー',
      'カラコン', 'カラーコンタクト', 'コンタクトレンズ', 'コンタクト', '度あり', '度なし', 'ワンデー', '1day', 'マンスリー',
      '洗剤', '柔軟剤', '消臭', '芳香剤', 'ローション', 'エッセンス', 'フィギュア', 'ぬいぐるみ', 'マスコット',
      'サンリオ', 'ポムポムプリン', 'シナモロール', 'クロミ', 'マイメロ', 'ハローキティ', 'ちいかわ', 'おもちゃ',
      'タオル', 'キーホルダー', 'アクスタ', 'ストラップ', '靴', 'サンダル', 'ソックス', '服', 'ドレス', 'ポシェット',
      'アパレル', 'スマホ', 'iPhone', 'フィルム', 'スタンド', '充電器', 'イヤホン', 'ポスター', '文具', 'ペン', 'シール'
    ];
    items = items.filter((item: any) => {
      const text = `${item.itemName} ${item.itemCaption || ''}`.toLowerCase();
      return !nonFoodKeywords.some(kw => text.includes(kw.toLowerCase()));
    });

    // 0.5 甘いおやつタイプ(S)なら珍味・豆腐・おつまみ系を除外
    if (isSweetType) {
      const savoryKeywords = ['珍味', '豆腐', 'おつまみ', 'つまみ', '酒のあて', '居酒屋', 'オニオン', 'サラミ', 'ジャーキー', 'カルパス', '小鉢', '漬物', '枝豆', '冷や奴', '冷奴', 'キムチ', 'ナムル'];
      items = items.filter((item: any) => {
        const title = item.itemName || '';
        return !savoryKeywords.some(kw => title.includes(kw));
      });
    }

    // 1. 予算フィルタを厳密適用 (API結果から漏れたものを除外)
    if (minPrice && minPrice > 0) {
      items = items.filter((item: any) => item.itemPrice >= minPrice);
    }
    if (maxPrice && maxPrice > 0) {
      items = items.filter((item: any) => item.itemPrice <= maxPrice);
    }

    // 2. NGキーワード（嫌いなもの）フィルタリング
    if (dislikes.length > 0) {
      const normDislikes = dislikes.map(d => d.toLowerCase().trim()).filter(Boolean);
      items = items.filter((item: any) => {
        const text = `${item.itemName} ${item.itemCaption || ''}`.toLowerCase();
        return !normDislikes.some((dislike) => text.includes(dislike));
      });
    }

    // 3. フレーバー＆カスタム入力の優先度付け
    items.sort((a: any, b: any) => {
      // 自由入力キーワードの完全一致チェック（最優先）
      if (customFlavor) {
        const aHasCustom = a.itemName.includes(customFlavor);
        const bHasCustom = b.itemName.includes(customFlavor);
        if (aHasCustom && !bHasCustom) return -1;
        if (!aHasCustom && bHasCustom) return 1;
      }

      // フレーバーの一致度
      if (flavors.length > 0) {
        let aTitleMatch = 0;
        let bTitleMatch = 0;
        flavors.forEach(f => {
          if (a.itemName.includes(f)) aTitleMatch += 2;
          if (b.itemName.includes(f)) bTitleMatch += 2;
          if (`${a.itemName} ${a.itemCaption || ''}`.includes(f)) aTitleMatch += 1;
          if (`${b.itemName} ${b.itemCaption || ''}`.includes(f)) bTitleMatch += 1;
        });

        if (bTitleMatch !== aTitleMatch) {
          return bTitleMatch - aTitleMatch;
        }
      }

      // ギフトやご褒美モードの場合、レビュー評価が高い＆ギフトっぽい単語があるものを優遇
      if (isGift || mood === 'ご褒美' || giftVibe === '高級感') {
        const aGiftScore = (a.itemName.includes('ギフト') ? 2 : 0) + (a.itemName.includes('高級') ? 2 : 0) + (a.itemName.includes('詰め合わせ') ? 2 : 0) + (a.reviewAverage || 0);
        const bGiftScore = (b.itemName.includes('ギフト') ? 2 : 0) + (b.itemName.includes('高級') ? 2 : 0) + (b.itemName.includes('詰め合わせ') ? 2 : 0) + (b.reviewAverage || 0);
        if (bGiftScore !== aGiftScore) {
          return bGiftScore - aGiftScore;
        }
      }

      return Math.random() - 0.5;
    });

    // 9件に絞り込み
    const finalItems = items.slice(0, 9);

    // NGワードや予算弾きで不足した場合のフォールバック補填
    if (finalItems.length < 9) {
      console.warn(`⚠️ 抽出結果が${finalItems.length}件のため、フォールバックで9件に補填します。`);
      const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, flavors, dislikes, 9);
      for (const fb of fallbackItems) {
        if (finalItems.length >= 9) break;
        if (!finalItems.some((it: any) => it.itemUrl === fb.itemUrl || it.itemName === fb.itemName)) {
          finalItems.push(fb);
        }
      }
    }

    res.json({
      items: finalItems,
      keywordUsed: successfulKeyword || 'おすすめのおやつ',
      totalCount: finalItems.length
    });
  } catch (error: any) {
    console.error('❌ 楽天検索処理エラー:', error);
    // エラー時はフォールバックデータを返す
    const typeCode = req.query.typeCode as string || 'STFW';
    const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
    const flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    const dislikes = req.query.dislikes ? (req.query.dislikes as string).split(',').filter(Boolean) : [];
    const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, flavors, dislikes, 9);
    res.json({ items: fallbackItems, keywordUsed: 'おすすめのおやつ', totalCount: fallbackItems.length });
  }
});

function formatRakutenItem(item: any) {
  const itemUrl = item.itemUrl ? item.itemUrl.split('?')[0] : '';
  const affiliateUrl = item.affiliateUrl || `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${encodeURIComponent(itemUrl)}`;
  const imageUrl = item.mediumImageUrls?.[0]?.imageUrl || item.smallImageUrls?.[0]?.imageUrl || '';

  return {
    itemName: item.itemName || 'おやつ',
    itemPrice: item.itemPrice || 0,
    itemUrl,
    affiliateUrl,
    imageUrl: imageUrl.replace('http://', 'https://'),
    itemCaption: item.itemCaption || '',
    reviewAverage: item.reviewAverage || 0,
    reviewCount: item.reviewCount || 0,
    shopName: item.shopName || '楽天市場',
  };
}


// 3. 画像プロキシAPI (CORS回避用)
app.get('/api/image-proxy', async (req, res) => {
  try {
    const imageUrl = req.query.url as string;
    if (!imageUrl) return res.status(400).send('No url provided');
    
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Failed to fetch image');
    
    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Image proxy error:', error);
    res.status(500).send('Error proxying image');
  }
});

// -------------------------------------------------------------
// Vite Middleware / Static serve
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🍡 おやつマッチング サーバー起動: http://0.0.0.0:${PORT}`);
  });
}

startServer();
