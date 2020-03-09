// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectTime = 100;
let posX = 0;
let rectSpeed = 0.01;
let rectHeight;
let highestPoint = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(220);
  //generateTerrain();
}

function generateTerrain() {
  const RECT_WIDTH = width / 1000;


  for (let i = 0; i < width / RECT_WIDTH; i++) {
    rectSettings();
    rectHeight = map(noise(rectTime), 0, 1, 0, height / 2);

    highestPoint.push(rect(i * RECT_WIDTH - posX, height, i * RECT_WIDTH + RECT_WIDTH - posX, rectHeight));
    rectTime += rectSpeed;
    //if (i < 0) {
    //if (highestPoint[i] < highestPoint[i - 1]) {
    // drawFlag();
    //}
    //}
    //}
  }
}

function rectSettings() {

  noStroke();
  fill(0);


}

function drawFlag() {
  fill(100);
  rect();
  fill(255, 0, 0);
  triangle(x1, y1, x2, y2, x3, y3);
}

function draw() {
  generateTerrain();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    posX -= 5;
  }
}