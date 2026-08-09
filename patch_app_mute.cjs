const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `  const [isMuted, setIsMuted] = useState(false);
  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.5);
      setIsMuted(false);
      playPopSound();
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };`;

const replace = `  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.5);
      setIsMuted(false);
      // AudioContext の resume は sound.ts 内で処理されるので、playPopSoundを呼ぶだけでOK
      setTimeout(() => { playPopSound(); }, 10);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };`;

if (code.includes(target)) {
  code = code.replace(target, replace);
  fs.writeFileSync('src/App.tsx', code);
}
