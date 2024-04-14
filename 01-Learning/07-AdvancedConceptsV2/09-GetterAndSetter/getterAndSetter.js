// Fine Grain control. Like if we don't want to give access of password to anyone


class User {
    constructor(email, password) {
        this.email = email
        this.password = password // it is override by getter and setter
    }

    get password() {
        // If anyone try to acces the password , they are going to get this 
        return (`Getting the Password ${this._password.toUpperCase()}`)

    }
    // set password(value) {
    //     this.password = value
    // } // With this Max call stack size exceeded Error due to constructor and setter both trying to set the password
    set password(value) {
        this._password = value
    }
    //Solution Here is new var ,, that override the constructor


}

let john = new User('John@wick.com', '123fd')
console.log(john.password)


// Old Ways Using Properties

function User1(email, password) {
    this._email = email,
    this._password = password
    
    // function is also an object so
    Object.defineProperty(this, 'email', {
        get: function () { 
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
}

let capt = new User1('capt@marvel.com', 'passw')

console.log(capt.email)

// Through Objects

const User3 = {
    _email: 'spider@marvel.com',
    _password: 'dfka123',

    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        return this._password = value
    }
}

// Factory function

let spider = Object.create(User3)
console.log(spider.password)