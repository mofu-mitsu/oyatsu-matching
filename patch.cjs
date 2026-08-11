const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// cacheBust: true の削除 (オプションごと消すか、falseにするか。ここはcacheBust: trueを消す)
code = code.replace(/cacheBust: true/g, 'cacheBust: false');

// モーダルのJSXを置換
const modalRegex = /\{showImageModal && \([\s\S]*?<\/div>\s*\)\}/;
const newModal = `{showImageModal && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto" onClick={() => setShowImageModal(null)}>
          <div className="bg-white p-4 rounded-3xl max-w-sm w-full space-y-4 my-8 relative" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setShowImageModal(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/40 backdrop-blur-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <p className="text-center font-extrabold text-stone-800">画像を長押しして保存してね✨</p>
            <div className="rounded-2xl overflow-hidden shadow-inner border border-stone-200">
              <img src={showImageModal} alt="診断結果" className="w-full h-auto" />
            </div>
            <button
              onClick={() => setShowImageModal(null)}
              className="w-full py-3 bg-stone-200 text-stone-800 font-bold rounded-2xl hover:bg-stone-300 transition-colors"
            >
              閉じる
            </button>
          </div>
        </div>
      )}`;
code = code.replace(modalRegex, newModal);

fs.writeFileSync('src/components/ResultView.tsx', code);
