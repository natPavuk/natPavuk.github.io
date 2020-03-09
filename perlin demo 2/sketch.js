// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let redTime;
let redSpeed=0.01;
let offsetAmount=0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //drawCircles();
}

function draw() {
  redTime=10+offsetAmount;
  background(220);
  drawCircles();
  offsetAmount+=0.02;
}

function drawCircles(){
  for(let x=0;x<width;x+=25){
    for(let y=0; y<height; y+=25){
      let r=map(noise(redTime),0,1,0,255);
      fill(r,0,0);
      ellipse(x,y,25,25);
      redTime+=redSpeed;
    }
  }
}
