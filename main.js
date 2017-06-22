$(document).ready(function(){
  $('#test').html("JQ Works");

  var url = "https://api.nasa.gov/planetary/earth/assets";
  var key = "eoZA48hLZRnyiw9VJEl8o2Wg0UiyTICMTfKvahc0";
  $.ajax({
    url: url,
    api_key: key,
    lat: 36.098592,
    lon: -112.097796,
    begin: new Date("2017/05/22"),
    success: function(data){
      console.log('incoming data:  ', data);
    }
  });
});
