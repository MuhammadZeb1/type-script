//  union ,literal ,type alias,


// union type

let person  : string | number = "ali khan "
person = 12
// console.log(person)  

// function add (num:number | string, num1:number | string){
//     if (typeof num === "number" && typeof num1 === "number") {
//         console.log(num+num1)  
//     } else {
//         console.log("both parameters should be numbers")
//     }
// }
// add("23",4)


// literal type
// function add (num:number | string, num1:number | string, conversion: "as-number" | "as-string"){
//     if (conversion === "as-number") {
//         console.log(+num+ +num1)  
//     } 
//     else if (conversion === "as-string") {
//         console.log(num.toString() + num1.toString())  
//     }
//     else {
//         console.log("both parameters should be numbers")
//     }
// }
// add("23",4,"as-number")
// add("ali"," khan","as-string")

// type alias
type Conversion = "as-number" | "as-string"

type Combinable = number | string
function add (num:Combinable, num1:Combinable, conversion: Conversion){
    if (conversion === "as-number") {
        console.log(+num+ +num1)  
    } 
    else if (conversion === "as-string") {
        console.log(num.toString() + num1.toString())  
    }
    else {
        console.log("both parameters should be numbers")
    }
}
// add("23",4,"as-number")
// add("ali"," khan","as-string")


type User = {
    name : string,
    age : number,
    hobbies : string[],
    role : [number,string]
}
const user1 : User = {
    name:"ali khan",
    age:12,
    hobbies:["cricket","coding"],
    role:[1,"author"]
}


function printUser(user: User){
    console.log(user.name)
    console.log(user.age)
    console.log(user.hobbies)
    console.log(user.role)
}
printUser(user1)
