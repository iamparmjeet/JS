let boxes = document.querySelectorAll('.colorBox');
// console.log(boxes.length)
let body = document.querySelector('body')

boxes.forEach( function(box) {
    // console.log(box)
    box.addEventListener('click', function (e) {
        //    console.log( box.id)
        console.log(e)
        console.log(e.target.id)
        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id;
        // }
        body.setAttribute('id', e.target.id)
    })
})