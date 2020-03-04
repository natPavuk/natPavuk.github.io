// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //describes lines that needed to be created
  lineSettings();
  noStroke();
  fill(0);
  //if mouse cursor is on the top left corner
  if (mouseX < width/2 && mouseY < height/2) {
    rect(0, 0, width/2, height/2);
  }
  //if mouse cursor is on the top right corner
  else if (mouseX >width/2 && mouseY < height/2) {
    rect(width/2, 0, width/2, height/2);
  }
  //if mouse cursor is on the bottom right corner
  else if (mouseX < width/2 && mouseY > height/2) {
    rect(0, height/2, width/2, height/2);
  }
  //if mouse cursor is on the bottom right corner
  else if (mouseX > width/2 && mouseY > height/2) {
    rect(width/2, height/2, width/2, height/2);
  }
}

function lineSettings(){
  stroke(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
}
