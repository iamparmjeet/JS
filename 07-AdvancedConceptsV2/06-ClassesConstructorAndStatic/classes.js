// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserNameCapitalize() {
        return `${this.username.toUpperCase()}`
    }
}

const john = new User('johnWick', 'John@wick.com', '123')

console.log(john) // Normal return
console.log(john.encryptPassword())
console.log(john.changeUserNameCapitalize())



/// BEHIND THE SCENE

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUserNameCapitalize = function () {
    return `${this.username.toUpperCase()}`
}