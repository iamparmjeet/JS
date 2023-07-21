let marvelHeros = ['thor', 'captain', 'spiderman']

let dcHeros = ['superman', 'batman', 'flash']

marvelHeros.push(dcHeros) // It did not merge but add as a array

console.log(marvelHeros)
console.log(marvelHeros) 

marvelHeros.concat(dcHeros)

console.log(`Concat method [${marvelHeros}]`)