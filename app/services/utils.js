angular.module('mvpApp.Utils', [])
  .factory('Utils', function() {
    return {
      shuffle : function(array) {
        console.log('called')
        var m = array.length, t, i;
        while (m) {
          i = Math.floor(Math.random() * m--);
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }
    }
  });
