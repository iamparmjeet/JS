// Benefits of Closure
/*
1) to keep value private like age can't be access outside the function
2) Always print new value

*/



function func1() {
   const age = 29

   function func2() {
      console.log(age)
   }

   return func2
}

// console.log(func1())

func1()

const func = func1()
func()


// 2nd 
console.log('2nd')

function elementCreator(element) {
   return () => {
      return document.createElement(element)
   }
}

elementCreator('div')

// 3rd 
console.log('3rd')

for (let i = 0; i < 3; i++) {
   setTimeout(() => console.log(i), 100)
}

// It will print 0 1 2

// BUt with var it only prints 3 - three times

console.log('Loop with var')

// for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 200)
// }

// Here whether we use let or var it only prints 3 because of closures

let i = undefined
console.log('i of loop', i)

for (i = 0; i < 3; i++) {
   console.log('i of loop', i)
   setTimeout(() => console.log(i), 200)
}