// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x=0;
let y=0;
function setup() {+
createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220);
  rect(x,y,40,40);
  move();
  
  
}

function move(){
  if(x<windowWidth-40){
    x+=5;
  } else {
    if(y<windowHeight-40){
      y+=5;
    } 
  }
  
  if (x===windowWidth-40 && y===windowHeight-40){
    x -= 5;
  }

  }
}