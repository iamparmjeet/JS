let str1 = 'Hello'
let str2 = 'World'

// +Operator
let str = str1 + str2
console.log(str) // 'HelloWorld'

// Concat
let concatStr = str1.concat(' ', str2)
console.log(concatStr) // 'Hello World'

// Template Literals
let tlStr = `${str1} ${str2}`
console.log(tlStr) // 'Hello World

// Join Method
let joinStrArr = [str1, str2]
console.log(joinStrArr) // Array

let joinStr = joinStrArr.join(' ')
console.log(joinStr) // 'Hello World'