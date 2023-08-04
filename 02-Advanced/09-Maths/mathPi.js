// console.log(Math.PI)
// Math.PI = 4 
// console.log(Math.PI) // It still same

let changedPi = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(changedPi)

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const Hero = {
    name: 'Superman',
    genre: 'SuperHero',

    HeroAction: () => {
        console.log('Hero in Action')
    }
}

// console.log(Object.getOwnPropertyDescriptor(Hero)) // Undefined, 
console.log(Object.getOwnPropertyDescriptor(Hero, 'name'))

// {
//     value: 'Superman',
//     writable: true,
//     enumerable: true, // If false so no loop
//     configurable: true
//   }

Object.defineProperty(Hero, 'name', {
    writable: false
})

console.log(Object.getOwnPropertyDescriptor(Hero, 'name'))

for (let [key, value] of Object.entries(Hero)) {
    // console.log(`${key} : ${value}`)
    // code will run including the function print

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}

// Now code 