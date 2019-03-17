int w = 15;
int h = 15;
int index = 0;
void setup() {
  size(600, 450);
  background(#ffffff);
  strokeWeight(3);
  stroke(224);
  smooth();
  
}
void draw() {
  int x1 = w*index;
  int x2 = x1 + w;
  int y1 = h*29;
  int y2 = h*30;
  if (random(2) < 1) {
    fill(0,0,255,255);
    line(x2, y1, x1, y2); 
    noStroke();
    fill(255,0,0);
    ellipse(x1,y2-8,5,5);
  
    
  } else {
    stroke(0,0,255,255);
    line(x1, y1, x2, y2);
    
  }
  index++;
  if (index == width/w) {
    PImage p = get(0, h, width, h*29);
    background(#ffffff);
    set(0, 0, p);
    index = 0;
  }
}
