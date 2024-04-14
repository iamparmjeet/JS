// setInterval

let sayDate = function (str) {
    console.log(str, Date.now())
}

let intervalFun = setInterval(sayDate, 1000, 'frmOutInterval')

let stopBtn = document.getElementById('stop')
let startBtn = document.getElementById('start')


stopBtn.addEventListener('click', function () {
    clearInterval(intervalFun)
    console.log('interval stop')
}, false)

startBtn.addEventListener('click', function () {
    setInterval(sayDate, 1000, 'fromFun')
    console.log('Inteval Start')
})