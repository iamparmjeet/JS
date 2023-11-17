let profileUrl = 'https://api.github.com/users/parmjeetmishra2'
let xhrData = new XMLHttpRequest();
let profilePic = document.querySelector('IMG')
let userName = document.querySelector('h3')
let userAbout = document.querySelector('.userAbout')
let pbRepo = document.querySelector('.pbRepo')
let userUrl = document.querySelector('.userUrl')


xhrData.open('GET', profileUrl)
xhrData.onreadystatechange = function () {
    if (xhrData.readyState === 4) {
        let data = JSON.parse(this.responseText)
        console.log(data)
        profilePic.src = data.avatar_url;
        userName.innerText = data.name
        userAbout.innerText = data.bio
        pbRepo.innerText = data.public_repos
        userUrl.href = data.html_url
    }
}
xhrData.send()

