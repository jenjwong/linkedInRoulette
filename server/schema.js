var pg = require('pg');
var Sequelize = require('sequelize');
var db = new Sequelize('linkedinRoulette', null, null, {
  dialect: 'postgres',
  define: {
    underscored: false,
  }
});

exports.User = db.define('users', {
  HRxx: Sequelize.STRING,
  FirstName: Sequelize.STRING,
  LastName: Sequelize.STRING,
  Github: Sequelize.STRING,
  LinkedIn: Sequelize.STRING,
});

exports.User.sync();
