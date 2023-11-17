// document.getElementById('owl').onclick = function () {
//     alert('Owl Clicked')
// }

// Good But not featured rich .

// attachEvent() // IE old times
// jQuery - onEvent

// Best Approach
// document.getElementById('owl').addEventListener('click', function (e) {
//     // alert('owl Clicked.')
//     // e or anyword - event Objects
//     console.log(e)
// }, false)

// Types- Mouse, keyboard etc
// Timestamp - Date etc
// Default Prevented  -- Mostly forms, a tag
//target
// toElement
// srcElement,
// currentTarget

// Interview Persecptive

// clientX, clientY, screenX, screenY

// altkey, ctrlkey , shiftkey, keycode


//EVENT PRopogation - true or false

// target.addEventListener(event, handler, [options])

document.getElementById('images').addEventListener('click', function (e) {
    // console.log('Clicked inside the ul')
}, false)

document.getElementById('owl').addEventListener('click', function (e) {
    // console.log('Clicked owl')
    // e.stopPropagation() // It will Prevent Bubbling Up
}, false)

// Bubbling Up -> Innermost to Outer
// Here first owl image event then ul clicked

// Capturing mode(Top to bottom) - When options true -> first ul then img

// How to Prevent Propagation or Bubbling -- e.stopPropagation()

// defaultPRevented

document.getElementById('google').addEventListener('click', function (e) {
    // console.log('google')
    e.preventDefault()
}, false)

// Activity -- Image removal onclick

document.getElementById('images').addEventListener('click', function (e) {
    console.log(e.target.parentNode)
    // e.target.parentNode.remove() // also working
    let removeIt = e.target.parentNode
    // removeIt.remove() // Issue here is it also can remove UL but we only want to remove li
    // removeIt.parentNode.removeChild(removeIt) // other way =same working as above
    let liTag = e.target.tagName
    if (liTag === 'IMG') {
        removeIt.remove()
    } else {
        console.log('failed to remove li')
    }

}, false)