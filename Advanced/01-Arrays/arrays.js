let myArray = [1, 2, 3, 4, 5, 'ram']

console.log(myArray)
console.log(myArray[1])

let myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray2)

//Array Methods
console.log('Array Methods')

let myArray3 = [1, 2, 3, 4, 5]

// myArray3.push(6)
// myArray3.pop()
// myArray3.unshift(8) // Not Optimised
// myArray3.shift() // No value required


//console.log(`New Array ${myArray3}`)
//console.log(myArray3.includes(9)) // Boolean

//console.log(myArray3.indexOf(3)) // Number
//console.log(myArray3.lastIndexOf(3)) // Number


let newArr = myArray3.join() // it joins and converts into sting

// console.log(myArray3)
// console.log(newArr)
// console.log(typeof newArr)

console.log('Slice and Splice Method')

let sliceNSpliceArry = [0, 1, 2, 3, 4]

console.log(`Original Array ${sliceNSpliceArry}`)
console.log(`Slice Array ${sliceNSpliceArry.slice(1, 3)}`)

let sliceNSpliceArry2 = sliceNSpliceArry.splice(1, 3) // Splice Manipulates original Array while slice does not 
console.log(`Original Array ${sliceNSpliceArry}`) 
console.log(`Splice Array ${sliceNSpliceArry2}`)