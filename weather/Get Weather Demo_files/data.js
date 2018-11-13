$("document").ready(function(){
    function getData(city){
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ef3e268cbe387a39c451c064de7ff0c1",
        success: function(data) {
          console.log(data);
          handleData(data)
        }
      });
    }

    function handleData(data){
      $("#tempText").html("the current temperature is " + data.main.temp + "° F")
      $("#windText").html("the current wind speed is " + data.wind.speed + " mph")

      $("#temp").css("width", data.main.temp*5);
      $("#temp").css("height", data.main.temp*5);

      $("#wind").css("width", data.wind.speed*6);
      $("#wind").css("height", data.wind.speed*6);

      $("#temp").css("background-color", "rgba(" + (data.main.temp*2) + "," + (data.main.temp*2) + "," + (255-data.main.temp*2) + ",1)");
      $("#tempText").css("color", "rgba(" + (data.main.temp*2) + "," + (data.main.temp*2) + "," + (255-data.main.temp*2) + ",1)");

    }

    var city = "New York"
    getData(city)

    $( "#target" ).submit(function( event ) {
        city = $("#city").val()
        getData(city)
        $( "#target" ).val("In" + city)
        event.preventDefault();
    });
  })