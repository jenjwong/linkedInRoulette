var UserRouter = require('express').Router();
var userController = require('../controllers/userController.js');
var mongoose = require('mongoose');

UserRouter.route('/user')
  .post(userController.createOne)
  .put(userController.findOneAndUpdate)
  .get(userController.retrieve)
  .delete(userController.delete);

UserRouter.route('/:id')
  .get(userController.retrieveOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

module.exports = UserRouter;
