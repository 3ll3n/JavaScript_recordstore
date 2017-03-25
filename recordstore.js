var Recordstore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
};

Recordstore.prototype = {
  add: function(record) {
  return this.inventory.push(record);
  } 
};

module.exports = Recordstore;