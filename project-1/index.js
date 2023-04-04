// function to each section
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("start-button")
    .addEventListener("click", function () {
      document
        .getElementById("section2")
        .scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
  const timeDisplay = document.querySelector(".time");
  const alert = document.querySelector("#easy-container");
  let time = 45;
  let score = 0;

  // display time
  timeDisplay.innerHTML = `time: ${time}`;

  // timer countdown
  let timer = setInterval(function () {
    time--; // decrement time remaining
    timeDisplay.innerHTML = `time: ${time}`;

    if (time <= 0) {
      clearInterval(timer); // stop timer
      alert.innerHTML = "GAME OVER!";
    }
  }, 1000); // repeat every 1000ms (1 second)


  const container = document.getElementById("easy-container");
  const target = document.getElementById("target");

  target.style.width = "50px";
  target.style.height = "50px";
  target.style.backgroundColor = "red";
  target.style.position = "absolute";

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
