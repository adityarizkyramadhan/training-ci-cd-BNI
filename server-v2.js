const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ version: 'v2.0', color: 'GREEN', timestamp: new Date().toISOString() }));
});
server.listen(3000, () => console.log('v2.0 (GREEN) on port 3000'));
