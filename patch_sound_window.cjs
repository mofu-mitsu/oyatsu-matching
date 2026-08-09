const fs = require('fs');
let code = fs.readFileSync('src/lib/sound.ts', 'utf-8');

code = code.replace(
  "let masterVolume = 0; // 最初はオフ（ミュート）",
  "if (!(window as any).__masterVolume) { (window as any).__masterVolume = 0; }\nconst getMasterVolume = () => (window as any).__masterVolume;\nconst setMasterVolume = (v: number) => { (window as any).__masterVolume = v; };"
);

code = code.replace(/masterVolume \=/g, "setMasterVolume");
code = code.replace(/masterVolume/g, "getMasterVolume()");
code = code.replace(/setMasterVolume Math/g, "setMasterVolume(Math");
code = code.replace(/vol\);/g, "vol));");

fs.writeFileSync('src/lib/sound.ts', code);
