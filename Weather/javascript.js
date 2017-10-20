
  $(document).ready(function() {

    var lati;
    var longi;
    var apilink;
    var city;
    var temp;
    var status;
    var icon;

    
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   lati = position.coords.latitude;
   longi = position.coords.longitude;
   apilink = "https://fcc-weather-api.glitch.me/api/current?lat="+lati+"&lon="+longi;
   weather();
  });
}

$(".btn1").click(function () {
  var fahren;
  var celci;
  if($(".btn1").html() == "Celcius"){
    $(".btn1").html("Fahrenheit");
    celci = $(".temp").html();
    fahren = Math.round((9/5)*celci+32);
    $(".temp").html(fahren);
  }else{
    $(".btn1").html("Celcius");
    fahren = $(".temp").html();
    celci = Math.round(5/9*(fahren-32));
    $(".temp").html(celci);
  }

  

});

    function weather(){
     $.getJSON(apilink, function(json) {
     city = json.name;
     temp = json.main.temp;
     status = json.weather[0].main;
     icons = json.weather[0].icon;
      $(".city").html(city);
      $(".temp").html(temp);
      $(".status").html(status);
      document.getElementById('icon').src = (icons);
        }); 
    }
     
  });
