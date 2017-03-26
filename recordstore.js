var Recordstore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
  // this.getInventoryCount = 
};

Recordstore.prototype = {
  add: function(record) {
   this.inventory.push(record);
  }, 
  getInventoryCount: function() {
    return this.inventory.length;
  }
};

module.exports = Recordstore;