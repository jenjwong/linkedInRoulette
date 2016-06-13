var User = require('../models/User.js');

module.exports.addUser = function(req) {
  var newUser = new User({
    HRxx: req.body.HRxx,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Github: req.body.Github,
    LinkedIn: req.body.LinkedIn
  });

  newUser.save(function (err, newUser) {
    if (err) {
      return console.error(err);
    }
    console.log('You added a user! It is a great day!!!')
  });
};

module.exports.getAllUsers = function(callback) {
  return User.find(function(err, cats) {
    if (err) return console.log('oh no! the cats have escaped the database!! :( none can be found)');
    callback(cats);
  });
};

module.exports.updateOne = function(req, res) {
  console.log(req.body.Github)
  var query = {LastName: req.body.LastName};
  var updatedProps = {LinkedIn: req.body.LinkedIn};
  var options = {new: true, upsert: true};
  User.findOneAndUpdate(query, updatedProps, options, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};
