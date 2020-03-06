// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let rectHeight;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(220);
  generateTerrain();
}

function generateTerrain() {
  const RECT_WIDTH = width / 1000;
  rectSettings();

  for (let i = 0; i < width / RECT_WIDTH; i++) {
    rectHeight = random(0, height);
    rect(i * RECT_WIDTH, height, i * RECT_WIDTH + RECT_WIDTH, rectHeight);
  }
}

function rectSettings() {
  noStroke();
  fill(0);


}

function draw() {

}


