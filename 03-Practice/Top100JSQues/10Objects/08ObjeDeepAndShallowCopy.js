let person = {
   name: 'John',
   age: 33,
   address: {
      city: 'Delhi',
      country: 'India'
   }
}

//Shallow copy (It will also modify the original)

let shallowCopyPerson = Object.assign({}, person)
console.log(shallowCopyPerson)
//{ name: 'John', age: 33, address: { city: 'Delhi', country: 'India' } }

console.log(person.address.city) // Delhi
console.log(shallowCopyPerson.address.city) // Delhi

shallowCopyPerson.address.city = 'Punjab'


console.log(person.address.city) // Punjab
console.log(shallowCopyPerson.address.city) // Punjab

// Deep Copy
console.log(person)
//   name: 'John',
//   age: 33,
//   address: { city: 'Punjab', country: 'India' }
// }

const deepCopy = JSON.parse(JSON.stringify(person))
console.log(deepCopy)

deepCopy.address.city = 'Mumbai'
console.log(person.address.city) // Punjab
console.log(deepCopy.address.city) // Mumbai