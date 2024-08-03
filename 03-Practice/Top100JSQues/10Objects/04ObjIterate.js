/*

3 Ways to iterate over 

- for...in loop
- Object.keys() & forEach()
- Object.values() & forEach()

*/

let person = {
   name: 'John',
   age: 33
}

// Using for...in loop
for (let index in person) {
   console.log(index + ": " + person[index])
}
//name: John
// age: 33

// 2nd Using Obj.keys() and forEach()

Object.keys(person).forEach((prop) => {
   console.log(prop + ': ' + person[prop])
})
//name: John
// age: 33


// 3rd usign values

Object.values(person).forEach((value) => {
   console.log(value)
})
//John
// 33