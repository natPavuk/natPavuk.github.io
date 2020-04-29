

let movers=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
    for(let i=0; i<300; i++){
      movers.push(new Mover(random(width), random(height)));
    }
}

function draw() {
 
  background(0);
  for(let i=0; i<movers.length; i++){
    movers[i].move();
    movers[i].display();
  }
}


class Mover {
  constructor(x, y) {
    //called once only
    //when an object is made
    this.x = x;
    this.y = y;
    this.xSpeed = 2;
    this.ySpeed = 2;
  }
  //class functions -all the things na object can do
  display() {
    fill(255);
    ellipse(this.x, this.y, 10, 10);
  }
  move(){
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    if(this.x<0||this.x>width) this.xSpeed*=-1;
    if(this.y<0||this.y>height) this.ySpeed*=-1;
  }
}
