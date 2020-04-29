let rectTime = 100;
let tallets;
let tallestX;
let posX = 0;
let rectSpeed = 0.01;
let rectHeight;
let highestPoint = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  //background(220);
  generateTerrain();
  drawFlag()
  //update();
}

function generateTerrain() {
  const RECT_WIDTH = width / 1000;


  for (let i = 0; i < width+posX; i++) {
    rectSettings();
    rectHeight = map(noise(rectTime), 0, 1, 0, height / 2);

    highestPoint.push([i * RECT_WIDTH , height, i * RECT_WIDTH + RECT_WIDTH, rectHeight]);
    rect(highestPoint[i][0],highestPoint[i][1],highestPoint[i][2],highestPoint[i][3]);
    rectTime += rectSpeed;
  }

}

function rectSettings() {
  noStroke();
  fill(0);
}

function draw() {
  update();
 /// background(220);
  //generateTerrain();
  
}

function update(){
  if(keyIsPressed){
  background(220);
  generateTerrain();
  }
  
}
function drawFlag(){
  tallest =0
  for(let i=0; i<highestPoint.length; i++){
    if(tallest>highestPoint[i][3]){
      tallest =highestPoint[i][3]
      tallestX=highestPoint[i][0]
      printb(tallest);
    }
  }
  fill(255,0,0);
  rect(tallestX,tallest,tallestX+2,tallets-10);
}