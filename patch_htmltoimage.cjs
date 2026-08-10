const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const regex1 = /pixelRatio: 1 \}\);/g;
const replacement1 = "pixelRatio: 1, useCORS: true, cacheBust: true });";
code = code.replace(regex1, replacement1);

const regex2 = /pixelRatio: 2, \/\/ 高画質化/g;
const replacement2 = "pixelRatio: 2, useCORS: true, cacheBust: true,";
code = code.replace(regex2, replacement2);

const regex3 = /pixelRatio: 2,\n\s+\}\);/g;
const replacement3 = "pixelRatio: 2, useCORS: true, cacheBust: true });";
code = code.replace(regex3, replacement3);

fs.writeFileSync('src/components/ResultView.tsx', code);
