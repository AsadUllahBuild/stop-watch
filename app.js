const seconds = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let second = 0;
let interval;
let minutes = 0;
let hours = 0;

start.addEventListener("click", () => {
    interval = setInterval(() => {
        second += 1
        seconds.innerHTML = second
        if (second === 60) {
            minutes += 1;
            minute.innerHTML = minutes
            second = 0;
        }
        if (minutes === 60) {
            hours += 1;
            hour.innerHTML = hours
            minutes = 0;
        }
    }, 1000)
    start.disabled = true
})

stop.addEventListener("click", () => {
    clearInterval(interval);
    start.disabled = false

})

reset.addEventListener("click", () => {
    clearInterval(interval);
    second = 0
    seconds.innerHTML = "00"

    minutes = 0;
    minute.innerHTML = "00"
    hours = 0;
    hour.innerHTML = "00"
    start.disabled = false
})