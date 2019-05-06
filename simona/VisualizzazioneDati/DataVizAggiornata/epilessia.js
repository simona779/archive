var url = "https://spreadsheets.google.com/feeds/list/1mFBaNYYYKBhZd1X0nmMkvNkieb8trFfF4_kV8hx4Wwo/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  // pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  print("libri");
  colorMode(RGB);
  rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc
  background(40);
   
  noStroke();
  fill(255);
  text("Epilessia: le morti diminuite dal 2000 al 2016 nei cerchi,all'interno i casi dell'epilessia in base alla classe sociale.", 320,400);
  textAlign(LEFT);
  

  var padding = width/(dati.length+1);
  
  for (var i = 0; i < dati.length; i++) {
    
    fill(0, 191, 165, 70);
    //strokeWeight(1);
   // stroke(0, 77, 64);
   
   if (dati[i].morti >="150") {
      noStroke();
       translate(100,0);
      ellipse(10, height/2, dati[i].morti*0.5,dati[i].morti*0.5);
     
      
    } else if (dati[i].morti < "150") {
      noStroke();
       translate(100,0);
      ellipse(10, height/2, dati[i].morti*0.5,dati[i].morti*0.5);
    }
    noStroke();
    fill(255);
    textAlign(CENTER);
    text(dati[i].economia,10,height/5);
    
    if (dati[i].casi<="50") {

    //strokeWeight(3);
      noFill();
    stroke(dati[i].casi/0, 90);
    ellipse(10, height/2, dati[i].casi*0.5,dati[i].casi*0.5);
    } else if (dati[i].casi>"50"){
      //strokeWeight(3);
      noFill();
      stroke(dati[i].casi/0, 90);
      ellipse(10, height/2, dati[i].casi*0.5,dati[i].casi*0.5);
    
    }
  
  }
} // draw

function gotSpreadsheet(epilessia) {
  //println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < epilessia.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var dato = {
                  // dati, nomi delle colonne, i parametri
                  "economia": epilessia.feed.entry[i].gsx$economia.$t,
                  "morti": epilessia.feed.entry[i].gsx$morti.$t,
                  "casi": epilessia.feed.entry[i].gsx$casi.$t,
       
              }
              //println(colore); // < debug, verifica oggetto 1x1
    dati.push(dato); // < inserimento nell'array del dato
  }
} // gotSpreadsheet(colori)
