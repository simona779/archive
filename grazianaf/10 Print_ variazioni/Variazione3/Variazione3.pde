int larghezza= 16;
int altezza= 16;
int index=0;
float spessore=0.01;
float trasparenza=100;

void setup() {
  size(600, 384);
  background(255);
}

void draw() {
  int x1 = larghezza*index;
  int x2 = x1 + larghezza;
  int y1 = altezza*23;
  int y2 = altezza*24;
  pushMatrix();
  stroke(0, 0, 255, random(-trasparenza, trasparenza));
  strokeWeight(spessore);
  strokeJoin(MITER);
  noFill();
  popMatrix();
  if (random(3) < 1) {

    line(x2, y1, x1, y2);
  } else {

    line(x1, y1, x2, y2);
  }

  index++;
  spessore= spessore+0.02;
  trasparenza= trasparenza+0.02;


  if (index == width/larghezza) {
    PImage p = get(0, altezza, width, altezza*23);
    background(255);
    set(0, 0, p);
    index = 0;
  }
}
