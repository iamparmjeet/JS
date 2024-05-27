
// Array of Numbers from 1 to N

const range = (n, steps = 1) => Array.from(
   { length: n}, (_,i) => i * steps
)

console.log(range(5)) // 0, 1, 2, 3, 4][
console.log(range(5, 2)) // [0, 2, 4, 6, 8]


// Does not support steps

const range1 = (n) => [...Array(n).keys()]

console.log(range1(5)) // [0, 1, 2, 3, 4]


// Fill the Array with  a Default Value

const fill = (len, value) => Array(len).fill(value);

console.log(fill(3,0)) // [0,0,0]
console.log(fill(3, 1)) // [1,1,1]

// Fill the Array with - In case of Objects

const fill2 = (len, value) => {
   return Array(len).fill(value).map((v) => ({ ...v}))
}

console.log(fill2(4, {}))


// Shuffle an Array

//Sort Method changes the original array

let sortArray = [1, 2, 3, 4]
let toSortedArray = [1,2,3,4]

const shuffleArray = (arr) => arr.sort(
   () => 0.5 - Math.random()
)

console.log(`Sort Original Array: ${sortArray} `)
console.log(shuffleArray(sortArray)) // [3,2,1,4]

// toSorted Method does not change the original array

const shuffleArray1 = (arr) => arr.toSorted(
   () => 0.5 - Math.random()
)

console.log(`To Sort Original Array: ${toSortedArray}`)
console.log(shuffleArray1(toSortedArray))




// Remove duplicates
console.log('REMOVE DUPLICATES')

const removeDuplicated = (arr) => [... new Set(arr)]

console.log(removeDuplicated([1, 2, 3, 3, 4, 4, 5]))

// Gen Random Numbers in Range

console.log('GEN RANDOM NUMBERS')

const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(random(1, 10))

// Pick a Random Element From an Array

console.log('Pick a Random Element From an Array')

let pickArray = [1,2,3,4,5]

const pick = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)]
}

console.log(`Original Pick Array: ${pickArray}`)
console.log(pick(pickArray))

// FIND THE MAX IN AN ARRAY

console.log('FIND THE MAX IN AN ARRAY')

const maxArray = [3,4,21,24,2,4]

const findLarge = (arr) => Math.max(...arr)

console.log(`Original Max Array: ${maxArray}`)
console.log(findLarge(maxArray))

// FIND THE SMALLEST IN AN ARRAY

console.log('FIND THE SMALLEST IN AN ARRAY')

let minArray = [1, 231, 23, 123, 23, 16, 7]

const findSmallest = (arr) => Math.min(...arr)

console.log(`Orignal Min Array: ${minArray}`)

console.log(findSmallest(minArray))

// CONVERT ARRAY TO OBJECT

console.log('CONVERT ARRAY TO OBJECT')

let arrToObjArr = ['a', 'b', 'c']

const toObject = (arr) => ({ ...arr })

console.log(`Original Array: ${arrToObjArr}`)
console.log(toObject(arrToObjArr))


// COMMON INTERSECTION OF TWO ARRAYS

let intersectionArray1 = [1, 2, 3, 4, 5]
let intersectionArray2 = [6, 2, 3, 9]

const intersection = (arr1, arr2) => {
   const set = new Set(arr1)
   return arr2.filter((x) => set.has(x))
}

console.log(`Intersection Arr 1: ${intersectionArray1}`)
console.log(`Intersection Arr 2: ${intersectionArray2}`)

console.log(intersection(intersectionArray1, intersectionArray2))


// REMOVE FALSY VALUES FROM AN ARRAY

let falsyArr1 = [0, 1, false, 2, '', 'a', NaN, 's', "e" * 23]

const compact = (arr) => arr.filter(Boolean)

console.log(`False Array: ${falsyArr1}`)
console.log(compact(falsyArr1))