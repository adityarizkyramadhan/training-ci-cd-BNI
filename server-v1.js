const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ version: 'v1.0', color: 'BLUE', timestamp: new Date().toISOString() }));
});
server.listen(3000, () => console.log('v1.0 (BLUE) on port 3000'));
