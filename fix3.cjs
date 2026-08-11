const fs = require('fs');
let code = fs.readFileSync('src/components/SnackCharacterAvatar.tsx', 'utf-8');
code = code.replace(/className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"/g, 'className="w-full h-full object-cover rounded-2xl"');
fs.writeFileSync('src/components/SnackCharacterAvatar.tsx', code);
