// Classes in TypeScript

// class → blueprint for creating objects
// object → instance of a class
// class Person {
//     name :string;
//     constructor (str :string){
//         this.name = str
//     }

//     greet (this: Person):void{
//         console.log(`Hello, my name is ${this.name}`)
//     }

// }

// let p1 = new Person("John")
// console.log(p1.name)
// p1.greet()

// const p1Copy = {
//     copyName : p1.greet.bind(p1)
// }

// p1Copy.copyName()

// private and public access modifiers

// An access modifier controls where you can use (access) class properties and methods.
class Person {
    name :string;
    private employe :string[]
    constructor (str :string){
        this.name = str
        this.employe = []
    }

    addEmploye (emp :string){
        this.employe.push(emp)
    }

    printEmploye (){
        console.log(this.employe)
    }

    greet (this: Person):void{
        console.log(`Hello, my name is ${this.name}`)
    }

}

let p1 = new Person("John")
console.log(p1.name)
p1.greet()

p1.addEmploye("Alice")
p1.addEmploye("Bob")
p1.printEmploye()

