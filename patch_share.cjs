const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const blobFunc = `
function dataURItoBlob(dataURI: string) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}
`;

// imports の直後あたりに関数を追加
code = code.replace(/import \{ getFallbackItems \} from '\.\.\/data\/fallbackItems';/, "import { getFallbackItems } from '../data/fallbackItems';\n" + blobFunc);

// fetch().blob() の置き換え
code = code.replace(
  /const blob = await \(await fetch\(dataUrl\)\)\.blob\(\);/,
  "const blob = dataURItoBlob(dataUrl);"
);

fs.writeFileSync('src/components/ResultView.tsx', code);
