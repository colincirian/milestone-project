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
  document.querySelector('#start-button').addEventListener('click', function() {
    document.querySelectorAll('.app-screen').forEach(function(el)
  {
      el.classList.add("hide-me");
      el.classList.remove("show-me");
    })
    document.querySelector('#time-screen').classList.add("show-me");
  }) 
}, false);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementByClass('#button-list').addEventListener('click', function() {
    document.querySelectorAll('.app-screen').forEach(function(el)
  {
