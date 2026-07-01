const http = require('http');

let requestCount = 0;
let errorCount = 0;
const startTime = Date.now();

const server = http.createServer((req, res) => {
  requestCount++;

  if (req.url === '/metrics') {
    const uptime = (Date.now() - startTime) / 1000;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end([
      '# HELP http_requests_total Total HTTP requests',
      '# TYPE http_requests_total counter',
      `http_requests_total ${requestCount}`,
      '',
      '# HELP http_errors_total Total HTTP errors',
      '# TYPE http_errors_total counter',
      `http_errors_total ${errorCount}`,
      '',
      '# HELP app_uptime_seconds App uptime in seconds',
      '# TYPE app_uptime_seconds gauge',
      `app_uptime_seconds ${uptime}`,
    ].join('\n'));
    return;
  }

  if (req.url === '/error') {
    errorCount++;
    res.writeHead(500);
    res.end('Internal Server Error');
    return;
  }

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello DevOps!');
});

server.listen(3000, () => console.log('Server with metrics on port 3000'));
