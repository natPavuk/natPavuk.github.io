//Black and White Target

const CIRCLE_CENTER = 200;
const MAX_RADIUS = 400;
//Used to describe the difference between previous and current circle
const DIFFERENCE_IN_RADIUS = 40;
function setup() {
  createCanvas(400, 400);
}
//draws all circles
function draw() {
  background(240);
  //specifies radius for each circle depending on its number
  for (let number = 0; number < 9; number++) {
    ellipse(CIRCLE_CENTER, CIRCLE_CENTER, MAX_RADIUS - DIFFERENCE_IN_RADIUS * number, MAX_RADIUS - DIFFERENCE_IN_RADIUS * number);
  }

}