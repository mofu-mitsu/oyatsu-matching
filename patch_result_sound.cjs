const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

if (!code.includes('playPopSound')) {
  code = code.replace("import { getFallbackItems } from '../data/fallbackItems';", "import { getFallbackItems } from '../data/fallbackItems';\nimport { playPopSound } from '../lib/sound';");
  
  code = code.replace(/onClick=\{\(\) \=\> setIsCustomizing\(!isCustomizing\)\}/g, "onClick={() => { playPopSound(); setIsCustomizing(!isCustomizing); }}");
  code = code.replace(/onClick=\{\(\) \=\> handleSaveImage\(\)\}/g, "onClick={() => { playPopSound(); handleSaveImage(); }}");
  code = code.replace(/onClick=\{handleShare\}/g, "onClick={() => { playPopSound(); handleShare(); }}");
  code = code.replace(/onClick=\{onReset\}/g, "onClick={() => { playPopSound(); onReset(); }}");
  code = code.replace(/onClick=\{\(\) \=\> fetchRakutenItems\(/g, "onClick={() => { playPopSound(); fetchRakutenItems(");
  
  fs.writeFileSync('src/components/ResultView.tsx', code);
}
