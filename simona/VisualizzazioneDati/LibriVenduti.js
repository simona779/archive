var url = "https://spreadsheets.google.com/feeds/list/1ikJcDDT3-qyG5UN1o8vqbuYeplrwi5yiVHm7XtBZ0kI/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  // pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  print("libri");
  colorMode(HSB);
  rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc
  background(20,30,79);
  var padding = width/(dati.length+1);
  
  noStroke();
  fill(255);
  text("Cerchi: libri venduti", 60,20);
  textAlign(LEFT);
  
  for (var i = 0; i < dati.length; i++) {
  
   noFill();
   strokeWeight(3);
   stroke(255);
  
   if (dati[i].copie >="125") {
      fill(255,0,39, 0.5);
      ellipse(padding + i * padding, height/2, dati[i].copie*0.5,dati[i].copie*0.5);
      
    } else if (dati[i].copie < "125") {
      fill(255,0,39, 0.25);
      ellipse(padding + i * padding, height/2, dati[i].copie*0.5,dati[i].copie*0.5);
    }
   
   
    
    noStroke();
    fill(255);
    textAlign(CENTER);
    text(dati[i].autori, padding + (i * padding),height/3);
    text(dati[i].autori2, padding + (i * padding),height/4);
    
    noStroke();
    fill(255);
    textAlign(CENTER);
    text(dati[i].provenienza, padding + (i * padding),height-70);
    
     if (dati[i].provenienza =="altro") {
      fill(0, 30, 67, 0.25);
      rect(padding + i * padding, height/1.4, 200,50);
      
    } else if (dati[i].provenienza == "europa") {
      fill(0,70, 10, 0.25);
      rect(padding + i * padding, height/1.4, 200,50);
    }
    
    
     if (dati[i].genere >="thriller") {
      stroke(0, 30, 67);
      line(100, 50, 50,50);
      fill(0, 30, 67);
      noStroke();
      text("Thriller", 70,70);
      
    } else if (dati[i].genere < "romanzo") {
      stroke(20, 40,250);
      line(300, 50, 150,50);
      fill(20, 40,250)
      noStroke();
      text("Romanzo", 175,70);
    }
    
    
     if (dati[i].genere >"fantasy") {
      stroke(0, 30, 67);
      line(450, 50, 350,50);
      fill(0, 30, 67)
      noStroke();
      text("Fantasy", 370,70);
      
    } else if (dati[i].genere <= "drammatico") {
      stroke(20, 40,250);
      line(550, 50, 520,50);
      fill(20, 40,250)
      noStroke();
      text("Drammatico", 550,70);
      
    }
   
    
    
   
    
   
  }
} // draw

function gotSpreadsheet(libri) {
  //println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < libri.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var scrittori = {
                  // dati, nomi delle colonne, i parametri
                  "autori": libri.feed.entry[i].gsx$autori.$t,
                  "copie": libri.feed.entry[i].gsx$copie.$t,
                  "genere": libri.feed.entry[i].gsx$genere.$t,
                  "provenienza": libri.feed.entry[i].gsx$provenienza.$t,
                  "autori2": libri.feed.entry[i].gsx$autori2.$t,
       
              }
              //println(colore); // < debug, verifica oggetto 1x1
    dati.push(scrittori); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
