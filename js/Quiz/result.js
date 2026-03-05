const resultScore = document.querySelector(".result-score span");
const resultMsg = document.querySelector(".result-msg");
const historyDiv = document.querySelector(".userHistory");
const scoreSpan = document.querySelector(".result-score span");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let usersHistorey =  JSON.parse(localStorage.usersHistorey) ;
let totalScore = currentUser.perviseQuizs[0].score;

if(totalScore >= 0.5){
    scoreSpan.classList.add("success");
}else{
    scoreSpan.classList.add("fail");
}
// console.log(usersHistorey);
// let find = usersHistorey.findIndex((u)=>{
//     return u.userEmail == currentUser.userEmail
// })


resultScore.textContent = `${totalScore*100} %`;
if(totalScore > .9){
    resultMsg.textContent = "Great job";
}else if(totalScore > .75){
    resultMsg.textContent = "very good job";
}else if(totalScore >= .5){
    resultMsg.textContent = "Good job";
}else{
    resultMsg.textContent = "faild";
}
// console.log(usersHistorey[find].perviseQuizs);

currentUser.perviseQuizs.forEach((e , i) => {    
    const quizDiv = document.createElement("div");
    quizDiv.innerHTML = `
        <span>no ${i+1}</span>
        <span>category : ${e.category}</span>
        <span>Score : ${e.score * 100} %</span>
    `
        const scoreText = quizDiv.querySelector("span:last-child");

    if(e.score >= 0.5){
        scoreText.classList.add("success");
    }else{
        scoreText.classList.add("fail");
    }
    historyDiv.appendChild(quizDiv);
});


