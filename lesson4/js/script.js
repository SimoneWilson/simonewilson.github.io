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
}
else if (day == 1) {
    d += "Monday";
}
else if (day == 2) {
    d += "Tuesday";
}
else if (day == 3) {
    d += "Wednesday";
}
else if (day == 4) {
    d += "Thursday";
}
else if (day == 5) {
    d += "Friday";
}
else if (day == 6) {
    d += "Saturday";
}

d += ', ' + today.getDate() + ' ' + today.toLocaleString('default', { month: 'long' }) + ' ' + today.getFullYear();
document.getElementById("currentDate").innerHTML = d;

