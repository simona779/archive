let x = 0;
let y = 0;
let spacing = 30;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  stroke(random(255));
  
  strokeWeight(4);
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x += spacing;
  if (x > width) {
    x = 0;
    y += spacing;
  }
 else if (y > height){
   background (random(255), random(255), random(255));
   y = 0;
   x = 0;
 }

}