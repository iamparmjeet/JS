// let sum = 0

// for (let i = 0; i < 10000000000; i++) {
//     sum = sum + i
// }

// console.log(sum)

let score = 0

function addScore() {
    score = score + 0.1
    if(score === 1) console.log('at 1')
}
addScore()
console.log(score)