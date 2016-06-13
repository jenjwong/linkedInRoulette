// js/services/todos.js
angular.module('mvpApp.services', [])

    // super simple service
    // each function returns a promise object
    .factory('Ajax', function($http) {
        return {
            get : function() {
                return $http.get('http://localhost:3000/user');
            },
            create : function(todoData) {
                return $http.post('/user', todoData);
            },
            create : function(todoData) {
                return $http.post('/user', todoData);
            },
            delete : function(id) {
                return $http.delete('/user/' + id);
            }
        }
    });
