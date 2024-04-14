class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is : ${this.username}`)
    }

    static createId() {
        return `123`
    }
    // Here Static word does not let them use this to everybody. only when called 
}
let john = new User('JohnWick')
console.log(john.createId())