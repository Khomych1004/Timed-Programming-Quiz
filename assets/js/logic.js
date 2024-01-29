const startScreen = document.querySelector('#start-screen');
const questionsScreen = document.querySelector('#questions');
const endScreen = document.querySelector('#end-screen');
const choices = document.querySelector('#choices');
const timeBlock = document.querySelector('#time');
const finalScore = document.querySelector('#final-score');
const btnSubmit = document.querySelector('#submit');
const initials = document.querySelector('#initials');
const btnStart = startScreen.querySelector('#start');

let line = document.createElement('hr')
let p = document.createElement('p')

var time = 75;
var timerID;
var pauseId;
var questionNumber = 0;
var numberQuestions = helpersQuestions.getNumberQuestions();

var players = [];

btnStart.addEventListener('click', function(){
    //startScreen.setAttribute("style", "display: none");
    //questionsScreen.setAttribute("style", "display: block");

    startScreen.style.display = 'none';
    questionsScreen.style.display = 'block';
    
    questionsScreen.querySelector('#question-title').textContent = questions[0].question;
});
