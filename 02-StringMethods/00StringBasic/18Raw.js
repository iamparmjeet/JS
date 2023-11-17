// 34) String.raw()
// Syntax string.raw(strings, ...substitutions) Using ``

// Escape Char \n, \r, \t ...

let filePath = 'C:\windows\registration\name\filename.js'

console.log(filePath) // It will replace backslash with next line

// Solution 

let filePath1 = 'C:\\windows\\registration\\name\\filename.js'
console.log(filePath1)

// console.log(filePath.raw())

const str1 = String.raw`I am \n${10 + 5} years old!`
console.log(str1)

// If use unicharacter of escape char

const str2 = String.raw`I am \u000A15${10 + 5} years old!`
console.log(str2)