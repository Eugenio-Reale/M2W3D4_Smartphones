// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
const h1Title = document.getElementById("h1Title");
const footerAddress = document.getElementById("footerAddress");
const tableLinks = document.getElementsByClassName("cardLink");
const cardImages = document.getElementsByClassName("cardImg");
const cardPrice = document.getElementsByClassName("cardPrice");


// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function changeTitle(){
    h1Title.textContent = "Giona' SHOP"
}
changeTitle();

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function changeBackground(){
    document.body.style.backgroundColor = "lightGrey";
}
changeBackground();

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeAddress(){
    footerAddress.textContent = "Via Roma 4, Perugia."
}
changeAddress();

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function addLinkClass(){

   for(let i=0; i < 5; i++){
    tableLinks[i].classList.add("classGreen");
   }

}
addLinkClass();

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function cardImgHide(){

    for(let i=0; i < 5; i++){
        cardImages[i].classList.add("classOpacity");
    }
 
 }
 cardImgHide();

 function cardImgShow(){

    for(let i=0; i < 5; i++){
        cardImages[i].classList.remove("classOpacity");
    }
 
 }
 cardImgShow();
 cardImgHide();

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function randomPriceColor(){

    let randomColor=[0,0,0];
    for(let i=0; i < 3; i++){
        randomColor[i] = Math.floor(Math.random() * 100);  
    }
    var priceColorCss = "color: rgb(" + randomColor[0] + "," + randomColor[1] + "," + randomColor[2] + ");";
    for(let i=0; i < 5; i++){
        cardPrice[i].style.cssText = priceColorCss;
    }
 
 }
 randomPriceColor();





