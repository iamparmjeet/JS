// Pure function

function add(a, b) {
   return a + b
}

console.log(add(3, 5))

// Impure function

let total = 0 

function addToTotal(value) {
   total += value
   return total
}

addToTotal(5)
console.log(total) // 5
addToTotal(5)
console.log(total) // 10

// Here Total is global scope variable