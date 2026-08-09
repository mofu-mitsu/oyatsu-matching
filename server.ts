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
    const keyword = (req.query.keyword as string) || 'スイーツ ギフト';
    const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
    const dislikes = req.query.dislikes ? (req.query.dislikes as string).split(',').filter(Boolean) : [];
    
    // typeCode for fallback
    const typeCode = req.query.typeCode as string || 'STFW';

    // 複数フレーバーを入れるとAND検索になってヒットしないため、先頭の1つだけを利用する... ではなく、指定されたものを順番に削ってリトライする
    let flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    
    let data = null;
    let fallbackNeeded = false;
    let searchKeyword = keyword;
    
    // フレーバーを順番に削りながら検索
    for (let i = flavors.length; i >= 0; i--) {
      const currentFlavors = flavors.slice(0, i);
      searchKeyword = currentFlavors.length > 0 ? `${currentFlavors.join(' ')} ${keyword}` : keyword;
      
      console.log(`🛍️ 楽天商品検索リクエスト: keyword="${searchKeyword}", price=${minPrice}-${maxPrice}, dislikes=[${dislikes.join(',')}]`);

      const params = new URLSearchParams({
        applicationId: RAKUTEN_APP_ID,
        affiliateId: RAKUTEN_AFFILIATE_ID,
        keyword: searchKeyword,
        hits: '12',
        format: 'json',
        sort: '+reviewAverage',
      });

      if (minPrice && minPrice > 0) params.append('minPrice', String(minPrice));
      if (maxPrice && maxPrice > 0 && maxPrice < 999999) params.append('maxPrice', String(maxPrice));

      const apiUrl = `https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701?${params.toString()}`;

      const headers: any = { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Referer': req.headers.referer || 'https://oyatsu-matching.vercel.app/'
      };
      if (RAKUTEN_ACCESS_KEY) {
        headers['accessKey'] = RAKUTEN_ACCESS_KEY;
      }

      const response = await fetch(apiUrl, {
        headers,
      });

      if (!response.ok) {
        console.warn(`⚠️ 楽天APIエラー (${response.status})`);
        // API自体がエラーを返した場合は、リトライしても無駄な可能性が高いのでループを抜ける
        fallbackNeeded = true;
        break;
      }

      data = await response.json();
      if (data && data.Items && data.Items.length > 0) {
        // 見つかったらループ終了
        fallbackNeeded = false;
        break;
      }
      // 見つからなかったら次のループ（フレーバーを1つ減らす）へ
    }

    if (fallbackNeeded || !data || !data.Items || data.Items.length === 0) {
      console.warn('⚠️ 楽天APIから取得できなかったため、フォールバックデータを返却します。');
      // 最終フォールバック (ローカルのファイルから抽出)
      const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [], dislikes);
      return res.json({ items: fallbackItems, keywordUsed: 'おすすめのおやつ', totalCount: fallbackItems.length });
    }

    // NGキーワードフィルタリング
    let items = data.Items.map((entry: any) => formatRakutenItem(entry.Item));

    if (dislikes.length > 0) {
      items = items.filter((item: any) => {
        const text = `${item.itemName} ${item.itemCaption}`.toLowerCase();
        return !dislikes.some((dislike) => text.includes(dislike.toLowerCase().trim()));
      });
    }

    // 上位6件に絞り込み
    const finalItems = items.slice(0, 6);

    // NGワード弾いた結果0件になってしまった場合のフォールバック
    if (finalItems.length === 0) {
      const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [], dislikes);
      return res.json({ items: fallbackItems, keywordUsed: 'おすすめのおやつ', totalCount: fallbackItems.length });
    }

    res.json({
      items: finalItems,
      keywordUsed: searchKeyword,
      totalCount: finalItems.length,
    });
  } catch (error: any) {
    console.error('❌ 楽天検索処理エラー:', error);
    // エラー時はフォールバックデータを返す
    const typeCode = req.query.typeCode as string || 'STFW';
    const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
    const flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    const dislikes = req.query.dislikes ? (req.query.dislikes as string).split(',').filter(Boolean) : [];
    const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, flavors, dislikes);
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
