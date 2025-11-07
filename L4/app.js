//! function with return 
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(12, 34));
function greet(name) {
    console.log(name);
}
// add(12,33)
//  bad pratice of code
// let comFun :Function;
// // comFun = 9  invaliad
// comFun =add
// comFun = addTwo
// console.log(comFun(23,45))
// Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
