// Global and Node

// this when in browser - window
// this when in node - empty

function setUserName(username) {
    // some calls
    this.username = username
}

function createUser(username, email, password) {
    // setUserName(username) // set but not called.
    // setUserName.call(username) // call will hold the reference in Heap // But it will stil not works
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

let userJohn = new createUser('John', 'john@wick.com', '123')

console.log(userJohn)