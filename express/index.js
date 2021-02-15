const express = require('express'); //Importando o express
const app = express(); // Iniciando o express

app.get('/', function (req, res) {
  res.send('Welcome to my website');
});

// :param? => optional param
app.get('/blog/:artigo?', function (req, res) {
  const artigo = req.params.artigo;

  if (artigo) {
    res.send(`<h2> Artigo: ${artigo} </h2>`);
  } else {
    res.send('Welcome to my blog');
  }
});

app.get('/youtube', function (req, res) {
  const canal = req.query['canal'];

  if (canal) {
    res.send(canal);
  } else {
    res.send('Nenhum canal fornecido.');
  }
});

app.get('/ola/:nome/:empresa', function (req, res) {
  // REQ => DADOS ENVIADOS PELO USUÁRIO
  // RES => DADOS ENVIADOS PELO SERVIDOR PARA O USUÁRIO
  const nome = req.params.nome;
  const empresa = req.params.empresa;

  res.send(`<h2>Hello, ${nome} da ${empresa}</h2>`);
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro.');
  } else {
    console.log('Servidor iniciado com sucesso.');
  }
});
