"use strict";
let winner = "computer";
const choices = ["rock", "paper", "scissors"];
let computerChoice;
let computerNumber;
let playerChoice;

window.addEventListener("load", start);

//start the game
function start() {
  console.log("start");

  document.querySelector(".rock").addEventListener("click", getPlayerChoice);
  document.querySelector(".paper").addEventListener("click", getPlayerChoice);
  document.querySelector(".scissors").addEventListener("click", getPlayerChoice);
}

//player choice
function getPlayerChoice() {
  console.log("getPlayerChoice");
  playerChoice = this.classList.value;
  console.log("Player chose " + playerChoice);
  /* if ((document.getElementsByClassName(".rock").clicked = true)) {
    console.log("You picked rock");
  } else if ((document.getElementsByClassName(".scissors").clicked = true)) {
    console.log("You picked scissors");
  } */

  makeRandomComputerChoice();
}

//computer choice
function makeRandomComputerChoice() {
  console.log("makeRandomcomputerChoice");
  computerNumber = Math.floor(Math.random() * 2);
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");
  document.querySelector("#player2").classList.add(choices[computerNumber]);

  if (computerNumber == 0) {
    computerChoice = "rock";
    console.log("Computer chose " + computerChoice);
  }

  if (computerNumber == 1) {
    computerChoice = "paper";
    console.log("Computer chose " + computerChoice);
  }

  if (computerNumber == 2) {
    computerChoice = "scissors";
    console.log("Computer chose " + computerChoice);
  }

  showAnimations();
}

//show animations
function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showResults);
  document.querySelector("#player2").addEventListener("animationend", showResults);
}

//show results
function showResults() {
  console.log("showResults");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  if (playerChoice == "rock") {
    document.querySelector("#player1").classList.add("rock");
  }

  if (playerChoice == "paper") {
    document.querySelector("#player1").classList.add("paper");
  }

  if (playerChoice == "scissors") {
    document.querySelector("#player1").classList.add("scissors");
  }

  if (computerChoice == "rock") {
    document.querySelector("#player2").classList.add("rock");
    /* document.querySelector("#player2").classList.remove("paper");
    document.querySelector("#player2").classList.remove("scissors"); */
  }

  if (computerChoice == "paper") {
    document.querySelector("#player2").classList.add("paper");
    /* document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("scissors"); */
  }

  if (computerChoice == "scissors") {
    document.querySelector("#player2").classList.add("scissors");
    /* document.querySelector("#player2").classList.remove("rock");
    document.querySelector("#player2").classList.remove("paper"); */
  }
  determineWinner();
}

//determine winner
function determineWinner() {
  console.log("determineWinner");

  if (playerChoice == "rock" && computerChoice == "paper") {
    showLoss();
  }

  if (playerChoice == "rock" && computerChoice == "scissors") {
    showWin();
  }

  if (playerChoice == "paper" && computerChoice == "rock") {
    showWin();
  }

  if (playerChoice == "paper" && computerChoice == "scissors") {
    showLoss();
  }

  if (playerChoice == "scissors" && computerChoice == "rock") {
    showLoss();
  }

  if (playerChoice == "scissors" && computerChoice == "paper") {
    showWin();
  } /* else {
    showDraw();
  } */

  if (playerChoice == "rock" && computerChoice == "rock") {
    showDraw();
  }

  if (playerChoice == "paper" && computerChoice == "paper") {
    showDraw();
  }

  if (playerChoice == "scissors" && computerChoice == "scissors") {
    showDraw();
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
}

function showLoss() {
  console.log("showLoss");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
}
