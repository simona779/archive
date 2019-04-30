var KEY_URL = "1MEcQb-dm1501sVAgWX6OLd-zBdrGBMOBvhW15rNSjKM";
var url = "https://spreadsheets.google.com/feeds/list/" + KEY_URL + "/od6/public/values?alt=json";

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;

function setup() {

  createCanvas(windowWidth, windowHeight);

  loadJSON(url, Clima);

  colorMode(RGB);
  //rectMode(CENTER);
}


function draw() {

  grid = width / (ogg.length + 1);
  
  //console.log('grid: ' + grid);

  background(0,0, 50);


  for (var i = 0; i < ogg.length; i++) { // (muovi e) mostra tutti gli oggetti
    ogg[i].muovi();
    ogg[i].mostra();
  }
  
  text("DATI : " + ogg.length, 40, 30); // < stampa il numero   oggetti in alto a sx
  //console.log(ogg.length);
}


function Clima(elementi) {
  
  //console.log(url);
  
  console.log(elementi.feed.entry.length); // < debug, numero righe della tabella
  

  for (var i = 0; i < elementi.feed.entry.length; i++) {
    
    //console.log(elementi.feed.entry[i].gsx$id.$t);
    //console.log(elementi.feed.entry[i].gsx$city.$t);
    

    // COSTRUTTORE
    var c = {
      // dati, nomi delle colonne, i parametri
      "id": elementi.feed.entry[i].gsx$id.$t,
      "city": elementi.feed.entry[i].gsx$city.$t,
      "tempmin": elementi.feed.entry[i].gsx$tempmin.$t,
      "tempmax": elementi.feed.entry[i].gsx$tempmax.$t,
      "umidity": elementi.feed.entry[i].gsx$umidity.$t,
      "pression": elementi.feed.entry[i].gsx$pression.$t,
      "forma": elementi.feed.entry[i].gsx$forma.$t
    }

    
    //console.log(c);
      
    // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(c.id, c.city, c.tempmin, c.tempmax, c.umidity, c.pression, c.forma));
  }
}

function Oggetto(_id, _city, _tempmin, _tempmax, _umidity, _pression, _forma) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.city = _city;
  this.tempmin = Number(_tempmin);
  this.tempmax = Number(_tempmax);
  this.umidity = Number(_umidity);
  this.pression = Number(_pression);
  this.forma = _forma;


  this.speed = _pression / 100; //random(-10,10); // < velocità di variazione su asse y
  this.dy = 0; // variazione delta Y relativa al presente, si parte da 0
  this.speedRot = _pression / 100;

  this.muovi = function() {
    // oscilla su asse y, velocità dipende ddalla pressione
    this.dy += this.speed; //random(-10,10);
    if (abs(this.dy) >= height / 2) {
      this.speed *= -1;
    }
  }

  
  //console.log(this.city);
  
  this.mostra = function() {
    
    //console.log(this.city);
    
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    //let r = map(this.tempMax, 8,34,100,255);
    let g = map(this.umidity, 48, 57, 10, 255);
    let b = map(this.pression, 990, 1040, 10, 255);
    let r = map (this.tempmax, 16, 34, 100, 255);
    
    //let b = map(this.pression, 990,1040,100,255);
    //console.log(g);
    
   // fill(r, g, b);

    
    push();
    
    translate(grid + this.id * grid, height / 2 + this.dy);
   // if (ruota) {
   //   rotate(frameCount / this.speedRot);
   // }
    if (this.forma == "cerchio") {
      fill(r, g, b);
      ellipse(0, 0, grid * .9, grid * .9);
    let d = map (this.tempmin, 8, 18, 15,40);  
      fill(0, 0, b);
    ellipse(0, 0, d, d);
      //console.log(this.city);
    }
    
    pop();
    
    noStroke();
    fill(255);
    textAlign(CENTER);
    push();
    translate(grid + (this.id * grid), height / 3);
    rotate(TWO_PI);
    text(this.city, 0, -150);
    pop();

    //text(this.colore,grid + (this.id * grid),height/3);
  } // display()

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}