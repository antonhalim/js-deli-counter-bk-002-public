'use strict';

var line = function(array) {
  if (array.length == 0){
    return console.log("The line is currently empty.")
  } else {
    var string = "The line is currently:"
    array.forEach(function(name, index){
      string += " " + (index+1) + ". " + name + ","
    })
     console.log(string.slice(0,-1))
  }
};
