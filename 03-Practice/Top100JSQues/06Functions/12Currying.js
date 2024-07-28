/*
Currying - It transforms a function with multiple arguments into a nested series of functions, each taking a single argument

- Advantage: Re-usability, modularity and specialisation, Big complex functions with multiple arguments can be broken down into small, reusable functions with fewer arguments.

*/

// Normal func

function multiply(a, b) {
   return a * b
}

multiply(3, 3)

// Curried version
function curriedMultiply(a) {
   return function (b) {
      return a * b
   }
}

console.log(curriedMultiply(3, 4)) // No ans

// Create a specialised function for doubling a number
const double = curriedMultiply(2)
console.log(double(5)) // 10

const triple = curriedMultiply(3)
console.log(triple(5)) // 15