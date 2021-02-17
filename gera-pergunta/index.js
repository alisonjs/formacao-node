const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(3000, () => {
  console.log('App running');
});
