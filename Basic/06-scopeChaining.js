var name = 'Sam';

console.log("Line Number 3", name);

function sayName() {
    console.log("Line Number 6", name);
}
sayName();

function sayName2() {
    var name = 'Capt'
    console.log("Line Number 11", name);

    sayName3();
    function sayName3() {
        console.log("Line Number 15", name);
    }
}
sayName2();

function sayName4() {
    var name = 'Marvel'
    console.log("Line Number 23", name);

    sayName5();
    function sayName5() {
        var name = 'Luke';
        console.log("Line Number 15", name);
    }
}
sayName4();