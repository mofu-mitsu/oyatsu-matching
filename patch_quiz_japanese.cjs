const fs = require('fs');
let code = fs.readFileSync('src/components/QuizView.tsx', 'utf-8');

// "あと和と洋中間の人は洋寄りにした方がいいかも 多分洋菓子の方が人気だから"
// => japaneseValueのデフォルトを50から75に変更 (右側が洋風)
code = code.replace(
  "const [japaneseValue, setJapaneseValue] = useState<number>(50); // 中間",
  "const [japaneseValue, setJapaneseValue] = useState<number>(75); // 洋風寄りに変更"
);

fs.writeFileSync('src/components/QuizView.tsx', code);
