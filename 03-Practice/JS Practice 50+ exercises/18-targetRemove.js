let arr = [10,10,20,30,10,40,44,4]

function targetRemoveFromArray(arr, target) {
   return arr.filter(arr => arr !== target)
}


console.log(targetRemoveFromArray(arr, 4))