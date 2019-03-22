
void setup() {
  size(300, 300);
  background(69);
}

void draw() {
  textSize(40);
  fill(255);
}

String[] words = { "frutto", "pesce", "violino", "cane", "fuoco", "padella", "finestra", "plettro", "penna", "giacca", "coccodrillo", "computer", "tovaglia", 
  "tappeto", "serranda", "film", "sedia", "rotella", "cuffia", "bagnino", "libro", "occhiali", "pantaloni", "portapenne", "orsacchiotto", "scatola", "mare", "terra", 
  "nuvola", "pedana", "bicicletta", "veranda", "balcone", "ciabatte", "cappello", "camicia", "scale", "tana", "talpa", "sfera", "palla", "frisbee", "gelato", "chiave", 
  "stella", "macchina", "edificio", "piastrina", "bolla", "frangia", "trottola" };

void mousePressed () {  
  background(69);
  int index = int(random(words.length));  
  text(words[index], 100, height/2);
}
