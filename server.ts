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

    // 複数フレーバーを入れるとAND検索になってヒットしないため、フレーバーを付加して検索
    let flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    
    let data = null;
    let fallbackNeeded = false;
    let searchKeyword = keyword;
    
    // フレーバーがある場合はフレーバーを含めて検索、ダメなら単独で検索
    for (let i = flavors.length; i >= 0; i--) {
      const currentFlavors = flavors.slice(0, i);
      searchKeyword = currentFlavors.length > 0 ? `${currentFlavors.join(' ')} ${keyword}` : keyword;
      
      console.log(`🛍️ 楽天商品検索リクエスト: keyword="${searchKeyword}", price=${minPrice}-${maxPrice}, dislikes=[${dislikes.join(',')}]`);

      const params = new URLSearchParams({
        applicationId: RAKUTEN_APP_ID,
        affiliateId: RAKUTEN_AFFILIATE_ID,
        keyword: searchKeyword,
        hits: '30',
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

      const response = await fetch(apiUrl, { headers });

      if (!response.ok) {
        console.warn(`⚠️ 楽天APIエラー (${response.status})`);
        fallbackNeeded = true;
        break;
      }

      data = await response.json();
      if (data && data.Items && data.Items.length > 0) {
        fallbackNeeded = false;
        break;
      }
    }

    if (fallbackNeeded || !data || !data.Items || data.Items.length === 0) {
      console.warn('⚠️ 楽天APIから取得できなかったため、フォールバックデータを返却します。');
      const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, flavors, dislikes);
      return res.json({ items: fallbackItems, keywordUsed: 'おすすめのおやつ', totalCount: fallbackItems.length });
    }

    let items = data.Items.map((entry: any) => formatRakutenItem(entry.Item));

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
        const text = `${item.itemName} ${item.itemCaption}`.toLowerCase();
        return !normDislikes.some((dislike) => text.includes(dislike));
      });
    }

    // 3. フレーバー優先度付け & スコアリング + ランダム性追加
    if (flavors.length > 0) {
      items.sort((a: any, b: any) => {
        const aText = `${a.itemName} ${a.itemCaption}`;
        const bText = `${b.itemName} ${b.itemCaption}`;
        
        let aMatchCount = 0;
        let bMatchCount = 0;
        
        flavors.forEach(f => {
          if (aText.includes(f)) aMatchCount++;
          if (bText.includes(f)) bMatchCount++;
        });

        // マッチ数が違う場合はフレーバー重視
        if (bMatchCount !== aMatchCount) {
          return bMatchCount - aMatchCount;
        }
        // マッチ数が同じ場合は若干ランダムにシャッフル
        return Math.random() - 0.5;
      });
    } else {
      // フレーバー指定が無い場合はランダムにシャッフルして多様な商品を表示
      items = items.sort(() => Math.random() - 0.5);
    }

    // 上位6件に絞り込み
    const finalItems = items.slice(0, 6);

    // NGワードや予算弾きで0件になってしまった場合のフォールバック
    if (finalItems.length === 0) {
      const fallbackItems = getFallbackItems(typeCode, minPrice, maxPrice, flavors, dislikes);
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
