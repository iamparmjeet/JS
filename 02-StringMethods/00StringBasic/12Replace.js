// 21) String.replace(searchString, replacerString)
//     String.replace(searchString, replacerFunction)
// Replace the first one not all


let str = 'Mr Blue has a blue house and a blue car'

let result = str.replace('blue', 'red')
console.log(`Original: "${str}" and Replace method: "${result}"`)


let result2 = str.replace('blue', (match) => {
    return match.toUpperCase()
})
console.log(`Original: "${str}" and Replace method with Function: "${result2}"`)

let result3 = str.replace(/blue/gi, 'red')
console.log(`Original: "${str}" and Replace method with regexp: "${result3}"`)


// 22) String.replaceAll(searchString, replacerString)

let result4 = str.replaceAll('blue', 'red')
console.log(`Original: "${str}" and Replace method: "${result4}"`)

// let result3 = str.replaceAll(/blue/i, 'red')
// console.log(`Original: "${str}" and Replace method: "${result3}"`)
