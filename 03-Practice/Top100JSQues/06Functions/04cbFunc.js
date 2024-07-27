
let add = (a,b) => a + b


function display(x, y, operation) {
   let result = operation(x, y)
   console.log(result)
}

display(1, 2, add)

// display = higher order function