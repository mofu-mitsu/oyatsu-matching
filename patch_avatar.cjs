const fs = require('fs');
let code = fs.readFileSync('src/components/SnackCharacterAvatar.tsx', 'utf-8');

code = code.replace(/object-cover/g, 'object-contain');

fs.writeFileSync('src/components/SnackCharacterAvatar.tsx', code);
