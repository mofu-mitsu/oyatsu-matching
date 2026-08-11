const fs = require('fs');
let code = fs.readFileSync('src/components/SnackCharacterAvatar.tsx', 'utf-8');
code = code.replace(/          referrerPolicy="no-referrer"\n/g, '');
code = code.replace(/          crossOrigin="anonymous"\n/g, '');
fs.writeFileSync('src/components/SnackCharacterAvatar.tsx', code);
