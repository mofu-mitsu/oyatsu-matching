const fs = require('fs');
let code = fs.readFileSync('src/components/SnackCharacterAvatar.tsx', 'utf-8');

// React import に useState, useEffect を追加
if (!code.includes('useEffect')) {
  code = code.replace(/import React from 'react';/, "import React, { useState, useEffect } from 'react';");
}

const componentStart = `export const SnackCharacterAvatar: React.FC<SnackCharacterAvatarProps> = ({`;
const newComponentStart = `export const SnackCharacterAvatar: React.FC<SnackCharacterAvatarProps> = ({`;

const hookLogic = `
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };
  const dimension = sizeMap[size];
  const aiGeneratedImg = AI_CHARACTER_IMAGES[typeId];
  
  const [dataUri, setDataUri] = useState<string | null>(null);

  useEffect(() => {
    if (aiGeneratedImg) {
      fetch(aiGeneratedImg)
        .then(res => res.blob())
        .then(blob => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setDataUri(reader.result);
          };
          reader.readAsDataURL(blob);
        })
        .catch(err => {
          console.error('Image fetch error', err);
          setDataUri(aiGeneratedImg);
        });
    }
  }, [aiGeneratedImg]);
`;

code = code.replace(/  const sizeMap = \{[\s\S]*?const aiGeneratedImg = AI_CHARACTER_IMAGES\[typeId\];/, hookLogic);

code = code.replace(/<img\s*src=\{aiGeneratedImg\}/, '<img\n          src={dataUri || aiGeneratedImg}');

fs.writeFileSync('src/components/SnackCharacterAvatar.tsx', code);
