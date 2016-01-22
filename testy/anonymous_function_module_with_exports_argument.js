#!/usr/bin/env node

var weekDay = {};
(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(weekDay);

console.log(weekDay.name(weekDay.number("Saturday")));
