// map

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNum.map((num) => {
//    return  num + 10
// })

// CHAINING

const newNum = myNum
   .map((num) => num * 2)
   .map((num) => num + 1)
   .filter((num) => {
       if (num % 3 === 0) {
         return num
      }
   } )

// console.log(newNum)

let myNumsArray = [1, 2, 3, 4, 5,]

// let newMyNumsArray = myNumsArray.reduce((acc, currval) => {
//    console.log(`acc : ${acc} and Current Value : ${currval}`)
//    return acc + currval
// }, 0)

let newMyNumsArray = myNumsArray.reduce( (acc, currval) =>
   acc + currval, 0
    )

// console.log(newMyNumsArray)

// Shopping Cart eg

let shoppingCart = [
   {
      itemName: 'Js Course',
      price: 2999
   },
   {
      itemName: 'Php Course',
      price: 1999
   },
   {
      itemName: 'Python Course',
      price: 4999
   }
]

// let totalCartValue = shoppingCart.reduce((acc, item) => acc + item.price, 0)

let totalCartValue = shoppingCart.reduce((acc, item) => {
   console.log(` Item Name: ${ item.itemName } and its Price ${ item.price }`);
   return acc + item.price;
},0)


console.log(totalCartValue)


// console.log(CartPrint)