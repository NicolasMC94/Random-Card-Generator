/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let arrayNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let arrayCards = ["♦", "♥", "♠", "♣"];

  let numero = arrayNumbers[Math.floor(Math.random(arrayNumbers.length))];
  let palo = arrayCards[Math.floor(Math.random(arrayCards.length))];
};
