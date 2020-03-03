// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let onLeft, onRight;
let onTop, onBottom;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function currentPosition(){
  if(mouseX>windowWidth/2){
    onLeft=false;
    onRight=true;
  }
  else{
    onLeft=true;
    onRight=false;
  }
  if(mouseY>windowHeight/2){
    onTop=false;
    onBottom=true;
  } 
  else{
    onTop=true;
    onBottom=false;
  }
} 
function rectPosition(){
  if(onLeft&&onTop){
    fill(200,10,50);
    
  }
  else{
    fill(255,255,255);
  }
  rect(0,0,windowWidth/2,windowHeight/2);
  if(onLeft&&onBottom){
    fill(180,200,100);
    rect();
  }
  else{
    fill(255);
  }
  rect(0,windowHeight/2,windowWidth/2,windowHeight/2);
  
  if(onRight&&onTop){
    fill(80,70,200);
  }
  else{
    fill(255);
  }
  rect(windowWidth/2,0,windowWidth/2,windowHeight/2);
  if(onRight&&onBottom){
    fill(10,200,130);
    
  }
  else{
    fill(255);
  }
  rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
}

function blackScreen(){
  if(onLeft&&onTop&&mouseIsPressed){
    fill(0);
    rect(0,0,windowWidth, windowHeight);
  }
}
//function togglingSquare(){
  //if(onRight&&onBottom&&mouseIsPressed){
    //fill(0);
    //fill(255);
    //rect(windowWidth/2,windowHeight/2,windowWidth/2,windowHeight/2);
    
//}
function draw() {
  background(250,250,250);
  currentPosition();
  rectPosition();
  blackScreen();
 // togglingSquare();
}