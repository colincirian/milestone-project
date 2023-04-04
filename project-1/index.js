// block of code that hides the rest of the screens when clicked
const screen1 = document.getElementById("section1");
const screen2 = document.getElementById("section2");
const screen3 = document.getElementById("section3");
const screen4 = document.getElementById("section4");
const screen5 = document.getElementById("section5");

// function to each section
document.addEventListener("DOMContentLoaded", function () { // start screen
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      document
        .getElementById("section2")
        .scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () { // difficulty screen
  document.getElementById("easyBtn").addEventListener("click", function () {
    document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
    // show section 2
    screen2.classList.add("active");
    // hide the rest
    screen1.classList.remove("active");
    screen3.classList.remove("active");
    screen4.classList.remove("active");
    screen5.classList.remove("active");
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

document.addEventListener("DOMContentLoaded", function () {
  const homeBtn = document.querySelectorAll(".homeBtn");

  homeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .getElementById("section1")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
});

// function that makes the element disappear when clicked
document.addEventListener("DOMContentLoaded", function () {
  const displayTime = document.querySelector(".time");
  const displayScore = document.querySelector(".score");
  const alert = document.querySelector("#easy-container");
  let time = 60;
  let score = 0;

  // display time and score
  displayTime.innerHTML = `time: ${time}`;
  displayScore.innerHTML = `score: ${score}`;

  // timer countdown
  let timer = setInterval(function () {
    time--; // decrement time remaining
    displayTime.innerHTML = `time: ${time}`;

    const clicks = document.getElementById("target");
    clicks.addEventListener("click", function () {
      score++;
      console.log(`score: ${score}`);
    });

    if (time <= 0) {
      clearInterval(timer); // stop timer
      alert.innerHTML = "GAME OVER!";
    }
  }, 1000); // repeat every 1000ms (1 second)

  const container = document.getElementById("easy-container");
  const target = document.getElementById("target");

  container.appendChild(target);

  // function that spawns target randomly
  function spawnTarget() {
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
