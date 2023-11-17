class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        //Here we earlier call with call keyword
        super(username)
        this.email
        this.password
    }

    addCourse() {
        console.log(`This course added by ${this.username}`)
    }
}

let wanda = new Teacher('WandaMaximoff', 'wanda@wanda.com', 'wandaPass')

console.log(wanda)

wanda.addCourse()

let ironMan = new User('Tony Stark')

ironMan.logMe() // Inherit the function

// ironMan.addCourse() // Not Inherit the function

wanda.logMe()

console.log(Teacher instanceof User) // false
console.log(User instanceof Teacher) // false
