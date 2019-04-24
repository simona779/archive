//settare la dimensione della grid
let gap = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255)
  stroke(255)
  strokeWeight(3.5);
  for (let x = 0; x <= width; x += gap) {
    for (let y = 0; y <= height; y += gap) {
      if (random(1) < 0.5) {
        line(x, gap + y, gap + x, y);
      } else {
        line(x, y, gap + x, gap + y);
      }
    }
  }
}

function draw() {

}