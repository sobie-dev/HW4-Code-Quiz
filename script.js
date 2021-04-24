var startBtn = document.getElementById("start-btn")
var questionContainerEl = document.getElementById("question-container")
var questionEl = document.getElementById("#question")

var questions = [
    { question: "What is Michael Scott's middle name?",
      answers: [
          {text: "Larry", correct: false },
          {text: "Gary", correct: true },
          {text: "James", correct: false },
          {text: "Ryan", correct: false },
      ]  
    }
]
startBtn.addEventListener("click", startGame)

function startGame() {
    
}
function nextQuestion() {
    
}
function selectAnswer() {
    
}


var count = 60, timer = setInterval(function() {
$('#timer').html(count--);
if(count == 1) clearInterval(timer);
}, 1000);






