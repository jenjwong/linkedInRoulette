
    // create the module and name it mvpApp
        // also include ngRoute for all our routing needs
    var mvpApp = angular.module('mvpApp', [
      //what does this part do?
      'ngRoute',
      'mvpApp.mainController',
      'mvpApp.services',
      'mvpApp.Utils'
    ]);

    // configure our routes
    mvpApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/landing', {
                templateUrl : 'pages/landing.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope


    mvpApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    mvpApp.controller('contactController', function($scope) {
        $scope.landing = true;
    });
