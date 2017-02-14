angular.module('myApp').service('mainService', mainService);

var ctrl = this;

function mainService($http) {
    this.getmain = function() {
            // return $http.get('/testRoute').then(function(response) {
            //     console.log('response', response);
            //     return response; //!!!!!!!!!!
            // });

            console.log('inside main service');

        } //end of getmain


        this.getVolunteers = function() {
                return $http.get('/testRoute').then(function(response) {
                    console.log('response', response);
                    return response; //!!!!!!!!!!
                });

            } //end of getmain




} //end of mainService
