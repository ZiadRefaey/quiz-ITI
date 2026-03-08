if (
  localStorage.category === "" ||
  !localStorage.category ||
  localStorage.currentUser === "" ||
  !localStorage.currentUser
) {
  location.replace("login.html");
}
if (localStorage.getItem("quizFinished")) {
  window.location.href = "result.html";
}
const totalQuestionsCount = document.querySelector(".total-questions-count");
const currentIndexDOM = document.querySelector(".current-question-index");
const optionsContainer = document.querySelector(".options-list");
const questionTitleDOM = document.querySelector(".question-title");
const markedList = document.querySelector(".marked-questions-list");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const markBtn = document.querySelector(".mark-btn");
import QuizState from "./QuizStateClass.js";
import questions from "./questionsArray.js";
import * as lsit from "./QuestionsList.js";
const selectedCategory = localStorage.getItem("category");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let usersHistorey = localStorage.getItem("usersHistorey")
  ? JSON.parse(localStorage.usersHistorey)
  : [];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const resetQuiz = urlParams.get("reset");
let categorizedQuestions = [];
if (selectedCategory === "mixed") {
  if (resetQuiz) {
    categorizedQuestions = JSON.parse(localStorage.getItem("mixedCategorey"));
  } else {
    categorizedQuestions = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
    localStorage.setItem(
      "mixedCategorey",
      JSON.stringify(categorizedQuestions),
    );
  }
} else {
  categorizedQuestions = questions.filter((question, index) => {
    return question.category === selectedCategory;
  });
}
const questionsWithUpdatedIds = categorizedQuestions.map((question, index) => {
  question.id = index + 1;
  return question;
});
export const quiz = new QuizState(questionsWithUpdatedIds);

if (resetQuiz) {
  quiz.questions.sort(function (a) {
    return Math.ceil(Math.random() * 10) - a.id;
  });
  let id = 0;
  quiz.questions.forEach((q) => {
    q.id = ++id;
  });
}
let markedQuestionsList = [];
let answeredCount = 0;
function highlightSelected() {
  const options = document.querySelectorAll(".option");
  options.forEach((option, optionId) => {
    if (optionId == quiz.questions[quiz.currentIndex].selectedAnswer) {
      option.classList.add("selected-option");
      answeredCount = 0;
      quiz.questions.forEach((q) => {
        if (q.selectedAnswer) answeredCount++;
      });

      if (answeredCount == 10) {
        submitBtn.disabled = false;
      }
    } else option.classList.remove("selected-option");
  });
}
function renderQuestions() {
  totalQuestionsCount.textContent = quiz.questions.length;
  if (!(quiz.currentIndex > 10)) {
    currentIndexDOM.textContent = quiz.currentIndex + 1;
  }
  const currentQuestion = quiz.questions[quiz.currentIndex];
  const questionTitle = currentQuestion.title;
  const questionOptions = currentQuestion.options;
  questionTitleDOM.textContent = questionTitle;
  questionOptions.forEach((option, index) => {
    const optionDOM = document.createElement("div");
    optionDOM.classList.add("option");
    optionDOM.dataset.id = index;
    optionDOM.textContent = `${index + 1}. ${option}`;
    highlightSelected();
    if (index === 0) {
      optionsContainer.replaceChildren(optionDOM);
    } else optionsContainer.appendChild(optionDOM);
  });
}
function initQuiz() {
  renderQuestions();
}

//responsible for handling how the previous and next buttons are disabled and enabled
function checkBtns() {
  if (quiz.currentIndex === quiz.questions.length - 1) {
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  }

  if (quiz.currentIndex === 0) {
    nextBtn.disabled = false;
    prevBtn.disabled = true;
  }
  if (
    quiz.currentIndex !== quiz.questions.length - 1 &&
    quiz.currentIndex !== 0
  ) {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
submitBtn.addEventListener("click", handleSubmit);
markBtn.addEventListener("click", () => {
  handleMark(quiz.currentIndex);
});
function handleNext() {
  quiz.nextQuestion();
  checkBtns();
  renderQuestions();
  highlightSelected();
  lsit.default();
}

function handlePrev() {
  quiz.prevQuestion();
  checkBtns();
  renderQuestions();
  highlightSelected();
  lsit.default();
}
export function handleSubmit() {
  const totalScore = quiz.questions.reduce((acc, cur) => {
    if (cur.correctAnswerIndex == cur.selectedAnswer) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
  quiz.totalScore = totalScore;
  const currentQuiz = {
    category: selectedCategory,
    score: totalScore / quiz.questions.length,
  };
  if (currentUser.perviseQuizs) {
    currentUser.perviseQuizs.unshift(currentQuiz);
  } else {
    currentUser.perviseQuizs = [];
    currentUser.perviseQuizs.unshift(currentQuiz);
  }
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  let find = usersHistorey.findIndex((u) => {
    return u.userEmail == currentUser.userEmail;
  });
  if (find != -1) {
    usersHistorey[find].perviseQuizs.unshift(currentUser.perviseQuizs[0]);
  } else {
    usersHistorey.unshift(currentUser);
  }

  localStorage.setItem("usersHistorey", JSON.stringify(usersHistorey));

  localStorage.setItem("quizFinished", "true");
  location.replace("result.html");

  localStorage.totalScore = totalScore / quiz.questions.length;
}

function handleMark(index) {
  document.querySelectorAll(".aside-item")[index].classList.toggle("marked");
  quiz.questions[index].isMarked = !quiz.questions[index].isMarked;
  markedQuestionsList = quiz.questions.filter((question) => {
    return question.isMarked;
  });
  renderMarkedQuestions();
}
function renderMarkedQuestions() {
  if (markedQuestionsList.length == 0) {
    markedList.replaceChildren();
  }
  markedQuestionsList.forEach((question, index) => {
    const markedQuestion = document.createElement("div");
    markedQuestion.classList.add("marked-question-item");
    markedQuestion.classList.add("aside-item");
    markedQuestion.dataset.id = question.id;
    markedQuestion.innerHTML = `${question.id} <i style="color:red;" class="fa-solid fa-circle-xmark"></i>`;

    if (index === 0) {
      markedList.replaceChildren(markedQuestion);
    } else {
      markedList.appendChild(markedQuestion);
    }
  });
}
markedList.addEventListener("click", function (e) {
  if (e.target.dataset.id) {
    navigateToQuestion(e.target.dataset.id);
  }
});
function navigateToQuestion(id) {
  quiz.currentIndex = Number(id - 1);
  renderQuestions();
  checkBtns();
  lsit.default();
}
function pickOption(questionId, optionIndex) {
  const currentQuestion = quiz.questions[questionId];
  currentQuestion.selectedAnswer = optionIndex;
}
optionsContainer.addEventListener("click", function (e) {
  pickOption(quiz.currentIndex, e.target.dataset.id);
  highlightSelected();
});

////////////////////handle list chose question button////////////

lsit.questionsListDOM.addEventListener("click", function ({ target }) {
  navigateToQuestion(target.textContent);
});
markedList.addEventListener("click", function ({ target }) {
  if (target.classList.contains("fa-circle-xmark")) {
    handleMark(target.parentElement.textContent - 1);
  }
});
///////////////////////////////////////

history.pushState(null, null, location.href);

window.onpopstate = function () {
  history.go(1);
};

document.addEventListener("keydown", function (e) {
  if (e.key === "F5") {
    e.preventDefault();
  }

  if (e.ctrlKey && e.key === "r") {
    e.preventDefault();
  }
});

export default initQuiz;
