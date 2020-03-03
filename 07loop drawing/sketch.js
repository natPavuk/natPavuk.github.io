// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function loopDraw() {
  let spacing = map(mouseX, 0, width, 1, 20);
  for (let x = 0; x < width; x += spacing) {
    line(0, 0, x, height / 2);
    line(0, height, x, height / 2);
  }
  for (let x = width; x > 0; x -= spacing) {
    line(width, 0, x, height / 2);
    line(width, height, x, height / 2);
  }
}
function loopDrawTwo(){
  ellipseMode(CENTER);
  let size = map(mouseY,0,height,1,100);
  for(let x = 0; x<width;x+=30){
    for(let y=0;y<height;y+=30){
      fill(random(255),random(255),random(255));
      ellipse(x,y,size,size);
    }
  }
}
function draw() {
  background(220);
   loopDraw();
  loopDrawTwo();
}
