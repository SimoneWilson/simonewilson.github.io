/*----------- Toggle Menu -----------*/

function toggleMenu() {
  document.getElementById("navigation").classList.toggle("hide");
}

/*-----------Complete Date String -----------*/

var today = new Date();
var day = today.getDay();
var d = "";
if (day == 0) {
  d += "Sunday";
} else if (day == 1) {
  d += "Monday";
} else if (day == 2) {
  d += "Tuesday";
} else if (day == 3) {
  d += "Wednesday";
} else if (day == 4) {
  d += "Thursday";
} else if (day == 5) {
  d += "Friday";
} else if (day == 6) {
  d += "Saturday";
}

d +=
  ", " +
  today.getDate() +
  " " +
  today.toLocaleString("default", { month: "long" }) +
  " " +
  today.getFullYear();
document.getElementById("currentDate").innerHTML = d;

/*----------Weather Summary----------------*/

const temp = document.getElementById("temp");
if (temp != null) {
  const tempString = temp.textContent;
  //console.log(tempString);
  const tempNumber = parseFloat(tempString);
  //console.log(tempNumber);

  const speedNumber = parseFloat(document.getElementById("speed").textContent);
  //console.log(speedNumber);

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
    document.getElementById("chill").textContent = "No Wind Chill Today";
  }
}

let mostRecent = localStorage.getItem("date");
if (!mostRecent) {
  mostRecent = new Date();
}

let parsed = Date.parse(mostRecent);

let days = getNumberOfDays(parsed, new Date().getTime());

document.getElementById("lastDate").innerHTML = days;
localStorage.setItem("date", new Date());

//Professor

function getNumberOfDays(start, end) {
  const oneDay = 1000 * 60 * 60 * 24;

  let diffInDays = (end - start) / oneDay;

  return Math.round(diffInDays);
}
