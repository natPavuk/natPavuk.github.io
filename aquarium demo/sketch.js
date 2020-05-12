// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let objects = [];
function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 10; i++) {
    objects.push(new animatedObject(random(width), random(height)));
  }
}


function draw() {
  background(220)
  for (o of objects) {
    o.move();
    o.display();
  }

}

class animatedObject { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.s = 1;
    this.fishImages = [];
    this.loadCounter = 0;
    this.loadingComplete = false;
    this.fishImages.push(loadImage("assets/fishL.png", this.loadedImage()));
    this.fishImages.push(loadImage("assets/fishR.png", this.loadedImage()));
  }
  loadedImage() {
    this.loadCounter++;
    if (this.loadCounter === 2) {
      this.loadingComplete = true;
    }
  }
  move() {
    this.x += (random(-2, 2), random(-2, 2));
  }
  display() {

    if (this.loadingComplete) {
      image(this.fishImages[0], this.x, this.y, 100, 100);

    }
  }
}
class circleJob extends animatedObject {
  constructor(x, y, d) {
    super(x, y);
    this.size = d
  }
  display() {
    strokeWeight(1);
    ellipse(this.x, this.y, this.s, this.s);
  }
}

class LineObject extends animatedObject {
  constructor() {
    super(random(width, random(height)));

  }
  move() {
    super.move();
    this.x += 5
    if (this.x > width) {
      this.x = 0;
    }
  }
  display() {
    if (mouseIsPressed) {
      strokeWeight(10);
    } else {
      strokeWeight(2);
    }
    line(this.x, this.y, this.x + 15, this.y);
  }
}