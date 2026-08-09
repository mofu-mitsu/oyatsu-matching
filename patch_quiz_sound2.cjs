const fs = require('fs');
let code = fs.readFileSync('src/components/QuizView.tsx', 'utf-8');

code = code.replace(/onClick=\{\(\) \=\> toggleTexture\(t\.label\)\}/g, "onClick={() => { playPopSound(); toggleTexture(t.label); }}");
code = code.replace(/onClick=\{\(\) \=\> toggleFlavor\(f\)\}/g, "onClick={() => { playPopSound(); toggleFlavor(f); }}");
code = code.replace(/onClick=\{\(\) \=\> toggleDislike\(d\)\}/g, "onClick={() => { playPopSound(); toggleDislike(d); }}");
code = code.replace(/onClick=\{\(\) \=\> setBudget\(b\)\}/g, "onClick={() => { playPopSound(); setBudget(b); }}");
code = code.replace(/onClick=\{\(\) \=\> setMood\(m\)\}/g, "onClick={() => { playPopSound(); setMood(m); }}");
code = code.replace(/onClick=\{\(\) \=\> setGiftTarget\(m\)\}/g, "onClick={() => { playPopSound(); setGiftTarget(m); }}");
code = code.replace(/onClick=\{\(\) \=\> setGiftVibe\(m\)\}/g, "onClick={() => { playPopSound(); setGiftVibe(m); }}");

fs.writeFileSync('src/components/QuizView.tsx', code);
