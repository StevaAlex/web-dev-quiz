var ansAndQues = [ 
    { 
        question:"What language is used to form the main body of your code?",
        choices: ["html", "CSS", "Javascript"],
        answer: "html"
     }, 
    { 
        question:"What language is used to style your code only?",
        choices: ["html", "CSS", "Javascript"],
        answer: "CSS"
     }, 
    { 
        question:"What language is used to form the make your code dynamic and interactive?",
        choices: ["html", "CSS", "Javascript"],
        answer: "Javascript"
     }, 
    { 
        question:"In a for loop, how would I increment i by 1? ",
        choices: ["i++", "i--", "i1"],
        answer: "i++"
     }, 
    { 
        question:"What would be another way of declaring the variable, var dog = 'woof'; ",
        choices: ["let dog = 'woof'", "make dog = 'woof'", "say dog = 'woof'"],
        answer: "let dog = 'woof'"
     },
    { 
        question:"What does DOM stand for? ",
        choices: ["Data Object Model", "Domain Obsidian Maker", "Document Object Model"],
        answer: "Document Object Model"
     },
     { 
        question:"In an array named 'arr', the item arr[1] represents which array item?",
        choices: ["The first item", "The second item", "The third item"],
        answer: "The second item"
     },
     { 
        question:"In a for loop, how would I increment i by 1?",
        choices: ["i++", "i--", "i1"],
        answer: "i--"
     }
    
];

var startButton = document.getElementById("start"); 
var timerElement = document.querySelector("#time"); 
var questionChoices = document.querySelectorAll(".choices") //unsure if to select the choices class  
var startTime = 100 

function setCounter () { 
    timerElement.textContent = startTime;
};  

 function setTime() { 
    var timerInterval = setInterval(function(){ 
        startTime--;
        setCounter(); //updates the start time every every decrement
        if (startTime === 0) {  //needs to be inside function curly brackets
            clearInterval(timerInterval);//should stop timer when it gets to zero
        }
    }, 1000);  
 };


startButton.addEventListener("click", function(){
    setCounter();
    setTime(); 

})