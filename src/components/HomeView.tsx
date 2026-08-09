import React, { useState } from 'react';
import { Sparkles, Gift, Heart, ArrowRight, BookOpen, X } from 'lucide-react';
import { QuizMode, SnackTypeInfo } from '../types';
import { SNACK_TYPES } from '../data/snackTypes';
import { SnackCharacterAvatar } from './SnackCharacterAvatar';

interface HomeViewProps {
  onStartQuiz: (mode: QuizMode) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onStartQuiz }) => {
  const [selectedType, setSelectedType] = useState<SnackTypeInfo | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12 space-y-10" id="home-container">
      {/* ヒーローセクション */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full border border-rose-200 animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>あなたの「食べたい」が見つかる！</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-stone-800 leading-tight">
          おやつマッチング<br />
          <span className="text-xl sm:text-2xl text-rose-600 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-amber-500">
            〜 16タイプおやつ診断 〜
          </span>
        </h1>
        
        <p className="text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
          簡単な質問に答えるだけで、今のあなたの気分にぴったりな「おやつ」を全16タイプから診断！さらに楽天市場から本当にお迎えできるスイーツを召喚します🤤
        </p>
      </div>

      {/* アクションボタン */}
      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        <button
          onClick={() => onStartQuiz('self')}
          className="bg-white hover:bg-stone-50 border-2 border-rose-300 rounded-3xl p-6 transition-all hover:scale-[1.02] shadow-lg shadow-rose-100 group flex flex-col items-center text-center gap-3"
        >
          <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center text-3xl group-hover:animate-bounce">
            🍪
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-stone-800">自分のおやつ診断</h3>
            <p className="text-xs text-stone-500 mt-1">今の気分にぴったりなスイーツをお迎えしよう！</p>
          </div>
          <div className="mt-2 text-rose-600 flex items-center gap-1 text-sm font-bold group-hover:translate-x-1 transition-transform">
            <span>診断スタート</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>

        <button
          onClick={() => onStartQuiz('gift')}
          className="bg-gradient-to-br from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border-2 border-amber-300 rounded-3xl p-6 transition-all hover:scale-[1.02] shadow-lg shadow-amber-100 group flex flex-col items-center text-center gap-3"
        >
          <div className="w-16 h-16 rounded-full bg-amber-200/50 flex items-center justify-center text-3xl group-hover:animate-bounce">
            🎁
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-stone-800">おやつギフト選び</h3>
            <p className="text-xs text-stone-500 mt-1">あの人の好みに合わせて、素敵なギフトを探そう！</p>
          </div>
          <div className="mt-2 text-amber-600 flex items-center gap-1 text-sm font-bold group-hover:translate-x-1 transition-transform">
            <span>ギフトを選ぶ</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>
      </div>

      {/* 16タイプおやつキャラクター図鑑 */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 space-y-4" id="snack-character-catalog">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-amber-900 text-base sm:text-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>16タイプおやつキャラクターズ 🍡✨</span>
          </h3>
          <span className="text-xs text-amber-700 font-bold bg-amber-200/60 px-2.5 py-1 rounded-full">
            全16種類
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">
          個性豊かな16のおやつマスコットたち！あなたや友達はどのタイプ？タップすると性格が見られるよ。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {Object.values(SNACK_TYPES).map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type)}
              className="bg-white hover:bg-amber-100/50 border border-amber-200/90 rounded-2xl p-3 flex flex-col items-center text-center gap-2 transition-all hover:scale-[1.03] shadow-xs group"
            >
              <div className="relative w-20 h-20 group-hover:animate-bounce mb-1">
                <SnackCharacterAvatar typeId={type.id} size="md" />
              </div>
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                {type.code}
              </span>
              <span className="text-xs font-black text-stone-800 leading-tight">
                {type.characterEmoji} {type.characterName}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* キャラクター詳細モーダル */}
      {selectedType && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 relative border-2 border-amber-300 shadow-2xl">
            <button
              onClick={() => setSelectedType(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 bg-stone-100 hover:bg-stone-200 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 border-b border-stone-100 pb-4">
              <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-200">
                <SnackCharacterAvatar typeId={selectedType.id} size="lg" />
              </div>
              <div>
                <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  {selectedType.code}
                </span>
                <h4 className="text-lg font-black text-stone-900 mt-1">
                  {selectedType.characterEmoji} {selectedType.characterName}
                </h4>
                <p className="text-xs font-bold text-rose-600">{selectedType.title}</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-stone-700">
              <div className="bg-amber-50/80 p-3 rounded-2xl border border-amber-200/60 font-bold italic">
                「{selectedType.catchphrase}」
              </div>
              <p className="leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-100">
                {selectedType.description}
              </p>
              <div>
                <span className="font-extrabold text-stone-800 block mb-1">✨ 主な特徴</span>
                <div className="flex flex-wrap gap-1">
                  {selectedType.personalityTraits.map((trait) => (
                    <span key={trait} className="bg-amber-100/70 text-amber-900 font-bold px-2 py-0.5 rounded-lg text-[11px]">
                      #{trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedType(null)}
              className="w-full py-2.5 bg-stone-800 hover:bg-stone-900 text-white font-extrabold rounded-2xl transition-colors text-xs"
            >
              とじる
            </button>
          </div>
        </div>
      )}

      {/* 診断の特徴 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm">
        <h3 className="text-center font-extrabold text-stone-800 mb-6 flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span>このアプリのおもしろポイント & 4つの分類軸</span>
        </h3>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center space-y-2">
            <div className="text-4xl">🔬</div>
            <h4 className="text-sm font-bold text-stone-900">本格16タイプ診断</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              甘さ・和洋・温度・食感の4つの軸から、あなたのおやつ性格を分析します。
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl">🛒</div>
            <h4 className="text-sm font-bold text-stone-900">楽天市場と連携</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              診断結果に基づいて、楽天APIから実際の商品を検索して提案します。
            </p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl">🐹</div>
            <h4 className="text-sm font-bold text-stone-900">可愛い16のキャラたち</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              もちあんこちゃん、とろりプリンちゃんなど、個性豊かな16のおやつキャラクターが登場！
            </p>
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
          <h4 className="text-sm font-extrabold text-stone-800 mb-3 text-center">💡 16タイプの分類軸（4つのアルファベットの意味）</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm text-center">
              <div className="font-black text-rose-600 mb-1">味 (Taste)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">S</span>weet (甘い)</div>
              <div className="text-stone-400 my-0.5">/</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">Y</span> (Salty:塩味)</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm text-center">
              <div className="font-black text-amber-600 mb-1">食感 (Texture)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">T</span>ender (やわらか)</div>
              <div className="text-stone-400 my-0.5">/</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">H</span>ard (かたい)</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm text-center">
              <div className="font-black text-sky-500 mb-1">温度 (Temp)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">F</span>resh (常温/熱)</div>
              <div className="text-stone-400 my-0.5">/</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">C</span>hilled (冷たい)</div>
            </div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm text-center">
              <div className="font-black text-emerald-600 mb-1">和洋 (Style)</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">J</span>apanese (和風)</div>
              <div className="text-stone-400 my-0.5">/</div>
              <div className="font-bold text-stone-700"><span className="text-stone-900">W</span>estern (洋風)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
