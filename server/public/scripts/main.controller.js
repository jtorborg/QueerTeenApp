angular.module('myApp')
    .controller('mainController', mainController);

function mainController(mainService) {
    console.log('mainController loaded');
    var main = this;
    main.Object = {};
    main.Array = [];




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
