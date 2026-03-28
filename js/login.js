if (localStorage.getItem("quizFinished")) {
  window.location.href = "result.html";
}
import { decryptPass } from "./Quiz/encryption.js";
let users = localStorage.getItem("users") ? JSON.parse(localStorage.users) : [];
let usersHistorey = localStorage.getItem("usersHistorey")
  ? JSON.parse(localStorage.usersHistorey)
  : [];
let currentUser;
let submit = document.querySelector("form button");
let emailInput = document.getElementById("email");
let pass = document.getElementById("pass");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let find = users.findIndex((el) => {
    return el.email == emailInput.value;
  });
  if (find == -1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "invaild E-mail or password ....",
        footer: "Don't have an E-mail ?<a href='index.html'>Sign Up</a>",
      });
  } else {
    if (pass.value == decryptPass(users[find].pass)) {
      let findUser = usersHistorey.findIndex((u) => {
        return u.userEmail == users[find].email;
      });
      if (findUser != -1) {
        currentUser = {
          userName: usersHistorey[findUser].userName,
          userEmail: usersHistorey[findUser].email,
          perviseQuizs: usersHistorey[findUser].perviseQuizs,
        };
      } else {
        currentUser = {
          userName: users[find].userName,
          userEmail: users[find].email,
          perviseQuizs: [],
        };
      }
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      }).fire({
        icon: "success",
        title: "Signed in successfully"
      });
      setTimeout(() => {

        location.replace("categoryPicker.html");
      }, 3000)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "invaild E-mail or password ....",
        footer: "Don't have an E-mail ?<a href='index.html'>Sign Up</a>"
      });
    }
  }
});
