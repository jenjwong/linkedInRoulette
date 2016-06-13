var db = require('../db/config.js');
var User = require('../models/User.js');
// var data = require('./data.json')
//
//
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/linkedinRoulette');
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('database is online #winning')
// });
//
//
// var mongoose = require('mongoose');
//
// var UserSchema = mongoose.Schema({
//   HRxx: String,
//   FirstName: String,
//   LastName: String,
//   Github: String,
//   LinkedIn: String
// });
//
//
// User = mongoose.model('User', UserSchema);


User.remove({}, function(err) {
  console.log('oh no! you dropped the cats!');
});


//Is db.close in here ok in terms of seperation of concerns?
User.create(
  require('./data.json'),
  function(err) {
    if (err) return console.log('Error: putting these things in the database is like herding cats!');
    console.log('Seedy success! You are a master of herding cats!! They are back in the database!')
    db.close();
});
