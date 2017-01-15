angular.module('myApp')
    .controller('mainController', ['$scope', '$http', mainController]);

function mainController($scope, $http, mainService) {
    console.log('mainController loaded');
    var main = this;
    main.Object = {};
    main.Array = [];

    var zipArray = [];
    var messageNumbers = [];

    //needs error handling

    $scope.startChat = function() {
      console.log("chat button clicked");
      navigator.geolocation.getCurrentPosition(function(position){
        findZips(position.coords.latitude, position.coords.longitude);
      });
    }

    var findZips = function(lat, lng){
      var key = 'AIzaSyCAbb-bfinu1-VIj8Dgt-vAi7HMAbAPb8o';
      var baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
      var request = baseURL + lat + ',' + lng + '&key=' + key;

      $http.get(request).then(function(response){
        console.log(response.data.results[0].address_components[7].short_name);
        var userZip = response.data.results[0].address_components[7].short_name;

        var zipKey = 'js-cgCnR3rSOypyzK3d19xlilZh577JKNyW3bkUfMM4lcCUXF7YPFk70jp5qwPajo7n'
        var zipRequest = 'https://www.zipcodeapi.com/rest/' + zipKey + '/radius.json/' + userZip + '/5/miles?minimal';

        $http.get(zipRequest).then(function(response){
          console.log(response.data);
          zipArray = response.data.zip_codes;
          searchForZipMatches(zipArray);
        });
      });
    }

    var searchForZipMatches = function(zipArray){
      //send a request to the database to match the zip array
      //randomly select five phone numbers to send responsible adult messages
      //messageNumbers = response.data;

    }

        main.getmain = function() {
            console.log('inside getmain');

            // mainService.getmain().then(function(response) {
            //     console.log("response", response);;
            //
            //     main.Object = response;
            //     main.Array = response.data;
            //     console.log("main array", main.Array);
            // });

        }


    }
