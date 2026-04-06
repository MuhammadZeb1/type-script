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

const arr:string[]=["ali","khan "]

// array inside obj
 const person: {
    name :string;
    address: number
    // arr :string[]  // basic array
    // arr :Array<string> // generic array
    // arr :(string|number)[]  // union type array or mixed array
    // arr :readonly string[]  // readonly array or immutable array

    arr:any[]  // any type array
}={
    name:"khan ",
    address:12,
    arr:["ali","khan "]
}


console.log(person.arr)


