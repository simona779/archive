/* @author Petrangolini Paolo 
 * @name Catch the Circle 
 * @description When you click inside the sphere change color and position 
 */


PVector pos;
float r=100;
float colore;

void setup() {
  size(500, 500);

  pos=new PVector(random(width), random(height));

  ellipseMode(RADIUS);
  colorMode(HSB);
  
  colore=random(255);
  rectMode(RADIUS);
}
//When mouse is pressed change color and posioton of circle
void mousePressed() {

  PVector posMouse=new PVector(mouseX, mouseY); 

  if (PVector.dist(posMouse, pos)<r) {
    pos=new PVector(random(width), random(height));
    colore=random(255);
  }
}

void draw() {
  background(255);

  //draw circle
  fill(colore, 255, 255);
  ellipse(pos.x, pos.y, r, r);

  //draw  text
  textSize(32);
  fill(0);
  text("Click on circle", width/2-120, height/2);
}
