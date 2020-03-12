//Diagonal Line Ar
const RECT_HEIGHT = 50;
const RECT_WIDTH = 10;
let colours = [];//fil with HEX codes
function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(220);
  randomSeed(0);
  drawRowRGB(height * 0.2);
  drawRowHSB(height * 0.5);
}

function drawRowCustom(){
  colorMode(RGB,255){
    for (let x = 0; x < width; x += RECT_WIDTH) {
      fill();
      rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
    }
  }
}

function drawRowHSB(yPos) {
  colorMode(HSB, 360);
  for (let x = 0; x < width; x += RECT_WIDTH) {
    fill(x / 3 % 360, map(mouseY,0,height,0,300), 300);
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function drawRowRGB(yPos) {
  colorMode(RGB, 255);
  for (let x = 0; x < width; x += RECT_WIDTH) {
    fill(random(255), random(255), random(255));
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function border() {
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(2);
}
