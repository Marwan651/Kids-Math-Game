let isPlaying = false;
let box1 = false;
let box2 = false;
let box3 = false;
let box4 = false;
let score = 0;
let timer = 60;

let num1, num2;
let answer, c1, c2, c3;
let answers = [];

const timeRemainnigBox = document.getElementById("timeRemainnig");
const gameOverBox = document.getElementById("gameOver");
const trueBox = document.getElementById("true");
const wrongBox = document.getElementById("wrong");

const finalScoreText = document.getElementById("finalScore");
const timerText = document.getElementById("time");
const scoreValueText = document.getElementById("scoreValue");
const questionText = document.getElementById("question");

const startGameButton = document.getElementById("start");
const box1Button = document.getElementById("box1");
const box2Button = document.getElementById("box2");
const box3Button = document.getElementById("box3");
const box4Button = document.getElementById("box4");

startGameButton.onclick = playGame;
box1Button.onclick = checkChoice1;
box2Button.onclick = checkChoice2;
box3Button.onclick = checkChoice3;
box4Button.onclick = checkChoice4;

const gameOverAudio = new Audio("game-over.mp3");
const correctAudio = new Audio("correct.mp3");
const wrongAudio = new Audio("wrong.mp3");

const buttons = [
  {
    "button text": "Start Game",
    "button function": playGame,
    isPlaying: false,
  },
  {
    "button text": "Reset Game",
    "button function": resetGame,
    isPlaying: true,
  },
];

function updateButtons(buttons) {
  startGameButton.innerHTML = buttons["button text"];
  startGameButton.onclick = buttons["button function"];
  isPlaying = buttons.isPlaying;
}

function resetGame() {
  updateButtons(buttons[0]);
  questionText.innerHTML = "";
  box1Button.innerHTML = "";
  box2Button.innerHTML = "";
  box3Button.innerHTML = "";
  box4Button.innerHTML = "";
  timeRemainnigBox.style.display = "none";
  gameOverBox.style.display = "none";
  timer = 60;
  score = 0;
  timerText.innerHTML = 60;
  scoreValueText.innerHTML = 0;
  clearTimeout(myCounter);
}

function playGame() {
  if (isPlaying === false) {
    myCounter = setInterval(timeRemainnig, 1000);
  }
  timeRemainnigBox.style.display = "block";
  updateButtons(buttons[1]);
  generateQuestion();
  shuffleArray(answers);
  questionText.innerHTML = num1 + " x " + num2;
  box1Button.innerHTML = answers[0];
  box2Button.innerHTML = answers[1];
  box3Button.innerHTML = answers[2];
  box4Button.innerHTML = answers[3];
  if (answers[0] === correctAnswer) {
    box1 = true;
  } else if (answers[1] === correctAnswer) {
    box2 = true;
  } else if (answers[2] === correctAnswer) {
    box3 = true;
  } else if (answers[3] === correctAnswer) {
    box4 = true;
  }
}

function generateQuestion() {
  num1 = Math.ceil(Math.random() * 9);
  num2 = Math.ceil(Math.random() * 9);
  correctAnswer = num1 * num2;
  while (
    correctAnswer === c1 ||
    correctAnswer === c2 ||
    correctAnswer === c3 ||
    c1 === c2 ||
    c1 === c3 ||
    c2 === c3
  ) {
    c1 = Math.ceil(Math.random() * 9) * Math.ceil(Math.random() * 9);
    c2 = Math.ceil(Math.random() * 9) * Math.ceil(Math.random() * 9);
    c3 = Math.ceil(Math.random() * 9) * Math.ceil(Math.random() * 9);
  }
  answers = [correctAnswer, c1, c2, c3];
}

function shuffleArray(array) {
  let len = array.length;
  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
    let randIndex = Math.floor(Math.random() * (currentIndex + 1));
    var temp = array[currentIndex];
    array[currentIndex] = array[randIndex];
    array[randIndex] = temp;
  }
}

function checkChoice1() {
  if (isPlaying === true) {
    if (box1 === true) {
      trueBox.style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box1 = false;
      correctAudio.play();
      playGame();
    } else {
      wrongBox.style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}
function checkChoice2() {
  if (isPlaying === true) {
    if (box2 === true) {
      trueBox.style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box2 = false;
      correctAudio.play();
      playGame();
    } else {
      wrongBox.style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}
function checkChoice3() {
  if (isPlaying === true) {
    if (box3 === true) {
      trueBox.style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box3 = false;
      correctAudio.play();
      playGame();
    } else {
      wrongBox.style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}
function checkChoice4() {
  if (isPlaying === true) {
    if (box4 === true) {
      trueBox.style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box4 = false;
      correctAudio.play();
      playGame();
    } else {
      wrongBox.style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}

function incScore() {
  score++;
  scoreValueText.innerHTML = score;
}

function timeRemainnig() {
  if (timer === 1) {
    clearInterval(myCounter);
    isPlaying = false;
    showResult();
  }
  timer--;
  timerText.innerHTML = timer;
}

function hideTrue() {
  trueBox.style.display = "none";
}

function hideFalse() {
  wrongBox.style = "none";
}

function showResult() {
  gameOverBox.style.display = "block";
  finalScoreText.innerHTML = scoreValueText.innerHTML;
  gameOverAudio.play();
  startConfetti();
}
