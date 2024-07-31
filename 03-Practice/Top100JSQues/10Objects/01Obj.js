/*

Ways to crate and Init an Object

- Object literal
- Object Constructor
- Object.create

*/


// Object Literal
let person = {
   name: 'John',
   hobbies: ['Teaching', 'Football'],
   greet: function () {
      console.log('Name: ' + this.name)
   }
}

// Object constructor
let person1 = new Object()
person1.name = 'Harry'
person1.age = '39'
person1.role = 'Dev'
console.log(person1)

// Object.create() 
let person2 = {
   name: '',
   age: 0,
   role: ''
}

let men = Object.create(person2)
console.log(men)
men.name = 'Ron'
men.age = 33
men.role = 'TL'
console.log(men)