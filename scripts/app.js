//Variables
var interval;
let both = 0;
const random = Math.floor(Math.random() * 360);
const counter = 0;

//Query Selectors
const player = document.querySelector(".game__player");
const game = document.querySelector(".game");


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

setInterval(function(){
  const platformLast = document.getElementById("block"+(counter-1));
  const holeLast = document.getElementById("hole"+(counter-1));
  if(counter>0){
    const platformLastTop = window.getComputedStyle(platfomrLast).getPropertyValue("top");
    const holeLastTop = window.getComputedStyle(holeLast).getPropertyValue("top");
  };
  
  const platform = document.createElement("div");
  platform.setAttribute("class", "platform");
  platform.setAttribute("id", "platform" + counter);
  game.appendChild(platform);

  const hole = document.createElement("div");
  hole.setAttribute("class", "hole");
  hole.setAttribute("id", "hole" + counter);
  hole.style.left = random + "px";
  game.appendChild(hole);

  counter++
},1)
