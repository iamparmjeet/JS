const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 123.888

console.log(otherNum.toPrecision(4))

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'))

/***** Math ********/

console.log('Math')

console.log(Math.abs(-5)); // Turns negative into Positive, But vice versa not allowed

console.log(Math.round(5.4)) // Nearest to end -- if we want to choose min and max then --> ceil

console.log(Math.ceil(6.3)) // =>7 , to the Max

console.log(Math.floor(8.8)) // => 7 , to the Min

console.log(Math.sqrt(25))

console.log(Math.min(1, 2, 3, 4, 5, 6)) // find lowest value in array

console.log(Math.max(1, 2, 3, 4, 5, 6)) // find Highest value in array

console.log('Most Used case of Math - Math.random()');

console.log(Math.random());

console.log((Math.random() * 10) + 1) // Here by multiplying decimal shift (0 - 9) , + 1 ( In case number is zero)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min + 1)) + min)