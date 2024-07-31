/*

Types of Error

- Syntax Error
- Reference Error
- Type Error
- Range Error

*/

// Syntax 

// console.log('Hello' //Missing closing parenthesis

// Reference Error
;
console.log(myVar)
// myVar is not defined

// Type Error

const num = 43
console.log(num.toUpperCase()) // not a function

// Range Error

let arr = [1, 2, 3]
console.log(arr[10]) // Range ERror