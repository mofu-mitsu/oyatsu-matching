const fs = require('fs');
let code = fs.readFileSync('src/components/QuizView.tsx', 'utf-8');

if (!code.includes('playPopSound')) {
  code = code.replace("import { Sparkles, ArrowRight, ArrowLeft, Check, Gift, Heart, PlusCircle, HelpCircle } from 'lucide-react';", "import { Sparkles, ArrowRight, ArrowLeft, Check, Gift, Heart, PlusCircle, HelpCircle } from 'lucide-react';\nimport { playPopSound, playSelectSound, playSparkleSound } from '../lib/sound';");
  
  // onClick などを置換
  code = code.replace(/onClick=\{\(\) \=\> setStep\(step \+ 1\)\}/g, "onClick={() => { playPopSound(); setStep(step + 1); }}");
  code = code.replace(/onClick=\{\(\) \=\> setStep\(step \- 1\)\}/g, "onClick={() => { playPopSound(); setStep(step - 1); }}");
  code = code.replace(/onClick=\{\(\) \=\> \{\n                playSparkleSound\(\);\n                onComplete\(/g, "onClick={() => {\n                playSparkleSound();\n                onComplete(");
  code = code.replace(/onClick=\{\(\) \=\> onComplete\(/g, "onClick={() => { playSparkleSound(); onComplete(");
  
  fs.writeFileSync('src/components/QuizView.tsx', code);
}
