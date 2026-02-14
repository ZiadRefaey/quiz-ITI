import { quiz } from "./QuizApp.js";

const questionsListDOM = document.querySelector(".questions-list");
export default function renderQuestionsList() {
  quiz.questions.forEach((question, index) => {
    const questionItem = document.createElement("div");
    questionItem.classList.add("aside-item");
    questionItem.textContent = index + 1;
    questionsListDOM.appendChild(questionItem);
  });
}
