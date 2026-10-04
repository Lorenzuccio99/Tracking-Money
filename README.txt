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


Versione v56:
- Corretta la larghezza delle barre nella sezione Analisi → Spesa per categoria.
- Ogni barra ora viene calcolata rispetto al budget massimo della propria categoria.
- La correzione si applica a tutte le categorie.
- Le categorie con budget 0 e spesa superiore a 0 risultano completamente fuori budget.


Versione v57:
- Navigazione realmente cache-first: l'app apre prima la copia offline e aggiorna in background.
- Start URL stabile senza query di versione.
- Cache dell'HTML principale obbligatoria e cache delle altre risorse indipendente.
- Un file secondario mancante non annulla più tutta l'installazione offline.
- Registrazione del service worker immediata, senza attendere il caricamento completo della pagina.
- Primo controllo automatico e messaggio “App pronta anche senza connessione”.


Versione v58 - Premium Design:
- Nessuna modifica ai dati, backup, periodi, categorie o flussi funzionali.
- Nuovo visual Liquid Glass più trasparente, card Apple-like e micro-animazioni.
- Grafico mensile ridisegnato con curva smussata, gradienti e scala dinamica.
- Grafico categorie ridisegnato mantenendo la stessa logica budget/spesa.
- Ripple/goccia sui pulsanti e navigazione inferiore più premium.
- Inclusa ANTEPRIMA_LOCALE.html per prototipazione senza GitHub.


Versione v59:
- Nuovo sfondo astratto chiaro e dinamico.
- Reset filtri senza riquadro glass/bianco.
- Header mobile ottimizzato e titolo leggermente ridotto/abbassato.
- Barra liquid glass inferiore più leggibile e definita su iPhone.
- Grafico Uscite mensili: pallini verdi/rossi in base al budget del periodo.
- Pallini con glow dinamico.
- Tooltip a nuvoletta al tap/click con valore, stato budget e budget totale del periodo.


Versione v60:
- Transizioni più iOS-like tra Home, Movimenti, Analisi e Categorie.
- Micro-pressione premium sulle card.
- Grafico Spesa per categoria interattivo con tooltip a nuvoletta.
- Nuova funzione Movimenti → Calcola spese: selezione temporanea delle uscite e totale in-app.
- Nessuna modifica alla struttura dei dati, backup, periodi o formule finanziarie.


Versione v61:
- Nuovo sfondo aurora chiaro con animazioni GPU basate su transform.
- Tooltip dei grafici riallineati usando la posizione reale del canvas dentro il wrapper.
- Freccia della nuvoletta dinamica: punta al pallino anche quando il tooltip viene spostato ai bordi.
- Pallini Uscite mensili animati via CSS/DOM invece di ridisegnare continuamente il canvas.
- Eliminato il loop canvas continuo che ridisegnava il grafico circa 11 volte al secondo.
- Ridotti alcuni blur costosi su iPhone mantenendo l'effetto liquid glass.
- Resize dei grafici debounced.


Versione v62:
- Sfondo light più contrastato e leggermente più scuro rispetto alla v61.
- Mantiene tutti i fix tooltip/performance della v61.


Versione v63:
- Sfondo più scuro soprattutto nella parte alta.
- Movimento dinamico del background durante lo scroll verticale.
- Mantiene i fix grafico/tooltip/performance della v61/v62.


Versione v64:
- Rifinitura soft premium: card più morbide, vetro più fisico e bordi luminosi più sottili.
- Rifinitura Apple glass moderna: più contrasto, soprattutto nella parte alta, mantenendo trasparenza e blur.
- Bottom navigation e controlli glass più leggibili.
- Mantiene lo sfondo dinamico allo scroll introdotto nella v63.
- Nessuna modifica a funzioni, dati o logica finanziaria.
