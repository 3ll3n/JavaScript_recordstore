var Recordstore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Recordstore.prototype = {
  add: function(record) {
  return this.inventory.push(record);
  } 
};

module.exports = Recordstore;