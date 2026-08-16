export type AxisCode = 'S' | 'Y' | 'T' | 'H' | 'F' | 'C' | 'J' | 'W';

export interface SnackTypeInfo {
  id: string; // e.g. "STFJ"
  code: string; // "STFJ"
  title: string; // e.g. "ふんわり和み和スイーツタイプ"
  snackCategory: string; // e.g. "もちもち大福＆焼きどら焼き"
  catchphrase: string; // e.g. "やさしい甘さと柔らかな食感にほっと癒やされる和の精霊"
  description: string;
  personalityTraits: string[];
  bestPairingTypeId: string;
  recommendedKeywords: string[];
  color: {
    bg: string;
    badge: string;
    border: string;
    accent: string;
  };
  characterName: string;
  characterEmoji: string;
}

export type QuizMode = 'self' | 'gift';

export interface QuizAnswers {
  mode: QuizMode;
  isQuickMatch?: boolean;
  // Step 1: 味 (0 = 超しょっぱい, 100 = 超甘い)
  sweetValue: number;
  // Step 2: 和洋 (0 = 超和風, 100 = 超洋風)
  japaneseValue: number;
  // Step 3: 温度/焼き (0 = 常温・温か焼き菓子, 100 = ひんやり冷製)
  freshValue: number;
  // Step 4: 食感
  textures: string[]; // ['ふわふわ', 'もっちり', 'サクサク', ...]
  // Step 5: 好きなフレーバー
  flavors: string[]; // ['チョコ', '抹茶', 'いちご', ...]
  customFlavor?: string; // 自由入力の好きな味・お菓子名（最優先）
  // Step 6: 苦手なもの
  dislikes: string[]; // ['シナモン', 'ミント', ...]
  customDislike: string;
  // Step 7: 予算
  budget: '500' | '1000' | '3000' | '5000' | '10000' | 'any';
  // Step 7: 気分/シーン (自分用) または ギフト相手/雰囲気
  mood: string; // 'のんびり', 'ご褒美', '元気', '夜食'
  giftTarget?: string; // '子ども', '大人', '年配', '友人'
  giftVibe?: string; // 'かわいい', '高級感', '和風', 'シンプル'
}

export interface RakutenItem {
  itemName: string;
  itemPrice: number;
  itemUrl: string;
  affiliateUrl: string;
  imageUrl: string;
  itemCaption?: string;
  reviewAverage: number;
  reviewCount: number;
  shopName: string;
}

export interface SnackSearchResponse {
  items: RakutenItem[];
  keywordUsed: string;
  totalCount: number;
}
