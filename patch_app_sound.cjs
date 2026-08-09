const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

if (!code.includes('Volume2')) {
  code = code.replace("import { Cookie, Heart, Sparkles } from 'lucide-react';", "import { Cookie, Heart, Sparkles, Volume2, VolumeX } from 'lucide-react';\nimport { setVolume, getVolume, playSelectSound, playPopSound } from './lib/sound';");
  
  const stateInjection = `  const [quizMode, setQuizMode] = useState<QuizMode>('self');
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);
  
  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.5);
      setIsMuted(false);
      playPopSound();
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };`;
  code = code.replace("  const [quizMode, setQuizMode] = useState<QuizMode>('self');\n  const [answers, setAnswers] = useState<QuizAnswers | null>(null);", stateInjection);

  const headerInjection = `        <Header
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
        </button>`;
        
  code = code.replace(`        <Header
          activeTab={activeTab === 'home' ? 'quiz' : activeTab} // Headerにはhomeの表示はないのでquizとして扱う
          quizMode={quizMode}
          setActiveTab={setActiveTab}
          onStartQuiz={handleStartQuiz}
        />`, headerInjection);

  fs.writeFileSync('src/App.tsx', code);
}
