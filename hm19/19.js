function generateHtml(data) {
    let weatherBlock = document.querySelector('.block');
    let weatherAddBlock = '';

    let iconCode = data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; // получение иконки погоды
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth().toString().padStart(2, '0');

    //Генерируем виджет
    weatherAddBlock += '<div>'
    weatherAddBlock += `<img src="${iconUrl}" alt="Weather icon">`;
    weatherAddBlock += `<p> ${hours}:${minutes}</p>`;
    weatherAddBlock += `<p> ${day}/${month}</p>`;
    weatherAddBlock += '</div>'

    weatherAddBlock += '<div>'
    weatherAddBlock += `<h1>Weather: ${data.weather[0].description}</h1>`;
    weatherAddBlock += `<h1>Temperature: ${data.main.temp}°C</h1>`;
    weatherAddBlock += `<h1>Humidity: ${data.main.humidity}%</h1>`
    weatherAddBlock += '</div>'

    weatherBlock.innerHTML = weatherAddBlock;
}

function takeData(){
    console.log('restore')
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            //Получаем геопозицию
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            //получаем объект с прогнозом
            const apiKey = 'c5f80504b2988929944701e59d1528e9';
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            const weather = new XMLHttpRequest();
            weather.open('GET', weatherUrl, true);

            weather.onreadystatechange = function() {
                if (weather.readyState === 4 && weather.status === 200) {
                    const response = JSON.parse(weather.responseText);
                    generateHtml(response);
                }
            };

            weather.send();


        }, function(error) {
            console.error("Ошибка получения местоположения: ", error);
        });
    } else {
        console.error("Geolocation не поддерживается этим браузером.");
    }
}

takeData();

let restoreBtn = document.querySelector('.restore');
restoreBtn.addEventListener('click', takeData)