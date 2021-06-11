if (link_partita) {
    c("ciao")
    decodificaPartita(link_partita);
    gameStart();
    codificaPartita();
    doc_link_capitani.href = document.URL.split("?")[0] + "?" + codice_partita.link;
    doc_link_agenti.href = document.URL.split("?")[0] + "?" + codice_partita.parole;


    button.style.display = "none";
    share.style.display = "";



    if (link_partita.includes("and")) {
        setupCapi();
    }
    else{
        setupAgenti();  
        
    }
}
