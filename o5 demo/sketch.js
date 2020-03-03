// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let keyMap=new Map();
function keyPressed(){
  if(key==="a"){
    keyMap.set("red", 5);
  }if(key==="s"){
    keyMap.set("green", 5);
  }
  if(key==="d"){
    keyMap.set("blue", 5);
  }
  print(keyMap);
}

function renderMap(){
  let count=0;
  for(let item of keyMap){
    //item is a mini arr :[0] is a key [1] is a value
    let x = 50+count*100;


    line(x,height/2,x, height/2-item[1])
    count++;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(25);
}

function draw() {
  renderMap();
}

