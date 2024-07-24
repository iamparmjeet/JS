let str = 'The morning is upon us.'

let str1 = 'abc'

/*

str.repeat(count)

*/

console.log(str1.repeat(0)) // empty
console.log(str1.repeat(1)) // abc
console.log(str1.repeat(2)) // abcabc
console.log(str1.repeat(3.5)) // abcabcabc // Integer into num
console.log(str1.repeat(3.6)) // abcabcabc // Integer into num
// console.log(str1.repeat(-1)) // range error
// console.log(str1.repeat(1/0)) // range error