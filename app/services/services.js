// js/services/todos.js
angular.module('mvpApp.services', [])

    // super simple service
    // each function returns a promise object
    .factory('Ajax', function($http) {
        return {
            get : function() {
                return $http.get('https://hr-yearbook.herokuapp.com/api/students');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });
