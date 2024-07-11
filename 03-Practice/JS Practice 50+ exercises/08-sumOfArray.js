
let arrays = [1, 2, 3, 4]

let sum = 0
let sumOfArray = (arr) => {
   

   for (let i = 0; i < arr.length; i++) {
      console.log(arr.length)
      // console.log(i)
      arr[i]
      sum+=arr[i]
   }
}

console.log(sumOfArray(arrays)) // undefined
console.log(sum)




// Later review

// let sumOfArray = (arrs) => {
   
//    let sum = 0

//    for (let i = 0; i <= arrs.length; i++) {
//       console.log(i)
//       return arrs[i]
//    }
// }

// console.log(sumOfArray(arrs))