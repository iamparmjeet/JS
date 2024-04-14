// for of

// ["", "" , ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)
}

const greetings = 'Hello World!'

for (const greet of greetings) {
    //console.log(greet)
}

// MAPS // Unique values and order

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India') // Not going to Print
//console.log(map)

for (const [key, values] of map) {
    //console.log(values)
}

// For Objects

let myObject = {
    'Game1': 'NFL',
    'Game2': 'FootBall',
    'Game3' : 'BasketBal'
}

// for (const [key, values] of myObject) { // Not going to work
//     console.log(key)
// }

for (const key in myObject) {
    // console.log(key) // key print
    // console.log(myObject[key])
    //console.log(`${key} for ${myObject[key]}`)
}

//FORIN loops for Arrays

const programming = ['js', 'php', 'ruby', 'python']

for (const key in programming) {
//    console.log(key) // Here 0,1,2,3, unlike in Forof loop where value printed
  //  console.log(programming[key])
}


// for (const [key, values] in map) {
//     console.log(key) // Not Itterable
// }

// FOR EACH loop

const coding = ['js', 'php', 'ruby', 'python']


//First way
// coding.forEach( function (key) {
//     console.log(key)
// })

// With arrow function

// coding.forEach( (key) => {console.log(key)})

// function clg(item) {
//     console.log(item)
// }
// coding.forEach(clg)

coding.forEach((item, index, array) => {
    //console.log(item, index, array)
})

// WITH OBJECT

const myCoding = [
    {
        lang: 'Javascript',
        langFileName: 'js'
    },
    {
        lang: 'Python',
        langFileName: 'Py'
    }, 
    {
        lang: 'Ruby',
        langFileName: 'ry'
    },
    {
        lang: 'Hyper Text Markup Lang',
        langFileName: 'html'
    }
]

myCoding.forEach((key, arr) => {
    // console.log(key)
    // console.log(key.lang)
    // console.log(key.langFileName)
})