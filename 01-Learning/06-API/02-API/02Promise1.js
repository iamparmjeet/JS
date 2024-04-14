// Try Catch Syntax

async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        // const data = response.json() // This will take time so we have to await this data
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// getAllUser()

// .Then().Catch()

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
