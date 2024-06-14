"use strict";
// console.log('hello world');
// let age: number = 20
// if (age > 10) {
//     age +=80
// }
// console.log(age);
// //using 'any' type system
// function render(document: any) {
//     console.log(document)
// };
// let firstName = new String('Danny');
// console.log(firstName)
// // 2. using 'array type system'
// let values: (string | number)[] = ['Apple', 2, 'orange', 3, 4, 'banana']
// console.log(values)
let greet = 'Hello_World';
let age;
let isLoading;
let album;
greet = 'How ar you today!';
age = 50;
isLoading = true;
album = 2000;
console.log(`${greet}, ${isLoading} ${album}`);
const total = (a, b) => {
    return a + b;
};
//union types
let userId;
let re = /v\/gr/; //regexp type
let value = RegExp; // how to declare regexp value
//day2 with dave gray
//array types
let stringArr = ['one', 'two', 'three'];
let decltype = ['four', 'five', true];
let multiType = ['six', 7, false];
// note you cannot merge two two array with different data types
// e.g
// stringArr = multiType //not correct
// decltype = stringArr //correct
stringArr.push('false');
stringArr[0] = 'Zero!';
stringArr.pop();
stringArr.unshift();
console.log(stringArr);
// note: you can define an empty array and set the type of data it will accept
let item = [];
let test_run = []; //data type with specified annotation type
let result = test_run.push("Hello.world");
console.log(result);
//tuple
function doSomething(pair) {
    const a = pair[0];
    console.log(a);
    const b = pair[1];
    console.log(b);
}
doSomething(['hello', 84]);
// example 2 on tuple
let example = ['Jerry', 98, true];
example.push('hello');
example[1] = 98;
console.log(example);
let mixed = ['Tega', 1, true];
// example = mixed //error, because type does not match the exact type declared in the initial 
// mixed = example //no error
// objects in typescript
let myObj;
myObj = [];
console.log(typeof myObj);
// type Footballers = {
//     name: string,
//     active?: boolean,
//     years: stringOrNumber
// }
// literal types
// literal types is used to declare multiple value or data types
let myName;
//  let username: "Christopher" | "John" | "Micheal"
let username;
username = "User24";
console.log(username);
//  username = 'Christopher'
// functions in typescript
// type doubleType = number
const added = (a, b) => {
    return a + b;
};
//function without return
const showLog = (message) => {
    console.log(message);
};
// showLog(`Answer = ${added(506,939).toExponential()}`)
let subtract = function (c, d) {
    return c - d;
};
let multiply = (x, y) => {
    return x * y;
};
showLog(multiply(8, 90));
//optional parameter
const multipleCal = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
console.log(multipleCal(2, 6));
//default parameter
const calculateAll = (a = 87, b, c = 59) => {
    return a + b + c;
};
showLog(calculateAll(undefined, 3));
//rest parameter
const calcTotal = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
showLog(calcTotal(29, 100));
//never ype of function used to declare erro message
