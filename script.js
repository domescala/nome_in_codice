var elenco = [  "abitante", "acqua", "aereo", "aeroporto",  	"agosto", "aiuto", "albergo", "albero", "amica", "amore", "andata", "animale", "anno", "appartamento",  	"aprile", "arrivo", "arte", "artista", "attenzione", "auto", "autobus", "autunno", "bacio", "bagno",  	"bambina", "banca", "bar",  	"barista", "bicchiere", "bicicletta", "biglietto", "binario", "birra", "bistecca", "bocca", "borsa", "bottiglia", "bruschetta", "caffè", "caffelatte", "calendario", "camera",  	"cameriera", "camicia", "campagna", "cane",  	"cantante", "canzone", "capello", "capitale",  	"capodanno", "cappuccino", "carabiniere", "carattere", "carne",  	"carnevale", "carta", "casa", "casalinga", "casino", "cassa", "cena", "centro", "chiave", "chiesa", "chilo", "chilometro", "cielo", "cinema",  	"cioccolata", "città", "cognome",  	"colazione", "colore", "coltello", "compleanno", "cornetto", "costo", "cucina",  	"cugina", "cultura", "destra", "dialetto",  	"dicembre",  	"direttore", "discoteca", "doccia", "domanda", "domenica", "donna",  	"dottore", "droga", "entrata", "erba", "errore", "esempio", "est", "estate", "euro", "fame", "famiglia", "fantasia",  	"febbraio", "femmina", "fermata",  	"Ferragosto", "festa",  	"fidanzata",  	"figlia", "film", "finestra", "fiore", "firma", "fiume", "formaggio", "fortuna", "foto", "fratello", "frutta", "fumo", "fuoco", "futuro", "gatto", "gelato", "genitore",  	"gennaio", "gente", "giacca", "giardino", "gioco", "giornale",  	"giornalista", "giorno", "giovedì",  	"giugno", "gruppo", "idea", "immigrato", "immigrazione", "indirizzo", "informazione", "insalata", "insegnante", "inverno", "isola", "istituto", "lago", "latte",  	"lavoratore", "lavoro", "legno", "letto", "libertà", "libro", "lingua",  	"luglio", "luna", "lunedì", "macchina", "madre", "mafia", "mafioso",  	"maggio", "malato", "male", "mamma", "mano", "mare", "marito", "martedì",  	"marzo", "mattina", "medicina", "medico", "mercoledì", "mese", "metallo", "metro", "mezzanotte", "mezzogiorno", "minestra", "minestrone", "minuto", "moda", "moglie", "momento", "mondo", "montagna", "monumento", "muro", "museo", "musica", "naso",  	"Natale", "nave", "nazionalità", "nazione", "ndrangheta", "negozio", "neve",  	"nipote", "noia", "nome",  	"nonna", "nord", "notte",  	"novembre", "numero", "occhio", "olio", "ora", "orecchio", "oro", "orologio", "ospedale",  	"ottobre", "ovest", "padre", "paese", "palazzo", "pallone", "pane", "pantalone", "papà", "parco",  	"parente", "parola",  	"Pasqua", "passeggiata", "pasta", "patata", "paura", "pazzo", "penna", "pepe", "persona", "pesce", "piatto", "piazza", "piede", "pioggia", "pizza", "pizzeria", "politica", "polizia", "poliziotto", "pollo", "pomeriggio", "pomodoro", "ponte", "porta", "porto", "possibilità", "posta", "pranzo", "presidente", "prezzo", "primavera", "problema",  	"professore",  	"ragazza", "re",  	"regista", "religione", "repubblica", "ristorante", "ritorno", "rosa", "sabato", "salame", "sale", "salotto", "scarpa", "scuola", "secolo", "secondo", "sedia", "sera", "sesso", "sete",  	"settembre", "settimana", "sigaretta",  	"signora", "sinistra", "sole", "sonno", "sorella", "spaghetto", "spicciolo", "sport", "stadio", "stagione", "stanza", "stazione", "storia", "strada", "straniero",  	"studente", "sud",  	"suocera", "tavolo", "taxi", "tazza", "teatro", "telefonino", "telefono", "televisione", "tempo", "testa", "tiramisù", "torta", "tortellino", "traffico", "tram", "treno",  	"turista", "università", "uomo", "vacanza", "venerdì", "vestito", "vetro", "via", "viaggio", "villa", "vino", "visto", "vita", "volta",  	"zia", "zucchero"];
var index = 0;
//      set per le parole per le caselle estratte sul tabellone

