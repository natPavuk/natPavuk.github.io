// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  push();
  translate(width / 2), height / 2;
  ellipseMode(CENTER);
  strokeWeight(4);
  ellipse(0, 0, width * 0.4, width * 0.4);
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) {
      strokeWeight(4);
      line(width * 0.15, 0, width * 0.19, 0);
      
    }
    else {
      strokeWeight(2);
      line(width * 0.16, 0, width * 0.19, 0);
    }
    rotate(radians(6));
  }
  //draws the second hand
  rotate(radians(-90));
  push();
  stroke(255,0,0);
  strokeWeight(2);
  rotate(radians(frameCount));
  line(0,0,width*0.19,0);
  pop();
  pop();
}

