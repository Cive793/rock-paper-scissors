"use strict";
let winner = "computer";

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
  /* if  */
  determineWinner();
}

//determine winner
function determineWinner() {
  console.log("determineWinner");

  if (winner === "computer") {
    showLoss();
  } else if (winner === "user") {
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
