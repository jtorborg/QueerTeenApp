var myApp = angular.module('myApp', ['ngRoute']);

// routing
myApp.config(['$routeProvider', function($routeProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider.when('/welcome', {
        templateUrl: '../views/partials/welcome.html',
        controller: ''
        // }).when('/logout', {
        //   templateUrl: 'views/logout.html',
        //   controller: 'LogoutController as logout'
    }).otherwise({
        redirectTo: "/welcome"
    });
}]); // end .config
