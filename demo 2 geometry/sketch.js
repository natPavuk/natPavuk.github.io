// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let r=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x=width/2;
  y=height/2;

}

function draw() {
  background(130,120,150);
  character(250,200);
}
function character(x,y){
  fill(255,255,255);
  strokeWeight(3);
  ellipse(x,y,50,50);
  fill(0,150,200);
  ellipse(x-10,y-10,10,10);//left
  ellipse(x+10,y-10,10,10);//right
  
  if(mouseIsPressed){
    fill(0);
    ellipse(x, y+10, 10, 10);
  } else{
    line(x-5,y+10,x+5,y+10);//mouth
  }
}
function keyInput(){
  if(keyCode===LEFT_ARROW){
    x-=10;
  } else if (keyCode===RIGHT_ARROW){
    x-+10;
  }
}
