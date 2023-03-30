function scrollToTarget() {
  const element = document.getElementById("difficulty-screen");
  element.scrollIntoView({ behavior: "instant"});
}

let condition = true;
if(condition) {
  document.getElementById("button1").click();
} else if(condition2) {
  document.getElementById("button2").click(); 
} else() => {
  document.getElementById("button3").click();
}






// start the game
function startGame(){
  playing = true;
  interval = setInterval(decreaseTime, 1000);
  createTarget();
}

function decreaseTime() {
  if(time === 0) {
    console.log("Game Over")
  }
}

function createTarget() {
  if(!playing) {
    return;
  }
  const target = document.createElement("div");
  const size = getRandomNumber(30, 100);
}










/*function createTarget() {
  
// determine random coordinates 
// create target element 
// place target element at coordinates 
// add event listener to new target 
// add set timeout to call this function again in ()s 
setTimeout(createTarget, 2000) 
}

createTarget()

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#start-screen').addEventListener('click', function() {
    document.querySelectorAll('.app-screen').forEach(function(el)
  {
      el.classList.add("hide-me");
      el.classList.remove("show-me");
    })
    document.querySelector('#difficulty-screen').classList.add("show-me");
  }) 
}, false); */


