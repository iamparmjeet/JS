// const user = new Object() // Singleton object
// const user = {} // non singleton object  -- No difference in output


// const fbUser = new Object()

const fbUser = {}

fbUser.id = 123
fbUser.name = 'John'
fbUser.email = 'john@wick.com'
fbUser.isLoggedIn = false

console.table(fbUser)

console.log('Object inside Objects')

const regularUser = {
    id: 222,
    email: 'someuser@email.com',
    fullname: {
        userFullName: {
            firstName: 'Tony',
            lastName: 'Stark'
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullname.userFullName)

console.log('Merging Objects')

const obj1 = {
    a: 'john',
    b: 'ano@email.com'
};
const obj2 = {
    c: 444,
    d: 'yet@email.com'
};

// let mergedObj = { obj1, obj2 } // Same issue as in Array -> It is just add objects inside objects
const mergedObj = Object.assign({}, obj1, obj2) // empty Object is good practice. Now Obj1 and Obj2 merged and add into the empty object
console.log(mergedObj)

let newMergedObj = { ...obj1, ...obj2 } // Using Spread Operator - Most suitable 

console.log(newMergedObj)

console.log('Data coming from DB')

let users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Captain'
    },
    {
        id: 3,
        name: 'Marvel'
    }
]


console.log(users)
console.log(Object.keys(users)) 
console.log(Object.values(users))
console.log(Object.entries(users)) // Array inside Arrays

// In case property does not exist
console.log(users.hasOwnProperty('id'))