let randomNum = parseInt(Math.random() * 100 + 1)
console.log(`Random number: ${randomNum}`)

let submitBtn = document.getElementById('submit')
let userInput = document.getElementById('guessField')
let guessSlot = document.querySelector('.prvGuess')
let remaining = document.querySelector('.guessRemain')
let lowOrHigh = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultBox')

const p = document.createElement('p')

let prvGuess = [] 
let numGuess = 1
let playGame = true

if (playGame) {
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a valid number')
    } else if (guess > 100) {
        alert('Please enter a number less than 100.')
    } else {
        prvGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMsg(`Game Over Random Num was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMsg(`Guess is correct : ${guess}`)
        endGame()
    } else if (guess < randomNum) {
        displayMsg(`Number is too low`)
    } else if (guess > randomNum) {
        displayMsg(`Number is too High`)
    }
}

function displayGuess(guess) {
    // cleanup method
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(msg) {
    // Low or High
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<p id="newGame">Start new Game</p>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function () {
        randomNum = parseInt(Math.random() * 100 + 1)
        prvGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
