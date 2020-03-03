// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let length=width/20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function rectGrid() {
  for (let y = length/2; y < height; y += length) {
    for (let x = length/2; x < width; x += length) {
      rect(x, y, length, length);
    }
  }
}

function draw() {
  background(220);
  
  rectGrid();
}
