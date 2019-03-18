
float x=0; //dichiaro variabili
float y=0;

int a = 0; //dichiaro variabili
int b = 0;
//array di parole
String [] d = {"Avaro", 
  "Ambiguo", 
  "Apprezzabile", 
  "Appetibile", 
  "Arrogante", 
  "Adorabile", 
  "Antipatico", 
  "Assordante", 
  "Ammirevole", 
  "Ansimante", 
  "Attraente", 
  "Adattabile", 
  "Apatico", 
  "Artistico", 
  "Asociale", 
  "Affamato", 
  "Accecante", 
  "Amorevole", 
  "Amaro", 
  "Allucinante", 
  "Afrodisiaco", 
  "Azzurro", 
  "Astruso", 
  "Alto", 
  "Abbandonato", 
  "Abusivo", 
  "Accurato", 
  "Abbiente"};
//array parole computer
String [] e = {"Frutto", "Uomo", "Animale","Amico"};

void setup() {
  //size (500, 500);
  fullScreen();
  //set the frame Rate
  frameRate(2);
};

void draw() {  
  for (x=0; x<10; x++) {
    while (x<width) {
      background(#2554C7); //bg
      fill(0);//riempimento
      textSize(80); //grandezza testo
      if (mousePressed) { //se mouse pressed metti testo a 100 e mostrami una parola casuale dell'array d
        textSize(100);
        text((d[b])+" ", width/2-400, 450);//parola casuale da array d
        break;
      };
      text((e[a])+" ", width/2-400, 450); //estrae parole a caso da array e
      x=x+500;
    }
  };
  //numero a caso tra 0 e 4
  a = int(random(0, 4));
  if (mousePressed) { //se click numero a caso tra 0 e 28
    b =int (random(0, 28));
  }
  //Seconda parola bianca che va a random
  textSize(50);
  fill(0, 5);
  fill(255);
  text((d[a]), random(width), random(height/2));
};
