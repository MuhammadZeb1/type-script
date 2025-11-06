//  simple plan javascript not use the ts so it create problem that do removed that problem we use the ts
// function add (num1,num2){
//     return num1 + num2;
// }
// const result = add ("5", 10);
// console.log(result);

// now the same code using ts

// here we use the type annotation to define the type of variable
// core data types in ts are number , string , boolean
function add (num1 :number , num2 :number) {  // :number  is use for type annotation
    return num1 + num2;
}
const result = add (5, 10);
console.log(result);