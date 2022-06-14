"use strict";

//Variables
var interval;
var both = 0;
var random = Math.floor(Math.random() * 360); //Query Selectors

var player = document.querySelector(".game__player");
var game = document.querySelector(".game"); //Platforms

var platform = document.createElement("div");
var hole = document.createElement("div");
platform.setAttribute("class", "platform");
hole.setAttribute("class", "hole");
game.appendChild(platform);

hole.style.left = random + //Movement Functions
function movementLeft() {
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

  if (left > 0) {
    player.style.left = left - 2 + "px";
  }
};

function movementRight() {
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

  if (left < 380) {
    player.style.left = left + 2 + "px";
  }
} //Event Listener for motion


document.addEventListener("keydown", function (event) {
  if (both == 0) {
    both++;

    if (event.key === "ArrowLeft") {
      interval = setInterval(movementLeft, 1);
    }

    if (event.key === "ArrowRight") {
      interval = setInterval(movementRight, 1);
    }
  }
}); //Clearing the Event listener

document.addEventListener("keyup", function (event) {
  clearInterval(interval);
  both = 0;
});