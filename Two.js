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