document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'API KEY HERE';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=LAGOS&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
