const APIKEY ='6cef1be254dd46c5ad96d022f11daed1';

const URLBASE = "https://api.openweathermap.org/data/2.5/weather?";

async function request(url) {
    return fetch(url).then(data => data.json())
}

async function getWeather(lat, lon){
    url = `${ URLBASE }lat=${ lat }&lon=${ lon }&appid=${ APIKEY }`;
    const weather = await request(url);
    console.log(weather);
    updateDOM(weather.name, weather.main.temp);
}

let ciudad = document.getElementById('ciudad');
let temperatura = document.getElementById('temperatura')

function updateDOM(city, temp) {
    var lacalor = (temp - 32) * (5/9);
    ciudad.textContent = ' ' + city;
    temperatura.textContent = ' ' + lacalor;
    if ( lacalor >= 20 ) {
        document.body.style.backgroundColor
         = 'red';
    } else if (lacalor <= 10) {
        document.body.style.backgroundColor
         = 'blue'
    } else {
        document.body.style.backgroundColor
         = '#ccc'
    }
}

navigator.geolocation.getCurrentPosition( position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
});