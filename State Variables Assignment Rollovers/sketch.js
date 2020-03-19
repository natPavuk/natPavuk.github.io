// State Variables Assignment Rollovers
// Natalia Pavuk
// March 18th
//

let onLeft, onRight;//used to identify quadrants 
let onTop, onBottom;
const FADE_SPEED = 4;
let q1Fade = 0;//fade for each quadrant
let q2Fade = 0;
let q3Fade = 0;
let q4Fade = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function currentPosition() {// checking for left or right
  if (mouseX > windowWidth / 2) {
    onLeft = false;
    onRight = true;
  }
  else {
    onLeft = true;
    onRight = false;
  }
  if (mouseY > windowHeight / 2) {// checking for top or bottom
    onTop = false;
    onBottom = true;
  }
  else {
    onTop = true;
    onBottom = false;
  }
}
function rectPosition() {// if the mouse cursor is in q2
  if (onLeft && onTop) {
    fill(187,36,29, q2Fade);
    q2Fade += FADE_SPEED;

  }//if not, the q2 is filled with white
  else {
    fill(255, 255, 255, q2Fade);
    q2Fade = 0;
  }
  rect(0, 0, windowWidth / 2, windowHeight / 2);
  if (onLeft && onBottom) {// if the mouse cursor is in q3
    fill(96,149,153, q3Fade);
    q3Fade += FADE_SPEED
    rect();
  }//if not, the q3 is filled with white
  else {
    fill(255, 255, 255, q3Fade);
    q3Fade = 0;

  }
  rect(0, windowHeight / 2, windowWidth / 2, windowHeight / 2);

  if (onRight && onTop) {// if the mouse cursor is in q1
    fill(48,81,90, q1Fade);
    q1Fade += FADE_SPEED;
  }
  else {//if not, the q1 is filled with white
    fill(255, 255, 255, q1Fade);
    q1Fade = 0;
  }
  rect(windowWidth / 2, 0, windowWidth / 2, windowHeight / 2);
  if (onRight && onBottom) {// if the mouse cursor is in q4
    fill(255,223,184, q4Fade);
    q4Fade += FADE_SPEED;

  }
  else {//if not, the q4 is filled with white
    fill(255,223,184, q4Fade);
    q4Fade = 0;
  }
  rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);
}

function blackScreen() {// if the cursor is clicked & in q2, the sscreen turns black
  if (onLeft && onTop && mouseIsPressed) {
    fill(0);
    rect(0, 0, windowWidth, windowHeight);
  }
}
//function togglingSquare(){
//if(onRight&&onBottom&&mouseIsPressed){
//fill(0);
//fill(255);
//rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);

//}
function draw() {
  background(250, 250, 250);
  currentPosition();
  rectPosition();
  blackScreen();
  // togglingSquare();
}