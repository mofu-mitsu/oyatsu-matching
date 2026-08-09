import React from 'react';
import { Cookie, Gift, Sparkles, BookOpen, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  activeTab: 'quiz' | 'quick' | 'encyclopedia';
  quizMode?: 'self' | 'gift';
  setActiveTab: (tab: 'home' | 'quiz' | 'quick' | 'encyclopedia') => void;
  onStartQuiz: (mode: 'self' | 'gift') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, quizMode, setActiveTab, onStartQuiz }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-pink-100 shadow-sm transition-all">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* ロゴ */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 cursor-pointer group select-none"
          id="app-header-logo"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-rose-400 to-amber-300 flex items-center justify-center text-white shadow-md shadow-pink-200 transform group-hover:scale-105 transition-transform">
            <Cookie className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                おやつマッチング
              </span>
              <span className="bg-pink-100 text-pink-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-pink-200">
                16タイプ診断
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium">
              あなたにぴったりのおやつを召喚・お迎えできるスイーツ診断🍪
            </p>
          </div>
        </div>

        {/* ナビゲーション */}
        <nav className="flex items-center gap-1 bg-stone-100/80 p-1 rounded-2xl text-xs font-semibold text-stone-600 border border-stone-200/60" id="app-nav">
          <button
            id="nav-tab-self-quiz"
            onClick={() => {
              setActiveTab('quiz');
              onStartQuiz('self');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'quiz' && quizMode === 'self'
                ? 'bg-white text-rose-600 shadow-sm font-bold'
                : 'hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>自分のおやつ診断</span>
          </button>

          <button
            id="nav-tab-gift-quiz"
            onClick={() => {
              setActiveTab('quiz');
              onStartQuiz('gift');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'quiz' && quizMode === 'gift'
                ? 'bg-white text-amber-600 shadow-sm font-bold'
                : 'hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <Gift className="w-3.5 h-3.5 text-amber-500" />
            <span>ギフト選び</span>
          </button>

          <button
            id="nav-tab-quick-match"
            onClick={() => setActiveTab('quick')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'quick'
                ? 'bg-white text-rose-600 shadow-sm font-bold'
                : 'hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>今日のおすすめ</span>
          </button>

          <button
            id="nav-tab-encyclopedia"
            onClick={() => setActiveTab('encyclopedia')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'encyclopedia'
                ? 'bg-white text-rose-600 shadow-sm font-bold'
                : 'hover:text-stone-900 hover:bg-stone-200/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>おやつ図鑑</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
