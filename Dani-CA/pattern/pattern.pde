void setup() {
  size(600, 600);
  background(0);
  fill(0);
  smooth();
  strokeWeight(1);
  //noStroke();
  colorMode(HSB);
}

void draw() {
  frameRate(60);
  for (int x = 0; x<=width; x+=300){
    for (int y=0; y<=height; y+=300){ 
      float h = map(mouseX, 0, width, 0, 255);
      float s = map(mouseY, 0, height, 50, 200);
      stroke(h, s, 255); 
      triangle(x, y, frameCount%width, frameCount%height, width, height);
    }
  }
  if (frameCount%width==599) {
      saveFrame("pattern-###.png");      
      noLoop();
    }
}
