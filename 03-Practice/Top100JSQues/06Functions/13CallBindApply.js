

// Defining a function that uses the 'this' context and an argument

function sayHello(msg) {
   console.log(`${msg}, ${this.name}`)
}

const person = {name: 'john'}

sayHello('Hi', person.name) // Wrong

//1st) Call - Using the call method to invoke the function with a specific context and argument
sayHello.call(person, 'Hi') // Hi, John

//2nd) Apply -> But arguments as a array

sayHello.apply(person, ['Hello']) // Hello, John

// 3rd) Bind = ( Not invoking it immediately)

const greetPerson = sayHello.bind(person)
greetPerson('Greetings') // Greetings, john