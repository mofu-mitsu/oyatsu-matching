const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const oldScope = `    setLoading(true);
    try {
      // 検索キーワードの構築（再検索のたびに変わるようにランダムに選ぶ）
      const randomKwIndex = Math.floor(Math.random() * typeInfo.recommendedKeywords.length);
      let mainKw = typeInfo.recommendedKeywords[randomKwIndex] || typeInfo.recommendedKeywords[0] || 'スイーツ';

      // モードがギフトの場合、キーワードをギフト向けに強化
      if (answers.mode === 'gift') {
        mainKw = \`ギフト \${mainKw}\`;
        // アンリ・シャルパンティエなどの有名店を混ぜるのもアリ（ただし絞り込みすぎると出ないためOR検索などを考慮するか、単にギフトをつける）
      }

      // 気分（mood）によるキーワード強化
      if (answers.mode === 'self' && answers.mood) {
        if (answers.mood === 'ご褒美') mainKw = \`高級 \${mainKw}\`;
        if (answers.mood === '夜食') mainKw = \`おつまみ \${mainKw}\`; // or 低カロリー
      }

      // フレーバーの付加はバックエンド側(server.ts)で行うためここでは行わない

      // カスタムキーワード指定があれば優先
      if (customSearchKeyword.trim()) {
        mainKw = customSearchKeyword.trim();
      }

      // 予算計算
      let minP = 0;
      let maxP = 0;
      if (selectedBudget === '500') { minP = 0; maxP = 800; }
      else if (selectedBudget === '1000') { minP = 500; maxP = 1800; }
      else if (selectedBudget === '3000') { minP = 1500; maxP = 3800; }
      else if (selectedBudget === '5000') { minP = 3000; maxP = 6000; }
      else if (selectedBudget === '10000') { minP = 5000; maxP = 12000; }

      // NGキーワード
      const allDislikes = [...dislikeList];
      if (customDis.trim()) allDislikes.push(customDis.trim());`;


const newScope = `    setLoading(true);
    let mainKw = typeInfo.recommendedKeywords[0] || 'スイーツ';
    let minP = 0;
    let maxP = 0;
    const allDislikes = [...dislikeList];
    if (customDis.trim()) allDislikes.push(customDis.trim());

    try {
      // 検索キーワードの構築（再検索のたびに変わるようにランダムに選ぶ）
      const randomKwIndex = Math.floor(Math.random() * typeInfo.recommendedKeywords.length);
      mainKw = typeInfo.recommendedKeywords[randomKwIndex] || typeInfo.recommendedKeywords[0] || 'スイーツ';

      // モードがギフトの場合、キーワードをギフト向けに強化
      if (answers.mode === 'gift') {
        mainKw = \`ギフト \${mainKw}\`;
      }

      // 気分（mood）によるキーワード強化
      if (answers.mode === 'self' && answers.mood) {
        if (answers.mood === 'ご褒美') mainKw = \`高級 \${mainKw}\`;
        if (answers.mood === '夜食') mainKw = \`おつまみ \${mainKw}\`; 
      }

      // カスタムキーワード指定があれば優先
      if (customSearchKeyword.trim()) {
        mainKw = customSearchKeyword.trim();
      }

      // 予算計算
      if (selectedBudget === '500') { minP = 0; maxP = 800; }
      else if (selectedBudget === '1000') { minP = 500; maxP = 1800; }
      else if (selectedBudget === '3000') { minP = 1500; maxP = 3800; }
      else if (selectedBudget === '5000') { minP = 3000; maxP = 6000; }
      else if (selectedBudget === '10000') { minP = 5000; maxP = 12000; }
`;

code = code.replace(oldScope, newScope);
fs.writeFileSync('src/components/ResultView.tsx', code);
