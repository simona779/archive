/* @author Grazia Pestillo
 * @name porting_prima_prova
 
 // w e h dimensioni quadrato che contiene la singola linea del pattern
int w = 16;
int h = 16;
//punto iniziale dello schermo
int index = 0;
int r = 0;
int g = 0;
int b = 0;

void setup() {
 size(600, 600);
 background(#0000ff);
 strokeWeight(0);
 stroke(214);
 smooth();
}

void draw() {
 int x1 = w*index;
 int x2 = x1 + w;
 int y1 = h;
 int y2 = h+y1;
 
 if (random(5) < 2) {
   ellipseMode(CENTER);
  noFill();
  stroke(random(0,255), random (0,255), random (0,255));
  strokeWeight(4);
 ellipse(300,300,100,100); 
 fill(random(0,255), random (0,255), random (0,255));
 ellipse(300,300,50,50);
 fill(random(0,255), random (0,255), random (0,255));
 } else if (random(12)<8) {
 rect(x1,y1,16,16);
 strokeWeight(2);
 stroke(#0000ff);
 line (x1, y2, x2, y1);
 fill (random(200, 255));
 } else {
   ellipseMode(CORNER);
   ellipse (x1,y1,8,8);
   rect(x2,h-y1,8,8);
 index++;
 if (index == width/w) {
 PImage p = get(0, h, width, h*3);
 background(#0000ff);
 set(0, 0, p);
 index = 0;
 }
}}
