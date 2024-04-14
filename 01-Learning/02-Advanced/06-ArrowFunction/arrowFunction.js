// This and Arrow Function

const user = {
    username: 'John',
    price: '300',

    welcomeMsg: function() {
        console.log(`${this.username} welcome`)
        //console.log(this)
    }
    
}

// user.welcomeMsg()
// user.username = 'Captain'
// user.welcomeMsg()

//console.log(this) // Empty in node env but in the browser Global context is going to be avail in the window object


function marvel() {
    console.log(this) // When we access this inside function it will shows much details while executing the function. But not outside . -- Node Env
}

//marvel()

function dcFunc() {
    let username = 'JohnWick'
    console.log(this.username) // Undefined 
}

//dcFunc()

// Arrow Function
console.log('Arrow function')

const arrfunc = () => {
    let username = 'Marvel'
    //console.log(this.username)// Undefined
    console.log(this) // Empty 
}

//arrfunc()

//  ()  => {}

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2 // Implicit return

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))

// Benefit in wrapping with () is with Objects

const arrObj = () => ({username: 'Vision'})
console.log(arrObj())
