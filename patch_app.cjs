const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// useState の初期値に localStorage を使うように変更
code = code.replace(
  /const \[activeTab, setActiveTab\] = useState<'home' \| 'quiz' \| 'quick' \| 'encyclopedia'>\('home'\);/,
  `const [activeTab, setActiveTab] = useState<'home' | 'quiz' | 'quick' | 'encyclopedia'>(() => {
    const saved = localStorage.getItem('oyatsu_activeTab');
    return (saved === 'home' || saved === 'quiz' || saved === 'quick' || saved === 'encyclopedia') ? saved : 'home';
  });`
);

code = code.replace(
  /const \[quizMode, setQuizMode\] = useState<QuizMode>\('self'\);/,
  `const [quizMode, setQuizMode] = useState<QuizMode>(() => {
    const saved = localStorage.getItem('oyatsu_quizMode');
    return (saved === 'self' || saved === 'friend') ? saved : 'self';
  });`
);

code = code.replace(
  /const \[answers, setAnswers\] = useState<QuizAnswers \| null>\(null\);/,
  `const [answers, setAnswers] = useState<QuizAnswers | null>(() => {
    const saved = localStorage.getItem('oyatsu_answers');
    try {
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });`
);

// 状態が変化したときに localStorage に保存するための useEffect を追加
const useEffectImport = "import React, { useState, useEffect } from 'react';";
code = code.replace(/import React, \{ useState \} from 'react';/, useEffectImport);

const useEffectHook = `
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
`;

code = code.replace(/const \[isMuted, setIsMuted\] = useState\(true\);/, useEffectHook + '\n  const [isMuted, setIsMuted] = useState(true);');

// トップへ戻る、やり直す（handleReset など）でタブを home に戻すときに確実に保存される
fs.writeFileSync('src/App.tsx', code);
