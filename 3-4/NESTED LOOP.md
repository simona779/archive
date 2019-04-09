let x = 0;
let y = 0;
let spacing = 50;

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(0);
  for (x = 0; x <= width; x += spacing) {
    for (y = 0; y <= height; y += spacing) {
      noFill();
      stroke(random(255), random(255), random(255));
      strokeWeight(5);
      rect(x, y, 50, 50);
      fill(random(255), random(255), random(255));
      ellipse(x + 25, y + 25, 25, 25);
    }
  }

}