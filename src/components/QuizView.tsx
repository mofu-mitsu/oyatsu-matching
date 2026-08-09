import React, { useState } from 'react';
import { QuizAnswers, QuizMode } from '../types';
import { SnackSlider } from './SnackSlider';
import { Sparkles, ArrowRight, ArrowLeft, Check, Gift, Heart, PlusCircle, HelpCircle } from 'lucide-react';
import { playPopSound, playSelectSound, playSparkleSound } from '../lib/sound';

interface QuizViewProps {
  initialMode: QuizMode;
  onComplete: (answers: QuizAnswers) => void;
}

const TEXTURES = [
  { label: 'ふわふわ', emoji: '☁️', type: 'tender' },
  { label: 'もっちり', emoji: '🍡', type: 'tender' },
  { label: 'とろとろ', emoji: '🍮', type: 'tender' },
  { label: 'ほろほろ', emoji: '🍪', type: 'tender' },
  { label: 'サクサク', emoji: '🥐', type: 'hard' },
  { label: 'ザクザク', emoji: 'チョコレート', emojiStr: '🍫', type: 'hard' },
  { label: 'カリカリ', emoji: '🥨', type: 'hard' },
  { label: 'パリパリ', emoji: '🍘', type: 'hard' },
];

const FLAVORS = [
  'チョコ', 'いちご', '抹茶', 'バニラ', 'キャラメル', 'チーズ',
  'ナッツ', 'フルーツ', 'はちみつ', 'さつまいも', 'コーヒー',
  '紅茶', '柑橘・レモン', '梅・塩味', 'あんこ', 'さくら'
];

const COMMON_DISLIKES = [
  'シナモン', 'ミント', 'ラム酒・アルコール', 'コーヒー', '抹茶',
  'ナッツ類', 'パクチー', '柑橘皮（ピール）'
];

