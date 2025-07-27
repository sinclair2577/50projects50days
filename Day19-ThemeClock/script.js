const themeChange = document.getElementById("theme-change");
const html = document.querySelector("html");
const time = document.querySelector(".time");
const date = document.querySelector(".date");

const watchHour = document.getElementById("hour");
const watchMin = document.getElementById("minute");
const watchSec = document.getElementById("second");

themeChange.addEventListener("click", (e) => {
  if (e.target.innerHTML == "Dark Mode") {
    themeChange.innerHTML = "Light Mode";
  } else {
    themeChange.innerHTML = "Dark Mode";
  }
  html.classList.toggle("dark");
});

const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var t = setInterval(setTime, 1000);

// 设置时间针转动
function setTime() {
  // 获取时间和日期
  const currentDate = new Date();

  // 获取时分秒
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  const hourForClock = hour >= 13 ? hour % 12 : hour;
  const clock = hour >= 12 ? "PM" : "AM";
  const week = currentDate.getDay();
  const month = currentDate.toDateString().slice(0, 3);

  const watchHour = document.getElementById("hour");
  const watchMin = document.getElementById("minute");
  const watchSec = document.getElementById("second");
  watchHour.style.rotate = `${hour * 30}deg`;
  watchMin.style.rotate = `${minute * 6}deg`;
  watchSec.style.rotate = `${second * 6}deg`;

  time.innerHTML = `${hourForClock}:${minute} ${clock}`;
  date.innerHTML = `${weeks[week]},${month}`;
  const day = document.createElement("div");
  day.innerHTML = currentDate.getDate();
  day.classList.add("day");
  date.appendChild(day);

  if (second == 60) {
    watchSec.style.rotate = `-360deg`;
  }
  clearInterval(t);
  t = setInterval(setTime, 1000);
}
