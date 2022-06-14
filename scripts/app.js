//Variables
var interval;
let both = 0;
const random = Math.floor(Math.random() * 360);

//Query Selectors
const player = document.querySelector(".game__player");
const game = document.querySelector(".game");

//Platforms
const platform = document.createElement("div");
const hole = document.createElement("div");
platform.setAttribute("class", "platform");
hole.setAttribute("class", "hole");
platform.setAttribute("id", "platform");
hole.setAttribute("id", "hole");
game.appendChild(platform);
platform.style.left = random + "px";

//Movement Functions
function movementLeft() {
  var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  if (left > 0) {
    player.style.left = left - 2 + "px";
  }
}

function movementRight() {
  const left = parseInt(
    window.getComputedStyle(player).getPropertyValue("left"));
    if(left<380){
    player.style.left = left + 2 + "px";
   }
}

//Event Listener for motion
document.addEventListener("keydown", (event) => {
  if (both == 0) {
    both++;
    if (event.key === "ArrowLeft") {
      interval = setInterval(movementLeft, 1);
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(movementRight, 1);
    }
  }
});

//Clearing the Event listener
document.addEventListener("keyup", (event) => {
  clearInterval(interval);
  both = 0;
});
