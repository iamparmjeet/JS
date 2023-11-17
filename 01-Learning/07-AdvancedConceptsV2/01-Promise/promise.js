let promiseOne = new Promise(function (resolve, reject) {
    // Do an Async Tasks
    // DB Calls, Cryptography, network calls
    setTimeout(function () {
        // console.log('Promise One Task is complete')
        resolve() // Without this statement 'Msg of Promise fulfilled is not going to print because this function did not linked with the below function
    },1000)
})

// promiseOne.then(resolve)
promiseOne.then(function () {
    // console.log('Promise One Fulfilled')
})

// Without the Variable

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log('PromiseTwo Async complete')
    }, 1000)
    resolve()
}).then(function () {
    // console.log('PromiseTwo Fulfilled')
})

let promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username: 'John', useremail: 'john@eg.com'})
    }, 1000)
})

promiseThree.then(function (user) {
    // console.log(user)
})

let promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username: 'Captain', password: '1234'})
        } else {
            reject('Error - Please fix')
        }
    },1000)
})

// promiseFour.then().catch()

// Chaining 

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Finally promise 4 is either resolved or rejected'))


let promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: 'JS', password: '1234'})
        } else {
            reject('Error : JS some thing')
        }
    }, 1000)
})

// Other approach is async await , Issue is with Error , But useful in DB Connection

// async function consumePromiseFive() {
//     // here we also can use .then
//     let response = await promiseFive // it is object so not use promiseFive()
//     console.log(response)
// }

// Above Code does not have try and Catch
async function consumePromiseFive() {
    try {
        let response = await promiseFive 
        console.log(response)
    } catch(error) {
        console.log(error)
   }
}

consumePromiseFive()

// Other method with Fetch

// async function getAllUsersData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response)
//         // let data = response.json() // Here it takes time so it will throw an error
        
//         let data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('Err:', error)
//     }
// }

//getAllUsersData()

// converting in .then and .catch

let userJson = fetch('https://jsonplaceholder.typicode.com/users')

userJson.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)  
}).then((error) => console.log('Err:', error))