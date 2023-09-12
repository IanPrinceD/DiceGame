const player1 = "Player 1";
const player2 = "Player 2";
let player1Score = 0;
let player2Score = 0;
let rolls = 0;

function rollTheDice() {
  if (rolls >= 5) {
    determineWinner();
    return;
  }

  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomNum2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "Image/dice" + randomNum1 + ".png");

  document
    .querySelector(".img2")
    .setAttribute("src", "Image/dice" + randomNum2 + ".png");

  if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNum1 < randomNum2) {
    player2Score++;
    document.querySelector("h1").innerHTML = player2 + " WINS!";
  } else {
    player1Score++;
    document.querySelector("h1").innerHTML = player1 + " WINS!";
  }

  rolls++;
}

function determineWinner() {
  if (player1Score === player2Score) {
    document.querySelector("h2").innerHTML = "It's a Draw!";
  } else if (player1Score < player2Score) {
    document.querySelector("h2").innerHTML = player2 + " WINS the game!";
  } else {
    document.querySelector("h2").innerHTML = player1 + " WINS the game!";
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  rolls = 0;
  document.querySelector("h1").innerHTML = "roll d' dice";
  document.querySelector("h2").innerHTML = "";
  document.querySelector(".img1").setAttribute("src", "Image/dice1.png");
  document.querySelector(".img2").setAttribute("src", "Image/dice1.png");
}
