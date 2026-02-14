import Timer from "./TimerClass.js";
const timerDOM = document.querySelector(".timer");
export default function initTimer() {
  const timer = new Timer(120, onTick, onFinish);
  function convertToMinutes(timer) {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return [minutes, seconds];
  }
  function onFinish() {
    alert("timer is up");
  }
  function onTick(remaining) {
    timerDOM.textContent = convertToMinutes(remaining).join(":");
  }
  timer.start();
}
