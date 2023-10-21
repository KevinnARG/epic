const http = require('http');

const server = http.createServer((req, res) => {
  const ipAddress = req.connection.remoteAddress;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Su dirección IP es: ${ipAddress}\n`);
});

const port = 3000; // Puedes cambiar el puerto según tus necesidades
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});