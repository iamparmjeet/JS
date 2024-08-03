/*

- 1) Spread Syntax(...) - Shallow Copy
- 2) Object.assign() - Shallow copy
- 3) JSON.parse() & JSON().stringify() - deep copy

*/

const person = {
   name: 'alice',
   age: 33
}

// - 1) Spread Syntax(...)
const clonedPerson = {...person}
console.log(person) //{ name: 'alice', age: 33 }

console.log(clonedPerson)
clonedPerson.name = 'John wick'
console.log(clonedPerson) //{ name: 'John wick', age: 33 }

// - 2) Object.assign()
// Parameters: traget, source

const clonedObjPerson = Object.assign({}, person)
console.log(clonedObjPerson)
//{ name: 'alice', age: 33 }

// - 3) JSON.parse() & JSON().stringify()
const deepCopyPerson = JSON.parse(JSON.stringify(person))
console.log(deepCopyPerson)
//{ name: 'alice', age: 33 }