angular.module('myApp')
    .controller('mainController', mainController);

function mainController(mainService) {
    console.log('mainController loaded');
    var main = this;
    main.Object = {};
    main.Array = [];

    //AIzaSyCAbb-bfinu1-VIj8Dgt-vAi7HMAbAPb8o

    var findZips = function(lat, lng){
      var key = 'AIzaSyCAbb-bfinu1-VIj8Dgt-vAi7HMAbAPb8o';
      var baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
      var request = baseURL + lat + ',' + lng + '&key=' + key

      $http.get(request).then(function(response){
        console.log(response.data);
      }, err)
    }


    $scope.startChat = function() {
      console.log("chat button clicked");
      navigator.geolocation.getCurrentPosition(function(position){
        findZips(position.coords.latitude, position.coords.longitude);
      });
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
