const { response } = require('express');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/:name/:lang', (req, res) => {
  const name = req.params.name;
  const lang = req.params.lang;
  const msg = false;
  const products = [
    { name: 'Cereal', price: 5.69 },
    { name: 'Meat', price: 56 },
    { name: 'Watter', price: 4 },
    { name: 'Mint', price: 4 },
    { name: 'Banana', price: 8 },
    { name: 'Nuts', price: 12 },
  ];

  res.render('index', {
    name,
    lang,
    company: 'Uniquati',
    subscribers: 8000,
    msg,
    products,
  });
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/principal/profile', (req, res) => {
  res.render('principal/profile');
});

app.listen(3000, () => {
  console.log('App running');
});
