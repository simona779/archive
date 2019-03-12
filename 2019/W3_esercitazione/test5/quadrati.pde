class quadrati{
  public float colore;
  public PVector pos;
  public float angle;
  public float velGiro;
  public float lato;
  
  quadrati(){
    colore=random(255);
    pos =new PVector(random(width),random(height));
    angle=random(0,TWO_PI);
    velGiro=random(-0.06,0.06);
    lato=random(10,100);
  }
  
  void update(){
      angle+=velGiro;  
  }
  void dysplay(){
    pushMatrix();
      colorMode(HSB);
      rectMode(CENTER);
      
      fill(colore%255,255,255);
      
      translate(pos.x,pos.y);
      rotate(angle);
      
      rect(0,0,lato,lato);
    popMatrix();
  }

}