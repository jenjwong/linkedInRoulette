
    // create the module and name it mvpApp
        // also include ngRoute for all our routing needs
    var mvpApp = angular.module('mvpApp', [
      'ngRoute',
      'mvpApp.mainController'
    ]);

    // configure our routes
    mvpApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope


    mvpApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    mvpApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
