let name = 'Rock'
let age = '50'

console.log(name + ' is ' + age + 'years old.') // old method

console.log(`${name} is ${age} years old.`) // newer method with string interpolation using backticks and variable injections.
// Benefits - we can add methods

console.log(`${name.toUpperCase()} is ${age} years old.`) // All UpperCase 

console.log(`${name.charAt(0).toUpperCase() + name.slice(1)} is ${age} years old.`) // Capitalized

let movieName = new String('John Wick') // this new word - create an instance of object that has a constructor function
// not an array

console.log(movieName)

