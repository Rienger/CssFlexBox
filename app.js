const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));







app.get('/', function(req, res){
  res.render('home')
})










app.listen(3000, function(){
  console.log('App is running on port 3000')
})
