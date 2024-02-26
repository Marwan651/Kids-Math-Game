var counter = document.getElementById("time");
var x = 60;
var isPlaying = false;
var box1 = false;
var box2 = false;
var box3 = false;
var box4 = false;
var score = 0;

const gameOverAudio = new Audio("game-over.mp3");
const correctAudio = new Audio("correct.mp3");
const wrongAudio = new Audio("wrong.mp3");

function start() {
  if (isPlaying == false) {
    isPlaying = true;
    document.getElementById("timeRemainnig").style.display = "block";
    document.getElementById("start").innerHTML = "Reset Game";
    myCounter = setInterval(timeRemainnig, 1000);
    playGame();
  } else {
    isPlaying = false;
    document.getElementById("timeRemainnig").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("start").innerHTML = "Start Game";
    clearTimeout(myCounter);
    document.getElementById("time").innerHTML = 60;
    x = 60;
    score = 0;
    document.getElementById("scoreValue").innerHTML = 0;
  }
}

function playGame() {
  var num1 = Math.ceil(Math.random() * 9);
  var num2 = Math.ceil(Math.random() * 9);
  var answer = num1 * num2;
  var c1 = Math.ceil(Math.random() * 9) * Math.ceil(Math.random() * 9);
  var c2 = Math.ceil(Math.random() * 9) * Math.ceil(Math.random() * 9);
  var c3 = Math.ceil(Math.random() * 9) * Math.ceil(Math.random() * 9);
  var arr = [answer, c1, c2, c3];
  console.log(arr);
  shuffleArray(arr);
  console.log(arr);
  document.getElementById("question").innerHTML = num1 + " x " + num2;
  document.getElementById("box1").innerHTML = arr[0];
  document.getElementById("box2").innerHTML = arr[1];
  document.getElementById("box3").innerHTML = arr[2];
  document.getElementById("box4").innerHTML = arr[3];
  if (arr[0] == answer) {
    box1 = true;
  }
  if (arr[1] == answer) {
    box2 = true;
  }
  if (arr[2] == answer) {
    box3 = true;
  }
  if (arr[3] == answer) {
    box4 = true;
  }
}

function checkChoice1() {
  if (isPlaying == true) {
    if (box1 == true) {
      document.getElementById("true").style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box1 = false;
      correctAudio.play();
      playGame();
    } else {
      document.getElementById("wrong").style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}
function checkChoice2() {
  if (isPlaying == true) {
    if (box2 == true) {
      document.getElementById("true").style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box2 = false;
      correctAudio.play();
      playGame();
    } else {
      document.getElementById("wrong").style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}
function checkChoice3() {
  if (isPlaying == true) {
    if (box3 == true) {
      document.getElementById("true").style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box3 = false;
      correctAudio.play();
      playGame();
    } else {
      document.getElementById("wrong").style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}
function checkChoice4() {
  if (isPlaying == true) {
    if (box4 == true) {
      document.getElementById("true").style.display = "block";
      setTimeout(hideTrue, 1500);
      incScore();
      box4 = false;
      correctAudio.play();
      playGame();
    } else {
      document.getElementById("wrong").style.display = "block";
      wrongAudio.play();
      setTimeout(hideFalse, 1500);
    }
  }
}

function incScore() {
  score++;
  document.getElementById("scoreValue").innerHTML = score;
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

function timeRemainnig() {
  if (x == 0) {
    clearInterval(myCounter);
    isPlaying = false;
    showResult();
  }
  x--;
  counter.innerHTML = x;
}

function hideTrue() {
  document.getElementById("true").style.display = "none";
}

function hideFalse() {
  document.getElementById("wrong").style = "none";
}

function showResult() {
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("finalScore").innerHTML =
    document.getElementById("scoreValue").innerHTML;
  gameOverAudio.play();
  startConfetti();
}
