
// Named function

function sum(a, b) {
   let c = a + b
   return c
}

console.log(sum(1, 2))

// anonymous function

console.log(function (a, b) {
   let sum = a + b
   return sum
}(4,5))