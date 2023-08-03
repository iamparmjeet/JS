// Before Fetch  - there is XMLHttpRequest()

let profileUrl = 'https://api.github.com/users/parmjeetmishra2'
let xhr = new XMLHttpRequest();

// xhr.open('Method-GET,POST Etc', 'Url') // two Param - Method and URl

xhr.open('GET', profileUrl)
console.log(xhr.readyState)
xhr.send()
console.log(xhr)