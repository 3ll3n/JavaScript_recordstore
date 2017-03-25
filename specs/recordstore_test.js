var Recordstore = require("../recordstore");
var assert = require("assert");
var Record = require("../record");

describe("Recordstore", function() {

  var recordstore;
  var record1;

  beforeEach(function() {
    recordstore = new Recordstore("Layla's Records", "Glasgow");
    record1 = new Record("Kip Moore", "Up All Night", 5.99);
  });

  it("should have a name", function() {
    assert.equal("Layla's Records", recordstore.name);
  });

  it("should have a city", function() {
    assert.equal("Glasgow", recordstore.city);
  });

  it("should have an empty inventory to begin with", function() {
    assert.equal(0, recordstore.inventory);
  });

  it("should have a balance of 1 when record added to inventory", function() {
    recordstore.add(record1);
  });

});