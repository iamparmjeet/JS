const apiKey = "2a7465f5b424b1abdd71028bc19a89cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const units = "metric";
// const city = "ludhiana";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



async function checkWeather(city) {
    

    const response = await fetch(`${apiUrl}city&appId=${apiKey}&units=${units}`);
    // console.log(response);
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${data.main.temp} °C`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + " kmh";
    // console.log(data);
}

searchBtn.addEventListener("click", function () {
        checkWeather(searchBox.value);
        console.log(searchBox.value);
    });


// https://api.openweathermap.org/data/2.5/weather?q=ludhiana&appid=2a7465f5b424b1abdd71028bc19a89cb