let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('card')

card.addEventListener('mousedown', mouseDown)

function mouseDown(e) {
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    // move
    // card.style.top = startY + 'px'
    // card.style.left = startX + 'px'
    card.style.top = (card.offsetTop - newX) + 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'


    console.log(`newX: ${newX}, newY: ${newY}`)
    console.log(`startX: ${startX}, startY: ${startY}`)
}

function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove)
}