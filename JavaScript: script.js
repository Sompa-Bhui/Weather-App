// OpenWeather API Key (replace with your own API key)
const apiKey = 'YOUR_API_KEY';

// Elements from the DOM
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

// Event listener for the search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

// Function to fetch weather data
function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert("City not found. Please try again.");
        });
}

// Function to display weather data
function displayWeather(data) {
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humid = data.main.humidity;
    const wind = data.wind.speed;

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${temp} °C`;
    description.textContent = `Condition: ${desc}`;
    humidity.textContent = `Humidity: ${humid}%`;
    windSpeed.textContent = `Wind Speed: ${wind} m/s`;
}
