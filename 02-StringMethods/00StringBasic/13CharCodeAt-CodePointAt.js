// 23) String.charCodeAt(position) // UTF-16 0 and 65535
//     String.codePointAt(position) // Unicode 0 and 65535 & > 65535

// If value not present -> charCodeAt and CodePointAt returns NaN and undefined

let str = 'ok 😃'
console.log(str.length)

let charCode = str.charCodeAt(3)
console.log(`CharCode: "${charCode}"`)

let codePoint = str.codePointAt(3)
console.log(`CodePoint: "${codePoint}"`)