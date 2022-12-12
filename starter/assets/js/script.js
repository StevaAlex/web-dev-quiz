var ansAndQues = [
    {
        question: "What language is used to form the main body of your code?",
        choices: ["HTML", "CSS", "Javascript"],
        answer: "HTML"
    },
    {
        question: "What language is used to style your code only?",
        choices: ["HTML", "CSS", "Javascript"],
        answer: "CSS"
    },
    {
        question: "What language is used to form the make your code dynamic and interactive?",
        choices: ["HTML", "CSS", "Javascript"],
        answer: "Javascript"
    },
    {
        question: "In a for loop, how would I increment i by 1? ",
        choices: ["i++", "i--", "i1"],
        answer: "i++"
    },
    {
        question: "What would be another way of declaring the variable, var dog = 'woof'; ",
        choices: ["let dog = 'woof'", "make dog = 'woof'", "say dog = 'woof'"],
        answer: "let dog = 'woof'"
    },
    {
        question: "What does DOM stand for? ",
        choices: ["Data Object Model", "Domain Obsidian Maker", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        question: "In an array named 'arr', the item arr[1] represents which array item?",
        choices: ["The first item", "The second item", "The third item"],
        answer: "The second item"
    },
    {
        question: "In a for loop, how would I decrement i by 1?",
        choices: ["i++", "i--", "i1"],
        answer: "i--"
    }

];

var startButton = document.getElementById("start");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices") //
var openText = document.querySelector(".start");
var startTime = 30;
var questionsElement = document.querySelector("#questions"); //selects title 
var questionTitle = document.querySelector("#question-title");
var endText = document.querySelector("#end-screen");
var finalScoreEl = document.querySelector("#final-score");
var submitBtn = document.querySelector("#submit");
var initalInput = document.querySelector("#initials");
var endScreenTitle = document.querySelector("h2");
var saveScore = [" "]; //empty array to store the scores
//create score tracker 
var scoreTracker = 0; //start score at zerto

var i = 0;

questionTitle.innerHTML += " ";//using innerHTML, it allows you to add text to an empty div/tag

//create 3 buttons under choices 
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
//append buttons to the choices section
questionChoices.appendChild(button1);
questionChoices.appendChild(button2);
questionChoices.appendChild(button3);





function setCounter() {
    timerElement.textContent = startTime;
};
var timerInterval;
function setTime() {
    timerInterval = setInterval(function () {
        startTime--;
        setCounter(); //updates the start time every every decrement
        if (startTime <= 0) {  //needs to be inside function curly brackets
            clearInterval(timerInterval);//should stop timer when it gets to zero 
            endScreen();
        }

    }, 1000);
};


startButton.addEventListener("click", function () {
    setCounter();//run function to set time
    setTime();//run interval timer
    openText.textContent = " ";//clears start button and and start text
    questionsElement.setAttribute("class", "show");
    questionSelection();

});



function questionSelection() {
    questionTitle.textContent = ansAndQues[i].question
    button1.textContent = ansAndQues[i].choices[0] //consider for loop
    button2.textContent = ansAndQues[i].choices[1]
    button3.textContent = ansAndQues[i].choices[2]
    console.log("tracker so far: " + scoreTracker)
}



function endScreen() {
    finalScoreEl.innerHTML = scoreTracker;
    endText.setAttribute("class", "show");//change class to ''show' to show end screen
    questionsElement.setAttribute("class", "show");
    questionTitle.textContent = " ";
    button1.textContent = " ";
    button2.textContent = " "; //set choices and questions to blank
    button3.textContent = " ";
    clearInterval(timerInterval); //stops timer

};


questionChoices.addEventListener("click", function nextQuestion(event) {
    var answerChoice = event.target.textContent //selects the clicked on button
    var correctAnswer = ansAndQues[i].answer;//select the correct answer from the object for each[i]
    event.stopPropagation;
    //if button clicked matches the correct answer from the object increment i by 1 and increment score tracker by one
    if (answerChoice === correctAnswer) {
        console.log("Correct");
        i++;
        scoreTracker++;
        questionTitle.textContent = " ";//then clear the questions and choices button so the other question can be placed there
        button1.textContent = " ";
        button2.textContent = " ";
        button3.textContent = " ";
        questionSelection();//run question again with new i

    }
    else if (answerChoice !== correctAnswer) {
        console.log("Incorrect");
        i++;//if the button clicked does not match answer, then it is wrong, so decrement i by 1 and decrement remaining time by 5
        scoreTracker--;
        startTime -= 5;
        questionTitle.textContent = " ";
        button1.textContent = " ";
        button2.textContent = " ";
        button3.textContent = " ";
        questionSelection();//runs question again with new ii



    }
    if (i >= ansAndQues.length - 1) {//if i is greater than or equal to the length of the array, switch to end screen
        endScreen();
    }

})


var savedData;
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    savedData = {
        initData: initalInput.value,
        scoreData: scoreTracker
    } 

    window.localStorage.setItem("high-scores: ", JSON.stringify(savedData)) //store inital and score together,
    console.log("dose save score work: " + JSON.stringify(savedData));
}); //data is stored in an array


