const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame(){
  startButton.classList.add('hide');
  shuffledQuestions = question.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion()
}

function setNextQuestion(){
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if(answer.correct){
          button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answersButtonsElement.appendChild(button)
  });
}

function resetState(){
    nextButton.classList.add('hide')
    while (answersButtonsElement.firstChild){
        answersButtonsElement.removeChild(answersButtonsElement.firstChild)
    }
}

function selectAnswer(e){
const selectButton = e.target
const correct = selectButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answersButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
 });
 if (shuffledQuestions.length > currentQuestionIndex + 1){
     nextButton.classList.remove('hide')
 }else{
     startButton.innerText = 'Restart' 
     startButton.classList.remove('hide')
 }
 
}

function setStatusClass(element, correct){
    clearSrarusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearSrarusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: '高齢化率何パーセントから高齢社会？',
        answers:[
            {text: '14%', correct: true},
            {text: '20 %', correct: false},
            {text: '100%', correct: false},
            {text: '9%', correct: false}
        ]
    },
    {
        question: '水の原子表記',
        answers:[
            {text: 'HO₂', correct: false},
            {text: 'H₂0', correct: true},
            {text: 'OH₂', correct: false},
            {text: '₂HO', correct: false}
        ]
    },
    {
        question: '"明日は雨が降ります"を英語に',
        answers:[
            {text: 'rain tomorrow', correct: false},
            {text: 'it will rain tomorrow', correct: true},
            {text: 'it rained tomorrow', correct: false},
            {text: 'it rained yesterday', correct: false}
        ]
    },
    {
        question: '3x + 5x =',
        answers:[
            {text: '25x', correct: false},
            {text: '15x', correct: false},
            {text: '8x', correct: true},
            {text: '35x', correct: false}
        ]
    }
]