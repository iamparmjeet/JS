// 27) String.normalize()
// Does not change original string

// Syntax -> String.normalize(form) -- form = Unicode Normalization form ('NFC', 'NFD', 'NFKC', 'NFKD')


let str1 = '\u00c7' // Ç
let str2 = '\u0043\u0327' // Looks same but it is diff

console.log(str1)
console.log(str2) 

console.log(str1 === str2) // false
console.log(str1.length === str2.length) // false



console.log(str1.normalize('NFC'))
console.log(str1.normalize('NFC') ===  str2.normalize('NFC'))