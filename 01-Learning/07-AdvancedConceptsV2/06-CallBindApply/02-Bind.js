class React {
    constructor() {
        this.library = 'React'
        this.server = 'https://localhost:3000'
        // document.querySelector('button').addEventListener('click', this.handleClick)
        document
            .querySelector('.button')
            .addEventListener('click', this.handleClick.bind(this));
    }

    handleClick() {
        console.log('Btn Clicked')
        // console.log(this) // Has Reference but
        // we have to bind 
        console.log(this);
        console.log(this.server)
    }
}

const app = new React()

// let btn = document.querySelector('.button')
// btn.addEventListener('click', function () {
//     console.log(`i am click`)
// })