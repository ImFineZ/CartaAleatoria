/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const valor = [
    "J",
    "Q",
    "K",
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ];
  const simbolos = ["♦", "♥", "♠", "♣"];
  const randomSimbols = Math.floor(Math.random() * 4);
  let random = Math.floor(Math.random() * 13);
  if (simbolos[randomSimbols] == "♥" || simbolos[randomSimbols] == "♦") {
    document.querySelector("#simb1").style.color = "red";
    document.querySelector("#simb2").style.color = "red";
  }
  document.querySelector("#numSimb").append(valor[random]);
  document.querySelector("#simb1").append(simbolos[randomSimbols]);
  document.querySelector("#simb2").append(simbolos[randomSimbols]);
};
