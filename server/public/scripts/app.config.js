var myApp = angular.module('myApp', ['ngRoute']);

// routing
myApp.config(['$routeProvider', function($routeProvider) {
    // $locationProvider.html5Mode(true);

    $routeProvider.when('/welcome', {
        templateUrl: 'views/partials/welcome.html',
        controller: ''
    }).when('/resources', {
        templateUrl: 'views/partials/resources.html',
        controller: ''
    }).when('/adminLogin', {
        templateUrl: 'views/partials/adminLogin.html',
        controller: ''
    }).when('/talk', {
        templateUrl: 'views/partials/talk.html',
        controller: 'mainController'
        // }).when('/talkConnected', {
        //     templateUrl: 'views/partials/talkConnected.html',
        //     controller: ''
    }).when('/resourcesList', {
        templateUrl: 'views/partials/resourcesList.html',
        controller: 'mainController'
    }).when('/profiles', {
        templateUrl: 'views/partials/profiles.html',
        controller: 'mainController as main'
    }).otherwise({
        redirectTo: '/welcome'
    });
}]); // end .config
