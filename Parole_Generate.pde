float x=0; 
float y=0;

int a = 0; 
int b = 0;
//array
String [] d = {"agitato", 
  "suono", 
  "voci", 
  "umidita", 
  "luce", 
  "interno", 
  "abito", 
  "invisibille", 
  "interno", 
  "vento", 
  "chi", 
  "police", 
  "mano", 
  "traccia", 
  "machina", 
  "gatto", 
  "cane", 
  "elevare", 
  "energico", 
  "mio", 
  "misura", 
  "moderno", 
  "ricco", 
  "ricerca", 
  "treno", 
  "triste", 
  "troppo", 
  "genera"};
//parole computer
String [] e = {"persona", "mobile", "astronauta"};

void setup() {
  //size (500, 500);
  fullScreen();
  //set the frame Rate
  frameRate(3);
};

void draw() {  
  for (x=0; x<10; x++) {
    while (x<width) {
      background(#fff8dc); 
      fill(23, 45, 67);
      textSize(40); 
      if (mousePressed) { 
        textSize(100);
        text((d[b])+" ", width/2-400, 450);
        break;
      };
      text((e[a])+" ", width/2-400, 450); 
      x=x+500;
    }
  };
  //numero a caso tra 0 e 3
  a = int(random(0, 3));
  if (mousePressed) { //click numero a caso tra 0 e 28
    b =int (random(0, 28));
  }
  //frase con movimento random per l'altezza dello schermo
  textSize(50);
  fill(#8b0000);
  fill(#8b0000);
  text((d[a]), (width/2), random(height));
};