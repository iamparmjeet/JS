// Before Fetch  - there is XMLHttpRequest()

let profileUrl = 'https://api.github.com/users/parmjeetmishra2'
let xhr = new XMLHttpRequest();

// xhr.open('Method-GET,POST Etc', 'Url') // two Param - Method and URl

xhr.open('GET', profileUrl)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        // console.log(data.following) // undefined means data is in string format
        // console.log(typeof data) Now it is in Object
        console.log(`Data Following: ${data.following}`)
        console.log(data)
    }
}
xhr.send()

// Most of the time data we get here are strings