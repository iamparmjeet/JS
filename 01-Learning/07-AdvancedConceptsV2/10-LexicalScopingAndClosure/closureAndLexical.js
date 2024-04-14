//Lexical --


// link with family example
function outer() {
    let user = 'John'
    //console.log(`outer secret ${secret}`) // It does not have access 
    function inner() {
        let secret = 'sdsecret'
        console.log(`inner: ${user}`)
    }
    function inner2() {
        console.log(`inner2: ${user}`)
    }
    inner()
    inner2()
}
outer()
// console.log(`outer: ${user}`)

// CLOSURE
console.log('CLOSURE')

function makeFunc() {
    let name = 'Constantine'
    function displayName() {
        console.log(`Inner: ${name}`)
    }
    return displayName; // Here Outer function is gone
}

let myFunc = makeFunc(); // Outer function lexical scoping is gone , But memory reference is there
myFunc()

// Practical

console.log('Practical Closure')

// document.getElementById('orange').onclick = function () {
//     document.body.style.backgroundColor = 'orange'
// }

// document.getElementById('green').onclick = function () {
//     document.body.style.backgroundColor = 'green'
// }

// Issue here is DRY and what if we have 100 buttons and colors ??

// Sol - ClickHandler

function ClickHandler(color) {
    // lexcial scope goes outside

    //document.body.style.backgroundColor = color
    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

// document.getElementById('orange').onclick = ClickHandler // function definition

// document.getElementById('orange').onclick = ClickHandler('orange') // It will execute without click

document.getElementById('orange').onclick = ClickHandler('orange')
document.getElementById('green').onclick = ClickHandler('green')