APP Tracking Spese - Pacchetto ufficiale v2

Questa versione corregge il problema su iPhone/Safari in cui una parte del codice JavaScript veniva mostrata come testo.

Caricamento su GitHub:
1. Estrai questo ZIP.
2. Nel repository GitHub carica tutti i file estratti nella root.
3. Conferma il commit.
4. Aspetta il deploy GitHub Pages.

Importante:
- Se avevi già aperto la versione precedente su iPhone, elimina l'icona dalla schermata Home e aggiungila di nuovo.
- Se vedi ancora la vecchia schermata, in Safari cancella i dati del sito github.io o apri il link con ?v=2 alla fine.


Versione v3:
- Aggiunta compatibilità import backup vecchia app Spese 27.
- Legge campi movimenti/categorie e li converte automaticamente in movements/categories.


Versione v4:
- Corretto comportamento iOS: status bar trasparente/estesa come app.
- Migliorata leggibilità della sezione Categorie su iPhone.
- Aggiunte icone Apple Touch anche nella root del progetto, non solo nella cartella icons.
- Icona resa opaca per evitare che iOS mostri la lettera grigia al posto dell'immagine.

Dopo il deploy:
1. Cancella l'icona vecchia dalla Home.
2. Apri Safari e vai al link con ?v=4.
3. Aggiungi di nuovo alla schermata Home.


Versione v42 - OFFLINE FIRST:
- Service worker riscritto in modalità offline-first.
- La PWA salva in cache index.html, manifest, sw.js, README e tutte le icone.
- Navigazione offline protetta: se manca connessione, l'app apre la copia salvata.
- Start URL aggiornato a ./index.html?v=42.
- Aggiunto avviso interno quando il dispositivo passa offline/online.

Uso corretto:
1. Carica tutti i file su GitHub Pages.
2. Apri l'app online almeno una volta con ?v=42.
3. Attendi qualche secondo.
4. Apri l'app dalla schermata Home dell'iPhone.
5. Da quel momento l'app può aprirsi anche senza Wi-Fi o dati mobili.

Nota:
- Gli aggiornamenti futuri richiedono sempre una prima apertura online della nuova versione.
- I dati restano locali sul dispositivo. Esegui spesso Backup Completo JSON.


Versione v49:
- Effetto liquid glass migliorato nella barra di navigazione inferiore.
- Tenendo il dito premuto su un pulsante e trascinando verso un altro, l'anteprima segue il dito e seleziona la sezione solo al rilascio.


Versione v50:
- Effetto liquid glass premium nella barra inferiore.
- Aggiunta lente dinamica con glow cromatico.
- La lente cambia posizione e dimensione mentre trascini il dito tra i pulsanti.
- Selezione confermata solo al rilascio del dito.


Versione v51:
- Corretto artefatto rettangolare visibile durante la pressione/trascinamento della barra liquid glass.
- Durante il drag resta visibile solo la lente premium, con maschera arrotondata.


Versione v52:
- Bloccato menu copia/incolla/selezione testo sulla barra liquid glass.
- Disattivati context menu, selectstart, copy, cut, paste e dragstart sulla navigazione inferiore.
- Disattivato il callout iOS sulla liquid glass.


Versione v54:
- Corretto riquadro Movimenti con maschera arrotondata e anti-spigoli.
- Bloccati zoom, riduzione zoom, pinch, gesture iOS e doppio tap.
- Corretto bug scroll su menu rapido e impostazioni quando la sezione Movimenti era bloccata.
- All'apertura l'app parte sempre dalla Home.


Versione v55:
- Cache reset della v54.
- Confermata base Lorenzo Vizzini.
- Confermata logica periodo con stipendio giorno 27.
- Mantiene bugfix v54: Movimenti arrotondato, zoom bloccato, scroll overlay corretto, apertura sempre Home.
