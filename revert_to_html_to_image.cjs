const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// Replace imports
code = code.replace(/import html2canvas from 'html2canvas';/, "import { toPng } from 'html-to-image';");

// Replace handleSaveImage
const saveRegex = /const handleSaveImage = async \(\) => \{[\s\S]*?setIsCapturing\(false\);\n    \}\n  \};/;
const newSave = `const handleSaveImage = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;
    
    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1, cacheBust: true, fetchRequestInit: { cache: 'no-cache' } });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        cacheBust: true,
        fetchRequestInit: { cache: 'no-cache' }
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
code = code.replace(saveRegex, newSave);

// Replace handleShare
const shareRegex = /const handleShare = async \(\) => \{[\s\S]*?setIsCapturing\(false\);\n    \}\n  \};/;
const newShare = `const handleShare = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;

    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1, cacheBust: true, fetchRequestInit: { cache: 'no-cache' } });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {
        quality: 0.95,
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        cacheBust: true,
        fetchRequestInit: { cache: 'no-cache' }
      });
      
      const blob = dataURItoBlob(dataUrl);
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
      alert('シェア画像の作成に失敗しちゃいました💦');
    } finally {
      setIsCapturing(false);
    }
  };`;
code = code.replace(shareRegex, newShare);

fs.writeFileSync('src/components/ResultView.tsx', code);
