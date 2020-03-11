var request = require('request');
serverUrl = "https://server-for-faculty-dashboard.herokuapp.com/"
it("should return isHOD as true", function(done) {            //Positive Test
    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     serverUrl+'verify',
        body:    "username=cb.en.cse001"
      }, function(error, response, body){
        body = JSON.parse(body);
        body = JSON.parse(body);
        expect(body).not.toBe(null);
        console.log("Test1: ",body);
        expect(body["isHOD"]).toBe(true);
        done();
    });
});

it("should return isHOD as false", function(done) {            //Negative Test
    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     serverUrl+'verify',
        body:    "username=cb.en.cse046"
      }, function(error, response, body){
        body = JSON.parse(body);
        body = JSON.parse(body);
        expect(body).not.toBe(null);
        console.log("Test2: ",body);
        expect(body["isHOD"]).toBe(false);
        done();
    });
});

it("should apply leave to db", function(done) {            //Positive Test
    var data = {
        appliedby: "cb.en.cse046",
        leaveType: "SL",
        startDate: new Date(),
        endDate: new Date(),
        reason: "Unit Testing"
    }
    request.post({
        headers: {'content-type' : 'application/json'},
        url:     serverUrl+'apply',
        body:    JSON.stringify(data)
      }, function(error, response, body){
        body = JSON.parse(body);
        body = JSON.parse(body);
        console.log("Test3: ",body);
        expect(body["dummy"]).toBe(true);
        done();
    });
});