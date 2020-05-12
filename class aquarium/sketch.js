// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Fish Aquarium Project
let objects = [];
let nextFish;
let fishesLeft = true;
let fishCount = 0;
let pufferFish = true;
let goldFish = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1; i++) {
    objects.push(new GreenFish(random(width), random(height), 100));
  }
}
function draw() {
  drawTank();
  if (fishCount === 2) {
    fishesLeft = false;
  }
  if (fishesLeft) {
    nextFish = int(random(1000));
    if (nextFish < 2 && goldFish) {
      objects.push(new GoldFish(random(width), random(height), 100));
      fishCount++;
      goldFish = false;
    }
    if (nextFish > 990 && pufferFish) {
      objects.push(new PufferFish(random(width), random(height), 100));
      fishCount++
      pufferFish = false;
    }
  }
  for (o of objects) {
    o.display();
    o.move();
  }
}
//Function to render the background of the tank
function drawTank() {
  background(100, 154, 245);  //solid background color
  noStroke();
  fill(220, 195, 100);
  rect(0, height * 0.8, width, height);  //sand bottom
}
/** A super class for animated objects 
    Make sure to implement your class AFTER this one */
class AnimatedObject {
  /** Location fields inherited by all subclass */
  constructor() {
    //you can either use this.x and this.y   or  a vector(pos) to manage location
    this.x = random(width * 0.15, width * 0.85);
    this.y = random(height * 0.35, height * 0.75);
    //As well, you can either use an xSpeed and ySpeed variable or a vel vector
    //to track movement velocity.
    this.xSpeed = 5;
    this.ySpeed = 5;
    /** Size parameter inherited by subclass */
    this.size = 50;
    super.dirX = random(-1, 1);
    super.dirY = random(-1, 1);
    this.decreasing = 0.5;
    this.accelerating = 1.5;
    this.chance;
  }
  display() { }
  move() {
    if (this.x > width - 100 || this.x < 0) {
      this.dirX *= -1;
    }
    if (this.y > height - 100 || this.y < 0) {
      this.dirY *= -1;
    }
    this.chance = int(random(0, 100));
    if (this.chance <= 33) {
      if (this.xSpeed >= 0.2 || this.ySpeed >= 0.2) {
        this.xSpeed *= this.decreasing;
        this.ySpeed *= this.decreasing;
      }
    }
    if (this.chance >= 66) {
      if (this.xSpeed < 8 || this.ySpeed < 8) {
        this.xSpeed *= this.accelerating;
        this.ySpeed *= this.accelerating;
      }
    }
    this.x += this.xSpeed * this.dirX;
    this.y += this.xSpeed * this.dirY;
    if (this.chance > 98) {
      this.dirX *= random(-2,2);
      if (this.chance < 2 || this.chance > 99) {
        this.dirY *= random(-2,2);
      }
    }
  }

  /** Optional Function:
   *  Parameter will store the array of all fish objects, which can be used
   *  for comparison if your fish's behavior should depend on proximity to
   *  other fish.
    */
  compare(objArr) {
    if (objects[0].x <= objects[1].x - 10 || objects[1].x <= objects[0].x - 10 || objects[1].x <= objects[2].x - 10 || objects[2].x <= objects[1].x - 10 || objects[1].x <= objects[2].x - 10 || objects[0].x <= objects[2].x - 10 || objects[2].x <= objects[0].x - 10) {
      this.dirX *= -1
    }
    if (objects[0].y <= objects[1].y - 10 || objects[1].y <= objects[0].y - 10 || objects[1].y <= objects[2].y - 10 || objects[2].y <= objects[1].y - 10 || objects[1].y <= objects[2].y - 10 || objects[0].y <= objects[2].y - 10 || objects[2].y <= objects[0].y - 10) {
      this.dirY *= -1
    }
  }
  getX() { return this.x; }
  getY() { return this.y; }
  getSize() { return this.size; }
  getxSpeed() { return this.xSpeed; }
  getySpeed() { return this.ySpeed; }
}
/*****************************************
Define your Fish class below
please name according to this convention:
Lastname Firstinitial Fish
i.e  for Sebastion Tate:  class TateSFish
******************************************/
class PufferFish extends AnimatedObject {
  constructor(x, y, size) {
    super(x, y, size);
    this.pufferFishImages = [];
    this.pufferFishImages.push(loadImage("assets/pufferfishLeft.png", this.loadedImage()));
    this.pufferFishImages.push(loadImage("assets/pufferfishRight.png", this.loadedImage()));
    this.loadingComplete = false;
    this.loadCounter;
  }
  loadedImage() {
    this.loadCounter++;
    if (this.loadCounter) {
      this.loadingComplete = true;
    }
  }
  display() {
    if (this.dirX < 0) {
      image(this.pufferFishImages[0], this.x, this.y, 100, 100)
    } else { image(this.pufferFishImages[1], this.x, this.y, 100, 100) }
  }
  move() {
    super.move();
  }
}
class GreenFish extends AnimatedObject {
  constructor(x, y, size) {
    super(x, y, size)
    this.greenFishImages = [];
    this.greenFishImages.push(loadImage("assets/greenfishLeft.png", this.loadedImage()));
    this.greenFishImages.push(loadImage("assets/greenfishRight.png", this.loadedImage()));
    this.loadingComplete = false;
    this.loadCounter;
  }
  loadedImage() {
    this.loadCounter++;
    if (this.loadCounter) {
      this.loadingComplete = true;
    }
  }
  display() {
    if (this.dirX < 0) {
      image(this.greenFishImages[0], this.x, this.y, 100, 100)
    } else { image(this.greenFishImages[1], this.x, this.y, 100, 100) }
  }
  move() {
    super.move();
  }
}
class GoldFish extends AnimatedObject {
  constructor(x, y, size) {
    super(x, y, size);
    this.goldFishImages = [];
    this.goldFishImages.push(loadImage("assets/fishL.png", this.loadedImage()));
    this.goldFishImages.push(loadImage("assets/fishR.png", this.loadedImage()));
    this.loadingComplete = false;
    this.loadCounter;
  }
  loadedImage() {
    this.loadCounter++;
    if (this.loadCounter) {
      this.loadingComplete = true;
    }
  }
  display() {
    if (this.dirX < 0) {
      image(this.goldFishImages[0], this.x, this.y, 100, 100)
    } else { image(this.goldFishImages[1], this.x, this.y, 100, 100) }
  }
  move() {
    super.move();
  }
}