// Multi-Coloured Grid
// Natalia Pavuk
// February 28th,2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//this variable is going to be used as a measurement for square's size
let gridSpacing; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSpacing= width/20;
}


//function rectGrid() calculates position of squares based of their size and randomizes fill colour 
function rectGrid() {
  sizeChange();
  for (let y = 0; y < height; y += gridSpacing) {
    for (let x = 0; x < width; x += gridSpacing) {
      fill(random(120, 180), random(50, 100), random(0, 10));
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

//This function changes size of a square based of which mouse button was pressed
function sizeChange() {
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      if (gridSpacing >= 1) {
        gridSpacing = gridSpacing/2;
      }
    }
    if (mouseButton === CENTER) {
      gridSpacing = gridSpacing*2;
    }
  }
}

function draw() {
  rectGrid();
  //sizeChange();
}

