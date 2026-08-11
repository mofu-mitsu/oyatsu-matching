const fs = require('fs');
let code = fs.readFileSync('src/components/SnackCharacterAvatar.tsx', 'utf-8');

const replacement = `
  const [dataUri, setDataUri] = useState<string | null>(null);

  useEffect(() => {
    if (aiGeneratedImg) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          setDataUri(canvas.toDataURL('image/jpeg', 0.8));
        }
      };
      img.onerror = () => {
        // Fallback
        setDataUri(aiGeneratedImg);
      };
      img.src = aiGeneratedImg;
    }
  }, [aiGeneratedImg]);
`;

code = code.replace(/  const \[dataUri, setDataUri\] = useState<string \| null>\(null\);[\s\S]*?\}, \[aiGeneratedImg\]\);/, replacement);

fs.writeFileSync('src/components/SnackCharacterAvatar.tsx', code);
