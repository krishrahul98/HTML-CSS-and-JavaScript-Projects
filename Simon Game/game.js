let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let isStarted = false;
let level = 1;
let highestScore = 0;

//Generate Sequence for Game
function nextSequence() {
  userClickedPattern = []; //Reset User Pattern
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);
  $("h1").text(`Level ${level}`);
  level++;
}

// Event Listeners for button
$(".btn").click(function () {
  if (!isStarted) return;
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// Press Key to Start Game
$(document).keyup(function () {
  if (!isStarted) {
    isStarted = true;
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      highestScore = Math.max(highestScore, level - 1);
      $("#highest-score").text(`Highest Score: ${highestScore}`);
      setTimeout(nextSequence, 1000);
    }
  } else {
    gameOver();
  }
}
function gameOver() {
  let wrongSound = new Audio("sounds/wrong.mp3");
  wrongSound.play();
  $("body").addClass("game-over");
  $("h1").text("Game Over, Press Any Key to Restart");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  isStarted = false;
  gamePattern = [];
  level = 1;
}

function playSound(name) {
  let gameAudio = new Audio(`sounds/${name}.mp3`);
  gameAudio.play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
}
