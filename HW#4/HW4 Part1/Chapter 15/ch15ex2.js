const trailCount = 20; // Number of trail elements
const trailElements = []; // Array to store trail elements

// Create trail elements and append them to the body
for (let i = 0; i < trailCount; i++) {
  const trailElement = document.createElement("div");
  trailElement.classList.add("trail");
  document.body.appendChild(trailElement);
  trailElements.push(trailElement);
}

// Function to update trail element positions
function updateTrail(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Update position of each trail element
  for (let i = 0; i < trailCount; i++) {
    // Calculate position offset based on index
    const offset = i * 5;
    // Move the trail element to the mouse position with an offset
    trailElements[i].style.left = mouseX - offset + "px";
    trailElements[i].style.top = mouseY - offset + "px";
  }
}

// Add event listener for mousemove event
document.addEventListener("mousemove", updateTrail);
