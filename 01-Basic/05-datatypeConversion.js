console.log('Only Number')
let score = 33

console.log(typeof score) // number
console.log(typeof (score)) // method -- number


console.log('Number in string')

let score2 = '33'

console.log(typeof score2) // string
console.log(typeof (score2)) // method -- string

//conversion
console.log('conversion')

let score3 = Number('44') //string but only number

console.log(typeof score3) // number
console.log(typeof (score3)) // method -- number

console.log('Mix char')

let score4 = Number('44aa') // string with mix char
console.log(typeof score4)
console.log(score4) // NaN

// '33' => 33 - Number
// '33aa' => NaN ( but type is Number)
// 'true' => 1/0
// null => 0
// undefined => NaN


console.log('Boolean Conversion')

let loggedIn = Boolean(0) // if string then it is going to show true

console.log(typeof loggedIn) // Boolean
console.log(loggedIn)

// 1/0 = True/False
// '' => false
// 'string' => true

console.log('String Conversion')

let someNumber = String(44)

console.log(typeof someNumber)
console.log(someNumber)

let someNumber2 = String('44')

console.log(typeof someNumber2)
console.log(someNumber2)
