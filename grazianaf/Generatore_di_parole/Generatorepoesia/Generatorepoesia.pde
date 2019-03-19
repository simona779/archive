//GENERATORE CASUALE DI PAROLE

//creo variabili per determinare la posizione in cui viene creata la poesia
int posX= width/2;
int posY= height/2;
PFont font1;


void setup() {
  size(500, 500);
  background(#FFFFFF);
  fill(0);
  font1 = createFont("Inconsolata-Regular.ttf", 25);
  textFont(font1);
  nuova_poesia();
}

void draw() {
}

//scrivo una funzione che crea la frase scegliendo le parole dagli array
void scegli_parole(String [] parole) {
  if (posX > 200) {
    posX = posX - 160;
  }
  int a = int(random(parole.length)); 
  text(parole[a], posX, posY); 
  //incremento la posizione su x e y per mettere "in colonna le parole"
  posY= posY+30; 
  posX = posX + 20;
 
}

//compone la poesia
void nuova_poesia() {
  background(255);
  posY= 50;
   //Array
  String[] articoli = {
    "il", "lo", "l'", "i", "gli", "la", "le", "un", "uno", "una", "un' "};
  String [] pronomi ={"mio", "mia", "suo", "sua", "nostro", "nostri", "vostri", "loro"};
  String [] nomi ={"cose", "anno", "uomo", "giorno", "vita", "donna", "momento", "mondo", "caffè", "notte", "luna", "amore", 
    "gente", "amico", "acqua", "guerra", "paese", "storia", "aria", "fuoco", "sera", "ragione", "tempo", "senso", "fiore", 
    "natura", "zona", "questione", "figura", "movimento", "memoria", "sogno", "macchina", 
    "animale", "passione", "destino", "idea"};
  String [] verbi={"essere", "avere", "dire", "potere", "volere", "sapere", "stare", "dovere", "vedere", 
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
    "levare", "soffrire", "recare", "riguardare", "rivolgere", "tacere", "occorrere", "porre", "vincere", "svolgere", "studiare", "crescere", "divenire"};
  String [] aggettivi = {"bene", "male", "carino", "bello", "appassionato", "triste", "nuovo", "forte", 
    "intelligente", "artificiale", "attento", "schivo", "enorme", "pericoloso", "sicuro", "vivo", "generoso", "numeroso", "inglese", 
    "storico", "fermo", "fiero", "leggero"};
  String[] punteggiatura = {"...", "?", "!", ".", ",", ";"};
  
  scegli_parole(articoli);
  scegli_parole(pronomi);
  scegli_parole(aggettivi); 
  scegli_parole(verbi);
  scegli_parole(punteggiatura); 
  scegli_parole(articoli);
  scegli_parole(nomi);
  scegli_parole(aggettivi);
  scegli_parole(punteggiatura);
}

// se clicco compone un'altra poesia
void mousePressed() {
  nuova_poesia();
}

//se premo un pulsante sulla tastiera salva il png della poesia nella cartella dello sketch
void keyPressed() {
  int numero_sogno = int(random(100));
  save("sogno"+numero_sogno+".png");
}
