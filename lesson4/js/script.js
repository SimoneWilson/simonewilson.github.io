var today = new Date();
var date = today.getWeekDay() + ',' + todayDate() + ' ' + (today.getMonth() + 1) + ' ' + today.getFullYear();
document.getElementById("currentDate").innerHTML = date;