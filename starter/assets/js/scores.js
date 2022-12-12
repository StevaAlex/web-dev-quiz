
var userData = JSON.parse(localStorage.getItem("high-scores")); 
var highscoreEl = document.getElementById("#highscores"); 
var li1 = document.createElement("li"); ///create li 
//append li
console.log("did local store work?" + userData )
li1.innerHTML = userData;
highscoreEl.appendChild(li1); 
