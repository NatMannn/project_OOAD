const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:user1234@ds335275.mlab.com:35275/ooad');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/reg', userRouter);

app.get('/', function (req, res) {
  res.render('login');
});

app.listen(port, function(){
  console.log('start port localhost:'+port);
});