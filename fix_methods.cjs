const fs = require('fs');

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// 既存の handleSaveImage, handleShare を見つけて削除する。
// ちょっと複雑なので indexOf と substring を使う。

const saveIdx = code.indexOf('const handleSaveImage = async () => {');
const shareIdx = code.indexOf('const handleShare = async () => {');
const afterShareIdx = code.indexOf('// パラメータバー用', shareIdx);

if (saveIdx !== -1 && shareIdx !== -1 && afterShareIdx !== -1) {
  const before = code.substring(0, saveIdx);
  const after = code.substring(afterShareIdx);

  const newMethods = `const handleSaveImage = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;
    
    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1, useCORS: true, cacheBust: true });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2, useCORS: true, cacheBust: true,
      });
      
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        setShowImageModal(dataUrl);
      } else {
        const link = document.createElement('a');
        link.download = \`oyatsu-shindan-\${snackType.code}.png\`;
        link.href = dataUrl;
        link.click();
      }
    } catch (err) {
      console.error('画像保存に失敗しました:', err);
      alert('画像の保存に失敗しちゃいました💦');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleShare = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;

    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1, useCORS: true, cacheBust: true });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2, useCORS: true, cacheBust: true,
      });
      
      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], \`oyatsu-\${snackType.code}.png\`, { type: 'image/png' });

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: '私のおやつ性格診断結果！',
          text: getShareText(snackType.id, snackType.characterName),
          files: [file],
        });
      } else {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
          setShowImageModal(dataUrl);
        } else {
          const link = document.createElement('a');
          link.download = \`oyatsu-\${snackType.code}.png\`;
          link.href = dataUrl;
          link.click();
        }
        alert('お使いのブラウザは画像シェアに対応していないため、画像を保存しました！SNS等でシェアしてみてね✨');
      }
    } catch (err) {
      console.error('シェアに失敗しました:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleTextShare = () => {
    if (!snackType) return;
    const shareText = getShareText(snackType.id, snackType.characterName);
    if (navigator.share) {
      navigator.share({
        title: '私のおやつ性格診断結果！',
        text: shareText,
      }).catch(console.error);
    } else {
      const url = \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(shareText)}\`;
      window.open(url, '_blank');
    }
  };

  `;
  code = before + newMethods + after;
}

// モーダルがなかったら追加
if (!code.includes('setShowImageModal(null)')) {
  const btnCloseIdx = code.lastIndexOf('</div>');
  const modalJsx = `
      {showImageModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowImageModal(null)}>
          <div className="bg-white p-4 rounded-3xl max-w-sm w-full space-y-4" onClick={e => e.stopPropagation()}>
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
  
  if (btnCloseIdx !== -1) {
    code = code.substring(0, btnCloseIdx) + modalJsx + '\\n    </div>';
  }
}

fs.writeFileSync('src/components/ResultView.tsx', code);
