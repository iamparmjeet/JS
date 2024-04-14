let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let body = document.querySelector('body');

let hexGen = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(hexGen())

let intervalId;

let colorChange = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    console.log('msg from ColorChange')
    function changeBgColor() {
        document.body.style.backgroundColor = hexGen();
    }
}

let stopColorChange = function () {
    clearInterval(intervalId)
    intervalId = null // Without this it works but it is clear case and perfectionism But it will stop working the btn -- we have to use if statement in above colorChange function
}

startBtn.addEventListener('click', function () {
    colorChange()
    console.log('start')
});

stopBtn.addEventListener('click', function () {
    stopColorChange()
    console.log('stop')
});