$(document).ready(function() {
  var myKey = "eoZA48hLZRnyiw9VJEl8o2Wg0UiyTICMTfKvahc0";
  var url = "https://api.nasa.gov/planetary/earth/assets?"
  var begin = "2013-02-11"; //Setting the begin date as the Landsat8 launch date

  $('#submit').click(function() {
    var long = $('#long').val();
    var lat = $('#lat').val();
    flyby(long, lat);
  })

  function flyby(long, lat) {
    var urlAddons = "lon=" + long + "&lat=" + lat + "&begin=" + begin + "&api_key=DEMO_KEY";
    var newURL = url + urlAddons;
    console.log(newURL);

    $.ajax({
      url: newURL,
      success: function(data) {
        console.log('incoming data: ', data);
        if ("error" in data) {
          $('#error-mess').html("Error: " + data.error.toString());
          return;
        } else if (data.count < 2) {
          $('#error-mess').html("Error: Landsat8 has not recieved enough images to make predictions.");
        } else {
          $('#error-mess').html('');
          var results = data.results;
          var lastResult = results[results.length - 1];
          var lastDate = new Date(lastResult.date);
          var avgTimeDelta = getAvgTimeDelta(results);

          var newDate = new Date(lastDate.toString());
          newDate.setSeconds(lastDate.getSeconds() + avgTimeDelta);

          // console.log('lastDate', lastDate.toString());
          // console.log('avgTimeDelta', avgTimeDelta);
          // console.log('new Date', newDate.toString())

          $('#success-mess').html('According to this data, the predicted date for the next satelitte image at this location is: ' + newDate.toString());
        }

      }
    });
  }

  function getAvgTimeDelta(results) {
    var sum = 0;
    for (var i = 0; i < results.length - 1; i++) {
      var currentDateElement = new Date(results[i].date);
      var nextDateElement = new Date(results[i + 1].date);
      var timeDiff = nextDateElement - currentDateElement;
      sum += timeDiff;

    }
    return sum / (results.length * 1000);
  }

});
