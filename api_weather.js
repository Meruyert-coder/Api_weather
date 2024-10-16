document.querySelector('#Weather').onclick = function() {
    let latitude = prompt("Введите широту:");
    let longitude = prompt("Введите долготу:");
    let apiKey = '8405cafd70031b2777cb1fafc8867e12'; 
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=ru`;

 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', weatherApiUrl);

    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        let city = data.name;
        let currentDate = new Date().toLocaleDateString('ru-RU');
        let weatherDesc = data.weather[0].description;
        let iconCode = data.weather[0].icon;
        let currentTemp = data.main.temp;
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        let windSpeed = data.wind.speed;

        let weatherHTML = `
            <h2>${city}</h2>
            <p>Дата: ${currentDate}</p>
            <p>Погода: ${weatherDesc}</p>
            <img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Иконка погоды">
            <p>Температура: ${currentTemp} °C</p>
            <p>Мин. температура: ${minTemp} °C</p>
            <p>Макс. температура: ${maxTemp} °C</p>
            <p>Скорость ветра: ${windSpeed} м/с</p>
        `;

        document.getElementById('weatherContainer').innerHTML = weatherHTML;
    };

    xhr.send();
};