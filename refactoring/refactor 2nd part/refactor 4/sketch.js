//Chess Board

//length of square's side
const SIDE_LENGTH=75;

function setup() {
  createCanvas(600, 600);
}
function draw() {
  //draws specified amount of rows 
  for (let rows = 0; rows < 8; rows++) {
    //draws specified amount of columns in one row
    for (let columns = 0; columns < 8; columns++) {
      //if statements specify the colour of a square depending on its row and column
      if (columns % 2 === 0&&rows%2===0) {
        fill(255);
      }
      else if(columns%2===0&&rows%2!==0){
        fill(0);
      }
      else if(columns%2!==0&&rows%2!==0){
        fill(255);
      }
      else if(columns%2!==0&&rows%2===0){
        fill(0);
      }
      //adds a square on the assigned row and column
      rect(SIDE_LENGTH*columns,SIDE_LENGTH*rows,SIDE_LENGTH,SIDE_LENGTH);
    }
  }
}