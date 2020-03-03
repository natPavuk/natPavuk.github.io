// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  print(frameCount);
  backgroundFnx();
  character();

}
function backgroundFnx(){
  background(0,0,0);
  fill(200,200,200);
  castle();
  rect(0, 600, windowWidth,200);
 
}

function mousePressed(){
  if(r===0){ 
    r=255; 
  }else{
  r=0;
  }
}
function character(){
  noStroke();
  fill(250,250,250);
  circle(mouseX,mouseY,60);
  rect(mouseX-30, mouseY,60,30);
  circle(mouseX+20,mouseY+30,20);
  circle(mouseX-20,mouseY+30,20);
  circle(mouseX,mouseY+30,20);
  fill(0,0,0)
  ellipse(mouseX-20,mouseY+5,10,30);
  ellipse(mouseX+10,mouseY+5,10,30);
  ellipse(mouseX-5,mouseY+10,10,5);
}
function castle(){
  strokeWeight(4);
  stroke(51);
  fill(180,180,180);
  rect(windowWidth/2-400,0,800,1000);
  rect(windowWidth/2-600,100,200,500);
  rect(windowWidth/2+300,300,400,600);
}