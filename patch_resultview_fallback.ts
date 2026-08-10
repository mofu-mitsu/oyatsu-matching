import fs from 'fs';

let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const fetchRegex = /const res = await fetch\(`\/api\/rakuten\/search\?\$\{params\.toString\(\)\}`\);[\s\S]*?\} catch \(err\) \{/m;

const newFetchLogic = `const res = await fetch(\`/api/rakuten/search?\${params.toString()}\`);
      let combined = [];
      let usedKw = mainKw;
      if (res.ok) {
        const data = await res.json();
        const apiItems = data.items || [];
        combined = [...apiItems];
        usedKw = data.keywordUsed || mainKw;
      } else {
        console.warn('API returned error');
      }

      if (combined.length < 6) {
        const fallbacks = getFallbackItems(typeInfo.id, minP, maxP, flavors, allDislikes);
        // フォールバックをランダムにシャッフル
        const shuffledFallbacks = fallbacks.sort(() => 0.5 - Math.random());
        const seenUrls = new Set(combined.map((item: any) => item.itemUrl));
        for (const fb of shuffledFallbacks) {
          if (combined.length >= 6) break;
          if (!seenUrls.has(fb.itemUrl)) {
            combined.push(fb);
            seenUrls.add(fb.itemUrl);
          }
        }
      }

      setItems(combined);
      setKeywordUsed(usedKw);
    } catch (err) {`;

code = code.replace(fetchRegex, newFetchLogic);

fs.writeFileSync('src/components/ResultView.tsx', code);
