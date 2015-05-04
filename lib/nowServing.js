'use strict';

var nowServing = function(deli){
  if (deli.length == 0){
    console.log("There is nobody waiting to be served!")
  }
  else{
    console.log("Currently serving "+ deli[0] +".");
    deli.splice(0, 1)
  }
};
