// 17) String.localeCompare()

// referenceString.localeCompare(compareString)
// referenceString.localeCompare(compareString, locales)
// referenceString.localeCompare(compareString, locales, options)

let str = ''

console.log('a'.localeCompare('b') ) // -1 // Occurs Before
console.log('b'.localeCompare('a')) // 1 // Occurs After
console.log('a'.localeCompare('a')) // 0 when both matches // Equivalent


// referenceString.localeCompare(compareString, locales)


console.log('ä'.localeCompare('z', 'de')) // German and German
// ā is not the part of English vocab
console.log('ä'.localeCompare('z', 'sv')) // German and Swedish


// referenceString.localeCompare(compareString, locales, options)

// ä and a as the base letter
console.log('ä'.localeCompare('z', 'de', { sensitivity: 'base' })) // German and German


// ä and a as the separate letter
console.log('ä'.localeCompare('z', 'sv', {sensitivity: 'base'} )) // German and Swedish