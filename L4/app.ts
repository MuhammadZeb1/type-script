//! function with return 
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(add(12, 34));

function greet(name:string): void {
  console.log(name) }

// add(12,33)
//  bad pratice of code
// let comFun :Function;

// // comFun = 9  invaliad
// comFun =add
// comFun = addTwo
// console.log(comFun(23,45))

// Good Practice

let combineFunction: (a: number, b: number) => number;

combineFunction = add;

// console.log(combineFunction(100, 200));

type CB = (n: number) => void;

function addHandle(num1: number, num2: number, cb: CB) {
    const result = num1 + num2;
    cb(result);
}

addHandle(10, 20, (result: number) => {
    console.log(result);
})