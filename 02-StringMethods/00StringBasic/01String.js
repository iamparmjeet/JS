//01- String Length

let str = "Code explained"
let str1 = "The code undefined code code !"

console.log(`StringLength: ${str.length}`)

// let count = 0;

// for (i = 0; i < str.length; i++) {
//     if (str.length >= 0) {
//         count++
//     }
// }

// console.log(count)

// 02- String Char Access , O Index based

console.log(`StringCharAccess: ${str[1]}`)

// 03 - last Char

console.log(`StringLastChar: ${str[str.length - 1]}`)

// 03 - charAt Method

console.log(`CharAtMethod: ${str.charAt(2)}`)

// IndexOf and LastIndexOf Method Syntax
// string.indexOf(searchString, Position) same for Both
// Here Position mean from where we want to start the searching

// 04 - IndexOf Method

// Enter the char not the index
// Full Char , Case sensitive

console.log(`IndexOfMethod: ${str.indexOf('d')}`)
console.log(`IndexOfMethod: ${str1.indexOf('code')}`) 
console.log(`IndexOfMethod With Position: ${str1.indexOf('code', 4)} `) //4
console.log(`IndexOfMethod With Position: ${str1.indexOf('code', 5)} `) //10
console.log(`IndexOfMethod With Position with Negative: ${str1.indexOf('code', -5)} `) //4
console.log(`IndexOf Empty String: ${str1.indexOf('')}`) //0

console.log(`IndexOf method with Undefined: ${str1.indexOf()}`) // 9 because there is keyword undefined present in the string
console.log(`IndexOf method with Undefined: ${str.indexOf()}`) // -1 because there is no keyword undefined present in the string



// 05- LastIndexof Method


console.log(`LastIndexOfMethod: ${str1.lastIndexOf('code')}`) // 24
// Because index is starting from the 0 and then to 29 but the Last indexOf method start from last but the index remain the same. as a result 24

console.log(`LastIndexOfMethod with Position: ${str1.lastIndexOf('code', 24)}`) // 24
console.log(`LastIndexOfMethod with Position: ${str1.lastIndexOf('code', 23)}`) // 19
console.log(`LastIndexOfMethod with Position with negative: ${str1.lastIndexOf('code', -5)}`) // -1

console.log(`lastIndexOf with Empty String: ${str1.lastIndexOf('')}`) // 30

console.log(`LastIndex with Undefined String: ${str1.lastIndexOf()}`) // 9 Because there is undefined word present in the string
console.log(`LastIndex with Undefined String: ${str.lastIndexOf()}`)
// -1 Because there is no undefined word present in the string
