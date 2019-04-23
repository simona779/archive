
//precarico il font utilizzato
var font1;
var font2;
function preload() {
  font1 = loadFont("Inconsolata-Regular.otf");
}

function setup() {
  createCanvas(500, 500);
  background(255);
  fill(0);
  textFont(font1);
  //chiamo la funzione che genera la poesia
  nuova_poesia();
}

function draw() {
}

//scrivo una funzione che crea la frase scegliendo le parole dagli array
function scegli_parole(parole) {
  var posX= windowWidth/2;
  if (posX > 200) {
    posX = posX - 160;
  }
  
  var a = int(random(parole.length)); 
  text(parole[a], posX, posY+40); 
  //incremento la posizione su x e y per mettere "in colonna le parole"
  posY= posY+30; 
  posX = posX + 20;
 //crea disegno di linee casuale 
  push();
  noFill();
  stroke(220);
  curve(random(posX)+40, random(posX)-20, random(posX)+30,     random(posX)+200, random(posX)+60, random(posX)-80, random(posX)+40, random(posX)*3)
  pop();
}

//funzione che crea la nuova poesia
function nuova_poesia() {
  background(255);
  //interlinea
  posY= 20; 
//Array
  var articoli = [
    "il", "lo", "l'", "i", "gli", "la", "le", "un", "uno", "una", "un' "];
  var pronomi =["mio", "mia", "suo", "sua", "nostro", "nostri", "vostri", "loro"];
  var nomi =["cose", "anno", "uomo", "giorno", "vita", "donna", "momento", "mondo", "caffè", "notte", "luna", "amore", 
    "gente", "amico", "acqua", "guerra", "paese", "storia", "aria", "fuoco", "sera", "ragione", "tempo", "senso", "fiore", 
    "natura", "zona", "questione", "figura", "movimento", "memoria", "sogno", "macchina", 
    "animale", "passione", "destino", "idea"];
  var verbi=["essere", "avere", "dire", "potere", "volere", "sapere", "stare", "dovere", "vedere", 
    "andare", "venire", "dare", "parlare", "trovare", "sentire", "lasciare", "prendere", "guardare", 
    "mettere", "pensare", "passare", "credere", "portare", "parere", "tornare", "sembrare", "tenere", 
    "capire", "morire", "chiamare", "conoscere", "rimanere", "chiedere", "cercare", "entrare", "vivere", "aprire", 
    "uscire", "ricordare", "bisognare", "cominciare", "rispondere", "aspettare", "riuscire", "chiudere", "finire", 
    "arrivare", "scrivere", "diventare", "restare", "seguire", "bastare", "perdere", "rendere", "correre", "salvare", 
    "vestire", "costruire", "camminare", "ritrovare", "durare", "accendere", "evitare", "immaginare", "ridurre", "contenere", 
    "fissare", "costringere", "abbandonare", "attendere", "preferire", "scegliere", "avvertire", "proporre", "temere", 
    "esprimere", "spingere", "salutare", "udire", "difendere", "dirigere", "cantare", "sorgere", "assicurare", "assumere", 
    "tendere", "dividere", "scusare", "mantenere", "ritenere", "concludere", "saltare", "stabilire", "appartenere", 
    "possedere", "risultare", "suonare", "coprire", "insegnare", "affermare", "rivelare", "conservare", "risolvere", 
    "concedere", "limitare", "abitare", "convincere", "comprare", "legare", "sostenere", "nascere", "presentare", "trattare", 
    "piacere", "continuare", "partire", "servire", "giungere", "fermare", "apparire", "amare", "esistere", "intendere", 
    "salire", "mancare", "ridere", "lavorare", "alzare", "riconoscere", "sedere", "leggere", "cadere", "mangiare", 
    "dormire", "raggiungere", "comprendere", "scendere", "compiere", "toccare", "considerare", "muovere", "stringere", "mandare", 
    "domandare", "ascoltare", "decidere", "ricevere", "osservare", "permettere", "avvenire", "spiegare", "raccogliere", "ottenere", 
    "offrire", "mostrare", "accompagnare", "dimenticare", "pregare", "raccontare", "bere", "ritornare", "cambiare", "dimostrare", "sperare", 
    "sposare", "ammettere", "fuggire", "liberare", "riferire", "svegliare", "capitare", "posare", "impedire", "gettare", "vendere", 
    "distinguere", "offendere", "rimettere", "rompere", "godere", "imporre", "significare", "desiderare", "divertire", 
    "volgere", "giudicare", "produrre", "avvicinare", "diffondere", "ordinare", "invitare", "discutere", "sbagliare", "badare", "tagliare", "pubblicare", "attaccare", "imparare", 
    "prevedere", "scappare", "spegnere", "annunciare", "baciare", "esporre", "attraversare", "fornire", "segnare", "superare", 
    "rivedere", "allontanare", "ammazzare", "accogliere", "voltare", "preoccupare", 
    "provocare", "riempire", "partecipare", "piantare", "rientrare", "richiedere", "nascondere", "ripetere", "scoprire", "preparare", 
    "scorrere", "rappresentare", "riprendere", "costituire", "incontrare", "valere", "accorgersi", "provare", "formare", "uccidere", 
    "tirare", "togliere", "notare", "aggiungere", "succedere", "pagare", "tentare", "accadere", "creare", "importare", "pesare", "usare", 
    "accettare", "indicare", "buttare", "battere", "interessare", "sorridere", "condurre", "disporre", "unire", "aiutare", "piangere", "girare", 
    "levare", "soffrire", "recare", "riguardare", "rivolgere", "tacere", "occorrere", "porre", "vincere", "svolgere", "studiare", "crescere", "divenire"];
  var aggettivi = ["bene", "male", "carino", "bello", "appassionato", "triste", "nuovo", "forte", 
    "intelligente", "artificiale", "attento", "schivo", "enorme", "pericoloso", "sicuro", "vivo", "generoso", "numeroso", "inglese", 
    "storico", "fermo", "fiero", "leggero"];
  var punteggiatura = ["...", "?", "!", ".", ",", ";"];

  //formatta la pagina
  push();
  textSize(12);
  translate(-150,0);
  scegli_parole(articoli);
  scegli_parole(pronomi);
  scegli_parole(aggettivi); 
  pop();
  //
  push();
  textSize(40);
  translate(300, -160);
  rotate(PI/2);
  scegli_parole(verbi);
  pop();
  //
  push();
  textSize(120); 
  scegli_parole(punteggiatura); 
  pop();
  //
  push();
  textSize(20);
  translate(0,30); 
  scegli_parole(articoli);
  scegli_parole(nomi);
  scegli_parole(aggettivi);
  scegli_parole(punteggiatura);
  pop();
}
// se clicco compone un'altra poesia
function mousePressed() {
  nuova_poesia();
}
//se premo un pulsante sulla tastiera salva il png della poesia nella cartella dello sketch
function keyPressed() {
  var numero_sogno = int(random(100));
  save("sogno"+numero_sogno+".png");
}
