class Ball {
  float x = 16;
  float y = 16;
  float xspeed = 5;
  float yspeed = 2.5;


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
