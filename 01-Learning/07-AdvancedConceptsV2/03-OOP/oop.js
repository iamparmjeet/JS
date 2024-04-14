


function User(username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn,
    
        this.greeting = function () {
         console.log(`Hello ${this.username}`)
    }
    
    return this    // Implicitly define, whether we put this here or not
}
// console.log(User())

// let userOne = User('john', 2, true)
// let userTwo = User('Capt', 3, false) // it will override the value of userOne
// console.log(userOne)

// console.log(userTwo)

let userOne = new User('john', 2, true)
let userTwo = new User('Capt', 3, false) // it will override the value of userOne
console.log(userOne)

console.log(userTwo)
console.log(userTwo.constuctor)
// With New keyword - Empty Instance created
// Also called constructor function due to new keyword
// After this -> this keyword injected into the constructor function
// Then we get all arguments 
