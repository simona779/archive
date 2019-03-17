PFont font;
PVector pos;
int x= 0;

float colore;
void setup() {
  size(600, 600);
  pos=new PVector(random(width), random(height));
  
  colorMode(HSB);
  
  colore=random(255);
  background(colore, 255, 255);
  font = loadFont("TypewalkMono1915-SemiBold-48.vlw");
  textFont(font);
}


void draw() {
  //text( chars , random(width), random(height));
 textSize(40);
  fill(colore, 255, 255);
}


String[] words = { "amore", "bambila", "canzone", "dottore", "elmo", "fungo", "gatto", "hot-dog", "istrice", "laguna", "malto", "nastro", "opportunità", 
  "palestra", "quadro", "rospo", "stelo", "trauma", "ufo", "violino", "zerbino", "astronomia", "budino", "cervello", "Domodossola", "effimero", "fuga", "giungla", 
  "habitat", "impresa", "lavoro", "meccanico", "nave", "ornitorinco", "prato", "quaderno", "rombo", "stola", "tamburo", "utopia", "verza", "zingara", "arma", "buca", 
  "clima", "dente", "elefante", "flauto", "gavetta", "hostess", "impero", "lombrico", "manto", "nostrano", "oratore", "pane", "quadro", "respiro", "smalto", "terriccio", "uovo",
"vacanza", "zimbello"};

void mousePressed () {  
     background(colore);
    colore=random(255);
    int index = int(random(words.length)); 
    text(words[index], 150, height/2);
};
