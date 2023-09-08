const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getDay()];
// const currentTime = currentDate.toUTCString();
const currentTime = currentDate.getTime();

//  to display the current day and time
const day = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const time = document.querySelector('[data-testid="curretUTCTime"]');

day.textContent = { currentDay };
time.textContent = { currentTime };
