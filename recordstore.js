var Recordstore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Recordstore.prototype = {
  add: function(record) {
   this.inventory.push(record);
 }, 
 getInventoryCount: function() {
  return this.inventory.length;
},
listInventory: function() {
  var stringArray = this.inventory.map(function(record){ 
    return record.toString(); 
  });
  return stringArray.join(", ");
},
  sellRecord: function(record) {
    for(var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i] === record) {
        this.inventory.splice(i, 1);
      }
      return this;
    }
  },
  totalBalance: function() {
    var total = 0;
    for(var record in this.inventory) {
      total += record.price;
    }
  }
};

module.exports = Recordstore;