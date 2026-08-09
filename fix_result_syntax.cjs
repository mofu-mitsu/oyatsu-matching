const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

code = code.replace(/onClick=\{\(\) \=\> \{ playPopSound\(\); fetchRakutenItems\(snackType, budget, answers.flavors, answers.dislikes, answers.customDislike\)\}/g, "onClick={() => { playPopSound(); fetchRakutenItems(snackType, budget, answers.flavors, answers.dislikes, answers.customDislike); }}");

fs.writeFileSync('src/components/ResultView.tsx', code);
