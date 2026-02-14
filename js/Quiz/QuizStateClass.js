import questions from "./questionsArray.js";
import Question from "./QuestionClass.js";
export default class QuizState {
  constructor(questions) {
    this.questions = questions.map(
      (question) =>
        new Question(
          question.id,
          question.question,
          question.answers,
          question.correct,
        ),
    );
    this.currentIndex = 0;
  }
  nextQuestion() {
    this.currentIndex++;
  }
  prevQuestion() {
    this.currentIndex--;
  }
}
