function scrollToTarget() {
  const element = document.getElementById("difficulty-screen");
  element.scrollIntoView({ behavior: "instant"});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#start-screen').addEventListener('click', function() {
    document.querySelectorAll('.app-screen').forEach(function(el)
  {
      el.classList.add("hide-me");
      el.classList.remove("show-me");
    })
    document.querySelector('#difficulty-screen').classList.add("show-me");
  }) 
}, false);











// get element
let screen = document.getElementById("easy-screen");
// set height and width 
let maxX = window.innerWidth - easy-screen.offsetWidth;
let maxY = window.innerHeight - easy-screen.offsetHeight;
// function that generates random # 
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function moveTarget() {
let randomX = getRandom(0, maxX);
let randomY = getRandom(0, maxY);

target1.style.left = randomX + "px";
target1.style.top = randomY + "px";
}

// set the interval for the target to move every 3 seconds
setInterval(moveTarget, 3000);

























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

createTarget() */


