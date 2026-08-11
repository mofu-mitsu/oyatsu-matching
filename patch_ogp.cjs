const fs = require('fs');
let code = fs.readFileSync('generate_ogp.ts', 'utf-8');

// OGPページのパンくずの「ホーム」のリンク先を修正
code = code.replace(
  /<li><a href="\/" class="hover:text-rose-500 transition-colors">ホーム<\/a><\/li>/g,
  '<li><a href="https://mofu-mitsu.github.io/" class="hover:text-rose-500 transition-colors">ホーム</a></li>'
);

fs.writeFileSync('generate_ogp.ts', code);
