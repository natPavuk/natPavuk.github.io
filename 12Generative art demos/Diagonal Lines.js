// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//Diagonal Line art

let GRID_SIZE = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function diagonal(x, y, s, dir) {
  //direction: 0-> ascending, 1 -> descending
  if (dir === 0) {
    line(x - s / 2, y + s / 2, x + s / 2, y - s / 2);

  }
  else {
    line(x - s / 2, y - s / 2, x + s / 2, y + s / 2);
  }
}

function draw() {
  GRID_SIZE=map(mouseX,0,width,3,60);
  randomSeed(1000);
  background(220);
  border();
  //rectMode(CENTER);
  //rect(width / 2, height / 2, GRID_SIZE, GRID_SIZE);
  //diagonal(width/2,height/2, GRID_SIZE,1);
  createTiles();
}

function createTiles() {
  for (let x = GRID_SIZE / 2; x < width; x += GRID_SIZE) {
    for(let y = GRID_SIZE/2; y<height; y+=GRID_SIZE){
      diagonal(x,y,GRID_SIZE,int(random(2)));
    }
  }
}

function border() {
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(2);
}

