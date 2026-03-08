if (
  localStorage.category === "" ||
  !localStorage.category ||
  localStorage.currentUser === "" ||
  !localStorage.currentUser ||
  localStorage.totalScore == "" ||
  !localStorage.totalScore
) {
  location.replace("login.html");
}
const resultScore = document.querySelector(".inner");
const resultMsg = document.querySelector(".result-msg");
const historyDiv = document.querySelector(".userHistory");
const circle = document.querySelector(".progress-circle");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
const restQuizByCategory = document.getElementById("restQuizByCategory");
const restQuiz = document.getElementById("restQuiz");
let usersHistorey = JSON.parse(localStorage.usersHistorey);
let totalScore = currentUser.perviseQuizs[0].score;
// let
if (totalScore >= 0.5) {
  resultScore.classList.add("success");
  circle.classList.remove("red");
  circle.classList.add("green");
  resultMsg.classList.add("success");
} else {
  circle.classList.add("red");
  circle.classList.remove("green");
  resultScore.classList.add("fail");
  resultMsg.classList.add("fail");
}
// let progress = 0;
let score = 0;
if (totalScore * 10 > 0) {
  let interval = setInterval(() => {
    score++;
    circle.style.setProperty("--progress", score * 3.6 + "deg");
    resultScore.textContent = `${score} %`;

    if (score >= totalScore * 100) {
      clearInterval(interval);
    }
  }, 25);
}

if (totalScore > 0.9) {
  resultMsg.textContent = "Great job";
} else if (totalScore > 0.75) {
  resultMsg.textContent = "very good job";
} else if (totalScore >= 0.5) {
  resultMsg.textContent = "Good job";
} else {
  resultMsg.textContent = "Faild";
}

currentUser.perviseQuizs.forEach((e, i) => {
  const quizDiv = document.createElement("div");
  if (i == 0) {
    quizDiv.classList.add("relative");
  }
  quizDiv.innerHTML = `
  
        <span>No${i + 1}</span>
        <span>Category: ${e.category}</span>
        <span>Score : ${e.score * 100} %</span>
    `;
  const scoreText = quizDiv.querySelector("span:last-child");

  if (e.score >= 0.5) {
    scoreText.classList.add("success");
  } else {
    scoreText.classList.add("fail");
  }
  historyDiv.appendChild(quizDiv);
});
window.history.pushState(null, null, window.location.href);

// function preventBack() {
//   window.history.pushState(null, null, window.location.href);
// }

// preventBack();

// window.addEventListener("popstate", function () {
//   preventBack();
// });

window.onpopstate = function () {
  history.go(1);
};
restQuiz.addEventListener("click", () => {
  localStorage.quizFinished = "";
});
restQuizByCategory.addEventListener("click", () => {
  localStorage.quizFinished = "";
});
