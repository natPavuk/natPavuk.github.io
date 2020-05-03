//Natalia Pavuk
//Basic particle system
//May 2nd,2020

let particles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(220);
  particles.push(new particle(mouseX, mouseY, 50));
  for (let i = 0; i < particles.length; i++) { //as every paricle gets created it begins to display and move
    particles[i].move();
    particles[i].display();
    if (particles[i].isAlive() === false) {// if particle is dead, it gets deleted
      particles.splice(i, 1);
    }
  }

}

class particle {
  constructor(x, y, s = 20) {
    this.pos = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(1, 3))//velocity for particles that are falling down
    this.s = s;
    this.lifetime = int(random(30, 150));// how long a particle will last
    this.alive = true;
    this.steps = 0;
    this.gravity = true;//if particles did not reach bottom of the screen 
  }
  isAlive() {
    return this.alive;
  }
  move() {
    if (this.pos.y > height) {
      this.gravity = false;//particle reached bottom of the screen
    }
    if (this.gravity === false) {
      this.velocity = createVector(random(-1, 1), random(-2, -1));//bounces back
    }
    this.pos.add(this.velocity);//adds velocity to particles
    this.steps++;
    if (this.steps > this.lifetime) {
      this.alive = false;
    }
  }
  display() {
    noCursor();
    //For fill function i used this.pos instead of mouse position because than the particles would change colour as they fall and it seems cooler to me 
    fill(map(this.pos.x, 0, width, this.pos.y, 0, height), map(this.pos.y, 0, width, this.pos.x, 0, height), map(this.pos.y, 0, height, this.pos.x, 0, width));
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    scale(map(this.steps, 0, this.lifetime, 1, 0));
    rotate(radians(this.steps));
    rect(0, 0, this.s, this.s);
    pop();
  }
}