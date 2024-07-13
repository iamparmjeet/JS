let arr = [1, 2, 3, 4, 5]

function largestNumInArray(arr) {
   return arr.reduce((num, pv) => num > pv ? num : pv )
}

console.log(largestNumInArray(arr))