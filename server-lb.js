const http = require('http');
const INSTANCE = process.env.INSTANCE || 'unknown';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Hello from DevOps!',
    instance: INSTANCE,
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`[${INSTANCE}] running on port ${PORT}`);
});
