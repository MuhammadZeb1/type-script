//  union ,literal ,type alias,
// union type
var person = "ali khan ";
person = 12;
// console.log(person)  
// function add (num:number | string, num1:number | string){
//     if (typeof num === "number" && typeof num1 === "number") {
//         console.log(num+num1)  
//     } else {
//         console.log("both parameters should be numbers")
//     }
// }
// add("23",4)
function add(num, num1, conversion) {
    if (conversion === "as-number") {
        console.log(+num + +num1);
    }
    else if (conversion === "as-string") {
        console.log(num.toString() + num1.toString());
    }
    else {
        console.log("both parameters should be numbers");
    }
}
add("23", 4, "as-number");
add("ali", " khan", "as-string");
