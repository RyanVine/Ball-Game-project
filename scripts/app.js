//Variables
const interval;
const both = 0;
//Query Selectors
const player = document.querySelector("game__player");

//Movement Functions
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

//Event Listener for motion
document.addEventListener("keydown", event => {
  if (both==0){
    both++;
    if(event.key==="ArrowLeft"){
      interval = setinterval(movementLeft, 1);
    }
      if(event.key==="ArrowRight"){
      interval = setinterval(movementRight, 1);
    }
  }
});

//Clearing the Event listener
document.addEventListener("keyup", event =>{
  clearInterval(interval);
  both = 0;
})