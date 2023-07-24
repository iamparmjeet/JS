// scope -- let ,var, const
// Global and Block(local) scope -> Global scope that outside the scope is going to be available to all. but not with the local scope (like in any function or if else etc)
let a = 10
const b = 20
var c = 30

// {} - Scope -> ('{}') -> In Object it is different object declaration


console.log(a)
console.log(b)
console.log(c)

console.log('Scope')

if (true) {
    let d = 40
    const e = 50
    var f = 60 // with var or not - issue of scope is going to be an issue
}

// console.log(d) // Not defined
// console.log(e) // Not Defined 
console.log(f) // But is available outside the scope

let g = 70
if (true) {
    let g = 80
    console.log('Inner:' + g )
}
console.log(g)