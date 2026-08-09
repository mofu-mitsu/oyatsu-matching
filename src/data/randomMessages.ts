export const EYE_CONTACT_MESSAGES = [
  '🍪 このおやつは、あなたに選ばれたそうにこちらをじーっと見ています…！',
  '🍓 いちごタルトが「早く会いたいな…🍓」とつぶやいています。',
  '🍮「賞味期限が来る前に、私を迎えに来てね…！」',
  '🍫「今なら一番サクサクの状態で待ってるよ！」',
  '🧁「今日のあなたのティータイムに立候補します！」',
  '🍡「ほっと一息つくとき、ぼくがそばにいるよ…🍵」',
  '🍨「冷たくてあま～い幸せ、今すぐ届けたいな…✨」',
  '🍘「パリッ！香ばしい音があなたを呼んでいます！」',
  '🥐「焼き立ての香りを想像してみて…最高でしょ？」',
  '🧀「大人の贅沢タイム、ぼくにおまかせあれ🍷」',
  '🐟「美味しくなるよう、生産者も頑張ってます！」',
  '✨「私をお迎えしてくれたら、今日がもっと特別な日になるよ！」',
  '🔥「今だけ送料無料かも…？迎えにくるなら今しかない！」',
  '🤤「もう我慢しなくていいんだよ…ポチッとしちゃおう！」',
  '👀「チラッ……（かごに入れてくれるのを待っているようです）」'
];

export const JURURI_MESSAGES = [
  'じゅるり……🤤 ぼくも一口食べたい……',
  'じーーーーっ👀✨ （目が輝いている…！）',
  'これ……絶対に美味しいやつだ……！🤤💧',
  'お腹が鳴っちゃうよぉ〜ぐぅ〜🤤',
  'ぼくを置いてどこ行くの？一口ちょうだい！✨',
  'もふもふ……美味しい匂いがする……🤤',
  'ねぇねぇ！今すぐお迎えしちゃおうよっ！🛒✨',
];

export function getRandomEyeContactMessage(): string {
  const index = Math.floor(Math.random() * EYE_CONTACT_MESSAGES.length);
  return EYE_CONTACT_MESSAGES[index];
}

export function getRandomJururiMessage(): string {
  const index = Math.floor(Math.random() * JURURI_MESSAGES.length);
  return JURURI_MESSAGES[index];
}
