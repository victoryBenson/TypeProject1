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


let greet: string = 'Hello_World';
let age: number;
let isLoading: boolean;
let album: any

greet = 'How ar you today!'
age = 50;
isLoading = true;
album = 2000

console.log(`${greet}, ${isLoading} ${album}`)

const total = (a: number, b: string) => {
    return a + b
}

//union types
let userId: string | number

let re = /v\/gr/ //regexp type
let value = RegExp // how to declare regexp value


//day2 with dave gray

//array types
let stringArr = ['one', 'two', 'three']
let decltype = ['four', 'five', true]
let multiType = ['six', 7, false]

// note you cannot merge two two array with different data types
// e.g
// stringArr = multiType //not correct
// decltype = stringArr //correct

stringArr.push('false')
stringArr[0] = 'Zero!' 
stringArr.pop()
stringArr.unshift()

console.log(stringArr)


// note: you can define an empty array and set the type of data it will accept
let item = []
let test_run: string[] = [] //data type with specified annotation type
let result = test_run.push("Hello.world")
console.log(result)

//tuple

function doSomething(pair:[string, number]){
    const a = pair[0]
    console.log(a)

    const b = pair[1]
    console.log(b)
}
doSomething(['hello', 84])

// example 2 on tuple
let example: [string, number, boolean] = ['Jerry', 98, true]
 
 example.push('hello')
 example[1] = 98
 console.log(example)

let mixed  = ['Tega', 1, true]

// example = mixed //error, because type does not match the exact type declared in the initial 
// mixed = example //no error


// objects in typescript
let myObj: object
myObj = []
console.log(typeof myObj)

//type or interface is use to declare object annotate 
// type Footballers = {
//     name: string,
//     active?: boolean,
//     years: (string | number)[]
// }

// interface Footballers {
//     name: string,
//     active?: boolean,
//     years: (string | number)[]
// }

// let manchester: Footballers = {
//     name: 'Christiano Ronald',
//     active: true,
//     years: ["2007", 'till date']
// }

// let Liverpool: Footballers = {
//     name: "Steven Jerry",
//     active: false,
//     years: ['2000', "2001"]
// }


//note you can make a property type conditional

// example using function 
// const players =(footballers:Footballers) => {
//     return `This is ${footballers.name}!`
// }
// console.log(players(manchester))


// day 3

// type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

// type Footballers = {
//     name: string,
//     active?: boolean,
//     years: stringOrNumber
// }



// literal types

// literal types is used to declare multiple value or data types
 let myName: 'Chris'

//  let username: "Christopher" | "John" | "Micheal"
let username: stringOrNumber
username = "User24"
 console.log(username)
//  username = 'Christopher'


// functions in typescript

// type doubleType = number

const added = (a:number, b:number): number => {
    return a+b
}

//function without return
const showLog = (message:any): void => {
    console.log(message)
}

// showLog(`Answer = ${added(506,939).toExponential()}`)

let subtract = function(c: number, d: number): number {
    return c-d
}

// using type Aliases and interface to decalre annotation in function

// type mathFunction = (a:number, b: number) => number

interface mathFunction{
    (a: number, b:number): number
}


let multiply : mathFunction = (x,y) => {
    return x * y
}

showLog(multiply(8,90))


//optional parameter

const multipleCal = (a:number, b:number, c?:number):number => {
   if(typeof c !== 'undefined'){
    return a+b+c
   }
   return a+b
}

console.log(multipleCal(2,6))


//default parameter
const calculateAll = (a: number = 87, b: number, c: number = 59): number => {
    return a+ b+c
}

showLog(calculateAll(undefined, 3))


//rest parameter
const calcTotal =(a:number, ...nums:number[]): number =>{
    return a + nums.reduce((prev, curr) => prev + curr)
}

showLog(calcTotal(29, 100))


//never ype of function used to declare erro message