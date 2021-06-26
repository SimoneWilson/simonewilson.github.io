// index page

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const city = jsonObject["towns"];
    for (let i = 0; i < city.length; i++) {
      if (i == 0 || i == 2 || i == 6) {
        let card = document.createElement("section");
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let name = document.createElement("h2");
        let motto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement("p");
        let photo = document.createElement("img");
        let currentCity = i + 1;

        name.textContent = city[i].name;
        motto.textContent = city[i].motto;
        yearFounded.textContent = "Year Founded" + " " + city[i].yearFounded;
        currentPopulation.textContent =
          "Population:" + " " + city[i].currentPopulation;
        averageRainfall.textContent =
          "Annual Rain Fall:" + " " + city[i].averageRainfall;
        div.setAttribute("class", "cityinfo");
        div2.setAttribute("class", "photoinfo");
        photo.setAttribute("src", "images/" + city[i].photo);
        photo.setAttribute("alt", city[i].name + currentCity);

        div.appendChild(name);
        div.appendChild(motto);
        div.appendChild(yearFounded);
        div.appendChild(currentPopulation);
        div.appendChild(averageRainfall);
        div2.appendChild(photo);

        card.appendChild(div);
        card.appendChild(div2);

        document.querySelector("div.city").appendChild(card);
      }
    }
  });
