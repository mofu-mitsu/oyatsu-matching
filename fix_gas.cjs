const fs = require('fs');
let code = fs.readFileSync('src/lib/gas.ts', 'utf-8');
code = code.replace('import.meta.env.VITE_GAS_URL', '(import.meta as any).env.VITE_GAS_URL');
fs.writeFileSync('src/lib/gas.ts', code);
