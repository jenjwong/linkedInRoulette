var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/linkedinRoulettes');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is online #winning')
});

module.exports = db;
