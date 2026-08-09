import React from 'react';
import characterMochiImg from '../assets/images/snack_character_mochi_1786022937215.jpg';
import characterChiffonImg from '../assets/images/snack_character_chiffon_1786022949723.jpg';
import characterSenbeiImg from '../assets/images/snack_character_senbei_1786022975261.jpg';
import characterKarintoImg from '../assets/images/snack_character_karinto_1786023212987.jpg';

import characterJellyImg from '../assets/images/snack_jelly_1786024961852.jpg';
import characterPuddingImg from '../assets/images/snack_pudding_1786024973433.jpg';
import characterCookieImg from '../assets/images/snack_cookie_1786024984002.jpg';
import characterMonakaImg from '../assets/images/snack_monaka_1786024992697.jpg';
import characterPenguinImg from '../assets/images/snack_penguin_1786025004397.jpg';
import characterShoyuMochiImg from '../assets/images/snack_shoyu_mochi_1786025057521.jpg';
import characterCheeseImg from '../assets/images/snack_cheese_1786025024810.jpg';
import characterTofuImg from '../assets/images/snack_tofu_1786025037880.jpg';
import characterNightCheeseImg from '../assets/images/snack_night_cheese_1786025068716.jpg';
import characterPotatoBaronImg from '../assets/images/snack_potato_baron_1786025077742.jpg';
import characterKakipeaImg from '../assets/images/snack_kakipea_1786025090495.jpg';
import characterJerkyImg from '../assets/images/snack_jerky_1786025103215.jpg';

