var colori_agenti = coloriRandom(9,8);
var parole = serieRandom(n_parole, elenco.length)
// button.addEventListener("click", buttonStart);
p_condividi.addEventListener("click", shareboxtog);

codificaPartita(parole, colori_agenti)
// il tasto start apre direttamente il link di invito
document.querySelector("#start a").href = document.URL.split("?")[0] + "?" + codice_partita.link

function serieRandom(tot,range) {//restituisce "tot" numeri random non ripetuti in un "range"
    var set = new Set()
    var lista_n = new Array()
    for (let i = 0; i < tot; i++) {
        var n = Math.floor(Math.random() * range);
        while(set.has(n)){
            n = Math.floor(Math.random() * range)
        }
        set.add(n);
        lista_n.push(n);      
    }
    return lista_n
}

function assegnaParole() {

    var lista = parole;
    for (let i = 0; i < p.length; i++) {
        p[i].innerHTML = elenco[lista[i]]
        
    }

}

function coloriRandom(a,b) {
    //"a" per i rossi "b" per i blu
    var agenti = serieRandom(18,n_parole);
    var rossi = agenti.slice(0,a);
    var blu = agenti.slice(a,b+a);
    var nero = agenti[a+b];

    return {rossi:rossi, blu:blu, nero:nero}
}

function switchColor() {
    var t = this;
    var c = this.className;

    if(!c.includes("passante")){//ordine delle classi nel css: .passante, .blu, .rosso, .nero
        t.classList.add("passante")
        t.classList.add("filter")
    }
    else if(!c.includes("blu")){
        t.classList.add("blu")
    }
    else if(!c.includes("red")){
        t.classList.add("red")
    }
    else{
        t.className = "agente"
    }

  
    console.log(t.className)
   

}
function barrato() {
    this.classList.toggle("barrato")
}

function mostraSoluzione() {//solo per i capi
    let c = colori_agenti

    div.forEach(e => {e.className = "agente passante"}); //prima assegno a tutti il giallo

    c.blu.forEach(ea => {div[ea].classList.add("blu")});
    c.rossi.forEach(e => {div[e].classList.add("red")});
    div[c.nero].classList.add("nero")

}

function codificaPartita() {
    let l = parole;
    let c = colori_agenti
    let a = ""
    for (let i = 0; i < l.length; i++) {
        a  = a + "." + l[i].toString(20)
    }
    codice_partita.parole = a
    codice_partita.link = a + "and"
    a = "col"
    for (let i = 0; i < c.rossi.length; i++) {
        a  = a + "." + c.rossi[i].toString(20)
    }
    a = a + "col"
    for (let i = 0; i < c.blu.length; i++) {
        a  = a + "." + c.blu[i].toString(20)
    }
    a  = a + "col" + c.nero.toString(20)

    codice_partita.colori = a

    codice_partita.link += a
}
function decodificaPartita(l) {

    let cod_parole = l.split("and")[0].split(".")

    let cod_rosso ;
    let cod_blu ;
    let cod_nero ;

    if(l.split("and")[1]){
        let colore = l.split("and")[1].split("col")
        cod_rosso = colore[1].split(".")
        cod_blu = colore[2].split(".")
        cod_nero = colore[3]
        c(colore)

        for (let i = 0; i < colori_agenti.rossi.length; i++) {
            colori_agenti.rossi[i] = parseInt( cod_rosso[i+1], 20)
        }
        for (let i = 0; i < colori_agenti.blu.length; i++) {
            colori_agenti.blu[i] = parseInt( cod_blu[i+1], 20)
        }
    
        colori_agenti.nero = parseInt(cod_nero, 20)
    }


    for (let i = 0; i < parole.length; i++) {
        parole[i] = parseInt( cod_parole[i+1], 20)
    }

    c(colori_agenti)
   

}

function setupCapi() {
    div.forEach(e => {e.addEventListener("click", barrato)});
    mostraSoluzione();

}
function setupAgenti() {
    div.forEach(e => {e.addEventListener("click", switchColor)});
    doc_link_capitani.style.display = "none";
}

function gameStart() {
    div0.style.display = "";
    assegnaParole();
    
}

if (link_partita) {

}
// function buttonStart(){
//     div0.style.display = "";
//     share.style.display = "";

//     doc_link_capitani.href = document.URL.split("?")[0] + "?" + codice_partita.link
//     doc_link_agenti.href = document.URL.split("?")[0] + "?" + codice_partita.parole

//     button.style.display = "none";
//     c("si")
//     setupCapi();
//     assegnaParole();
// }

function shareboxtog(){
    
    if(button_condividi.style.display == "none"){
        button_condividi.style.display = "";

    }
    else{
        button_condividi.style.display = "none";

    }

}