var Recordstore = require("../recordstore");
var assert = require("assert");
var Record = require("../record");

describe("Recordstore", function() {

  var recordstore;
  var record1;
  var record2;

  beforeEach(function() {
    recordstore = new Recordstore("Layla's Records", "Glasgow", 1000);
    record1 = new Record("Kip Moore", "Up All Night", 5.99);
    record2 = new Record("Heartland", "I Loved Her First", 17.31);
  });

  it("should have a name", function() {
    assert.equal("Layla's Records", recordstore.name);
  });

  it("should have a city", function() {
    assert.equal("Glasgow", recordstore.city);
  });

  it("should have a balance", function() {
    assert.equal(1000, recordstore.balance);
  });

  it("should have an empty inventory to begin with", function() {
    assert.equal(0, recordstore.inventory.length);
  });

  it("should be able to add to the inventory", function() {
    recordstore.add(record1);
    assert.equal(1, recordstore.getInventoryCount());
  });

  it("should be able to list inventory", function() {
    recordstore.add(record1);
    recordstore.add(record2);
    assert.equal("Artist: Kip Moore, Title: Up All Night, Price: 5.99, Artist: Heartland, Title: I Loved Her First, Price: 17.31", recordstore.listInventory());
  });

  it("should reduce the inventory when a record is sold", function() {
      recordstore.add(record1);
      recordstore.add(record2);
      recordstore.sellRecord(record1);
      assert.equal(1, recordstore.getInventoryCount());
  });

  it("should be able to sell a record and adjust the balance", function() {
    recordstore.add(record1);
    recordstore.sellRecord(record1);
    assert.equal(1005.99, recordstore.totalBalance());
    // assert.equal(0, recordstore.getInventoryCount());
  });

});