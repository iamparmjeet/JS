/*

- 1) Using in operator
- 2) Using the hasOwnProperty()
- 3) Comparing with undefined
*/


let person = {
   name: 'alice',
   age: 33
}

// 1) Using in Operator
console.log('name' in person) // true
console.log('bio' in person) // false


// 2) Using the hasOwnProperty()

console.log(person)
console.log(person.hasOwnProperty('name')) // true
console.log(person.hasOwnProperty('city')) // false

// 3) Comparing with undefined
console.log(person.name !== undefined) // true
console.log(person.bio !== undefined) // false