const fs = require('fs');

let code = fs.readFileSync('src/components/HomeView.tsx', 'utf-8');
code = code.replace(
  "onClick={() => onStartQuiz('self')}",
  "onClick={() => onStartQuiz('self')}"
); // It's passed to onStartQuiz which calls playSelectSound in App.tsx

// Wait, let's just add it explicitly in HomeView.tsx to be safe!
// Wait, no. App.tsx already does: 
// onStartQuiz={(mode) => { playSelectSound(); handleStartQuiz(mode); }}
// So HomeView calling onStartQuiz DOES play the sound.
