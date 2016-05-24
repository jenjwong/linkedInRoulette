angular.module('mvpApp.mainController', [])

.controller('mainController', function($scope, Students) {
    // create a message to display in our view

  Students.get()
  .success(function(data) {
    $scope.studentData = shuffle(data);


  });

  var shuffle = function (array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
    }



});
