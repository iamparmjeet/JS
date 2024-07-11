
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

console.log(calFactorial(5))