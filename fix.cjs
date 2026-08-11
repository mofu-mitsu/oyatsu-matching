const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');
code = code.replace(/const \[rakutenImageUri, setRakutenImageUri\] = useState<string \| null>\(null\);[\s\S]*?\}, \[recommendedItem\?.imageUrl\]\);/g, '');
code = code.replace(/rakutenImageUri \|\| /g, '');
fs.writeFileSync('src/components/ResultView.tsx', code);
