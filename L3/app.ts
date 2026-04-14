//  union ,literal ,type alias,


// union type

let person  : string | number = "ali khan "
person = 12
console.log(person)  

function add (num:number | string, num1:number | string){
    if (typeof num === "number" && typeof num1 === "number") {
        console.log(num+num1)  
    } else {
        console.log("both parameters should be numbers")
    }
}
add("23",4)
