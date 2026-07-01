const http = require('http');
const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      version: '1.0.0',
      services: {
        database: `postgresql://${DB_HOST}:5432`,
        cache: `redis://${REDIS_HOST}:6379`
      }
    }));
    return;
  }

  if (req.url === '/info') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      app: 'devops-lab',
      environment: process.env.NODE_ENV || 'development',
      db_host: DB_HOST,
      redis_host: REDIS_HOST
    }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello DevOps! (Docker Compose Edition)');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`DB: ${DB_HOST}, Redis: ${REDIS_HOST}`);
});
