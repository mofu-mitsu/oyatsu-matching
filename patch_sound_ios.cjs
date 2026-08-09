const fs = require('fs');
let code = fs.readFileSync('src/lib/sound.ts', 'utf-8');

code = code.replace(
  "export const resumeAudioContext = () => {\n  if (audioCtx.state === 'suspended') {\n    return audioCtx.resume();\n  }\n  return Promise.resolve();\n};",
  "export const resumeAudioContext = () => {\n  if (audioCtx.state === 'suspended') {\n    audioCtx.resume();\n  }\n};"
);

code = code.replace(/resumeAudioContext\(\)\.then\(play\)\.catch\(console\.error\);/g, "resumeAudioContext();\n  play();");

fs.writeFileSync('src/lib/sound.ts', code);
