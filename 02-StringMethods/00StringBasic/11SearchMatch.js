// 18) String.search(regexp or String)

let text = 'The rain in SPAIN stays mainly in the plain'

let position1 = text.search('ain')
console.log(position1) // 5

let position2 = text.search(/ain/)
console.log(position2) // 5

let position3 = text.search(/AIN/)
console.log(position3) // 14


let position4 = text.search(/AIN/i) // i not I  flag = case insensitive
console.log(position4) // 14

let position5 = text.search(/w/)
console.log(position5) // -1


// 19) String.match()

console.log(`MATCH METHOD`)
// It also takes string and regexp, Difference is output is []
// If not found returns null

// But Search returns index the first match
// If not found returns -1

let textMatch = text.match('ain')
console.log(textMatch)


let textMatch1 = text.match(/ain/g) // g-Global Tag
console.log(textMatch1)


let textMatch2 = text.match(/ain/gi) // g-Global Tag
console.log(textMatch2)

let textMatch3 = text.match(/w/)
console.log(textMatch3)


console.log('MATCH ALL METHOD')

// String.matchAll()
// MatchAll converts normal expression into regexp with global tag
// We have to use loop
// Empty Array if not match
// If adding regexp without global flag it will throw an error

let textMatchAll = text.matchAll('ain')

console.log(...textMatchAll)


let textMatchAll1 = text.matchAll(/ain/gi)
console.log(...textMatchAll1)