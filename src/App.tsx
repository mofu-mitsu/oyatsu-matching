import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { QuickMatchView } from './components/QuickMatchView';
import { EncyclopediaView } from './components/EncyclopediaView';
import { QuizAnswers, QuizMode } from './types';
import { Cookie, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'quiz' | 'quick' | 'encyclopedia'>('home');
  const [quizMode, setQuizMode] = useState<QuizMode>('self');
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);

  const handleStartQuiz = (mode: QuizMode) => {
    setQuizMode(mode);
    setAnswers(null);
    setActiveTab('quiz');
  };

  const handleQuizComplete = (completedAnswers: QuizAnswers) => {
    setAnswers(completedAnswers);
  };

  const handleReset = () => {
    setAnswers(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/40 via-pink-50/30 to-rose-50/40 text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900 flex flex-col justify-between relative overflow-x-hidden">
      {/* 背景の可愛いスイーツフローティング装飾 */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-25 overflow-hidden">
        <div className="absolute top-12 left-6 text-4xl animate-bounce duration-[3000ms]">🍪</div>
        <div className="absolute top-1/3 right-8 text-3xl animate-pulse duration-[2000ms]">🍓</div>
        <div className="absolute bottom-20 left-10 text-4xl animate-bounce duration-[4000ms]">🍡</div>
        <div className="absolute bottom-1/4 right-12 text-3xl animate-pulse duration-[2500ms]">🍨</div>
      </div>

      <div className="relative z-10 flex-1">
        {/* ヘッダー */}
        <Header
          activeTab={activeTab === 'home' ? 'quiz' : activeTab} // Headerにはhomeの表示はないのでquizとして扱う
          quizMode={quizMode}
          setActiveTab={setActiveTab}
          onStartQuiz={handleStartQuiz}
        />

        {/* メインコンテンツ */}
        <main className="pb-12">
          {activeTab === 'home' && (
            <HomeView onStartQuiz={handleStartQuiz} />
          )}

          {activeTab === 'quiz' && (
            answers ? (
              <ResultView answers={answers} onReset={handleReset} />
            ) : (
              <QuizView initialMode={quizMode} onComplete={handleQuizComplete} />
            )
          )}

          {activeTab === 'quick' && (
            answers ? (
              <ResultView answers={answers} onReset={handleReset} />
            ) : (
              <QuickMatchView onQuickMatch={handleQuizComplete} />
            )
          )}

          {activeTab === 'encyclopedia' && (
            <EncyclopediaView />
          )}
        </main>
      </div>

      {/* ホームへ戻るボタン */}
      <div className="relative z-10 flex justify-center pb-8 pt-4">
        <a 
          href="https://mofu-mitsu.github.io/"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-sky-200 hover:border-sky-300 rounded-full text-sm font-bold text-sky-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            🏠 ホームへ戻る
          </span>
          <div className="absolute inset-0 bg-sky-50 rounded-full scale-0 group-hover:scale-100 transition-transform origin-center duration-300 ease-out"></div>
        </a>
      </div>

      {/* フッター */}
      <footer className="relative z-10 border-t border-pink-100 bg-white/80 backdrop-blur-md py-6 text-center text-xs text-stone-500 space-y-2">
        <div className="flex items-center justify-center gap-1.5 font-bold text-stone-700">
          <Cookie className="w-4 h-4 text-rose-500 animate-spin" />
          <span>おやつマッチング 〜 16タイプおやつ診断 ＆ 楽天市場おすすめ召喚 〜</span>
        </div>
        <p className="text-[11px] text-stone-400">
          ※本アプリは楽天市場商品検索APIを利用しておやつをご提案しています。
        </p>
      </footer>
    </div>
  );
}
