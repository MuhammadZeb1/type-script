// function add (num, num1){
//     console.log(num+num1)
// }
// add("23",4)


function add (num:number, num1:number, str:string, boo:boolean){
    if (boo) {
      console.log(`${str}${num+num1}`)  
    }
}
add(23,4,"some of two number :",true)