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
  "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=927d130c204aff65e964321c17138067&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((dayForecast) => {
    console.log(dayForecast);
    document.getElementById("townName").textContent = dayForecast.city.name;

    let mylist = dayForecast.list;

    let forecastDayNumber = todayNumber;

    for (i = 0; i < mylist.length; i++) {
      let time = mylist[i].dt_txt;

      if (time.includes("18:00:00")) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        document.getElementById("current").textContent =
          mylist[i].weather[0].main;

        document.getElementById("high").textContent = mylist[i].main.temp_max;
        document.getElementById("speed").textContent = mylist[i].wind.speed;
        document.getElementById("humid").textContent = mylist[i].main.humidity;

        const speedNumber = parseFloat(mylist[i].wind.speed);
        //console.log(speedNumber);

        const temp = mylist[i].main.temp;
        const tempNumber = parseFloat(temp);
        let windchill =
          35.74 +
          0.6215 * tempNumber -
          (35.75 * Math.pow(speedNumber, 0.16) +
            0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
        windchill = Math.round(windchill);

        //console.log(windchill);

        if (tempNumber <= 50 && speedNumber > 3) {
          document.getElementById("chill").textContent = windchill + "\xB0F";
        } else {
          document.getElementById("chill").textContent = "N/A";
        }

        //5 day Forecast
        if (currentForecast < 6) {
          document.getElementById("dia" + currentForecast).textContent =
            weekday[forecastDayNumber];
          document.getElementById("day" + currentForecast).textContent =
            "High: " + Math.round(parseFloat(mylist[i].main.temp_max));
          const imagesrc =
            "https://openweathermap.org/img/wn/" +
            mylist[i].weather[0].icon +
            "@2x.png";
          document
            .getElementById("img" + currentForecast)
            .setAttribute("src", imagesrc);
        }

        currentForecast++;
      }
    }
  });
