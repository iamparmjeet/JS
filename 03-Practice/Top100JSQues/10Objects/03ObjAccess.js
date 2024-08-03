let person = {
   name: 'John',
   age: 44
}

console.log(person)
//{ name: 'John', age: 44 }

// Dot notation
console.log(person.name) // John

// Bracket Notation
console.log(person['age']) // 44
// console.log(person[age]) // Error without ticks


// Limitation and dynamically assign property name to a variable

let pName = 'age'

console.log(person[pName]) // 44

console.log(person.pName) // Undefined