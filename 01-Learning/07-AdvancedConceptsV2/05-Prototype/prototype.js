let myName = 'John    ' // Length is 8
let myTea = 'chai   ' // Length is 7

// console.log(myName.length) // 8
// console.log(myName.trim().length) //4

// Question here is  - Can we do this every text

// console.log(myName.trueLength()) // Here trueLength is custom prototype method that we custom build

// Method Creation

let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

Object.prototype.John = function () {
    console.log(`John Power is present in all objects`)
}

// heroPower.John()

// myHeros.John()
// myHeros.heyJohn() // error


// INHERITANCE

const User = {
    name: 'Tea',
    email: 'tea@tea.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__ : TeachingSupport // Not necissarily here
}

Teacher.__proto__ = User // Outdated approach

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

//

let anotherUser = 'JSandCode     '

String.prototype.trueLength = function () {
    console.log(`${this.name}`)
    console.log(`${this}`)
    console.log(`True Length is ${this.trim().length}`)
}

anotherUser.trueLength() // anotherUsername call JSandCode
'JohnWick'.trueLength()