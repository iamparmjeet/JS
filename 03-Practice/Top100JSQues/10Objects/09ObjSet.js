/*

   Set Object is a collection of unique values, meaning that duplicate values are not allowed

*/

const uniqueNums = new Set()
uniqueNums.add(5)
uniqueNums.add(10)
uniqueNums.add(11)
uniqueNums.add(5) // Ignore duplicate values

console.log(uniqueNums)
//Set(3) { 5, 10, 11 }

// Check size
console.log(uniqueNums.size) // 3

// Element Existence

console.log(uniqueNums.has(10)) // true
console.log(uniqueNums.has(12)) // false

console.log(typeof uniqueNums) // object

// Delete

console.log(uniqueNums) //Set(3) { 5, 10, 11 }
console.log(uniqueNums.delete(10))
console.log(uniqueNums) //Set(2) { 5, 11 }