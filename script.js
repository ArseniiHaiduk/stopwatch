let [minutes, seconds, milliSeconds] = [0, 0, 0];
const stopBtn = document.querySelector(".start-btn.stop");
const startBtn = document.querySelector(".start-btn.start");
const resetBtn = document.querySelector(".start-btn.reset");
const displayTime = document.querySelector(".display-time");

let interval = null;

startBtn.addEventListener("click", () => {
  if (interval) return;

  interval = setInterval(() => {
    ++milliSeconds;
    if (milliSeconds === 100) {
      milliSeconds = 0;
      ++seconds;
    }
    if (seconds === 60) {
      seconds = 0;
      ++minutes;
    }
    // prettier-ignore
    displayTime.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliSeconds.toString().padStart(2, "0")}`;
  }, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  [minutes, seconds, milliSeconds] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
});
