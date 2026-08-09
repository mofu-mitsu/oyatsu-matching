const fs = require('fs');

let code = `const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();

if (typeof (window as any).__masterVolume === 'undefined') {
  (window as any).__masterVolume = 0; // 最初はオフ（ミュート）
}

export const setVolume = (vol: number) => {
  (window as any).__masterVolume = Math.max(0, Math.min(1, vol));
};

export const getVolume = () => (window as any).__masterVolume;

const playWithResume = (playFn: () => void) => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().then(playFn).catch(console.error);
  } else {
    playFn();
  }
};

// 短いポップ音
export const playPopSound = () => {
  if (getVolume() <= 0) return;
  
  const play = () => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(getVolume() * 0.3, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  };

  playWithResume(play);
};

// 決定音
export const playSelectSound = () => {
  if (getVolume() <= 0) return;
  
  const play = () => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(getVolume() * 0.3, audioCtx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  };

  playWithResume(play);
};

// キラキラ音（結果表示など）
export const playSparkleSound = () => {
  if (getVolume() <= 0) return;
  
  const play = () => {
    const notes = [800, 1000, 1200, 1600];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      const startTime = audioCtx.currentTime + i * 0.08;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(getVolume() * 0.2, startTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  };

  playWithResume(play);
};
`;

fs.writeFileSync('src/lib/sound.ts', code);
