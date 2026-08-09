import type { VercelRequest, VercelResponse } from '@vercel/node';

const RAKUTEN_APP_ID = process.env.RAKUTEN_APP_ID || '52e88efe-2652-42d6-8a0f-8d6d5861ff23';
const RAKUTEN_ACCESS_KEY = process.env.RAKUTEN_ACCESS_KEY || '';
const RAKUTEN_AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || '3d94ea21.0d257908.3d94ea22.0ed11c6e';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const keyword = (req.query.keyword as string) || 'スイーツ ギフト';
    const minPrice = req.query.minPrice ? Number(req.query.minPrice) : undefined;
    const maxPrice = req.query.maxPrice ? Number(req.query.maxPrice) : undefined;
    const dislikes = req.query.dislikes ? (req.query.dislikes as string).split(',').filter(Boolean) : [];
    
    let flavors = req.query.flavors ? (req.query.flavors as string).split(',').filter(Boolean) : [];
    
    let data = null;
    let fallbackNeeded = false;
    let searchKeyword = keyword;
    
    console.log('--- Vercel API /api/rakuten/search ---');
    console.log('APP_ID Set:', !!RAKUTEN_APP_ID);
    console.log('ACCESS_KEY Set:', !!RAKUTEN_ACCESS_KEY);
    console.log('AFFILIATE_ID Set:', !!RAKUTEN_AFFILIATE_ID);
    
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

      const response = await fetch(apiUrl, { headers });

      if (!response.ok) {
        const errorText = await response.text();
      
        console.error(
         `⚠️ 楽天APIエラー (${response.status}): ${errorText}`
        );
      
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
      console.warn('⚠️ 楽天APIから取得できなかったため、空配列を返却します。');
      return res.status(200).json({ items: [], keywordUsed: searchKeyword, totalCount: 0 });
    }

    let items = data.Items.map((entry: any) => formatRakutenItem(entry.Item));
    if (dislikes.length > 0) {
      items = items.filter((item: any) => {
        const text = `${item.itemName} ${item.itemCaption}`.toLowerCase();
        return !dislikes.some((dislike) => text.includes(dislike.toLowerCase().trim()));
      });
    }

    const finalItems = items.slice(0, 6);
    if (finalItems.length === 0) {
      return res.status(200).json({ items: [], keywordUsed: searchKeyword, totalCount: 0 });
    }

    return res.status(200).json({
      items: finalItems,
      keywordUsed: searchKeyword,
      totalCount: finalItems.length,
    });
  } catch (error: any) {
    console.error('❌ 楽天検索処理エラー:', error);
    return res.status(500).json({ error: 'Internal Server Error', items: [] });
  }
}
