// function return type 
// function functioNName(): returnType {
//     console.log("this is a function with void return type")
// }
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(23, 4));
// we can use the ( string, number , boolean , void , never , unknown ) as return type of function
// void return type
// bad pratices 
var com;
// com = 10 // not valid
com = function (a, b) {
    return a + b;
}; // valid 
// com = add // valid
console.log(com(2, 2));
