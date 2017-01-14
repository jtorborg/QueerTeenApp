var myApp = angular.module('myApp', ['ngRoute']);

// routing
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

//   $routeProvider.when('/login', {
//   templateUrl: 'views/login.html',
//   controller: 'LoginController as login'
// }).when('/logout', {
//   templateUrl: 'views/logout.html',
//   controller: 'LogoutController as logout'
// }).otherwise({
//   redirectTo: "/login"
// });
});
