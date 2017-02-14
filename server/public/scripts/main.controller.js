angular.module('myApp')
    .controller('mainController', mainController);

function mainController(mainService) {
    console.log('mainController loaded');
    var main = this;
    main.Object = {};
    main.Array = [];
console.log("window", window);
    window.onhashchange = function(e) {
      if (e.newURL.indexOf('/talk') > 0) {
        setTimeout(function() {
          window.location.href = '/index.html';
        }, 1000);
      }
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

        main.getVolunteers = function() {

              console.log('inside getVolunteers');
              mainService.getVolunteers().then(function(response) {
                  console.log("response from main array", response);
                  main.Array = response.data;
                  console.log("main array", main.Array);

              });
        }


    }
