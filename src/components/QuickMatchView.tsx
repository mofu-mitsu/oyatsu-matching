import React, { useState } from 'react';
import { SNACK_TYPES } from '../data/snackTypes';
import { QuizAnswers } from '../types';
import { UtensilsCrossed, Sparkles, ExternalLink } from 'lucide-react';

interface QuickMatchViewProps {
  onQuickMatch: (answers: QuizAnswers) => void;
}

export const QuickMatchView: React.FC<QuickMatchViewProps> = ({ onQuickMatch }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<string>('STFW');
  const [budget, setBudget] = useState<'500' | '1000' | '3000' | '5000' | 'any'>('3000');
  const [mood, setMood] = useState<string>('ご褒美');
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>(['チョコ', 'いちご']);

  const selectedType = SNACK_TYPES[selectedTypeId] || SNACK_TYPES.STFW;

  const handleRunMatch = () => {
    // 選択されたタイプの軸からスコアを逆算して16タイプ診断結果と同期
    const s = selectedTypeId.charAt(0) === 'S' ? 80 : 20;
    const t = selectedTypeId.charAt(1) === 'T' ? 80 : 20;
    const f = selectedTypeId.charAt(2) === 'C' ? 80 : 20;
    const j = selectedTypeId.charAt(3) === 'W' ? 80 : 20;

    onQuickMatch({
      mode: 'self',
      isQuickMatch: true,
      sweetValue: s,
      japaneseValue: j,
      freshValue: f,
      textures: selectedTypeId.charAt(1) === 'T' ? ['ふわふわ', 'もっちり'] : ['サクサク', 'カリカリ'],
      flavors: selectedFlavors,
      dislikes: [],
      customDislike: '',
      budget,
      mood,
    });
  };

  const toggleFlavor = (flv: string) => {
    if (selectedFlavors.includes(flv)) {
      setSelectedFlavors(selectedFlavors.filter((f) => f !== flv));
    } else {
      setSelectedFlavors([...selectedFlavors, flv]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6" id="quick-match-container">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-xl shadow-pink-100/40 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>クイックおやつ召喚</span>
          </div>
          <h2 className="text-xl font-extrabold text-stone-800">
            今日のおすすめおやつガチャ🍩
          </h2>
          <p className="text-xs text-stone-500">
            自分の16タイプを知っている人は、タイプを選ぶだけで今すぐおすすめおやつが飛び出します！
          </p>
        </div>

        {/* 16タイプ選択グリッド */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-stone-700">あなたの16タイプを選択:</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.values(SNACK_TYPES).map((st) => {
              const isSelected = selectedTypeId === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setSelectedTypeId(st.id)}
                  className={`p-2.5 rounded-2xl border text-left transition-all select-none ${
                    isSelected
                      ? 'bg-rose-50 border-rose-400 text-rose-900 ring-2 ring-rose-300 font-bold shadow-sm'
                      : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-lg">{st.characterEmoji}</span>
                    <span className="text-xs font-extrabold">{st.id}</span>
                  </div>
                  <div className="text-[10px] text-stone-500 truncate mt-0.5">
                    {st.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 4つの分類軸の説明 */}
        <div className="bg-stone-50 rounded-2xl p-3 border border-stone-200">
          <h4 className="text-[10px] font-extrabold text-stone-800 mb-2 text-center">💡 16タイプの分類軸（4つのアルファベットの意味）</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[9px]">
            <div className="bg-white p-1.5 rounded-xl border border-stone-200 text-center shadow-sm">
              <div className="font-black text-rose-600 mb-0.5">味 (Taste)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">S</span>weet(甘い) / <span className="text-stone-900">Y</span>(塩味)</div>
            </div>
            <div className="bg-white p-1.5 rounded-xl border border-stone-200 text-center shadow-sm">
              <div className="font-black text-amber-600 mb-0.5">食感 (Texture)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">T</span>ender(柔) / <span className="text-stone-900">H</span>ard(硬)</div>
            </div>
            <div className="bg-white p-1.5 rounded-xl border border-stone-200 text-center shadow-sm">
              <div className="font-black text-sky-500 mb-0.5">温度 (Temp)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">F</span>resh(常温) / <span className="text-stone-900">C</span>hilled(冷)</div>
            </div>
            <div className="bg-white p-1.5 rounded-xl border border-stone-200 text-center shadow-sm">
              <div className="font-black text-emerald-600 mb-0.5">和洋 (Style)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">J</span>apanese(和) / <span className="text-stone-900">W</span>estern(洋)</div>
            </div>
          </div>
        </div>

        {/* フレーバー＆気分 */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">食べたいフレーバー:</label>
            <div className="flex flex-wrap gap-1.5">
              {['チョコ', 'いちご', '抹茶', 'チーズ', 'ナッツ', 'あんこ', 'フルーツ'].map((flv) => {
                const isSel = selectedFlavors.includes(flv);
                return (
                  <button
                    key={flv}
                    type="button"
                    onClick={() => toggleFlavor(flv)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border ${
                      isSel
                        ? 'bg-amber-100 border-amber-300 text-amber-900'
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    {flv}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">ご予算:</label>
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { val: '1000', label: '1千円以下' },
                { val: '3000', label: '3千円以下' },
                { val: '5000', label: '5千円以下' },
              ].map((b) => (
                <button
                  key={b.val}
                  type="button"
                  onClick={() => setBudget(b.val as any)}
                  className={`p-2 rounded-xl border text-xs font-bold ${
                    budget === b.val
                      ? 'bg-rose-500 border-rose-600 text-white'
                      : 'bg-stone-50 border-stone-200 text-stone-700'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 召喚実行ボタン */}
        <button
          type="button"
          onClick={handleRunMatch}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-extrabold text-sm shadow-lg shadow-pink-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          id="quick-match-submit"
        >
          <Sparkles className="w-5 h-5 animate-spin" />
          <span>「{selectedType.title}」のおすすめおやつを今すぐ召喚！</span>
        </button>
      </div>
    </div>
  );
};
