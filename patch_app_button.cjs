const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const targetStr = `      {/* ホームへ戻るボタン */}
      <div className="relative z-10 flex justify-center pb-8 pt-4">
        <a 
          href="https://mofu-mitsu.github.io/"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-sky-200 hover:border-sky-300 rounded-full text-sm font-bold text-sky-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <span className="relative z-10 flex items-center gap-2">
            🏠 ホームへ戻る
          </span>
          <div className="absolute inset-0 bg-sky-50 rounded-full scale-0 group-hover:scale-100 transition-transform origin-center duration-300 ease-out"></div>
        </a>
      </div>`;

const replaceStr = `      {/* ホームへ戻るボタン */}
      <div className="relative z-10 flex justify-center pb-10 pt-4">
        <a 
          href="https://mofu-mitsu.github.io/"
          className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-stone-800 to-stone-700 rounded-full text-sm font-extrabold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 border border-stone-600"
        >
          <span className="relative z-10 flex items-center gap-2 tracking-wide">
            🏠 ホームへ戻る
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>`;

code = code.replace(targetStr, replaceStr);
fs.writeFileSync('src/App.tsx', code);
