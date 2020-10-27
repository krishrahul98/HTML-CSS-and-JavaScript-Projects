function myFunction() {
  let imageFolderLocation = "images/"; //Image location Folder

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let currentDiceImage1 = `dice${randomNumber1}.png`;
  let firstDiceImagePath = imageFolderLocation + currentDiceImage1;

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let currentDiceImage2 = `dice${randomNumber2}.png`;
  let secondDiceImagePath = imageFolderLocation + currentDiceImage2;

  //Changing first dice image
  document.querySelector(".img1").setAttribute("src", firstDiceImagePath);

  //Changing second dice image
  document.querySelector(".img2").setAttribute("src", secondDiceImagePath);

  let title = document.querySelector("h1");

  if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 Wins!";
  } else {
    title.innerHTML = "Player 2 Wins! 🚩";
  }
}

window.onload = function () {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    sessionStorage.removeItem("reloading");
    myFunction();
  } else {
    sessionStorage.setItem("reloading", "true");
  }
};
