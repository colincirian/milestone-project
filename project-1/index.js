function createTarget() {
  
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
}, false);


/*const startBtn = document.querySelector("#start-screen"),
  screens = document.querySelector(".app-screen"),
  difficultyList = document.querySelector("#difficulty-screen");

startBtn.addEventListener("click", ()=> {
  screens[0].classList.add("difficulty-screen");
})*/