interface SnackCharacterAvatarProps {
  typeId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// AI生成イラスト画像マップ (全16タイプ対応)
const AI_CHARACTER_IMAGES: Record<string, string> = {
  // --- Sweet (S) ---
  STFW: characterChiffonImg,  // ふわシフォン王子
  STCJ: characterJellyImg,    // みずたまゼリー
  STCW: characterPuddingImg,  // とろりプリンちゃん
  SHFW: characterCookieImg,   // ザクザククッキー君
  SHCJ: characterMonakaImg,   // パリもなか爺
  SHCW: characterPenguinImg,  // ザクザクアイスペンギン
  STFJ: characterMochiImg,    // もちあんこちゃん
  SHFJ: characterKarintoImg,  // カリッとかりん
  
  // --- Salty (Y) ---
  YTFW: characterCheeseImg,   // チーズソムリエ
  YTCJ: characterTofuImg,     // ごまとうふさん
  YTCW: characterNightCheeseImg, // ナイトチーズキャット
  YHFW: characterPotatoBaronImg, // ポテチくん
  YHCJ: characterKakipeaImg,  // クールエダマメ(今回は柿ピー)
  YHCW: characterJerkyImg,    // フローズンスパイス(今回はジャーキー)
  YTFJ: characterShoyuMochiImg, // しょうゆ餅マスター
  YHFJ: characterSenbeiImg,   // バリバリせんべい大将
};

export const SnackCharacterAvatar: React.FC<SnackCharacterAvatarProps> = ({
  typeId,
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  const dimension = sizeMap[size];
  const aiGeneratedImg = AI_CHARACTER_IMAGES[typeId];

  if (aiGeneratedImg) {
    return (
      <div className={`relative inline-flex items-center justify-center ${dimension} ${className} overflow-hidden rounded-2xl border-2 border-amber-200/80 shadow-md bg-white p-0.5`} id={`character-avatar-${typeId}`}>
        <img
          src={aiGeneratedImg}
          alt={`Character ${typeId}`}
          className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center justify-center ${dimension} ${className} overflow-hidden rounded-2xl`} id={`character-avatar-${typeId}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
        {/* 背景のキラキラオーラ */}
        <circle cx="60" cy="60" r="54" fill="currentColor" className="text-white/60" />

        {/* --- 16タイプ別キャラクタービジュアル --- */}
        {/* 1. STFJ: もちあんこちゃん 🍡 */}
        {typeId === 'STFJ' && (
          <g id="char-STFJ">
            {/* 体 (大福ベース) */}
            <ellipse cx="60" cy="68" rx="38" ry="32" fill="#fbcfe8" />
            <ellipse cx="60" cy="72" rx="28" ry="22" fill="#ffffff" />
            {/* 🍡 串だんご頭飾り */}
            <circle cx="60" cy="22" r="9" fill="#86efac" />
            <circle cx="60" cy="36" r="9" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2" />
            <circle cx="60" cy="50" r="9" fill="#f472b6" />
            <line x1="60" y1="12" x2="60" y2="60" stroke="#d97706" strokeWidth="2.5" />
            {/* ほっぺ */}
            <circle cx="42" cy="68" r="6" fill="#f472b6" opacity="0.6" />
            <circle cx="78" cy="68" r="6" fill="#f472b6" opacity="0.6" />
            {/* 目・口 */}
            <ellipse cx="48" cy="62" rx="3.5" ry="4" fill="#374151" />
            <ellipse cx="72" cy="62" rx="3.5" ry="4" fill="#374151" />
            <path d="M54 68 Q60 74 66 68" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* 2. STFW: ふわシフォン王子 🧁 */}
        {typeId === 'STFW' && (
          <g id="char-STFW">
            {/* 体 (ケーキベース) */}
            <path d="M 30 90 L 38 52 C 38 48 82 48 82 52 L 90 90 Z" fill="#fef08a" />
            <path d="M 28 50 C 35 40 85 40 92 50 C 92 60 28 60 28 50 Z" fill="#fde047" />
            {/* クリームホイップ */}
            <path d="M 40 45 Q 60 25 80 45 Q 60 38 40 45" fill="#ffffff" />
            {/* 王冠 */}
            <polygon points="50,28 55,16 60,26 65,16 70,28" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            {/* 表情 */}
            <circle cx="48" cy="62" r="3.5" fill="#78350f" />
            <circle cx="72" cy="62" r="3.5" fill="#78350f" />
            <circle cx="42" cy="66" r="5" fill="#f472b6" opacity="0.5" />
            <circle cx="78" cy="66" r="5" fill="#f472b6" opacity="0.5" />
            <path d="M 55 68 Q 60 72 65 68" stroke="#78350f" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* 3. STCJ: みずたまゼリー 🎐 */}
        {typeId === 'STCJ' && (
          <g id="char-STCJ">
            {/* ゼリーボディ */}
            <path d="M 30 85 Q 25 45 60 40 Q 95 45 90 85 Z" fill="#99f6e4" opacity="0.85" />
            <path d="M 38 85 Q 35 52 60 48 Q 85 52 82 85 Z" fill="#ccfbf1" opacity="0.9" />
            {/* 水玉 */}
            <circle cx="45" cy="55" r="4" fill="#38bdf8" opacity="0.7" />
            <circle cx="75" cy="60" r="5" fill="#f472b6" opacity="0.7" />
            <circle cx="60" cy="78" r="3.5" fill="#facc15" opacity="0.7" />
            {/* 風鈴短冊 */}
            <rect x="58" y="16" width="4" height="20" fill="#38bdf8" rx="2" />
            <path d="M 50 36 C 50 30 70 30 70 36 Z" fill="#f43f5e" />
            {/* ニッコリ目 */}
            <path d="M 46 62 Q 50 56 54 62" stroke="#0f766e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 66 62 Q 70 56 74 62" stroke="#0f766e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <ellipse cx="60" cy="68" rx="3" ry="2" fill="#0f766e" />
          </g>
        )}

        {/* 4. STCW: とろりプリンちゃん 🍮 */}
        {typeId === 'STCW' && (
          <g id="char-STCW">
            {/* プリン本体 */}
            <path d="M 32 90 L 40 46 Q 60 42 80 46 L 88 90 Z" fill="#fef08a" />
            {/* カラメルソース */}
            <path d="M 38 48 C 45 42 75 42 82 48 C 82 58 75 56 70 54 C 65 52 60 58 52 54 C 45 50 38 56 38 48 Z" fill="#78350f" />
            {/* さくらんぼ */}
            <circle cx="60" cy="30" r="8" fill="#f43f5e" />
            <path d="M 60 30 Q 68 18 72 20" stroke="#15803d" strokeWidth="2" fill="none" />
            {/* キラキラおめめ */}
            <circle cx="48" cy="65" r="4.5" fill="#374151" />
            <circle cx="72" cy="65" r="4.5" fill="#374151" />
            <circle cx="46.5" cy="63.5" r="1.5" fill="#ffffff" />
            <circle cx="70.5" cy="63.5" r="1.5" fill="#ffffff" />
            <circle cx="42" cy="70" r="5" fill="#fb7185" opacity="0.6" />
            <circle cx="78" cy="70" r="5" fill="#fb7185" opacity="0.6" />
            <path d="M 56 72 Q 60 76 64 72" stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* 5. SHFJ: カリッとかりん 🍘 */}
        {typeId === 'SHFJ' && (
          <g id="char-SHFJ">
            {/* かりんとうボディ */}
            <rect x="42" y="32" width="36" height="64" rx="18" fill="#78350f" transform="rotate(-10 60 64)" />
            {/* 白砂糖の結晶グラデ */}
            <circle cx="50" cy="45" r="3" fill="#ffffff" opacity="0.8" />
            <circle cx="65" cy="60" r="4" fill="#ffffff" opacity="0.8" />
            <circle cx="54" cy="78" r="2.5" fill="#ffffff" opacity="0.8" />
            {/* ハチマキ */}
            <rect x="36" y="42" width="46" height="8" fill="#ef4444" rx="2" transform="rotate(-10 60 64)" />
            {/* 表情 (力強い目) */}
            <line x1="46" y1="56" x2="54" y2="58" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="66" y1="58" x2="74" y2="56" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="62" r="3" fill="#ffffff" />
            <circle cx="70" cy="62" r="3" fill="#ffffff" />
            <path d="M 56 70 Q 60 66 64 70" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* 6. SHFW: ビスケットバニー 🍪 */}
        {typeId === 'SHFW' && (
          <g id="char-SHFW">
            {/* うさ耳 */}
            <ellipse cx="45" cy="28" rx="8" ry="20" fill="#fed7aa" transform="rotate(-12 45 28)" />
            <ellipse cx="75" cy="28" rx="8" ry="20" fill="#fed7aa" transform="rotate(12 75 28)" />
            {/* クッキーボディ */}
            <rect x="32" y="44" width="56" height="50" rx="16" fill="#fde047" stroke="#d97706" strokeWidth="3" strokeDasharray="4 3" />
            {/* ドット穴 */}
            <circle cx="42" cy="54" r="2" fill="#b45309" />
            <circle cx="78" cy="54" r="2" fill="#b45309" />
            <circle cx="42" cy="84" r="2" fill="#b45309" />
            <circle cx="78" cy="84" r="2" fill="#b45309" />
            {/* 顔 */}
            <circle cx="48" cy="66" r="3.5" fill="#78350f" />
            <circle cx="72" cy="66" r="3.5" fill="#78350f" />
            <circle cx="42" cy="70" r="4.5" fill="#f472b6" opacity="0.6" />
            <circle cx="78" cy="70" r="4.5" fill="#f472b6" opacity="0.6" />
            <path d="M 56 70 Q 60 75 64 70" stroke="#78350f" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 7. SHCJ: ひんやり和パフェ 🍨 */}
        {typeId === 'SHCJ' && (
          <g id="char-SHCJ">
            {/* グラス */}
            <path d="M 38 50 L 46 95 L 74 95 L 82 50 Z" fill="#e0f2fe" opacity="0.8" stroke="#38bdf8" strokeWidth="2" />
            {/* 抹茶＆アイス層 */}
            <path d="M 40 55 C 50 48 70 48 80 55 C 80 68 40 68 40 55 Z" fill="#16a34a" />
            <path d="M 42 68 C 50 62 70 62 78 68 C 78 82 42 82 42 68 Z" fill="#fef08a" />
            {/* ソフト盛り上がり */}
            <circle cx="60" cy="40" r="16" fill="#ffffff" />
            <circle cx="60" cy="32" r="10" fill="#ffffff" />
            {/* 抹茶リボン */}
            <path d="M 52 32 Q 60 20 68 32" stroke="#15803d" strokeWidth="3" fill="none" />
            {/* 顔 */}
            <circle cx="52" cy="74" r="3" fill="#166534" />
            <circle cx="68" cy="74" r="3" fill="#166534" />
            <path d="M 57 78 Q 60 82 63 78" stroke="#166534" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 8. SHCW: チョコモナカ男爵 🍫 */}
        {typeId === 'SHCW' && (
          <g id="char-SHCW">
            {/* モナカ皮 */}
            <rect x="30" y="42" width="60" height="52" rx="10" fill="#fcd34d" stroke="#b45309" strokeWidth="2.5" />
            <line x1="30" y1="68" x2="90" y2="68" stroke="#b45309" strokeWidth="2" />
            {/* チョコチラ見え */}
            <rect x="34" y="66" width="52" height="6" fill="#451a03" />
            {/* シルクハット */}
            <rect x="42" y="18" width="36" height="22" fill="#292524" rx="3" />
            <rect x="34" y="36" width="52" height="6" fill="#292524" rx="2" />
            <rect x="42" y="32" width="36" height="4" fill="#dc2626" />
            {/* 男爵ひげ＆目 */}
            <circle cx="48" cy="54" r="3.5" fill="#292524" />
            <circle cx="72" cy="54" r="3.5" fill="#292524" />
            <path d="M 48 60 Q 54 64 60 60 Q 66 64 72 60" stroke="#292524" strokeWidth="2.5" fill="none" />
          </g>
        )}

        {/* 9. YTFW: ぽてちナイト 🥔 */}
        {typeId === 'YTFW' && (
          <g id="char-YTFW">
            {/* ポテトチップス身体 (波型) */}
            <ellipse cx="60" cy="65" rx="36" ry="28" fill="#fde047" stroke="#ca8a04" strokeWidth="2" />
            <path d="M 28 65 Q 44 60 60 65 Q 76 70 92 65" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
            {/* ナイト兜 */}
            <path d="M 38 45 L 60 20 L 82 45 Z" fill="#94a3b8" />
            <rect x="42" y="40" width="36" height="8" fill="#64748b" rx="2" />
            <line x1="60" y1="20" x2="60" y2="10" stroke="#ef4444" strokeWidth="3" />
            <circle cx="60" cy="10" r="4" fill="#ef4444" />
            {/* 目 */}
            <circle cx="48" cy="60" r="3.5" fill="#1e293b" />
            <circle cx="72" cy="60" r="3.5" fill="#1e293b" />
            <path d="M 55 68 Q 60 72 65 68" stroke="#1e293b" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 10. YTCJ: さくさくポップコーン 🍿 */}
        {typeId === 'YTCJ' && (
          <g id="char-YTCJ">
            {/* 赤白カップ */}
            <polygon points="36,52 42,94 78,94 84,52" fill="#ef4444" />
            <polygon points="44,52 48,94 56,94 52,52" fill="#ffffff" />
            <polygon points="68,52 72,94 80,94 76,52" fill="#ffffff" />
            {/* ポップコーンの爆発 */}
            <circle cx="44" cy="45" r="10" fill="#fef08a" />
            <circle cx="60" cy="38" r="12" fill="#fef08a" />
            <circle cx="76" cy="45" r="10" fill="#fef08a" />
            <circle cx="52" cy="48" r="9" fill="#ffffff" />
            <circle cx="68" cy="48" r="9" fill="#ffffff" />
            {/* 顔 */}
            <circle cx="50" cy="68" r="3" fill="#ffffff" />
            <circle cx="70" cy="68" r="3" fill="#ffffff" />
            <path d="M 56 76 Q 60 80 64 76" stroke="#ffffff" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 11. YTCJ: パリッとせんべい師匠 🍘 */}
        {typeId === 'YTCJ' && (
          <g id="char-YTCJ">
            {/* 煎餅本体 */}
            <circle cx="60" cy="64" r="32" fill="#d97706" stroke="#78350f" strokeWidth="3" />
            {/* 海苔 */}
            <rect x="46" y="58" width="28" height="38" fill="#1e293b" rx="4" />
            {/* 眉毛＆ひげ */}
            <path d="M 40 48 Q 48 42 54 48" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 66 48 Q 72 42 80 48" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* 目 */}
            <line x1="44" y1="54" x2="52" y2="54" stroke="#ffffff" strokeWidth="2.5" />
            <line x1="68" y1="54" x2="76" y2="54" stroke="#ffffff" strokeWidth="2.5" />
          </g>
        )}

        {/* 12. YTCW: クリスピーナッツ 🥜 */}
        {typeId === 'YTCW' && (
          <g id="char-YTCW">
            {/* ピーナッツシルエット */}
            <path d="M 60 22 C 78 22 78 50 70 60 C 80 70 78 98 60 98 C 42 98 40 70 50 60 C 42 50 42 22 60 22 Z" fill="#fde047" stroke="#ca8a04" strokeWidth="2.5" />
            {/* 網目模様 */}
            <path d="M 48 35 Q 60 40 72 35 M 46 80 Q 60 85 74 80" stroke="#ca8a04" strokeWidth="1.5" fill="none" />
            {/* インテリメガネ */}
            <circle cx="50" cy="45" r="7" stroke="#1e293b" strokeWidth="2" fill="none" />
            <circle cx="70" cy="45" r="7" stroke="#1e293b" strokeWidth="2" fill="none" />
            <line x1="57" y1="45" x2="63" y2="45" stroke="#1e293b" strokeWidth="2" />
            <circle cx="50" cy="45" r="2" fill="#1e293b" />
            <circle cx="70" cy="45" r="2" fill="#1e293b" />
            <path d="M 56 54 Q 60 58 64 54" stroke="#ca8a04" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 13. YHFW: めんべいちゃん 🍘 */}
        {typeId === 'YHFW' && (
          <g id="char-YHFW">
            {/* めんべいせんべい */}
            <ellipse cx="60" cy="65" rx="36" ry="28" fill="#fca5a5" stroke="#dc2626" strokeWidth="2.5" />
            {/* 明太子つぶつぶ */}
            <circle cx="45" cy="55" r="2" fill="#dc2626" />
            <circle cx="75" cy="58" r="2" fill="#dc2626" />
            <circle cx="62" cy="78" r="2.5" fill="#dc2626" />
            {/* 赤い大きなリボン */}
            <path d="M 40 32 C 40 22 55 30 60 35 C 65 30 80 22 80 32 C 80 42 65 38 60 38 C 55 38 40 42 40 32 Z" fill="#ef4444" />
            <circle cx="60" cy="36" r="4" fill="#b91c1c" />
            {/* ウィンク顔 */}
            <path d="M 44 62 Q 48 56 52 62" stroke="#7f1d1d" strokeWidth="2.5" fill="none" />
            <circle cx="70" cy="62" r="3.5" fill="#7f1d1d" />
            <path d="M 56 68 Q 60 74 64 68" stroke="#7f1d1d" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 14. YHCJ: ゲキカラチップス 🌶️ */}
        {typeId === 'YHCJ' && (
          <g id="char-YHCJ">
            {/* 激辛赤チップス */}
            <polygon points="60,25 25,85 95,85" fill="#ef4444" stroke="#991b1b" strokeWidth="2.5" />
            {/* 炎のツノ */}
            <path d="M 52 25 Q 48 10 56 16 Q 60 8 68 25" fill="#f97316" />
            {/* 辛い顔 (サングラス) */}
            <polygon points="40,50 56,50 52,60 44,60" fill="#1e293b" />
            <polygon points="64,50 80,50 76,60 68,60" fill="#1e293b" />
            <line x1="56" y1="52" x2="64" y2="52" stroke="#1e293b" strokeWidth="2" />
            <path d="M 52 72 Q 60 66 68 72" stroke="#ffffff" strokeWidth="2.5" fill="none" />
          </g>
        )}

        {/* 15. YHCJ: スモークチーズ男爵 🧀 */}
        {typeId === 'YHCJ' && (
          <g id="char-YHCJ">
            {/* チーズ三角形 */}
            <polygon points="60,30 28,88 92,88" fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" />
            {/* チーズの穴 */}
            <circle cx="45" cy="65" r="5" fill="#eab308" />
            <circle cx="70" cy="72" r="7" fill="#eab308" />
            <circle cx="58" cy="48" r="4" fill="#eab308" />
            {/* スモーク煙 */}
            <path d="M 32 38 Q 26 28 34 20" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="2 2" />
            <path d="M 88 38 Q 94 28 86 20" stroke="#94a3b8" strokeWidth="2" fill="none" strokeDasharray="2 2" />
            {/* パイプとダンディ顔 */}
            <circle cx="48" cy="58" r="3" fill="#451a03" />
            <circle cx="72" cy="58" r="3" fill="#451a03" />
            <path d="M 52 68 L 68 68 L 74 62" stroke="#451a03" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* 16. YHCW: おさかなマリン 🐟 */}
        {typeId === 'YHCW' && (
          <g id="char-YHCW">
            {/* 小魚ボディ */}
            <ellipse cx="60" cy="65" rx="34" ry="22" fill="#38bdf8" />
            {/* 尾ヒレ */}
            <polygon points="26,65 10,50 10,80" fill="#0284c7" />
            {/* 水兵帽子 */}
            <ellipse cx="60" cy="38" rx="22" ry="8" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
            <path d="M 44 38 L 46 26 C 46 22 74 22 74 26 L 76 38 Z" fill="#ffffff" />
            <rect x="44" y="34" width="32" height="4" fill="#0284c7" />
            {/* ぱっちり目 */}
            <circle cx="74" cy="60" r="5" fill="#ffffff" />
            <circle cx="75" cy="60" r="3" fill="#0f172a" />
            <path d="M 82 66 Q 86 68 82 70" stroke="#0284c7" strokeWidth="2" fill="none" />
          </g>
        )}

        {/* デフォルトフォールバック */}
        {!['STFJ','STFW','STCJ','STCW','SHFJ','SHFW','SHCJ','SHCW','YTFW','YTFJ','YTCJ','YTCW','YHFW','YHFJ','YHCJ','YHCW'].includes(typeId) && (
          <g>
            <circle cx="60" cy="60" r="35" fill="#f472b6" />
            <circle cx="45" cy="52" r="4" fill="#ffffff" />
            <circle cx="75" cy="52" r="4" fill="#ffffff" />
            <path d="M 52 68 Q 60 76 68 68" stroke="#ffffff" strokeWidth="3" fill="none" />
          </g>
        )}
      </svg>
    </div>
  );
};
