const totalScore = localStorage.getItem("totalScore");
// console.log("dasd");
console.log(totalScore);
const resultScore = document.querySelector(".result-score span");
const resultMsg = document.querySelector(".result-msg");
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
