///// reg /////
let nameReg = /^^[a-zA-Z ]{3,20}$$/;
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
let passReg = /^[a-zA-Z0-9]{6,12}$/;
//// inputs ////
let nameInput = document.getElementById("userName");
let emailInput = document.getElementById("email");
let pass = document.getElementById("pass");
let rePass = document.getElementById("rePass");
/// span err /////
let nameErr = document.getElementById("nameErr");
let emailErr = document.getElementById("emailErr");
let passErr = document.getElementById("passErr");
let rePassErr = document.getElementById("rePassErr");
//// lock /////
let passLock = document.getElementById("passLock");
let rePassLock = document.getElementById("rePassLock");
///// submit button //////////////
let submit = document.querySelector("form button");
let users = localStorage.getItem("users") ? JSON.parse(localStorage.users) : [];
let check = false;

//// check func /////
function checkInput(target , div ,reg,errMsg,correctMsg){    
    if(!reg.test(target.value.trim()) && target.value != ""){
        div.innerHTML = `<i class='fa-regular fa-circle-xmark'></i> ${errMsg}`;
        div.classList.add("danger");
        div.classList.remove("correct");
        check = false;
    }else if(reg.test(target.value)){
        div.classList.remove("danger");
        div.classList.add("correct");
        div.innerHTML = `<i class='fa-regular fa-circle-check'></i> ${correctMsg}`;
        check = true;
    }else{
        div.innerHTML = "";
    }
}
///////////// check events ///////////////////
nameInput.addEventListener("input",function({target}){
    checkInput(target,nameErr,nameReg,"Name must be 3–20 English letters only. Spaces are allowed but not at the beginning or end.","Correct user name");
});
emailInput.addEventListener("input",function({target}){
    checkInput(target,emailErr,emailReg,"Please enter a valid email address that contains @ and ends with .com" , "correct email");
});
pass.addEventListener("input",function({target}){
    checkInput(target,passErr,passReg,"Password must be 6–12 characters (letters and numbers only, no spaces or special characters)." , "password accenpted");
})
rePass.addEventListener("input",function({target}){
    if(!(target.value == pass.value)){
        rePassErr.innerHTML = `<i class='fa-regular fa-circle-xmark'></i> wrong password`;
        rePassErr.classList.add("danger");
        rePassErr.classList.remove("correct");
    }else{
        rePassErr.innerHTML = `<i class='fa-regular fa-circle-check'></i> password confirmed`;
        rePassErr.classList.remove("danger");
        rePassErr.classList.add("correct");
    }
})
//////////// lock change ///////////
function lockChang(target,div){
    target.classList.toggle("fa-lock-open");
    target.classList.toggle("fa-lock");
    if(target.classList.contains("fa-lock")){        
        div.setAttribute("type","password");
    }else{
        div.setAttribute("type","text");
    }
}
passLock.addEventListener("click",function({target}){
    lockChang(target,pass)
})
rePassLock.addEventListener("click",function({target}){
    lockChang(target,rePass)

})
submit.addEventListener("click",function(e){
    e.preventDefault();
    let find = users.findIndex((el)=>{
        return el.email == emailInput.value
    })
    if(find == -1){
        if( check && nameInput.value && pass.value && rePass.value && emailInput.value ){
            let user = {
                userName : nameInput.value,
                email : emailInput.value,
                pass : pass.value
            }
            users.push(user);
            let jsonUsers = JSON.stringify(users);
            localStorage.users = jsonUsers;
            location.assign("login.html");
        }
    }else{
        alert("e-mail exicte");
    }    
})