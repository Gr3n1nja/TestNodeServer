const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, this is a simple Node.js server!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
