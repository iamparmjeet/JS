const str = "The morning is upon us.";

/*

str.startsWith(searchStr)
str.startsWith(searchStr, position)

- Boolean
- Case Sensitive

*/

console.log(str.startsWith('T')) // true
console.log(str.startsWith('t')) // false


console.log(str.startsWith('t', 0)) // false
console.log(str.startsWith('T', 0)) // true
console.log(str.startsWith('The', 0)) // true
console.log(str.startsWith('The', 1)) // true

/*

str.endsWith(searchStr)
str.endsWith(searchStr, length)

- Boolean
- Case Sensitive
- Index starts with 1
*/

console.log('09) ends With')

console.log(str.length) // 23

console.log(str.endsWith('us')) // false
console.log(str.endsWith('us.')) // true

console.log(str.endsWith('us', 22)) // true // Because str length ends before fullstop