var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./server/db/config.js');
var userController = require('./server/controllers/userController.js');
var User = require('./server/models/User.js');


app.use(bodyParser.urlencoded({ entended: false}));
app.use(bodyParser.json());
app.use(express.static('app'))

app.get('/', function(req, res) {
  res.sendStatus(200);
});

app.get('/user', function(req, res) {
  userController.getAllUsers(function(cats) {
      res.send(cats);
  });
});

app.post('/user', function(req, res) {
  userController.addUser(req);
  res.sendStatus(201);
});

app.put('/user', function(req, res) {
  userController.updateOne(req, res);
});


app.listen(3000, function() {
  console.log('Your server is listening on 3000! Huzzah!')
});
