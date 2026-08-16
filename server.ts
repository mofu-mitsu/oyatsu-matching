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
    // キーワードのサニタイズ（「・」などの記号除去やチョコミント正規化）
    let cleanRawKeyword = (rawKeyword || '')
      .replace(/ミント[・/]チョコミント/g, 'チョコミント')
      .replace(/[・/、,()（）]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // 単語の重複を除去（例: 「チョコミント チョコミント クッキー」→「チョコミント クッキー」）
    cleanRawKeyword = Array.from(new Set(cleanRawKeyword.split(/\s+/).filter(Boolean))).join(' ');

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
    const customFlavor = (req.query.customFlavor as string || '').trim().replace(/[・/、,()（）]/g, ' ');

    // 複数フレーバー（「ミント・チョコミント」等はクレンジング）
    let flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    flavors = flavors.map(f => {
      let clean = f.replace(/[・/、,()（）]/g, ' ').trim();
      if (clean === 'ミント チョコミント' || clean === 'ミント' || clean.includes('チョコミント')) return 'チョコミント';
      if (clean === '柑橘 レモン') return 'レモン';
      if (clean === '梅 塩味') return '梅';
      return clean;
    });

    if (customFlavor && !flavors.includes(customFlavor)) {
      flavors = [customFlavor, ...flavors];
    }
    
    // 多すぎる単語を整理し段階的な検索候補を作成
    const keywordsToTry: string[] = [];

    // 0. 自由入力キーワードがあれば最優先！
    if (customFlavor) {
      if (isSweetType) {
        keywordsToTry.push(`${customFlavor} スイーツ`);
        keywordsToTry.push(`${customFlavor} ケーキ`);
        keywordsToTry.push(`${customFlavor} チョコ`);
        keywordsToTry.push(`${customFlavor} クッキー`);
        keywordsToTry.push(`${customFlavor} 焼き菓子`);
      } else {
        keywordsToTry.push(`${customFlavor} おつまみ`);
        keywordsToTry.push(`${customFlavor} 珍味`);
      }
    }

    // 1. フレーバー + 基本キーワード
    if (flavors.length > 0) {
      const primary = flavors[0];
      if (isSweetType) {
        if (primary === 'チョコミント' || primary.includes('ミント')) {
          keywordsToTry.push('チョコミント スイーツ', 'チョコミント チョコ', 'チョコミント クッキー', 'チョコミント ケーキ', 'チョコミント サンド', 'チョコミント アイス');
        } else if (primary === 'チーズ') {
          keywordsToTry.push('チーズケーキ', 'チーズ クッキー', '濃厚 チーズ スイーツ');
        } else if (primary === '抹茶') {
          keywordsToTry.push('抹茶 スイーツ', '抹茶 ケーキ', '抹茶 チョコ', '抹茶 クッキー');
        } else if (primary === 'チョコ') {
          keywordsToTry.push('チョコ スイーツ', 'ガトーショコラ', 'チョコレート ギフト');
        } else if (primary === 'いちご') {
          keywordsToTry.push('いちご スイーツ', '苺 ケーキ', 'いちご チョコ', 'いちご 焼き菓子');
        } else {
          keywordsToTry.push(`${primary} スイーツ`, `${primary} お菓子`);
        }
      } else {
        keywordsToTry.push(`${primary} おつまみ`, `${primary} 珍味`);
      }
    }

    // 2. ユーザー指定のサニタイズ済み rawKeyword
    if (cleanRawKeyword && !keywordsToTry.includes(cleanRawKeyword)) {
      keywordsToTry.push(cleanRawKeyword);
    }

    // 3. ギフト・高級指定がある場合
    if (isGift || mood === 'ご褒美' || giftVibe === '高級感') {
      if (isSweetType) {
        keywordsToTry.push('高級 スイーツ ギフト 詰め合わせ', '洋菓子 ギフト 詰め合わせ', 'デパ地下 スイーツ ギフト');
      } else {
        keywordsToTry.push('高級 おつまみ ギフト 詰め合わせ', '珍味 ギフト 詰め合わせ');
      }
    }

    // 4. タイプの大枠キーワード
    if (isSweetType) {
      keywordsToTry.push('洋菓子 焼き菓子', '和菓子 スイーツ', 'スイーツ 詰め合わせ');
    } else {
      keywordsToTry.push('おつまみ 珍味', 'おつまみ ギフト', 'おつまみ 詰め合わせ');
    }

    // 重複除去 & 単語内重複除去
    const uniqueKeywords = Array.from(
      new Set(
        keywordsToTry
          .filter(Boolean)
          .map(kw => Array.from(new Set(kw.replace(/[・/、,()（）]/g, ' ').split(/\s+/).filter(Boolean))).join(' '))
      )
    );

    let data: any = null;
    let successfulKeyword = '';

    // 楽天ジャンルID設定
    // 100227 = スイーツ・お菓子（S系は完全固定で雑貨・手芸・コスメ・カラコン・スマホケースを完全遮断）
    // Y系は 100227 (スナック菓子・せんべい・ナッツ) または 食品全般(100371, 100227)
    const genreCandidates = isSweetType 
      ? ['100227'] 
      : ['100227', '100371'];

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

    // 0. 非食品（手芸生地・布・アクセサリ、のぼり旗、看板、服、ケース、カバー、カラコン、コンタクト、ぬいぐるみ、雑貨、コスメ、美容液、サンプルなど）を徹底除外
    const nonFoodKeywords = [
      // 手芸・生地・布・資材（最重要ブロック）
      '生地', '綿プリント生地', 'プリント生地', 'はぎれ', 'ハギレ', 'カットクロス', '布地', 'コットン', '麻', 'リネン',
      'シーチング', 'オックス', 'ブロード', 'ダブルガーゼ', 'レース', 'リボン', '毛糸', '編み物', '刺繍', '手芸',
      'クラフト', 'パーツ', 'デコパーツ', 'レジン', 'シリコンモールド', 'モールド', '型紙', '手作りキット', '資材',
      '食品サンプル', 'サンプル', 'フェイク', 'フェイクスイーツ', 'ミニチュア', '粘土', 'クレイ', 'ビーズ', 'チャームパーツ',
      // 看板・店舗用品・資材・印刷
      'のぼり', 'のぼり旗', '旗', '幕', '横断幕', '看板', 'ポスター', 'パネル', 'ディスプレイ', 'pop', 'ポップ',
      'サイン', '什器', 'チラシ', '販促', '名入れ', 'ネコポス便 和菓子', 'ネコポス便 洋菓子', 'ネコポス便 スイーツ', 'ネコポス便 アイス',
      'ネコポス送料', 'メール便送料',
      // アクセサリー・装飾
      'ピアス', 'イヤリング', 'ネックレス', 'リング', '指輪', 'ブレスレット', 'アクセサリー', 'アクセ', 'チャーム',
      'ブローチ', 'ピンバッジ', 'バッジ', 'ヘアゴム', 'シュシュ', 'バレッタ', 'ペンダント', 'アンクレット',
      // 雑貨・日用品・文具
      'キャンドル', 'ろうそく', 'お香', 'アロマ', '石鹸', 'せっけん', 'ソープ', 'バスボム', '入浴剤', 'スライム',
      'シール', 'ステッカー', 'マスキングテープ', 'マステ', 'ノート', 'メモ帳', 'ボールペン', 'ペン', '文具', '文房具',
      '消しゴム', 'クリアファイル', 'マグネット', '磁石', 'キーホルダー', 'アクスタ', 'アクリルスタンド', 'ストラップ',
      // 食器・調理器具・キッチン用品・空箱
      'グラス', 'コップ', 'マグカップ', 'マグ', 'タンブラー', 'お皿', 'プレート', 'ボウル', 'スプーン', 'フォーク',
      'カトラリー', '箸', '箸置き', '鍋', 'フライパン', 'ケーキ型', 'クッキー型', '保存容器', 'タッパー',
      'ラッピング', '包装紙', '空箱', '箱のみ', '紙袋', 'ショッパー', '空缶', '缶のみ', 'ギフトバッグ',
      // ファッション・アパレル
      'tシャツ', 'シャツ', 'パーカー', 'トレーナー', 'パンツ', 'ズボン', 'スカート', '靴下', 'ソックス', '帽子', 'キャップ',
      'バッグ', 'トート', 'トートバッグ', 'ポーチ', '財布', 'ハンカチ', 'タオル', '靴', 'サンダル', 'スニーカー',
      'ドレス', '服', 'アパレル', 'ポシェット', 'エプロン', 'パジャマ', 'マフラー', '手袋',
      // コスメ・美容・ヘルスケア
      'カラコン', 'カラーコンタクト', 'コンタクトレンズ', 'コンタクト', '度あり', '度なし', 'ワンデー', '1day', 'マンスリー',
      'リップ', 'リップクリーム', 'リップバーム', '口紅', 'ルージュ', 'グロス', 'チーク', 'アイシャドウ', 'アイライナー',
      'マスカラ', 'ファンデーション', 'パウダー', 'コンシーラー', '化粧水', '乳液', '美容液', 'クリーム', 'スキンケア',
      'フェイスパック', 'パック', 'クレンジング', '洗顔', 'シャンプー', 'コンディショナー', 'トリートメント', '香水',
      'フレグランス', 'コロン', 'ネイル', 'マニキュア', 'ジェルネイル', '除光液', '脱毛', '除毛', 'サプリ', 'サプリメント',
      '医薬品', '湿布', '消毒', '除菌', '洗剤', '柔軟剤', '消臭', '芳香剤', 'ローション', 'エッセンス', 'ボディクリーム',
      'ハンドクリーム', '靴クリーム', 'シューケア',
      // 電子機器・スマホ用品
      'スマホケース', 'スマホカバー', 'スマホスタンド', 'スマホリング', 'iphoneケース', 'ケース', 'カバー', '手帳型',
      '保護フィルム', 'フィルム', '充電器', 'ケーブル', 'モバイルバッテリー', 'イヤホン', 'ヘッドホン', 'スピーカー',
      '時計', '腕時計', 'スマートウォッチ',
      // ペット・キャラクター・玩具・メディア・食品サンプル・消しゴム
      'ultra umai', 'umai series', 'スクイーズ', '消しゴム', 'けしごむ', 'ケシゴム', 'おもちゃ', '玩具',
      'カプセルトイ', 'ガチャガチャ', 'ガチャ', 'がちゃ', 'カプセル', 'フィギュア', 'マスコット', 'プラモデル',
      '食品サンプル', 'フェイクフード', 'フェイクスイーツ', 'サンプル', '模型', 'ミニチュア', '置物', 'オブジェ', 'ドールハウス',
      'ドッグフード', 'キャットフード', 'ペットフード', '犬用', '猫用', 'ペット', '餌', 'えさ',
      'ぬいぐるみ', 'トレカ', 'カード', '本', '雑誌', 'コミック', 'マンガ',
      'cd', 'dvd', 'ブルーレイ', 'blu-ray', 'ゲーム', 'サンリオ', 'ポムポムプリン', 'シナモロール', 'クロミ', 'マイメロ',
      'ハローキティ', 'ちいかわ'
    ];

    // 非食品を扱うショップ名の除外リスト（看板屋、手芸屋、アクセ屋、印刷屋など）
    const nonFoodShopKeywords = ['サインモール', '看板', 'パーツ', 'ハンドメイド', 'アクセ', 'lucca', 'アパレル', 'コスメ', '手芸', 'ナカムラ', 'グッズプロ', '生地', 'ファブリック', 'ノベルティ'];

    items = items.filter((item: any) => {
      const text = `${item.itemName} ${item.itemCaption || ''}`.toLowerCase();
      const shop = (item.shopName || '').toLowerCase();
      
      // 非食品キーワードが含まれていたら除外
      if (nonFoodKeywords.some(kw => text.includes(kw.toLowerCase()))) {
        return false;
      }

      // ショップ名が看板屋・手芸屋などの場合除外
      if (nonFoodShopKeywords.some(kw => shop.includes(kw.toLowerCase()))) {
        return false;
      }

      return true;
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
