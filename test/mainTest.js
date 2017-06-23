var result_data = [
  {date: "2013-04-15T18:05:02"},
  {date: "2013-04-16T18:05:02"}
];
var result = getAvgTimeDelta(result_data);

describe('Main', function(){
  describe('getAvgTimeDelta', function(){
    it("should return a number", function() {

      expect(result).to.be.a('number');

    });

    it("should return correct number of seconds for a single day", function(){
        var dayInSeconds = 60*60*24;
        expect(result).to.equal(dayInSeconds);
    });
  });
})
