// 11) String.repeat(count)
// Does not change original 
// Count cannot be negative or infinite etc

let str = 'abc'

console.log(str.repeat(2))

console.log(`Original: "${str}" and New String: "${str.repeat(0)}"`)
console.log(`Original: "${str}" and New String: "${str.repeat(1)}"`)
console.log(`Original: "${str}" and New String: "${str.repeat(2)}"`)
console.log(`Original: "${str}" and New String: "${str.repeat(3.8)}"`)
// console.log(`Original: "${str}" and New String: "${str.repeat(-2)}"`) // Range Error