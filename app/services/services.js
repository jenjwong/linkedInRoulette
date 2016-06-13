// js/services/todos.js
angular.module('mvpApp.services', [])

    // super simple service
    // each function returns a promise object
    .factory('Ajax', function($http) {
        return {
            get : function() {
                return $http.get('http://localhost:3000/user');
            },
            create : function(payloadData) {
                return $http.post('http://localhost:3000/user', payloadData);
            },
            put : function(payloadData) {
                return $http.put('http://localhost:3000/user', payloadData);
            }
        }
    });
