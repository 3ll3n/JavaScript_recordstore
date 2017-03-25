var Recordstore = require("../recordstore");
var assert = require("assert");

describe("Recordstore", function() {

  var recordstore;

  beforeEach(function() {
    recordstore = new Recordstore("Layla's Records");
  });

  it("should have a name", function() {
    assert.equal("Layla's Records", recordstore.name);
  });

});