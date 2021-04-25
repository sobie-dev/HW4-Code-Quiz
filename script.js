var startBtn = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById ("answer-buttons")
var timerEl = document.getElementById("countdown");

var questions = 
[
  {
    question: "What is Michael Scott's middle name?",
    choices: ["Larry", "Brian", "Gary", "James"],
    answer: 2
  },
  
  {
    question: "Where does The Office take place?",
    choices: ["Los Angeles", "Scranton", "Miami", "New York"],
    answer: 1
  },
  {
   question: "What size Chicken pot-pie does Michael eat?",
   choices: ["Small", "Regular", "Large", "Family-Size"],
   answer: 3
  },
  {
    question: "What season does the Dinner Party episode take place?",
    choices: ["Season 1", "Season 5", "Season 3", "Season 4"],
    answer: 3
  },
  {
    question: "Where does Jim propose to Pam?",
    choices: ["Breakroom", "Gas Station", "Parking Lot", "Restaurant"],
    answer: 1
  }
];
startBtn.addEventListener("click", startGame)

function startGame() {
    startBtn.classList.add("hide")
    questionContainerEl.classList.remove("hide")
    
}
    

function showQuestions(question) {
  questionEl.innerText = question.question
}
function selectAnswer() {
    
}


function countdown() {
  var timeLeft = 60;

  
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
countdown();






