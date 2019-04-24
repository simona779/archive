Ball b1;
Ball b2;

void setup(){
 size (600, 600);
 b1 = new Ball(16, 16, 5, 2.5);
 b2 = new Ball(20, 20, 10, 4);
  
}

void draw(){
background(255);
b1.rimbalza();
b1.contrMargini();
b1.display();
b2.rimbalza();
b2.contrMargini();
b2.display();
}
