const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const target = `    // GASに診断結果を送信（初回マウント/診断完了時）
    sendResultToGAS({
      mode: answers.mode,
      typeCode: resultType.code,
      typeName: resultType.title,
      answers: answers,
      budget: answers.budget,
      flavors: answers.flavors,
      keywordUsed: resultType.recommendedKeywords[0],
    });
  }, [answers]);`;

const replace = `    // GASに診断結果を送信（初回マウント/診断完了時）
    if (!hasSentToGAS.current) {
      hasSentToGAS.current = true;
      sendResultToGAS({
        mode: answers.mode,
        typeCode: resultType.code,
        typeName: resultType.title,
        answers: answers,
        budget: answers.budget,
        flavors: answers.flavors,
        keywordUsed: resultType.recommendedKeywords[0],
      });
    }
  }, [answers]);`;

if (code.includes('sendResultToGAS({') && !code.includes('hasSentToGAS.current = true')) {
  code = code.replace(target, replace);
  code = code.replace('const [keywordUsed, setKeywordUsed] = useState<string>(\'\');', 'const [keywordUsed, setKeywordUsed] = useState<string>(\'\');\n  const hasSentToGAS = React.useRef(false);');
  fs.writeFileSync('src/components/ResultView.tsx', code);
}
