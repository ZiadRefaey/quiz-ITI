const timerDOM = document.querySelector(".timer");
console.log();
import Timer from "./timer.js";
const timer = new Timer(10, onTick, onFinish);
const remaining = timer.remaining;
function convertToMinutes(timer) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  return [minutes, seconds];
}
console.log();
function onFinish() {
  alert("timer is up");
}
function onTick(remaining) {
  timerDOM.textContent = convertToMinutes(remaining).join(":");
}
timer.start();
