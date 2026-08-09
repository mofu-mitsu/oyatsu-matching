const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

// インポート追加
if (!code.includes("getFallbackItems")) {
  code = code.replace("import { sendResultToGAS } from '../lib/gas';", "import { sendResultToGAS } from '../lib/gas';\nimport { getFallbackItems } from '../data/fallbackItems';");
}

// 2重送信防止とフォールバックの修正
const targetFetch = `      const res = await fetch(\`/api/rakuten/search?\${params.toString()}\`);
      if (res.ok) {
        const data = await res.json();
        setItems(data.items || []);
        setKeywordUsed(data.keywordUsed || mainKw);
      } else {
        console.warn('楽天検索API呼び出し失敗');
      }
    } catch (err) {
      console.error('Rakuten fetch error:', err);
    } finally {
      setLoading(false);
    }`;

const replaceFetch = `      const res = await fetch(\`/api/rakuten/search?\${params.toString()}\`);
      if (res.ok) {
        const data = await res.json();
        setItems(data.items || []);
        setKeywordUsed(data.keywordUsed || mainKw);
      } else {
        const text = await res.text();
        console.warn(\`楽天検索API呼び出し失敗: Status=\${res.status}, Text=\${text}\`);
        throw new Error('API failed'); // catchブロックでフォールバックさせる
      }
    } catch (err) {
      console.error('Rakuten fetch error:', err);
      console.log('フォールバックデータを使用します');
      const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes);
      setItems(fallbacks);
      setKeywordUsed(mainKw + " (フォールバック)");
    } finally {
      setLoading(false);
    }`;

code = code.replace(targetFetch, replaceFetch);

const targetEffect = `  useEffect(() => {
    // 診断結果に基づき、16タイプを決定
    const resultType = calculateSnackType(
      answers.sweetValue,
      answers.japaneseValue,
      answers.freshValue,
      answers.textures
    );
    setSnackType(resultType);
    setRandomEyeContact(getRandomEyeContactMessage(resultType));
    setRandomJururi(getRandomJururiMessage(resultType));

    // 楽天API呼び出し
    fetchRakutenItems(resultType, answers.budget, answers.flavors, answers.dislikes, answers.customDislike);

    // GASに診断結果を送信（初回マウント/診断完了時）
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

const replaceEffect = `  const hasSentToGAS = React.useRef(false);
  useEffect(() => {
    // 診断結果に基づき、16タイプを決定
    const resultType = calculateSnackType(
      answers.sweetValue,
      answers.japaneseValue,
      answers.freshValue,
      answers.textures
    );
    setSnackType(resultType);
    setRandomEyeContact(getRandomEyeContactMessage(resultType));
    setRandomJururi(getRandomJururiMessage(resultType));

    // 楽天API呼び出し
    fetchRakutenItems(resultType, answers.budget, answers.flavors, answers.dislikes, answers.customDislike);

    // GASに診断結果を送信（初回マウント/診断完了時のみ1回）
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

code = code.replace(targetEffect, replaceEffect);
fs.writeFileSync('src/components/ResultView.tsx', code);
