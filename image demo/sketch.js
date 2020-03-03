// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let movingLeft = true;
let lionL, lionR;
let pinImages = [];
let pinFrame = 0;

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
}

function determineDirection() {
  if (pmouseX < mouseX) {
    movingLeft = false;
  } else if (pmouseX > mouseX) {
    movingLeft = true;
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  frameRate(240);
}

function draw() {

  background(220);
  determineDirection();
  if (keyIsPressed) {
    tint(50, 100, 200);
  }
  else {
    noTint();
  }
  if (movingLeft) {
    image(lionL, mouseX, mouseY, 130, 90);
  }
  else {
    image(lionR, mouseX, mouseY, 130, 90);
  }
  image(pinImages[pinFrame], width / 2, height / 2);
  let speedChange=map(mouseX,0,width,1,4);
  print(speedChange);
  if (frameCount % int(speedChange) === 0) {
    pinFrame++;
    if (pinFrame > 8) {
      pinFrame = 0;
    }
  }

}
