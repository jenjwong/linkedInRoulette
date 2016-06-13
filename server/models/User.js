var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  HRxx: String,
  FirstName: String,
  LastName: String,
  Github: String,
  LinkedIn: String
});


module.exports = mongoose.model('User', UserSchema);
