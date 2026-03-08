if (localStorage.currentUser === "" || !localStorage.currentUser) {
  location.assign("login.html");
}
import questions from "./questionsArray.js";
const categoriesList = document.querySelector(".categories-options");
const currentUser = JSON.parse(localStorage.currentUser);
const userNameSpan = document.querySelector(".category-container h1 span");
const historyDiv = document.querySelector(".userHistory");
userNameSpan.textContent = currentUser.userName;
function getUniqueCategories(questions) {
  const arr = questions.map((question) => question.category);
  const uniqueArr = new Set(arr);
  return uniqueArr;
}
const uniqueCategories = getUniqueCategories(questions);
uniqueCategories.forEach((category) => {
  const categoryDOM = document.createElement("div");
  categoryDOM.classList.add("category-option");
  categoryDOM.textContent = category;
  categoryDOM.dataset.value = category;
  categoriesList.prepend(categoryDOM);
});
categoriesList.addEventListener("click", function (e) {
  if (e.target.dataset.value) {
    localStorage.setItem("category", e.target.dataset.value);
    window.location.href = "quiz.html";
  }
});
console.log(currentUser.perviseQuizs.length);

if (currentUser.perviseQuizs.length == 0) {
  const quizDiv = document.createElement("div");
  quizDiv.innerHTML = `
        <span>there is no previous Quiz</span>
    `;
  historyDiv.appendChild(quizDiv);
}
currentUser.perviseQuizs.forEach((e, i) => {
  const quizDiv = document.createElement("div");
  quizDiv.innerHTML = `
        <span>No ${i + 1}</span>
        <span>Category: ${e.category}</span>
        <span>Score: ${e.score * 100} %</span>
    `;
  const scoreText = quizDiv.querySelector("span:last-child");

  if (e.score >= 0.5) {
    scoreText.classList.add("success");
  } else {
    scoreText.classList.add("fail");
  }
  historyDiv.appendChild(quizDiv);
});
