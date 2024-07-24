const str = "The morning is upon us.";

/*

str.includes(searchString)
str.includes(searchString, Position)


- Case Sensitive
- Boolean

*/


console.log('07-STR.INCLUDES()')

console.log(str.includes('Is')) // false
console.log(str.includes('is')) // true - case sensitive
console.log(str.includes('is', 13))