// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//Diagonal Line art

let gridSpacing = 20;
const PADDING=40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}


function draw() {
  background(220);
  border();


}

function drawGrid() {
  for (let x = gridSpacing / 2+PADDING; x < width-PADDING; x += gridSpacing) {
    for (let y = gridSpacing / 2+PADDING; y < width-PADDING; y += gridSpacing) {
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

function border() {
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(2);
}

