
var userData = JSON.parse((localStorage.getItem("high-scores"))); 
console.log(localStorage.getItem("high-scores"))
var highscoreEl = document.getElementById("#highscores"); 
var li1 = document.createElement("li"); ///create li 
//append li
console.log("did local store work?" + userData )
highscoreEl.appendChild(li1);  
li1.innerHTML = userData; 
