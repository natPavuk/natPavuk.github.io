let xPos, yPos, xDirection, yDirection;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = 200;//x position
  yPos = 300;//y position
  xDirection = random(3, 8);
  yDirection = random(3, 8);
}

function draw() {
  move();
  background(80, 80, 80);
  rect(xPos, yPos, 250, 75);
}
function move() {
  xPos += xDirection; yPos += yDirection;
  if (yPos >= height - 75 || yPos <= 0) {
    // y position is on the top/bottom of the screen, changes direction for y 
    yDirection = yDirection * -1;
  }
  if (xPos >= width - 250 || xPos <= 0) {
    //if x position is on the far right/left,  changes direction for x
    xDirection = xDirection * -1;
  }
}