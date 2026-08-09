const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
let masterVolume = 0; // 最初はオフ（ミュート）

export const setVolume = (vol: number) => {
  masterVolume = Math.max(0, Math.min(1, vol));
};

export const getVolume = () => masterVolume;

// AudioContext が suspend 状態なら resume を試みる関数
export const resumeAudioContext = () => {
  if (audioCtx.state === 'suspended') {
    return audioCtx.resume();
  }
  return Promise.resolve();
};

// 短いポップ音
export const playPopSound = () => {
  if (masterVolume <= 0) return;
  
  const play = () => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(masterVolume * 0.3, audioCtx.currentTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  };

  resumeAudioContext().then(play).catch(console.error);
};

// 決定音
export const playSelectSound = () => {
  if (masterVolume <= 0) return;
  
  const play = () => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(masterVolume * 0.3, audioCtx.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
  };

  resumeAudioContext().then(play).catch(console.error);
};

// キラキラ音（結果表示など）
export const playSparkleSound = () => {
  if (masterVolume <= 0) return;
  
  const play = () => {
    const notes = [800, 1000, 1200, 1600];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      const startTime = audioCtx.currentTime + i * 0.08;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(masterVolume * 0.2, startTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  };

  resumeAudioContext().then(play).catch(console.error);
};
