const newYear = " 1 jan 2022";

const day = document.querySelector(".days")
const hour = document.querySelector(".hours")
const minute = document.querySelector(".minutes")
const second = document.querySelector(".seconds")
function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    day.innerHTML = days
    hour.innerHTML = hours
    minute.innerHTML = minutes
    second.innerHTML = seconds
}

countdown();

setInterval(countdown, 1000)