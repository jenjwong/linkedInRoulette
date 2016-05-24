angular.module('mvpApp.mainController', [])

.controller('mainController', function($scope, Students, Utils) {
    // create a message to display in our view

  Students.get()
  .success(function(data) {
    var shuffled = Utils.shuffle(data);
    $scope.studentData = shuffled;
  });





});
