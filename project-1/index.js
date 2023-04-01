// function to each section
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("section2").scrollIntoView({ behavior: 'smooth' });
  });
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("easyBtn").addEventListener("click", function() {
    document.getElementById("section3").scrollIntoView({ behavior: 'smooth' });
  });
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("intermediateBtn").addEventListener("click", function() {
    document.getElementById("section4").scrollIntoView({ behavior: 'smooth' });
  });
})

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("hardBtn").addEventListener("click", function() {
    document.getElementById("section5").scrollIntoView({ behavior: 'smooth' });
  });
})

document.addEventListener('DOMContentLoaded', function() {
  const homeBtn = document.querySelectorAll(".homeBtn");
  
  homeBtn.forEach(btn => {
    btn.addEventListener("click", function() {
      document.getElementById("section1").scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// Define the square area where the element will spawn
const spawnArea = {
  x: 0, // left boundary
  y: 0, // top boundary
  width: 650, // horizontal size
  height: 650, // vertical size
};

// Set up the random number generator
const random = (min, max) => Math.random() * (max - min) + min;

// Generate random coordinates within the spawn area
const spawnX = random(spawnArea.x, spawnArea.x + spawnArea.width);
const spawnY = random(spawnArea.y, spawnArea.y + spawnArea.height);

// Create the element at the random coordinates
const element = document.createElement("div");
element.style.position = "absolute";
element.style.left = spawnX + "px";
element.style.top = spawnY + "px";
document.body.appendChild(element);
