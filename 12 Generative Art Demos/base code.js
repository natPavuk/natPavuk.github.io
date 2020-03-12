function setup() {
    createCanvas(windowWidth, windowHeight);


}

function draw() {
    background(220);

    border();
}
function border() {
    strokeWeight(15);
    rect(0, 0, width, height);
    strokeWeight(2);
}
