/* @author Petrangolini Paolo 
 * @name mouseMoveEx
 * @description simple example of mouse position 
*/


void setup(){
  size(500,500);
}


void mousePressed(){
  background(255);
}

void draw(){
  colorMode(HSB);
  fill(frameCount%255,255,255);
  
  float r=random(20,50);
  
  //draw a circle with a random radius in mouse position 
  ellipse(mouseX,mouseY,r,r);
  
}