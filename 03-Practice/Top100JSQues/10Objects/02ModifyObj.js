// Add or modify or delete properties of an obj

// Blank Object
let person = {}

// Adding Properties
person.name = 'John'
person.age = 33,
person.country = 'India'

console.log(person)
// { name: 'John', age: 33, country: 'India' }
console.log(typeof person) // obj

person.age = 35
console.log(person)
// { name: 'John', age: 35, country: 'India' }

// Deleting properites

delete person.age
console.log(person)
// { name: 'John', country: 'India' }