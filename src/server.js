// para rodar precisa estar com o nodemon rodando (para rodar no browser: "localhost:3100")
// http.createServer pega na página do node uma função já criada para fazer um servidor
// localhost para não rodar e dar conflito no xampp precisa mudar a porta para 3100
// server.listen criou uma função no servidor para escutar na porta 3100 nesse host (e coloca uma string avisando para o usuário)

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3100;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});