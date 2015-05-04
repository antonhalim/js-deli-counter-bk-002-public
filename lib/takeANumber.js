'use strict';

var takeANumber = function(deli, name){
  deli.push(name);
  console.log("Welcome, " + name+ ". You are number " + (deli.indexOf(name)+1) + " in line.")
};
