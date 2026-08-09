import React from 'react';

interface MofumofuMascotProps {
  message?: string;
  mood?: 'jururi' | 'stare' | 'happy' | 'thinking';
  character?: 'hamster' | 'rabbit' | 'bear';
  size?: 'sm' | 'md' | 'lg';
}

export const MofumofuMascot: React.FC<MofumofuMascotProps> = ({
  message = 'じゅるり……🤤 ぼくも一口食べたい……',
  mood = 'jururi',
  character = 'hamster',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  }[size];

  return (
    <div className="flex items-center gap-3 bg-amber-50/90 border border-amber-200/80 rounded-3xl p-3 sm:p-4 shadow-sm relative overflow-hidden" id="mofumofu-mascot-box">
      {/* 背景のほわほわ装飾 */}
      <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-amber-200/30 rounded-full blur-xl pointer-events-none" />

      {/* SVG マスコットキャラ */}
      <div className={`relative flex-shrink-0 ${sizeClasses} animate-bounce duration-1000`} id="mofumofu-svg-container">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* 体・耳 */}
          {character === 'hamster' && (
            <g>
              {/* 耳 (左/右) */}
              <circle cx="28" cy="28" r="12" fill="#fcd34d" />
              <circle cx="28" cy="28" r="7" fill="#f472b6" />
              <circle cx="72" cy="28" r="12" fill="#fcd34d" />
              <circle cx="72" cy="28" r="7" fill="#f472b6" />
              {/* 体 */}
              <ellipse cx="50" cy="58" rx="38" ry="32" fill="#fbbf24" />
              <ellipse cx="50" cy="62" rx="26" ry="22" fill="#fffbeb" />
              {/* 手 (左右) */}
              <circle cx="30" cy="68" r="6" fill="#fcd34d" />
              <circle cx="70" cy="68" r="6" fill="#fcd34d" />
            </g>
          )}

          {character === 'rabbit' && (
            <g>
              {/* うさぎ耳 */}
              <ellipse cx="36" cy="22" rx="8" ry="22" fill="#fbcfe8" transform="rotate(-10 36 22)" />
              <ellipse cx="36" cy="22" rx="4" ry="16" fill="#f472b6" transform="rotate(-10 36 22)" />
              <ellipse cx="64" cy="22" rx="8" ry="22" fill="#fbcfe8" transform="rotate(10 64 22)" />
              <ellipse cx="64" cy="22" rx="4" ry="16" fill="#f472b6" transform="rotate(10 64 22)" />
              {/* 体 */}
              <ellipse cx="50" cy="62" rx="36" ry="28" fill="#fce7f3" />
              <ellipse cx="50" cy="66" rx="24" ry="20" fill="#ffffff" />
            </g>
          )}

          {/* ほっぺ */}
          <circle cx="30" cy="55" r="7" fill="#f472b6" opacity="0.6" />
          <circle cx="70" cy="55" r="7" fill="#f472b6" opacity="0.6" />

          {/* 目 */}
          {mood === 'stare' ? (
            <g>
              {/* キラキラおめめ */}
              <circle cx="38" cy="48" r="7" fill="#1e293b" />
              <circle cx="62" cy="48" r="7" fill="#1e293b" />
              <circle cx="36" cy="46" r="2.5" fill="#ffffff" />
              <circle cx="60" cy="46" r="2.5" fill="#ffffff" />
              <circle cx="40" cy="50" r="1.2" fill="#ffffff" />
              <circle cx="64" cy="50" r="1.2" fill="#ffffff" />
            </g>
          ) : (
            <g>
              {/* じゅるり目 (うっとり) */}
              <ellipse cx="38" cy="48" rx="6" ry="7" fill="#1e293b" />
              <ellipse cx="62" cy="48" rx="6" ry="7" fill="#1e293b" />
              <circle cx="36" cy="46" r="2" fill="#ffffff" />
              <circle cx="60" cy="46" r="2" fill="#ffffff" />
            </g>
          )}

          {/* 鼻・口 */}
          <ellipse cx="50" cy="52" rx="3" ry="2" fill="#78350f" />
          <path d="M46 54 Q50 58 54 54" stroke="#78350f" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* よだれ (じゅるり時) */}
          {(mood === 'jururi' || mood === 'stare') && (
            <g className="animate-pulse">
              <path
                d="M 53 56 C 53 64, 56 68, 54 72 C 52 74, 50 72, 51 68 Z"
                fill="#38bdf8"
                opacity="0.85"
              />
              <circle cx="53.5" cy="73" r="2" fill="#0284c7" opacity="0.9" />
            </g>
          )}
        </svg>
      </div>

      {/* 吹き出し */}
      <div className="flex-1 bg-white p-3 rounded-2xl border border-amber-200/90 shadow-sm relative">
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-6 border-y-transparent border-r-8 border-r-white" />
        <p className="text-xs sm:text-sm font-extrabold text-amber-900 leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
};
