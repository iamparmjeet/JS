// 15) String.padStart(targetLength)
// String.padStart(targetLength, padString)

let str = 'Hello'

let padStr1 = str.padStart(7)
console.log(`Original: "${str}" and Padded String: "${padStr1}" `)

let padStr3 = str.padStart(10, 'de')
console.log(`Original: "${str}" and Padded String: "${padStr3}" `)


// 16) String.padEnd()

let padStr2 = str.padEnd(8)
console.log(`Original: "${str}" and Padded String: "${padStr2}" `)

let padStr4 = str.padEnd(10, 'fg')
console.log(`Original: "${str}" and Padded String: "${padStr4}" `)