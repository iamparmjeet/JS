// 0 1 2 3 5 8 ..... n

function fibonacci(n) {
   if (n <= 1) {
      return n
   } else {
      return fibonacci(n-1)+ fibonacci(n-2)
   }
}

console.log(fibonacci(5))