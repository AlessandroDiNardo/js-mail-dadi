/* Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

let element = document.getElementById("go");
element = document.addEventListener ("click",
    function(event){
        event.preventDefault()
        // generare numero randomico user
        let userNum = document.getElementById("userNum").value;
        console.log(userNum);
        // generare numero randomico pc
        let pcNum = Math.floor(Math.random() * 5) + 1;
        document.getElementById("pcNum").innerHTML = pcNum;
        console.log(pcNum);

        // stabilire vincitore 
        if(userNum > pcNum) {
            document.getElementById("result").innerHTML = " Bravo hai vinto! :)"
            console.log("bravo hai vinto :) ");
        }else if(userNum < pcNum) {
            document.getElementById("result").innerHTML = " Mi spiace hai perso! :("
            console.log("hai perso :(");
        }else  {
            document.getElementById("result").innerHTML = " Avete pareggiato! :|"
            console.log("pareggiato :!"); 
        }
    }
);

let reset = document.getElementById("reset");
reset = document.addEventListener(`click`, 
    function(){
        document.getElementById("form").reset();
    }
);