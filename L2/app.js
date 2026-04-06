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
// const arr:string[]=["ali","khan "]
// // array inside obj
//  const person: {
//     name :string;
//     address: number
//     // arr :string[]  // basic array
//     // arr :Array<string> // generic array
//     // arr :(string|number)[]  // union type array or mixed array
//     // arr :readonly string[]  // readonly array or immutable array
//     arr:any[]  // any type array
// }={
//     name:"khan ",
//     address:12,
//     arr:["ali","khan "]
// }
// console.log(person.arr)
// const name :[number, string] = [12,"ali"]
// JavaScript/TypeScript mein name already ek global property hoti hai
//  (browser environment mein), jo window.name se related hoti hai.
// let  khan :[number, string] = [12,"ali"];
// console.log(khan);
// enum
var naam;
(function (naam) {
    naam["ali"] = "first name";
    naam["khan"] = "last name";
    naam["ahmed"] = "middle name";
    naam["mohammed"] = "full name";
})(naam || (naam = {}));
console.log(naam.ali);
