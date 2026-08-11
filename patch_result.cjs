const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// Replace imports
code = code.replace(/import \{ toPng \} from 'html-to-image';/g, "import html2canvas from 'html2canvas';");

// Replace handleSaveImage
const saveRegex = /const handleSaveImage = async \(\) => \{[\s\S]*?setIsCapturing\(false\);\n    \}\n  \};/;
const newSave = `const handleSaveImage = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;
    
    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      const canvas = await html2canvas(node, { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false });
      const dataUrl = canvas.toDataURL('image/png', 0.95);
      
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
      const canvas = await html2canvas(node, { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false });
      const dataUrl = canvas.toDataURL('image/png', 0.95);
      
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
    } finally {
      setIsCapturing(false);
    }
  };`;
code = code.replace(shareRegex, newShare);

fs.writeFileSync('src/components/ResultView.tsx', code);
