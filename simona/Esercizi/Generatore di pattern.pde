void setup() {

  size(500, 500);
}

void draw() {

  background(0);


  for (int r=0; r<=width; r+=50) {

    for (int c=0; c<=height; c+=50) {
      strokeWeight(2);
      stroke(200);
      noFill();

      ellipse(c, r, (frameCount% 70)* 5, (frameCount% 100) * 5);
    }
  }
}
