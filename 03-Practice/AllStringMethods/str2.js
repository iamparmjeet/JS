const str = "The morning is upon us.";

console.log("06 SPLIT");
// Does not modify the orignal array
// Returns array
/*

str.split()
str.split(seperator)
str.split(seperator, limit)

*/


console.log(str);
console.log(str.split());

let arr1 = str.split();
console.log(arr1);
console.log(typeof arr1); // object

console.log(str.split(" ")); // [ 'The', 'morning', 'is', 'upon', 'us.' ]
console.log(str.split(""));
/*
[
  'T', 'h', 'e', ' ', 'm',
  'o', 'r', 'n', 'i', 'n',
  'g', ' ', 'i', 's', ' ',
  'u', 'p', 'o', 'n', ' ',
  'u', 's', '.'
]
*/

console.log(str.split('o')) // [ 'The m', 'rning is up', 'n us.' ]

console.log(str)
console.log(str.split('o', 2)) // [ 'The m', 'rning is up' ]