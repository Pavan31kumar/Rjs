//  Functons....
function add(a, b) {
  console.log(a + "   " + typeof (a));
  console.log(b + "  " + typeof (b));
 //  console.log(c + "   " + typeof c);     // c is not defined in Function
  console.log(a + b);
}
add(12, 20);
add(12, 23, 26);                            // c is not defined
add('Sudheer','Pavan');
add(true,false);
add('a'+'d');
add(11.2325,12.23);
//  Add(12,52);                                 //Add not Defined

// Different Types of Functions in JavaScript
 function show(a,d){
  console.log('I am From Show function');
 }
 show();
 var display=show();
 console.log(display);
 var Fn=function (){
  console.log('I am from var fn');
 }
 console.log(Fn);
  var FnA=()=>{                                 // Arrow Function
  console.log('I am from var fnA');
 }
 console.log(FnA);
 
 (function add(a,b){                             // direct operation without add 
  console.log(a+b);
 }(20,30));