var app=require("../server.js");

describe("Summa",function(){
    it("Summa da",function() {
        var value=app.AddNumber(5,6);
        expect(value).toBe(11);
    });
});