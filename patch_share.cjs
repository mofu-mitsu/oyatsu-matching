const fs = require('fs');

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// handleShare の変更
const shareRegex = /const handleShare = async \(\) => {[\s\S]*?setIsCapturing\(true\);\s*try {\s*\/\/ html-to-image の Safari バグ回避 \(ウォームアップ\)\s*await toPng\(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1 }\);\s*const dataUrl = await toPng\(node, {/m;

const newShareCode = `const handleShare = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;

    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1 });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {`;

code = code.replace(shareRegex, newShareCode);

// handleSaveImage の変更
const saveRegex = /const handleSaveImage = async \(\) => {[\s\S]*?setIsCapturing\(true\);\s*try {\s*\/\/ html-to-image で oklab エラーを回避するため、背景色などを指定\s*const dataUrl = await toPng\(node, {/m;

const newSaveCode = `const handleSaveImage = async () => {
    if (!snackType) return;
    const node = document.getElementById('snack-result-card');
    if (!node) return;
    
    setIsCapturing(true);
    try {
      await new Promise(r => setTimeout(r, 150));
      await toPng(node, { quality: 0.1, backgroundColor: '#ffffff', pixelRatio: 1 });
      await new Promise(r => setTimeout(r, 150));
      const dataUrl = await toPng(node, {`;

code = code.replace(saveRegex, newSaveCode);

fs.writeFileSync('src/components/ResultView.tsx', code);
