const fs = require('fs');
let code = fs.readFileSync('src/components/EncyclopediaView.tsx', 'utf-8');

if (!code.includes('playPopSound')) {
  code = code.replace("import { BookOpen, Search, Filter } from 'lucide-react';", "import { BookOpen, Search, Filter } from 'lucide-react';\nimport { playPopSound } from '../lib/sound';");
  
  code = code.replace(/onClick=\{\(\) \=\> setSelectedCategory\(cat\)\}/g, "onClick={() => { playPopSound(); setSelectedCategory(cat); }}");
  code = code.replace(/onClick=\{\(\) \=\> setExpandedId\(expandedId \=\=\= snack\.id \? null \: snack\.id\)\}/g, "onClick={() => { playPopSound(); setExpandedId(expandedId === snack.id ? null : snack.id); }}");
  
  fs.writeFileSync('src/components/EncyclopediaView.tsx', code);
}
