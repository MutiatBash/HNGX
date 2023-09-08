const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const currentDate = new Date();
console.log(currentDate);
const currentDay = daysOfWeek[currentDate.getDay()];
const hours = currentDate.getUTCHours();
const minutes = currentDate.getUTCMinutes();
const milliseconds = currentDate.getUTCMilliseconds();
const currentTime = `${hours} : ${minutes} : ${milliseconds}`;
console.log(currentTime);

//  to display the current day and time
const day = document.querySelector("#day");
const time = document.querySelector("#time");

day.textContent = `${currentDay}`;
time.textContent = `${currentTime}`;
