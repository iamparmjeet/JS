// Dates

let myDate = new Date();
console.log(myDate) // very complicated

console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())

console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 1, 23)
// let myCreatedDate = new Date(23, 1, 2023) // Invalid
let myCreatedDate = new Date('2023-02-24')
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString())

/* TimeStamp*/

let myTimeStamp = new Date().getTime()
console.log(myTimeStamp)

let newDate = new Date()

console.log(newDate.getMonth() + 1) // index start from 0 , But + 1 will simplify the result

let newDate2 = new Date().toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})

console.log(newDate2)