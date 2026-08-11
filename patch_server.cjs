const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

const proxyRoute = `
// 3. 画像プロキシAPI (CORS回避用)
app.get('/api/image-proxy', async (req, res) => {
  try {
    const imageUrl = req.query.url as string;
    if (!imageUrl) return res.status(400).send('No url provided');
    
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Failed to fetch image');
    
    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error('Image proxy error:', error);
    res.status(500).send('Error proxying image');
  }
});
`;

if (!code.includes('/api/image-proxy')) {
  code = code.replace(/\/\/ -------------------------------------------------------------\n\/\/ Vite Middleware/, proxyRoute + '\n// -------------------------------------------------------------\n// Vite Middleware');
  fs.writeFileSync('server.ts', code);
}
