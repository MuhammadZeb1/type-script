// function add (num, num1){
//     console.log(num+num1)
// }
// add("23",4)
function add(num, num1, str, boo) {
    if (boo) {
        console.log("".concat(str).concat(num + num1));
    }
}
add(23, 4, "some of two number :", true);
