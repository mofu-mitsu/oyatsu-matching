const fs = require('fs');

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// 1. fallbackとAPIを混ぜて9個にする処理
const fetchRegex = /if \(combined\.length < 6\) \{[\s\S]*?\} catch \(err\)/m;
const newFetchLogic = `
      // APIが取得できたものに関わらず、常にfallbackから最低3つは追加する（最大9つになるように）
      const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes);
      const shuffledFallbacks = fallbacks.sort(() => 0.5 - Math.random());
      const seenUrls = new Set(combined.map((item: any) => item.itemUrl));
      
      let fallbackAddedCount = 0;
      
      // まずAPIが6件未満なら、fallbackを足して6件にする
      for (const fb of shuffledFallbacks) {
        if (combined.length >= 6) break;
        if (!seenUrls.has(fb.itemUrl)) {
          combined.push(fb);
          seenUrls.add(fb.itemUrl);
          fallbackAddedCount++;
        }
      }
      
      // さらに、まだ使っていないfallbackからランダムに3件追加する (合計最大9件)
      let extraAdded = 0;
      for (const fb of shuffledFallbacks) {
        if (extraAdded >= 3 || combined.length >= 9) break;
        if (!seenUrls.has(fb.itemUrl)) {
          combined.push(fb);
          seenUrls.add(fb.itemUrl);
          extraAdded++;
        }
      }

      setItems(combined);
      setKeywordUsed(usedKw);
    } catch (err)`;
code = code.replace(fetchRegex, newFetchLogic);

// 2. モーダルstateとスマホ判定
const stateRegex = /const \[isCapturing, setIsCapturing\] = useState<boolean>\(false\);/m;
const newState = `const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [showImageModal, setShowImageModal] = useState<string | null>(null);`;
code = code.replace(stateRegex, newState);

// 3. handleSaveImageの変更
const saveImageRegex = /const handleSaveImage = async \(\) => \{[\s\S]*?setIsCapturing\(false\);\s*\};/m;
const newSaveImage = `const handleSaveImage = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;
    
    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1 });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2, // 高画質化
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
  };`;
code = code.replace(saveImageRegex, newSaveImage);

// 4. handleShare (画像シェア) と handleTextShare (テキストシェア) の追加
const handleShareRegex = /const handleShare = async \(\) => \{[\s\S]*?setIsCapturing\(false\);\s*\};/m;
const newHandleShare = `const handleShare = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;

    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1 });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
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
        // シェア非対応の場合はフォールバックとして保存
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
      // alert('シェア機能の呼び出しに失敗しちゃいました💦');
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
      // Twitterインテント
      const url = \`https://twitter.com/intent/tweet?text=\${encodeURIComponent(shareText)}\`;
      window.open(url, '_blank');
    }
  };`;
code = code.replace(handleShareRegex, newHandleShare);

// 5. ボタン群とモーダルのJSX追加
const buttonsRegex = /<button[\s\S]*?画像を保存する<\/span>\s*<\/button>\s*<button[\s\S]*?結果をシェアする<\/span>\s*<\/button>\s*<\/div>/m;
const newButtons = `<button
          type="button"
          onClick={() => { playPopSound(); handleSaveImage(); }}
          disabled={isCapturing}
          className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-extrabold text-[10px] sm:text-xs px-2 sm:px-3 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-1 disabled:opacity-50 flex-1 justify-center"
        >
          <Download className="w-4 h-4" />
          <span>画像を保存</span>
        </button>
        <button
          type="button"
          onClick={() => { playPopSound(); handleShare(); }}
          disabled={isCapturing}
          className="bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 font-extrabold text-[10px] sm:text-xs px-2 sm:px-3 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-1 disabled:opacity-50 flex-1 justify-center"
        >
          <Share2 className="w-4 h-4" />
          <span>画像をシェア</span>
        </button>
        <button
          type="button"
          onClick={() => { playPopSound(); handleTextShare(); }}
          disabled={isCapturing}
          className="bg-stone-800 hover:bg-stone-900 text-white font-extrabold text-[10px] sm:text-xs px-2 sm:px-4 py-2.5 rounded-2xl shadow-md shadow-stone-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1 disabled:opacity-50 flex-1 justify-center"
        >
          <Share2 className="w-4 h-4" />
          <span>結果をシェア</span>
        </button>
      </div>

      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowImageModal(null)}>
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
code = code.replace(buttonsRegex, newButtons);
fs.writeFileSync('src/components/ResultView.tsx', code);
