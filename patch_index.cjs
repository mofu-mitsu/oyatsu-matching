const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf-8');

if (!code.includes('<link rel="icon"')) {
  code = code.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
}

fs.writeFileSync('index.html', code);
