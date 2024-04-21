// Use const for variables that won't be reassigned
const floatingImage = document.getElementById("floating-image");
const floatingImage2 = document.getElementById("floating-image-2");

// Define the function to move an image
function moveImage(image) {
  // Use const for variables that won't be reassigned
  const windowWidth = window.innerWidth; // Get the width of the browser window
  const windowHeight = window.innerHeight; // Get the height of the browser window

  // Generate random x and y coordinates within the window bounds
  const x = Math.floor(Math.random() * windowWidth); // Generate a random x coordinate
  const y = Math.floor(Math.random() * windowHeight); // Generate a random y coordinate

  // Set the image's top and left styles to the new coordinates
  image.style.top = `${y}px`; // Set the top style of the image
  image.style.left = `${x}px`; // Set the left style of the image
}

// Set intervals to move each image
setInterval(() => moveImage(floatingImage), 1000); // Move the first image every 1000ms (1 second)
setInterval(() => moveImage(floatingImage2), 2000); // Move the second image every 2000ms (2 seconds)
