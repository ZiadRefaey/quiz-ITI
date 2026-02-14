const totalQuestionsCount = document.querySelector(".total-questions-count");
const currentIndexDOM = document.querySelector(".current-question-index");
const optionsContainer = document.querySelector(".options-list");
const questionTitleDOM = document.querySelector(".question-title");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

import QuizState from "./QuizStateClass.js";
import questions from "./questionsArray.js";
export const quiz = new QuizState(questions);
function renderQuestions() {
  totalQuestionsCount.textContent = quiz.questions.length;
  currentIndexDOM.textContent = quiz.currentIndex + 1;
  const currentQuestion = quiz.questions[quiz.currentIndex];
  const questionTitle = currentQuestion.title;
  console.log(currentQuestion);
  const questionOptions = currentQuestion.options;
  questionTitleDOM.textContent = questionTitle;
  questionOptions.forEach((option, index) => {
    const optionDOM = document.createElement("div");
    optionDOM.classList.add("option");
    optionDOM.textContent = `${index + 1}. ${option}`;
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
  console.log(quiz);
}
function handlePrev() {
  quiz.prevQuestion();
  checkBtns();
  renderQuestions();
  console.log(quiz);
}
export default initQuiz;
