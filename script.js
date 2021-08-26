"use strict";
let winner = "computer";
const choices = ["rock", "paper", "scissors"];
let computerChoice;
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
  }

  if (computerChoice == "paper") {
    document.querySelector("#player2").classList.add("paper");
  }

  if (computerChoice == "scissors") {
    document.querySelector("#player2").classList.add("scissors");
  }
  /* if  */
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
  } else {
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
