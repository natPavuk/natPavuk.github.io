let particles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(220);
  particles.push(new particle(width / 2, height / 2, 20));
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
    if (particles[i].isAlive() === false) {
      particles.splice(i, 1);
    }
  }
  // if (particles.length>50){
  //   particles.splice(0,1);
  // }
}

class particle {
  constructor(x, y, s = 20) {
    this.pos = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.s = s;
    this.lifetime = int(random(30, 150));
    this.alive = true;
    this.steps = 0;
    this.rotationSpeed = random(-4, 4);
  }
  isAlive() {
    return this.alive;
  }
  move() {
    this.pos.add(this.velocity);
    this.steps++;
    if (this.steps > this.lifetime) {
      this.alive = false;
    }
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    scale(map(this.steps, 0, this.lifetime, 1, 0));
    rotate(radians(this.steps));
    rect(0, 0, this.s, this.s);
    pop();
  }
}