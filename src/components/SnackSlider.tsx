import React from 'react';

interface SnackSliderProps {
  value: number; // 0..100
  onChange: (val: number) => void;
  leftLabel: string;
  leftEmoji: string;
  rightLabel: string;
  rightEmoji: string;
  thumbEmoji?: string;
  id?: string;
}

export const SnackSlider: React.FC<SnackSliderProps> = ({
  value,
  onChange,
  leftLabel,
  leftEmoji,
  rightLabel,
  rightEmoji,
  thumbEmoji = '🍪',
  id = 'snack-slider',
}) => {
  return (
    <div className="w-full bg-amber-50/60 p-4 sm:p-5 rounded-3xl border border-amber-200/70 shadow-sm" id={id}>
      {/* 左右のラベル */}
      <div className="flex items-center justify-between font-bold text-xs sm:text-sm text-stone-700 mb-3 select-none">
        <div className={`flex items-center gap-1.5 transition-all ${value < 40 ? 'scale-110 text-rose-600 font-extrabold' : 'opacity-80'}`}>
          <span className="text-xl sm:text-2xl">{leftEmoji}</span>
          <span>{leftLabel}</span>
        </div>
        <div className={`flex items-center gap-1.5 transition-all ${value > 60 ? 'scale-110 text-rose-600 font-extrabold' : 'opacity-80'}`}>
          <span>{rightLabel}</span>
          <span className="text-xl sm:text-2xl">{rightEmoji}</span>
        </div>
      </div>

      {/* スライダー本体 */}
      <div className="relative flex items-center h-8 select-none">
        {/* レール背景 */}
        <div className="w-full h-3 rounded-full bg-stone-200/80 overflow-hidden relative border border-stone-300/40">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-rose-400 to-pink-500 transition-all duration-75 rounded-full"
            style={{ width: `${value}%` }}
          />
        </div>

        {/* HTML Native Range Input (透明化してオーバーレイ) */}
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          id={`${id}-input`}
        />

        {/* カスタム Thumb (クッキーアイコン) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10 transition-transform duration-75 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-md border-2 border-amber-300"
          style={{ left: `${value}%` }}
        >
          <span className="text-xl sm:text-2xl animate-bounce">{thumbEmoji}</span>
        </div>
      </div>

      {/* スライダー中央値表示・ガイドテキスト */}
      <div className="mt-2 text-center text-[11px] text-stone-500 font-medium">
        {value === 50 ? (
          <span>どっちも捨てがたい！(ハーフ＆ハーフ気分)</span>
        ) : value < 50 ? (
          <span className="text-amber-700 font-bold">「{leftLabel}」寄り ({100 - value}%)</span>
        ) : (
          <span className="text-rose-600 font-bold">「{rightLabel}」寄り ({value}%)</span>
        )}
      </div>
    </div>
  );
};
