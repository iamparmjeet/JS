// 10) String.concat()

// Does not modifiy any string but make a new string

let str1 = 'Hello';
let str2 = "World!"

console.log(`${str1.concat(str2)}`)

// More than one string

let greetings = str1.concat(' ', str2)
console.log(greetings)

// Performance -> use assignment operators instead of concat()

console.log(str1 + ' ' + str2)