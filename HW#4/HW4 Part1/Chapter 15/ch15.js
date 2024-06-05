addEventListener("message", (event) => {
  postMessage(event.data * event.data);
});

let squareWorker = new Worker("code/squareworker.js");
squareWorker.addEventListener("message", (event) => {
  console.log("The worker responded:", event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);

let bombTimer = setTimeout(() => {
  console.log("BOOM!");
}, 500);

if (Math.random() < 0.5) {
  // 50% chance
  console.log("Defused.");
  clearTimeout(bombTimer);
}
let ticks = 0;
let clock = setInterval(() => {
  console.log("tick", ticks++);
  if (ticks == 10) {
    clearInterval(clock);
    console.log("stop.");
  }
}, 200);
