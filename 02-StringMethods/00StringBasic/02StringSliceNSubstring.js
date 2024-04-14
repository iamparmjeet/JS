// 04 and 05) Slice and Substring Method
// Syntax same - string.slice(indexStart)
// Syntax Same - string.slice(indexStart, indexEnd)

// 04 Slice Method

let str = 'The morning is upon us.'; // 23

console.log(`Original String "${str}" and Sliced String : "${str.slice(12)}"`)
console.log(`Original SubString "${str}" and SubString String : "${str.substring(12)}"`)


console.log(`NEGATIVE INDEX`)
console.log(`Original String "${str}" and Sliced String with negative index : "${str.slice(-11)}"`)

console.log(`Original SubString "${str}" and SubString String with negative index : "${str.substring(-11)}"`) // Any Negative Index will behave like the zero substring as a result it will start from the starting not from the end.


//METHOD WITH START AND ENDING OF INDEX
console.log(`METHOD WITH START AND ENDING OF INDEX`)

console.log(`Original String "${str}" and Sliced String with Index End : "${str.slice(13, 16)}"`)

console.log(`Original SubString "${str}" and SubString String with Index End : "${str.substring(13, 16)}"`) //


console.log(`Original String "${str}" and Sliced String with Index End with reversed : "${str.slice(16, 13)}"`) // Empty

console.log(`Original SubString "${str}" and SubString String with Index End with reversed: "${str.substring(16, 13)}"`) // but returns s u , How it swaps the index


console.log(`NEGATIVE INDEX`)

console.log(`Original String "${str}" and Sliced String with Index End AND Negative end: "${str.slice(-8, -4)}"`) // 'upon'

console.log(`Original SubString "${str}" and SubString String with Index End AND Negative end : "${str.substring(-8, -4)}"`) // Empty because both negative index mean 0 ,0

console.log(`Original String "${str}" and Sliced String with Index End AND Negative index and positive index: "${str.slice(-8, 4)}"`) // '' Empty String

console.log(`Original SubString "${str}" and SubString String with Index End AND Negative index and positive index : "${str.substring(-8, 4)}"`) // -8 means 0 and result 'The '

console.log(`Original String "${str}" and Sliced String with Index End AND Negative index and positive index reversed: "${str.slice(8, -4)}"`) // 'ing is upon' 

console.log(`Original SubString "${str}" and SubString String with Index End AND Negative index and positive index : "${str.substring(8, -4)}"`) // 'The morn' 
// SubString - It will swap the places if one index is bigger than the EndIndex