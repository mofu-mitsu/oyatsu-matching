const params = new URLSearchParams({
  applicationId: RAKUTEN_APP_ID,
  accessKey: RAKUTEN_ACCESS_KEY,
  keyword: searchKeyword,
  hits: '12',
  format: 'json',
});

const apiUrl =
  `https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701?${params.toString()}`;

console.log('楽天API URL:', apiUrl.replace(
  RAKUTEN_ACCESS_KEY,
  '***'
));

const response = await fetch(apiUrl);

if (!response.ok) {
  const errorText = await response.text();

  console.error(
    `⚠️ 楽天APIエラー (${response.status}):`,
    errorText
  );

  fallbackNeeded = true;
  break;
}

data = await response.json();

console.log(
  '楽天API response items:',
  data?.Items?.length ?? 0
);
