export default class Question {
  constructor(id, title, options, correctAnswerIndex) {
    this.id = id;
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.selectedAnswer = null;
    this.isMarked = false;
  }
  selectAnswer(index) {
    this.selectedAnswer = index;
  }
  toggleMark() {
    this.isMarked = !this.isMarked;
  }
}
