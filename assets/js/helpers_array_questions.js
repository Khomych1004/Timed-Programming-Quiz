const helpersQuestions = {
    //function that returns the number of questions
    getNumberQuestions: function () {
        return questions.length;
    },
    //function that returns a question from an array of questions
    getQuestion: function (questionNumber) {
        return questions[questionNumber].question;
    },
    //function that returns an array of answers to a question
    getAnswer: function (questionNumber) {
        return questions[questionNumber].answers;
    },
    //function that returns the correct answer number to a question
    checkingAnswer: function (questionNumber) {
        return questions[questionNumber].correct;
    }
};