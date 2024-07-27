/*

Higher Order function

- take one or more functions as arguments(cb) OR
- Return a function as a result 

*/


let add = (a,b) => a + b


function display(x, y, operation) {
   let result = operation(x, y)
   console.log(result)
}

display(1, 2, add)

// display = higher order function

// Version 2

function HoF(func) {
   func()
}

HoF(sayHello)

function sayHello() {
   console.log('Hello!')
}

// Here HoF -> Higher Order function and func -> CB