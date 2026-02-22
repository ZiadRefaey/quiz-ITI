let users = localStorage.getItem("users") ? JSON.parse(localStorage.users) : [];
let submit = document.querySelector("form button");
let emailInput = document.getElementById("email");
let pass = document.getElementById("pass");

submit.addEventListener("click",function(e){
    e.preventDefault();
    let find = users.findIndex((el)=>{
        return el.email == emailInput.value
    })
    if(pass.value == users[find].pass){
        location.assign("categoryPicker.html");
    }

})