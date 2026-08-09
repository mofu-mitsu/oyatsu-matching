const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf-8');

const targetStr = `            <div className="flex flex-col">
              <p className="text-[11px] text-stone-500 font-medium">
                あなたにぴったりのおやつを召喚・お迎えできるスイーツ診断🍪
              </p>
              <a 
                href="https://mofu-mitsu.github.io/" 
                className="text-[10px] text-sky-600 hover:text-sky-800 transition-colors mt-0.5 inline-flex items-center gap-0.5 w-fit"
              >
                ホームへ戻る（https://mofu-mitsu.github.io/）
              </a>
            </div>`;

const replaceStr = `            <p className="text-[11px] text-stone-500 font-medium">
              あなたにぴったりのおやつを召喚・お迎えできるスイーツ診断🍪
            </p>`;

code = code.replace(targetStr, replaceStr);
fs.writeFileSync('src/components/Header.tsx', code);
