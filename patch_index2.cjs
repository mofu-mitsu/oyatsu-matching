const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf-8');

if (!code.includes('favicon.svg')) {
  code = code.replace('<link rel="canonical"', '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n    <link rel="canonical"');
  fs.writeFileSync('index.html', code);
}
