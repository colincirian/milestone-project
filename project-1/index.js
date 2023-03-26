// array of circles to "shoot"
const circleArray = ["black-circle", "yellow-circle", "red-circle", "blue-circle", "green-circle"]
// generate a random position for the circle to be placed
const randomPosition = Math.floor(Math.random() * circleArray.length);

/*const element = document.getElementById("#random-position");

// set the maximum x and y coordinates for positioning the element
const maxX = window.innerWidth - element.offsetWidth;
const maxY = window.innerHeight - element.offsetHeight;

// generate random x and y coordinates within the maximum range
const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

// set the element's position to the random coordinates
element.style.left = randomX + "px";
element.style.top = randomY + "px"; */

const btn = document.getElementById('#btn')

document.addEventListener('click', function() {
    console.log("button was clicked!");
});

// get the container and button elements
const myContainer = document.getElementById("myContainer");
const myButton = document.getElementById("myButton");

// add a click event listener to the button
document.addEventListener("click", function() {
  // create a new div element
  const newElement = document.createElement("div");

  // set the class name of the new element
  newElement.className = "new-element";

  // set the position and size of the new element randomly
  const randomX = Math.floor(Math.random() * (myContainer.offsetWidth - 100));
  const randomY = Math.floor(Math.random() * (myContainer.offsetHeight - 100));
  const randomSize = Math.floor(Math.random() * 100) + 50;
  newElement.style.top = randomY + "px";
  newElement.style.left = randomX + "px";
  newElement.style.width = randomSize + "px";
  newElement.style.height = randomSize + "px";

  // set the content of the new element
  newElement.innerHTML = "New Element!";

  // append the new element to the container
  myContainer.appendChild(newElement);
});

  








