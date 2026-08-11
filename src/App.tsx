import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { QuickMatchView } from './components/QuickMatchView';
import { EncyclopediaView } from './components/EncyclopediaView';
import { QuizAnswers, QuizMode } from './types';
import { Cookie, Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { setVolume, getVolume, playSelectSound, playPopSound, playSparkleSound } from './lib/sound';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'quiz' | 'quick' | 'encyclopedia'>(() => {
    const saved = localStorage.getItem('oyatsu_activeTab');
    return (saved === 'home' || saved === 'quiz' || saved === 'quick' || saved === 'encyclopedia') ? saved : 'home';
  });
  const [quizMode, setQuizMode] = useState<QuizMode>(() => {
    const saved = localStorage.getItem('oyatsu_quizMode');
    return (saved === 'self' || saved === 'friend') ? saved : 'self';
  });
  const [answers, setAnswers] = useState<QuizAnswers | null>(() => {
    const saved = localStorage.getItem('oyatsu_answers');
    try {
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  
  
  useEffect(() => {
    localStorage.setItem('oyatsu_activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem('oyatsu_quizMode', quizMode);
  }, [quizMode]);

  useEffect(() => {
    if (answers) {
      localStorage.setItem('oyatsu_answers', JSON.stringify(answers));
    } else {
      localStorage.removeItem('oyatsu_answers');
    }
  }, [answers]);

  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.5);
      setIsMuted(false);
      // AudioContext の resume は sound.ts 内で処理されるので、playPopSoundを呼ぶだけでOK
      setTimeout(() => { playPopSound(); }, 10);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleStartQuiz = (mode: QuizMode) => {
    playPopSound();
    setQuizMode(mode);
    setAnswers(null);
    setActiveTab('quiz');
  };

  const handleQuizComplete = (completedAnswers: QuizAnswers) => {
    playSparkleSound();
    setAnswers(completedAnswers);
  };

  const handleReset = () => {
    playPopSound();
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
          setActiveTab={(tab) => {
            playPopSound();
            setActiveTab(tab);
          }}
          onStartQuiz={(mode) => {
            playSelectSound();
            handleStartQuiz(mode);
          }}
        />
        
        {/* 音量トグルボタン */}
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur border border-stone-200 p-3 rounded-full shadow-lg text-stone-600 hover:text-rose-500 hover:scale-110 transition-all"
        >
          {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>

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
      <div className="relative z-10 flex justify-center pb-10 pt-4">
        <a 
          href="https://mofu-mitsu.github.io/"
          className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-stone-800 to-stone-700 rounded-full text-sm font-extrabold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 border border-stone-600"
        >
          <span className="relative z-10 flex items-center gap-2 tracking-wide">
            🏠 ホームへ戻る
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
