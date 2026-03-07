import { handleSubmit } from "./QuizApp.js";
import Timer from "./TimerClass.js";
const timerDOM = document.querySelector(".timer");
const progressTimerDOM = document.querySelector(".timer-progress");
export default function initTimer() {
  const timer = new Timer(1200, onTick, onFinish);
  progressTimerDOM.max = timer.duration;
  console.log(progressTimerDOM.max);
  timerDOM.textContent = convertToMinutes(120).join(":");
  function convertToMinutes(timer) {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return [minutes, String(seconds).padStart(2, "0")];
  }
  function onFinish() {
    handleSubmit();
  }
  function onTick(remaining) {
    timerDOM.textContent = convertToMinutes(remaining).join(":");
    const currentTime = timer.duration - timer.remaining;
    progressTimerDOM.value = currentTime;
  }
  timer.start();
}
