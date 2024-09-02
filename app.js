const key = "e97fdb7a209d6f168cadc2dc59fe2a79";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let card = document.querySelector(".card");
let search = document.querySelector("input");
let button = document.querySelector(".btn");
let image = document.querySelector(".show");
let show = document.querySelector(".new");
async function CheckWeather(city) {
    let response = await fetch(url + city + `&appid=${key}`);
    if (response.status == 404) {
        show.style.display = "none";
        document.querySelector(".error").style.display = "block";
    } else {
        show.style.display = "block";
        document.querySelector(".error").style.display = "none";
        let data = await response.json();
        console.log(data);
        let status = data.weather[0].main;
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = `${Math.round(data.main.temp)}°C`;
        document.querySelector("#humidity").innerText = ` ${data.main.humidity}%`;
        document.querySelector("#windi").innerText = ` ${data.wind.speed}°C`;
        document.querySelector(".status").innerHTML = status;
        console.log(status);
    }
}
button.addEventListener("click", () => {
    CheckWeather(search.value);
});