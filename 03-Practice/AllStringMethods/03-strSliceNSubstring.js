const str = 'The morning is upon us.'

// 04 slice
console.log('04 Slice')
// Does not change the original str
// str.slice(start, end)
console.log(str.slice(12)) // is upon us.
console.log(str.slice(-11)) // is upon us.
console.log(str.slice(23)) // ''
console.log(str.slice(13,16))  //'s u'
console.log(str.slice(16,13)) // ''
console.log(str.slice(16,13)) // ''
console.log(str.slice(-8, -4)) // 'upon'
console.log(str.slice(-8, 4)) // ''
console.log(str.slice(8, -4)) // 'ing is upon'


// 05 SubString
console.log('05 SubString')
// str.substring(start, end)
// same as string but does not take negative number
console.log(str.substring(12)) // is upon us.
console.log(str.substring(-11)) // The morning is upon us.  // Neg number behaves like zero
console.log(str.substring(23)) // '' 
console.log(str.substring(13,16)) // s u 
console.log(str.substring(16,13)) // s u 
console.log(str.substring(-8, -4)) // ''
console.log(str.substring(-8, 4)) // 'The '
console.log(str.substring(8, -4)) // 'The morn'