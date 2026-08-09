const fs = require('fs');
let code = fs.readFileSync('src/lib/sound.ts', 'utf-8');

code = code.replace(
  "export const resumeAudioContext = () => {\n  if (audioCtx.state === 'suspended') {\n    audioCtx.resume();\n  }\n};",
  "export const resumeAudioContext = async () => {\n  if (audioCtx.state === 'suspended') {\n    await audioCtx.resume();\n  }\n};"
);

code = code.replace(
  "  resumeAudioContext();\n  play();",
  "  resumeAudioContext().then(play).catch(console.error);"
);

code = code.replace(
  "  resumeAudioContext();\n  play();",
  "  resumeAudioContext().then(play).catch(console.error);"
);

code = code.replace(
  "  resumeAudioContext();\n  play();",
  "  resumeAudioContext().then(play).catch(console.error);"
);

fs.writeFileSync('src/lib/sound.ts', code);
