//   Function hoisting
//   function calling first....declaretion next
//   all javaScript function moved to top this is called function hoisting
add(12,32);                        
function add(a,b){
    console.log(a+b)
}
/*
FHoisting(12,15);
var FHoisting=function(a,b){                    //   note-: function hoisting is not applicable for varibles
    console.log(a+b)
}*/

x=5;
function findfact(v){                           // findfact 
    if(v==1)
      return v;
    else
    return v*findfact(v-1);
}
var result=findfact(x);
console.log(x+'       '+result);