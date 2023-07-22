// Declaring objects - 1) Literals 2) Constructors
// Singleton -> Unique objects from Constructors -> Objects.create
// Multiple Instances When from Literals -> {}

console.log('Object literals')  // keys and Values

let mySym = Symbol('key1') // Symbol - Primitive Datatype

const jsUser = {
    name: 'John',
    'full Name': 'John Wick', // here we cannot access with '.dot notation'
    age: 30,
    city: 'New York',
    mySym: 'mySymkey1', // It is string not symbol - only with []
    [mySym]: 'mySymkey2',
    isLoggedIn: false
}

console.log(jsUser.name) // Not good. there is better options
console.log(jsUser["full Name"]) 
console.log(jsUser['city'])
console.log(jsUser.mySym)
console.log(jsUser[mySym]) // only way to access this

console.log(jsUser)
console.log('Before Freezing the value')
jsUser.name = 'Constantine'
console.log(jsUser)
console.log('After Freezing the value')
Object.freeze(jsUser)
console.log(jsUser)