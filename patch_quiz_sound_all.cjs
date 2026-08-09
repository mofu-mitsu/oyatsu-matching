const fs = require('fs');
let code = fs.readFileSync('src/components/QuizView.tsx', 'utf-8');

code = code.replace(/onClick=\{\(\) \=\> toggleFlavor\(flavor\)\}/g, "onClick={() => { playPopSound(); toggleFlavor(flavor); }}");
code = code.replace(/onClick=\{\(\) \=\> toggleDislike\(dislike\)\}/g, "onClick={() => { playPopSound(); toggleDislike(dislike); }}");
code = code.replace(/onClick=\{\(\) \=\> setBudget\(b\.val as any\)\}/g, "onClick={() => { playPopSound(); setBudget(b.val as any); }}");
code = code.replace(/onClick=\{\(\) \=\> setMood\(m\.id\)\}/g, "onClick={() => { playPopSound(); setMood(m.id); }}");
code = code.replace(/onClick=\{\(\) \=\> setGiftTarget\(target\)\}/g, "onClick={() => { playPopSound(); setGiftTarget(target); }}");
code = code.replace(/onClick=\{\(\) \=\> setGiftVibe\(vibe\)\}/g, "onClick={() => { playPopSound(); setGiftVibe(vibe); }}");

fs.writeFileSync('src/components/QuizView.tsx', code);
