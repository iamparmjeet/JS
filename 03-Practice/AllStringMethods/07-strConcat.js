const str = "The morning is upon us.";

/*

str.concat(str1)
str.concat(str1, str2)

*/

let str1 = 'The Cat is walking with me'
let str2 = 'on Beautiful morning.'


console.log(str.concat(str1)) // The morning is upon us.The Cat is walking with me


console.log(str.concat('-', str1, str2))



console.log(str, str1, str2) //The morning is upon us. The Cat is walking with me on Beautiful morning.