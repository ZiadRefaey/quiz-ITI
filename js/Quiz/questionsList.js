import { quiz } from './QuizApp.js';

export const questionsListDOM = document.querySelector(".questions-list");
export default function renderQuestionsList() {
  questionsListDOM.replaceChildren();
  quiz.questions.forEach((question, index) => {
    const questionItem = document.createElement("div");
    questionItem.classList.add("aside-item");
    questionItem.textContent = index + 1;
    if(question.selectedAnswer != null){
      questionItem.classList.add("answered");
    }
    
    questionsListDOM.appendChild(questionItem);
  });
  questionsListDOM.children[quiz.currentIndex].classList.add("target");    

}