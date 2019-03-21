Ball b1;
//Ball b2;

void setup(){
 size (400, 400);
 b1 = new Ball();
// b2 = new Ball();
  
}

void draw(){
background(255);
b1.rimbalza();
b1.contrMargini();
b1.display();
//b2.update();
//b2.checkEdge();
//b2.display();
}
