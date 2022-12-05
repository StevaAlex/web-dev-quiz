var ansAndQues = [
    {
        question: "What language is used to form the main body of your code?",
        choices: ["html", "CSS", "Javascript"],
        answer: "html"
    },
    {
        question: "What language is used to style your code only?",
        choices: ["html", "CSS", "Javascript"],
        answer: "CSS"
    },
    {
        question: "What language is used to form the make your code dynamic and interactive?",
        choices: ["html", "CSS", "Javascript"],
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
        question: "In a for loop, how would I increment i by 1?",
        choices: ["i++", "i--", "i1"],
        answer: "i--"
    }

];

var startButton = document.getElementById("start");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices") //
var openText = document.querySelector(".start");
var startTime = 100
var questionsElement = document.querySelector("#questions"); //selects title 
var questionTitle = document.querySelector("#question-title");

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

function setTime() {
    var timerInterval = setInterval(function () {
        startTime--;
        setCounter(); //updates the start time every every decrement
        if (startTime === 0) {  //needs to be inside function curly brackets
            clearInterval(timerInterval);//should stop timer when it gets to zero 
            // openText;
        }
    }, 1000);
};


startButton.addEventListener("click", function () {
    setCounter();
    setTime();
    openText.textContent = " ";//clears start button and and start text
    questionsElement.setAttribute("class", "show");
    questionTitle.textContent = ansAndQues[0].question;///have first question pop up when start button clicked
    button1.textContent = ansAndQues[0].choices[0] //consider for loop
    button2.textContent = ansAndQues[0].choices[1]
    button3.textContent = ansAndQues[0].choices[2]

});
console.log(questionTitle);
//consider event bubbling stop here 
//if button clicked === answer: value { 
//     move to next question 
//     score++
// else { 
//score--; ......maybe 
//startTime--;
//}
// }
