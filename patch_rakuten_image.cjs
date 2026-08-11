const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// recommendedItem の画像を prefetch して dataURI にする処理を追加
const targetHook = `const [alternateType, setAlternateType] = useState<SnackTypeInfo | null>(null);`;
const addition = `
  const [rakutenImageUri, setRakutenImageUri] = useState<string | null>(null);

  useEffect(() => {
    if (recommendedItem?.imageUrl) {
      // Fetch rakuten image and convert to data URI to prevent html-to-image CORS/loading issues
      fetch('/api/image-proxy?url=' + encodeURIComponent(recommendedItem.imageUrl))
        .then(res => res.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setRakutenImageUri(reader.result as string);
          };
          reader.readAsDataURL(blob);
        })
        .catch(err => {
          console.error('Failed to proxy Rakuten image', err);
          setRakutenImageUri(recommendedItem.imageUrl);
        });
    }
  }, [recommendedItem?.imageUrl]);
`;

if (!code.includes('rakutenImageUri')) {
  code = code.replace(targetHook, targetHook + '\n' + addition);
  
  // img tag 置換
  code = code.replace(
    /<img\s+src=\{recommendedItem\.imageUrl\}\s+alt="おすすめおやつ"/,
    '<img src={rakutenImageUri || recommendedItem.imageUrl} crossOrigin="anonymous" alt="おすすめおやつ"'
  );
  fs.writeFileSync('src/components/ResultView.tsx', code);
}