var parole = new Array(25);
var agenti = new Array(25);
var indici_parole_estratte = new Array();
var set_tabellone = new Set();
var colore = {blue:"#248eff",
    red:"#dc3545",
    black:"#1b1b1b",
    yellow:"wheat",
    white:"white"

}

//      array per le due squadre e per l'assassino 
var red = new Array();
var blue = new Array(); 

for (let index = 0; index < 25; index++) {
    red[index] = 0;
    blue[index] = 0;
    // console.log(index);
    // console.log(red );
    
}


var black;

function estraiParole(){
        // estrazione delle parole dall'elenco (25 parole) che finiscono nel set set_parole
    var set_parole = new Set();

    for (let index = 0; index < 25; index++) {



        var a = Math.floor(Math.random() * elenco.length);

        while(set_parole.has(a)){

            var a = Math.floor(Math.random() * elenco.length);

        }
        set_parole.add(a);
        
        parole[index] = elenco[a];
        indici_parole_estratte[index] = a;
        console.log("a = "+a);

}}

function mostraParole(parole){

    for (let index = 0; index < 25; index++) {

        var posN = "p_pos"+index; // come indice uso i valori dentro la squadra
        const cella = document.getElementById(posN);
        cella.innerHTML = elenco[indici_parole_estratte[index]];
    }
}



    // estrazione delle caselle blu rosse e di quella nera
    // l'estrazione prevede numeri da 0 a 25 che indicano la "coordinata" della casella
// function estraiTabellone(){ 

//     // inizializzo le squadre

//     var set_totale = new Set();
//     // una squadra ha una parola in più dell'altra -> 8 o 9
//     //  creo un array con l'8 e il 9 e li mescolo random
//     var n = moneta(8,9);  
//     // passo il set_totale del tabellone (per evitare le ripetizioni) e il numero di parole da assegnare alla squadra (8 o 9)
//     red = estraiCaselle(set_totale, n[0]);  
//     blue = estraiCaselle(set_totale, n[1]); 
//     black = estraiCaselle(set_totale, 1); // estraggo anche l'assassino che è uno solo
// }

// function estraiCaselle(set_totale, num) { // estraggo le caselle per una squadra o per l'assassino
    

//     var arr_squadra = new Array(num);     // creo un set per la squadra
//     console.log("parte " +num);
//     for (let index = 0; index < num; index++) {
//     console.log("indice = " +index);


//         var a = Math.floor(Math.random() * 25);

//         while(set_totale.has(a)){   // se la casella è già uscita ritento
//            var a = Math.floor(Math.random() * 25); 
//         }
//     console.log("valore uscito" +a);
//         set_totale.add(a);  // aggiorno il tabellone totale e la squadra
//         arr_squadra[a] = true;
//     }
//     return arr_squadra;  // restituisco la squadra


// }

function estraiCaselle() {
    agenti = new Array(25);
    var totale = new Set();
    var col = "nullo";


    for (let index = 0; index < 25; index++) {
        agenti[index] = col;
    }

    var n = moneta(8,9);

    var col = "blue";
    for (let index = 0; index < n[0]; index++) {
        var a = Math.floor(Math.random() * 25);
        while(totale.has(a)){   // se la casella è già uscita ritento
            var a = Math.floor(Math.random() * 25); 
        }
        agenti[a] = col;
        totale.add(a);
    }

    var col = "red";
    for (let index = 0; index < n[1]; index++) {
        var a = Math.floor(Math.random() * 25);
        while(totale.has(a)){   // se la casella è già uscita ritento
            var a = Math.floor(Math.random() * 25); 
        }
        agenti[a] = col;
        totale.add(a);
    }

    var col = "black";
    for (let index = 0; index < 1; index++) {
        var a = Math.floor(Math.random() * 25);
        while(totale.has(a)){   // se la casella è già uscita ritento
            var a = Math.floor(Math.random() * 25); 
        }
        agenti[a] = col;
        totale.add(a);
    }

    return agenti;
}

