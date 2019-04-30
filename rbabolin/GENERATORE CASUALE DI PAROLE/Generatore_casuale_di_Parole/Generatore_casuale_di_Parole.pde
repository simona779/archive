String [] myWords  = {
  "invisibile", "natura", "creatività", "immaginazione", "invenzione", "disegnare", "progetto"
};
void setup() {
  fullScreen();
  smooth();
  background(0);


  PFont font; 
  {
    font= loadFont("ArialNarrow-Bold-48.vlw");
    textFont(font, 100);
    fill(175, 65, 200);
    text("DSII", 165, 300);
  }
}
void draw() {
  fill(random(255), random(255), random(255));
  text(myWords [ int (random(6))], random(width), random(height) );

  PFont font; 
  {
    font = loadFont ("ArialNarrow-Bold-48.vlw");
    textFont(font, random(10, 20));
  }
}
