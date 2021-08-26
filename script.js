"use strict";
let winner = "computer";

window.addEventListener("load", start);

function start() {
  console.log("start");

  document.querySelector(".rock").addEventListener("click", getPlayerChoice);
  document.querySelector(".paper").addEventListener("click", getPlayerChoice);
  document.querySelector(".scissors").addEventListener("click", getPlayerChoice);
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("makeRandomcomputerChoice");
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showResults);
  document.querySelector("#player2").addEventListener("animationend", showResults);
}

function showResults() {
  console.log("showResults");
  /* if  */
  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");

  if (winner === "computer") {
    showLoss();
  } else if (winner === "user") {
    showWin();
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
