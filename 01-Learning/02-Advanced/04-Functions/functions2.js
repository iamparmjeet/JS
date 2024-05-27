// JS Functions

// Function Statement

function sum(a, b) {
   return a + b
}

// Function Expression

const sum1 = function (a, b) {
   return a + b
}

// Arrow Function

const sum2 = (a, b) => a + b

// Anonymous function

// function () {
//    // Do Something
// }

setTimeout(() => {
   // Do something
}, 1000)

// Generator Function

function* indexGenerator() {
   let index = 0;
   while (true) {
      yield index++
   }
}

const g = indexGenerator()
console.log(g.next().value) // 0
console.log(g.next().value) // 1
console.log(g.next().value) // 2


   // IIFE-Immediately invoked function expression
   (function () {
    // code 
   })();