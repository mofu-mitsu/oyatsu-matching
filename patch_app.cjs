const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const targetStr = `      {/* フッター */}
      <footer className="relative z-10 border-t border-pink-100 bg-white/80 backdrop-blur-md py-6 text-center text-xs text-stone-500 space-y-2">`;

const replaceStr = `      {/* ホームへ戻るボタン */}
      <div className="relative z-10 flex justify-center pb-8 pt-4">
        <a 
          href="https://mofu-mitsu.github.io/"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-sky-200 hover:border-sky-300 rounded-full text-sm font-bold text-sky-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            🏠 ホームへ戻る (mofu-mitsu.github.io)
          </span>
          <div className="absolute inset-0 bg-sky-50 rounded-full scale-0 group-hover:scale-100 transition-transform origin-center duration-300 ease-out"></div>
        </a>
      </div>

      {/* フッター */}
      <footer className="relative z-10 border-t border-pink-100 bg-white/80 backdrop-blur-md py-6 text-center text-xs text-stone-500 space-y-2">`;

code = code.replace(targetStr, replaceStr);
fs.writeFileSync('src/App.tsx', code);
