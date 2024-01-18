const startScreen = document.querySelector('#start-screen');
const endScreen = document.querySelector('#end-screen');
const questionsScreen = document.querySelector('#questions');
const btnStart = startScreen.querySelector('#start');


btnStart.addEventListener('click', function(){
    //startScreen.setAttribute("style", "display: none");
    //questionsScreen.setAttribute("style", "display: block");

    startScreen.style.display = 'none';
    questionsScreen.style.display = 'block';
    
    questionsScreen.querySelector('#question-title').textContent = questions[0].question;
});
