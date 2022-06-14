"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//Variables
var interval;
var both = 0;
var random = Math.floor(Math.random() * 360);
var counter = 0; //Query Selectors

var player = document.querySelector(".game__player");
var game = document.querySelector(".game"); //Movement Functions

function movementLeft() {
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

  if (left > 0) {
    player.style.left = left - 2 + "px";
  }
}

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
setInterval(function () {
  var platformLast = document.getElementById("block" + (counter - 1));
  var holeLast = document.getElementById("hole" + (counter - 1));

  if (counter > 0) {
    var platformLastTop = window.getComputedStyle(platfomrLast).getPropertyValue("top");
    var holeLastTop = window.getComputedStyle(holeLast).getPropertyValue("top");
  }

  ;
  var platform = document.createElement("div");
  platform.setAttribute("class", "platform");
  platform.setAttribute("id", "platform" + counter);
  game.appendChild(platform);
  var hole = document.createElement("div");
  hole.setAttribute("class", "hole");
  hole.setAttribute("id", "hole" + counter);
  hole.style.left = random + "px";
  game.appendChild(hole);
  _readOnlyError("counter"), counter++;
}, 1);