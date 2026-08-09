import React, { useState } from 'react';
import { SNACK_TYPES } from '../data/snackTypes';
import { SnackTypeInfo } from '../types';
import { BookOpen, Sparkles, Heart, Filter, X } from 'lucide-react';
import { SnackCharacterAvatar } from './SnackCharacterAvatar';

export const EncyclopediaView: React.FC = () => {
  const [filterAxis, setFilterAxis] = useState<'all' | 'sweet' | 'salty' | 'japanese' | 'western'>('all');
  const [selectedType, setSelectedType] = useState<SnackTypeInfo | null>(null);

  const typesList = Object.values(SNACK_TYPES).filter((st) => {
    if (filterAxis === 'sweet') return st.code.startsWith('S');
    if (filterAxis === 'salty') return st.code.startsWith('Y');
    if (filterAxis === 'japanese') return st.code.endsWith('J');
    if (filterAxis === 'western') return st.code.endsWith('W');
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6" id="encyclopedia-container">
      {/* タイトル */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-pink-100 text-pink-800 text-xs font-bold px-3 py-1 rounded-full border border-pink-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>おやつ16タイプ全図鑑</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-stone-800">
          全16タイプのおやつキャラクター図鑑📖
        </h2>
        <p className="text-xs text-stone-500">
          全16種類の魅惑的なおやつタイプと、その相性・特徴をいつでもチェック！
        </p>
      </div>

      {/* フィルター */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {[
          { id: 'all', label: 'すべて (16タイプ)' },
          { id: 'sweet', label: '🍫 甘い・スイーツ系 (S)' },
          { id: 'salty', label: '🍘 しょっぱい・塩味系 (Y)' },
          { id: 'japanese', label: '🍵 和のおやつ (J)' },
          { id: 'western', label: '🍰 洋のおやつ (W)' },
        ].map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilterAxis(f.id as any)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterAxis === f.id
                ? 'bg-stone-800 text-white shadow-sm'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 4つの分類軸の説明 */}
      <div className="bg-white/80 rounded-2xl p-4 border border-stone-200 shadow-sm">
        <h4 className="text-[11px] font-extrabold text-stone-800 mb-2 text-center">💡 16タイプの分類軸（4つのアルファベットの意味）</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
          <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-center">
            <div className="font-black text-rose-600 mb-1">味 (Taste)</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">S</span>weet (甘い)</div>
            <div className="text-stone-300 leading-none">/</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">Y</span> (Salty:塩味)</div>
          </div>
          <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-center">
            <div className="font-black text-amber-600 mb-1">食感 (Texture)</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">T</span>ender (やわらか)</div>
            <div className="text-stone-300 leading-none">/</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">H</span>ard (かたい)</div>
          </div>
          <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-center">
            <div className="font-black text-sky-500 mb-1">温度 (Temp)</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">F</span>resh (常温/熱)</div>
            <div className="text-stone-300 leading-none">/</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">C</span>hilled (冷たい)</div>
          </div>
          <div className="bg-stone-50 p-2 rounded-xl border border-stone-200 text-center">
            <div className="font-black text-emerald-600 mb-1">和洋 (Style)</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">J</span>apanese (和風)</div>
            <div className="text-stone-300 leading-none">/</div>
            <div className="font-bold text-stone-700"><span className="text-stone-900">W</span>estern (洋風)</div>
          </div>
        </div>
      </div>

      {/* グリッドカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {typesList.map((st) => (
          <div
            key={st.id}
            onClick={() => setSelectedType(st)}
            className={`${st.color.bg} border ${st.color.border} p-4 rounded-3xl cursor-pointer hover:scale-[1.03] transition-all shadow-sm flex flex-col justify-between group`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${st.color.badge}`}>
                  {st.code}
                </span>
                <div className="group-hover:scale-110 transition-transform flex items-center justify-center">
                  <SnackCharacterAvatar typeId={st.id} size="md" />
                </div>
              </div>
              <h3 className="text-sm font-extrabold text-stone-900 group-hover:text-rose-600 transition-colors">
                {st.title}
              </h3>
              <p className="text-[11px] font-bold text-stone-600 mt-0.5">
                {st.snackCategory}
              </p>
              <p className="text-[10px] text-stone-500 mt-2 line-clamp-2">
                {st.catchphrase}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-stone-200/50 flex items-center justify-between text-[10px] text-stone-500 font-bold">
              <span>{st.characterName}</span>
              <span className="text-rose-500 group-hover:underline">詳細を見る →</span>
            </div>
          </div>
        ))}
      </div>

      {/* 詳細モーダル */}
      {selectedType && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative border border-pink-100 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedType(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 bg-stone-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="flex-shrink-0">
                <SnackCharacterAvatar typeId={selectedType.id} size="lg" />
              </div>
              <div className="text-center sm:text-left">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${selectedType.color.badge}`}>
                  TYPE: {selectedType.code}
                </span>
                <h3 className="text-lg font-extrabold text-stone-900 mt-2">
                  {selectedType.title}
                </h3>
                <p className="text-xs font-bold text-rose-600 mt-1">
                  {selectedType.snackCategory}
                </p>
              </div>
            </div>

            <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 text-xs text-stone-700 italic font-medium leading-relaxed">
              「{selectedType.catchphrase}」
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-stone-800">どんなタイプ？</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedType.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-extrabold text-stone-800">性格の特徴:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedType.personalityTraits.map((trait) => (
                  <span key={trait} className="bg-pink-50 text-pink-800 text-[11px] font-bold px-2.5 py-1 rounded-xl border border-pink-200">
                    ✨ {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="text-stone-500 font-bold">ベスト相性タイプ:</span>
              <span className="font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                ❤️ {selectedType.bestPairingTypeId} （{SNACK_TYPES[selectedType.bestPairingTypeId]?.title}）
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
