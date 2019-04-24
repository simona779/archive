function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 20) {
      if (random(10) > 5) {
        line(x, y, x + 20, y + 20);
      } else {
        line(x, y + 20, x + 20, y);
      }
    }
  }
  noLoop();
}