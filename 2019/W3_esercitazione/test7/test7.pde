/* @author Petrangolini Paolo 
 * @name Noised Circle 
 * @description When you move the mouse chenge color and noise of circle
 */


float r=100;
float colore;
float angle=0;

void setup() {
  size(500, 500);

  colorMode(HSB);
  colore=random(255);
}


void draw() {
  background(0);
  float colore=map(mouseY, 0, height, 0, 255);

  stroke(200);
  fill(colore, 255, 255);

  translate(width/2, height/2);

  float rmax=map(mouseX, 0, width, 100, 300);

  //draw my circle
  beginShape();
  for (float i=0; i<TWO_PI; i+=0.1) {

    //each point has a ransom radius  
    r=random(100, rmax);
    vertex(r*cos(i), r*sin(i));
  }

  endShape(CLOSE);
}
