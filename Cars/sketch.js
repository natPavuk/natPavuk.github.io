
let eastbound = [];
let westbound = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) { //adds 20 cars to each array once programm begins to run
    eastbound.push(new Vehicle(random(width), random(height / 2 + 15, height - 190), 1));
    westbound.push(new Vehicle(random(width), random(height / 5 + 15, height / 2 - 20), -1));
  }
}

function draw() {
  drawRoad();
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }
  for (let z = 0; z < westbound.length; z++) {
    westbound[z].action();
  }
}
function drawRoad() {
  fill(100);
  rect(0, 0, width, height / 6);//sidewalk
  rect(0, height * 5 / 6, width, height / 6);//sidewalk
  fill(200);
  rect(0, height * 1 / 6, width, height * 4 / 6);
  fill(0);
  rect(0, height / 5, width, height / 1.7);
  for (let i = 0; i <= 20; i++) {
    fill(255);
    rect(i * width / 20, height / 2, width / 25, 3);
  }

}
function mouseClicked() {
  if (mouseButton === LEFT) {
    if (keyIsDown(SHIFT)) {//if shift+mouse =>a vehicle willappear in westbound[]
      westbound.push(new Vehicle(width, random(height / 5 + 15, height / 2 - 20), -1));
    } else { eastbound.push(new Vehicle(0, random(height / 2 + 15, height - 190), 1)); }//if only mouse clicked, a vehicle will apper in eastbound[]
  }

}


class Vehicle {//description for every vehicle
  constructor(x, y, dir) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.c = color(random(255), random(255), random(255));
    this.type = int(random(2));//randomly selects type of vehicle 
    this.speed = 3;
    this.decreasing = 0.5;
    this.accelerating = 1.5;
    this.chanceC;//chance for changing color
    this.chanceD;//chance for slowing down
    this.chanceA;//chance for  accelerating
  }
  action() {
    this.display();
    this.motion();
    this.changeColor();
  }
  display() {
    if (this.type === 0) {//if type is =0, the function displays a car
      this.drawCar();
    }
    else if (this.type === 1) {//if type is =1, the function displays a truck
      this.drawTruck();
    }
  }
  drawCar() {
    fill(this.c);//body
    rect(this.x, this.y, 50, 20);
    fill(255);//wheels
    rect(this.x + 5, this.y - 3, 7, 3);
    rect(this.x + 35, this.y - 3, 7, 3);
    rect(this.x + 5, this.y + 20, 7, 3);
    rect(this.x + 35, this.y + 20, 7, 3);
  }
  drawTruck() {
    fill(this.c);
    rect(this.x, this.y, 45, 35)
    rect(this.x - 10, this.y, 20, 35);
  }
  motion() {
    this.chanceD = int(random(100));
    this.chanceA = int(random(100));
    if (this.chanceD === 59) {//if #59 selected a vehicle slows down
      this.slowDown();
    }
    if (this.chanceA === 29) { //if #29 selected a vehicle accelerates
      this.speedUp();
    }
    this.x += this.speed * this.dir;
    if (this.x < -100) this.x += (width + 200);//if a vehicle gets outside of thescreen, it comes back on the other side
    if (this.x > width + 100) this.x -= (width + 200);

  }

  slowDown() {
    this.speed = 3;
    this.speed *= this.decreasing;
  }

  speedUp() {
    this.speed = 3;
    this.speed *= this.accelerating;
  }

  changeColor() {// randomly changes colors
    this.chanceC = int(random(101));
    if (this.chanceC === 21) {
      this.c = color(random(255), random(255), random(255));
      fill(this.c)
    }

  }
}