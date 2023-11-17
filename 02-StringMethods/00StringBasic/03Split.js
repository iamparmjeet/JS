// 06 Split Method
// Does not modifiy the original but put these substrings into an array

// Syntax string.split()
// Syntax string.split(seperator)
// Syntax string.split(seperator, limit)

let str = 'The morning is upon us.' //23

let str2 = str.split() // Original
console.log(`Original String "${str}" and Split without and Separator :"${str2}"`)

let str3 = str.split(' ') 
console.log(`Original String "${str}" and Split with the Seperator :"${str3}"`)

let str4 = str.split('') 
console.log(`Original String "${str}" and Split with the Seperator :"${str4}"`)

let str5 = str.split(' ') // Original
console.log(`Original String "${str}" and Split with the Seperator and Limit :"${str5}"`)