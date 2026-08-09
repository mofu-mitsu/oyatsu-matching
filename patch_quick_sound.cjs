const fs = require('fs');
let code = fs.readFileSync('src/components/QuickMatchView.tsx', 'utf-8');

if (!code.includes('playPopSound')) {
  code = code.replace("import { UtensilsCrossed, ArrowRight } from 'lucide-react';", "import { UtensilsCrossed, ArrowRight } from 'lucide-react';\nimport { playPopSound, playSelectSound, playSparkleSound } from '../lib/sound';");
  
  code = code.replace(/onClick=\{\(\) \=\> handleSelect\(opt\)\}/g, "onClick={() => { playPopSound(); handleSelect(opt); }}");
  code = code.replace(/onClick=\{handleResult\}/g, "onClick={() => { playSparkleSound(); handleResult(); }}");
  
  fs.writeFileSync('src/components/QuickMatchView.tsx', code);
}
