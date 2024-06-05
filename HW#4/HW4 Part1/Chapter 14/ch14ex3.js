let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");

let catAngle = 0;
let hatAngle = Math.PI; // Opposite side of the ellipse
let lastTime = null;

function animate(time) {
  if (lastTime != null) {
    let deltaTime = time - lastTime;
    catAngle += deltaTime * 0.001;
    hatAngle += deltaTime * 0.001;
  }
  lastTime = time;

  cat.style.top = Math.sin(catAngle) * 40 + 40 + "px";
  cat.style.left = Math.cos(catAngle) * 200 + 230 + "px";

  hat.style.top = Math.sin(hatAngle) * 40 + 40 + "px";
  hat.style.left = Math.cos(hatAngle) * 200 + 230 + "px";

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
