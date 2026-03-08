import { handleSubmit } from "./QuizApp.js";
import Timer from "./TimerClass.js";
const timerDOM = document.querySelector(".timer");
const progressTimerDOM = document.querySelector(".timer-progress");
export default function initTimer() {
  const totalTime = 120;
  const timer = new Timer(totalTime, onTick, onFinish);
  progressTimerDOM.max = timer.duration;
  console.log(progressTimerDOM.max);
  timerDOM.textContent = convertToMinutes(totalTime).join(":");
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
    if (
      remaining <= timer.duration * 0.25 &&
      remaining > timer.duration * 0.1
    ) {
      timerDOM.classList.add("warning");
    } else if (remaining <= timer.duration * 0.1) {
      timerDOM.classList.add("danger");
    } else {
      timerDOM.classList.remove("warning");
      timerDOM.classList.remove("danger");
    }
    progressTimerDOM.value = currentTime;
  }
  timer.start();
}
