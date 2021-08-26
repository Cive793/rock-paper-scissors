"use strict";
let winner = "computer";

function start() {
  console.log("start");
  getPlayerChoice();
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
}

function showLoss() {
  console.log("showLoss");
}

function showDraw() {
  console.log("showDraw");
}
