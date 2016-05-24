angular.module('mvpApp.mainController', [])

.controller('mainController', function($scope, Students, Utils) {
    // create a message to display in our view

  Students.get()
  .success(function(data) {
    var shuffled = Utils.shuffle(data);
    $scope.studentData = shuffled;
  });

  $scope.submitForm = function(isValid) {
    console.log('i got called')

  // check to make sure the form is completely valid
  if (isValid) {
    alert('our form is amazing');
  }

  };




});
