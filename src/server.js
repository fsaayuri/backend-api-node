/*
// para rodar precisa estar com o nodemon rodando (para rodar no browser: "localhost:3100")
// http.createServer pega na página do node uma função já criada para fazer um servidor
// localhost para não rodar e dar conflito no xampp precisa mudar a porta para 3100
// server.listen criou uma função no servidor para escutar na porta 3100 nesse host (e coloca uma string avisando para o usuário)

const http = require('node:http');
// importar pacotes nativos e instalados (require)
const fs = require('fs')


const hostname = '127.0.0.1';
const port = 3100;

// o node da uma função dentro do http de criar um servidor, após um ponto vem uma das funções da biblioteca | SÓ FOI PREPARADO O RESPONSE (RESPOSTA)
const server = http.createServer((req, res) => {
  // request (requisição) que foi o clique e ele responde com um response (resposta) o que foi solicitado
  console.log('URL:' + req.url)
  if(req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('src/views/index.html', (error, codigo) => {
          res.end(codigo);
    })

  } else if(req.url === '/cursos'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Bem vindo aos cursos!');
  }
  // favicon ele já faz um request pra tentar pegar o icone do navegador
});

// como se fosse um apache rodando dentro do xampp ele fica "Escutando" alterações para o backend dar uma resposta
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const express = require('express')
const listaCursos = require('./db/cursos.json')
// simulação de um banco de dados

const mysql = require(mysql)
const app = express()
const port = 3100

// se alguem da um "get na home" ele aparece a mensagem
app.get('/', (req, res) => {
  const msg = [{nome: 'LP2'},{nome: 'PJ3'}]
  res.json(msg)
})

// mudança de GET
app.get('/cursos', (req, res) => {
  con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "apinode"
  })
  
  con.connect((err) => {
    if (err) throw err;
    const sql = "select * from cursos;"
    con.query(sql, function (err, result) {
      if (err) throw err;
      //TODO return result with JSON
    })
  });

  res.json(listaCursos)
})






// mudança de POST
app.post('/cursos', (req, res) => {
  res.json('POST Cursos JSON!')
})

// mudança de PUT
app.put('/cursos', (req, res) => {
  res.send('Fiz um Update!')
})

app.delete('/cursos', (req, res) => {
  res.send('Fiz um Update!')
})

app.all('*', (req, res) => {
  res.send('404 Rota não encontrada!')
})

// outra rota diferente 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


