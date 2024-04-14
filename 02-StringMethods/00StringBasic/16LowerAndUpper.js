// 28) String.toLowerCase()
//  29) String.toUpperCase()

// Does change the original string

// 30) String.toLocaleLowerCase()
// 30) String.toLocaleLowerCase(locale)
// 31) String.toLocaleUpperCase()
// 31) String.toLocaleUpperCase(locale)

let str = 'istanbul'

let upper = str.toLocaleUpperCase('en-US')
console.log(`Original: "${str}" and LocalUpperCase: "${upper}"`)


let upper1 = str.toLocaleUpperCase('tr')
console.log(`Original: "${str}" and LocalUpperCase: "${upper1}"`)