// if else
// switch case break
// && (and Operator) || (Or Operator)
// Nullish Operator (??) - Null Undefined
// truthy and falsy value


// let month = 3

// switch (month) {
//     case 1:
//         console.log('January')
//         break;
//     case 2:
//         console.log('feb')
//         break;
//     case 3:
//         console.log('March')
//         break;
//     case 4:
//         console.log('April')
//         break;
//     default:
//         console.log('default')
//         break;
// }

// Truthy Value

// let userEmail = 'hi@yt.com' // 
let userEmail = [] // true but empty string false

// here we assume there is a value 
if (userEmail) { 
    console.log('Got an email')
} else {
    console.log('No email')
}

// Falsy Value
console.log('Falsy Value')
// Falsy Value ->  False, 0 , -0, BigInt - (0n), "" , null, undefined, NaN
// Truthy Value -> [], {},  "0", 'false'(string) ,  " " (even the space), function(){} ,


console.log('Checking for EMPTY ARRAY')

let dummyArray = []

if (dummyArray.length === 0) {
    console.log('Empty Array')
} else {
    console.log('Not Empty Array')
}

console.log('CHECKING FOR EMPTY OBJECT')

let emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log('Empty Object')
} else {
    console.log('Not Empty Object')
}

console.log('NULL COALESCING')

let val1;
//val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 20 // 10

//console.log(val1)

// TERNIARY Operator
console.log('TERNIARY OPERATOR')

// condition ? true : false

let masalaTea = 80

masalaTea <= 90 ? console.log('less than 90') : console.log('More tha 90')