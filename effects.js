const floatingImage = document.getElementById("floating-image");

function moveFloatingImage() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  floatingImage.style.top = `${y}px`;
  floatingImage.style.left = `${x}px`;
}

setInterval(moveFloatingImage, 1000);

const floatingImage2 = document.getElementById("floating-image-2");

function moveFloatingImage2() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  floatingImage2.style.top = `${y}px`;
  floatingImage2.style.left = `${x}px`;
}

setInterval(moveFloatingImage2, 2000);