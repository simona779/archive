/* @author Petrangolini Paolo 
 * @name CirclesRideCircle
 * @description simple example of circular movment 
*/


float angle=0;
float angle2=0;

void setup(){

  size(500,500);
  
}

void draw(){

 background(200,0,200);
 
 ellipseMode(RADIUS);
 
 strokeWeight(3);
 stroke(0,200,0);
 fill(0,0,200);

 // move the origin in the middle of the canvas
 translate(width/2,height/2);
 
 //draw my main circle
 ellipse(0,0,150,150);
 
 stroke(200,0,0);
 fill(200,200,0);
 
 
 //draw the first yellow cirlce
 ellipse(165*cos(angle),165*sin(angle),15,15);
 
 stroke(200,0,0);
 fill(200,200,0);
 
 //draw the first yellow cirlce
 ellipse(135*cos(angle2),135*sin(angle2),15,15);
  
 //move yellows cirlces 
 angle+=random(0.01,0.02);
 angle2-=random(0.01,0.02);
  
  
}