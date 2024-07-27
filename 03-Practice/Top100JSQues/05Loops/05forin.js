// for...of ⇒ used to loop through the values of an object like arrays, strings

let arr = [1,2,3,4]

console.log('for of')

for (const i of arr) {
   console.log(i)
} // [1,2,3,4]

console.log('for in')

/*

   better for key-pair arrays

*/

let person = {
   name: 'john',
   role: 'dev'
}

for (let key in person) {
   console.log(person[key])
}