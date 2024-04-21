// Use const for variables that won't be reassigned
const floatingImage = document.getElementById("floating-image");
const floatingImage2 = document.getElementById("floating-image-2");

// Define the function to move an image
function moveImage(image) {
  // Use const for variables that won't be reassigned
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random x and y coordinates within the window bounds
  const x = Math.floor(Math.random() * windowWidth);
  const y = Math.floor(Math.random() * windowHeight);

  // Set the image's top and left styles to the new coordinates
  image.style.top = `${y}px`;
  image.style.left = `${x}px`;
}

// Set intervals to move each image
setInterval(() => moveImage(floatingImage), 1000);
setInterval(() => moveImage(floatingImage2), 2000);

