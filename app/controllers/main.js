angular.module('mvpApp.mainController', [])

.controller('mainController', function($scope, Ajax, Utils) {
    // create a message to display in our view

  Ajax.get()
  .success(function(data) {
    var shuffled = Utils.shuffle(data);
    $scope.studentData = shuffled;
    console.log(data);
  });

  $scope.submitForm = function(user) {
    var payload = {LinkedIn: user.linkedin.$modelValue,
                   Github: user.github.$modelValue}
    Ajax.put(payload);
  };






});
