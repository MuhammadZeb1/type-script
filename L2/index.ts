//  array , enum ,tuple ,object
// console.log("learn about the object ")

// object  in ts 

// const person = {
//     name : "sakib",
//     age : 20,
//     isMarried : false,
// }

// console.log(person.name) // error beacuse lastName is not define in person object4

// now we can define the type of the object properties

// const person1 :{
//     name:string;
//     age:number;
//     isMarried : boolean;
//     more :{ // this like we use the nested objests
//         last:string;
//         phone:number;
//     }
// }={
//     name :"kahn",
//     age :34,
//     isMarried :true,
//     more :{ // this like we use the nested objests
//         last:"kkkkk",
//         phone:34334
//     }
// }

// const person1 :{
//     name:string;
//     age:number;
//     isMarried : boolean;
//     arr :number[]; // this like we use the array
//     more :{ // this like we use the nested objests
//         last:string;
//         phone:number;
//     }
// }={
//     name :"kahn",
//     age :34,
//     isMarried :true,
//     arr :[1,2,3], // this like we use the array
//     more :{ // this like we use the nested objests
//         last:"kkkkk",
//         phone:34334
//     }
// }

// we also array define like that 

// const str : string[] = ["kkkkkkk","jsfhsuhwue"]
const str : any[] = ["kkkkkkk","jsfhsuhwue" ,3853] // any treat the like the javascript and loose the ts power

// console.log(person1.arr[0])

// tuple
// to define the fised array of one more types
const arrNum : [number,string] = [2,"oooo"]

// console.log(arrNum)

enum Role {ADMIN, AUTHOR, READ_USER_ONLY};// 

console.log(Role.READ_USER_ONLY)


const person = {
    name: "patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_USER_ONLY
}

if (person.role === Role.AUTHOR) {
    console.log("Author");
} else if (person.role === Role.ADMIN) {
    console.log("Admin");
} else if(person.role === Role.READ_USER_ONLY){
    console.log("read user only");
}

enum Direction {
  North,
  South,
  East,
  West
}

let move: Direction = Direction.North;

// console.log(move); // Output: 0

enum Status {
  Pending = 1,
  InProgress = 3,
  Done = 5
}

// console.log(Status.Done); // Output: 5

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let myRole: Role = Role.Admin;
// console.log(myRole); // Output: ADMIN
