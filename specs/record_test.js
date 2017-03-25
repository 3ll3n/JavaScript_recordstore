var Record = require("../record");
var assert = require("assert");

describe('Record', function() {

  var record1;
  var title;

  beforeEach(function() {
    record1 = new Record("Kip Moore", "Up All Night");
  });

  it("should have an artist", function() {
    assert.equal("Kip Moore", record1.artist);
  });

  it("should have a title", function() {
    assert.equal("Up All Night", record1.title);
  })

}); 