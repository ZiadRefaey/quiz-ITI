const totalQuestionsCount = document.querySelector(".total-questions-count");
const currentIndexDOM = document.querySelector(".current-question-index");
const optionsContainer = document.querySelector(".options-list");
const questionTitleDOM = document.querySelector(".question-title");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

import QuizState from "./QuizStateClass.js";
import questions from "./questionsArray.js";
export const quiz = new QuizState(questions);
function highlightSelected() {
  const options = document.querySelectorAll(".option");
  options.forEach((option, optionId) => {
    console.log(optionId);
    console.log(quiz.questions[quiz.currentIndex].selectedAnswer);
    if (optionId == quiz.questions[quiz.currentIndex].selectedAnswer) {
      option.classList.add("selected-option");
    } else option.classList.remove("selected-option");
  });
}
function renderQuestions() {
  totalQuestionsCount.textContent = quiz.questions.length;
  currentIndexDOM.textContent = quiz.currentIndex + 1;
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
    nextBtn.setAttribute("disabled", "");
  }

  if (quiz.currentIndex === 0) {
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

function handleNext() {
  quiz.nextQuestion();
  checkBtns();
  renderQuestions();
  highlightSelected();
}
function handlePrev() {
  quiz.prevQuestion();
  checkBtns();
  renderQuestions();
  highlightSelected();
}
function pickOption(questionId, optionIndex) {
  const currentQuestion = quiz.questions[questionId];
  console.log(currentQuestion);
  currentQuestion.selectedAnswer = optionIndex;
}
optionsContainer.addEventListener("click", function (e) {
  console.log(e.target.dataset.id);
  pickOption(quiz.currentIndex, e.target.dataset.id);
  highlightSelected();
  console.log(e.target);
});
export default initQuiz;
