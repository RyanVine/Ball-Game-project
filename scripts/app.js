//Query Selectors
const player = document.querySelector("game__player");

//Functions
function movementLeft(){
  let left =
  parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  player.style.left = left + 2 + "px";
}
function movementRight(){
  let left =
  parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  player.style.left = left - 2 + "px";
}

document.addEventListener("keydown", event => {
  if(event.key==="ArrowLeft"){
    interval = setinterval(movementLeft, 1);
  }
  if(event.key==="ArrowRight")
  interval = setinterval(movementLeft, 2);
});