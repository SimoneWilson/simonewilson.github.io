const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventURL)
  .then((response) => response.json())
  .then((dayEvents) => {
    console.log(dayEvents);

    for (j = 0; j < dayEvents.towns.length; j++) {
      let mylist = dayEvents.towns[j].events;
      let text = "";
      if (
        document.getElementById("events") != null &&
        dayEvents.towns[j].name == "Preston"
      ) {
        text = "prestonEvents";
      } else if (
        document.getElementById("fishEvents") != null &&
        dayEvents.towns[j].name == "Fish Haven"
      ) {
        text = "fishEvents";
      } else if (
        document.getElementById("sodaEvents") != null &&
        dayEvents.towns[j].name == "Soda Springs"
      ) {
        text = "sodaEvents";
      } else {
        continue;
      }
      for (i = 0; i < mylist.length; i++) {
        let eventCity = document.createElement("p");
        eventCity.textContent = mylist[i];
        document.getElementById(text).appendChild(eventCity);
      }
    }
  });
