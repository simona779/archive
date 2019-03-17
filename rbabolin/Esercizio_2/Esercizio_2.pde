float x = 0;
float y = 0;

void setup() {
  size(600, 600);
  background(255);
}

void draw() {
  if (random(1) > 0.5) {
    line(x, y, x+20, y+20);
  } 
  else {
    line(x, y+20, x+20, y);
  }

  x += 20;
  if (x > width) {
    x = 0;
    y += 20;
  }

  if (y > height) {
    background(180);
    x = 0;
    y = 0;
  }

}
