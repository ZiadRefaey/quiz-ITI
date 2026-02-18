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
export const quiz = new QuizState(questions);
let markedQuestionsList = [];
function highlightSelected() {
  const options = document.querySelectorAll(".option");
  options.forEach((option, optionId) => {
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
  console.log(quiz.currentIndex);
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
    console.log("here");
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
submitBtn.addEventListener("click", handleSubmit);
markBtn.addEventListener("click", handleMark);
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
function handleSubmit() {
  const totalScore = quiz.questions.reduce((acc, cur) => {
    if (cur.correctAnswerIndex == cur.selectedAnswer) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
  quiz.totalScore = totalScore;
  console.log(quiz);
}
function handleMark() {
  quiz.questions[quiz.currentIndex].isMarked =
    !quiz.questions[quiz.currentIndex].isMarked;
  markedQuestionsList = quiz.questions.filter((question) => {
    return question.isMarked;
  });
  renderMarkedQuestions();
}

function renderMarkedQuestions() {
  markedQuestionsList.forEach((question, index) => {
    const markedQuestion = document.createElement("div");
    markedQuestion.classList.add("marked-question-item");
    markedQuestion.classList.add("aside-item");
    markedQuestion.dataset.id = question.id;
    markedQuestion.textContent = `#${question.id}`;
    console.log(question);
    // markedQuestion.textContent = `#${question.}`
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
  console.log(id);
  quiz.currentIndex = Number(id - 1);
  renderQuestions();
  checkBtns();
}
function pickOption(questionId, optionIndex) {
  const currentQuestion = quiz.questions[questionId];
  currentQuestion.selectedAnswer = optionIndex;
}
optionsContainer.addEventListener("click", function (e) {
  pickOption(quiz.currentIndex, e.target.dataset.id);
  highlightSelected();
});
export default initQuiz;
