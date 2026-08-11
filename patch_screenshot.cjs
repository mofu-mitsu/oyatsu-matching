const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// Replace imports
code = code.replace(/import \{ toPng \} from 'html-to-image';/, "import { domToPng } from 'modern-screenshot';");

// Replace toPng with domToPng
code = code.replace(/toPng\(/g, 'domToPng(');

fs.writeFileSync('src/components/ResultView.tsx', code);
