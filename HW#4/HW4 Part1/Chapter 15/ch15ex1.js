const balloon = document.getElementById("balloon");
let size = 50; // Initial size in pixels

// Function to update the balloon size
function updateSize() {
  balloon.style.fontSize = size + "px";
}

// Event listener for keydown event
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    size *= 1.1; // Increase size by 10%
    updateSize();
  } else if (event.key === "ArrowDown") {
    size *= 0.9; // Decrease size by 10%
    updateSize();
  }

  // Check if balloon size exceeds a certain threshold for explosion
  if (size > 500) {
    balloon.textContent = "💥"; // Replace balloon with explosion
    document.removeEventListener("keydown", arguments.callee); // Remove event listener
  }
});
