// object , array , tuple , enum , any , void , never , unknown
// object 
// const person: {
//     name :string;
//     address: number
// }={
//     name:"khan ",
//     address:12
// }
// console.log(person.name)
//! array 
var arr = ["ali", "khan "];
// array inside obj
var person = {
    name: "khan ",
    address: 12,
    arr: ["ali"]
};
person.arr[9] = "khan";
console.log(person.arr);
