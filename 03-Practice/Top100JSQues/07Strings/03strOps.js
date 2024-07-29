// Add Multiple string
let str1 = 'Hello'
let str2 = 'World'
let result = str1 + " " + str2
console.log(result)

// Using concat method
let result2 = str1.concat(" ", str2)
console.log(result2)

// Extract a portion of a string
let subStr = result.substring(6, 11)
console.log(subStr) // World

// Retrieve the length
console.log(result.length) // 11

// Convert a string to uppercase or lowercase
console.log(result.toLocaleLowerCase()) // hello world
console.log(result.toLocaleUpperCase()) // HELLO WORLD

// Split a string into an array of substrings
// Based on a delimiter
let arr = result.split(' ')
console.log(arr)

// Replace occurrences of a substr within a string
let replaceStr = result.replace('World', 'JS')
console.log(replaceStr)
console.log(result)

// Remove leading and trailing whitespace

let spacedStr = '     Hello Spaced    JS   '
let trimmedStrStart = spacedStr.trimStart()
let trimmedStrEnd = spacedStr.trimEnd()
let trimStr = spacedStr.trim()

console.log(trimmedStrStart) // 'Hello Spaced    JS    '
console.log(trimmedStrEnd) // '   Hello Spaced    JS'
console.log(trimStr) // 'Hello Spaced    JS'

// Not in between