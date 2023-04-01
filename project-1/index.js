 function scrollToTarget() {
  const element = document.getElementById("difficulty-screen");
  element.scrollIntoView({ behavior: "smooth"});
}

function scrollToTarget() {
  const easy = document.getElementById("");
  easy.scrollIntoView({ behavior: "smooth"});
}

function scrollToTarget() {
  const intermediate = document.getElementById("intermediate-screen");
  intermediate.scrollIntoView({ behavior: "smooth"});
}

function scrollToTarget() {
  const element = document.getElementById("hard-screen");
  element.scrollIntoView({ behavior: "smooth"});
}


















/*

function showEasy() {
  document.getElementById("difficulty-screen").style.display = "none";
  document.getElementById("easy-screen").style.display = "block";
  document.getElementById("intermediate-screen").style.display = "none";
  document.getElementById("hard-screen").style.display = "none";
}

function showIntermediate() {
  document.getElementById("difficulty-screen").style.display = "none";
  document.getElementById("easy-screen").style.display = "none";
  document.getElementById("intermediate-screen").style.display = "block";
  document.getElementById("hard-screen").style.display = "none";
}

function showHard() {
  document.getElementById("difficulty-screen").style.display = "none";
  document.getElementById("easy-screen").style.display = "none";
  document.getElementById("intermediate-screen").style.display = "none";
  document.getElementById("hard-screen").style.display = "block";
}

document.querySelector("#button1").addEventListener("click", showEasy);
document.querySelector("#button2").addEventListener("click", showIntermediate);
document.querySelector("#button3").addEventListener("click", showHard);





/*
// get element
let screen = document.getElementById("");
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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});