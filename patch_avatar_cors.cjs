const fs = require('fs');
let code = fs.readFileSync('src/components/SnackCharacterAvatar.tsx', 'utf-8');

code = code.replace(/referrerPolicy="no-referrer"/g, 'referrerPolicy="no-referrer"\n          crossOrigin="anonymous"');

fs.writeFileSync('src/components/SnackCharacterAvatar.tsx', code);
