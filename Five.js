// local and Global  variables

var a=10;                                       // mention before the variable, declaring of 'var' or not mention 'var' is always global variable
a=50;
//let a=60;                                       // SyntaxError: Identifier 'a' has already been declared
function show(){                                // accessing 'a' from inside of show
  let  a=20;                                       //  modified  'a' value is access to all functioning because 'a' variable 
                                               //is decleared first and modified inside of the show
   // let a=30;                                  // ReferenceError: Cannot access 'a' before initialization
    console.log('From inside of show  '+a);    
}
show();
console.log('from outside of show '+a);         // accessing 'a' from outside of show

var display= function(){
    let a=40;
    console.log('From inside of display '+a);
}
display();
console.log('from outSide of Display '+a);

//  Note-: let- when global and local varible have same variable name.... then use to let before the local variable
console.log('-----------------------------------------------');
function add(a,b){                                    // 'a','b'  are inputs of function
    var rec='result :';                               // rec is outside of sum
    function sum(){            
        var c= 'inside sum';                          // var 'c' is inside of sum       
        return c+' '+rec+' '+(a+b);
    }
    return sum();                                     // it returns total functioning of sum
}

var x=add(20,40);
console.log(x);