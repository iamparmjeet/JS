// Nested functions and closure 

function one() {
    const username = 'John'

    function two() {
        const company = 'dml'
        console.log(username) // Username = global scope for this inner function - print
    }
    //console.log(company) // throws error - company is block scope of two()
    two() //  two function is not going to run - If error in company - Block scope issue
}
one();

// ********* Interesting **********

console.log(sumOne(5)) // No error in this function whether we put it before the function and or after it
function sumOne(num) {
    return num + 1;
}

const sumTwo = function (num) {
    return num + 2;
}
console.log(sumTwo(5)) // It will throw error if we put it before the function

//Reason -  cannot access the value. Because we declare the function and also hold the value into variable. // Hoisting 