/*global  $, Skycons*/
(function () {

    'use strict'; //Zegt dat variabele eerst moet aangemaakt worden voordat hij gebruikt kan worden. (x=3) => (var x = 3)

    //Object aanmaken (JSON)
    var App = {

        APIKEY: "272036c9aada2c370853557630da06c1",
        lat: "",
        lng: "",
        init: function () {

            //kickstart the app
            App.getLocation();


        },
        getLocation: function () {

            //get current user pos
            navigator.geolocation.getCurrentPosition(App.foundPosition);

        },
        foundPosition: function (pos) {

            //found the current user position
            App.lat = pos.coords.latitude;
            App.lng = pos.coords.longitude;

            App.getWeather();

        },
        getWeather: function () {

            //get the current weather for my location
            var urlPath = "https://api.forecast.io/forecast/" + App.APIKEY + "/" + App.lat + "," + App.lng;

            //JSONP 
            $.ajax({
                url: urlPath,
                dataType: 'jsonp',
                success: function (data) {

                    var skycons = new Skycons({
                        "color": "white"
                    });
                    
                    switch(data.currently.summary){
                        case "Clear":
                            skycons.add("weather-icon", Skycons.CLEAR_DAY);
                        break;
                    }
                    
                    skycons.play();
                    
                    $(".weather-summary").text(data.currently.summary);
                }
            });

        }


    };


    App.init();


}());