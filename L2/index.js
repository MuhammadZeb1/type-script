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
var str = ["kkkkkkk", "jsfhsuhwue", 3853]; // any treat the like the javascript and loose the ts power
// console.log(person1.arr[0])
// tuple
// to define the fixed array of one more types
var arrNum = [2, "oooo"];
// console.log(arrNum)
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
; // 
console.log(Role.READ_USER_ONLY);
var Names;
(function (Names) {
    Names[Names["Sakib"] = 0] = "Sakib";
    Names[Names["Rahim"] = 2] = "Rahim";
    Names[Names["Karim"] = 3] = "Karim";
})(Names || (Names = {}));
console.log(Names[2]);
var person = {
    name: "patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_USER_ONLY
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
var move = Direction.North;
// console.log(move); // Output: 0
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["InProgress"] = 3] = "InProgress";
    Status[Status["Done"] = 5] = "Done";
})(Status || (Status = {}));
// console.log(Status.Done); // Output: 5
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var myRole = Role.Admin;
// console.log(myRole); // Output: ADMIN
var number = [];
number[0] = 3;
console.log(number);
