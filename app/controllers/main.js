angular.module('mvpApp.mainController', [])

.controller('mainController', function($scope, Students) {
    // create a message to display in our view

  Students.get()
  .success(function(data) {
    $scope.studentData = data;
    console.log(data);
  });

  $scope.studentData

});
