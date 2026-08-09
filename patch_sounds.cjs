const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf-8');
app = app.replace(
  "const handleStartQuiz = (mode: QuizMode) => {",
  "const handleStartQuiz = (mode: QuizMode) => {\n    playPopSound();"
);
app = app.replace(
  "const handleQuizComplete = (completedAnswers: QuizAnswers) => {",
  "const handleQuizComplete = (completedAnswers: QuizAnswers) => {\n    playSparkleSound();"
);
app = app.replace(
  "const handleReset = () => {",
  "const handleReset = () => {\n    playPopSound();"
);
fs.writeFileSync('src/App.tsx', app);

let quiz = fs.readFileSync('src/components/QuizView.tsx', 'utf-8');
quiz = quiz.replace(
  "const handleNext = () => {",
  "const handleNext = () => {\n    playPopSound();"
);
quiz = quiz.replace(
  "const handleBack = () => {",
  "const handleBack = () => {\n    playPopSound();"
);
fs.writeFileSync('src/components/QuizView.tsx', quiz);

