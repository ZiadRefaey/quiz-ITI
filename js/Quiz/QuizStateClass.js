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
//  id: 48,
//     question: "Jack in Titanic?",
//     answers: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Tom Cruise"],
//     correct: 1,
//     category: "Movies",
//     isMarked: false,
//     userAnswer: null,
