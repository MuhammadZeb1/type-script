// union ,literal type , type alias(surtom type)
// console.log("khan")
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number"); // 30
var sum2 = combine(10, 50, "as-number");
var combinedName = combine("muhammad", " MernStack", "as-string"); // Patel MernStack
var firstName = 9999;
var user = {
    name: "ali"
};
console.log(user.name);
