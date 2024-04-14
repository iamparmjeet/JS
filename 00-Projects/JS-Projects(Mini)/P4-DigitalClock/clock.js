// console.log('hi')

let clock = document.getElementById('clock')


setInterval(function () {
    let date = new Date().toLocaleString()
    clock.innerHTML = date;
}, 1000)