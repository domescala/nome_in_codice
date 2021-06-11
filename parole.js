var elenco = [  "abitante", "acqua", "aereo", "aeroporto",  	"agosto", "aiuto", 
"albergo", "albero", "amica", "amore", "andata", "animale", "anno", "appartamento",  	
"aprile", "arrivo", "arte", "artista", "attenzione", "auto", "autobus", "autunno", "bacio", 
"bagno",  	"bambina", "banca", "bar",  	"barista", "bicchiere", "bicicletta", 
"biglietto", "binario", "birra", "bistecca", "bocca", "borsa", "bottiglia", "bruschetta", 
"caffè", "caffelatte", "calendario", "camera",  	"cameriera", "camicia", "campagna", 
"cane",  	"cantante", "canzone", "capello", "capitale",  	"capodanno", "cappuccino", 
"carabiniere", "carattere", "carne",  	"carnevale", "carta", "casa", "casalinga", 
"casino", "cassa", "cena", "centro", "chiave", "chiesa", "chilo", "chilometro", "cielo", 
"cinema",  	"cioccolata", "città", "cognome",  	"colazione", "colore", "coltello", 
"compleanno", "cornetto", "costo", "cucina",  	"cugina", "cultura", "destra", "dialetto",  
	"dicembre",  	"direttore", "discoteca", "doccia", "domanda", "domenica", "donna",  	
"dottore", "droga", "entrata", "erba", "errore", "esempio", "est", "estate", "euro", "fame", 
"famiglia", "fantasia",  	"febbraio", "femmina", "fermata",  	"Ferragosto", "festa",  	
"fidanzata",  	"figlia", "film", "finestra", "fiore", "firma", "fiume", "formaggio", 
"fortuna", "foto", "fratello", "frutta", "fumo", "fuoco", "futuro", "gatto", "gelato", 
"genitore",  	"gennaio", "gente", "giacca", "giardino", "gioco", "giornale",  	
"giornalista", "giorno", "giovedì",  	"giugno", "gruppo", "idea", "immigrato", 
"immigrazione", "indirizzo", "informazione", "insalata", "insegnante", "inverno", "isola", 
"istituto", "lago", "latte",  	"lavoratore", "lavoro", "legno", "letto", "libertà", 
"libro", "lingua",  	"luglio", "luna", "lunedì", "macchina", "madre", "mafia", "mafioso",  
	"maggio", "malato", "male", "mamma", "mano", "mare", "marito", "martedì",  	"marzo", 
"mattina", "medicina", "medico", "mercoledì", "mese", "metallo", "metro", "mezzanotte", 
"mezzogiorno", "minestra", "minestrone", "minuto", "moda", "moglie", "momento", "mondo", 
"montagna", "monumento", "muro", "museo", "musica", "naso",  	"Natale", "nave", 
"nazionalità", "nazione", "ndrangheta", "negozio", "neve",  	"nipote", "noia", "nome",  	
"nonna", "nord", "notte",  	"novembre", "numero", "occhio", "olio", "ora", "orecchio", 
"oro", "orologio", "ospedale",  	"ottobre", "ovest", "padre", "paese", "palazzo", "pallone", 
"pane", "pantalone", "papà", "parco",  	"parente", "parola",  	"Pasqua", "passeggiata", 
"pasta", "patata", "paura", "pazzo", "penna", "pepe", "persona", "pesce", "piatto", 
"piazza", "piede", "pioggia", "pizza", "pizzeria", "politica", "polizia", "poliziotto", 
"pollo", "pomeriggio", "pomodoro", "ponte", "porta", "porto", "possibilità", "posta", 
"pranzo", "presidente", "prezzo", "primavera", "problema",  	"professore",  	"ragazza", 
"re",  	"regista", "religione", "repubblica", "ristorante", "ritorno", "rosa", "sabato", 
"salame", "sale", "salotto", "scarpa", "scuola", "secolo", "secondo", "sedia", "sera", 
 "sete",  	"settembre", "settimana", "sigaretta",  	"signora", "sinistra", 
"sole", "sonno", "sorella", "spaghetto", "spicciolo", "sport", "stadio", "stagione", 
"stanza", "stazione", "storia", "strada", "straniero",  	"studente", "sud",  	
"suocera", "tavolo", "taxi", "tazza", "teatro", "telefonino", "telefono", "televisione", 
"tempo", "testa", "tiramisù", "torta", "tortellino", "traffico", "tram", "treno",  	
"turista", "università", "uomo", "vacanza", "venerdì", "vestito", "vetro", "via", "viaggio", 
"villa", "vino", "visto", "vita", "volta",  	"zia", "zucchero"];

const div0 = document.querySelector("#tabellone");
const div = document.querySelectorAll(".agente");
const p = document.querySelectorAll(".agente p");
const button = document.querySelector("#start");
const doc_link_capitani = document.querySelector("#link_capitani");
const doc_link_agenti = document.querySelector("#link_agenti");
const share = document.querySelector("#share");
const p_condividi = document.querySelector("#share button");
const button_condividi = document.querySelector("#share div");

button_condividi.style.display = "none";

div0.style.display = "none";
button.style.display = "";
share.style.display = "none";

var codice_partita = {parole:"", colori:"", link:""}

const n_parole = 24;
const link_partita = document.URL.split("?")[1];
console.log("a")

function c(t) {
    console.log(t)
}

document.querySelector("#share a").href = document.URL.split("?")[0]