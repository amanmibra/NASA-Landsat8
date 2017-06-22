$(document).ready(function(){
  $('#submit').click(function(){
    $('#test').html("Testing...");
    var key = "eoZA48hLZRnyiw9VJEl8o2Wg0UiyTICMTfKvahc0";
    var lon = $('#lon').val();
    var lat = $('#lat').val();
    var begin = formatDate();
    var urlAddons = "lon=" + lon + "&lat=" + lat + "&begin=" + begin + "&api_key=DEMO_KEY";

    var url = "https://api.nasa.gov/planetary/earth/assets?" + urlAddons;
    console.log(url);
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
  })



  function formatDate(){
    var year = $('#year').val()
    var month = $('#month').val();
    var day = $('#day').val();

    return year + '-' + month + '-' + day
  }

});
