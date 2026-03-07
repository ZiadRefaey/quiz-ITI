import { decryptPass } from "./Quiz/encryption.js";
let users = localStorage.getItem("users") ? JSON.parse(localStorage.users) : [];
let usersHistorey = localStorage.getItem("usersHistorey") ? JSON.parse(localStorage.usersHistorey) : [];
let currentUser ;
let submit = document.querySelector("form button");
let emailInput = document.getElementById("email");
let pass = document.getElementById("pass");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");

console.log(usersHistorey);

submit.addEventListener("click",function(e){
    e.preventDefault();
    let find = users.findIndex((el)=>{
        return el.email == emailInput.value
    })
    if(find == -1){
        emailErr.classList.add("danger");        
        emailErr.innerHTML = "<i class='fa-regular fa-circle-xmark'></i> invalid Email"
    }else{
        if(pass.value == decryptPass(users[find].pass)){
            let findUser = usersHistorey.findIndex((u)=>{
                return u.userEmail == users[find].email
            })
            if(findUser != -1 ){
                console.log(usersHistorey[findUser]);
                
                currentUser = {
                    userName : usersHistorey[findUser].userName,
                    userEmail : usersHistorey[findUser].email,
                    perviseQuizs : usersHistorey[findUser].perviseQuizs
                }
            }else{
                currentUser = {
                    userName : users[find].userName ,
                    userEmail : users[find].email ,
                    perviseQuizs : []
                }
            }        
            localStorage.setItem("currentUser",JSON.stringify(currentUser));
            location.assign("categoryPicker.html");
        }else{
            emailErr.innerHTML = " ";
            passErr.classList.add("danger");            
            passErr.innerHTML = "<i class='fa-regular fa-circle-xmark'></i> Wrong password"
        }

    }    

})