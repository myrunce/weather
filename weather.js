var API = "http://api.openweathermap.org/data/2.5/weather?q=" 
var API2 = "&APPID=d0946cbe22e020252cce7f5c56266a67"

$(document).ready(function(){

    $(document).on("click", "button", function(){
       var city = $('#weather').val();
       var weatherAPI = API + city + API2; 
       var html = ''
       var weather;

        $.get(weatherAPI, function(data){

            weather = (data.main.temp * 9/5) - 459.67
            html += "<h1>" + data.name + "<h1>";
            html += "<h2>Temperature: " + weather + "</h2>";

            $('#results').html(html);
     
        })
    })
})
