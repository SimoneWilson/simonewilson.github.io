const eventURL = "json/events.json";

fetch(eventURL)
  .then((response) => response.json())
  .then((events) => {
    console.log(events);

    for (i = 0; i < events.events.length; i++) {
      console.log(events.events[i]);
      let name = events.events[i].eventName;
      let date = events.events[i].eventDate;

      let p = document.createElement("p");
      p.textContent = name + "-" + date;

      document.getElementById("events").appendChild(p);
    }
  });

function toggleGrid() {
  let allChildren = document
    .getElementById("directory_info")
    .getElementsByClassName("outer_div");

  document.getElementById("directory_info").classList.add("directory_info_row");

  for (i = 0; i < allChildren.length; i++) {
    allChildren[i].children[0].classList.remove("inner_div_list");
    allChildren[i].children[0].classList.add("inner_div_grid");
  }
}

function toggleList() {
  let allChildren = document
    .getElementById("directory_info")
    .getElementsByClassName("outer_div");

  document
    .getElementById("directory_info")
    .classList.remove("directory_info_row");

  for (i = 0; i < allChildren.length; i++) {
    allChildren[i].children[0].classList.add("inner_div_list");
    allChildren[i].children[0].classList.remove("inner_div_grid");
  }
}
