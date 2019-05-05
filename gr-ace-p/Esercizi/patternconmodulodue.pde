void setup() {
  size(600, 600);
  background(255);
  smooth();
  stroke(3);
  rectMode(CENTER);
}

void draw() {
  
  frameRate(20);
  //disegno una griglia di cerchi e quadrati la cui dimensione aumenta progressivamente con l'uso di due differenti moduli
  for (int x = 0; x<=width; x+=60) {
    for (int y=0; y<=height; y+=50) { 
    
      if (mouseX>=200) {
        fill( int(random(10, 255)), int(random(100)), int(random(250)), 155); //random color
      } else if (mouseY<=400) {  
        fill(0, int(random(100, 255)), int(random(200, 255)), 20); //random color
      } else { 
        fill( int(random(200, 255)), int(random(100, 255)), int(random(100, 255)), 30); //random color
        //scale (80);
      }
      rect(x, y, frameCount%50, frameCount%50);
      ellipseMode(CORNER);
      ellipse(x, y, frameCount%80, frameCount%80);
    }
  }
}
