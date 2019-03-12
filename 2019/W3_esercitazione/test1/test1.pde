/* @author Petrangolini Paolo 
 * @name Circle&Square
 * @description simple example of ellipseMode and rectMode 
*/

void setup(){

  size(500,500);
  //set CENTER ellipse and rectangle
  ellipseMode(CENTER);
  rectMode(CENTER);
  
}

void draw(){

  background(200,0,200);

  
  strokeWeight(3);
  stroke(0,200,0);
  noFill();
  
  //draw a rectangle and a circle in the middle of window
  ellipse(width/2,height/2,300,300);
  rect(width/2,height/2,300,300);
  
}