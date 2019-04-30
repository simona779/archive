/////////////////
// Thaveesap Brachetti  © 2018 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | San Marino, SM | 7.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1OuFjOsDxPfS88QkM_8SMTVmt5TDIuLeaO6pOfIuHxrE/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;


function setup() {
  frameRate(60);
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet); // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width / (ogg.length + 1.5);
  translate(grid - 100, height / 30)
  background(90, 0, 21);
  text("OBJECTS : " + ogg.length, 10, 20); // < stampa il numero oggetti in alto a sx

  for (var i = 0; i < ogg.length; i++) { // (muovi e) mostra tutti gli oggetti
    ogg[i].mostra();
  }
} //draw()///FINQUIOKKKKK


function gotSpreadsheet(datiEgx) {
  console.log(datiEgx.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < datiEgx.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
      // dati, nomi delle colonne, i parametri
      //colore
      "violenzadonne": datiEgx.feed.entry[i].gsx$violenzadonne.$t,
      //hue
      "violenzafisica": datiEgx.feed.entry[i].gsx$violenzafisica.$t,
      //saturation
      "violenzasessuale": datiEgx.feed.entry[i].gsx$violenzasessuale.$t,
      //brightness
      "stupro": datiEgx.feed.entry[i].gsx$stupro.$t,
      "tentatostupro":datiEgx.feed.entry[i].gsx$tentatostupro.$t,

    }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.violenzadonne, c.violenzafisica, c.violenzasessuale, c.stupro, c.tentatostupro));
  }

} // gotSpreadsheet(colori)
////FIN QUI OK

// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _violenzadonne, _violenzafisica, _violenzasessuale, _stupro, _tentatostupro, _italiane, _straniere, _totale) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.violenzadonne = _violenzadonne;
  this.violenzafisica = Number(_violenzafisica);
  this.violenzasessuale = Number(_violenzasessuale);
  this.stupro = Number(_stupro);
  this.tentatostupro = Number(_tentatostupro);
  this.italiane = Number(_italiane);
  this.straniere = Number(_straniere);
  this.totale = Number(_totale);

  // FUNZIONALITA




  this.mostra = function() {
      // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati

      fill(this.violenzadonne, this.violenzafisica, this.violenzasessuale, this.stupro, this.tentatostupro);
      push();
      // translate(grid - 400 + this.id * grid, height / 400)

      //violenzadonne
      translate(grid - 300 + (this.id * grid), height / 80);
      ellipse(100, 200, this.violenzafisica * 5, this.violenzafisica * 5);
      ellipse(100, 350, this.violenzasessuale* 5, this.violenzasessuale* 5);
      ellipse(100, 500, this.stupro* 5, this.stupro* 5);
      ellipse(100, 650, this.tentatostupro* 5, this.tentatostupro* 5);

      console.log(this.violenzasessuale);
      //



      //tentatostupro
      //




      pop();
      noStroke();
      fill(255);
      textAlign(LEFT, CENTER);
      push();
      //translate(grid + (this.id * grid), height / 4);
      textSize(15);
      textStyle(BOLD);
      // text(this.stupro, 0, 0);
      pop();


      /*RIAPRI
            //fill(50,10,40);
            fill(194, 68, 96);
            rect(15, this.violenzafisica / 2, 10, this.violenzafisica); //grid * 1.2 ultimi due parametri

            //fill(50,80,120);
            fill(21, 43, 96);
            rect(-15, this.violenzasessuale / 2, 10, this.violenzasessuale);


            //// TESTO ISTOGRAMMA
            fill(255);
            textAlign(LEFT, CENTER);
            text(this.italiane + " " + "Italiane", 40, 30);
            fill(194, 68, 96);
            text(this.straniere + " " + "Straniere", 40, 50);
            fill(21, 43, 96);
            text(this.totale + " " + "Totale", 40, 10);
            rotate(PI / 2);


            grid * 1.2



            ///ANNNO
            pop();
            noStroke();
            fill(255);
            textAlign(LEFT, CENTER);
            push();
            translate(grid - 50 + (this.id * grid), height / 4);
            rotate(PI / 2);
            textSize(15);
            textStyle(BOLD);
            text(this.violenzadonne, 0, 0);
            pop();
      */
      //text(this.anno,grid + (this.id * grid),height/3);
    } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
