$(document).ready(function(){
  $('#test').html("Testing...");
  var key = "eoZA48hLZRnyiw9VJEl8o2Wg0UiyTICMTfKvahc0";
  var lon = '-112.097796'; var lat = '36.098592';
  var begin = formatDate(new Date("2015/05/22"));
  var urlAddons = "lon=" + lon + "&lat=" + lat + "&begin=" + begin + "&api_key=DEMO_KEY";

  var url = "https://api.nasa.gov/planetary/earth/assets?" + urlAddons;
  $.ajax({
    url: url,
    api_key: key,
    lat: 36.098592,
    lon: -112.097796,
    begin: new Date("2017/05/22"),
    success: function(data){
      console.log('incoming data: ', data);
    }
  });
});

function formatDate(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  return year + "-" + month + "-" + day;
}
