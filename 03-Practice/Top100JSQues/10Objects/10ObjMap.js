/*

- get
- set
- delete
- has
- enteries
- keys
- values
*/

// Creating a map to store person details 
const person = new Map()
person.set('Name', 'John')
person.set('Age', 33)
console.log(person)
// Map(2) { 'Name' => 'John', 'Age' => 33 }

console.log(typeof person) // object

// get the value
console.log(person.get('name')) // Undefined
console.log(person.get('Name')) // John

// Has the value
console.log(person.has('Age')) // true

// delete the value
console.log(person.delete('age')) // false
console.log(person.delete('Age')) // true
console.log(person) //Map(1) { 'Name' => 'John' }
