// Excecution Context three types - 1) Variable object, 2) Scope Chain, 3) this

// Function Declarations are scanned and made available
// Variable declarations are scanned and made undefined

tipper(20);

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// Variable declarations are scanned and made undefined
// bigTipper(20); // Throw error Undefined ,

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 50);
}

// console.log(name);
// var name = "Sam";

// code above is going to run and show Sam in Browser , But not in the Code Runner. --> Due to Global Context is available in the browser.-- Undefined

console.log(name);
var name = "Sam";

function sayName() {
    var name = "Capt";
    console.log(name);
}

sayName();