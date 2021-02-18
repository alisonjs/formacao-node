require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');

const questionModel = require("./database/Question");

connection
  .authenticate()
  .then(()=> {
    console.log("Conexão realizada com sucesso")
  })
  .catch((msgErro) => {
    console.log(msgErro)
  });
const port = process.env.PORT || '3000';
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/ask', (req, res) => {
  res.render('ask');
});

app.post('/question', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  res.send(`Title: ${title} and Description: ${description}`);
});

app.listen(port, () => {
  console.log('App running');
});
