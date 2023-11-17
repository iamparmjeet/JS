// 08 ) String.startsWith(searchString)
// String.startsWith(searchString, Position)

// Case sensitive

const str = 'Cats are the best!' // 18
console.log(str.length)

const result = str.startsWith('Cats')
const result2 = str.startsWith('are', 3)

console.log(`Original Str: "${str}", and startsWith Method: "${result}" `)

console.log(`Original Str: "${str}", and startsWith Method with Position: "${result2}" `)

// 09) String.endsWith(searchString)
// String.endsWith(searchString, length)
// Index and Length is different

console.log(`ENDS WITH`)

const result3 = str.endsWith('best')
const result4 = str.endsWith('best!') //
const result5 = str.endsWith('best!',  17)
const result6 = str.endsWith('are',  17)
const result7 = str.endsWith('best',  17)

console.log(`Original Str: "${str}", and startsWith Method: "${result3}" `)
console.log(`Original Str: "${str}", and startsWith Method: "${result4}" `)
console.log(`Original Str: "${str}", and startsWith Method with Length: "${result5}" `)
console.log(`Original Str: "${str}", and startsWith Method with Length: "${result6}" `)
console.log(`Original Str: "${str}", and startsWith Method with Length: "${result7}" `)