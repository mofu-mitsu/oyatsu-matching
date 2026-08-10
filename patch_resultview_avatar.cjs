const fs = require('fs');
let code = fs.readFileSync('src/components/ResultView.tsx', 'utf-8');

const regex = /<div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white\/95 shadow-md border-2 border-amber-200 flex items-center justify-center p-2 flex-shrink-0 animate-bounce duration-1000 relative">/g;
const replacement = '<div className="w-40 h-28 sm:w-48 sm:h-32 rounded-3xl bg-white/95 shadow-md border-2 border-amber-200 flex items-center justify-center p-2 flex-shrink-0 animate-bounce duration-1000 relative overflow-hidden">';
code = code.replace(regex, replacement);

fs.writeFileSync('src/components/ResultView.tsx', code);
