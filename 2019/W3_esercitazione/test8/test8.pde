/* @author Petrangolini Paolo 
 * @name Spitral 
 * @description Simple example on spiral movment 
*/


float angle=0,aInc=0.2;
float r=10,rInc=0.3;
float colore;

void setup(){
  size(500,500);
  ellipseMode(RADIUS);
  colorMode(HSB);
  angle=random(0,TWO_PI);
  stroke(255);
  fill(100);
  background(20);
  r=10;
  colore=random(0,255);
}

void draw(){
  
  translate(width/2,height/2);
  
  fill(colore,255,255);
  ellipse(r*cos(angle),r*sin(angle),5,5);
  
  //spiral movment:increase angle and radius
  angle+=aInc;
  r+=rInc;
  
  //restart the spiral when touchs the edge
  if (r>width/2 || r>height/2){
    r=10;
    aInc=random(-0.8,0.8);
    rInc=random(0.3,0.8); 
    colore=random(0,255);
    fill(colore,255,255);

  }
  
  
}