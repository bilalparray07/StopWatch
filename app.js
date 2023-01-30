let time = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let interval;
let num = 0;
let sec = 0;
let min = 0;

start.addEventListener("click", () => {
  interval = setInterval(setTimer, 10);
});
function setTimer() {
  num++;
  time.innerHTML = `${num}`;
  if (num > 100) {
    num = 0;
    sec++;
  }
  if (sec >= 60) {
    sec = 0;
    min++;
  }
  time.innerHTML = `${min}:${sec}:${num}`;
}
stop.addEventListener("click", () => {
  clearInterval(interval);
});
reset.addEventListener("click", () => {
  num = 0;
  sec = 0;
  min = 0;
  time.innerHTML = `${min}:${sec}:${num}`;
});
