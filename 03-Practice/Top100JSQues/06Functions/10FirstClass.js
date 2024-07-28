/*

A Programming language is said to have First Class functions if functions in that language are treated like other variables. 

Functions treated Like Variables
   - 1) Assignable
   - 2) Passable as arguments
   - 3) Returnable as values

*/

// 1st Assigning function like a variable
let myFunc = function () {
   console.log('Happy Interview')
}

myFunc()

function double(num) {
   return num * 2
}

// 2nd Passing function as an argument like a varibale
function performOperation(double, value) {
   return double(value)
}

console.log(performOperation(double, 5))

// 3rd - A function that returns another function

function createSimpleFunction() {
   return function () {
      console.log('I am from return function.')
   }
}

const simpleFunction = createSimpleFunction()
simpleFunction() //I am from return function.