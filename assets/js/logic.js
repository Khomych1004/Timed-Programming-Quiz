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

//last page
function openEndScreen() {

    finalScore.textContent = timeBlock.textContent;
  
    clearInterval(timerID);
  
    questionsScreen.style.display = 'none';
    endScreen.style.display = 'block';
  
    endScreen.append(line);
    endScreen.append(p);
  
  };
  
//function to move to next question
function nextQuestionScreen(answer) {

    questionsScreen.append(line);
    questionsScreen.append(p);
  
    //display the answer within one second
    pauseAnswer(answer);
  
    //examination. If there are no questions left, open the last page
    if (questionNumber < numberQuestions - 1) {
  
      questionNumber++;
      logic();
  
    } else {
  
      openEndScreen();
  
    }
  };
  
//shows the answer within one second
function pauseAnswer(text) {

    clearTimeout(pauseId);
  
    p.textContent = text;
    line.style.display = 'block';
  
    pauseId = setTimeout(function () {
      //clearing response
      p.textContent = "";
      line.style.display = 'none';
  
    }, 1000);
  };
  
//check for correct answer
function checkingAnswer(correctAnswer, selectedAnswer) {
  
    var myAudio;
  
    if (correctAnswer == selectedAnswer) {
  
      myAudio = new Audio('./assets/sfx/correct.wav');
      myAudio.play();
  
      return "Correct!";
  
    } else {
  
      myAudio = new Audio('./assets/sfx/incorrect.wav');
      myAudio.play();
  
      time = time - 10;
  
      return "Wrong!";
    }
  };
  
//creating an answer option button
function createButton(id, text) {

    let button = document.getElementById(id);
    var str = `${id + 1 + '. '}`;
  
    if (button) {
  
      button.textContent = str + text;
  
    } else {
  
      //creating a button with an answer option
      button = document.createElement('button');
      button.id = id;
      button.textContent = str + text;
  
      //handler for clicking the response button, checking the response
      button.addEventListener('click', function () {
  
        var answer = "";
  
        //check for correct answer
        answer = checkingAnswer(helpersQuestions.checkingAnswer(questionNumber), this.id);
  
        //move to next question
        nextQuestionScreen(answer);
  
      });
  
      //adds a button with an answer option to the screen
      choices.append(button);
    }
  };
  
  //game time countdown starts
  function startTime() {
  
    clearInterval(timerID);
    --time;
  
    timerID = setInterval(function () {
  
      if (time < 10) {
  
        if (time < 0) {
  
          timeBlock.textContent = "00";
          openEndScreen();
  
        } else {
  
          timeBlock.textContent = "0" + time--;
  
        }
      } else {
  
        timeBlock.textContent = time--;
  
      }
    }, 1000);
  };
  
  //displays the question and answer options
  function logic() {
  
    //question
    questionsScreen.querySelector('#question-title').textContent = helpersQuestions.getQuestion(questionNumber);
    //answer options
    helpersQuestions.getAnswer(questionNumber).forEach((answer, idx) => createButton(idx, answer));
  
  };
  
  //function processing by pressing the start button
  btnStart.addEventListener('click', function () {
  
    timeBlock.textContent = time;
  
    startTime();
  
    startScreen.style.display = 'none';
    questionsScreen.style.display = 'block';
  
    logic();
  
  });
  
