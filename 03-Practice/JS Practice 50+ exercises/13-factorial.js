
// Factorial = 5 = 5 * 4 * 3 * 2 *1

const calFactorial = (num) => {
   if (num === 0 || num === 1) {
      return 1
   } else {
      let fact = 1
      for (let i = 1; i <= num; i++) {
         fact = fact * i;
      }
      return fact
   }
}

// calFactorial(56)

console.log(calFactorial(6))


// Using Recursion

/*

fact(n) = n x n-1 x n-2 ... 1

n! = n x (n-1)!

5! = 5 x 4!


*/

console.log('Recursion')



function factorialUsingRecursion(n) {
   if (n === 1) {
      return 1
   } else {
      return n * (factorialUsingRecursion(n-1))
   }
}

console.log(factorialUsingRecursion(6))