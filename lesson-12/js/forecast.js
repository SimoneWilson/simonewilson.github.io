const dia = new Date();

const todayNumber = dia.getDay();

const date = dia.getDate();

let currentForecast = 1;

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=40.7587&lon=-111.8762&units=imperial&appid=62599425dc33d6ba70db3bb6bb198a01";

document.getElementById("weatherAlert").style.display = "none";
document.getElementById("x").style.display = "none";

fetch(apiURL)
  .then((response) => response.json())
  .then((dayForecast) => {
    console.log(dayForecast);
    for (i = 0; i < 3; i++) {
      document.getElementById("temp" + i).textContent =
        dayForecast.daily[i].temp.day;
      document.getElementById("desc" + i).textContent =
        dayForecast.daily[i].weather[0].description;
      document.getElementById("hum" + i).textContent =
        dayForecast.daily[i].humidity;
    }

    if (dayForecast.alerts != null && dayForecast.alerts.length > 0) {
      document.getElementById("weatherAlert").textContent =
        dayForecast.alerts[0].description;
      document.getElementById("weatherAlert").style.display = "block";
      document.getElementById("x").style.display = "block";
    }
  });
