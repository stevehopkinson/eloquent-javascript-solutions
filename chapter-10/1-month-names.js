/* Write a simple module similar to the weekDay module that can convert month numbers (zero-based, as in the 
Date type) to names and can convert names back to numbers. Give it its own namespace since it will need an 
internal array of month names, and use plain JavaScript, without any module loader system. */

(function(exports) {
  var months = ["January", "February", "March", "April", "May", "June", "July", 
				"August", "September", "October", "November", "December"];

  exports.name = function(number) {
    return months[number];
  };
  exports.number = function(name) {
    return months.indexOf(name);
  };
})(this.month = {});
