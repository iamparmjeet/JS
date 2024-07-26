// for and for...of

let arr = [1, 2, 3, 4, 5]

console.log('For Loop - has more code structure to write')

for (let i = 0; i < arr.length; i++) {
   const element = arr[i];
   console.log(element)
}

// for of 

/*

   Less code to write
   Better for arrays and obj and strings
*/


console.log('For...of loop')

for (const i of arr) {
   console.log(i)
}