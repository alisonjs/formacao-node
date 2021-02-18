require('dotenv/config');

const decorate = require('./utils/MessageDatePassed');
const passed_time = require('./utils/DateCalculator');

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database/database');

const Question = require("./database/Question");
const Answer = require("./database/Answer");

connection
  .authenticate()
  .then(()=> {
    console.log("Conexão realizada com sucesso")
  })
  .catch((msgErro) => {
    console.log(msgErro)
  });

const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  Question.findAll({raw:true, order:[
    ['id','DESC']
  ]}).then((questions) => {
    console.log(questions);
    res.render("index", {questions: questions});
  })
});

app.get('/ask', (req, res) => {
  res.render('ask');
});

app.post('/question', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    Question.create({
      title:title,
      description:description
    }).then(()=>{
      res.redirect("/");
    })
  }
);

app.get('/question/:id', (req, res)=>{
  const id = req.params.id;
  Question.findOne({
    where:{id: id}
  }).then(question => {
    if(question != undefined){
      Answer.findAll({
        where: {questionId:question.id}
      }).then((answers)=>{
        res.render('question', {
          question:question,
          answers:answers,
          decorate: decorate,
          passed_time: passed_time,
          now: new Date()
        });
      });
    }else{
      res.redirect("/");
    }
  })
});

app.post('/answer', (req, res)=>{
  const answer = req.body.answer;
  const question = req.body.question;

  Answer.create({
    body: answer,
    questionId:question
  }).then(()=>{
    res.redirect(`/question/${question}`);
  });
});


app.listen(port, () => {
  console.log('App running');
});
