const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // BUG: typo pada method yang tidak ada
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', version: '1.1.0-broken' }));
    return;
  }

  // BUG: memanggil function yang tidak ada
  const result = processRequest(req); // <- ReferenceError!
  res.end(result);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
