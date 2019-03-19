int w = 16;
int h = 16;
int index = 0;
color c = color(random(256), random(256), random(256), 200);

void setup() { 
  size (640, 384);
  background(112, 0, 38);
  strokeWeight(3);
  stroke(224);
  smooth();
}

void draw() {
  //saveFrame("line-######.png");
  int x1 = w*index;
  int x2 = x1 + w;
  int y1 = h*23;
  int y2 = h*24;

  if (random(4) < 2) {
    stroke (c);
    fill(140, 0, 230, 70);
    line(x2, y1, x1, y2);
  } else {
    stroke(20, 0, 50);
    rect(x1, y1, x2, y2);
    fill(125, 0, 250);
    ellipse(70, 70, 90, 90);
    fill(c);
    ellipse(90, 90, 40, 40);
  }



  index++;
  if (index == width/w) {
    PImage p = get(0, h, width, h*23);
    background(112, 0, 38);
    //background(#0000ff);
    set(30, 0, p);
    index = 0;
  }
}
