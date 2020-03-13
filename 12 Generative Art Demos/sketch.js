//Diagonal Line Ar
const RECT_HEIGHT = 50;
const RECT_WIDTH = 10;
let colours = ["#9AB19A","#D9C1BB","#52584D","#EAD8D0","#120700"];//fil with HEX codes
function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {
  background(220);
  randomSeed(0);
  drawRowRGB(height * 0.2);
  drawRowHSB(height * 0.5);
  drawRowCustom(height*0.8);
}

function drawRowCustom(yPos) {
  colorMode(RGB, 255);
  for (let x = 0; x < width; x += RECT_WIDTH) {
    let index=int(random(colours.length));
    fill(colours[index]);
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }

}

function drawRowHSB(yPos) {
  colorMode(HSB, 360);
  for (let x = 0; x < width; x += RECT_WIDTH) {
    fill(x / 3 % 360, map(mouseY, 0, height, 0, 300), 300);
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
