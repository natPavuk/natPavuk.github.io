let rectTime = 100;
let posX = 0;
let rectSpeed = 0.01;
let rectHeight;
let highestPoint = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  background(220);
  generateTerrain();
}

function generateTerrain() {
  const RECT_WIDTH = width / 1000;


  for (let i = 0; i < width+posX; i++) {
    rectSettings();
    rectHeight = map(noise(rectTime), 0, 1, 0, height / 2);

    rect(i * RECT_WIDTH - posX, height, i * RECT_WIDTH + RECT_WIDTH - posX, rectHeight);
    rectTime += rectSpeed;
  }

}

function rectSettings() {
  noStroke();
  fill(0);
}

function draw() {
  update();
  background(220);
  generateTerrain();
  
}

function update(){
  posX+=0.1;
  
}