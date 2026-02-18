import questions from "./questionsArray.js";
const categoriesList = document.querySelector(".categories-options");
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
