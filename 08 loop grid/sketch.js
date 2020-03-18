// Multi-Coloured Grid
// Natalia Pavuk
// February 28th,2020
//
// Extra for Experts:


//this variable is going to be used as a measurement for square's size
let gridSpacing; 
let r;
let g;
let b;
let minR, minG, minB;// minimum value for RGB
let maxR, maxG, maxB;//maximum value for RGB


function setup() {
  createCanvas(windowWidth, windowHeight);
  gridSpacing= width/20;//sets squares to fit all types of screen 
}



//function rectGrid() calculates position of squares based of their size and randomizes fill colour 
function rectGrid() {
  sizeChange();
  for (let y = 0; y < height; y += gridSpacing) {//draws grid by y until y=height
    for (let x = 0; x < width; x += gridSpacing) {//draws grid by x until x=width
      if (keyIsPressed === true) {//  new grid colour 
        fill(r =random(minR=random(10, 90),maxR=random(100,190)),g =random(minG=random(10, 50),maxG=random(700,130)),b =random(minB=random(100,  120),maxB=random(150,220)));
      }else{
        fill(random(minR, maxR),random(minG, maxG),random(minB, maxB));
      }
      rect(x, y, gridSpacing, gridSpacing);
    }
  }
}

//This function changes size of a square based of which mouse button was pressed
function sizeChange() {// changes size of the gird's unit  
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {// if left mouse button has been clicked, the size of the grid's unit decreases
      if (gridSpacing >= 1) {
        gridSpacing = gridSpacing/2;
      }
    }
    if (mouseButton === CENTER) {// if central mouse button has been clicked, the size of the grid's unit increases
      gridSpacing = gridSpacing*2;
    }
  }
}

function draw() {//adds grid to the screen
  rectGrid();
  
}

