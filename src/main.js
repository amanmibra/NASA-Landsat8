$(document).ready(function(){
  $('#submit').click(function(){
    $('#test').html("Testing...");
    var key = "eoZA48hLZRnyiw9VJEl8o2Wg0UiyTICMTfKvahc0";
    var lon = $('#lon').val();
    var lat = $('#lat').val();
    var begin = "2013-02-11"; //Setting the begin date as the Landsat8 launch date
    var urlAddons = "lon=" + lon + "&lat=" + lat + "&begin=" + begin + "&api_key=DEMO_KEY";

    var url = "https://api.nasa.gov/planetary/earth/assets?" + urlAddons;
    console.log(url);
    $.ajax({
      url: url,
      success: function(data){
        console.log('incoming data: ', data);
        if("error" in data){
          console.log("here")
          $('#error-mess').html("Error: " + data.error.toString());
        }
      }
    });
  })

});
