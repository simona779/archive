class Ball {
  float x;
  float y ;
  float xspeed ;
  float yspeed ;
    Ball(float tempX, float tempY, float xsp, float ysp){
      x = tempX;
      y = tempY;
      xspeed = xsp;
      yspeed = ysp;
    }

  void display() {

    stroke(0);
    fill(127);
    ellipse (x, y, 32, 32);
  }
  void rimbalza() {
    x = x + xspeed;
    y = y + yspeed;
  }

  void contrMargini() {
    if (x > width || x < 0) {
      xspeed = xspeed * -1;
    }
    if (y > height || y < 0) {
      yspeed =  yspeed * -1;
    }
  }
}