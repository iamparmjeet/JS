const myCoding = [
    {
        lang: 'Javascript',
        langFileName: 'js'
    },
    {
        lang: 'Python',
        langFileName: 'Py'
    }, 
    {
        lang: 'Ruby',
        langFileName: 'ry'
    },
    {
        lang: 'Hyper Text Markup Lang',
        langFileName: 'html'
    }
]

const coding = ['js', 'php', 'ruby', 'python']

const codeingValue = coding.forEach((item) => {
    // console.log(item)
    return item;
})

// console.log(codeingValue) // Undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNums.filter((num) =>  num > 5 )
// let newNum = myNums.filter((num) => {return num > 5 })

// const newNum = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })

// console.log(newNum)

const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1980,
        edition: 2004
    },
    {
        title: 'Book two',
        genre: 'Fiction',
        publish: 1991,
        edition: 2005
    },
    {
        title: 'Book Three',
        genre: 'Non Fiction',
        publish: 2000,
        edition: 2006
    },
    {
        title: 'Book 4',
        genre: 'History',
        publish: 2001,
        edition: 2006
    },
    {
        title: 'Book 5',
        genre: 'Science',
        publish: 2001,
        edition: 2006
    }
]

    // let userBooks = books.filter((filterBook) => filterBook.genre === 'Fiction')

let userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})


console.log(userBooks)