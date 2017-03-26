var Record = require("../record");
var assert = require("assert");

describe('Record', function() {

  var record1;

  beforeEach(function() {
    record1 = new Record("Kip Moore", "Up All Night", 5.99);
  });

  it("should have an artist", function() {
    assert.equal("Kip Moore", record1.artist);
  });

  it("should have a title", function() {
    assert.equal("Up All Night", record1.title);
  })

  it("should have a price", function() {
    assert.equal(5.99, record1.price);
  });

  it("should print out record details as a string", function() {
    assert.equal("Artist: Kip Moore, Title: Up All Night, Price: 5.99", record1.toString());
  });

}); 