function moneta(testa, croce) {
    // lancio una moneta e restituisco un array doppio dove il primo valore è quello uscito 
    // serve per mescolare l'ordine di due elementi
    var uscita = [0, 0];

        if (Math.random()>0.5)  {
            // console.log(testa);
            var uscita = [ testa, croce]
            }
        else{
            // console.log(croce);
            var uscita = [croce, testa ]
        }
        return uscita;
}

function creaTabellone() {

        //composizione tabellone
        const tab = document.createElement("TABLE"); 
        document.body.appendChild(tab);
        var i = 0;  
        // creo una tabella 5x5 per ogni riga creo 5 colonne
        for (let index = 0; index < 5; index++) {

            const tr = document.createElement("TR"); 
            document.body.appendChild(tab).appendChild(tr);
            
            for (let index = 0; index < 5; index++) {

                const td = document.createElement("TD");
                const p = document.createElement("P");

                td.id = "td_pos"+i;
                p.id = "p_pos"+i;

                document.body.appendChild(tab).appendChild(tr).appendChild(td).appendChild(p);

                i++;
            }
            
        }
}



// function soluzioneSquadra(squadra, colore) {
//     var posN;

//     for (let index = 0; index < squadra.length; index++) {

//         posN = "td_pos"+squadra[index]; // come indice uso i valori dentro la squadra

//         var cella = document.getElementById(posN);
//         console.log(cella);
//         cella.style.backgroundColor = colore;
        

//     }

// }

// function soluzione() {

//     soluzioneSquadra(blue, colore.blue);
//     soluzioneSquadra(red, colore.red);
//     document.getElementById("td_pos"+black[0]).style.backgroundColor = colore.black;   
//     document.getElementById("td_pos"+black[0]).style.color = "white";   
// }

function soluzione() {
    for (let index = 0; index < agenti.length; index++) {
        document.getElementById("td_pos"+index).style.backgroundColor = colore.yellow;
        document.getElementById("td_pos"+index).style.color = colore.black;

        if (agenti[index] == "red") {

            document.getElementById("td_pos"+index).style.backgroundColor = colore.red; 
        }
        else if(agenti[index] == "blue"){
            document.getElementById("td_pos"+index).style.backgroundColor = colore.blue;
        }
        else if(agenti[index] == "black"){
            document.getElementById("td_pos"+index).style.backgroundColor = colore.black;
            document.getElementById("td_pos"+index).style.color = colore.white;
        }
    
    }
    
    


}
function creaTokenMaster() {

    var token = "";

    for (let index = 0; index < 24; index++) {
        token += agenti[index]+".";

    }   
    token += agenti[24];
    return token;
}
function creaCodicePartita() {

    var token = "";

    for (let index = 0; index < 24; index++) {
        token += indici_parole_estratte[index]+".";
        console.log(indici_parole_estratte[index]);
    }   
    token += indici_parole_estratte[24];
    return token;
}







// function partita() {
    //estraiCaselle();
    creaTabellone();
    estraiParole();
    mostraParole(parole);
    var tokenM = creaTokenMaster();

    var codice_partita = creaCodicePartita();
// }

function settaleparole(codice) {
    for (let index = 0; index < 25; index++) {
        
        var code = codice.split(".");
        parole[index] = elenco[Number[code[index]]];
    }
    mostraParole();
    
}

function convertiTestoinNumero(){
    
}

function VIA() {
    estraiCaselle();
    soluzione();
    
}