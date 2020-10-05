//Zadanie 1
const boolValue1 = true;
const boolValue2 = false;
console.log(boolValue1 === boolValue2); // false

//Zadanie 2
const num1 = 6;
const num2 = 12;
let moduloResult = 0;
moduloResult = num1 % num2;
console.log(moduloResult); // 6

//Zadanie 3
const str1 = "Hubert";
const str2 = "Jacek";
let stringResult = "";
stringResult = str1 + str2;
console.log(stringResult); // HubertJacek

//Zadanie 4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true
console.log(someNumber === someString); // false
/*
    Boolean operator == computes only values,
    but operator === computes values and types of variables.
*/

//Zadanie 5
let counter = 30;
console.log(counter); // 30
counter++;
console.log(counter); // 31
counter--;
console.log(counter); // 30

//Zadanie 6
const x = 5;
const y = 7;
let result = null;
result = x > y;
console.log(result); // false