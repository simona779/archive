// Luca Falzone @falzoneluca 
// P5js retrieve data from Google Spreadsheets/JSON & make OOP
// made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//
// se chiamando questo url direttamente nel browser riporta l'errore “Il valore di grid_id non è valido.” provate indicizzando direttamente il primo foglio sostituendo a /od6/ un /1/ quindi la seconda parte diventa + /1/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1YMNCLe8GD6tH8upGLBkQ369g6G_CscCTw6GRyvaEVIg/1/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;


function setup() {
  //pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet);   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);
  
  background(69,6,89);
  text("OBJECTS : " + ogg.length, 50, 20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    ogg[i].muovi();
    ogg[i].mostra();
  }
} // draw()


function gotSpreadsheet(colori) {
  console.log(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < colori.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "colore": colori.feed.entry[i].gsx$colore.$t,
                  "hue": colori.feed.entry[i].gsx$hue.$t,
                  "saturation": colori.feed.entry[i].gsx$saturation.$t,
                  "brightness": colori.feed.entry[i].gsx$brightness.$t,
                  "alpha": colori.feed.entry[i].gsx$alpha.$t,
                  "forma": colori.feed.entry[i].gsx$forma.$t,
      //valori negli ultimi 12 mesi
                  "a":colori.feed.entry[i].gsx$a.$t,
                  "b":colori.feed.entry[i].gsx$b.$t,
                  "c":colori.feed.entry[i].gsx$c.$t,
                  "d":colori.feed.entry[i].gsx$d.$t,
                  "e":colori.feed.entry[i].gsx$e.$t,
                  "f":colori.feed.entry[i].gsx$f.$t,
                  "g":colori.feed.entry[i].gsx$g.$t,
                  "h":colori.feed.entry[i].gsx$h.$t,
                  "i":colori.feed.entry[i].gsx$i.$t,
                  "l":colori.feed.entry[i].gsx$l.$t,
                  "m":colori.feed.entry[i].gsx$m.$t,
                  "n":colori.feed.entry[i].gsx$n.$t,
                  "o":colori.feed.entry[i].gsx$o.$t,

              }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.colore, c.hue, c.saturation, c.brightness, c.alpha, c.forma,c.a,c.b,c.c,c.d,c.e,c.f,c.g,c.h,c.i,c.l,c.m,c.n,c.o));
    
  }
} // gotSpreadsheet(colori)


// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _colore, _hue, _saturation, _brightness, _alpha, _forma,_a,_b,_c,_d,_e,_f,_g,_h,_i,_l,_m,_n,_o) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.colore = _colore;
  this.hue = Number(_hue);
  this.saturation = Number(_saturation);
  this.brightness = Number(_brightness);
  this.alpha = Number(_alpha)/100;
  this.forma = _forma;
  this.a = Number(_a);
  this.b = Number(_b);
  this.c = Number(_c);
  this.d = Number(_d);
  this.e = Number(_e);
  this.f = Number(_f);
  this.g = Number(_g);
  this.h = Number(_h);
  this.i = Number(_i);
  this.l = Number(_l);
  this.m = Number(_m);
  this.n = Number(_n);
  this.o = Number(_o);


  this.speed = 7000/_a;   // Marzo     2018
              //5000/_b;  // Aprile    2018
              //5000/_c;  // Maggio    2018
              //5000/_d;  // Giugno    2018
              //5000/_e;  // Luglio    2018
              //5000/_f;  // Agosto    2018
              //5000/_g;  // Settembre 2018
              //5000/_h;  // Ottobre   2018
              //5000/_i;  // Novembre  2018
              //5000/_l;  // Dicembre  2018
              //5000/_m;  // Gennaio   2019
              //5000/_n;  // Febbraio  2019
              //5000/_o;  // Marzo     2019
  
  
  
  //random(-10,10); // < velocità di variazione su asse 
  this.dy = 0; // variazione delta Y relativa al presente, si parte da 0

  // FUNZIONALITA

  this.muovi = function() {
    // oscilla su asse y, velocità dipende dall'alpha
    this.dy += (this.speed);//random(-10,10);
    if (abs(this.dy) >= height/2) {
      this.speed *= -1;
    }
  } //move();

  this.mostra = function() {
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    fill(this.hue,this.saturation,this.brightness,this.alpha,this.a,this.b,this.c,this.d,this.e,this.f,this.g,this.h,this.i,this.l,this.m,this.n,this.o);
    push();
    
    if (this.forma == "quadrato1") {
      translate(grid + this.id * grid, height/2 + this.dy); 
      rect(0, 0, grid * 0.4, grid * 0.6);
      
    }else if(this.forma == "quadrato2") {
      translate(grid + this.id * grid, height/2 + this.dy);
      rect(0, 0, grid * 0.4, grid * 0.6);

    }else if(this.forma == "quadrato3") {
      translate(grid + this.id * grid, height/2 + this.dy);
      rect(0, 0, grid * 0.4, grid * 0.6 );
      
    }
    pop();
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    push();
    translate(grid + (this.id * grid),height/5);
    text(this.colore,0,0);
    pop();

    //text(this.colore,grid + (this.id * grid),height/3);
  } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
