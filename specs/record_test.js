var Record = require('../record');
var assert = require('assert');

describe('Record', function() {

  var record1;

  beforeEach(function() {
    record1 = new Record("Kip Moore");
  });

  it('should have an artist', function() {
    assert.equal("Kip Moore", record1.artist);
  });

}); 