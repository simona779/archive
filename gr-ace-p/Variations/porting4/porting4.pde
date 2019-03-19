int w = 16;
    int h = 16;
    int index = 0;
    void setup() {
      size(640, 384);
      background(#6ECEFC);
      strokeWeight(2);
      
      smooth();
}
    void draw() {
      int x1 = w*index;
      int x2 = x1 + w;
      int y1 = h*23;
      int y2 = h*24;
      if (random(2) < 1) {
        fill(#F7EA6B);
        stroke(#2D9D08);
        //stroke(#FF08F3);
        strokeWeight(2);
        ellipse(x2, y1, 15, 15);
        noFill();
        strokeWeight(1);
        ellipse(x2, y1, 5, 5);
      } else if (random(7) < 4) {
        strokeWeight(1);
        noFill();
        arc(x1, y1, 14, 14, 0, TWO_PI-PI);
        fill(#2BFF03);
        arc(x1, y1, 7, 7, 0, TWO_PI-PI);
        
} else {
  noFill();
  stroke(#FC0F9A);
  strokeWeight(2);
  //ellipseMode(CORNER);
  ellipse(x1, y1, 18, 18);
  //line(x1, y2, x2, y1);
  noStroke();
  fill(#0E08FC);
  ellipse(x1, y1, 3, 3);
}
      index++;
      if (index == width/w) {
        PImage p = get(0, h, width, h*23);
        background(#6ECEFC);
        set(0, 0, p);
        index = 0;
} }
