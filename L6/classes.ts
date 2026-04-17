class Person {
    name :string;
    constructor (str :string){
        this.name = str
    }

    greet (this: Person):void{
        console.log(`Hello, my name is ${this.name}`)
    }

}

let p1 = new Person("John")
console.log(p1.name)
p1.greet()

const p1Copy = {
    copyName : p1.greet.bind(p1)
}

p1Copy.copyName()
