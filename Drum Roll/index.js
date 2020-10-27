let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    let key = drums[i].innerHTML.toUpperCase();
    playSound(key);
    animateButton(key);
  });
}

document.addEventListener("keyup", function (event) {
  let key = event.key.toUpperCase();
  playSound(key);
  animateButton(key);
});

function playSound(key) {
  let drumsSound = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
  ];
  let drumSoundPos = -1;
  switch (key) {
    case "W":
      drumSoundPos = 0;
      break;
    case "A":
      drumSoundPos = 1;
      break;
    case "S":
      drumSoundPos = 2;
      break;
    case "D":
      drumSoundPos = 3;
      break;
    case "J":
      drumSoundPos = 4;
      break;
    case "K":
      drumSoundPos = 5;
      break;
    case "L":
      drumSoundPos = 6;
      break;
    default:
      break;
  }
  if (drumSoundPos >= 0 && drumSoundPos <= 6) {
    let drumAudio = new Audio(drumsSound[drumSoundPos]);
    drumAudio.play();
  }
}

// Key Press Animation
function animateButton(key) {
  key = key.toLowerCase();
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
