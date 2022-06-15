"use strict";

//Variables
var interval;
var both = 0;
var counter = 0;
var currentPlatforms = []; //Query Selectors

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
  var platformLast = document.getElementById("platform" + (counter - 1));
  var holeLast = document.getElementById("hole" + (counter - 1));

  if (counter > 0) {
    var platformLastTop = parseInt(window.getComputedStyle(platformLast).getPropertyValue("top"));
    var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
  }

  if (platformLastTop < 400 || counter == 0) {
    var platform = document.createElement("div");
    platform.setAttribute("class", "platform");
    platform.setAttribute("id", "platform" + counter);
    platform.style.top = platformLastTop + 100 + "px";
    game.appendChild(platform);
    var random = Math.floor(Math.random() * 360);
    var hole = document.createElement("div");
    hole.setAttribute("class", "hole");
    hole.setAttribute("id", "hole" + counter);
    hole.style.left = random + "px";
    hole.style.top = holeLastTop + 100 + "px";
    game.appendChild(hole);
    currentPlatforms.push(counter);
    counter++;
  }

  for (var i = 0; i < currentPlatforms.length; i++) {
    var current = currentPlatforms[i];
    var iPlatform = document.getElementById("platform" + current);
    var ihole = document.getElementById("hole" + current);
    var iPlatformTop = parseFloat(window.getComputedStyle(iPlatform).getPropertyValue("top"));
    iPlatform.style.top = iPlatformTop - 0.5 + "px";
  }
}, 1);