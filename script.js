

var timerEl = document.getElementById("countdown");

var startBox = document.getElementById('startBox')
var quizBox = document.getElementById('quizBox')
var message = document.getElementById("message")
var userInitialsBox = document.getElementById('userInitialsBox')
var highscoresBox = document.getElementById('highscoresBox')

var timerEl = document.getElementById('timer');
var startButton = document.getElementById('startBtn');

var quizQuestions = 
[
  {
    question: "What is Michael Scott's middle name?",
    choices: ["Larry", "Brian", "Gary", "James"],
    correctAnswer: 2
  },
  
  {
    question: "Where does The Office take place?",
    choices: ["Los Angeles", "Scranton", "Miami", "New York"],
    correctAnswer: 1
  },
  {
   question: "What size Chicken pot-pie does Michael eat?",
   choices: ["Small", "Regular", "Large", "Family-Size"],
   correctAnswer: 3
  },
  {
    question: "What season does the Dinner Party episode take place?",
    choices: ["Season 1", "Season 5", "Season 3", "Season 4"],
    correctAnswer: 3
  },
  {
    question: "Where does Jim propose to Pam?",
    choices: ["Breakroom", "Gas Station", "Parking Lot", "Restaurant"],
    correctAnswer: 1
  }
];
var quizIndex = 0
var score;

startButton.addEventListener('click', () => {
    startBox.classList.add("hide")
    quizBox.classList.remove("hide")

    askQuestion();
    startCountdown();
});
function askQuestion() {
    if (quizIndex < quizQuestions.length) {
        quizBox.innerHTML = ""
        var questionObj = quizQuestions[quizIndex]

        var questionEl = document.createElement("div")
        questionEl.textContent = questionObj.question
        quizBox.appendChild(questionEl)

        for (var choice of questionObj.choices) {             
            var btn = document.createElement("button")
            btn.textContent = choice
            btn.addEventListener("click", handleChoice)
            quizBox.appendChild(btn)
        }
    } else {
        
        endGame();
    }
    function handleChoice(event) {
        var chosen = event.target.value;
        if (chosen !== quizQuestions[quizIndex].correctAnswer) {
            timeLeft = timeLeft - 10;
        }
        
        quizIndex++;
        askQuestion()
}

function endGame () {
    clearInterval(timeInterval)
    timerEl.style.display = "none"
    
    quizBox.classList.add("hide")
    userInitialsBox.classList.remove("hide")
    highscoresBox.classList.remove("hide")
    score = timeLeft;

    highscoresBox.innerHTML = ""
    
    var highScoresEl = document.createElement("div")
    highScoresEl.textContent = "Your score is: " + score
    highscoresBox.appendChild(highScoresEl)

   
    userInitialsBox.innerHTML = ""
    var initialsEl = document.createElement("input")
    initialsEl.type = ("form")
    userInitialsBox.appendChild(initialsEl)

    var submit = document.createElement("button")
    submit.textContent = "Submit"
    userInitialsBox.appendChild(submit)

    submit.addEventListener("click", submitScore)
}



    
}
var timeLeft;
var timeInterval;

function startCountdown() {
    timeLeft = 60;
    timeInterval = setInterval(function () {
        timerEl.textContent = "Timer: " + timeLeft;
        timeLeft--;
      if (timeLeft < 1) {
            timerEl.textContent = 'Time is up!';
            clearInterval(timeInterval);
        }

    }, 1000);
}

var initialsEl;
function endGame () {
    
    clearInterval(timeInterval)
    timerEl.style.display = "none"
    
    quizBox.classList.add("hide")
    userInitialsBox.classList.remove("hide")
    highscoresBox.classList.remove("hide")
    
    score = timeLeft;

    highscoresBox.innerHTML = ""
    const highScoresEl = document.createElement("div")
    highScoresEl.textContent = "Your score is: " + score
    highscoresBox.appendChild(highScoresEl)

    userInitialsBox.innerHTML = ""
    initialsEl = document.createElement("input")
    initialsEl.setAttribute("id", "user-initials")
    userInitialsBox.appendChild(initialsEl)

    const submit = document.createElement("button")
    submit.textContent = "Submit"
    userInitialsBox.appendChild(submit)

    submit.addEventListener("click", submitScore)
}

function submitScore() {
    var inputInitials = document.querySelector("#user-initials").value;
    localStorage.setItem("initials", inputInitials)
}




