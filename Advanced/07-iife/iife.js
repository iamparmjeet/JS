// Immediately Invoked Function Expressions -- IIFE
// To Invoke the function instant and save it from Global scope Pollution

// ()() -> First function definition and second to execute

//Normal Way

// function chai() {
//     console.log('DB connected')
// }
// chai()

// IIFE way

(function chai() {
    console.log('DB connected')
})();

// here error is due -> ';' , IIFE does not where to hold the context

// Named IIFE
(function chai2() {
    console.log('DB Connected 2')
})();

//Simple or Unnamed IIFE
(() => {
    console.log('DB Connected 3')
})();

((dbName) => {
    console.log(`DB Connected 4 ${dbName}`)
})('MarvelDB');
( (thanksMsg) => { console.log(`Thank you :  ${thanksMsg}`) } ) ('Hitesh Sir ji') 