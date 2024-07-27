/*

3 Ways of Pass arguments

- Positional Arguments
- Named Arguments
- Arguments Object

*/

// Positional

function add(a, b) {
   console.log(a + b)
}
add(3, 5) // 8

// Named 

let person = {
   name: 'John',
   role: 'Dev'
}

function greet(person) {
   console.log(person.name + " " + person.role)
}
greet(person)

// Arguments Object

function sum() {
   console.log(arguments[0])

   console.log(arguments[1])

   console.log(arguments[2])

   console.log(arguments.length)
}

sum(1,2,3)