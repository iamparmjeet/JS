

function randomNum(min, max) {
   let res = Math.floor(Math.random() * (max - min + 1) + min)
   return res
}

console.log(randomNum(10,11))