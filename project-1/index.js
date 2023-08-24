/* // block of code that hides the rest of the screens when clicked
const screen1 = document.getElementById("section1");
const screen2 = document.getElementById("section2");
const screen3 = document.getElementById("section3");
const screen4 = document.getElementById("section4");
const screen5 = document.getElementById("section5"); */

// function to each section
document.addEventListener("DOMContentLoaded", function () {
  // start screen
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      document
        .getElementById("section3")
        .scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // difficulty screen
  document.getElementById("easyBtn").addEventListener("click", function () {
    document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
  });
});

 document.addEventListener("DOMContentLoaded", function () { 
  document
    .getElementById("intermediateBtn")
    .addEventListener("click", function () {
      document
        .getElementById("section4")
        .scrollIntoView({ behavior: "smooth" });
    });
}); 

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hardBtn").addEventListener("click", function () {
    document.getElementById("section5").scrollIntoView({ behavior: "smooth" });
  });
}); 

let time = 60; // initial time to countdown from
let score = 0; // score starts at 0 and goes up 1 every click

document.addEventListener("DOMContentLoaded", function () {
  const displayTime = document.querySelector(".time");
  const displayScore = document.querySelector(".score");
  const clicks = document.getElementById("target");
  const alert = document.getElementsByClassName("alert");
  const container = document.getElementById("game-box");

  // display time and score
  displayTime.innerHTML = `time: ${time}`;
  displayScore.textContent = `score: ${score}`;

  // timer countdown
  let timer = setInterval(function () {
    time--; // decrement time remaining
    displayTime.innerHTML = `time: ${time}`;

    if (time === 0) {
      clearInterval(timer); // stop timer
      alert.textContent = `${alert}`;
      gameOver = true;
    }
  }, 1000);

  target.addEventListener("click", () => {
    if (time > 0) {
      // Only allow click when timer is still running
      score++;
      displayScore.innerHTML = `score: ${score}`;
      spawnTarget();
    }
  });

  let gameOver = false;

  // function that spawns a target randomly within my parameters
  function spawnTarget() {
    if (gameOver) {
      target.style.display = "none";
      return;
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const targetWidth = target.offsetWidth;
    const targetHeight = target.offsetHeight;

    target.style.left =
      Math.floor(Math.random() * (containerWidth - targetWidth)) + "px";
    target.style.top =
      Math.floor(Math.random() * (containerHeight - targetHeight)) + "px";
  }
  spawnTarget();

  target.addEventListener("click", () => {
    spawnTarget();
  });
});
