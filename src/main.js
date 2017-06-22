const var myKey = "eoZA48hLZRnyiw9VJEl8o2Wg0UiyTICMTfKvahc0";
const var url = "https://api.nasa.gov/planetary/earth/assets?"
const var begin = "2013-02-11"; //Setting the begin date as the Landsat8 launch date

$(document).ready(function() {
  $('#submit').click(function() {
    flyby($('#lon').val(), $('#lat').val());
  })

  void function flyby(double long, double lat){
    var urlAddons = "lon=" + long + "&lat=" + lat + "&begin=" + begin + "&api_key=DEMO_KEY";
    var newURL = url + urlAddons;
    console.log(newURL);

    $.ajax({
      url: url,
      success: function(data) {
        console.log('incoming data: ', data);
        if ("error" in data) {
          console.log("here")
          $('#error-mess').html("Error: " + data.error.toString());
        }
      }
    });
  }

});
