var myApp = angular.module('myApp', ['ngRoute']);

// routing
myApp.config(['$routeProvider', function($routeProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider.when('/welcome', {
        templateUrl: 'views/partials/welcome.html',
        controller: 'mainController'
    }).when('/resources', {
        templateUrl: 'views/partials/resources.html',
        controller: ''
    }).when('/adminLogin', {
        templateUrl: 'views/partials/adminLogin.html',
        controller: ''
    }).otherwise({
        redirectTo: '/welcome'
    });
}]); // end .config
