// Use const for variables that won't be reassigned
const floatingImage = document.getElementById("floating-image");
const floatingImage2 = document.getElementById("floating-image-2");

// Define the function to move an image
function moveImage(image) {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  image.style.top = `${y}px`;
  image.style.left = `${x}px`;
}

// Set intervals to move each image
setInterval(() => moveImage(floatingImage), 1000);
setInterval(() => moveImage(floatingImage2), 2000);
