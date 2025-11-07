// union ,literal type , type alias(surtom type)
// console.log("khan")

//! union (|)
// ! we  use unoin for combine the tyes (| pipe in ts)
// function combine (num1:number|string, num2 :number|string){
// if (typeof num1 === "number" && typeof num2 === "number") {
//     console.log("add the two number", num1 +num2)
// } else{
//     console.log("string ",num1.toString()+num2.toString())
// }
// }
// combine(3,7)

// combine("name","  muhammad")

// literal (|)

// function combine (num1, num2  ,con :"number"|"string"){
// if (typeof num1 === "number" && typeof num2 === "number" || con === "number") {
//     console.log("add the two number", +num1 + +num2)
// } else{
//     console.log("string ",num1.toString()+num2.toString())
// }
// }
// combine("3","7","number")

// combine("name","  muhammad","string")


// function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
//         result = +num1 + +num2;
//     } else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }


// const sum1 = combine("10", "20", "as-number"); // 30
// const sum2 = combine(10, 50, "as-number");
// const combinedName = combine("Patel", " MernStack", "as-string"); // Patel MernStack
// console.log(sum1, sum2, combinedName);


// / // TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(num1: Combinable, num2: Combinable, conversionType: ConversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}


const sum1 = combine("10", "20", "as-number"); // 30
const sum2 = combine(10, 50, "as-number");
const combinedName = combine("muhammad", " MernStack", "as-string"); // Patel MernStack
// console.log(sum1, sum2, combinedName);


type Name = string|number

const firstName:Name = 9999

// console.log(firstName)

// in object 

type User ={
    name:string
}

const user:User ={
    name :"ali"
}
// console.log(user.name)

type User1 = {
    name: string;
    age: number;
    skills: string[]
}

const user1: User1 = {
    name: "Patel",
    age: 22,
    skills:["React", "Node"]
}

function greet(user:User){
   console.log(`Hi, I am ${user.name}`);
}
greet(user);