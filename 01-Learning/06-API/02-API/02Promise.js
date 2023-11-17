// const promiseOne = new Promise((resolve, reject) => {
//     // 
//     setTimeout(() => {
//         console.log('Async Task 1')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log('Then is resolve')
// })


// without holding the value

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task 2')
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log(`resolve 2`)
// })



// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({user: 'chaiUser', email: 'chai@user.com'})
//      }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user)
// })

//
console.log('Promise four')

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({user: 'parm', password: '123'})
        } else {
            reject(`Error: something went wrong`)
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.user
    // console.log(user.user)
}).then((username) => {
    console.log(username)
})
    .catch((error) => {
    console.log(error)
    }).finally(() => {
    console.log(`finally`)
    })

console.log('Promise 5')
    
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'gd' })
        } else {
            reject('js error')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()