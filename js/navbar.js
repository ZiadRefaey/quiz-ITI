const avatarBtn = document.getElementById("avatarBtn");
const dropdown = document.getElementById("dropdownMenu");

const avatarSection = document.getElementById("avatarSection");
const authBtns = document.getElementById("authBtns");
const signOut = document.querySelector(".signout");
const userNameDOM = document.querySelector(".username");

const currentUser = localStorage.getItem("currentUser");
if (currentUser) {
  const currentUserName = JSON.parse(currentUser)?.userName;
  userNameDOM.textContent = currentUserName;
  avatarBtn.textContent = currentUserName.slice(0, 1).toUpperCase();
}
let isLoggedIn = false;
if (localStorage.getItem("currentUser")) {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
function handleSignOut() {
  localStorage.setItem("currentUser", "");
  localStorage.setItem("category", "");
  localStorage.setItem("totalScore", "");
  localStorage.setItem("quizFinished", "");
  isLoggedIn = false;
  window.location.href = "login.html";
}
if (isLoggedIn) {
  avatarSection.classList.remove("hidden");
} else {
  authBtns.classList.remove("hidden");
}
signOut.addEventListener("click", handleSignOut);

avatarBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("show");
});

document.addEventListener("click", () => {
  dropdown.classList.remove("show");
});
