/* Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

// generare numero randomico user
let userNum = prompt("inserisci un numero da 1 a 6.")
console.log(userNum);

// generare numero randomico pc
let pcNum = Math.floor(Math.random() * 5) + 1;
console.log(pcNum);

// stabilire vincitore 
if(userNum > pcNum) {
    console.log("bravo hai vinto :) ");
}else if(userNum < pcNum) {
    console.log("hai perso :(");
}else  {
    console.log("pareggiato :!"); 
}