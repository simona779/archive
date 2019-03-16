 int w = 16;
    int h = 16;
    int index = 0;
    void setup() {
      size(640, 384);
      background(#810758);
      
      strokeWeight(3);
      stroke(224);
      smooth();
}
    void draw() {
      int x1 = w*index;
      int x2 = x1 + w;
      int y1 = h*23;
      int y2 = h*24;
      if (random(5) < 4) {
        strokeWeight(2);
        line(x2, y1, x1, y2);
      } else if (random(6) <5) {
        fill(#389AFA);
        stroke(#810758);
        rect(x1, y1, x2, y2);
        strokeWeight(2);
        line(x1, y1, x2, y2);
        
} else {
  strokeWeight(1);
  fill(#1EF7CA);
  ellipse (x1, y1, 9, 9);
      index++;
      if (index == width/w) {
        PImage p = get(0, h, width, h*23);
        background(#810758);
        set(0, 0, p);
        index = 0;
} }}
