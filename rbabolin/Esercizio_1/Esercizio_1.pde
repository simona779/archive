void setup() {
  size(400, 400);
}

void draw() {
  background(255);
  for (float y = 0; y < height; y += 20) {
    for (float x = 0; x < width; x += 20) {
      if (random(1.2) > 0.5) {
        line(x, y, x + 20, y + 20);
      } else {
        line(x, y + 20, x + 20, y);
      }
    }
  }
  noLoop();
}
