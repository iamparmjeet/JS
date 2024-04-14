let marvelHeros = ['thor', 'captain', 'spiderman']

let dcHeros = ['superman', 'batman', 'flash']

//marvelHeros.push(dcHeros) // It did not merge but add as a array

console.log(marvelHeros)

console.log('concat Method') 
let newMarvelHeros = marvelHeros.concat(dcHeros)

// console.log(marvelHeros)
// console.log(newMarvelHeros)

console.log('Easy Method - Spread Operator')

let newAllHeros = [...marvelHeros, ...dcHeros]
console.log(newAllHeros)


console.log('Array within Arrays')
let embedArray = [1, 2, 3, [4, 5, 6], 7, 8, [10, 11, [12, 13, 14, 15]]]

let newEmbedArray = embedArray.flat(Infinity)
console.log(newEmbedArray)

console.log('How to know about array')

console.log(Array.isArray(newEmbedArray)) // it is already array , what if it is not!

console.log(Array.isArray('John Wick')) // It is not an array

console.log(Array.from('John Wick')) // 'From' keyword that will convert String into Array

console.log(Array.from({ name: 'John' })) // from keys - interesting case -> from key it is unable to convert and return empty array


console.log('Case- when there is different set of elements')

let score1 = 11
let score2 = 22
let score3 = 33

let scores = [score1, score2, score3]

console.log(scores)

console.log(Array.of(score1, score2, score3)) // 'of' keyword