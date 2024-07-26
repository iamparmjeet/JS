// How to convert an array like object into an array

let arrLike = {
   0: 'a',
   1: 'b',
   2: 'c',
   length: 3
}

console.log(typeof arrLike) // object

/*

3 Ways to convert arrLike obj to array

arr.from()
spread syntax
Array.prototype.slice.all()


*/

console.log('01) Using Array.from()')
console.log(Array.from(arrLike)) // [a,b,c]
console.log(typeof Array.from(arrLike)) // object

console.log('02) Using spread')
// console.log([...arrLike]) // Error

// let arrUsingSpread = [...arrLike] // Error
// console.log(arrUsingSpread) 

console.log('03) using slice.all')
let arr3 = Array.prototype.slice.call(arrLike)
console.log(arr3) // [a,b,c]