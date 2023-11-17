let greetFunc = () => {
    console.log('Hi Buddy')
}

let changeText = () => {
    document.querySelector('h2').innerHTML = 'Learning JS'
    console.log('Changed')
}

let changeTextTimeout = setTimeout(changeText, 2000)

// To Stop timeout
let stopBtn = document.getElementById('stop')

stopBtn.addEventListener('click', function () {
    clearTimeout(changeTextTimeout)
}, false)