// 07) Includes()

// Syntax string.includes(searchString)
// Boolean
// Position Parameter -> string.includes(searchString, Position)

let sent = 'The quick brown fox jumps over the lazy dog.' //44

console.log(`Original String: ${sent} and Includes method: ${sent.includes('fox')}`) // true
console.log(`Original String: "${sent}" and Includes method: "${sent.includes('Fox')}" `) // false


console.log(`Original String: "${sent}" and Includes method with position: "${sent.includes('fox', 0 )}" `) // True
console.log(`Original String: "${sent}" and Includes method with position: "${sent.includes('fox', 17 )}" `) // false

