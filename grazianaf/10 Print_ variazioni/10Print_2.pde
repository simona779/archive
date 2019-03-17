int w = 16;
int h = 16;
int index = 0;

void setup() {
  size(1200, 600);
  background(0);
  strokeWeight(3);
  stroke(224);
  smooth();
  
}

void draw() {
  int x1 = w*index;
  int x2 = x1 + w;
  
  int y1 = h*23;
  int y2 = h*24;
  
  if (random(1) < 0.5) {
    strokeJoin(BEVEL);
    stroke(255,239,54);
    strokeWeight(4);
    line(x1, y1, x2, y2);
    stroke(#BD2BFC);
    strokeWeight(4);
    line(x2, y2, x1+16*2, y1);
 
   

  } else if(random(3) < 1){
    stroke(#C43584);
    strokeWeight(2);
    line(x2, y2, x1+16*2, y1);
}
  else {
    fill(#FC982B);
    noStroke();
    rect(x1+8, y1+8, w/2,random( h/2));
     stroke(#C43584);
    strokeWeight(1);
     line(x1, y1, x2, y2);
 }
  index++;
  if (index == width/w) {
    PImage p = get(0, h, width, h*23);
    background(0);
    set(0, 0, p);
    index = 0;
  }
}
