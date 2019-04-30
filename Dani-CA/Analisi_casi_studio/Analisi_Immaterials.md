### Immaterials: Light painting WiFi [+](http://voyoslo.com/projects/immaterials-wifi-light-painting/)
#### _2012, Timo Arnall, Jørn Knutsen and Einar Sneve Martinussen_

![Imgur Image](https://i.imgur.com/bxRB5qNh.jpg)

##### What is

_Immaterials: Light painting WiFi_ è un progetto video-fotografico creato da Timo Arnall, Jorn Knusten e Einar Steve Martinussen all'interno del programma di ricerca [ YOUrban ](http://yourban.no/)della Oslo School of Architecture and Design che mette in relazione social media, design e città.
Il video, vincitore del Vimeo Awards 2012, è una data visualization che mette in mostra la potenza delle reti WiFi in un determinato luogo geografico. 
Il progetto, attraverso la fotografia a lunga esposizione e una barra luminosa, crea degli istogrammi luminosi che racchiudono in un'istantanea la qualità della connettività di un luogo. 

---

##### How it works

![Imgur Image](https://i.imgur.com/5OGPhlrm.png)
![Imgur Image](https://i.imgur.com/1GxMyWZm.png)

Le immagini, e il video che ne consegue, sono fotografie scattate con parametri di esposizione molto alti ed utilizzano la tecnica del light painting per creare visualizzazioni di dati. 
La fonte luminosa in movimento che viene fotografata per "dipingere" con la luce è un’asta alta 4 metri ricoperta con 80 diodi led da 10mm connessi in coppia, collegate ad un Arduino Mega. Il componente principale è il _Roving Network’s RN-131C WiFly module_ progettato da _Sparkfun_, uno shield per Arduino che scansiona l'ambiente ogni 3 secondi alla ricerca di reti WiFi senza però accedervi e accende le luci in base alla potenza del segnale che rileva. 
Prima di arrivare alla scala 1:1 i progettisti hanno realizzato diversi prototipi digitali tramite Processing per visualizzare degli istogrammi 2D utili a definire quale dovesse essere la corretta proporzione tra lunghezza dell'asta e numero di diodi led per giungere poi alla versione definitiva che ha una risoluzione di 40 livelli.

---

##### What does it means


Tra le qualità di uno spazio fisico, sia esso una piazza, un quartiere o una città, non si può tralasciare la sua connettività. 
La potenza e la portata della rete ci offrono molteplici informazioni sull'ambiente in cui questa è installata. Troviamo sicuramente differenze tra piccole reti domestiche e grandi network in parchi o piazze. Le forme architettoniche e il paesaggio urbano modellano il modo in cui le reti si diffondono nella città e la light painting mostra come il comportamento delle reti dipende da dove si trova il trasmettitore e da come viene costruita la città che lo circonda.
Anche se non si riesce a vederlo ad occhio nudo un complesso sistema di reti pervade in maniera capillare i luoghi in cui viviamo, ne delimita le porzioni e li classifica come utilizzabili o meno. Se ad esempio si è in viaggio e ci si trova nella piazza antistante all'hotel in cui si alloggia e quest'ultima è coperta dalla rete WiFi dell'albergo, si può considerarla come un'estensione dello stesso dove potersi rilassare, prendendo un po' di sole e guardando una puntata della serie tv che più ci piace. Ciò modifica completamente la fruizione che si ha delle architetture delle nostre città, creado nuovi spazi di interazione e di armonia, ad esempio un parco che non è servito da reti WiFi diventa un'oasi di tranquillità dove le persone possono rifugiarsi.

---

##### What if

- Se si prendesse in considerazione non solo la potenza della singola rete WiFi ma anche il numero di reti presenti in un territorio a si potrebbe classificare quest'ultimo ed avere poi una mappatura gerarchica delle città in base alle connessioni disponibili. 

- Si potrebbe anche associare al raggio d'azione il numero di utenti connessi alla singola rete WiFi, avendo così una doppia classificazione, che mette in relazione l'inquinamento delle onde radio al loro effettivo utilizzo da parte delle persone che vivono i luoghi in cui queste sono trasmesse.

- Si potrebbe digitalizzare il progetto, anche via app mobile, rendendo disponibile agli utenti una visualizzazione grafica delle reti WiFi presenti nei luoghi che frequentano, togliendo così i limiti spazio-temporali che ha questo lavoro. In questo modo l'analisi della connettività di un luogo diventerebbe una presenza costante nella vita delle persone.