export const QuizView: React.FC<QuizViewProps> = ({ initialMode, onComplete }) => {
  const [mode, setMode] = useState<QuizMode>(initialMode);
  const [step, setStep] = useState<number>(1);

  React.useEffect(() => {
    setMode(initialMode);
    setStep(1);
  }, [initialMode]);

  // フォームデータ
  const [sweetValue, setSweetValue] = useState<number>(75); // デフォルト甘い寄り
  const [japaneseValue, setJapaneseValue] = useState<number>(50); // 中間
  const [freshValue, setFreshValue] = useState<number>(30); // 焼き菓子/常温寄り
  const [textures, setTextures] = useState<string[]>(['サクサク', 'ふわふわ']);
  const [flavors, setFlavors] = useState<string[]>(['チョコ', 'いちご']);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [customDislike, setCustomDislike] = useState<string>('');
  const [budget, setBudget] = useState<'500' | '1000' | '3000' | '5000' | '10000' | 'any'>('3000');
  const [mood, setMood] = useState<string>('ご褒美');

  // ギフト用
  const [giftTarget, setGiftTarget] = useState<string>('友人');
  const [giftVibe, setGiftVibe] = useState<string>('かわいい');

  const totalSteps = 7;

  const toggleTexture = (textureLabel: string) => {
    if (textures.includes(textureLabel)) {
      setTextures(textures.filter((t) => t !== textureLabel));
    } else {
      setTextures([...textures, textureLabel]);
    }
  };

  const toggleFlavor = (flavor: string) => {
    if (flavors.includes(flavor)) {
      setFlavors(flavors.filter((f) => f !== flavor));
    } else {
      setFlavors([...flavors, flavor]);
    }
  };

  const toggleDislike = (item: string) => {
    if (dislikes.includes(item)) {
      setDislikes(dislikes.filter((d) => d !== item));
    } else {
      setDislikes([...dislikes, item]);
    }
  };

  const handleNext = () => {
    playPopSound();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // 完了！
      onComplete({
        mode,
        sweetValue,
        japaneseValue,
        freshValue,
        textures,
        flavors,
        dislikes,
        customDislike,
        budget,
        mood,
        giftTarget: mode === 'gift' ? giftTarget : undefined,
        giftVibe: mode === 'gift' ? giftVibe : undefined,
      });
    }
  };

  const handleBack = () => {
    playPopSound();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6" id="quiz-container">
      {/* モード切替タブ */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-stone-200/70 p-1 rounded-2xl flex items-center gap-1 border border-stone-300/60 shadow-inner">
          <button
            id="quiz-mode-self-button"
            onClick={() => {
              setMode('self');
              setStep(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              mode === 'self'
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>自分のおやつ診断</span>
          </button>
          <button
            id="quiz-mode-gift-button"
            onClick={() => {
              setMode('gift');
              setStep(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              mode === 'gift'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>あの人へ贈るギフト選び</span>
          </button>
        </div>
      </div>

      {/* ステップ進捗バー */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-1.5">
          <span>{mode === 'self' ? '🍪 あなたのおやつ診断' : '🎁 おやつギフトマッチ'}</span>
          <span>STEP {step} / {totalSteps}</span>
        </div>
        <div className="w-full h-2.5 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-500 to-amber-400 transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* 質問コンテンツ */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-xl shadow-pink-100/50 min-h-[380px] flex flex-col justify-between" id="quiz-card">
        <div>
          {/* STEP 1: 味 (Sweet vs Salty) */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn" id="quiz-step-1">
              <div className="text-center space-y-1">
                <span className="text-3xl">🍫🍘</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? '今、どんな味が恋しい気分？' : 'お相手が普段よく食べているのは？'}
                </h2>
                <p className="text-xs text-stone-500">
                  {mode === 'self' ? '甘いお菓子？それとも香ばしい塩系おつまみ？' : '甘いスイーツ派？それとも香ばしいおつまみ派？'}
                </p>
              </div>

              <SnackSlider
                id="slider-sweet"
                value={sweetValue}
                onChange={setSweetValue}
                leftLabel="しょっぱい・塩味"
                leftEmoji="🍘"
                rightLabel="甘い・スイーツ"
                rightEmoji="🍫"
                thumbEmoji="🍪"
              />
            </div>
          )}

          {/* STEP 2: 和洋 (Japanese vs Western) */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn" id="quiz-step-2">
              <div className="text-center space-y-1">
                <span className="text-3xl">🍵🍰</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? '今の気分に近いジャンルは？' : 'お相手の好みに近いのは？'}
                </h2>
                <p className="text-xs text-stone-500">
                  {mode === 'self' ? 'ほっと和む伝統の味？それとも華やかな洋風スイーツ？' : '渋くて落ち着く和風？それとも華やかな洋風？'}
                </p>
              </div>

              <SnackSlider
                id="slider-japanese"
                value={japaneseValue}
                onChange={setJapaneseValue}
                leftLabel="和のおやつ・和風"
                leftEmoji="🍵"
                rightLabel="洋のおやつ・洋風"
                rightEmoji="🍰"
                thumbEmoji="🍓"
              />
            </div>
          )}

          {/* STEP 3: 温度・仕上げ (Fresh vs Chilled) */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn" id="quiz-step-3">
              <div className="text-center space-y-1">
                <span className="text-3xl">🍪🍨</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? '食べたい温度・スタイルは？' : '今回贈りたいのはどっちのスタイル？'}
                </h2>
                <p className="text-xs text-stone-500">
                  {mode === 'self' ? '焼き立て・常温の香ばしさ？それとも冷やして美味しいひんやりスイーツ？' : '常温で日持ちする焼き菓子？それとも特別感のあるひんやりスイーツ？'}
                </p>
              </div>

              <SnackSlider
                id="slider-fresh"
                value={freshValue}
                onChange={setFreshValue}
                leftLabel="常温・焼き菓子"
                leftEmoji="🍪"
                rightLabel="ひんやり冷製"
                rightEmoji="🍨"
                thumbEmoji="🍦"
              />
            </div>
          )}

          {/* STEP 4: 好きな食感 */}
          {step === 4 && (
            <div className="space-y-5 animate-fadeIn" id="quiz-step-4">
              <div className="text-center space-y-1">
                <span className="text-3xl">✨</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? '好きな食感を選んでね！（複数選択OK）' : 'お相手が好きそうな食感は？'}
                </h2>
                <p className="text-xs text-stone-500">
                  食感は食べたいおやつの重要ポイント！直感でポチポチしてね。
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                {TEXTURES.map((t) => {
                  const isSelected = textures.includes(t.label);
                  return (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => { playPopSound(); toggleTexture(t.label); }}
                      className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1 select-none ${
                        isSelected
                          ? 'bg-rose-50 border-rose-400 text-rose-700 shadow-sm font-bold scale-[1.02]'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <span className="text-2xl">{t.emojiStr || t.emoji}</span>
                      <span className="text-xs">{t.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-rose-500" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: 好きなフレーバー */}
          {step === 5 && (
            <div className="space-y-5 animate-fadeIn" id="quiz-step-5">
              <div className="text-center space-y-1">
                <span className="text-3xl">❤️</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? '好きな味・フレーバーは？（いくつでも）' : 'お相手が好きそうな味は？（いくつでも）'}
                </h2>
                <p className="text-xs text-stone-500">
                  選択した味を優先して楽天で探すよ！
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {FLAVORS.map((flavor) => {
                  const isSelected = flavors.includes(flavor);
                  return (
                    <button
                      key={flavor}
                      type="button"
                      onClick={() => { playPopSound(); toggleFlavor(flavor); }}
                      className={`px-3.5 py-2 rounded-2xl border text-xs font-bold transition-all select-none ${
                        isSelected
                          ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm scale-105'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {isSelected ? '✓ ' : ''}{flavor}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 6: 苦手なもの（自由入力あり） */}
          {step === 6 && (
            <div className="space-y-5 animate-fadeIn" id="quiz-step-6">
              <div className="text-center space-y-1">
                <span className="text-3xl">🚫</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? '苦手・避けたいものを選んでね' : 'アレルギーや苦手そうなものはある？'}
                </h2>
                <p className="text-xs text-stone-500">
                  検索から除外するよ！（なければスキップOK）
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {COMMON_DISLIKES.map((dislike) => {
                  const isSelected = dislikes.includes(dislike);
                  return (
                    <button
                      key={dislike}
                      type="button"
                      onClick={() => { playPopSound(); toggleDislike(dislike); }}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all select-none ${
                        isSelected
                          ? 'bg-stone-800 border-stone-900 text-white shadow-sm font-bold'
                          : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {isSelected ? '✕ ' : ''}{dislike}
                    </button>
                  );
                })}
              </div>

              {/* 自由入力欄 */}
              <div className="pt-3 max-w-sm mx-auto">
                <label className="block text-xs font-bold text-stone-600 mb-1 flex items-center gap-1">
                  <PlusCircle className="w-3.5 h-3.5 text-stone-400" />
                  <span>その他に避けたい食材（自由入力）:</span>
                </label>
                <input
                  type="text"
                  value={customDislike}
                  onChange={(e) => setCustomDislike(e.target.value)}
                  placeholder="例: マンゴー, 洋梨, アルコール"
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  id="custom-dislike-input"
                />
              </div>
            </div>
          )}

          {/* STEP 7: 予算 ＆ シーン/相手 */}
          {step === 7 && (
            <div className="space-y-6 animate-fadeIn" id="quiz-step-7">
              <div className="text-center space-y-1">
                <span className="text-3xl">💰</span>
                <h2 className="text-lg sm:text-xl font-extrabold text-stone-800">
                  {mode === 'self' ? 'おやつに出せる金額＆今日の気分は？' : 'ギフトの予算＆お相手の雰囲気は？'}
                </h2>
                <p className="text-xs text-stone-500">
                  これで最後の質問！ぴったりなおやつを楽天APIから検索するよ✨
                </p>
              </div>

              {/* 予算選択 */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-stone-700">おやつ予算 (目安):</label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                  {[
                    { val: '500', label: '500円以下' },
                    { val: '1000', label: '1,000円以下' },
                    { val: '3000', label: '3,000円以下' },
                    { val: '5000', label: '5,000円以下' },
                    { val: '10000', label: '10,000円以下' },
                    { val: 'any', label: '気にしない' },
                  ].map((b) => (
                    <button
                      key={b.val}
                      type="button"
                      onClick={() => { playPopSound(); setBudget(b.val as any); }}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                        budget === b.val
                          ? 'bg-rose-500 border-rose-600 text-white shadow-md'
                          : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 自分用気分 OR ギフト用詳細 */}
              {mode === 'self' ? (
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold text-stone-700">今日の気分・シーン:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'のんびり', label: '🌱 のんびり過ごしたい' },
                      { id: '元気', label: '⚡ 元気をチャージしたい' },
                      { id: 'ご褒美', label: '🎉 自分へのちょっとご褒美' },
                      { id: '落ち着く', label: '☕ ほっと落ち着きたい' },
                      { id: '夜食', label: '🌙 深夜の密かな楽しみ' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => { playPopSound(); setMood(m.id); }}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left ${
                          mood === m.id
                            ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-sm'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">贈るお相手:</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['友人', '子ども', '大人', '年配の方'].map((target) => (
                        <button
                          key={target}
                          type="button"
                          onClick={() => { playPopSound(); setGiftTarget(target); }}
                          className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                            giftTarget === target
                              ? 'bg-amber-500 border-amber-600 text-white shadow-sm'
                              : 'bg-stone-50 border-stone-200 text-stone-600'
                          }`}
                        >
                          {target}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">ギフトの雰囲気:</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['かわいい', '高級感', '和風', 'シンプル'].map((vibe) => (
                        <button
                          key={vibe}
                          type="button"
                          onClick={() => { playPopSound(); setGiftVibe(vibe); }}
                          className={`p-2 rounded-xl border text-xs font-bold transition-all ${
                            giftVibe === vibe
                              ? 'bg-rose-500 border-rose-600 text-white shadow-sm'
                              : 'bg-stone-50 border-stone-200 text-stone-600'
                          }`}
                        >
                          {vibe}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ナビゲーションボタン */}
        <div className="flex items-center justify-between pt-6 border-t border-stone-100 mt-6">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              step === 1
                ? 'opacity-0 pointer-events-none'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
            id="quiz-back-button"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>前へ</span>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-pink-200 hover:scale-[1.03] active:scale-95 transition-all"
            id="quiz-next-button"
          >
            <span>{step === totalSteps ? '診断結果＆おやつを召喚！✨' : '次へ進む'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
