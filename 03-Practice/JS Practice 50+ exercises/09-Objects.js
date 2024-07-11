// Create an object representing a car with properties like make, model and year. Add a method to the car object to start the engine

let car = {
   make: 'Toyota',
   model: 'Camry',
   year: 2022
}

console.log(car)

car.startEngine = function () {
   console.log('Engine Started')
}
console.log(car)
car.startEngine()