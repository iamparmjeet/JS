/*

*/

let arr = [1, 2, 3]

// for of
console.log('for of')

for (const i of arr) {
   console.log(i)
}

/*

   For Each method

   - More shorter

*/

console.log('forEach')

arr.forEach((i) => {
   console.log(i)
})


// With for...in loop

console.log('for...in loop')

let person = {
   name: 'John',
   role: 'dev'
}

for (let i in person) {
   console.log(person[i])
}

// Using forEach

console.log('Using For each Method')

Object.values(person).forEach(i => {
   console.log(i)
})

// when to use for of and forEach

console.log('when to use')

for (const i of arr) {
   console.log(i)
   if (i === 2) {
      break;
   }
} // 1 2 

arr.forEach(i => {
   console.log(i)
   if (i === 2) {
      // break; // Illegal break statement
   }
}) 