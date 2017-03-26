var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}

var recordString = function(record) {
  return JSON.stringify(record);
}
// console.log(recordString);

module.exports = Record;