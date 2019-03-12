/* @author Petrangolini Paolo 
 * @name Circle&Square
 * @description simple example of ellipseMode and rectMode 
 * with for circle
*/
void setup(){

  size(500,500);
  
}

void draw(){

  background(200,0,200);
  
  rectMode(CORNER);
  ellipseMode(CORNER);
  
  // draw background pattern
  for(int r=0;r<=width;r+=50){
  
    for(int c=0;c<=height;c+=50){
     strokeWeight(3);
     stroke(0,200,0);
     noFill();
  
    ellipse(c,r,50,50);
    rect(c,r,50,50);
  
    }
  }
  
  //draw in the middle of window 
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  strokeWeight(3);
  stroke(0,0,200);
  noFill();
  
  ellipse(width/2,height/2,300,300);
  rect(width/2,height/2,300,300);
  
}
