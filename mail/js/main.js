/* Chiedi all’utente la sua email,
 controlla che sia nella lista di chi può accedere,
 stampa un messaggio appropriato sull’esito del controllo. */

//  chiedere all'utente la sua email
let yourMail = prompt("inserisci la tua email:")
console.log(yourMail);

// variabile ospite
let guest = false;

// controllare che sia nella lista
const emailList = ["ciro14@napoli.com", "ziomario6@napoli.com", "lorenzo24@napoli.com"];
console.log(emailList);

// stampa messaggio sull'esito
for(let i = 0; i < emailList.length; i++) {
    if(yourMail === emailList[i]) {
        console.log("Okay sei in lista :)");
        guest = true;
    } 
}

if(guest == false){
    console.log("Mi spiace non sei in lista :(");
}